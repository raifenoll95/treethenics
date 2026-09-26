import { Exercise } from '../../../../shared/models/exercise.model';

export const CRUNCH: Exercise = {
    id: 'crunch',
    name: 'Crunch',
    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,
    showInTree: false,
    category: 'pull',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals'],
    secondaryMuscles: ['obliques', 'hip-flexors'],
    equipment: ['floor'],
    description:
      'Lie on your back with your knees bent and feet flat on the floor, engage your core, and lift your shoulders toward your knees while keeping your lower back on the ground. Start with basic crunches, focusing on controlled movements and proper breathing to develop abdominal strength and stability. Gradually increase the difficulty by incorporating slow negatives, weighted crunches, or bicycle crunches while maintaining proper technique and avoiding unnecessary neck strain.',
    imageUrl: '/images/exercises/crunch.png',
  };
