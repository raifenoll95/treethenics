import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseRelation } from '../../../shared/models/exercise-relation.model';

export const EXERCISES: Exercise[] = [
  {
    id: 'pull-up',
    name: 'Pull Up',
    slug: 'pull-up',
    difficulty: 'beginner',
    category: 'pull',
    muscles: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
    imageUrl: '/images/exercises/pull-up.png',
    description:
    'A fundamental pulling exercise where you lift your body until your chin passes the bar.',
  },
  {
    id: 'chest-to-bar',
    name: 'Chest to Bar',
    slug: 'chest-to-bar',
    difficulty: 'intermediate',
    category: 'pull',
    muscles: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
  },
  {
    id: 'archer-pull-up',
    name: 'Archer Pull Up',
    slug: 'archer-pull-up',
    difficulty: 'advanced',
    category: 'pull',
    muscles: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
  },
  {
    id: 'muscle-up',
    name: 'Muscle Up',
    slug: 'muscle-up',
    difficulty: 'advanced',
    category: 'pull',
    muscles: ['back', 'biceps', 'triceps'],
    equipment: ['pull-up-bar'],
  },
  {
    id: 'assisted-one-arm-pull-up',
    name: 'Assisted One Arm Pull Up',
    slug: 'assisted-one-arm-pull-up',
    difficulty: 'advanced',
    category: 'pull',
    muscles: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
  },
  {
    id: 'one-arm-pull-up',
    name: 'One Arm Pull Up',
    slug: 'one-arm-pull-up',
    difficulty: 'elite',
    category: 'pull',
    muscles: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
  },
];

export const EXERCISE_RELATIONS: ExerciseRelation[] = [
  {
    from: 'pull-up',
    to: 'chest-to-bar',
    type: 'progression',
  },
  {
    from: 'pull-up',
    to: 'archer-pull-up',
    type: 'progression',
  },
  {
    from: 'chest-to-bar',
    to: 'muscle-up',
    type: 'progression',
  },
  {
    from: 'archer-pull-up',
    to: 'assisted-one-arm-pull-up',
    type: 'progression',
  },
  {
    from: 'assisted-one-arm-pull-up',
    to: 'one-arm-pull-up',
    type: 'progression',
  },
];
