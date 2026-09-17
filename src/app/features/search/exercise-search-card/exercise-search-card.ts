import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';

import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

@Component({
  selector: 'app-exercise-search-card',
  imports: [RouterLink],
  templateUrl: './exercise-search-card.html',
  styleUrl: './exercise-search-card.css',
})
export class ExerciseSearchCard {
  readonly exercise = input.required<Exercise>();

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return EQUIPMENT_LABELS[equipment];
  }
}
