import { Exercise } from '../../../../shared/models/exercise.model';

export const HIP_THRUST: Exercise = {
    id: 'hip-thrust',
    name: 'Hip Thrust',
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
      'SSit on the floor with your upper back resting against a bench, feet flat on the ground, and knees bent, then lift your hips by squeezing your glutes until your body forms a straight line from shoulders to knees. Start with bodyweight hip thrusts and glute bridges to develop glute strength, hip stability, and proper movement control. Gradually increase resistance using a barbell or resistance bands, incorporate single-leg variations, and focus on achieving full hip extension while maintaining proper technique.',
    imageUrl: '/images/exercises/hip-thrust.png',
  };
