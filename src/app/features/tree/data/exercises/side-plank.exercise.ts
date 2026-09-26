import { Exercise } from '../../../../shared/models/exercise.model';

export const SIDE_PLANK: Exercise = {
    id: 'side-plank',
    name: 'Side Plank',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['obliques', 'abdominals'],
    secondaryMuscles: ['glutes', 'side-deltoids', 'serratus-anterior'],
    equipment: ['floor'],
    description:
      'Lie on your side with your forearm on the floor, elbow beneath your shoulder, and lift your hips to form a straight line from head to feet while engaging your core. Start with bent-knee side planks to develop oblique strength, shoulder stability, and balance, gradually progressing to the full position. Increase the difficulty by incorporating hip dips, leg raises, or weighted side planks while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/side-plank.png',
  };
