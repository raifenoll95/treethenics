import { Exercise } from '../../../../shared/models/exercise.model';

export const MALTESE_RINGS: Exercise = {
    id: 'maltese-rings',
    name: 'Maltese Rings',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides, keeping your body facing downward, core engaged, and shoulders stable. Start with ring support holds, planche variations, and assisted Maltese exercises to develop shoulder strength, straight-arm stability, and body control. Gradually increase your arm extension, reduce assistance, and practice controlled Maltese holds while maintaining proper alignment and ring stability as you progress toward the full movement.',
    imageUrl: '/images/exercises/maltese-rings.png',
  };
