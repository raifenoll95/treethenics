import { Exercise } from '../../../../shared/models/exercise.model';

export const FROG_STAND: Exercise = {
    id: 'frog-stand',
    name: 'Frog Stand',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, rest your knees on your upper arms, and lean forward until your feet lift off the ground, maintaining balance through your hands and core. Start by practicing controlled weight shifts and supported frog stands to develop wrist strength, shoulder stability, and body awareness. Gradually increase your forward lean, improve your balance, and progress toward lifting your knees away from your arms to transition into a tuck planche.',
    imageUrl: '/images/exercises/frog-stand.png',
  };
