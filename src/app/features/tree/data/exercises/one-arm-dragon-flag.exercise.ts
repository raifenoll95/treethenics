import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_DRAGON_FLAG: Exercise = {
    id: 'one-arm-dragon-flag',
    name: 'One-Arm Dragon Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
    equipment: ['floor'],
    description:
      'Lie on your back, grip a stable support behind your head with one hand, and lift your body into a straight line while keeping your shoulders grounded and core engaged. Lower your body slowly without letting your hips drop or your lower back arch, maintaining balance and control throughout the movement. Start with regular dragon flags, assisted one-arm variations, and controlled negatives, gradually reducing assistance as you develop the core strength and stability needed to perform the full exercise.',
    imageUrl: '/images/exercises/one-arm-dragon-flag.png',
  };
