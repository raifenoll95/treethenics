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
    movementType: 'dynamic',
    graphLevel: 1,

  showInTree: true,
    category: 'pull',

    targetAreas: [
      'back',
      'biceps',
    ],

    primaryMuscles: [
      'latissimus-dorsi',
      'upper-back',
      'biceps',
    ],

    secondaryMuscles: [
      'forearms',
      'abdominals',
    ],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    imageUrl: '/images/exercises/pull-up.png',
  },
  {
    id: 'dips',
    name: 'Dips',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

  showInTree: true,
    category: 'push',

    targetAreas: [
      'chest',
      'triceps',
      'shoulders',
    ],

    primaryMuscles: [
      'triceps',
      'chest',
      'front-deltoids',
    ],

    secondaryMuscles: [
      'serratus-anterior',
      'abdominals',
    ],

    equipment: [
      'parallettes',
    ],

    description:
      'A compound pushing exercise that develops upper body pressing strength through the chest, triceps and shoulders.',

    imageUrl: '/images/exercises/dips.png',
  },
  {
    id: 'push-up',
    name: 'Push Up',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

  showInTree: true,
    category: 'push',

    targetAreas: [
      'chest',
      'triceps',
      'shoulders',
    ],

    primaryMuscles: [
      'chest',
      'triceps',
      'front-deltoids',
    ],

    secondaryMuscles: [
      'serratus-anterior',
      'abdominals',
    ],

    equipment: [],

    description:
      'A fundamental bodyweight pushing exercise that develops chest, triceps and shoulder strength while requiring full-body control.',

    imageUrl: '/images/exercises/push-ups.png',
  },

  /*
   * LEVEL 2 — INTERMEDIATE
   */
{
  id: 'early-front-lever-progressions',
  name: 'Tucked Front Lever',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: true,
  category: 'pull',

  targetAreas: [
    'back',
    'core',
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals',
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'biceps',
    'forearms',
  ],

  equipment: [
    'pull-up-bar',
    'rings'
  ],

  description:
    'Introductory front lever progressions that develop straight-arm pulling strength, core tension and body control.',

  imageUrl: '/images/exercises/tuck-front.png',
},
{
  id: 'chest-to-bar',
  name: 'Chest to Bar',
  movementType: 'dynamic',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: true,
  category: 'pull',

  targetAreas: [
    'back',
    'biceps',
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps',
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
  ],

  equipment: [
    'pull-up-bar',
  ],

  description:
    'An explosive pulling exercise that increases range of motion and develops the strength needed to pull the chest toward the bar.',

  imageUrl: '/images/exercises/chest-to-bar.png',
},
{
  id: 'l-sit',
  name: 'L-Sit',
  movementType: 'static',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: true,
  category: 'core',

  targetAreas: [
    'core',
  ],

  primaryMuscles: [
    'abdominals',
    'hip-flexors',
  ],

  secondaryMuscles: [
    'triceps',
    'front-deltoids',
    'quadriceps',
  ],

  equipment: [
    'parallettes',
    'rings'
  ],

  description:
    'A static hold that develops core compression, hip flexor strength and straight-arm support control.',

  imageUrl: '/images/exercises/l-sit.png',
},
{
  id: 'handstand',
  name: 'Handstand',

  difficulty: 'intermediate',
  movementType: 'static',
  graphLevel: 2,

  showInTree: true,
  category: 'static',

  targetAreas: [
    'shoulders',
    'core',
  ],

  primaryMuscles: [
    'front-deltoids',
    'side-deltoids',
    'triceps',
  ],

  secondaryMuscles: [
    'trapezius',
    'serratus-anterior',
    'abdominals',
    'forearms',
  ],

  equipment: [],

  description:
    'A fundamental inverted skill that develops balance, overhead stability, shoulder strength and full-body control.',

  imageUrl: '/images/exercises/handstand.png',
},
{
  id: 'pike-push-up',
  name: 'Pike Push Up',
  movementType: 'dynamic',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: true,
  category: 'push',

  targetAreas: [
    'shoulders',
    'triceps',
  ],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],

  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],

  equipment: [],

  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',

  imageUrl: '/images/exercises/pike-push-up.png',
},
{
  id: 'bent-arm-planche',
  name: 'Elbow lever Planche',

  difficulty: 'intermediate',
  movementType: 'static',
  graphLevel: 2,

  showInTree: true,
  category: 'static',

  targetAreas: [
    'shoulders',
    'chest',
    'triceps',
    'core',
  ],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'triceps',
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'forearms',
  ],

  equipment: [],

  description:
    'A bent-arm horizontal hold that develops pressing strength, forward lean control and full-body tension.',

  imageUrl: '/images/exercises/bent-arm-planche.png',
},
 {
  id: 'skin-the-cat',
  name: 'Skin the Cat',
  movementType: 'dynamic',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: true,
  category: 'pull',

  targetAreas: [
    'shoulders',
    'back',
    'core',
  ],

  primaryMuscles: [
    'rear-deltoids',
    'abdominals',
  ],

  secondaryMuscles: [
    'biceps',
    'forearms',
  ],

  equipment: [
    'pull-up-bar','rings',
  ],

  description:
    'A controlled rotational movement that develops shoulder mobility, pulling control and strength through an inverted position.',

  imageUrl: '/images/exercises/skin-the-cat.png',
},

  /*
 * LEVEL 3 — INTERMEDIATE
 */
{
  id: 'hang-to-inverted-press',
  name: 'Inverted Press',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'pull',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'front-deltoids'],
  secondaryMuscles: ['biceps', 'triceps', 'abdominals', 'forearms'],
  equipment: ['pull-up-bar'],
  description:
    'A controlled pulling skill that raises the body from a hanging position into an inverted position using back, shoulder and core strength.',
  imageUrl: '/images/exercises/inverted.png',
},
{
  id: 'dragon-flag',
  name: 'Dragon Flag',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'core',
  targetAreas: ['core'],
  primaryMuscles: ['abdominals', 'obliques'],
  secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
  equipment: [],
  description:
    'A demanding core exercise that develops exceptional trunk strength and full-body tension while controlling the body as a rigid unit.',
  imageUrl: '/images/exercises/dragon-flag.png',
},
{
  id: 'muscle-up',
  name: 'Muscle Up',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/muscle-up.png',
},
{
  id: 'impossible-dip',
  name: 'Impossible Dip',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'push',
  targetAreas: ['triceps', 'shoulders'],
  primaryMuscles: ['triceps', 'front-deltoids'],
  secondaryMuscles: ['chest', 'forearms', 'abdominals'],
  equipment: ['parallettes'],
  description:
    'A demanding dip variation that places exceptional emphasis on the triceps through a mechanically challenging range of motion.',
  imageUrl: '/images/exercises/impossible-dip.png',
},
{
  id: 'korean-dip',
  name: 'Korean Dip',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'push',
  targetAreas: ['shoulders', 'triceps', 'chest'],
  primaryMuscles: ['triceps', 'front-deltoids', 'chest'],
  secondaryMuscles: ['rear-deltoids', 'upper-back', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A behind-the-bar dip variation that develops pressing strength, shoulder extension control and stability through a challenging range of motion.',
  imageUrl: '/images/exercises/korean-dip.png',
},
{
  id: 'handstand-press',
  name: 'Handstand Press',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'push',
  targetAreas: ['shoulders', 'core'],
  primaryMuscles: ['front-deltoids', 'triceps', 'abdominals', 'hip-flexors'],
  secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'quadriceps'],
  equipment: [],
  description:
    'A controlled press into a handstand that requires shoulder strength, compression, balance and precise full-body control.',
},
{
  id: 'early-planche-progressions',
  name: 'Tucked Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/tuck-planche.png',
},
{
  id: 'handstand-push-up',
  name: 'Handstand Push Up',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: true,
  category: 'push',
  targetAreas: ['shoulders', 'triceps'],
  primaryMuscles: ['front-deltoids', 'triceps'],
  secondaryMuscles: ['trapezius', 'serratus-anterior', 'chest', 'abdominals'],
  equipment: [],
  description:
    'A vertical bodyweight press performed from a handstand that develops powerful shoulders, triceps and overhead pressing control.',
  imageUrl: '/images/exercises/hspu3.png',
},
{
  id: 'one-arm-bent-planche',
  name: 'One Arm Elbow Lever Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'core'],
  primaryMuscles: ['front-deltoids', 'chest', 'abdominals'],
  secondaryMuscles: ['triceps', 'forearms', 'obliques', 'glutes'],
  equipment: [],
  description:
    'A unilateral elbow lever that requires balance, core tension and upper-body stability while supporting the body horizontally on one arm.',
  imageUrl: '/images/exercises/one-arm-elbow-lever.png',
},
{
  id: 'back-lever',
  name: 'Back Lever',
  difficulty: 'intermediate',
  movementType: 'static',
  graphLevel: 3,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'upper-back'],
  secondaryMuscles: ['biceps', 'chest', 'abdominals', 'glutes'],
  equipment: ['pull-up-bar'],
  description:
    'A straight-arm static hold with the body horizontal and facing the ground, requiring strong shoulders, back and full-body tension.',
  imageUrl: '/images/exercises/back-lever.png',
},

