import { Component, input } from '@angular/core';

import { Exercise } from '../../../shared/models/exercise.model';

@Component({
  selector: 'app-exercise-search-card',
  imports: [],
  templateUrl: './exercise-search-card.html',
  styleUrl: './exercise-search-card.css',
})
export class ExerciseSearchCard {
  readonly exercise = input.required<Exercise>();
}
