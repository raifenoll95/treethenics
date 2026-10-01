import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';

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
import { IMAGE_VERSION } from '../../../core/config/image-version';

@Component({
  selector: 'app-compare-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './compare-page.html',
  styleUrl: './compare-page.css',
})
export class ComparePage {

  readonly vsLogoUrl =
  `https://assets.treethenics.com/optimized/detail/compare/vs_logo.webp?v=${IMAGE_VERSION}`;

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly params = this.route.snapshot.queryParamMap;

  private sameItems<T>(first: T[] = [], second: T[] = []): boolean {
    return (
      first.length === second.length &&
      first.every((item) => second.includes(item))
    );
  }

  samePrimaryMuscles(first: Exercise, second: Exercise): boolean {
    return this.sameItems(
      first.primaryMuscles,
      second.primaryMuscles,
    );
  }

  sameSecondaryMuscles(first: Exercise, second: Exercise): boolean {
    return this.sameItems(
      first.secondaryMuscles,
      second.secondaryMuscles,
    );
  }

  sameEquipment(first: Exercise, second: Exercise): boolean {
    return this.sameItems(
      first.equipment,
      second.equipment,
    );
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      const picker = (target as Element).closest?.('.compare-picker');

      if (!picker || !this.elementRef.nativeElement.contains(picker)) {
        this.closeSelectors();
      }
    }

  readonly firstSearch = signal('');
  readonly secondSearch = signal('');

  readonly firstSelectorOpen = signal(false);
  readonly secondSelectorOpen = signal(false);

  readonly filteredFirstExercises = computed(() => {
    const query = this.firstSearch().trim().toLowerCase();

    return this.exercises.filter(
      (exercise) =>
        exercise.id !== this.secondExerciseId() &&
        exercise.name.toLowerCase().includes(query),
    );
  });

  readonly filteredSecondExercises = computed(() => {
    const query = this.secondSearch().trim().toLowerCase();

    return this.exercises.filter(
        (exercise) =>
          exercise.id !== this.firstExerciseId() &&
          exercise.name.toLowerCase().includes(query),
      );
  });

  openFirstSelector(): void {
    this.firstSelectorOpen.set(true);
    this.secondSelectorOpen.set(false);
  }

  openSecondSelector(): void {
    this.secondSelectorOpen.set(true);
    this.firstSelectorOpen.set(false);
  }

  chooseFirstExercise(id: string): void {
    this.selectFirstExercise(id);
    this.firstSearch.set('');
    this.firstSelectorOpen.set(false);
  }

  chooseSecondExercise(id: string): void {
    this.selectSecondExercise(id);
    this.secondSearch.set('');
    this.secondSelectorOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  closeSelectors(): void {
    this.firstSelectorOpen.set(false);
    this.secondSelectorOpen.set(false);
  }

  readonly exercises = [...EXERCISES].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  readonly firstExerciseId = signal<string>(
    this.getValidExerciseId(this.params.get('first')),
  );

  readonly secondExerciseId = signal<string>(
    this.getValidExerciseId(this.params.get('second')),
  );

  private getValidExerciseId(id: string | null): string {
    return id && this.exercises.some((exercise) => exercise.id === id)
      ? id
      : '';
  }

  private syncUrl(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        first: this.firstExerciseId() || null,
        second: this.secondExerciseId() || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

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
    this.syncUrl();
  }

  selectSecondExercise(id: string): void {
    this.secondExerciseId.set(id);
    this.syncUrl();
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
