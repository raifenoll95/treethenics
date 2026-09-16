import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EXERCISES } from '../../tree/data/tree.mock';
import {
  Exercise,
  ExerciseGraphLevel,
} from '../../../shared/models/exercise.model';

import { ExerciseSearchCard } from '../exercise-search-card/exercise-search-card';

interface ExerciseLevelGroup {
  level: ExerciseGraphLevel;
  exercises: Exercise[];
}

@Component({
  selector: 'app-search-page',
  imports: [
    FormsModule,
    ExerciseSearchCard,
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  readonly searchTerm = signal('');

  /*
   * Se calcula una sola vez cuando se crea la página.
   * Al volver a entrar/refrescar, cambia el orden.
   */
  readonly randomExercises = this.shuffle(EXERCISES);

  readonly filteredExercises = computed(() => {
    const query = this.searchTerm()
      .trim()
      .toLowerCase();

    if (!query) {
      return this.randomExercises;
    }

    return EXERCISES.filter((exercise) =>
      exercise.name.toLowerCase().includes(query),
    );
  });

  readonly groupedResults = computed<ExerciseLevelGroup[]>(() => {
    const query = this.searchTerm().trim();

    if (!query) {
      return [];
    }

    const exercises = this.filteredExercises();

    const levels: ExerciseGraphLevel[] = [
      1, 2, 3, 4, 5, 6, 7,
    ];

    return levels
      .map((level) => ({
        level,
        exercises: exercises.filter(
          (exercise) => exercise.graphLevel === level,
        ),
      }))
      .filter((group) => group.exercises.length > 0);
  });

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }

  private shuffle(exercises: Exercise[]): Exercise[] {
    return [...exercises].sort(() => Math.random() - 0.5);
  }
}
