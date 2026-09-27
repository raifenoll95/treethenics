import { Exercise } from '../../../../shared/models/exercise.model';

export const MUSCLE_UP: Exercise = {
  id: 'muscle-up',
  name: 'Muscle Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'chest', 'triceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'triceps'
  ],

  secondaryMuscles: [
    'chest',
    'front-deltoids',
    'upper-back',
    'forearms',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Muscle Up is a compound calisthenics skill that takes you from a straight-arm hang below the bar to a locked-out support position above it. It combines an explosive high pull, a fast transition over the bar, and a Straight Bar Dip into one continuous movement.',

  overview:
    'A clean Muscle Up requires more than pulling your chin over the bar. You need enough pulling height to bring your chest towards the bar, then move your shoulders over it and transition both elbows above the bar before pressing to support. Build strong Pull Ups and Straight Bar Dips first, then develop explosive high pulls and practice the transition separately. Use assisted repetitions and negatives to connect the phases before attempting clean full repetitions.',

  howTo: [
    {
      title: 'Build the pull and dip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong Pull Ups, explosive high pulls, and Straight Bar Dips separately. The goal is to have enough pulling height and pressing strength that the transition becomes the main skill to learn.'
    },
    {
      title: 'Pull higher than a Pull Up',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Start from straight arms and pull explosively while keeping the bar close. Continue past normal chin-over-bar height and aim to bring your lower chest towards the bar.'
    },
    {
      title: 'Move over the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As you reach the top of the pull, bring your chest forward and shoulders above the bar. Rotate both wrists and elbows around the bar together instead of trying to continue pulling vertically.'
    },
    {
      title: 'Catch the dip position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Arrive above the bar with your chest forward and both elbows in a controlled bent-arm support position. Keep the bar close to your torso and avoid collapsing onto it during the transition.'
    },
    {
      title: 'Press to support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish with a Straight Bar Dip by extending both elbows until you reach a stable support above the bar. Control the descent if you are returning to the starting hang.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pulling only to chin height',
      description:
        'A normal Pull Up does not create enough height for an efficient transition. Train explosive high pulls and aim to bring the bar towards your lower chest rather than stopping as soon as your chin clears it.'
    },
    {
      title: 'Using a chicken-wing transition',
      description:
        'Throwing one elbow over the bar before the other creates an asymmetrical transition. Build more pulling height and practice assisted transitions until you can bring both elbows over the bar together.'
    },
    {
      title: 'Trying to pull straight upward',
      description:
        'The transition requires your torso to move around and above the bar. Once you reach maximum pulling height, bring your shoulders forward instead of continuing to pull vertically underneath the bar.'
    },
    {
      title: 'Relying on a large kip',
      description:
        'A strong swing or knee drive can provide enough momentum to reach the top without developing the strength required for a strict Muscle Up. If your goal is a clean repetition, train high pulls, assisted transitions, and negatives instead of making the kip progressively larger.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'straight-bar-dip',
    'l-sit-muscle-up'
  ],

  faq: [
    {
      question: 'What is a Muscle Up?',
      answer:
        'A Muscle Up takes you from hanging below a bar to supporting yourself above it in one continuous movement. It combines a powerful high pull, a transition where the torso and elbows move above the bar, and a Straight Bar Dip to full lockout.'
    },
    {
      question: 'What muscles does the Muscle Up work?',
      answer:
        'The lats, biceps, and upper back produce the pulling phase, while the chest, shoulders, and triceps become increasingly important through the transition and press. The forearms maintain your grip and the core helps control your body throughout the movement.'
    },
    {
      question: 'Why can I do Pull Ups but not a Muscle Up?',
      answer:
        'Regular Pull Ups may give you enough strength to clear the bar with your chin but not enough height to transition above it. Muscle Ups require a much higher and faster pull as well as specific transition technique and Straight Bar Dip strength.'
    },
    {
      question: 'Do I need a false grip for a Bar Muscle Up?',
      answer:
        'No. A higher wrist or false-grip position can make the transition easier, especially when learning strict repetitions, but a Bar Muscle Up can also be performed with a normal overhand grip. The important factors are pulling height, bar proximity, and a controlled transition.'
    },
    {
      question: 'Should I learn a kipping or strict Muscle Up first?',
      answer:
        'They are different versions of the skill. A kip uses lower-body momentum to assist the movement, while a strict Muscle Up relies much more on upper-body pulling power and transition strength. For a strength-focused calisthenics progression, train towards the strict version and treat kipping as a separate technique.'
    },
  ],

  seo: {
    title:
      'Muscle Up: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Bar Muscle Up with proper high-pull technique, transition drills, muscles worked, common mistakes and progressions for a clean repetition.',
  },

  imageUrl: '/images/exercises/muscle-up.png',
};
