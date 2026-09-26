import { Exercise } from '../../../../shared/models/exercise.model';

export const SINGLE_LEG_GLUTE_BRIDGE: Exercise = {
    id: 'single-leg-glute-bridge',
    name: 'Single-Leg Glute Bridge',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['glutes', 'hamstrings'],
    secondaryMuscles: ['abdominals', 'obliques', 'lower-back'],
    equipment: ['floor'],
    description:
      'Lie on your back with one knee bent and the opposite leg extended, then push through your planted heel to lift your hips while keeping your core engaged and pelvis level. Start with regular glute bridges and assisted single-leg variations to develop glute strength, hip stability, and balance. Gradually increase your range of motion, incorporate controlled repetitions or resistance bands, and progress toward weighted single-leg glute bridges while maintaining proper alignment and stability.',
    imageUrl: '/images/exercises/single-leg-glute-bridge.png',
  };
