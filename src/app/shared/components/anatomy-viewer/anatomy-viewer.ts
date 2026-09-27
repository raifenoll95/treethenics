import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { input } from '@angular/core';

import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';

import { ANATOMY_MUSCLE_MAP } from './anatomy-muscle-map';

@Component({
  selector: 'app-anatomy-viewer',
  imports: [],
  templateUrl: './anatomy-viewer.html',
  styleUrl: './anatomy-viewer.css',
})
export class AnatomyViewer implements AfterViewInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  readonly primaryMuscles = input<ExerciseMuscle[]>([]);
  readonly secondaryMuscles = input<ExerciseMuscle[]>([]);

  @ViewChild('canvasContainer', { static: true })
  private canvasContainer!: ElementRef<HTMLDivElement>;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private model?: THREE.Group;

  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;

  private readonly clock = new THREE.Clock();
  private destroyed = false;

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initializeScene();
  }

  private initializeScene(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const container = this.canvasContainer.nativeElement;

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      35,
      width / height,
      0.01,
      1000,
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.renderer.setClearColor(0x000000, 0);

    const pixelRatio =
      window.innerWidth <= 768
        ? 1
        : Math.min(window.devicePixelRatio, 1.5);

    this.renderer.setPixelRatio(pixelRatio);

    this.renderer.setSize(width, height);

    container.appendChild(this.renderer.domElement);

    // Iluminación principal: cálida y suave.

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      0.65,
    );

    this.scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(
      0xffeee4,
      1.7,
    );

    frontLight.position.set(3, 5, 6);

    this.scene.add(frontLight);

    // Luz lateral: ayuda a distinguir el volumen muscular.

    const sideLight = new THREE.DirectionalLight(
      0xffffff,
      0.75,
    );

    sideLight.position.set(-4, 2, 3);

    this.scene.add(sideLight);

    // Luz posterior: separa la silueta del fondo oscuro.

    const backLight = new THREE.DirectionalLight(
      0xc8d8ff,
      0.9,
    );

    backLight.position.set(-3, 3, -5);

    this.scene.add(backLight);

    // Cargar el modelo anatómico.

    this.loadAnatomyModel();

    // Adaptación al tamaño de la tarjeta.

    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
    });

    this.resizeObserver.observe(container);
  }

  private loadAnatomyModel(): void {
    const loader = new GLTFLoader();

    loader.load(
      '/models/anatomy/anatomy.glb',

      (gltf) => {
        // Evitar añadir el modelo si el usuario ya salió
        // de la página mientras se descargaba.

        if (this.destroyed || !this.scene) {
          this.disposeObject(gltf.scene);
          return;
        }

        // Grupo exterior: lo utilizaremos para centrar y girar el cuerpo.
        const rotationGroup = new THREE.Group();

        // Modelo original.
        const anatomy = gltf.scene;
        this.applyMuscleColors(anatomy);

        //anatomy.traverse((object) => {
        //if (!(object instanceof THREE.Mesh)) {
          //return;
        //}

        //object.material = new THREE.MeshStandardMaterial({
          //color: 0xb9c1cb,
          //roughness: 0.82,
          //metalness: 0,
          //side: THREE.DoubleSide,
        //});
      //});

        // El archivo viene con la altura del cuerpo en el eje Z.
        anatomy.rotation.x = -Math.PI / 2;

        // Añadimos el modelo al grupo ANTES de calcular sus dimensiones.
        rotationGroup.add(anatomy);

        // Calculamos el tamaño del cuerpo ya orientado.
        const boundingBox = new THREE.Box3().setFromObject(
          rotationGroup,
        );

        const center = boundingBox.getCenter(
          new THREE.Vector3(),
        );

        const size = boundingBox.getSize(
          new THREE.Vector3(),
        );

        console.log('ANATOMY SIZE', size.toArray());

        // Centramos el cuerpo desplazando el grupo exterior.
        // Así evitamos desplazar el modelo en sus ejes locales rotados.
        const desiredHeight = 3.5;
        const scale = desiredHeight / size.y;

        // Centramos el cuerpo en coordenadas del grupo exterior.
        // Al tener anatomy.rotation.x aplicada, desplazar anatomy.position
        // directamente puede dar un centrado incorrecto.
        rotationGroup.scale.setScalar(scale);
        rotationGroup.position.copy(center).multiplyScalar(-scale);

        // Guardamos el grupo que girará en la animación.
        this.model = rotationGroup;

        this.scene.add(this.model);

        // Ajustar la cámara al modelo.

        this.fitCameraToModel();

        this.clock.start();
        this.animate();

        console.log(
          'Modelo anatómico cargado correctamente.',
        );
      },

      undefined,

      (error) => {
        console.error(
          'Error al cargar anatomy.glb:',
          error,
        );
      },
    );
  }

  private fitCameraToModel(): void {
    if (!this.model || !this.camera) {
      return;
    }

    const boundingBox = new THREE.Box3().setFromObject(
      this.model,
    );

    const size = boundingBox.getSize(
      new THREE.Vector3(),
    );

    const container = this.canvasContainer.nativeElement;

    const aspect =
      Math.max(container.clientWidth, 1) /
      Math.max(container.clientHeight, 1);

    const verticalFov = THREE.MathUtils.degToRad(
      this.camera.fov,
    );

    const horizontalFov =
      2 *
      Math.atan(
        Math.tan(verticalFov / 2) * aspect,
      );

    // Usamos la anchura máxima del modelo durante su giro:
    // puede mostrar tanto su parte frontal como su perfil.

    const horizontalSize = Math.max(size.x, size.z);

    const distanceForHeight =
      size.y / (2 * Math.tan(verticalFov / 2));

    const distanceForWidth =
      horizontalSize / (2 * Math.tan(horizontalFov / 2));

    const distance =
      Math.max(distanceForHeight, distanceForWidth) * 1.12;

    this.camera.position.set(0, 0, distance);

    this.camera.lookAt(0, 0, 0);

    this.camera.updateProjectionMatrix();
  }

  private animate = (): void => {
    if (this.destroyed) {
      return;
    }

    this.animationFrameId = requestAnimationFrame(
      this.animate,
    );

    const delta = this.clock.getDelta();

    if (this.model) {
      // Rotación continua, independiente de los FPS.

      this.model.rotation.y += delta * 0.35;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(
        this.scene,
        this.camera,
      );
    }
  };

  private resize(): void {
    if (!this.renderer || !this.camera) {
      return;
    }

    const container = this.canvasContainer.nativeElement;

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) {
      return;
    }

    this.camera.aspect = width / height;

    this.renderer.setSize(width, height);

    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    this.renderer.toneMappingExposure = 1.05;

    if (this.model) {
      this.fitCameraToModel();
    } else {
      this.camera.updateProjectionMatrix();
    }
  }

  private disposeObject(object: THREE.Object3D): void {
    object.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      child.geometry.dispose();

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((material) => {
        material.dispose();
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;

    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.resizeObserver?.disconnect();

    if (this.model) {
      this.disposeObject(this.model);
    }

    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }

  private getMuscleColor(meshName: string): number {
    const normalizedName = meshName.toLowerCase();

    const isPrimary = this.primaryMuscles().some((muscle) =>
      ANATOMY_MUSCLE_MAP[muscle].some((name) =>
        normalizedName.includes(name),
      ),
    );

    if (isPrimary) {
      return 0xf43f5e;
    }

    const isSecondary = this.secondaryMuscles().some((muscle) =>
      ANATOMY_MUSCLE_MAP[muscle].some((name) =>
        normalizedName.includes(name),
      ),
    );

    if (isSecondary) {
      return 0x9f3547;
    }

    return 0xb9c1cb;
  }

  private applyMuscleColors(anatomy: THREE.Object3D): void {
    anatomy.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      const color = this.getMuscleColor(object.name);

      const isPrimary = color === 0xf43f5e;
      const isSecondary = color === 0x9f3547;

      let materialColor: number;

      if (isPrimary) {
        materialColor = 0xe63e52;
      } else if (isSecondary) {
        materialColor = 0xb85b65;
      } else {
        materialColor = 0xc59a85;
      }

      object.material = new THREE.MeshStandardMaterial({
        color: materialColor,

        roughness: 0.94,
        metalness: 0,

        side: THREE.DoubleSide,
      });
    });
  }
}