/*
 * LEVEL 4 — ADVANCED
 */
{
  id: 'front-lever',
  name: 'Front Lever',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
  secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
  equipment: ['pull-up-bar'],
  description:
    'A straight-arm horizontal hold that demands exceptional pulling strength, scapular control and full-body tension.',
  imageUrl: '/images/exercises/front-lever.png',
},
{
  id: 'one-arm-pull-up',
  name: 'One Arm Pull Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',
  targetAreas: ['back', 'biceps'],
  primaryMuscles: ['latissimus-dorsi', 'biceps', 'upper-back'],
  secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals', 'obliques'],
  equipment: ['pull-up-bar'],
  description:
    'A unilateral pull up requiring exceptional back, arm and grip strength to lift the entire body with one arm.',
  imageUrl: '/images/exercises/oap.png',
},
{
  id: 'waist-pull-up',
  name: 'Waist Pull Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
  secondaryMuscles: ['rear-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A high-range pulling exercise where the body is pulled toward the bar at waist level, developing powerful and explosive pulling strength.',
  imageUrl: '/images/exercises/waist-pull-up.png',
},
{
  id: 'human-flag',
  movementType: 'static',
  name: 'Human Flag',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'back', 'core'],
  primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
  secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
  equipment: ['pull-up-bar'],
  description:
    'A lateral static hold that requires powerful shoulders, back and core to keep the body horizontal against gravity.',
  imageUrl: '/images/exercises/human-flag.png',
},
{
  id: 'hefesto',
  name: 'Hefesto',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',
  targetAreas: ['biceps', 'shoulders', 'back'],
  primaryMuscles: ['biceps', 'rear-deltoids', 'latissimus-dorsi'],
  secondaryMuscles: ['forearms', 'upper-back', 'chest', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A demanding behind-the-back pulling skill that requires exceptional biceps strength, shoulder extension and controlled pulling power.',
  imageUrl: '/images/exercises/hefesto.png',
},
{
  id: 'v-sit',
  name: 'V-Sit',
  difficulty: 'advanced',
  movementType: 'static',
  graphLevel: 4,
  showInTree: true,
  category: 'core',
  targetAreas: ['core'],
  primaryMuscles: ['abdominals', 'hip-flexors'],
  secondaryMuscles: ['triceps', 'front-deltoids', 'quadriceps'],
  equipment: [],
  description:
    'An advanced compression hold that raises the legs beyond an L-Sit, requiring exceptional core and hip flexor strength.',
  imageUrl: '/images/exercises/v-sit.png',
},
{
  id: 'straddle-planche',
  name: 'Straddle Planche',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'glutes'],
  equipment: [],
  description:
    'An advanced straight-arm hold where the body remains horizontal with the legs spread to reduce leverage compared with a full planche.',
  imageUrl: '/images/exercises/straddle-planche.png',
},
{
  id: '90-degree-push-up',
  name: '90 Degree Push Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: true,
  category: 'push',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
  secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
  equipment: [],
  description:
    'An advanced handstand pressing movement that lowers the body toward a horizontal position before pressing back to the handstand.',
},
{
  id: 'one-arm-push-up-clean-form',
  name: 'One Arm Push Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: true,
  category: 'push',
  targetAreas: ['chest', 'triceps', 'shoulders', 'core'],
  primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
  secondaryMuscles: ['abdominals', 'obliques', 'serratus-anterior'],
  equipment: [],
  description:
    'A strict unilateral push up that develops powerful pressing strength while demanding significant anti-rotation core control.',
  imageUrl: '/images/exercises/one-arm-push-up.png',
},
{
  id: 'one-arm-back-lever',
  name: 'One Arm Back Lever',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'upper-back'],
  secondaryMuscles: ['biceps', 'obliques', 'abdominals', 'forearms'],
  equipment: ['pull-up-bar'],
  description:
    'A unilateral back lever that dramatically increases the strength, stability and anti-rotation demands of the standard back lever.',
  imageUrl: '/images/exercises/one-arm-back-lever.png',
},

