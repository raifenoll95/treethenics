import { Exercise } from '../../../../shared/models/exercise.model';

export const WAIST_PULL_UP: Exercise = {
    id: 'waist-pull-up',
    name: 'Waist Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with an overhand grip, engage your core, and pull explosively until the bar reaches your waist, keeping your body controlled throughout the movement. Start with regular pull-ups, chest-to-bar pull-ups, and explosive high pull-ups to develop the strength and power needed for this exercise. Gradually increase your pulling height, improve your coordination, and focus on generating explosive power while minimizing momentum to achieve a controlled waist-level pull-up.',
    imageUrl: '/images/exercises/waist-pull-up.png',
  };
