import { Exercise } from '../../../../shared/models/exercise.model';

export const X_GRIP_FLAG: Exercise = {
    id: 'x-grip-flag',
    name: 'X-Grip Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with your arms crossed in an X-shaped position, engage your core, and lift your body horizontally while maintaining straight legs and full-body tension. Start with regular human flags, assisted X-grip holds, and tuck variations to develop shoulder strength, grip stability, and balance. Gradually extend your legs, reduce assistance, and practice controlled transitions while focusing on maintaining proper alignment and stability as you progress toward the full X-grip human flag.',
    imageUrl: '/images/exercises/x-grip-flag.png',
  };