/*
 * LEVEL 5 — ADVANCED
 */
{
  id: 'touch-front-lever',
  name: 'Touch Front Lever',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
  secondaryMuscles: ['biceps', 'abdominals', 'forearms', 'glutes'],
  equipment: ['pull-up-bar'],
  description:
    'A harder front lever variation that brings the torso closer to the bar, significantly increasing pulling and scapular strength demands.',
  imageUrl: '/images/exercises/touch-front.png',
},
{
  id: 'front-lever-pull-up',
  name: 'Front Lever Pull Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 5,
  showInTree: true,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
  secondaryMuscles: ['rear-deltoids', 'abdominals', 'forearms', 'glutes'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic front lever exercise that combines horizontal body tension with powerful pulling through a demanding range of motion.',
  imageUrl: '/images/exercises/front-lever-pull.png',
},
{
  id: 'human-flag-pull-up',
  name: 'Human Flag Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'pull',
  targetAreas: ['shoulders', 'back', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'obliques', 'front-deltoids'],
  secondaryMuscles: ['biceps', 'triceps', 'upper-back', 'forearms'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic human flag variation that adds vertical pulling while maintaining lateral body control and full-body tension.',
  imageUrl: '/images/exercises/human-flag-pu.png',
},
{
  id: 'entrada-de-angel',
  name: 'Entrada de Ángel',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'pull',
  targetAreas: ['biceps', 'shoulders', 'back'],
  primaryMuscles: ['biceps', 'rear-deltoids', 'latissimus-dorsi'],
  secondaryMuscles: ['forearms', 'upper-back', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'An advanced behind-the-bar strength transition that combines powerful pulling, shoulder extension and precise body control.',
  imageUrl: '/images/exercises/entrada-angel.png',
},
{
  id: 'full-planche',
  name: 'Full Planche',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'glutes'],
  equipment: [],
  description:
    'A straight-arm horizontal hold with the legs fully extended, requiring exceptional shoulder strength, scapular control and total-body tension.',
  imageUrl: '/images/exercises/full-planche.png',
},
{
  id: 'clean-one-arm-handstand',
  name: 'One Arm Handstand',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'core'],
  primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
  secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'obliques'],
  equipment: [],
  description:
    'A one-arm balance skill requiring exceptional shoulder stability, hand control, body alignment and precise weight transfer.',
  imageUrl: '/images/exercises/oah2.png',
},
{
  id: 'iron-cross',
  name: 'Iron Cross',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'back', 'biceps'],
  primaryMuscles: ['front-deltoids', 'chest', 'latissimus-dorsi', 'biceps'],
  secondaryMuscles: ['upper-back', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'A classic rings strength hold with both arms extended horizontally, demanding extreme shoulder, chest and straight-arm strength.',
  imageUrl: '/images/exercises/iron-cross.png',
},

