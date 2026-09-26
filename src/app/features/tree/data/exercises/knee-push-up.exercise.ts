import { Exercise } from '../../../../shared/models/exercise.model';

export const KNEE_PUSH_UP: Exercise = {
    id: 'knee-push-up',
    name: 'Knee Push Up',
    movementType: 'dynamic',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands slightly wider than shoulder-width apart, keep your knees on the floor, and lower your chest toward the ground while maintaining a straight line from your head to your knees. Start with controlled knee push-ups to develop chest, shoulder, and triceps strength, gradually increasing repetitions while maintaining proper form. Progress by incorporating slow negatives, reducing knee support, and transitioning toward full push-ups as your upper-body strength and core stability improve.',
    imageUrl: '/images/exercises/knee-push-up.png',
  };
