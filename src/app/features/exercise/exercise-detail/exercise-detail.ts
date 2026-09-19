import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';

import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { AnatomyViewer } from '../../../shared/components/anatomy-viewer/anatomy-viewer';
import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

@Component({
  selector: 'app-exercise-detail',
  imports: [RouterLink, AnatomyViewer],
  templateUrl: './exercise-detail.html',
  styleUrl: './exercise-detail.css',
})
export class ExerciseDetail {

  readonly route = inject(ActivatedRoute);

  readonly origin = this.route.snapshot.queryParamMap.get('from');

  readonly backQueryParams =
  this.origin === 'search'
    ? {
        q: this.route.snapshot.queryParamMap.get('q'),
        difficulty: this.route.snapshot.queryParamMap.get('difficulty'),
      }
    : {};

  readonly backRoute =
    this.origin === 'tree'
      ? '/'
      : '/search';

  readonly backLabel =
    this.origin === 'tree'
      ? 'Back to Tree'
      : 'Back to Exercises';

  readonly exerciseId = computed(
    () => this.route.snapshot.paramMap.get('id'),
  );

  readonly exercise = computed(() => {
    const id = this.exerciseId();

    return EXERCISES.find(
      (exercise) => exercise.id === id,
    );
  });

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return EQUIPMENT_LABELS[equipment];
  }
}
