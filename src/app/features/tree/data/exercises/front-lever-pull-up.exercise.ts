import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER_PULL_UP: Exercise = {
  id: 'front-lever-pull-up',
  name: 'Front Lever Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The Front Lever Pull Up is an advanced horizontal pulling exercise performed while maintaining a front lever position. Instead of holding the lever with straight arms, you bend your elbows and pull your torso towards the bar while keeping your hips and legs approximately horizontal. It combines front lever strength with powerful bent-arm pulling and full-body tension.',

  overview:
    'A Front Lever Pull Up requires more than simply being able to hold a front lever. You must maintain the horizontal body position while your elbows bend and your torso moves towards the bar, then control the descent back to straight arms without letting your hips drop. Learn the movement with tuck and advanced tuck variations first, then progressively lengthen the lever through one-leg, straddle, and full positions.',

  howTo: [
    {
      title: 'Establish your front lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start underneath the bar with straight arms and enter a front lever progression you can control. Keep your shoulders active, hips high, and torso and legs connected in a strong horizontal position.'
    },
    {
      title: 'Initiate the pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin bending your elbows while pulling the bar towards your torso. Drive your elbows back and continue producing tension through your lats and upper back without allowing your hips to fall.'
    },
    {
      title: 'Pull your torso towards the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue pulling until your torso approaches the bar while keeping your body approximately parallel to the ground. Maintain tight abs and glutes so your hips and legs rise with your torso instead of hanging underneath it.'
    },
    {
      title: 'Control the descent',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Slowly extend your elbows and lower yourself back towards the straight-arm front lever. Resist gravity throughout the eccentric instead of dropping quickly from the top position.'
    },
    {
      title: 'Progress the lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Build clean repetitions in tuck, advanced tuck, one-leg, or straddle positions before attempting full Front Lever Pull Ups. Increase the lever length only when you can maintain your horizontal position throughout the entire repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting your hips drop',
      description:
        'The most common way to make the exercise easier is allowing your hips and legs to fall as you pull. Use a shorter lever if necessary and focus on keeping your shoulders, hips, and legs at approximately the same height throughout the rep.'
    },
    {
      title: 'Turning it into a front lever raise',
      description:
        'Your body should not swing through a large angle around your shoulders. The main movement comes from bending and extending your elbows while maintaining the lever, rather than raising and lowering a straight-arm body.'
    },
    {
      title: 'Using a progression that is too difficult',
      description:
        'A full Front Lever Pull Up is significantly harder than simply holding a full front lever. If your body line immediately breaks when your elbows bend, return to an advanced tuck, one-leg, or straddle variation and build pulling strength there.'
    },
    {
      title: 'Dropping out of the top position',
      description:
        'Do not treat the eccentric as a reset. Extend your elbows under control while actively resisting the descent and keeping your hips high until you return to the bottom front lever position.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'front-lever-to-muscle-up',
    'back-lever-pull-up'
  ],

  faq: [
    {
      question: 'What is a Front Lever Pull Up?',
      answer:
        'A Front Lever Pull Up is a horizontal pulling movement performed from a front lever. You begin with straight arms, bend your elbows to pull your torso towards the bar while keeping your body approximately horizontal, then extend your arms again under control.'
    },
    {
      question: 'Do I need a full front lever before training Front Lever Pull Ups?',
      answer:
        'You do not need a full front lever to start training the movement. Tuck and advanced tuck Front Lever Pull Ups are useful progressions themselves. However, performing the full version requires enough front lever strength to maintain a straight-body horizontal position while adding the much harder bent-arm pull.'
    },
    {
      question: 'Why can I hold a front lever but not do a Front Lever Pull Up?',
      answer:
        'The static Front Lever and Front Lever Pull Up have different strength demands. Holding the lever requires strong straight-arm shoulder extension and full-body tension, while the pull-up adds substantial elbow flexion and horizontal pulling strength from the lats, upper back, and biceps.'
    },
    {
      question: 'How should I progress towards a full Front Lever Pull Up?',
      answer:
        'Use the same idea as your front lever progression but apply it to the dynamic movement. Build controlled Tuck Front Lever Pull Ups, then progress through Advanced Tuck, One-Leg or Straddle variations before attempting the full straight-body version. Negatives and band-assisted reps can also help bridge difficult stages.'
    },
  ],

  seo: {
    title:
      'Front Lever Pull Up: Technique & Progressions | Treethenics',

    description:
      'Learn the Front Lever Pull Up with proper technique, muscles worked, common mistakes and progressions from tuck to full reps.',
  },

  imageUrl: '/images/exercises/front-lever-pull.png',
};
