import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';

import {
  Exercise,
  ExerciseDifficulty,
} from '../../../shared/models/exercise.model';

import { ExerciseTargetArea } from '../../../shared/models/exercise-target-area.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';

type DifficultyOption = ExerciseDifficulty;

interface SelectOption<T extends string> {
  value: T;
  label: string;
}

@Component({
  selector: 'app-what-should-i-train',
  imports: [RouterLink],
  templateUrl: './what-should-i-train.html',
  styleUrl: './what-should-i-train.css',
})
export class WhatShouldITrain {
  readonly targetAreas: SelectOption<ExerciseTargetArea>[] = [
    { value: 'chest', label: 'Chest' },
    { value: 'back', label: 'Back' },
    { value: 'shoulders', label: 'Shoulders' },
    { value: 'biceps', label: 'Biceps' },
    { value: 'triceps', label: 'Triceps' },
    { value: 'legs', label: 'Legs' },
    { value: 'core', label: 'Core' },
  ];

  readonly equipmentOptions: SelectOption<ExerciseEquipment>[] = [
    { value: 'pull-up-bar', label: 'Pull-up bar' },
    { value: 'rings', label: 'Rings' },
    { value: 'parallettes', label: 'Parallettes' },
    { value: 'bands', label: 'Resistance bands' },
    { value: 'added-weight', label: 'Added weight' },
  ];

  readonly difficulties: SelectOption<DifficultyOption>[] = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'elite', label: 'Elite' },
  ];

  readonly selectedAreas = signal<ExerciseTargetArea[]>([]);

  readonly selectedEquipment = signal<ExerciseEquipment[]>([]);

  readonly allTargetsSelected = computed(
    () => this.selectedAreas().length === 0,
  );

  readonly allEquipmentSelected = computed(
    () => this.selectedEquipment().length === 0,
  );

  readonly selectedDifficulty = signal<DifficultyOption>('beginner');

  readonly results = computed<Exercise[]>(() => {
    const areas = this.selectedAreas();
    const availableEquipment = this.selectedEquipment();
    const difficulty = this.selectedDifficulty();

    return EXERCISES.filter((exercise) => {
      const matchesDifficulty =
        exercise.difficulty === difficulty;

      // ALL: no filtrar por zona muscular.
      // Varias zonas: mostrar ejercicios que trabajen al menos una.
      const matchesArea =
        areas.length === 0 ||
        areas.some((area) =>
          exercise.targetAreas?.includes(area),
        );

      // ALL: no filtrar por material.
      // Si se selecciona material, el usuario debe disponer
      // de todo el material necesario para realizar el ejercicio.
      const matchesEquipment =
        availableEquipment.length === 0 ||
        (exercise.equipment ?? []).every((item) =>
          availableEquipment.includes(item),
        );

      return (
        matchesDifficulty &&
        matchesArea &&
        matchesEquipment
      );
    });
  });

  selectAllTargets(): void {
    this.selectedAreas.set([]);
  }

  toggleArea(area: ExerciseTargetArea): void {
    this.selectedAreas.update((current) =>
      current.includes(area)
        ? current.filter((item) => item !== area)
        : [...current, area],
    );
  }

  hasArea(area: ExerciseTargetArea): boolean {
    return this.selectedAreas().includes(area);
  }

  selectAllEquipment(): void {
    this.selectedEquipment.set([]);
  }

  toggleEquipment(equipment: ExerciseEquipment): void {
    this.selectedEquipment.update((current) =>
      current.includes(equipment)
        ? current.filter((item) => item !== equipment)
        : [...current, equipment],
    );
  }

  hasEquipment(equipment: ExerciseEquipment): boolean {
    return this.selectedEquipment().includes(equipment);
  }

  selectDifficulty(difficulty: DifficultyOption): void {
    this.selectedDifficulty.set(difficulty);
  }

  resetFilters(): void {
    this.selectedDifficulty.set('beginner');
    this.selectedAreas.set([]);
    this.selectedEquipment.set([]);
  }
}
