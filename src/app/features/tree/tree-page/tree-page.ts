import { Component, signal } from '@angular/core';

import {
  ExerciseSelection,
  TreeCanvas,
} from '../tree-canvas/tree-canvas';

import { EXERCISES } from '../data/tree.mock';

import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { RouterLink } from '@angular/router';
import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';
import { IMAGE_VERSION } from '../../../core/config/image-version';

import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';


type PanelSide = 'left' | 'right';

@Component({
  selector: 'app-tree-page',
  imports: [
    TreeCanvas,
    RouterLink,
    OptimizedImagePipe,
  ],
  templateUrl: './tree-page.html',
  styleUrl: './tree-page.css',
})
export class TreePage {

  readonly treeBackgroundImage =
  `url("https://assets.treethenics.com/optimized/detail/calisthenics-park.webp?v=${IMAGE_VERSION}")`;

  panelSide = signal<PanelSide>('right');
  readonly selectedExercise = signal<Exercise | undefined>(undefined);

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return EQUIPMENT_LABELS[equipment];
  }

  onExerciseSelected(selection: ExerciseSelection): void {
    const exercise = EXERCISES.find(
      (item) => item.id === selection.id,
    );

    if (!exercise) {
      return;
    }

    this.selectedExercise.set(exercise);

    this.panelSide.set(selection.panelSide);
  }

  closeExercise(): void {
    this.selectedExercise.set(undefined);
  }
}
