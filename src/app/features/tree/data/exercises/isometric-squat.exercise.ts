import { Exercise } from '../../../../shared/models/exercise.model';

export const ISOMETRIC_SQUAT: Exercise = {
    id: 'isometric-squat',
    name: 'Isometric Squat',
    difficulty: 'beginner',
    movementType: 'static',
    graphLevel: 1,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand with your back against a wall, slide down until your knees form a 90-degree angle, and hold the position while keeping your core engaged and feet flat on the floor. Start with a higher squat position to develop quadriceps strength, muscular endurance, and knee stability. Gradually lower your hips, incorporate single-leg wall sits, or add extra weight to increase difficulty while maintaining proper posture and controlled breathing.',
    imageUrl: '/images/exercises/isometric-squat.png',
  };
