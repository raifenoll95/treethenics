import { Exercise } from '../../../../shared/models/exercise.model';

export const CLUTCH_FLAG: Exercise = {
    id: 'clutch-flag',
    name: 'Clutch Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with your arms wrapped around it, engage your core, and lift your body horizontally to the side while keeping your legs extended and maintaining balance. Start with assisted clutch flag holds, tuck variations, and side plank exercises to develop core strength, shoulder stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions to achieve a full clutch flag with proper alignment and stability.',
    imageUrl: '/images/exercises/clutch-flag.png',
  };
