import { Exercise } from '../../../../shared/models/exercise.model';

export const DRAGON_FLAG: Exercise = {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'core',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
    equipment: ['floor'],
    description:
      'ie on your back, grip a stable support behind your head, and lift your body while keeping your shoulders on the ground and your core engaged. Lower your body slowly in a straight line without letting your hips drop or your lower back arch. Start with bent-knee dragon flags or controlled negatives, gradually extending your legs and increasing your range of motion until you can perform the full movement with proper technique.',
    imageUrl: '/images/exercises/dragon-flag.png',
  };
