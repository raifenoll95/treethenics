import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';
import {
  Exercise,
  ExerciseDifficulty,
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

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly initialQuery =
    this.route.snapshot.queryParamMap.get('q') ?? '';

  private readonly initialDifficulty =
    this.route.snapshot.queryParamMap.get('difficulty');

  readonly searchTerm = signal(
    this.route.snapshot.queryParamMap.get('q') ?? ''
  );

  readonly totalExercises = EXERCISES.length;

  readonly selectedDifficulty = signal<ExerciseDifficulty | null>(
    this.isDifficulty(this.initialDifficulty)
      ? this.initialDifficulty
      : null,
  );

  readonly difficulties: ExerciseDifficulty[] = [
    'beginner',
    'intermediate',
    'advanced',
    'elite',
  ];

  /*
   * Se calcula una sola vez cuando se crea la página.
   * Al volver a entrar/refrescar, cambia el orden.
   */
  readonly randomExercises = this.shuffle(EXERCISES);

  readonly filteredExercises = computed(() => {
    const query = this.searchTerm()
      .trim()
      .toLowerCase();

    const difficulty = this.selectedDifficulty();

    // Sin búsqueda ni filtro → orden aleatorio
    if (!query && !difficulty) {
      return this.randomExercises;
    }

    return EXERCISES.filter((exercise) => {
      const matchesSearch =
        !query ||
        exercise.name.toLowerCase().includes(query);

      const matchesDifficulty =
        !difficulty ||
        exercise.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  });

  readonly groupedResults = computed<ExerciseLevelGroup[]>(() => {
    const hasSearch = this.searchTerm().trim().length > 0;
    const hasDifficulty = this.selectedDifficulty() !== null;

    if (!hasSearch && !hasDifficulty) {
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

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: value || null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  clearSearch(): void {
    this.updateSearch('');
  }

  toggleDifficulty(difficulty: ExerciseDifficulty): void {
    this.selectedDifficulty.set(difficulty);
    this.syncUrl();
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedDifficulty.set(null);
    this.syncUrl();
  }

  showAll(): void {
    this.selectedDifficulty.set(null);
    this.syncUrl();
  }

  private shuffle(exercises: Exercise[]): Exercise[] {
    return [...exercises].sort(() => Math.random() - 0.5);
  }

  private isDifficulty(
    value: string | null,
  ): value is ExerciseDifficulty {
    return (
      value === 'beginner' ||
      value === 'intermediate' ||
      value === 'advanced' ||
      value === 'elite'
    );
  }

  private syncUrl(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.searchTerm().trim() || null,
        difficulty: this.selectedDifficulty() || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
