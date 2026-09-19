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

  // Cambia este número a 40, 50, etc.
  readonly pageSize = 30;

  readonly currentPage = signal(1);

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

  readonly totalPages = computed(() =>
    Math.max(
      1,
      Math.ceil(this.filteredExercises().length / this.pageSize),
    ),
  );

  readonly paginatedExercises = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;

    return this.filteredExercises().slice(
        start,
        start + this.pageSize,
      );
    });

    readonly firstVisibleExercise = computed(() => {
      if (this.filteredExercises().length === 0) {
        return 0;
      }

      return (this.currentPage() - 1) * this.pageSize + 1;
    });

    readonly lastVisibleExercise = computed(() =>
      Math.min(
        this.currentPage() * this.pageSize,
        this.filteredExercises().length,
      ),
    );

  readonly groupedResults = computed<ExerciseLevelGroup[]>(() => {
    const hasSearch = this.searchTerm().trim().length > 0;
    const hasDifficulty = this.selectedDifficulty() !== null;

    if (!hasSearch && !hasDifficulty) {
      return [];
    }

    const exercises = this.paginatedExercises();

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

  nextPage(): void {
    if (this.currentPage() >= this.totalPages()) {
      return;
    }

    this.currentPage.update((page) => page + 1);
    this.scrollToTop();
  }

  previousPage(): void {
    if (this.currentPage() <= 1) {
      return;
    }

    this.currentPage.update((page) => page - 1);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  updateSearch(value: string): void {
    this.searchTerm.set(value);
    this.currentPage.set(1);

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
    this.currentPage.set(1);
    this.syncUrl();
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedDifficulty.set(null);
    this.currentPage.set(1);
    this.syncUrl();
  }

  showAll(): void {
    this.selectedDifficulty.set(null);
    this.currentPage.set(1);
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
