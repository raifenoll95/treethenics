import { Exercise } from '../../../../shared/models/exercise.model';

export const PISTOL_SQUAT: Exercise = {
    id: 'pistol-squat',
    name: 'Pistol Squat',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 2,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand on one leg with your opposite leg extended forward, lower your hips into a deep squat while maintaining balance, and push through your supporting foot to return to the starting position. Start with assisted pistol squats, box squats, and single-leg balance exercises to develop leg strength, ankle mobility, and stability. Gradually reduce assistance, increase your squat depth, and incorporate controlled negatives or weighted variations to improve strength and perform full pistol squats with proper technique.',
    imageUrl: '/images/exercises/pistol-squat.png',
  };
