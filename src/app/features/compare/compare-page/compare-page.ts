import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';
import { Exercise } from '../../../shared/models/exercise.model';

import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';

@Component({
  selector: 'app-compare-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './compare-page.html',
  styleUrl: './compare-page.css',
})
export class ComparePage {
  readonly exercises = [...EXERCISES].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  readonly firstExerciseId = signal<string>('');
  readonly secondExerciseId = signal<string>('');

  readonly firstExercise = computed(() =>
    this.exercises.find(
      (exercise) => exercise.id === this.firstExerciseId(),
    ),
  );

  readonly secondExercise = computed(() =>
    this.exercises.find(
      (exercise) => exercise.id === this.secondExerciseId(),
    ),
  );

  selectFirstExercise(id: string): void {
    this.firstExerciseId.set(id);
  }

  selectSecondExercise(id: string): void {
    this.secondExerciseId.set(id);
  }

  getMuscles(exercise: Exercise, type: 'primary' | 'secondary'): string {
    const muscles =
      type === 'primary'
        ? exercise.primaryMuscles ?? []
        : exercise.secondaryMuscles ?? [];

    return muscles.length
      ? muscles.map((muscle) => this.getMuscleLabel(muscle)).join(', ')
      : '—';
  }

  getEquipment(exercise: Exercise): string {
    return exercise.equipment?.length
      ? exercise.equipment
          .map((equipment) => this.getEquipmentLabel(equipment))
          .join(', ')
      : 'No equipment required';
  }

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return EQUIPMENT_LABELS[equipment];
  }
}
