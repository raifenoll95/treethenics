import { Exercise } from '../../../../shared/models/exercise.model';

export const CLEAN_ONE_ARM_HANDSTAND: Exercise = {
    id: 'clean-one-arm-handstand',
    name: 'One Arm Handstand',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Balance your body upside down on one hand, keeping your supporting arm straight, core engaged, and legs extended while maintaining proper alignment and stability. Start with regular handstands, wall-assisted weight shifts, and fingertip-supported one-arm holds to develop shoulder strength, balance, and body awareness. Gradually transfer more weight onto your supporting hand, reduce fingertip assistance, and practice controlled one-arm balances until you can maintain a stable freestanding one-arm handstand.',
    imageUrl: '/images/exercises/oah2.png',
  };
