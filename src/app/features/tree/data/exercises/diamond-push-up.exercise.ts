import { Exercise } from '../../../../shared/models/exercise.model';

export const DIAMOND_PUSH_UP: Exercise = {
    id: 'diamond-push-up',
    name: 'Diamond Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Place your hands close together beneath your chest, forming a diamond shape with your thumbs and index fingers, then lower your body while keeping your elbows close to your torso before pushing back up. Start with knee diamond push-ups or incline variations to develop triceps strength and upper-body control, gradually progressing to the full movement. Increase the difficulty by elevating your feet, incorporating slow negatives, or adding weight while maintaining proper form and stability.',
    imageUrl: '/images/exercises/diamond-push-up.png',
  };
