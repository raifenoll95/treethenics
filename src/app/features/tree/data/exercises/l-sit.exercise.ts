import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT: Exercise = {
    id: 'l-sit',
    name: 'L-Sit',
    movementType: 'static',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'core',

    targetAreas: ['core', 'shoulders'],

    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],

    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],

    equipment: [
      'parallettes',
      'rings', 'floor'
    ],

    description:
      'Support your body on parallel bars or the floor, keep your arms straight, and lift your legs until they are parallel to the ground while engaging your core. Start with tuck L-sits or bent-knee holds, gradually increasing the duration and extending your legs as your strength improves. Once you can hold a full L-sit for 15–20 seconds, progress to longer holds, weighted L-sits, or V-sits to increase difficulty and build greater core strength.',

    imageUrl: '/images/exercises/l-sit.png',
  };
