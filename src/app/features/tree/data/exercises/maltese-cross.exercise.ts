import { Exercise } from '../../../../shared/models/exercise.model';

export const MALTESE_CROSS: Exercise = {
    id: 'maltese-cross',
    name: 'Maltese Cross',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides, keeping your body facing downward, core engaged, and shoulders stable. Start with planche holds, ring support exercises, and assisted Maltese Cross variations to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, practice controlled Maltese leans, and focus on maintaining proper alignment and ring stability as you progress toward the full Maltese Cross.',
    imageUrl: '/images/exercises/maltese-cross.png',
  };
