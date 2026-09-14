import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

import cytoscape, { Core } from 'cytoscape';

import {
  ExerciseGraphLevel,
} from '../../../shared/models/exercise.model';

import {
  EXERCISES,
  EXERCISE_RELATIONS,
} from '../data/tree.mock';

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
  exerciseSelected = new EventEmitter<string>();

  private cy?: Core;

  ngAfterViewInit(): void {
    this.initializeTree();
  }

  ngOnDestroy(): void {
    this.cy?.destroy();
  }

  private initializeTree(): void {
    const nodes = EXERCISES.map((exercise) => ({
      data: {
        id: exercise.id,
        label: exercise.name,
        difficulty: exercise.difficulty,
        graphLevel: exercise.graphLevel,
      },

      /*
       * IMPORTANTE:
       * position tiene que estar FUERA de data.
       */
      position: this.getNodePosition(
        exercise.id,
        exercise.graphLevel,
      ),
    }));

    const edges = EXERCISE_RELATIONS.map((relation, index) => ({
      data: {
        id: `relation-${index}`,
        source: relation.from,
        target: relation.to,
        type: relation.type,
      },
    }));

    this.cy = cytoscape({
      container: this.cyContainer.nativeElement,

      elements: [
        ...nodes,
        ...edges,
      ],

      /*
       * Nosotros controlamos las posiciones.
       */
      layout: {
        name: 'preset',
      },

      style: [
        /*
         * NODE BASE
         */
        {
          selector: 'node',
          style: {
            'background-color': '#343a45',

            'border-color': '#535c69',
            'border-width': 1.5,

            width: 150,
            height: 54,

            shape: 'round-rectangle',

            label: 'data(label)',

            color: '#f8fafc',

            'font-size': 17,
            'font-weight': 700,

            'text-valign': 'center',
            'text-halign': 'center',

            'text-wrap': 'wrap',
            'text-max-width': '120px',
          },
        },

        /*
         * ACTIVE NODE
         */
        {
          selector: 'node:active',
          style: {
            'background-color': '#404753',
            'border-color': '#ef233c',
            'border-width': 2,
          },
        },

        /*
         * SELECTED NODE
         */
        {
          selector: 'node:selected',
          style: {
            'background-color': '#44252c',
            'border-color': '#ef233c',
            'border-width': 2.5,
          },
        },

        /*
         * CONNECTIONS
         */
        {
          selector: 'edge',
          style: {
            width: 1.6,

            'line-color': '#626b78',

            'target-arrow-color': '#626b78',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.7,
            'curve-style': 'straight',

            opacity: 0.65,
          },
        },
      ],

      minZoom: 0.3,
      maxZoom: 2.5,

      wheelSensitivity: 0.2,
    });

    /*
     * Queremos ver todo el árbol al entrar.
     */
    this.cy.fit(undefined, 40);

    /*
     * Click en ejercicio.
     */
    this.cy.on('tap', 'node', (event) => {
      const exerciseId = event.target.id();

      this.exerciseSelected.emit(exerciseId);
    });
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
      'handstand': 1500,

      'pike-push-up': 1800,
      'bent-arm-planche': 2000,
      'skin-the-cat': 2200,

      /*
      * LEVEL 3
      */
      'hang-to-inverted-press': 250,
      'dragon-flag': 540,

      'muscle-up': 700,
      'impossible-dip': 900,
      'korean-dip': 1100,

      'handstand-press': 1300,
      'early-planche-progressions': 1500,

      'handstand-push-up': 1800,
      'one-arm-bent-planche': 2000,
      'back-lever': 2200,

      /*
      * LEVEL 4
      */
      'front-lever': 90,
      'one-arm-pull-up': 350,
      'waist-pull-up': 700,

      'human-flag': 920,
      'hefesto': 1140,
      'v-sit': 1300,

      'straddle-planche': 1580,

      '90-degree-push-up': 1800,
      'one-arm-push-up-clean-form': 2020,
      'one-arm-back-lever': 2240,

      /*
      * LEVEL 5
      */
      'touch-front-lever': 90,
      'front-lever-pull-up': 430,

      'human-flag-pull-up': 900,
      'entrada-de-angel': 1140,

      'full-planche': 1580,
      'clean-one-arm-handstand': 1820,

      'iron-cross': 2240,

      /*
      * LEVEL 6
      */
      'one-arm-front-lever': 260,
      'victorian': 520,
      'butterfly': 780,

      'mana': 1300,

      'full-planche-push-ups': 1580,
      'maltese': 1840,

      /*
      * LEVEL 7
      */
      'caruso': 520,
      'inverted-butterfly': 780,

      'entrada-de-diablo': 1100,

      'reverse-planche': 1460,
      'one-arm-planche': 1680,
      'pelican': 1900,
      'zanetti': 2120,

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