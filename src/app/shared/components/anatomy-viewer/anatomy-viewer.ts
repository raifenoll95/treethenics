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
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { input } from '@angular/core';

import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';

import { ANATOMY_MUSCLE_MAP } from './anatomy-muscle-map';

let anatomyModelPromise: Promise<THREE.Group> | null = null;

function loadCachedAnatomyModel(): Promise<THREE.Group> {
  if (!anatomyModelPromise) {
    const loader = new GLTFLoader();

    // Meshopt support.
    loader.setMeshoptDecoder(MeshoptDecoder);

    // Draco support.
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    loader.setDRACOLoader(dracoLoader);

    anatomyModelPromise = loader
      .loadAsync(
          'https://assets.treethenics.com/anatomy-treethenics-draco.glb'
        )
      .then((gltf) => gltf.scene);
  }

  return anatomyModelPromise;
}

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
  private normalMaterial?: THREE.MeshStandardMaterial;
  private primaryMaterial?: THREE.MeshStandardMaterial;
  private secondaryMaterial?: THREE.MeshStandardMaterial;

  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  private intersectionObserver?: IntersectionObserver;
  private isVisible = false;
  private isAnimating = false;
  private readonly targetFps = 30;
  private lastFrameTime = 0;
  private anatomyLoadStarted = false;

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
    this.createMaterials();

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

    //this.loadAnatomyModel();

    // Adaptación al tamaño de la tarjeta.

    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
    });

    this.resizeObserver.observe(container);

    this.intersectionObserver =
      new IntersectionObserver(
        ([entry]) => {
          this.isVisible = entry.isIntersecting;

          if (this.isVisible) {
            if (!this.anatomyLoadStarted) {
              this.anatomyLoadStarted = true;
              this.loadAnatomyModel();
            }

            this.startAnimation();
          } else {
            this.stopAnimation();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '300px 0px',
        },
      );

    this.intersectionObserver.observe(container);
  }

  private startAnimation(): void {
    if (
      this.isAnimating ||
      this.destroyed ||
      !this.model
    ) {
      return;
    }

    this.isAnimating = true;
    this.lastFrameTime = 0;
    this.clock.start();

    this.animate();
  }

  private stopAnimation(): void {
    this.isAnimating = false;

    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }

    this.lastFrameTime = 0;
    this.clock.stop();
  }

  private async loadAnatomyModel(): Promise<void> {

    try {
      const cachedAnatomy = await loadCachedAnatomyModel();

      if (this.destroyed || !this.scene) {
        return;
      }

      /*
      * Necesitamos nuestra propia instancia del árbol de objetos
      * porque este componente va a modificar rotación, posición,
      * escala y materiales.
      *
      * Las geometrías pueden seguir siendo compartidas.
      */
      const anatomy = cachedAnatomy.clone(true);

      const rotationGroup = new THREE.Group();

      this.applyMuscleColors(anatomy);

      anatomy.rotation.x = -Math.PI / 2;

      rotationGroup.add(anatomy);

      const boundingBox =
        new THREE.Box3().setFromObject(rotationGroup);

      const center = boundingBox.getCenter(
        new THREE.Vector3(),
      );

      const size = boundingBox.getSize(
        new THREE.Vector3(),
      );

      const desiredHeight = 3.5;
      const scale = desiredHeight / size.y;

      rotationGroup.scale.setScalar(scale);

      rotationGroup.position
        .copy(center)
        .multiplyScalar(-scale);

      this.model = rotationGroup;

      this.scene.add(this.model);

      this.fitCameraToModel();

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(
          this.scene,
          this.camera,
        );
      }
      if (this.isVisible) {
        this.startAnimation();
      }
    } catch (error) {
      console.error(
        'Error al cargar anatomy.glb:',
        error,
      );
    }
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

  private createMaterials(): void {
    this.normalMaterial = new THREE.MeshStandardMaterial({
      color: 0xc59a85,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide,
    });

    this.primaryMaterial = new THREE.MeshStandardMaterial({
      color: 0xe63e52,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide,
    });

    this.secondaryMaterial = new THREE.MeshStandardMaterial({
      color: 0xb85b65,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide,
    });
  }

  private animate = (time = performance.now()): void => {
    if (
      this.destroyed ||
      !this.isAnimating ||
      !this.isVisible
    ) {
      this.isAnimating = false;
      this.animationFrameId = undefined;
      return;
    }

    this.animationFrameId =
      requestAnimationFrame(this.animate);

    const frameInterval = 1000 / this.targetFps;

    if (
      this.lastFrameTime !== 0 &&
      time - this.lastFrameTime < frameInterval
    ) {
      return;
    }

    this.lastFrameTime =
      time - ((time - this.lastFrameTime) % frameInterval);

    const delta = Math.min(
      this.clock.getDelta(),
      0.05,
    );

    if (this.model) {
      this.model.rotation.y += delta * 0.35;
    }

    if (
      this.renderer &&
      this.scene &&
      this.camera
    ) {
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

    this.stopAnimation();
    this.intersectionObserver?.disconnect();
    this.resizeObserver?.disconnect();

    if (this.model) {
      this.scene?.remove(this.model);
      this.model = undefined;
    }

    this.normalMaterial?.dispose();
    this.primaryMaterial?.dispose();
    this.secondaryMaterial?.dispose();

    this.normalMaterial = undefined;
    this.primaryMaterial = undefined;
    this.secondaryMaterial = undefined;

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

  private applyMuscleColors(
    anatomy: THREE.Object3D,
  ): void {
    anatomy.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      const color = this.getMuscleColor(object.name);

      if (color === 0xf43f5e) {
        object.material = this.primaryMaterial!;
        return;
      }

      if (color === 0x9f3547) {
        object.material = this.secondaryMaterial!;
        return;
      }

      object.material = this.normalMaterial!;
    });
  }
}
