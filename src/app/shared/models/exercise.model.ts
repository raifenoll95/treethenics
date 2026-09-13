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

export interface Exercise {
  id: string;
  name: string;
  slug: string;

  difficulty: ExerciseDifficulty;
  category: ExerciseCategory;

  muscles: string[];
  equipment: string[];

  imageUrl?: string;
  description?: string;
}
