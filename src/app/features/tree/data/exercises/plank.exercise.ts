import { Exercise } from '../../../../shared/models/exercise.model';

export const PLANK: Exercise = {
    id: 'plank',
    name: 'Plank',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['glutes', 'front-deltoids', 'serratus-anterior'],
    equipment: ['floor'],
    description:
      'Place your forearms on the floor with your elbows beneath your shoulders, keep your body straight from head to heels, and engage your core and glutes while maintaining a neutral spine. Start with knee planks or elevated planks to develop core strength and stability, gradually progressing to a full forearm plank with proper alignment. Increase the difficulty by incorporating shoulder taps, plank variations with alternating leg lifts, or weighted planks to challenge your balance and build greater core strength.',
    imageUrl: '/images/exercises/plank.png',
  };
