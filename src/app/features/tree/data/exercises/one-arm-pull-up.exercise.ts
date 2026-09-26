import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PULL_UP: Exercise = {
    id: 'one-arm-pull-up',
    name: 'One Arm Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a pull-up bar using one hand, engage your core and back muscles, and pull yourself upward until your chin reaches the bar, then lower yourself with control. Start with weighted pull-ups, archer pull-ups, and assisted one-arm pull-ups to develop unilateral strength and grip stability. Gradually reduce assistance, incorporate controlled one-arm negatives, and work toward performing a full one-arm pull-up with proper technique and minimal momentum.',
    imageUrl: '/images/exercises/oap.png',
  };
