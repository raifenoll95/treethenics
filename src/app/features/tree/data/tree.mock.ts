import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseRelation } from '../../../shared/models/exercise-relation.model';

export const EXERCISES: Exercise[] = [
  /*
   * LEVEL 1 — BEGINNER
   */
  {
    id: 'pull-up',
    name: 'Pull Up',

    difficulty: 'beginner',
    graphLevel: 1,

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    muscles: [
      'Latissimus Dorsi',
      'Biceps',
      'Upper Back',
      'Core',
    ],

    equipment: [
      'Pull Up Bar',
    ],

    imageUrl: '/images/exercises/pull-up.png',
  },
  {
    id: 'dips',
    name: 'Dips',
    difficulty: 'beginner',
    graphLevel: 1,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/dips.png',
  },
  {
    id: 'push-up',
    name: 'Push Up',
    difficulty: 'beginner',
    graphLevel: 1,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/push-ups.png',
  },

  /*
   * LEVEL 2 — INTERMEDIATE
   */
  {
    id: 'early-front-lever-progressions',
    name: 'Early Front Lever Progressions',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/tuck-front.png',
  },
  {
    id: 'chest-to-bar',
    name: 'Chest to Bar',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
  },
  {
    id: 'l-sit',
    name: 'L-Sit',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/l-sit.png',
  },
  {
    id: 'handstand',
    name: 'Handstand',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/handstand2.png',
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push Up',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/pike-push-up.png',
  },
  {
    id: 'bent-arm-planche',
    name: 'Bent Arm Planche',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/bent-arm-planche.png',
  },
  {
    id: 'skin-the-cat',
    name: 'Skin the Cat',
    difficulty: 'intermediate',
    graphLevel: 2,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/skin-the-cat.png',
  },

  /*
   * LEVEL 3 — INTERMEDIATE
   */
  {
    id: 'hang-to-inverted-press',
    name: 'Hang to Inverted Press',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
  },
  {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/dragon-flag.png',
  },
  {
    id: 'muscle-up',
    name: 'Muscle Up',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/muscle-up.png',
  },
  {
    id: 'impossible-dip',
    name: 'Impossible Dip',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
  },
  {
    id: 'korean-dip',
    name: 'Korean Dip',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/korean-dip.png',
  },
  {
    id: 'handstand-press',
    name: 'Handstand Press',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
  },
  {
    id: 'early-planche-progressions',
    name: 'Early Planche Progressions',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/tuck-planche.png',
  },
  {
    id: 'handstand-push-up',
    name: 'Handstand Push Up',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/hspu3.png',
  },
  {
    id: 'one-arm-bent-planche',
    name: 'One Arm Bent Planche',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
  },
  {
    id: 'back-lever',
    name: 'Back Lever',
    difficulty: 'intermediate',
    graphLevel: 3,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/back-lever.png',
  },

  /*
   * LEVEL 4 — ADVANCED
   */
  {
    id: 'front-lever',
    name: 'Front Lever',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/front-lever.png',
  },
  {
    id: 'one-arm-pull-up',
    name: 'One Arm Pull Up',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/oap.png',
  },
  {
    id: 'waist-pull-up',
    name: 'Waist Pull Up',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/waist-pull-up.png',
  },
  {
    id: 'human-flag',
    name: 'Human Flag',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/human-flag.png',
  },
  {
    id: 'hefesto',
    name: 'Hefesto',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/hefesto.png',
  },
  {
    id: 'v-sit',
    name: 'V-Sit',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/v-sit.png',
  },
  {
    id: 'straddle-planche',
    name: 'Straddle Planche',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/straddle-planche.png',
  },
  {
    id: '90-degree-push-up',
    name: '90 Degree Push Up',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
  },
  {
    id: 'one-arm-push-up-clean-form',
    name: 'One Arm Push Up',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
  },
  {
    id: 'one-arm-back-lever',
    name: 'One Arm Back Lever',
    difficulty: 'advanced',
    graphLevel: 4,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/one-arm-back-lever.png',
  },

  /*
   * LEVEL 5 — ADVANCED
   */
  {
    id: 'touch-front-lever',
    name: 'Touch Front Lever',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/touch-front.png',
  },
  {
    id: 'front-lever-pull-up',
    name: 'Front Lever Pull Up',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/front-lever-pull.png',
  },
  {
    id: 'human-flag-pull-up',
    name: 'Human Flag Pull Up',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/human-flag-PU.png',

  },
  {
    id: 'entrada-de-angel',
    name: 'Entrada de Ángel',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/entrada-angel.png',
  },
  {
    id: 'full-planche',
    name: 'Full Planche',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/full-planche.png',

  },
  {
    id: 'clean-one-arm-handstand',
    name: 'Clean One Arm Handstand',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/oah2.png',

  },
  {
    id: 'iron-cross',
    name: 'Iron Cross',
    difficulty: 'advanced',
    graphLevel: 5,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/iron-cross.png',
  },

  /*
   * LEVEL 6 — ELITE
   */
  {
    id: 'one-arm-front-lever',
    name: 'One Arm Front Lever',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/one-arm-front.png',
  },
  {
    id: 'victorian',
    name: 'Victorian',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/victorian.png',
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/butterfly.png',
  },
  {
    id: 'mana',
    name: 'Manna',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/manna.png',
  },
  {
    id: 'full-planche-push-ups',
    name: 'Full Planche Push Ups',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/full-planche-pu.png',
  },
  {
    id: 'maltese',
    name: 'Maltese',
    difficulty: 'elite',
    graphLevel: 6,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/maltese.png',
  },

  /*
   * LEVEL 7 — ELITE
   */
  {
    id: 'caruso',
    name: 'Caruso',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
  },
  {
    id: 'inverted-butterfly',
    name: 'Inverted Butterfly',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/inverted-butterfly.png',
  },
  {
    id: 'entrada-de-diablo',
    name: 'Entrada de Diablo',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
  },
  {
    id: 'reverse-planche',
    name: 'Reverse Planche',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/reverse-planche.png',
  },
  {
    id: 'one-arm-planche',
    name: 'One Arm Planche',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/one-arm-planche.png',
  },
  {
    id: 'pelican',
    name: 'Pelican',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
  },
  {
    id: 'zanetti',
    name: 'Zanetti',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
  },
  {
    id: 'inverted-cross',
    name: 'Inverted Cross',
    difficulty: 'elite',
    graphLevel: 7,
    muscles: [],
    equipment: [],
    imageUrl: '/images/exercises/inverted-cross.png',
  },
];

