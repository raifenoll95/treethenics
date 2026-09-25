import { ExerciseEquipment } from './exercise-equipment.model';
import { ExerciseMuscle } from './exercise-muscle.model';
import { ExerciseTargetArea } from './exercise-target-area.model';

export type ExerciseMovementType =
  | 'static'
  | 'dynamic';

export type ExerciseDifficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'elite';

export type ExerciseCategory =
  | 'pull'
  | 'push'
  | 'legs'
  | 'core'
  | 'static';

export type ExerciseGraphLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;

export interface Exercise {
  id: string;
  name: string;

  difficulty: ExerciseDifficulty;
  graphLevel: ExerciseGraphLevel;

  category?: ExerciseCategory;
  movementType?: ExerciseMovementType;
  showInTree: boolean;


  /*
   * Áreas generales.
   * Se utilizarán principalmente para filtros.
   */
  targetAreas?: ExerciseTargetArea[];

  /*
   * Músculos principales del ejercicio.
   */
  primaryMuscles?: ExerciseMuscle[];

  /*
   * Músculos que participan de forma secundaria.
   */
  secondaryMuscles?: ExerciseMuscle[];

  /*
   * Material necesario.
   */
  equipment?: ExerciseEquipment[];

  description?: string;

  imageUrl?: string;

  overview?: string;

  howTo?: {
    title: string;
    description: string;
  }[];

  commonMistakes?: {
    title: string;
    description: string;
  }[];

  progression?: {
    previous: string[];
    next: string[];
  };

  relatedExercises?: string[];

  faq?: {
    question: string;
    answer: string;
  }[];

  seo?: {
    title: string;
    description: string;
  };
}
