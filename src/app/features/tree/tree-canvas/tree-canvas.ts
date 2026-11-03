import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID,inject } from '@angular/core';

import cytoscape, {
  Core,
  NodeSingular,
} from 'cytoscape';

import {
  ExerciseGraphLevel,
} from '../../../shared/models/exercise.model';

import {
  EXERCISES,
  EXERCISE_RELATIONS,
} from '../data/tree.mock';

export interface ExerciseSelection {
  id: string;
  panelSide: 'left' | 'right';
}

@Component({
  selector: 'app-tree-canvas',
  imports: [],
  templateUrl: './tree-canvas.html',
  styleUrl: './tree-canvas.css',
})
export class TreeCanvas implements AfterViewInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('cyContainer', { static: true })
  private cyContainer!: ElementRef<HTMLDivElement>;

  @Output()
  exerciseSelected = new EventEmitter<ExerciseSelection>();

  @Output()
  backgroundClicked = new EventEmitter<void>();

  private cy?: Core;

  private initialViewport?: {
    zoom: number;
    pan: { x: number; y: number };
  };

  private destroyed = false;

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      await Promise.all([
        document.fonts.load('600 18px "Manrope"'),
        document.fonts.load('700 18px "Manrope"'),
      ]);
    } catch {
      // Si la fuente no carga, se utiliza sans-serif.
    }

    if (this.destroyed) {
      return;
    }

    this.initializeTree();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.cy?.destroy();
  }

  resetTree(): void {
    if (!this.cy || !this.initialViewport) {
      return;
    }

    this.cy.viewport({
      zoom: this.initialViewport.zoom,
      pan: { ...this.initialViewport.pan },
    });
  }

  private initializeTree(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const treeExercises = EXERCISES.filter(
      (exercise) => exercise.showInTree === true,
    );

    const nodes = treeExercises.map((exercise) => ({
      data: {
        id: exercise.id,
        label: exercise.name,
        difficulty: exercise.difficulty,
        graphLevel: exercise.graphLevel,
      },
      position: this.getNodePosition(
        exercise.id,
        exercise.graphLevel,
      ),
    }));

    const treeExerciseIds = new Set(
      treeExercises.map((exercise) => exercise.id),
    );

    const edges = EXERCISE_RELATIONS
    .filter(
      (relation) =>
        treeExerciseIds.has(relation.from) &&
        treeExerciseIds.has(relation.to),
    )
    .map((relation, index) => {
      const sourceExercise = treeExercises.find(
        (exercise) => exercise.id === relation.from,
      );

      const targetExercise = treeExercises.find(
        (exercise) => exercise.id === relation.to,
      );

      let longConnection = 0;

      if (sourceExercise && targetExercise) {
        const sourcePosition = this.getNodePosition(
          sourceExercise.id,
          sourceExercise.graphLevel,
        );

        const targetPosition = this.getNodePosition(
          targetExercise.id,
          targetExercise.graphLevel,
        );

        longConnection =
          Math.abs(targetPosition.x - sourcePosition.x) > 500
            ? 1
            : 0;
      }

      return {
        data: {
          id: `relation-${index}`,
          source: relation.from,
          target: relation.to,
          type: relation.type,
          targetDifficulty: targetExercise?.difficulty,
          longConnection,
        },
      };
  });

    this.cy = cytoscape({
      autoungrabify: true,
      userPanningEnabled: true,
      container: this.cyContainer.nativeElement,

      elements: [
        ...nodes,
        ...edges,
      ],

      layout: {
        name: 'preset',
      },

      style: [
        /* NODOS */
        {
          selector: 'node',
          style: {
            width: 150,
            height: 72,

            shape: 'round-rectangle',

            'background-color': '#2b3b4f',
            'background-opacity': 1,

            'border-width': 5,
            'border-color': '#f0e8e8',

            label: 'data(label)',
            color: '#ecf0f5',
            'font-family': '"Montserrat", monospace',

            'font-size': 22,
            'font-weight': 'bold',
            'text-max-width': '132px',

            // Agregamos esta línea para forzar mayúsculas:
            'text-transform': 'uppercase',

            'text-valign': 'center',
            'text-halign': 'center',
            'text-wrap': 'wrap',

            'overlay-opacity': 0,
          },
        },

        {
          selector: 'node[difficulty = "beginner"]',
          style: {
            'background-color': '#2B3B4F',
            'border-color': '#1ece8d',
            color: '#1ece8d',
          },
        },
        {
          selector: 'node[difficulty = "intermediate"]',
          style: {
            'background-color': '#2B3B4F',
            'border-color': '#60a5fa',
            color: '#60a5fa',
          },
        },
        {
          selector: 'node[difficulty = "advanced"]',
          style: {
            'background-color': '#2B3B4F',
            'border-color': '#eb8028',
            color: '#eb8028',
          },
        },
        {
          selector: 'node[difficulty = "elite"]',
          style: {
            'background-color': '#2B3B4F',
            'border-color': '#d83b60',
            color: '#d83b60',
          },
        },

        /* CONEXIONES */
        {
          selector: 'edge',
          style: {
            width: 5,

            'line-color': '#64748b',
            'target-arrow-color': '#64748b',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.9,

            'curve-style': 'straight',
            opacity: 0.8,
          },
        },

        /* TONOS CON CONTRASTE SOBRE BLANCO */
        {
          selector: 'edge[targetDifficulty = "beginner"]',
          style: {
            'line-color': '#16966d',
            'target-arrow-color': '#16966d',
          },
        },
        {
          selector: 'edge[targetDifficulty = "intermediate"]',
          style: {
            'line-color': '#4385cd',
            'target-arrow-color': '#4385cd',
          },
        },
        {
          selector: 'edge[targetDifficulty = "advanced"]',
          style: {
            'line-color': '#d5802f',
            'target-arrow-color': '#d5802f',
          },
        },
        {
          selector: 'edge[targetDifficulty = "elite"]',
          style: {
            'line-color': '#d83b60',
            'target-arrow-color': '#d83b60',
          },
        },

        /* ELEMENTOS FUERA DE LA RUTA */
        {
          selector: 'node.dimmed',
          style: {
            opacity: 0.2,
          },
        },
        {
          selector: 'edge.dimmed',
          style: {
            opacity: 0.12,
          },
        },

        /* RUTA RESALTADA */
        {
          selector: 'node.highlighted',
          style: {
            opacity: 1,
            'border-width': 3,
          },
        },
        {
          selector: 'edge.highlighted',
          style: {
            opacity: 1,
            width: 3.5,
            'arrow-scale': 1,
          },
        },

        /* INTERACCIÓN */
        {
          selector: 'node:active',
          style: {
            'border-width': 3,
            'background-color': '#1e2c3e',
          },
        },
        {
          selector: 'node:selected',
          style: {
            'border-width': 3.5,
            'background-color': '#1e2c3e',
          },
        },
      ],

      minZoom: 0.3,
      maxZoom: 2.5,

      wheelSensitivity: 0.2,
    });

    /*
     * Todo el árbol visible inicialmente.
     */
    requestAnimationFrame(() => {
      if (!this.cy) {
        return;
      }

      const cy = this.cy;

      cy.resize();

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        const verticalPadding = 16;
        const horizontalPadding = 45;

        // Medimos los límites reales de TODOS los nodos,
        // incluyendo sus bordes y etiquetas.
        const nodeBounds = cy.nodes().boundingBox({
          includeLabels: true,
          includeOverlays: false,
        });

        const availableHeight = cy.height() - verticalPadding * 2;

        // La escala depende de la altura real del árbol,
        // no de coordenadas ni tamaños de nodo supuestos.
        const zoom = availableHeight / nodeBounds.h;

        cy.minZoom(Math.min(cy.minZoom(), zoom));
        cy.zoom(zoom);

        cy.pan({
          // Conservamos el árbol ancho y desplazable horizontalmente.
          x: horizontalPadding - nodeBounds.x1 * zoom,

          // El borde superior del primer nodo queda a 16 px.
          // El borde inferior del último queda también a 16 px.
          y: verticalPadding - nodeBounds.y1 * zoom,
        });
      } else {
        // PC: conservar exactamente el encuadre que ya funciona.
        cy.fit(undefined, 70);

        cy.panBy({
          x: 45,
          y: 0,
        });
      }

      // Guardamos la posición vertical una vez terminado el encuadre.
      const fixedPanY = cy.pan().y;
      const initialZoom = cy.zoom();

      this.initialViewport = {
        zoom: cy.zoom(),
        pan: { ...cy.pan() },
      };

      // Límites horizontales basados en el contenido del árbol.
      const bounds = cy.elements().boundingBox();
      const padding = 40;

      let correctingPan = false;

      cy.on('pan', () => {
        if (correctingPan) {
          return;
        }

        const viewportWidth = cy.width();
        const viewportHeight = cy.height();
        const zoom = cy.zoom();
        const currentPan = cy.pan();

        const contentWidth = bounds.w * zoom;
        const contentHeight = bounds.h * zoom;

        // Límites horizontales: conservamos el comportamiento actual.
        let minPanX: number;
        let maxPanX: number;

        if (contentWidth <= viewportWidth - padding * 2) {
          const centeredPanX =
            (viewportWidth - contentWidth) / 2 -
            bounds.x1 * zoom;

          minPanX = centeredPanX;
          maxPanX = centeredPanX;
        } else {
          minPanX =
            viewportWidth - padding - bounds.x2 * zoom;

          maxPanX =
            padding - bounds.x1 * zoom;
        }

        const limitedPanX = Math.max(
          minPanX,
          Math.min(maxPanX, currentPan.x),
        );

        // Límites verticales: solo permitimos desplazar
        // si el árbol es más alto que el área disponible.
        let limitedPanY: number;

        if (
          zoom <= initialZoom + 0.0001 ||
          contentHeight <= viewportHeight - padding * 2
        ) {
          // Sin ampliar el zoom, el árbol permanece fijo verticalmente.
          limitedPanY = fixedPanY;
        } else {
          // El árbol no cabe: permitir recorrerlo verticalmente
          // sin dejar grandes espacios vacíos arriba o abajo.
          const minPanY =
            viewportHeight - padding - bounds.y2 * zoom;

          const maxPanY =
            padding - bounds.y1 * zoom;

          limitedPanY = Math.max(
            minPanY,
            Math.min(maxPanY, currentPan.y),
          );
        }

        if (
          currentPan.x !== limitedPanX ||
          currentPan.y !== limitedPanY
        ) {
          correctingPan = true;

          cy.pan({
            x: limitedPanX,
            y: limitedPanY,
          });

          correctingPan = false;
        }
      });
  });

  /*
  * Permitir desplazar horizontalmente el árbol
  * cuando el gesto comienza sobre un nodo.
  */
  let draggingFromNode = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let movedFromNode = false;

  this.cy.on('mousedown touchstart', 'node', (event) => {
    const originalEvent = event.originalEvent as
      | MouseEvent
      | TouchEvent
      | undefined;

    if (!originalEvent) {
      return;
    }

    draggingFromNode = true;
    movedFromNode = false;

    if ('touches' in originalEvent) {
        lastPointerX = originalEvent.touches[0]?.clientX ?? 0;
        lastPointerY = originalEvent.touches[0]?.clientY ?? 0;
      } else {
        lastPointerX = originalEvent.clientX;
        lastPointerY = originalEvent.clientY;
      }
  });

  this.cy.on('mousemove touchmove', (event) => {
  if (!draggingFromNode || !this.cy) {
    return;
  }

  const originalEvent = event.originalEvent as
    | MouseEvent
    | TouchEvent
    | undefined;

  if (!originalEvent) {
    return;
  }

  const pointerX =
    'touches' in originalEvent
      ? originalEvent.touches[0]?.clientX ?? lastPointerX
      : originalEvent.clientX;

  const pointerY =
    'touches' in originalEvent
      ? originalEvent.touches[0]?.clientY ?? lastPointerY
      : originalEvent.clientY;

  const deltaX = pointerX - lastPointerX;
  const deltaY = pointerY - lastPointerY;

  // Evita que un pequeño temblor del dedo se interprete
  // como un arrastre y bloquee la apertura de la tarjeta.
  if (
    Math.abs(deltaX) > 3 ||
    Math.abs(deltaY) > 3
  ) {
    movedFromNode = true;
  }

  if (movedFromNode) {
    this.cy.panBy({
      x: deltaX,
      y: deltaY,
    });
  }

  lastPointerX = pointerX;
  lastPointerY = pointerY;
});

  this.cy.on('mouseup touchend', () => {
    draggingFromNode = false;
  });

    /*
     * Click en un ejercicio.
     */
    this.cy.on('tap', 'node', (event) => {
      if (movedFromNode) {
        movedFromNode = false;
        return;
      }

      const node = event.target as NodeSingular;

      this.highlightPath(node);

      const renderedPosition = node.renderedPosition();

      const canvasWidth =
        this.cyContainer.nativeElement.clientWidth;

      const panelSide: 'left' | 'right' =
        renderedPosition.x > canvasWidth / 2
          ? 'left'
          : 'right';

      this.exerciseSelected.emit({
        id: node.id(),
        panelSide,
      });
    });

    /*
     * Click en el fondo del canvas.
     */
    this.cy.on('tap', (event) => {
      if (event.target === this.cy) {
        this.clearHighlight();
        this.backgroundClicked.emit();
      }
    });
  }

  private highlightPath(node: NodeSingular): void {
    if (!this.cy) {
      return;
    }

    /*
     * Muy importante:
     * limpiamos cualquier ruta seleccionada anteriormente.
     */
    this.clearHighlight();

    /*
     * Nodos + conexiones necesarias para llegar
     * hasta el ejercicio seleccionado.
     */
    const predecessors = node.predecessors();

    /*
     * Incluimos el propio nodo seleccionado.
     */
    const path = predecessors.union(node);

    /*
     * Atenuamos absolutamente todo.
     */
    this.cy.elements().addClass('dimmed');

    /*
     * Recuperamos únicamente la ruta relevante.
     */
    path.removeClass('dimmed');
    path.addClass('highlighted');
  }

  clearHighlight(): void {
    if (!this.cy) {
      return;
    }

    this.cy.elements().removeClass('dimmed highlighted');
    this.cy.elements(':selected').unselect();
  }

  private getNodePosition(
    exerciseId: string,
    graphLevel: ExerciseGraphLevel,
  ): { x: number; y: number } {
    const positions: Record<string, number> = {
      /*
       * LEVEL 1
       */
      'pull-up': 350,
      'dips': 900,
      'push-up': 1850,

      /*
       * LEVEL 2
       */
      'early-front-lever-progressions': 90,
      'chest-to-bar': 550,

      'l-sit': 1300,
      'handstand': 1580,

      'pike-push-up': 1800,
      'bent-arm-planche': 2050,
      'skin-the-cat': 2340,

      /*
       * LEVEL 3
       */
      'tuck-advanced-front-lever': 90,
      'dragon-flag': 540,

      'muscle-up': 720,
      'impossible-dip': 900,
      'korean-dip': 1100,

      'press-to-handstand': 1400,
      'early-planche-progressions': 1630,

      'handstand-push-up': 1800,
      'one-arm-bent-planche': 2050,
      'back-lever': 2240,

      /*
       * LEVEL 4
       */
      'front-lever': 90,
      'one-arm-pull-up': 350,
      'waist-pull-up': 540,

      'human-flag': 900,
      'hefesto': 1100,
      'v-sit': 1300,

      'straddle-planche': 1630,

      '90-degree-push-up': 1800,
      'one-arm-push-up-clean-form': 2010,
      'one-arm-back-lever': 2340,

      /*
       * LEVEL 5
       */
      'touch-front-lever': 50,
      'front-lever-pull-up': 420,

      'human-flag-pull-up': 900,
      'entrada-de-angel': 1100,

      'full-planche': 1630,
      'clean-one-arm-handstand': 1390,

      'iron-cross': 2340,

      /*
       * LEVEL 6
       */
      'one-arm-front-lever': 260,
      'victorian': 520,
      'butterfly': 720,

      'mana': 1300,

      'full-planche-push-ups': 1610,
      'maltese': 1950,

      /*
       * LEVEL 7
       */
      'caruso': 520,
      'inverted-butterfly': 720,

      'entrada-de-diablo': 1100,

      'reverse-planche': 1350,
      'one-arm-planche': 1800,
      'pelican': 2000,
      'zanetti': 2180,

      'inverted-cross': 2340,
    };

    const levelY: Record<ExerciseGraphLevel, number> = {
      1: 100,
      2: 250,
      3: 400,
      4: 550,
      5: 700,
      6: 850,
      7: 1000,
    };

    return {
      x: positions[exerciseId] ?? 1200,
      y: levelY[graphLevel],
    };
  }
}
