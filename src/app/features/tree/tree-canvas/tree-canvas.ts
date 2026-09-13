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
        padding: 10,
        spacingFactor: 1,
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

      width: 220,
      height: 82,

      shape: 'round-rectangle',

      label: 'data(label)',
      color: '#f8fafc',

      'font-size': 15,
      'font-weight': 700,

      'text-valign': 'center',
      'text-halign': 'center',

      'text-wrap': 'wrap',
      'text-max-width': '145px',
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

      'background-width': '64px',
      'background-height': '64px',

      'background-position-x': '18%',
      'background-position-y': '50%',

      'text-halign': 'center',
      'text-margin-x': 44,
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
      'border-width': 3,
    },
  },

  /*
   * CONNECTIONS
   */
  {
    selector: 'edge',
    style: {
      width: 2.5,

      'line-color': '#747d8c',

      'target-arrow-color': '#747d8c',
      'target-arrow-shape': 'triangle',
      'arrow-scale': 0.8,

      'curve-style': 'bezier',

      opacity: 0.9,
    },
  },
],

      minZoom: 0.4,
      maxZoom: 2.2,

      wheelSensitivity: 0.2,
    });

    /*
     * Inicialmente centramos el árbol.
     */
    this.cy.fit(undefined, 80);
    this.cy.zoom(this.cy.zoom() * 1.1);
    this.cy.center();

    /*
     * Selección del ejercicio.
     */
    this.cy.on('tap', 'node', (event) => {
      const exerciseId = event.target.id();

      this.exerciseSelected.emit(exerciseId);
    });
  }
}
