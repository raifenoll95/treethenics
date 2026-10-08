import { Exercise } from '../../../../shared/models/exercise.model';

export const SHOULDER_FLAG: Exercise = {
  id: 'shoulder-flag',
  name: 'Shoulder Flag',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'shoulders',
    'back',
    'biceps'
  ],

  primaryMuscles: [
    'obliques',
    'abdominals',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'upper-back',
    'front-deltoids',
    'biceps',
    'forearms',
    'glutes'
  ],

  description:
    'The Shoulder Flag is an intermediate static calisthenics skill performed on a vertical pole. By securing the pole between both hands and the upper shoulder, the athlete suspends the body horizontally above the ground. It develops lateral core strength, grip endurance, shoulder stability, and full-body control.',

  overview:
    'Stand beside a sturdy vertical pole and position it against the upper trapezius, between your neck and shoulder. Grip the pole firmly with both hands to create a secure clamping position. Pull strongly through your arms while lifting your feet off the ground, initially keeping your knees tucked towards your chest. Gradually extend your hips and legs until your body becomes straight and approximately parallel to the floor. Maintain strong abdominal tension and prevent your hips from dropping. Progress through tucked, single-leg, and straddle variations before attempting the full Shoulder Flag.',

  howTo: [
    {
      title: 'Position your shoulder',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand beside a secure vertical pole and position it against the muscular upper shoulder and trapezius area. Avoid placing direct pressure on your neck or throat.'
    },
    {
      title: 'Secure your grip',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Grip the pole firmly with both hands and create a stable clamping position between your hands and upper shoulder. Engage your back and arms to prevent slipping.'
    },
    {
      title: 'Lift into a tuck',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Pull strongly through your arms, brace your core, and lift both feet from the ground. Keep your knees tucked towards your chest while establishing balance and control.'
    },
    {
      title: 'Extend your body',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Gradually straighten your hips and legs while keeping your torso elevated. Work towards a horizontal body position without allowing your grip or shoulder support to shift.'
    },
    {
      title: 'Hold the Shoulder Flag',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain a straight line from your shoulders through your hips to your feet, approximately parallel to the ground. Keep your core engaged, breathe steadily, and practice both sides.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips drop',
      description:
        'Allowing your hips to sag creates a curved body position instead of a clean horizontal flag. Maintain strong abdominal and glute tension throughout the hold.'
    },
    {
      title: 'Poor shoulder positioning',
      description:
        'Placing the pole incorrectly can make the hold unstable or uncomfortable. Establish secure contact against the muscular upper shoulder rather than pressing directly into the neck.'
    },
    {
      title: 'Slipping down the pole',
      description:
        'Insufficient grip strength or weak upper-body engagement can cause your body to slide. Maintain a firm hand position and strong pulling tension through both arms.'
    },
    {
      title: 'Extending the legs too early',
      description:
        'Fully extending your legs before mastering the tucked position greatly increases the leverage. Progress gradually through shorter body positions before attempting the full hold.'
    },
    {
      title: 'Bending at the waist',
      description:
        'Avoid folding your torso or hips to make the position easier. The full Shoulder Flag requires a continuous straight line through the trunk and legs.'
    },
  ],

  relatedExercises: [
    'clutch-flag',
    'human-flag',
    'dragon-flag'
  ],

  faq: [
    {
      question: 'What is a Shoulder Flag?',
      answer:
        'The Shoulder Flag is a static calisthenics hold performed on a vertical pole. The athlete secures the pole between the hands and upper shoulder while extending the body horizontally above the ground.'
    },
    {
      question: 'What muscles does the Shoulder Flag work?',
      answer:
        'The obliques and abdominals stabilize the body horizontally, while the lats, upper back, shoulders, and arms provide the pulling force and support required to maintain the position.'
    },
    {
      question: 'Is the Shoulder Flag easier than the Human Flag?',
      answer:
        'Generally, yes. The Shoulder Flag uses additional contact between the upper shoulder and the pole, reducing some of the unsupported leverage demands found in a traditional Human Flag.'
    },
    {
      question: 'What is the difference between Shoulder Flag and Clutch Flag?',
      answer:
        'The Shoulder Flag secures the pole between both hands and the upper shoulder or trapezius. The Clutch Flag uses a different support position, with one arm against the pole and the opposite elbow braced against the abdomen.'
    },
    {
      question: 'How can I progress towards a full Shoulder Flag?',
      answer:
        'Begin with a Tuck Shoulder Flag, then gradually extend one leg while keeping the other tucked. Progress to a Straddle Shoulder Flag before bringing both legs together into the full horizontal position.'
    },
    {
      question: 'How can I improve my Shoulder Flag stability?',
      answer:
        'Practice grip endurance, strict Pull Ups, Dragon Flags, and lateral core exercises. Recording your attempts from the side can also help you identify hip sagging and incorrect body alignment.'
    },
  ],

  seo: {
    title:
      'Shoulder Flag: Technique & Progression | Treethenics',

    description:
      'Learn the Shoulder Flag with proper pole grip, shoulder positioning, horizontal body alignment, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/shoulder-flag.png',
};

