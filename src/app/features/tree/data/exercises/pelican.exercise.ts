import { Exercise } from '../../../../shared/models/exercise.model';

export const PELICAN: Exercise = {
  id: 'pelican',
  name: 'Pelican',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'push',

  targetAreas: [
    'shoulders',
    'chest',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'biceps'
  ],

  secondaryMuscles: [
    'triceps',
    'latissimus-dorsi',
    'upper-back',
    'abdominals',
    'forearms',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Pelican is an extremely advanced straight-arm strength movement performed on gymnastics rings. Starting from a horizontal Back Lever, the athlete presses the entire body upward through an exceptionally demanding shoulder transition until reaching a Full Planche, maintaining straight elbows and full-body tension throughout.',

  overview:
    'Begin in a stable Back Lever on gymnastics rings, with your body horizontal, facing the floor, and both elbows completely extended. Initiate a powerful but controlled straight-arm press, gradually moving your shoulders and body upward while maintaining a rigid body line. The transition passes through extreme anterior shoulder loading as the rings move relative to your torso. Continue pressing until you reach a Full Planche above the rings, with your body horizontal and supported entirely by straight arms. The Pelican combines demanding Back Lever mechanics with elite-level Planche strength and requires exceptional preparation of the shoulders, elbows, and biceps tendons.',

  howTo: [
    {
      title: 'Establish the Back Lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a full Back Lever on the rings. Keep your body horizontal and face down, with your legs together, hips extended, and elbows completely locked.'
    },
    {
      title: 'Initiate the press',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Generate force through your shoulders while maintaining straight arms. Begin moving your body upward without swinging, bending your elbows, or losing your body alignment.'
    },
    {
      title: 'Control the transition',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue the straight-arm press through the most demanding portion of the movement. Allow the rings to follow the necessary shoulder path while maintaining symmetrical control and a rigid body.'
    },
    {
      title: 'Move into Full Planche',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Progressively shift into the Planche support position, bringing your shoulders forward of the rings while keeping your elbows locked and your torso, hips, and legs aligned.'
    },
    {
      title: 'Stabilize the Full Planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish in a Full Planche on rings with your body horizontal, legs extended, and arms completely straight. Stabilize the rings and maintain full-body tension without dropping your hips.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Pelican is a straight-arm strength transition. Bending the elbows changes the movement mechanics and reduces the intended shoulder leverage.'
    },
    {
      title: 'Losing the horizontal body line',
      description:
        'Avoid excessive hip flexion, sagging, or back arching to shorten the lever. Maintain a straight body line throughout the transition.'
    },
    {
      title: 'Using momentum',
      description:
        'Swinging or bouncing out of the Back Lever can bypass the most demanding portion of the movement. The strict Pelican requires a controlled strength press.'
    },
    {
      title: 'Forcing the shoulder transition',
      description:
        'Do not force the rings or shoulders through an uncontrolled range of motion. The transition places exceptional stress on the anterior shoulders, elbows, and biceps tendons.'
    },
    {
      title: 'Failing to reach Full Planche',
      description:
        'Stopping in a bent-arm support or an incomplete Planche does not complete this variation. The finishing position requires a recognizable Full Planche with straight arms and a horizontal body.'
    },
  ],

  relatedExercises: [
    'back-lever',
    'full-planche-rings',
    'maltese-rings'
  ],

  faq: [
    {
      question: 'What is the Pelican in calisthenics?',
      answer:
        'The Pelican is an elite gymnastics rings strength transition. In this variation, the athlete moves from a horizontal Back Lever into a Full Planche using a controlled straight-arm press.'
    },
    {
      question: 'Is the Pelican one of the hardest calisthenics exercises?',
      answer:
        'Yes. The full straight-arm Pelican is an exceptionally difficult rings movement because it combines extreme shoulder leverage, demanding body control, and a transition between two advanced horizontal strength positions.'
    },
    {
      question: 'What muscles does the Pelican work?',
      answer:
        'The anterior deltoids, pectorals, and biceps are heavily loaded during the straight-arm transition. The triceps, upper back, lats, forearms, and core contribute to joint stability and body alignment.'
    },
    {
      question: 'What is the difference between Pelican and Pelican Curl?',
      answer:
        'A Pelican Curl is a bent-arm exercise that emphasizes elbow flexion and biceps strength. The full Pelican described here is a straight-arm rings strength transition from Back Lever to Full Planche.'
    },
    {
      question: 'What should I master before attempting the Pelican?',
      answer:
        'You should already have exceptional control of the Back Lever and Full Planche on rings, together with extensive straight-arm strength preparation. Assisted transitions and controlled negatives can help develop the movement under qualified supervision.'
    },
  ],

  seo: {
    title:
      'Pelican: Back Lever to Planche on Rings | Treethenics',

    description:
      'Discover the Pelican, an elite gymnastics rings movement transitioning from Back Lever to Full Planche with straight arms, extreme strength and control.',
  },

  imageUrl: '/images/exercises/pelican.png',
};

