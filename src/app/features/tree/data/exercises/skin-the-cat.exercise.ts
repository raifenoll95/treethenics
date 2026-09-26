import { Exercise } from '../../../../shared/models/exercise.model';

export const SKIN_THE_CAT: Exercise = {
    id: 'skin-the-cat',
    name: 'Skin the Cat',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['shoulders', 'back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'rear-deltoids'],

    secondaryMuscles: ['biceps', 'chest', 'forearms'],

    equipment: [
      'pull-up-bar','rings',
    ],

    description:
      'Hang from a pull-up bar or gymnastic rings, tuck your knees toward your chest, and rotate your body backward through your arms into a controlled inverted position. Start with assisted rotations and partial movements to develop shoulder mobility, core strength, and body control. Gradually increase your range of motion, progressing toward a full rotation into the German hang position and returning to the starting position with control.',

    imageUrl: '/images/exercises/skin-the-cat.png',
  };
