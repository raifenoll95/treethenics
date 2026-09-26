import { Exercise } from '../../../../shared/models/exercise.model';

export const MALTESE: Exercise = {
    id: 'maltese',
    name: 'Maltese',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings','floor','parallettes'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides at shoulder level, keeping your core engaged and maintaining full-body tension. Start with planche holds, Maltese leans, and assisted Maltese variations to develop shoulder strength, straight-arm stability, and body control. Gradually increase your arm extension, reduce assistance, and practice controlled Maltese holds while maintaining proper alignment and stability as you progress toward the full movement.',
    imageUrl: '/images/exercises/maltese.png',
  };
