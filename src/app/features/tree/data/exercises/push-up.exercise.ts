import { Exercise } from '../../../../shared/models/exercise.model';

export const PUSH_UP: Exercise = {
    id: 'push-up',
    name: 'Push Up',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

    showInTree: true,
    category: 'push',

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

    equipment: ['floor', 'rings', 'added-weight'],

    description:
      'Place your hands slightly wider than shoulder-width apart, keep your body straight, and lower your chest toward the floor before pushing back up with control. Start with knee push-ups or incline push-ups to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 15–20 clean reps, progress to decline push-ups, diamond push-ups, or weighted push-ups to increase the difficulty and build upper-body strength.',

    imageUrl: '/images/exercises/push-ups.png',
  };
