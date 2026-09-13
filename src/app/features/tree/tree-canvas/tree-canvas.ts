import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
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
        {
          selector: 'node',
          style: {
            'background-color': '#202126',
            'border-color': '#3a3b42',
            'border-width': 1,

            label: 'data(label)',
            color: '#f4f4f5',

            'font-size': 12,
            'font-weight': 600,

            width: 100,
            height: 46,

            shape: 'round-rectangle',

            'text-valign': 'center',
            'text-halign': 'center',

            'text-wrap': 'wrap',
            'text-max-width': '80px',
          },
        },
        {
          selector: 'node:selected',
          style: {
            'border-color': '#ef233c',
            'border-width': 2,
            'background-color': '#35181e',
          },
        },
        {
          selector: 'edge',
          style: {
            width: 2,

            'line-color': '#3a3b42',
            'target-arrow-color': '#3a3b42',
            'target-arrow-shape': 'triangle',

            'curve-style': 'bezier',
          },
        },
      ],

      minZoom: 0.4,
      maxZoom: 2,

      wheelSensitivity: 0.2,
    });
  }
}
