import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PUSH_UP_CLEAN_FORM: Exercise = {
    id: 'one-arm-push-up-clean-form',
    name: 'One Arm Push Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Place one hand on the floor beneath your shoulder, keep your body straight and hips level, and lower your chest toward the ground before pushing back up without twisting your torso. Start with regular push-ups, archer push-ups, and assisted one-arm push-ups to develop unilateral strength and core stability. Gradually reduce assistance, narrow your foot stance, and focus on maintaining proper alignment and control until you can perform a strict one-arm push-up with minimal body rotation.',
    imageUrl: '/images/exercises/one-arm-push-up.png',
  };
