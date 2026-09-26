import { Exercise } from '../../../../shared/models/exercise.model';

export const EXTREME_WIDE_MUSCLE_UP: Exercise = {
    id: 'extreme-wide-muscle-up',
    name: 'Extreme Wide Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Grip the pull-up bar with your hands significantly wider than shoulder-width apart, pull yourself explosively upward, and transition your chest over the bar before pushing into a supported position. Start with regular muscle-ups, wide-grip pull-ups, and assisted wide muscle-up transitions to develop pulling strength, shoulder stability, and coordination. Gradually increase your grip width within a comfortable range, reduce assistance, and focus on maintaining controlled movements and proper shoulder alignment as you progress toward the full extreme wide muscle-up.',
    imageUrl: '/images/exercises/extreme-wide-muscle-up.png',
  };
