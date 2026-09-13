import { Component, signal } from '@angular/core';

import { TreeCanvas } from '../tree-canvas/tree-canvas';
import { EXERCISES } from '../data/tree.mock';
import { Exercise } from '../../../shared/models/exercise.model';

@Component({
  selector: 'app-tree-page',
  imports: [TreeCanvas],
  templateUrl: './tree-page.html',
  styleUrl: './tree-page.css',
})
export class TreePage {

  readonly selectedExercise = signal<Exercise | undefined>(undefined);

  onExerciseSelected(exerciseId: string): void {
    const exercise = EXERCISES.find(
      (exercise) => exercise.id === exerciseId
    );

    console.log('Selected exercise:', exercise);

    this.selectedExercise.set(exercise);
  }

  closeExercise(): void {
    this.selectedExercise.set(undefined);
  }
}
