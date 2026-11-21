import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ExerciseSelection, TreeCanvas } from '../tree-canvas/tree-canvas';
import { EXERCISES } from '../data/tree.mock';
import { SPANISH_EXERCISES } from '../data/spanish-exercises.generated';
import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';
import { mediaUrl } from '../../../core/config/media-url';
import { EQUIPMENT_LABELS, MUSCLE_LABELS } from '../../../shared/data/exercise-metadata';

const spanishLabels: Record<string, string> = {
  "beginner": "Principiante",
  "intermediate": "Intermedio",
  "advanced": "Avanzado",
  "elite": "Élite",
  "static": "Estático",
  "dynamic": "Dinámico",
  "biceps": "Bíceps",
  "triceps": "Tríceps",
  "latissimus-dorsi": "Dorsales",
  "upper-back": "Espalda alta",
  "rear-deltoids": "Deltoides posteriores",
  "forearms": "Antebrazos",
  "abdominals": "Abdominales",
  "pectorals": "Pectorales",
  "front-deltoids": "Deltoides anteriores",
  "lateral-deltoids": "Deltoides laterales",
  "quadriceps": "Cuádriceps",
  "hamstrings": "Isquiotibiales",
  "glutes": "Glúteos",
  "calves": "Gemelos",
  "obliques": "Oblicuos",
  "lower-back": "Lumbares",
  "pull-up-bar": "Barra de dominadas",
  "rings": "Anillas",
  "parallettes": "Paralelas",
  "bands": "Bandas elásticas",
  "added-weight": "Lastre",
  "floor": "Suelo",
  "weight-bench": "Banco",
  "vertical-pole": "Barra vertical",
  "wall": "Pared"
};

@Component({
  selector: 'app-tree-page',
  imports: [TreeCanvas, RouterLink, OptimizedImagePipe],
  templateUrl: './tree-page.html',
  styleUrl: './tree-page.css',
})
export class TreePage {
  readonly es = inject(ActivatedRoute).snapshot.data['language'] === 'es';
  readonly treeBackgroundImage = `url("${mediaUrl('/optimized/detail/calisthenics-park.webp')}")`;
  readonly totalExercises = EXERCISES.length;
  readonly panelSide = signal<'left' | 'right'>('right');
  readonly selectedExercise = signal<Exercise | undefined>(undefined);

  constructor() {
    const doc = inject(DOCUMENT);
    doc.documentElement.lang = this.es ? 'es' : 'en';
    inject(Title).setTitle(this.es ? 'Árbol de progresiones de calistenia | Treethenics' : 'Calisthenics Progression Tree | Treethenics');
    inject(Meta).updateTag({ name: 'description', content: this.es
      ? 'Explora el árbol de calistenia por niveles y descubre cómo se conectan los ejercicios.'
      : 'Explore calisthenics progressions by level and see how exercises connect.' });
    const canonical = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? doc.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.treethenics.com/tree' + (this.es ? '/es' : '');
    if (!canonical.parentNode) doc.head.appendChild(canonical);
  }

  label(key: string, english = key): string {
    return this.es ? spanishLabels[key] ?? english : english;
  }

  getMuscleLabel(key: ExerciseMuscle): string {
    return this.label(key, MUSCLE_LABELS[key]);
  }

  getEquipmentLabel(key: ExerciseEquipment): string {
    return this.label(key, EQUIPMENT_LABELS[key]);
  }

  exerciseLink(id: string): string[] {
    return this.es && SPANISH_EXERCISES.has(id) ? ['/exercises', id, 'es'] : ['/exercises', id];
  }

  onExerciseSelected(selection: ExerciseSelection): void {
    const original = EXERCISES.find(item => item.id === selection.id);
    if (!original) return;
    this.selectedExercise.set(this.es ? SPANISH_EXERCISES.get(original.id) ?? original : original);
    this.panelSide.set(selection.panelSide);
  }

  closeExercise(): void {
    this.selectedExercise.set(undefined);
  }
}
