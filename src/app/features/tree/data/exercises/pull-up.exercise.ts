import { Exercise } from '../../../../shared/models/exercise.model';

export const PULL_UP: Exercise = {
    id: 'pull-up',
    name: 'Pull Up',

    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar', 'rings', 'added-weight'
    ],

    description:
      'Grip the bar with your palms facing away and pull your chest toward the bar, keeping your core engaged and lowering yourself with control. Start with assisted pull-ups or resistance bands to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight to increase the difficulty and continue building strength.',

    imageUrl: '/images/exercises/pull-up.png',
  };
