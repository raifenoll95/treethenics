import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PULL_UP: Exercise = {
  id: 'one-arm-pull-up',
  name: 'One Arm Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'forearms',
    'rear-deltoids',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The One Arm Pull Up is an advanced unilateral pulling exercise where you raise your entire body using one arm. A strict repetition starts from a controlled one-arm hang with the working elbow extended and finishes with your chin clearly above the bar.',

  overview:
    'The One Arm Pull Up requires exceptional relative pulling strength, grip strength, and control through the entire range of motion. Build strong Pull Ups and Archer Pull Ups first, then progressively transfer more load to one arm using assisted repetitions, isometric holds, and controlled negatives. A small natural rotation towards the working arm is acceptable, but the free arm should not touch the bar or assist the pull.',

  howTo: [
    {
      title: 'Build unilateral pulling strength',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong Pull Ups and Archer Pull Ups, then use assisted one-arm variations to progressively transfer more of your bodyweight onto the working arm.'
    },
    {
      title: 'Start from one arm',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Hang from the bar with one overhand grip and your working elbow fully extended. Establish control through the shoulder before beginning the pull and keep the free hand away from the bar and working arm.'
    },
    {
      title: 'Drive the elbow down',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Pull by driving your working elbow down towards your side. Keep your body relatively close to the bar and control any natural rotation instead of using a kick or aggressive twist for momentum.'
    },
    {
      title: 'Clear the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your chin clearly passes above the bar. Maintain control at the top instead of reaching with your neck to create the appearance of extra height.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement slowly until your working elbow is fully extended again. Maintain shoulder control through the bottom rather than suddenly dropping into the one-arm hang.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using the free arm',
      description:
        'Grabbing your wrist, forearm, working arm, or the bar with your free hand turns the movement into an assisted progression. These variations are useful for training, but they are not a strict One Arm Pull Up.'
    },
    {
      title: 'Skipping the full bottom position',
      description:
        'Starting with a permanently bent elbow removes one of the hardest portions of the movement. For a full repetition, return to an extended working elbow under control before beginning the next pull.'
    },
    {
      title: 'Using excessive rotation',
      description:
        'Some rotation towards the working arm is natural, but aggressively twisting your torso or throwing your legs can create momentum that replaces part of the unilateral pulling demand.'
    },
    {
      title: 'Rushing the negatives',
      description:
        'Controlled one-arm eccentrics are an important progression towards the full movement. If you immediately drop through part of the descent, use assistance until you can control that range instead of repeatedly forcing full negatives.'
    },
  ],

  relatedExercises: [
    'archer-pull-up',
    'pull-up',
    'one-arm-muscle-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Pull Up?',
      answer:
        'The One Arm Pull Up is a vertical pulling exercise performed with one hand on the bar and no assistance from the opposite arm. A strict repetition starts with the working elbow extended and finishes when your chin passes above the bar.'
    },
    {
      question: 'What is the difference between a One Arm Pull Up and a One Arm Chin Up?',
      answer:
        'The main distinction is the grip. A One Arm Pull Up uses an overhand or pronated grip, while a One Arm Chin Up uses an underhand or supinated grip. Both require exceptional unilateral pulling strength, but they should be treated as separate variations.'
    },
    {
      question: 'What muscles does the One Arm Pull Up work?',
      answer:
        'The lats, biceps, and upper back produce most of the pulling force. The forearms maintain the one-handed grip, the rear shoulders help stabilize the upper arm, and the abdominals and obliques control the torso and resist excessive swinging and rotation.'
    },
    {
      question: 'How do I progress to a One Arm Pull Up?',
      answer:
        'Build strong bilateral Pull Ups, then progress through Archer Pull Ups and increasingly difficult assisted one-arm repetitions. Isometric holds and controlled one-arm negatives can then bridge the gap towards your first full concentric repetition.'
    },
    {
      question: 'How many Pull Ups do I need before training the One Arm Pull Up?',
      answer:
        'There is no universal number of regular Pull Ups that guarantees a One Arm Pull Up. Strong bilateral pulling is important, but assisted one-arm strength, grip, shoulder control, and the ability to control unilateral negatives are more specific indicators of readiness.'
    },
  ],

  seo: {
    title:
      'One Arm Pull Up: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the One Arm Pull Up with proper technique, muscles worked, assisted progressions, negatives and common mistakes for building elite unilateral pulling strength.',
  },

  imageUrl: '/images/exercises/oap.png',
};
