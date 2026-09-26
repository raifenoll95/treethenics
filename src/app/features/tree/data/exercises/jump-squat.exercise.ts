import { Exercise } from '../../../../shared/models/exercise.model';

export const JUMP_SQUAT: Exercise = {
    id: 'jump-squat',
    name: 'Jump Squat',
    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand with your feet shoulder-width apart, lower your body into a squat position, and jump explosively upward, landing softly with your knees slightly bent. Start with regular squats and controlled jumps to develop leg strength, explosive power, and coordination. Gradually increase your jumping height, incorporate weighted jump squats or tuck jumps, and focus on maintaining proper landing technique and body control.',
    imageUrl: '/images/exercises/jump-squat.png',
  };
