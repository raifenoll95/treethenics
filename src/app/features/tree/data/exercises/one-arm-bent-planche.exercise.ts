import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_BENT_PLANCHE: Exercise = {
    id: 'one-arm-bent-planche',
    name: 'One Arm Elbow Planche',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: ['floor'],
    description:
      'Balance your body horizontally on one bent arm, keeping your core engaged and your legs extended while maintaining full-body tension and control. Start with tuck planche holds, bent-arm planche variations, and assisted one-arm balances to develop the necessary shoulder strength and stability. Gradually shift more weight onto your supporting arm, reduce assistance, and work toward extending your legs while maintaining proper alignment and balance.',
    imageUrl: '/images/exercises/one-arm-elbow-lever.png',
  };
