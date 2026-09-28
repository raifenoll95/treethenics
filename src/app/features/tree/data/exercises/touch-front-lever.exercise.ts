import { Exercise } from '../../../../shared/models/exercise.model';

export const TOUCH_FRONT_LEVER: Exercise = {
  id: 'touch-front-lever',
  name: 'Touch Front Lever',
  movementType: 'static',
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

  equipment: ['pull-up-bar'],

  description:
    'The Touch Front Lever is an advanced bent-arm Front Lever variation where you hold your body horizontal while pulling high enough for your hips or lower torso to reach the bar. It combines Front Lever body tension with exceptional horizontal pulling strength.',

  overview:
    'The Touch Front Lever takes the horizontal body position of a Full Front Lever and adds a much stronger bent-arm pulling demand. From a Front Lever, bend your elbows and pull your body towards the bar while keeping your legs straight, hips extended, and body approximately parallel to the floor. The goal is to reach the bar with the hips or lower torso without piking or losing the lever position. A strong Full Front Lever and Front Lever Pull Ups are excellent foundations before training the full Touch Front Lever.',

  howTo: [
    {
      title: 'Establish the Front Lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a controlled Full Front Lever with your body straight and approximately horizontal. Keep your legs together, knees extended, and core braced.'
    },
    {
      title: 'Begin the pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your elbows and pull your body towards the bar while maintaining the horizontal body line. Keep your hips extended instead of folding at the waist to shorten the distance.'
    },
    {
      title: 'Pull the hips towards the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue pulling strongly through your back and arms as your torso approaches the bar. Keep your entire body rigid and resist letting your legs drop.'
    },
    {
      title: 'Reach the touch position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Reach the highest controlled position with your hips or lower torso touching the bar. Keep your body approximately horizontal instead of curling around the bar.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the touch position with continuous back, arm, and core tension. End the hold when you can no longer keep the body line or maintain controlled contact with the bar.'
    },
  ],

  commonMistakes: [
    {
      title: 'Piking to reach the bar',
      description:
        'Folding aggressively at the hips makes it easier to create contact but removes the defining horizontal lever position. Keep your hips extended and your body rigid as you pull towards the bar.'
    },
    {
      title: 'Letting the legs drop',
      description:
        'The Touch Front Lever should remain approximately horizontal. If your feet fall significantly below your hips as you pull higher, use an easier progression until you can maintain the lever.'
    },
    {
      title: 'Confusing it with a Front Lever Pull Up',
      description:
        'A Front Lever Pull Up focuses on performing controlled repetitions through elbow flexion and extension. The Touch Front Lever specifically requires reaching and controlling the highest position with the body pulled into contact with the bar.'
    },
    {
      title: 'Using momentum to reach the touch',
      description:
        'Swinging or jerking the body can create brief contact without demonstrating control of the position. Build the pull progressively and aim to reach the bar without changing the shape of your body.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'front-lever-pull-up',
    'one-arm-front-lever'
  ],

  faq: [
    {
      question: 'What is a Touch Front Lever?',
      answer:
        'The Touch Front Lever is an advanced Front Lever variation where you maintain an approximately horizontal body position while pulling your hips or lower torso into contact with the bar. Unlike the standard Front Lever, the elbows are bent in the final touch position.'
    },
    {
      question: 'Is the Touch Front Lever a static or dynamic skill?',
      answer:
        'The Touch Front Lever can be entered dynamically, but the skill itself is commonly treated as a bent-arm static position when the touch is held. In Treethenics, the static hold is separated from the Front Lever Pull Up, which represents the dynamic pulling movement.'
    },
    {
      question: 'What is the difference between a Touch Front Lever and a Front Lever Pull Up?',
      answer:
        'The Front Lever Pull Up is a repetition where you bend and extend the elbows while maintaining the lever. The Touch Front Lever emphasizes the maximum pulled position, bringing the hips or lower torso all the way to the bar and controlling that position.'
    },
    {
      question: 'Should I learn the Full Front Lever first?',
      answer:
        'Yes. A strong Full Front Lever gives you the body-line and straight-arm foundation needed for the skill. You then need additional bent-arm pulling strength to close the distance between your body and the bar.'
    },
    {
      question: 'How do I progress to the Touch Front Lever?',
      answer:
        'Build a strong Front Lever first, then train Front Lever Pull Ups and touch holds in easier shapes such as Advanced Tuck, One Leg, or Straddle. Gradually lengthen the lever while maintaining the same high pulling position and horizontal body line.'
    },
  ],

  seo: {
    title:
      'Touch Front Lever: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Touch Front Lever with proper horizontal pulling technique, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/touch-front.png',
};
