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

import { ImageVersionPipe } from '../../../shared/pipes/image-version.pipe';

@Component({
  selector: 'app-exercise-detail',
  imports: [RouterLink, AnatomyViewer, ImageVersionPipe],
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
    : this.origin === 'what-should-i-train'
      ? {
          difficulty: this.route.snapshot.queryParamMap.get('difficulty'),
          target: this.route.snapshot.queryParamMap.get('target'),
          equipment: this.route.snapshot.queryParamMap.get('equipment'),
          q: this.route.snapshot.queryParamMap.get('q'),
        }
      : this.origin === 'compare'
        ? {
            first: this.route.snapshot.queryParamMap.get('first'),
            second: this.route.snapshot.queryParamMap.get('second'),
          }
        : {};

  readonly backRoute =
  this.origin === 'tree'
    ? '/'
    : this.origin === 'what-should-i-train'
      ? '/what-should-i-train'
      : this.origin === 'compare'
        ? '/compare'
        : '/search';

  readonly backLabel =
  this.origin === 'tree'
    ? 'Back to Tree'
    : this.origin === 'what-should-i-train'
      ? 'Back to What should I train?'
      : this.origin === 'compare'
        ? 'Back to Compare'
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
