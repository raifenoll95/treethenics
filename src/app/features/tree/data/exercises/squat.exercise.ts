import { Exercise } from '../../../../shared/models/exercise.model';

export const SQUAT: Exercise = {
    id: 'squat',
    name: 'Squat',
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
      'Stand with your feet shoulder-width apart, bend your knees and hips to lower your body while keeping your chest upright and core engaged, then push through your feet to return to the starting position. Start with bodyweight squats and assisted variations to develop leg strength, hip mobility, and balance. Gradually increase your squat depth, incorporate controlled repetitions, and progress toward weighted squats, jump squats, or single-leg variations to build greater lower-body strength and stability.',
    imageUrl: '/images/exercises/squat.png',
  };
