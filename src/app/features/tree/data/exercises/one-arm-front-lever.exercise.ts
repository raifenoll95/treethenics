import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_FRONT_LEVER: Exercise = {
    id: 'one-arm-front-lever',
    name: 'One Arm Front Lever',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with one arm, engage your core and back muscles, and extend your body horizontally while maintaining full-body tension and shoulder stability. Start with regular front levers, assisted one-arm holds, and one-arm hanging exercises to develop unilateral strength, grip endurance, and body control. Gradually reduce assistance, practice controlled one-arm negatives, and progress toward maintaining a full one-arm front lever with proper alignment and minimal body rotation.',
    imageUrl: '/images/exercises/one-arm-front.png',
  };
