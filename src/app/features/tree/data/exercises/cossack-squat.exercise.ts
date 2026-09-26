import { Exercise } from '../../../../shared/models/exercise.model';

export const COSSACK_SQUAT: Exercise = {
    id: 'cossack-squat',
    name: 'Cossack Squat',
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
      'Stand with your feet wider than shoulder-width apart, shift your weight to one side, and bend one knee while keeping the opposite leg straight and your chest upright. Start with assisted Cossack squats and lateral lunges to develop leg strength, hip mobility, and balance. Gradually increase your squat depth, reduce assistance, and incorporate weighted variations or controlled side-to-side transitions to improve flexibility, stability, and lower-body strength.',
    imageUrl: '/images/exercises/cossack-squat.png',
  };
