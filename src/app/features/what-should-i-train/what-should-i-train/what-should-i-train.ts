import {
  Component,
  computed,
  signal,
  inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { RouterLink, ActivatedRoute, Router } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';

import {
  Exercise,
  ExerciseDifficulty,
} from '../../../shared/models/exercise.model';

import { ExerciseTargetArea } from '../../../shared/models/exercise-target-area.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';

import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';

type DifficultyOption = ExerciseDifficulty;

interface SelectOption<T extends string> {
  value: T;
  label: string;
}

@Component({
  selector: 'app-what-should-i-train',
  imports: [
    RouterLink,
    OptimizedImagePipe,
  ],
  templateUrl: './what-should-i-train.html',
  styleUrl: './what-should-i-train.css',
})
export class WhatShouldITrain implements OnDestroy {

  // Número de ejercicios por página.
  readonly exercisesPerPageDesktop = 24;
  readonly exercisesPerPageMobile = 10;
  readonly exercisesPerPageList = 50;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly params = this.route.snapshot.queryParamMap;

  readonly isMobile = signal(false);
  readonly currentPage = signal(1);

  readonly viewMode = signal<'grid' | 'list'>(
    isPlatformBrowser(this.platformId) &&
    sessionStorage.getItem('train-view-mode') === 'list'
      ? 'list'
      : 'grid',
  );

  // Ordenación desactivada inicialmente.
  readonly sortByLevel = signal(false);

  toggleSortByLevel(): void {
    this.sortByLevel.update((enabled) => !enabled);
    this.currentPage.set(1);
  }

  readonly pageSize = computed(() =>
    this.viewMode() === 'list'
      ? this.exercisesPerPageList
      : this.isMobile()
        ? this.exercisesPerPageMobile
        : this.exercisesPerPageDesktop,
  );

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.results().length / this.pageSize())),
  );

  readonly paginatedResults = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();

    return this.results().slice(start, start + this.pageSize());
  });

  readonly targetAreas: SelectOption<ExerciseTargetArea | 'arms'>[] = [
    { value: 'chest', label: 'Chest' },
    { value: 'back', label: 'Back' },
    { value: 'shoulders', label: 'Shoulders' },
    { value: 'arms', label: 'Arms' },
    { value: 'legs', label: 'Legs' },
    { value: 'core', label: 'Core' },
  ];

  readonly equipmentOptions: SelectOption<ExerciseEquipment>[] = [
    { value: 'pull-up-bar', label: 'Bar' },
    { value: 'rings', label: 'Rings' },
    { value: 'parallettes', label: 'Parallettes' },
    { value: 'bands', label: 'Bands' },
    { value: 'added-weight', label: 'Added weight' },
    { value: 'floor', label: 'Floor' },
  ];

  readonly difficulties: SelectOption<DifficultyOption>[] = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'elite', label: 'Elite' },
  ];

  readonly searchQuery = signal(
    this.params.get('q') ?? '',
  );

  readonly selectedDifficulty = signal<ExerciseDifficulty | null>(
    this.isDifficulty(this.params.get('difficulty'))
      ? this.params.get('difficulty') as ExerciseDifficulty
      : null,
  );

  readonly selectedAreas = signal<(ExerciseTargetArea | 'arms')[]>(
    this.readAreas(this.params.get('target')),
  );

  readonly selectedEquipment = signal<ExerciseEquipment[]>(
    this.readEquipment(this.params.get('equipment')),
  );

  readonly allTargetsSelected = computed(
    () => this.selectedAreas().length === 0,
  );

  readonly allEquipmentSelected = computed(
    () => this.selectedEquipment().length === 0,
  );

  private readonly shuffledExercises = [...EXERCISES].sort(
    () => Math.random() - 0.5,
  );

  readonly results = computed<Exercise[]>(() => {
    const areas = this.selectedAreas();
    const availableEquipment = this.selectedEquipment();
    const difficulty = this.selectedDifficulty();
    const query = this.searchQuery().trim().toLocaleLowerCase();

    // Primero aplicamos todos los filtros y la búsqueda.
    const filteredExercises = this.shuffledExercises.filter((exercise) => {
      const matchesName =
        query === '' ||
        exercise.name.toLocaleLowerCase().includes(query);

      const matchesDifficulty =
        difficulty === null || exercise.difficulty === difficulty;

      // ALL: no filtrar por zona muscular.
      // Varias zonas: mostrar ejercicios que trabajen al menos una.
      const matchesArea =
        areas.length === 0 ||
        areas.some((area) =>
          area === 'arms'
            ? exercise.targetAreas?.includes('biceps') ||
              exercise.targetAreas?.includes('triceps')
            : exercise.targetAreas?.includes(area),
        );

      // ALL: no filtrar por material.
      const matchesEquipment =
        availableEquipment.length === 0 ||
        availableEquipment.some((item) =>
          exercise.equipment?.includes(item),
        );

      return (
        matchesDifficulty &&
        matchesArea &&
        matchesEquipment &&
        matchesName
      );
    });

    // Si la ordenación está desactivada, mantenemos el orden original.
    if (!this.sortByLevel()) {
      return filteredExercises;
    }

    // Si está activada: Beginner → Intermediate → Advanced → Elite.
    const difficultyOrder: Record<ExerciseDifficulty, number> = {
      beginner: 0,
      intermediate: 1,
      advanced: 2,
      elite: 3,
    };

    return [...filteredExercises].sort(
      (a, b) =>
        difficultyOrder[a.difficulty] -
        difficultyOrder[b.difficulty],
    );
  });

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

  private readAreas(
    value: string | null,
  ): (ExerciseTargetArea | 'arms')[] {
    const values = value?.split(',') ?? [];

    return this.targetAreas
      .map((area) => area.value)
      .filter((area) => values.includes(area));
  }

  private readEquipment(value: string | null): ExerciseEquipment[] {
    const values = value?.split(',') ?? [];

    return this.equipmentOptions
      .map((item) => item.value)
      .filter((item) => values.includes(item));
  }

  private syncUrl(): void {
    this.currentPage.set(1);

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        difficulty: this.selectedDifficulty(),
        target: this.selectedAreas().join(',') || null,
        equipment: this.selectedEquipment().join(',') || null,
        q: this.searchQuery().trim() || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchQuery.set(input.value);
    this.currentPage.set(1);
  }

  saveSearch(): void {
    this.syncUrl();
  }

  selectAllTargets(): void {
    this.selectedAreas.set([]);
    this.syncUrl();
  }

  toggleArea(area: ExerciseTargetArea | 'arms'): void {
    this.selectedAreas.update((current) =>
      current.includes(area)
        ? current.filter((item) => item !== area)
        : [...current, area],
    );

    this.syncUrl();
  }

  hasArea(area: ExerciseTargetArea | 'arms'): boolean {
    return this.selectedAreas().includes(area);
  }

  selectAllEquipment(): void {
    this.selectedEquipment.set([]);
    this.syncUrl();
  }

  toggleEquipment(equipment: ExerciseEquipment): void {
    this.selectedEquipment.update((current) =>
      current.includes(equipment)
        ? current.filter((item) => item !== equipment)
        : [...current, equipment],
    );

    this.syncUrl();
  }

  hasEquipment(equipment: ExerciseEquipment): boolean {
    return this.selectedEquipment().includes(equipment);
  }

  selectDifficulty(difficulty: DifficultyOption): void {
    this.selectedDifficulty.update((current) =>
      current === difficulty ? null : difficulty,
    );

    this.syncUrl();
  }

  resetFilters(): void {
    this.selectedDifficulty.set(null);
    this.selectedAreas.set([]);
    this.selectedEquipment.set([]);
    this.syncUrl();
  }

  private readonly updateScreenSize = (): void => {
    const mobile = window.innerWidth <= 768;

    if (this.isMobile() !== mobile) {
      this.isMobile.set(mobile);
      this.currentPage.set(1);
    }
  };

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
    this.currentPage.set(1);

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('train-view-mode', mode);
    }
  }

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.updateScreenSize);
    }
  }

  previousPage(): void {
    this.currentPage.update((page) => Math.max(1, page - 1));
  }

  nextPage(): void {
    this.currentPage.update((page) =>
      Math.min(this.totalPages(), page + 1),
    );
  }
}
