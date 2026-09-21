import { ExerciseEquipment } from '../models/exercise-equipment.model';
import { ExerciseMuscle } from '../models/exercise-muscle.model';
import { ExerciseTargetArea } from '../models/exercise-target-area.model';

export const MUSCLE_LABELS: Record<ExerciseMuscle, string> = {
  'latissimus-dorsi': 'Lats',
  'upper-back': 'Upper Back',
  'lower-back': 'Lower Back',
  trapezius: 'Trapezius',
  'rear-deltoids': 'Rear Deltoids',
  'front-deltoids': 'Front Deltoids',
  'side-deltoids': 'Side Deltoids',
  biceps: 'Biceps',
  triceps: 'Triceps',
  forearms: 'Forearms',
  chest: 'Chest',
  abdominals: 'Abdominals',
  obliques: 'Obliques',
  'hip-flexors': 'Hip Flexors',
  glutes: 'Glutes',
  quadriceps: 'Quadriceps',
  hamstrings: 'Hamstrings',
  calves: 'Calves',
  'serratus-anterior': 'Serratus Anterior',
};

export const EQUIPMENT_LABELS: Record<ExerciseEquipment, string> = {
  'pull-up-bar': 'Pull Up Bar',
  rings: 'Rings',
  parallettes: 'Parallettes',
  bands: 'Bands',
  'added-weight': 'Added Weight',
  floor: 'Floor',
  'vertical-pole': 'Vertical Pole',
};

export const TARGET_AREA_LABELS: Record<ExerciseTargetArea, string> = {
  chest: 'Chest',
  back: 'Back',
  shoulders: 'Shoulders',
  biceps: 'Biceps',
  triceps: 'Triceps',
  legs: 'Legs',
  core: 'Core',
};

export const TARGET_AREA_OPTIONS = Object.entries(
  TARGET_AREA_LABELS,
).map(([value, label]) => ({
  value: value as ExerciseTargetArea,
  label,
}));

export const EQUIPMENT_OPTIONS = Object.entries(
  EQUIPMENT_LABELS,
).map(([value, label]) => ({
  value: value as ExerciseEquipment,
  label,
}));
