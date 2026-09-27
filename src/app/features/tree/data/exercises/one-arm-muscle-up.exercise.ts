import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_MUSCLE_UP: Exercise = {
  id: 'one-arm-muscle-up',
  name: 'One Arm Muscle Up',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'shoulders', 'triceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'forearms',
    'front-deltoids',
    'chest',
    'triceps',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The One Arm Muscle Up is an elite unilateral pulling skill that takes you from a one-arm hang below the bar to a supported position above it using the same arm. It requires exceptional one-arm pulling power, grip strength, transition control, and enough height to move the working shoulder and elbow over the bar.',

  overview:
    'The One Arm Muscle Up is much more than a powerful One Arm Pull Up. You must pull high enough to bring your working shoulder towards and above the bar, then rotate around the bar and establish support on the same arm. Build the One Arm Pull Up and regular Muscle Up separately, then develop unilateral high pulls and assisted one-arm transitions before attempting the complete skill. For the clean Treethenics version, the free hand does not touch the bar or working arm.',

  howTo: [
    {
      title: 'Build the prerequisites',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a strong Muscle Up and advanced one-arm pulling strength first. Train One Arm Pull Up progressions, high pulls, and stable straight-bar support so both the pulling and transition phases have a solid foundation.'
    },
    {
      title: 'Develop unilateral height',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Practice assisted one-arm high pulls and progressively reduce assistance. Pull explosively and keep your body close enough to the bar to create the height needed for the transition.'
    },
    {
      title: 'Practice the transition',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Use a low bar, assistance, or controlled negatives to learn how the working shoulder moves around and above the bar. The transition should come from sufficient pulling height rather than simply throwing your body over the bar.'
    },
    {
      title: 'Connect the pull and turnover',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From the one-arm hang, pull as high as possible and continue moving your shoulder over the bar as your elbow changes from pulling below the bar to supporting your body above it.'
    },
    {
      title: 'Finish above the bar',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Stabilize the working arm above the bar and complete the movement into a controlled support position. Train both sides and progressively reduce unnecessary swing as your unilateral pulling power improves.'
    },
  ],

  commonMistakes: [
    {
      title: 'Treating a One Arm Pull Up as enough',
      description:
        'Getting your chin over the bar does not provide the height required for a Muscle Up transition. The One Arm Muscle Up requires a much higher unilateral pull so your shoulder and elbow can move above the bar.'
    },
    {
      title: 'Using the free hand',
      description:
        'Grabbing the bar, wrist, forearm, or working arm with the free hand turns the movement into an assisted progression. These drills can be useful for training, but they are not the clean One Arm Muscle Up defined here.'
    },
    {
      title: 'Trying to transition from too low',
      description:
        'If your unilateral pull stops around chin height, you will usually need excessive rotation or momentum to reach support. Continue developing assisted high pulls before forcing the transition.'
    },
    {
      title: 'Training only the stronger arm',
      description:
        'Large unilateral strength differences can develop quickly with advanced one-arm skills. Train assisted progressions on both sides even if you eventually achieve the full movement on one side first.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'one-arm-pull-up',
    'one-arm-front-lever-to-muscle-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Muscle Up?',
      answer:
        'The One Arm Muscle Up takes you from hanging below a bar to supporting yourself above it using one arm. The working arm must generate enough pulling height to transition the shoulder and elbow above the bar before finishing in support.'
    },
    {
      question: 'Do I need a One Arm Pull Up first?',
      answer:
        'A strong One Arm Pull Up is an excellent foundation, but the Muscle Up requires additional pulling height and a completely different transition above the bar. Train unilateral high pulls and assisted transitions rather than relying only on regular One Arm Pull Ups.'
    },
    {
      question: 'Do I need a regular Muscle Up first?',
      answer:
        'Yes. A clean regular Muscle Up gives you experience with the high pull, turnover, and support phases before you add the much greater strength and balance demands of performing them unilaterally.'
    },
    {
      question: 'What muscles does the One Arm Muscle Up work?',
      answer:
        'The lats, biceps, and upper back produce most of the powerful unilateral pull. The forearms maintain the grip, the core and obliques control body rotation, and the chest, shoulders, and triceps contribute increasingly as the working arm transitions above the bar and establishes support.'
    },
    {
      question: 'How do I progress to a One Arm Muscle Up?',
      answer:
        'Build a strong Muscle Up and One Arm Pull Up foundation, then train assisted one-arm high pulls, reduced-assistance transitions, and controlled one-arm negatives from above the bar. Gradually reduce assistance while increasing pulling height until you can connect the entire movement.'
    },
  ],

  seo: {
    title:
      'One Arm Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the One Arm Muscle Up with proper technique, muscles worked, unilateral high-pull progressions and common mistakes for this elite calisthenics skill.',
  },

  imageUrl: '/images/exercises/one-arm-muscle-up.png',
};
