import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_FRONT_LEVER_MUSCLE_UP: Exercise = {
  id: 'one-arm-front-lever-muscle-up',
  name: 'One Arm Front Lever to Muscle Up',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'core', 'shoulders'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back',
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'forearms',
    'rear-deltoids',
    'chest',
    'triceps'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The One Arm Front Lever to Muscle Up is an elite unilateral pulling skill that connects a One Arm Front Lever directly into a One Arm Muscle Up. It requires extreme lat and biceps strength, anti-rotation control, explosive unilateral pulling power, and enough height to transition the working arm above the bar.',

  overview:
    'This skill combines two extremely demanding unilateral movements. Start from a controlled One Arm Front Lever, maintain your horizontal position long enough to establish control, then initiate a powerful bent-arm pull without first dropping into a swing. As your torso approaches the bar, continue pulling high enough to move your shoulder and elbow above it before completing the transition to support. Train the One Arm Front Lever, unilateral lever pulls, and One Arm Muscle Up separately before trying to connect them.',

  howTo: [
    {
      title: 'Master both skills separately',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Build a controlled One Arm Front Lever and the unilateral pulling and transition strength required for a One Arm Muscle Up. The complete combination should not be your first exposure to either movement.'
    },
    {
      title: 'Establish the One Arm Front Lever',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Hold the bar with one arm and bring your body into a controlled horizontal Front Lever. Keep your hips high, maintain full-body tension, and resist excessive torso rotation before beginning the pull.'
    },
    {
      title: 'Pull directly from the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Begin bending the supporting arm and pull your torso aggressively towards the bar. Keep the movement connected to the Front Lever instead of dropping your legs first to generate a swing.'
    },
    {
      title: 'Transition above the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue the unilateral pull until your shoulder reaches the bar and you have enough height to move the working elbow above it. Keep the bar close as you rotate from the pulling phase into support.'
    },
    {
      title: 'Finish in support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Complete the One Arm Muscle Up transition and stabilize above the bar. Control the finish instead of using a large kick or uncontrolled rotation to escape the hardest part of the transition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Dropping out of the Front Lever',
      description:
        'If your legs immediately fall and create a large swing before you pull, you have connected a Front Lever to a momentum-assisted Muscle Up rather than pulling directly from the unilateral lever position.'
    },
    {
      title: 'Pulling before the lever is controlled',
      description:
        'Briefly passing through a horizontal position is not the same as establishing a One Arm Front Lever. Stabilize the position before initiating the pull so the combination demonstrates both skills rather than using the lever only as momentum.'
    },
    {
      title: 'Not pulling high enough',
      description:
        'Reaching the bar is not enough. You need substantial unilateral pulling height to move your shoulder and elbow into a position where the transition can happen without a large swing or second hand.'
    },
    {
      title: 'Losing control to rotation',
      description:
        'The one-arm position naturally creates a strong rotational challenge. Some body rotation can occur during the transition, but uncontrolled twisting usually indicates that the unilateral lever or pulling phase is not strong enough yet.'
    },
  ],

  relatedExercises: [
    'one-arm-front-lever',
    'front-lever-to-muscle-up',
    'one-arm-muscle-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Front Lever to Muscle Up?',
      answer:
        'It is an elite combination where you establish a One Arm Front Lever and transition directly from that horizontal position into a One Arm Muscle Up. The defining challenge is generating the unilateral pull from the lever instead of dropping into a swing before the Muscle Up.'
    },
    {
      question: 'Do I need a One Arm Front Lever first?',
      answer:
        'For the full version, yes. You should be able to establish and control the One Arm Front Lever before trying to connect it to a Muscle Up. Assisted and shorter-lever versions can be used earlier to practice the transition.'
    },
    {
      question: 'Do I need a One Arm Muscle Up first?',
      answer:
        'A strong One Arm Muscle Up or equivalent unilateral high-pull and transition strength is an excellent foundation. Starting the transition from a Front Lever gives you much less freedom to generate momentum, so learning the upper transition separately is highly useful.'
    },
    {
      question: 'What muscles does the One Arm Front Lever to Muscle Up work?',
      answer:
        'The lats, biceps, and upper back produce most of the unilateral pulling force, while the abdominals and obliques maintain the lever and resist rotation. The forearms and rear shoulders stabilize the one-arm position, and the chest and triceps contribute as you transition and finish above the bar.'
    },
    {
      question: 'How should I progress towards this skill?',
      answer:
        'Develop the One Arm Front Lever and One Arm Muscle Up separately, then train assisted One Arm Front Lever pulls and high pulls. Practice connecting shorter-lever or band-assisted Front Lever positions into the transition before progressively reducing assistance and extending to the full One Arm Front Lever.'
    },
  ],

  seo: {
    title:
      'One Arm Front Lever to Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the One Arm Front Lever to Muscle Up with proper technique, muscles worked, unilateral pulling progressions and common mistakes for this elite calisthenics combination.',
  },

  imageUrl: '/images/exercises/one-arm-front-lever-muscle-up.png',
};
