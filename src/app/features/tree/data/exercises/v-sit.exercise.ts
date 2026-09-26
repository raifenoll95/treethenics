import { Exercise } from '../../../../shared/models/exercise.model';

export const V_SIT: Exercise = {
    id: 'v-sit',
    name: 'V-Sit',
    difficulty: 'advanced',
    movementType: 'static',
    graphLevel: 4,
    showInTree: true,
    category: 'core',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Support your body on parallel bars or the floor with your arms straight, engage your core, and lift your legs upward to form a V-shape while keeping your knees extended and maintaining balance. Start with L-sits, seated leg raises, and compression exercises to develop core strength, hip flexor endurance, and flexibility. Gradually increase your leg elevation, improve your hamstring flexibility, and progress toward a full V-sit with proper body alignment and control.',
    imageUrl: '/images/exercises/v-sit.png',
  };
