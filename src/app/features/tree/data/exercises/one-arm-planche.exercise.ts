import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PLANCHE: Exercise = {
    id: 'one-arm-planche',
    name: 'One Arm Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Balance your body horizontally on one straight arm, keeping your core engaged, legs extended, and shoulders stable while maintaining full-body tension and control. Start with full planche holds, assisted one-arm planche variations, and controlled weight shifts to develop unilateral shoulder strength, wrist stability, and balance. Gradually transfer more weight onto your supporting arm, reduce assistance, and practice straddle one-arm planche variations before progressing toward the full one-arm planche with proper alignment and stability.',
    imageUrl: '/images/exercises/one-arm-planche.png',
  };
