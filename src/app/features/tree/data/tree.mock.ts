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

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'A fundamental upper body exercise that builds back strength, grip and overall pulling power. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],

    equipment: [
      'parallettes',
    ],

    description:
      'A compound pushing exercise that develops upper body pressing strength through the chest, triceps and shoulders. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

    equipment: [],

    description:
      'A fundamental bodyweight pushing exercise that develops chest, triceps and shoulder strength while requiring full-body control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],

    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],

    equipment: [
      'pull-up-bar',
      'rings'
    ],

    description:
      'Introductory front lever progressions that develop straight-arm pulling strength, core tension and body control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'An explosive pulling exercise that increases range of motion and develops the strength needed to pull the chest toward the bar. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['core', 'shoulders'],

    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],

    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],

    equipment: [
      'parallettes',
      'rings'
    ],

    description:
      'A static hold that develops core compression, hip flexor strength and straight-arm support control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['shoulders', 'core'],

    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],

    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],

    equipment: [],

    description:
      'A fundamental inverted skill that develops balance, overhead stability, shoulder strength and full-body control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['shoulders', 'triceps', 'chest'],

    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],

    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],

    equipment: [],

    description:
      'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['shoulders', 'chest', 'core'],

    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],

    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],

    equipment: [],

    description:
      'A bent-arm horizontal hold that develops pressing strength, forward lean control and full-body tension. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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

    targetAreas: ['shoulders', 'back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'rear-deltoids'],

    secondaryMuscles: ['biceps', 'chest', 'forearms'],

    equipment: [
      'pull-up-bar','rings',
    ],

    description:
      'A controlled rotational movement that develops shoulder mobility, pulling control and strength through an inverted position. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',

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
    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'front-deltoids'],
    secondaryMuscles: ['upper-back', 'biceps', 'forearms', 'hip-flexors'],
    equipment: ['pull-up-bar'],
    description:
      'A controlled pulling skill that raises the body from a hanging position into an inverted position using back, shoulder and core strength. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
      'A demanding core exercise that develops exceptional trunk strength and full-body tension while controlling the body as a rigid unit. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'A dynamic compound skill that combines an explosive pull, a transition over the bar and a powerful dip to finish above it. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['parallettes'],
    description:
      'A demanding dip variation that places exceptional emphasis on the triceps through a mechanically challenging range of motion. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['pull-up-bar'],
    description:
      'A behind-the-bar dip variation that develops pressing strength, shoulder extension control and stability through a challenging range of motion. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'hip-flexors'],
    secondaryMuscles: ['triceps', 'abdominals', 'trapezius', 'forearms'],
    equipment: [],
    description:
      'A controlled press into a handstand that requires shoulder strength, compression, balance and precise full-body control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
  },
  {
    id: 'early-planche-progressions',
    name: 'Tucked Planche',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'triceps', 'chest'],
    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],
    equipment: [],
    description:
      'A vertical bodyweight press performed from a handstand that develops powerful shoulders, triceps and overhead pressing control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: [],
    description:
      'A unilateral elbow lever that requires balance, core tension and upper-body stability while supporting the body horizontally on one arm. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'A straight-arm static hold with the body horizontal and facing the ground, requiring strong shoulders, back and full-body tension. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
      'A straight-arm horizontal hold that demands exceptional pulling strength, scapular control and full-body tension. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'A unilateral pull up requiring exceptional back, arm and grip strength to lift the entire body with one arm. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'A high-range pulling exercise where the body is pulled toward the bar at waist level, developing powerful and explosive pulling strength. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['pull-up-bar'],
    description:
      'A lateral static hold that requires powerful shoulders, back and core to keep the body horizontal against gravity. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'A demanding behind-the-back pulling skill that requires exceptional biceps strength, shoulder extension and controlled pulling power. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: [],
    description:
      'An advanced compression hold that raises the legs beyond an L-Sit, requiring exceptional core and hip flexor strength. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'An advanced straight-arm hold where the body remains horizontal with the legs spread to reduce leverage compared with a full planche. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'triceps', 'chest'],
    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],
    equipment: [],
    description:
      'An advanced handstand pressing movement that lowers the body toward a horizontal position before pressing back to the handstand. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
  },
  {
    id: 'one-arm-push-up-clean-form',
    name: 'One Arm Push Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: [],
    description:
      'A strict unilateral push up that develops powerful pressing strength while demanding significant anti-rotation core control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'A unilateral back lever that dramatically increases the strength, stability and anti-rotation demands of the standard back lever. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'A harder front lever variation that brings the torso closer to the bar, significantly increasing pulling and scapular strength demands. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'A dynamic front lever exercise that combines horizontal body tension with powerful pulling through a demanding range of motion. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['core', 'shoulders', 'back', 'biceps'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['front-deltoids', 'triceps', 'upper-back', 'forearms'],
    equipment: ['pull-up-bar'],
    description:
      'A dynamic human flag variation that adds vertical pulling while maintaining lateral body control and full-body tension. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Transition behind the bar while maintaining active shoulders and controlled elbow flexion. The biceps and lats contribute to the pull as the trunk stabilizes the body. Avoid forcing the shoulders into an uncontrolled end range.',
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'A straight-arm horizontal hold with the legs fully extended, requiring exceptional shoulder strength, scapular control and total-body tension. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: [],
    description:
      'A one-arm balance skill requiring exceptional shoulder stability, hand control, body alignment and precise weight transfer. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'A classic rings strength hold with both arms extended horizontally, demanding extreme shoulder, chest and straight-arm strength. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'An elite unilateral front lever requiring extraordinary pulling strength, scapular stability and resistance to body rotation. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
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
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'An elite rings strength movement that combines straight-arm control with powerful pulling through a highly demanding transition. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: [],
    description:
      'An extreme compression hold that elevates the hips and legs far beyond a V-Sit, requiring exceptional mobility, core strength and support control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
      'An elite dynamic planche exercise that combines a full horizontal hold with controlled pressing through repeated push up repetitions. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Hold the body horizontal on rings with the arms straight and extended widely to the sides. The chest, shoulders and elbow flexors sustain a very demanding straight-arm position. Keep the trunk rigid and the rings controlled.',
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
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'Perform the Caruso strength element with controlled shoulder positioning and a rigid trunk. The straight-arm pulling demand loads the back and shoulder stabilizers while the core resists rotation. Confirm the intended variation against your reference image before publishing.',
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
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'An extreme inverted rings strength movement requiring exceptional straight-arm control, pulling power and shoulder stability. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Move through a demanding behind-the-bar transition using controlled shoulder extension and elbow flexion. Keep the bar close and avoid dropping suddenly into the end range. The biceps, lats and shoulder stabilizers control the movement.',
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
    primaryMuscles: ['rear-deltoids', 'triceps', 'upper-back'],
    secondaryMuscles: ['latissimus-dorsi', 'glutes', 'abdominals', 'forearms'],
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'An extreme unilateral planche requiring extraordinary straight-arm strength, balance and anti-rotation control while supporting the body on one arm. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['rings'],
    description:
      'Lower the body between the rings into deep shoulder extension and return by flexing the elbows and controlling the shoulders. The biceps experience high loading in an extended position. Progress the range gradually and keep the rings stable.',
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
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Perform the Zanetti rings strength transition with controlled straight-arm loading and shoulder alignment. Maintain tension through the chest, back and trunk as the body changes position. Verify the precise start and finish positions for your chosen variation.',
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'trapezius'],
    secondaryMuscles: ['triceps', 'chest', 'abdominals'],
    equipment: ['rings'],
    description:
      'An extreme inverted rings hold with the arms extended laterally, demanding exceptional shoulder strength, stability and precise body control. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'Hold a full planche on rings with the arms straight and the body horizontal. The unstable supports add substantial shoulder and scapular stabilization demands. Keep the rings controlled and the legs fully extended.',
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
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Hold the body horizontal on rings with the arms straight and extended widely to the sides. The chest and shoulders resist the long lever while the core maintains alignment. Keep both rings stable throughout the hold.',
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
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hold the body face down and horizontal beneath the rings with straight arms. Engage the shoulders and back while keeping the hips and legs aligned. The independent rings increase stabilization demands compared with a fixed bar.',
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

    targetAreas: ['shoulders', 'core'],

    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],

    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],

    equipment: [],

    description:
      'Balance inverted on straight arms with each hand supported by a ring. Keep the shoulders elevated and the trunk braced while preventing the rings from drifting. The independent supports increase the demand on shoulder and wrist stability.',

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

      targetAreas: ['back', 'biceps'],

      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

      equipment: [
        'pull-up-bar',
      ],

      description:
        'A chin-up performed with palms facing you, increasing elbow-flexor involvement while training the lats. Pull the chin above the bar without swinging, then lower under control. Keep the ribs down and shoulders active throughout.',

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

      targetAreas: ['back', 'biceps'],

      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

      equipment: [
        'pull-up-bar',
      ],

      description:
        'Pull toward one hand while the opposite arm stays relatively straight along the bar. This shifts more load to the working side and develops unilateral pulling strength. Alternate sides while controlling rotation and the descent.',

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

      targetAreas: ['back', 'biceps'],

      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

      secondaryMuscles: ['hip-flexors', 'abdominals', 'forearms', 'quadriceps'],

      equipment: [
        'pull-up-bar',
      ],

      description:
        'Maintain straight legs in front of the hips while pulling the chin over the bar. The lats and elbow flexors drive the pull while the abs and hip flexors sustain the L position. Avoid swinging or dropping the legs between repetitions.',

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

      targetAreas: ['back', 'biceps'],

      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

      equipment: [
        'pull-up-bar',
      ],

      description:
        'Hang beneath a low bar with the feet on the floor and pull the chest toward the bar. This horizontal row trains the upper back, lats and elbow flexors with adjustable bodyweight resistance. Keep the torso rigid and lower slowly.',

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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: [],
    description:
      'Balance on the hands with bent elbows and the knees resting against the upper arms. Shift the weight forward until the feet leave the floor while keeping the core braced. This bent-arm balance builds wrist tolerance and prepares hand-supported skills.',
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
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['glutes', 'front-deltoids', 'serratus-anterior'],
    equipment: [],
    description:
      'Hold a straight line from shoulders to heels on the forearms or hands. Brace the abdominals and glutes to resist lumbar extension while breathing steadily. Keep the hips level rather than allowing them to sag or rise.',
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

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

    equipment: [],

    description:
      'Place the hands close together beneath the chest and perform a controlled push-up. The narrow hand position emphasizes elbow extension and challenges the triceps while the chest still contributes. Keep the elbows controlled and the trunk rigid.',

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
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: [],
    description:
      'Elevate the feet on a stable surface and perform a push-up with the body aligned. The incline of the torso increases the demand on the shoulders and upper chest. Lower the chest under control without letting the lower back arch.',
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
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Start in a forearm plank and press through the hands to extend the elbows into a high plank. Reverse the movement slowly while keeping the elbows close and the trunk stable. This variation strongly challenges the triceps.',
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
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: [],
    description:
      'Lower into a push-up, then press explosively enough for the hands to leave the floor and clap. Replace the hands in time to absorb the landing with bent elbows. Maintain a rigid torso and prioritize controlled, repeatable landings.',
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
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: [],
    description:
      'Lean the shoulders forward beyond the wrists and perform push-ups while maintaining that forward shift. The longer lever increases shoulder and scapular demands compared with a standard push-up. Keep the body rigid and control the bottom position.',
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
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: [],
    description:
      'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: [],
    description:
      'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: [],
    description:
      'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: [],
    description:
      'A bodyweight vertical pressing progression that builds shoulder and triceps strength for handstand push ups. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
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
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: [],
    description:
      'Perform a push-up with the knees resting on the floor to reduce the load on the arms. Lower the chest between the hands while keeping the hips and shoulders aligned. Press back up without collapsing through the lower back.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Use a crossed grip to pull high, transition over the bar and press to support. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Keep the legs extended in front while pulling, transitioning over the bar and pressing to support. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Pull and transition above the bar using one arm before pressing to support. This combines unilateral pulling, grip control and a demanding single-arm transition. Maintain control of body rotation throughout the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Use a very wide grip to pull high, transition over the bar and press to support. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Pull above the bar, transition and press to support without a kip or explosive momentum. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Initiate the movement from a front lever and transition toward support above the bar. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Combine a one-arm front lever position with a unilateral pull and transition above the bar. Maintain shoulder control through the transition and keep the trunk braced. The pulling muscles and triceps work together to complete the movement.',
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
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Pull on the rings, transition the chest over the hands, and press to a stable support. The moving rings increase the need for shoulder and wrist control throughout the pull and dip. Keep the rings close during the transition.',
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
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Balance on one leg and squat deeply while keeping the other leg extended in front. The working quadriceps and glutes provide most of the force as the ankle and core maintain balance. Stand up without letting the knee collapse inward.',
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
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'Hold the body nearly horizontal beneath a bar with the arms extended in a demanding straight-arm pulling position. Keep the shoulders engaged and the trunk rigid while resisting the long lever. The exact setup varies by calisthenics convention.',
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
    targetAreas: ['core'],
    primaryMuscles: ['abdominals'],
    secondaryMuscles: ['obliques', 'hip-flexors'],
    equipment: ['pull-up-bar'],
    description:
      'Lie on the back with knees bent and curl the rib cage toward the pelvis. Focus on spinal flexion driven by the abdominals rather than pulling on the neck. Lower slowly without using momentum.',
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
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['obliques', 'abdominals'],
    secondaryMuscles: ['glutes', 'side-deltoids', 'serratus-anterior'],
    equipment: [],
    description:
      'Support the body on one forearm or hand with the feet stacked or staggered. Keep the hips lifted and the torso aligned while the obliques resist lateral bending. The supporting shoulder and glutes help stabilize the position.',
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
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['glutes', 'hamstrings'],
    secondaryMuscles: ['abdominals', 'obliques', 'lower-back'],
    equipment: [],
    description:
      'Lie on the back with one foot planted and the other leg lifted. Drive through the planted heel to extend the hip while keeping the pelvis level. Pause at the top and lower under control to train the glutes and hamstrings.',
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
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: [],
    description:
      'Hold the body horizontal with the arms extended wide, combining Maltese-style leverage with cross-like arm positioning. The chest and shoulders resist a very large straight-arm load while the core keeps the body aligned. Exact execution depends on the apparatus and skill convention.',
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
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
    imageUrl: '/images/exercises/tricep-extensions.png',
  },
    {
    id: 'toes-to-bar',
    name: 'Toes to Bar',
    movementType: 'dynamic',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'hip-flexors'],
    secondaryMuscles: ['obliques', 'latissimus-dorsi', 'forearms'],
    equipment: [],
    description:
      'An introductory planche hold that develops straight-arm pushing strength, scapular control and the forward lean needed for harder planche variations. Keep the movement controlled, maintain active shoulder positioning and avoid compensating with momentum.',
    imageUrl: '/images/exercises/toes-to-bar.png',
  },
    {
    id: 'tulloch',
    name: 'Tulloch',
    movementType: 'dynamic',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: [],
    description:
      'Perform the Tulloch strength element with deliberate scapular control and full-body tension. The back and shoulders sustain the demanding lever while the trunk stabilizes the body. Confirm the exact variation and apparatus against your reference image before publishing.',
    imageUrl: '/images/exercises/tulloch.png',
  },
    {
    id: 'inverted-row',
    name: 'Inverted Row',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['upper-back', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['rear-deltoids', 'forearms', 'abdominals'],
    equipment: [],
    description:
      'Hang under a low bar with heels on the floor and the body straight. Pull the chest toward the bar by driving the elbows back and retracting the shoulder blades. Lower slowly while keeping the hips from sagging.',
    imageUrl: '/images/exercises/inverted-row.png',
  },
    {
    id: 'one-arm-dragon-flag',
    name: 'One-Arm Dragon Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
    equipment: [],
    description:
      'Perform a dragon flag while gripping the support with one arm. Lower and raise the rigid body without bending at the hips or twisting the torso. The unilateral hold increases the anti-rotation demand on the trunk.',
    imageUrl: '/images/exercises/one-arm-dragon-flag.png',
  }
  ,
    {
    id: 'one-arm-l-sit',
    name: 'One-Arm L-Sit',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: [],
    description:
      'Support the body on one hand while holding both legs straight in front. Keep the hips lifted and resist twisting through the trunk. The hip flexors and abdominals maintain compression while the supporting arm stabilizes.',
    imageUrl: '/images/exercises/one-arm-l-sit.png',
  }
  ,
    {
    id: 'arm-lever',
    name: 'Arm Lever',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: [],
    description:
      'Balance the torso horizontally on a bent supporting arm with the elbow braced against the body. Lift the legs and maintain a firm trunk while shifting the center of mass over the hand. The shoulder, chest and triceps stabilize the hold.',
    imageUrl: '/images/exercises/arm-lever.png',
  }
  ,
    {
    id: 'clutch-flag',
    name: 'Clutch Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Hold a lateral flag using a close, braced arm position against a stable vertical support. Keep the hips and legs aligned while the obliques resist side bending. The shoulders and lats stabilize the upper body.',
    imageUrl: '/images/exercises/clutch-flag.png',
  }
  ,
    {
    id: 'x-grip-flag',
    name: 'X-Grip Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Hold a horizontal human flag with a crossed-hand grip on a stable support. Maintain straight body alignment while the obliques and shoulders resist rotation. Adjust the grip only within a controlled, secure range.',
    imageUrl: '/images/exercises/x-grip-flag.png',
  }
  ,
    {
    id: 'shoulder-flag',
    name: 'Shoulder Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Support a lateral flag with the shoulder positioned against a stable vertical support. Keep the body extended and the hips level as the obliques resist gravity. Maintain active shoulder engagement throughout.',
    imageUrl: '/images/exercises/shoulder-flag.png',
  }
  ,
    {
    id: 'wall-handstand',
    name: 'Wall Handstand',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: [],
    description:
      'Hold a handstand with the feet supported by a wall to practice overhead alignment. Push tall through the shoulders and keep the ribs and pelvis stacked. Use the wall for balance while maintaining active hands and a braced trunk.',
    imageUrl: '/images/exercises/wall-handstand.png',
  },
    {
    id: 'comando-pull-up',
    name: 'Comando Pull-Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: [],
    description:
      'Grip the bar with the hands facing each other along its length and pull the head to one side of the bar. Alternate sides while keeping the trunk controlled and avoiding excessive twisting. The movement trains the lats, upper back and elbow flexors.',
    imageUrl: '/images/exercises/comando-pull-up.png',
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
