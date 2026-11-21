import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SPANISH_EXERCISES } from '../../tree/data/spanish-exercises.generated';
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
import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';

import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { mediaUrl } from '../../../core/config/media-url';

const SPANISH_LABELS: Readonly<Record<string, string>> = {
  'beginner': 'Principiante',
  'intermediate': 'Intermedio',
  'advanced': 'Avanzado',
  'elite': 'Élite',
  'dynamic': 'Dinámico',
  'static': 'Estático',
  'chest': 'Pecho',
  'pectorals': 'Pectorales',
  'upper-back': 'Espalda alta',
  'lower-back': 'Zona lumbar',
  'latissimus-dorsi': 'Dorsales',
  'lats': 'Dorsales',
  'biceps': 'Bíceps',
  'triceps': 'Tríceps',
  'forearms': 'Antebrazos',
  'rear-deltoids': 'Deltoides posteriores',
  'front-deltoids': 'Deltoides anteriores',
  'lateral-deltoids': 'Deltoides laterales',
  'side-deltoids': 'Deltoides laterales',
  'shoulders': 'Hombros',
  'deltoids': 'Deltoides',
  'abdominals': 'Abdominales',
  'obliques': 'Oblicuos',
  'core': 'Zona media',
  'trapezius': 'Trapecios',
  'traps': 'Trapecios',
  'quadriceps': 'Cuádriceps',
  'hamstrings': 'Isquiotibiales',
  'glutes': 'Glúteos',
  'calves': 'Gemelos',
  'hip-flexors': 'Flexores de cadera',
  'serratus-anterior': 'Serrato anterior',
  'spinal-erectors': 'Erectores espinales',
  'adductors': 'Aductores',
  'abductors': 'Abductores',
  'pull-up-bar': 'Barra de dominadas',
  'rings': 'Anillas',
  'parallettes': 'Paralelas',
  'parallel-bars': 'Barras paralelas',
  'bands': 'Bandas elásticas',
  'added-weight': 'Lastre',
  'floor': 'Suelo',
  'weight-bench': 'Banco',
  'vertical-pole': 'Barra vertical',
  'wall': 'Pared',
};

@Component({
  selector: 'app-compare-page',
  imports: [FormsModule, RouterLink,OptimizedImagePipe],
  templateUrl: './compare-page.html',
  styleUrl: './compare-page.css',
})
export class ComparePage {

  readonly vsLogoUrl = mediaUrl('/optimized/detail/compare/vs_logo.webp');

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly es = this.route.snapshot.data['language'] === 'es';

  exerciseLink(id: string): string[] {
    return this.es && SPANISH_EXERCISES.has(id) ? ['/exercises', id, 'es'] : ['/exercises', id];
  }

  constructor() {
    const doc = inject(DOCUMENT);
    doc.documentElement.lang = this.es ? 'es' : 'en';
    inject(Title).setTitle(this.es ? 'Comparar ejercicios de calistenia | Treethenics' : 'Compare calisthenics exercises | Treethenics');
    inject(Meta).updateTag({ name: 'description', content: this.es
      ? 'Compara dos ejercicios de calistenia por dificultad, nivel de progresión, músculos y material.'
      : 'Compare two calisthenics exercises by difficulty, progression level, muscles and equipment.' });
    const canonical = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? doc.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.treethenics.com/compare' + (this.es ? '/es' : '');
    if (!canonical.parentNode) doc.head.appendChild(canonical);
  }

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

  readonly exercises = EXERCISES
    .map(exercise => this.es ? SPANISH_EXERCISES.get(exercise.id) ?? exercise : exercise)
    .sort((a, b) => a.name.localeCompare(b.name, this.es ? 'es' : 'en'));

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

  readonly suggestedComparisons = [
    {
      title: this.es ? 'Variantes de tirón' : 'Explore pulling variations',
      firstId: 'pull-up',
      secondId: 'archer-pull-up',
    },
    {
      title: this.es ? 'Ejercicios de empuje' : 'Compare pushing exercises',
      firstId: 'push-up',
      secondId: 'archer-push-up',
    },
    {
      title: this.es ? 'Posiciones estáticas' : 'Discover static skills',
      firstId: 'front-lever',
      secondId: 'back-lever',
    },
  ].flatMap((suggestion) => {
    const first = this.exercises.find(item => item.id === suggestion.firstId);
    const second = this.exercises.find(item => item.id === suggestion.secondId);

    return first && second
      ? [{ title: suggestion.title, first, second }]
      : [];
  });

  selectSuggestedComparison(firstId: string, secondId: string): void {
    this.firstExerciseId.set(firstId);
    this.secondExerciseId.set(secondId);

    this.firstSearch.set('');
    this.secondSearch.set('');

    this.closeSelectors();
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
      : (this.es ? 'Sin material' : 'No equipment required');
  }

  label(key: string, original = key): string {
    return this.es ? SPANISH_LABELS[key] ?? original : original;
  }

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return this.label(muscle, MUSCLE_LABELS[muscle]);
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return this.label(equipment, EQUIPMENT_LABELS[equipment]);
  }
}
