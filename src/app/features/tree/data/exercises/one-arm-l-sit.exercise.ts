import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_L_SIT: Exercise = {
    id: 'one-arm-l-sit',
    name: 'One-Arm L-Sit',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Support your body on one hand with your arm straight, lift your legs forward until they are parallel to the ground, and keep your core engaged while maintaining balance and stability. Start with regular L-sits, assisted one-arm holds, and controlled weight shifts to develop unilateral shoulder strength, core stability, and body control. Gradually reduce assistance, extend your legs fully, and practice balancing on one hand while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/one-arm-l-sit.png',
  };