export const EXERCISE_RELATIONS: ExerciseRelation[] = [
  /*
   * PULL UP / FRONT LEVER BRANCH
   */
  {
    from: 'pull-up',
    to: 'early-front-lever-progressions',
    type: 'progression',
  },
  {
    from: 'pull-up',
    to: 'chest-to-bar',
    type: 'progression',
  },
  {
    from: 'pull-up',
    to: 'one-arm-pull-up',
    type: 'progression',
  },

  {
    from: 'early-front-lever-progressions',
    to: 'hang-to-inverted-press',
    type: 'progression',
  },
  {
    from: 'early-front-lever-progressions',
    to: 'front-lever',
    type: 'progression',
  },
  {
    from: 'hang-to-inverted-press',
    to: 'front-lever',
    type: 'progression',
  },

  {
    from: 'front-lever',
    to: 'touch-front-lever',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'one-arm-front-lever',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'front-lever-pull-up',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'caruso',
    type: 'progression',
  },

  /*
   * MUSCLE UP / PULL BRANCH
   */
  {
    from: 'chest-to-bar',
    to: 'muscle-up',
    type: 'progression',
  },
  {
    from: 'dips',
    to: 'muscle-up',
    type: 'progression',
  },
  {
    from: 'muscle-up',
    to: 'waist-pull-up',
    type: 'progression',
  },
  {
    from: 'muscle-up',
    to: 'butterfly',
    type: 'progression',
  },
  {
    from: 'waist-pull-up',
    to: 'front-lever-pull-up',
    type: 'progression',
  },
  {
    from: 'front-lever-pull-up',
    to: 'victorian',
    type: 'progression',
  },
  {
    from: 'victorian',
    to: 'caruso',
    type: 'progression',
  },
  {
    from: 'butterfly',
    to: 'inverted-butterfly',
    type: 'progression',
  },

  /*
   * DIPS BRANCH
   */
  {
    from: 'dips',
    to: 'impossible-dip',
    type: 'progression',
  },
  {
    from: 'dips',
    to: 'korean-dip',
    type: 'progression',
  },
  {
    from: 'korean-dip',
    to: 'hefesto',
    type: 'progression',
  },
  {
    from: 'hefesto',
    to: 'entrada-de-angel',
    type: 'progression',
  },
  {
    from: 'entrada-de-angel',
    to: 'entrada-de-diablo',
    type: 'progression',
  },

  /*
   * HUMAN FLAG
   */
  {
    from: 'human-flag',
    to: 'human-flag-pull-up',
    type: 'progression',
  },

  /*
   * L-SIT
   */
  {
    from: 'l-sit',
    to: 'v-sit',
    type: 'progression',
  },
  {
    from: 'v-sit',
    to: 'mana',
    type: 'progression',
  },

  /*
   * HANDSTAND / PLANCHE
   */
  {
    from: 'handstand',
    to: 'handstand-press',
    type: 'progression',
  },
  {
    from: 'handstand',
    to: 'handstand-push-up',
    type: 'progression',
  },
  {
    from: 'handstand',
    to: 'clean-one-arm-handstand',
    type: 'progression',
  },

  {
    from: 'handstand-press',
    to: 'straddle-planche',
    type: 'progression',
  },
  {
    from: 'early-planche-progressions',
    to: 'straddle-planche',
    type: 'progression',
  },
  {
    from: 'straddle-planche',
    to: 'full-planche',
    type: 'progression',
  },

  {
    from: 'full-planche',
    to: 'full-planche-push-ups',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'reverse-planche',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'one-arm-planche',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'maltese',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'pelican',
    type: 'progression',
  },
  {
    from: 'maltese',
    to: 'zanetti',
    type: 'progression',
  },

  /*
   * PUSH UP
   */
  {
    from: 'push-up',
    to: 'pike-push-up',
    type: 'progression',
  },
  {
    from: 'push-up',
    to: 'one-arm-push-up-clean-form',
    type: 'progression',
  },
  {
    from: 'push-up',
    to: 'bent-arm-planche',
    type: 'progression',
  },

  {
    from: 'pike-push-up',
    to: 'handstand-push-up',
    type: 'progression',
  },
  {
    from: 'handstand-push-up',
    to: '90-degree-push-up',
    type: 'progression',
  },
  {
    from: 'bent-arm-planche',
    to: 'one-arm-bent-planche',
    type: 'progression',
  },

  /*
   * BACK LEVER
   */
  {
    from: 'skin-the-cat',
    to: 'back-lever',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'one-arm-back-lever',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'pelican',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'zanetti',
    type: 'progression',
  },

  /*
   * IRON CROSS
   */
  {
    from: 'iron-cross',
    to: 'inverted-cross',
    type: 'progression',
  },
  {
    from: 'iron-cross',
    to: 'butterfly',
    type: 'progression',
  },
];