/*
 * LEVEL 6 — ELITE
 */
{
  id: 'one-arm-front-lever',
  name: 'One Arm Front Lever',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
  secondaryMuscles: ['biceps', 'forearms', 'abdominals', 'obliques'],
  equipment: ['pull-up-bar'],
  description:
    'An elite unilateral front lever requiring extraordinary pulling strength, scapular stability and resistance to body rotation.',
  imageUrl: '/images/exercises/one-arm-front.png',
},
{
  id: 'victorian',
  name: 'Victorian',
  difficulty: 'elite',
  movementType: 'static',
  graphLevel: 6,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
  secondaryMuscles: ['biceps', 'forearms', 'abdominals', 'glutes'],
  equipment: ['rings'],
  description:
    'An elite rings strength hold with the body horizontal and supported through the arms, demanding exceptional posterior-chain and straight-arm strength.',
  imageUrl: '/images/exercises/victorian.png',
},
{
  id: 'butterfly',
  name: 'Butterfly Muscle Up',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 6,
  showInTree: true,
  category: 'pull',
  targetAreas: ['shoulders', 'back', 'chest', 'biceps'],
  primaryMuscles: ['latissimus-dorsi', 'front-deltoids', 'biceps', 'chest'],
  secondaryMuscles: ['upper-back', 'triceps', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An elite rings strength movement that combines straight-arm control with powerful pulling through a highly demanding transition.',
  imageUrl: '/images/exercises/butterfly.png',
},
{
  id: 'mana',
  name: 'Manna',
  difficulty: 'elite',
  movementType: 'static',
  graphLevel: 6,
  showInTree: true,
  category: 'static',
  targetAreas: ['core', 'shoulders'],
  primaryMuscles: ['abdominals', 'hip-flexors', 'front-deltoids'],
  secondaryMuscles: ['triceps', 'quadriceps', 'forearms', 'upper-back'],
  equipment: [],
  description:
    'An extreme compression hold that elevates the hips and legs far beyond a V-Sit, requiring exceptional mobility, core strength and support control.',
  imageUrl: '/images/exercises/manna.png',
},
{
  id: 'full-planche-push-ups',
  name: 'Full Planche Push Ups',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 6,
  showInTree: true,
  category: 'push',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
  secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
  equipment: [],
  description:
    'An elite dynamic planche exercise that combines a full horizontal hold with controlled pressing through repeated push up repetitions.',
  imageUrl: '/images/exercises/full-planche-pu.png',
},
{
  id: 'maltese',
  name: 'Maltese',
  difficulty: 'elite',
  movementType: 'static',
  graphLevel: 6,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
  primaryMuscles: ['front-deltoids', 'chest', 'biceps'],
  secondaryMuscles: ['serratus-anterior', 'latissimus-dorsi', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An elite straight-arm strength hold with the arms extended wide and the body horizontal, placing enormous demands on the shoulders and chest.',
  imageUrl: '/images/exercises/maltese.png',
},

/*
 * LEVEL 7 — ELITE
 */
{
  id: 'caruso',
  name: 'Caruso',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: true,
  category: 'static',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
  secondaryMuscles: ['biceps', 'forearms', 'abdominals', 'obliques'],
  equipment: ['pull-up-bar'],
  description:
    'An extreme pulling strength skill that demands exceptional straight-arm power, scapular control and total-body tension.',
  imageUrl: '/images/exercises/caruso.png',
},
{
  id: 'inverted-butterfly',
  name: 'Inverted Butterfly',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: true,
  category: 'pull',
  targetAreas: ['shoulders', 'back', 'chest', 'biceps'],
  primaryMuscles: ['front-deltoids', 'latissimus-dorsi', 'biceps', 'chest'],
  secondaryMuscles: ['upper-back', 'triceps', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An extreme inverted rings strength movement requiring exceptional straight-arm control, pulling power and shoulder stability.',
  imageUrl: '/images/exercises/inverted-butterfly.png',
},
{
  id: 'entrada-de-diablo',
  name: 'Entrada de Diablo',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: true,
  category: 'pull',
  targetAreas: ['biceps', 'shoulders', 'back'],
  primaryMuscles: ['biceps', 'rear-deltoids', 'latissimus-dorsi'],
  secondaryMuscles: ['upper-back', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'An extreme behind-the-bar strength transition requiring exceptional pulling power, shoulder extension and precise body control.',
},
{
  id: 'reverse-planche',
  name: 'Reverse Planche',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'back', 'core'],
  primaryMuscles: ['rear-deltoids', 'upper-back', 'triceps'],
  secondaryMuscles: ['latissimus-dorsi', 'abdominals', 'glutes', 'forearms'],
  equipment: [],
  description:
    'An extreme horizontal hold performed with the body orientation reversed from a standard planche, demanding exceptional shoulder extension and total-body strength.',
  imageUrl: '/images/exercises/reverse-planche.png',
},
{
  id: 'one-arm-planche',
  name: 'One Arm Planche',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'obliques', 'forearms'],
  equipment: [],
  description:
    'An extreme unilateral planche requiring extraordinary straight-arm strength, balance and anti-rotation control while supporting the body on one arm.',
  imageUrl: '/images/exercises/one-arm-planche.png',
},
{
  id: 'pelican',
  name: 'Pelican',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: true,
  category: 'pull',
  targetAreas: ['biceps', 'shoulders', 'chest'],
  primaryMuscles: ['biceps', 'front-deltoids', 'chest'],
  secondaryMuscles: ['latissimus-dorsi', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An elite rings strength skill that places enormous load on the biceps and shoulders through deep extension and straight-arm control.',
  imageUrl: '/images/exercises/pelican.png',
},
{
  id: 'zanetti',
  name: 'Zanetti',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
  primaryMuscles: ['front-deltoids', 'chest', 'biceps'],
  secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An extreme rings strength element requiring exceptional straight-arm pushing strength, shoulder stability and full-body control.',
  imageUrl: '/images/exercises/zanetti.png',
},
{
  id: 'inverted-cross',
  name: 'Inverted Cross',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'back', 'core'],
  primaryMuscles: ['front-deltoids', 'side-deltoids', 'trapezius'],
  secondaryMuscles: ['chest', 'latissimus-dorsi', 'triceps', 'abdominals'],
  equipment: ['rings'],
  description:
    'An extreme inverted rings hold with the arms extended laterally, demanding exceptional shoulder strength, stability and precise body control.',
  imageUrl: '/images/exercises/inverted-cross.png',
},




/*
  * LEVEL 9 - no salen en arbol
*/

{
  id: 'full-planche-rings',
  name: 'Rings Full Planche',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'glutes'],
  equipment: [],
  description:
    'A straight-arm horizontal hold with the legs fully extended, requiring exceptional shoulder strength, scapular control and total-body tension.',
  imageUrl: '/images/exercises/full-rings.png',
},
{
  id: 'maltese',
  name: 'Maltese Rings',
  difficulty: 'elite',
  movementType: 'static',
  graphLevel: 6,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
  primaryMuscles: ['front-deltoids', 'chest', 'biceps'],
  secondaryMuscles: ['serratus-anterior', 'latissimus-dorsi', 'forearms', 'abdominals'],
  equipment: ['rings'],
  description:
    'An elite straight-arm strength hold with the arms extended wide and the body horizontal, placing enormous demands on the shoulders and chest.',
  imageUrl: '/images/exercises/maltese-rings.png',
},
{
  id: 'back-lever-rings',
  name: 'Rings Back Lever',
  difficulty: 'intermediate',
  movementType: 'static',
  graphLevel: 3,
  showInTree: false,
  category: 'static',
  targetAreas: ['back', 'shoulders', 'core'],
  primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'upper-back'],
  secondaryMuscles: ['biceps', 'chest', 'abdominals', 'glutes'],
  equipment: ['pull-up-bar'],
  description:
    'A straight-arm static hold with the body horizontal and facing the ground, requiring strong shoulders, back and full-body tension.',
  imageUrl: '/images/exercises/back-lever-rings.png',
},
{
  id: 'handstand-rings',
  name: 'Rings Handstand',

  difficulty: 'advanced',
  movementType: 'static',
  graphLevel: 5,

  showInTree: false,
  category: 'static',

  targetAreas: [
    'shoulders',
    'core',
  ],

  primaryMuscles: [
    'front-deltoids',
    'side-deltoids',
    'triceps',
  ],

  secondaryMuscles: [
    'trapezius',
    'serratus-anterior',
    'abdominals',
    'forearms',
  ],

  equipment: [],

  description:
    'A fundamental inverted skill that develops balance, overhead stability, shoulder strength and full-body control.',

  imageUrl: '/images/exercises/handstand-rings.png',
},
{
    id: 'supinated-pull-up',
    name: 'Supinated Pull Up',

    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,

  showInTree: false,
    category: 'pull',

    targetAreas: [
      'back',
      'biceps',
    ],

    primaryMuscles: [
      'latissimus-dorsi',
      'upper-back',
      'biceps',
    ],

    secondaryMuscles: [
      'forearms',
      'abdominals',
    ],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    imageUrl: '/images/exercises/supinated-pull-up.png',
  },
  {
    id: 'archer-pull-up',
    name: 'Archer Pull Up',

    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 2,

    showInTree: false,
    category: 'pull',

    targetAreas: [
      'back',
      'biceps',
    ],

    primaryMuscles: [
      'latissimus-dorsi',
      'upper-back',
      'biceps',
    ],

    secondaryMuscles: [
      'forearms',
      'abdominals',
    ],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    imageUrl: '/images/exercises/archer-pull-up.png',
  },
 {
    id: 'l-sit-pull-up',
    name: 'L-Sit Pull Up',

    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 2,

    showInTree: false,
    category: 'pull',

    targetAreas: [
      'back',
      'biceps',
    ],

    primaryMuscles: [
      'latissimus-dorsi',
      'upper-back',
      'biceps',
    ],

    secondaryMuscles: [
      'forearms',
      'abdominals',
    ],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    imageUrl: '/images/exercises/l-sit-pull-up.png',
  },
   {
    id: 'australian-pull-up',
    name: 'Australian Pull Up',

    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,

    showInTree: false,
    category: 'pull',

    targetAreas: [
      'back',
      'biceps',
    ],

    primaryMuscles: [
      'latissimus-dorsi',
      'upper-back',
      'biceps',
    ],

    secondaryMuscles: [
      'forearms',
      'abdominals',
    ],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power.',

    imageUrl: '/images/exercises/australian-pull-up.png',
  },

  {
  id: 'frog-stand',
  name: 'Frog Stand',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/frog-stand.png',
},
  {
  id: 'plank',
  name: 'Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/plank.png',
},
{
  id: 'diamond-push-up',
  name: 'Diamond Push Up',
  movementType: 'dynamic',

  difficulty: 'intermediate',
  graphLevel: 2,

  showInTree: false,
  category: 'push',

  targetAreas: [
    'shoulders',
    'triceps',
  ],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],

  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],

  equipment: [],

  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',

  imageUrl: '/images/exercises/diamond-push-up.png',
},
{
  id: 'decline-push-up',
  name: 'Decline Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/decline-push-up.png',
},
{
  id: 'sphinx-push-up',
  name: 'Sphinx Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/sphinx-push-up.png',
},
{
  id: 'clapping-push-up',
  name: 'Clapping Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/clapping-push-up.png',
},
{
  id: 'lean-planche-push-up',
  name: 'Lean Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/lean-planche-push-up.png',
},
{
  id: 'tucked-planche-push-up',
  name: 'Tucked Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/tucked-planche-push-up.png',
},
{
  id: 'straddle-planche-push-up',
  name: 'Straddle Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/straddle-planche-push-up.png',
},
{
  id: 'tuck-advanced-planche-push-up',
  name: 'Tuck Advanced Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/tuck-advanced-planche-push-up.png',
},
{
  id: 'tuck-advanced-planche',
  name: 'Tuck Advanced Planche',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/tuck-advanced-planche.png',
},
{
  id: 'knee-push-up',
  name: 'Knee Push Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'push',
  targetAreas: [
    'shoulders',
    'triceps',
  ],
  primaryMuscles: [
    'front-deltoids',
    'triceps',
  ],
  secondaryMuscles: [
    'upper-back',
    'serratus-anterior',
    'chest',
    'abdominals',
  ],
  equipment: [],
  description:
    'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups.',
  imageUrl: '/images/exercises/knee-push-up.png',
},
{
  id: 'x-grip-muscle-up',
  name: 'X Grip Muscle Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 5,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/x-grip-muscle-up.png',
},
{
  id: 'l-sit-muscle-up',
  name: 'L-Sit Muscle Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/l-sit-muscle-up.png',
},
{
  id: 'one-arm-muscle-up',
  name: 'One-Arm Muscle Up',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 6,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/one-arm-muscle-up.png',
},
{
  id: 'extreme-wide-muscle-up',
  name: 'Extreme Wide Muscle Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 5,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/extreme-wide-muscle-up.png',
},
{
  id: 'slow-muscle-up',
  name: 'Slow Muscle Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/slow-muscle-up.png',
},
{
  id: 'front-lever-muscle-up',
  name: 'Front Lever Muscle Up',
  difficulty: 'advanced',
  movementType: 'dynamic',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/front-lever-muscle-up.png',
},
{
  id: 'one-arm-front-lever-muscle-up',
  name: 'One-Arm Front Lever Muscle Up',
  difficulty: 'elite',
  movementType: 'dynamic',
  graphLevel: 7,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/one-arm-front-lever-muscle-up.png',
},
{
  id: 'rings-muscle-up',
  name: 'Rings Muscle Up',
  difficulty: 'intermediate',
  movementType: 'dynamic',
  graphLevel: 3,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/rings-muscle-up.png',
},
{
  id: 'pistol-squat',
  name: 'Pistol Squat',
  difficulty: 'beginner',
  movementType: 'dynamic',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/pistol-squat.png',
},
{
  id: 'close-to-impossible',
  name: 'Close To Impossible',
  difficulty: 'elite',
  movementType: 'static',
  graphLevel: 7,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/close-to-impossible.png',
},
{
  id: 'crunch',
  name: 'Crunch',
  difficulty: 'beginner',
  movementType: 'dynamic',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',
  targetAreas: ['back', 'biceps', 'chest', 'triceps', 'shoulders'],
  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps', 'triceps'],
  secondaryMuscles: ['chest', 'front-deltoids', 'forearms', 'abdominals'],
  equipment: ['pull-up-bar'],
  description:
    'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it.',
  imageUrl: '/images/exercises/crunch.png',
},
  {
  id: 'side-plank',
  name: 'Side Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/side-plank.png',
},
  {
  id: 'single-leg-glute-bridge',
  name: 'Single-Leg Glute Bridge',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/single-leg-glute-bridge.png',
},
  {
  id: 'maltese-cross',
  name: 'Maltese Cross',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/maltese-cross.png',
},
  {
  id: 'tricep-extensions',
  name: 'Tricep Extensions',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'static',
  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],
  secondaryMuscles: ['chest', 'abdominals', 'forearms', 'hip-flexors'],
  equipment: [],
  description:
    'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations.',
  imageUrl: '/images/exercises/tricep-extensions.png',
}



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
  /*
  {
    from: 'inverted-cross',
    to: 'inverted-butterfly',
    type: 'progression',
  },
  */
];
