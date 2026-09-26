import { Exercise } from '../../../../shared/models/exercise.model';

export const EARLY_FRONT_LEVER_PROGRESSIONS: Exercise = {
    id: 'early-front-lever-progressions',
    name: 'Tucked Front Lever',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],

    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],

    equipment: [
      'pull-up-bar',
      'rings'
    ],

    description:
      'Hang from a pull-up bar, bring your knees toward your chest, and engage your core and back muscles to hold your body parallel to the ground. Start with short holds of 5–10 seconds, gradually increasing the duration while maintaining proper form and body control. Once you can hold the position for 15–20 seconds, progress to the advanced tuck front lever or one-leg front lever to build greater strength and stability.',

    imageUrl: '/images/exercises/tuck-front.png',
  };
