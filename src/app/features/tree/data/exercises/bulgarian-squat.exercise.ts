import { Exercise } from '../../../../shared/models/exercise.model';

export const BULGARIAN_SQUAT: Exercise = {
    id: 'bulgarian-squat',
    name: 'Bulgarian Squat',
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
      'Stand with one foot forward and your rear foot elevated on a bench, bend your front knee to lower your hips toward the ground, and push through your front foot to return to the starting position. Start with bodyweight Bulgarian split squats and assisted variations to develop leg strength, balance, and hip stability. Gradually increase your range of motion, incorporate dumbbells or a barbell for added resistance, and progress toward more challenging single-leg variations while maintaining proper technique and control.',
    imageUrl: '/images/exercises/bulgarian-squat.png',
  };
