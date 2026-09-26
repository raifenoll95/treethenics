import { Exercise } from '../../../../shared/models/exercise.model';

export const SISSY_SQUAT: Exercise = {
    id: 'sissy-squat',
    name: 'Sissy Squat',
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
      'Stand with your feet shoulder-width apart, rise onto your toes, and lean your body backward while bending your knees and keeping your hips extended, then return to the starting position with control. Start with assisted sissy squats using a stable support to develop quadriceps strength, knee stability, and balance. Gradually increase your range of motion, reduce assistance, and incorporate controlled negatives or weighted variations to build greater leg strength while maintaining proper technique.',
    imageUrl: '/images/exercises/sissy-squat.png',
  };
