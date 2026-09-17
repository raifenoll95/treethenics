import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

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
  @ViewChild('cyContainer', { static: true })
  private cyContainer!: ElementRef<HTMLDivElement>;

  @Output()
  exerciseSelected = new EventEmitter<ExerciseSelection>();

  @Output()
  backgroundClicked = new EventEmitter<void>();

  private cy?: Core;

  ngAfterViewInit(): void {
    this.initializeTree();
  }

  ngOnDestroy(): void {
    this.cy?.destroy();
  }

  private initializeTree(): void {

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
        const targetExercise = treeExercises.find(
          (exercise) => exercise.id === relation.to,
        );

        return {
          data: {
            id: `relation-${index}`,
            source: relation.from,
            target: relation.to,
            type: relation.type,
            targetDifficulty: targetExercise?.difficulty,
          },
        };
      });

    this.cy = cytoscape({
      autoungrabify: true,
      container: this.cyContainer.nativeElement,

      elements: [
        ...nodes,
        ...edges,
      ],

      layout: {
        name: 'preset',
      },

      style: [
        /*
         * BASE NODE
         */
        {
          selector: 'node',
          style: {
            width: 150,
            height: 52,

            shape: 'round-rectangle',

            'background-color': '#161b22',

            'border-width': 2,

            label: 'data(label)',

            color: '#f8fafc',

            'font-family': 'Inter, system-ui, sans-serif',
            'font-size': 19,
            'font-weight': 700,

            'text-valign': 'center',
            'text-halign': 'center',

            'text-wrap': 'wrap',
            'text-max-width': '124px',
          },
        },

        /*
         * BEGINNER
         */
        {
          selector: 'node[difficulty = "beginner"]',
          style: {
            'border-color': '#34d399',
            'background-color': '#14231f',
          },
        },

        /*
         * INTERMEDIATE
         */
        {
          selector: 'node[difficulty = "intermediate"]',
          style: {
            'border-color': '#60a5fa',
            'background-color': '#151f2d',
          },
        },

        /*
         * ADVANCED
         */
        {
          selector: 'node[difficulty = "advanced"]',
          style: {
            'border-color': '#fb923c',
            'background-color': '#2a1f16',
          },
        },

        /*
         * ELITE
         */
        {
          selector: 'node[difficulty = "elite"]',
          style: {
            'border-color': '#f43f5e',
            'background-color': '#2a171c',
          },
        },

        /*
         * DIMMED
         */
        {
          selector: '.dimmed',
          style: {
            opacity: 0.12,
          },
        },

        /*
         * HIGHLIGHTED NODE
         */
        {
          selector: 'node.highlighted',
          style: {
            opacity: 1,
            'border-width': 3,
          },
        },

        /*
         * HIGHLIGHTED EDGE
         */
        {
          selector: 'edge.highlighted',
          style: {
            opacity: 1,
            width: 3.5,
            'arrow-scale': 1,
          },
        },

        /*
         * ACTIVE
         */
        {
          selector: 'node:active',
          style: {
            'border-width': 3,
          },
        },

        /*
         * SELECTED
         */
        {
          selector: 'node:selected',
          style: {
            'border-width': 3.5,
          },
        },

        /*
         * BASE EDGE
         */
        {
          selector: 'edge',
          style: {
            width: 2.2,

            'line-color': '#9ca3af',

            'target-arrow-color': '#9ca3af',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.9,

            'curve-style': 'straight',

            opacity: 0.9,
          },
        },

        /*
         * EDGE → BEGINNER
         */
        {
          selector: 'edge[targetDifficulty = "beginner"]',
          style: {
            'line-color': '#34d399',
            'target-arrow-color': '#34d399',
          },
        },

        /*
         * EDGE → INTERMEDIATE
         */
        {
          selector: 'edge[targetDifficulty = "intermediate"]',
          style: {
            'line-color': '#60a5fa',
            'target-arrow-color': '#60a5fa',
          },
        },

        /*
         * EDGE → ADVANCED
         */
        {
          selector: 'edge[targetDifficulty = "advanced"]',
          style: {
            'line-color': '#fb923c',
            'target-arrow-color': '#fb923c',
          },
        },

        /*
         * EDGE → ELITE
         */
        {
          selector: 'edge[targetDifficulty = "elite"]',
          style: {
            'line-color': '#f43f5e',
            'target-arrow-color': '#f43f5e',
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
    this.cy.fit(undefined, 70);

    this.cy.panBy({
      x: 45,
      y: 0,
    });

    /*
     * Click en un ejercicio.
     */
    this.cy.on('tap', 'node', (event) => {
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

    this.cy
      .elements()
      .removeClass('dimmed')
      .removeClass('highlighted');
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
      'hang-to-inverted-press': 250,
      'dragon-flag': 540,

      'muscle-up': 720,
      'impossible-dip': 900,
      'korean-dip': 1100,

      'handstand-press': 1400,
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
