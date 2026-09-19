import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

@Component({
  selector: 'app-anatomy-viewer',
  imports: [],
  templateUrl: './anatomy-viewer.html',
  styleUrl: './anatomy-viewer.css',
})
export class AnatomyViewer implements AfterViewInit, OnDestroy {
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
    this.initializeScene();
  }

  private initializeScene(): void {
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

    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2),
    );

    this.renderer.setSize(width, height);

    container.appendChild(this.renderer.domElement);

    // Iluminación frontal y posterior.

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      0.9,
    );

    this.scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(
      0xffffff,
      2.2,
    );

    frontLight.position.set(3, 5, 6);
    this.scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(
      0x9db4d0,
      1.1,
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

    this.animate();
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

        anatomy.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.material = new THREE.MeshStandardMaterial({
          color: 0xb9c1cb,
          roughness: 0.82,
          metalness: 0,
          side: THREE.DoubleSide,
        });
      });

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
        anatomy.position.sub(center);

        rotationGroup.scale.setScalar(scale);

        // Guardamos el grupo que girará en la animación.
        this.model = rotationGroup;

        this.scene.add(this.model);

        // Ajustar la cámara al modelo.

        this.fitCameraToModel();

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
}
