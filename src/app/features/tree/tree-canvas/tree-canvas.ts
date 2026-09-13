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

        ...(exercise.imageUrl && {
          imageUrl: exercise.imageUrl,
        }),
      },
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

      layout: {
        name: 'breadthfirst',
        directed: true,
        padding: 60,
        spacingFactor: 1.5,
      },

      style: [
        /*
         * NODE BASE
         */
        {
          selector: 'node',
          style: {
            'background-color': '#292c33',
            'border-color': '#3a3e47',
            'border-width': 1,

            width: 190,
            height: 72,

            shape: 'round-rectangle',

            label: 'data(label)',

            color: '#f4f4f5',

            'font-size': 12,
            'font-weight': 600,

            'text-valign': 'center',
            'text-halign': 'center',

            'text-wrap': 'wrap',
            'text-max-width': '105px',
          },
        },

        /*
         * NODE WITH IMAGE
         */
        {
          selector: 'node[imageUrl]',
          style: {
            'background-image': 'data(imageUrl)',

            'background-fit': 'contain',
            'background-repeat': 'no-repeat',

            'background-width': '56px',
            'background-height': '56px',

            'background-position-x': '19%',
            'background-position-y': '50%',

            /*
             * Mantiene el texto centrado,
             * pero lo desplaza hacia la derecha.
             */
            'text-halign': 'center',
            'text-margin-x': 32,
          },
        },

        {
          selector: 'node:active',
          style: {
            'background-color': '#323640',
            'border-color': '#ef233c',
          },
        },

        /*
         * SELECTED NODE
         */
        {
          selector: 'node:selected',
          style: {
            'border-color': '#ef233c',
            'border-width': 2,

            'background-color': '#35181e',
          },
        },

        /*
         * CONNECTIONS
         */
        {
        selector: 'edge',
        style: {
          width: 2,

          'line-color': '#555b66',
          'target-arrow-color': '#555b66',
          'target-arrow-shape': 'triangle',

          'curve-style': 'bezier',
        },
      },
      ],

      minZoom: 0.4,
      maxZoom: 2,

      wheelSensitivity: 0.2,
    });

    this.cy.on('tap', 'node', (event) => {
      const exerciseId = event.target.id();
      this.exerciseSelected.emit(exerciseId);
    });
  }
}
