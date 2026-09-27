import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT_MUSCLE_UP: Exercise = {
  id: 'l-sit-muscle-up',
  name: 'L-Sit Muscle Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'core', 'chest'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'abdominals'
  ],

  secondaryMuscles: [
    'upper-back',
    'triceps',
    'chest',
    'front-deltoids',
    'forearms'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The L-Sit Muscle Up is an advanced Muscle Up variation performed from a hanging L-sit position. With your legs straight and held in front of you, you pull your body above the bar, transition your chest over it, and press to straight-arm support. The L-sit removes many of the momentum strategies available in a regular Muscle Up and adds a significant core and body-control challenge.',

  overview:
    'The L-Sit Muscle Up combines a strong hanging L-sit with the pulling power and transition strength of a Muscle Up. Start with straight arms and your legs extended together in front of you, then pull powerfully while maintaining the L position. As your chest reaches the bar, move your shoulders over it and transition both elbows together before pressing to support. Build a clean Muscle Up and strong L-sit separately before combining them, then use L-sit high pulls, assisted repetitions, and controlled negatives to develop the complete skill.',

  howTo: [
    {
      title: 'Build both skills separately',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled Muscle Up and a strong hanging L-sit first. Practice keeping your knees straight and legs together while also building enough pulling height to bring your chest towards the bar.'
    },
    {
      title: 'Set the hanging L-sit',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Hang from the bar with straight arms and raise your straight legs until they are approximately horizontal. Brace your core, keep your knees locked, and stabilize the position before initiating the pull.'
    },
    {
      title: 'Pull high while holding the L',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Pull explosively towards the bar while keeping your legs extended in front of you. Aim to bring your chest high enough for the transition instead of performing a normal Pull Up and trying to force your way over the bar afterwards.'
    },
    {
      title: 'Transition above the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'As your chest reaches the bar, bring your shoulders forward and above it while turning both elbows over together. Keep the movement controlled and avoid using a one-arm chicken-wing transition.'
    },
    {
      title: 'Press to support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your chest is above the bar, press through the straight-bar dip portion until your elbows are fully extended. Finish in a stable support position and control the descent before beginning another repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Dropping the L-sit before the pull',
      description:
        'If your legs immediately fall as you initiate the repetition, you lose the defining challenge of the exercise. Use L-sit Pull Ups and shorter assisted sets until you can maintain straight legs through the pulling phase.'
    },
    {
      title: 'Pulling too low',
      description:
        'Reaching only chin-over-bar height leaves very little room for a clean transition. Develop L-sit high pulls and aim to bring your upper torso towards the bar before attempting to turn over it.'
    },
    {
      title: 'Using a large swing',
      description:
        'Swinging the legs forward and backward can turn the movement into a momentum-based Muscle Up. For the strict variation, establish the L-sit before pulling and keep the lower body controlled instead of using it to generate a kip.'
    },
    {
      title: 'Using a chicken-wing transition',
      description:
        'Avoid throwing one elbow above the bar before the other. Build enough pulling height and transition strength to bring both shoulders over the bar together and keep the repetition symmetrical.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'l-sit-pull-up',
    'l-sit'
  ],

  faq: [
    {
      question: 'What is an L-Sit Muscle Up?',
      answer:
        'An L-Sit Muscle Up combines a hanging L-sit with a Muscle Up. You begin with straight arms and your legs extended in front of you, pull towards and above the bar, transition your torso over it, and finish in straight-arm support.'
    },
    {
      question: 'Is an L-Sit Muscle Up harder than a regular Muscle Up?',
      answer:
        'The strict L-Sit Muscle Up adds a significant core and hip-flexion demand while restricting some of the momentum that can assist a normal Muscle Up. You also need to generate enough pulling height while maintaining the L position, so a clean regular Muscle Up is a useful foundation.'
    },
    {
      question: 'Do I need an L-Sit before learning the L-Sit Muscle Up?',
      answer:
        'You should be able to maintain a controlled hanging L-sit with straight knees before expecting to perform the complete strict variation. If the L position itself is limiting you, train hanging L-sits and L-sit Pull Ups separately while continuing to improve your Muscle Up.'
    },
    {
      question: 'Should I use a false grip for an L-Sit Muscle Up?',
      answer:
        'A false or higher wrist position can make the transition easier and is commonly used when learning strict L-Sit Muscle Ups, but it is not the only valid technique. Some competition standards specifically require a normal pull-up grip, so the grip you train should depend on the version you want to perform.'
    },
  ],

  seo: {
    title:
      'L-Sit Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the L-Sit Muscle Up with strict technique, muscles worked, progressions and common mistakes for a clean L-sit transition over the bar.',
  },

  imageUrl: '/images/exercises/l-sit-muscle-up.png',
};
