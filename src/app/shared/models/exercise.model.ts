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

export type ExerciseGraphLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Exercise {
  id: string;
  name: string;

  difficulty: ExerciseDifficulty;
  graphLevel: ExerciseGraphLevel;

  category?: ExerciseCategory;

  description?: string;

  muscles: string[];
  equipment: string[];

  imageUrl?: string;
}