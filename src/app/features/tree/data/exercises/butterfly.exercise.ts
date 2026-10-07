import { Exercise } from '../../../../shared/models/exercise.model';

export const BUTTERFLY: Exercise = {
  id: 'butterfly',
  name: 'Butterfly Muscle Up',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'pull',

  targetAreas: [
    'shoulders',
    'chest',
    'back',
    'biceps'
  ],

  primaryMuscles: [
    'chest',
    'latissimus-dorsi',
    'biceps'
  ],

  secondaryMuscles: [
    'front-deltoids',
    'triceps',
    'upper-back',
    'forearms',
    'abdominals'
  ],

  equipment: ['rings'],

  description:
    'The Butterfly is an elite gymnastics rings strength element where the athlete rises from a dead hang through an Iron Cross and continues pressing until reaching a stable support above the rings. The entire movement is performed with straight arms, combining powerful straight-arm pulling and pressing strength through a very large range of motion.',

  overview:
    'Begin from a controlled dead hang with your elbows completely straight. Pull through the rings while moving the arms progressively out to the sides and raising your body towards an Iron Cross. Without stopping the movement or bending the elbows, continue pressing down through the rings from the Cross until your body rises above them into a stable straight-arm support. The body should remain long and controlled throughout the movement, with minimal hip pike or swing. The Butterfly requires exceptional Iron Cross strength, straight-arm pressing strength, shoulder mobility, and extensive preparation of the elbows and shoulders.',

  howTo: [
    {
      title: 'Start from a dead hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Hang vertically between the rings with your elbows completely straight. Stabilize the rings and create full-body tension before initiating the movement.'
    },
    {
      title: 'Begin the straight-arm pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Pull through the rings with locked elbows and begin raising your body. Allow your arms to travel progressively out towards the sides as your shoulders move through the required range.'
    },
    {
      title: 'Pass through the Iron Cross',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue rising until you pass through a recognizable Iron Cross position with both arms straight and extended laterally. Keep your body upright and avoid folding at the hips.'
    },
    {
      title: 'Press above the Cross',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From the Cross, continue pressing down through the rings with straight arms. Bring the rings progressively closer to your sides as your shoulders and torso rise above them.'
    },
    {
      title: 'Finish in ring support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Complete the movement in a stable support above the rings with your elbows locked, shoulders controlled, and rings beside your hips. Do not bend the arms to finish the press.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Butterfly is a straight-arm strength element. Bending the elbows during the initial pull or the press from Cross to support changes the movement and removes one of its defining requirements.'
    },
    {
      title: 'Stopping at the Iron Cross',
      description:
        'The Iron Cross is an intermediate position in the full Butterfly, not the finish. Continue pressing through the rings until you reach a complete support above them.'
    },
    {
      title: 'Piking at the hips',
      description:
        'Avoid folding significantly at the hips to reduce the lever or generate momentum. Keep the body long and vertically aligned as it travels from hang through Cross to support.'
    },
    {
      title: 'Using a swing to initiate the movement',
      description:
        'Do not replace straight-arm strength with a large kip or body swing. The body should rise through controlled force produced against the rings.'
    },
    {
      title: 'Losing control above the Cross',
      description:
        'Passing through the Cross does not guarantee enough strength to complete the skill. Develop strong Cross presses and assisted Butterfly work so you can continue smoothly into support.'
    },
  ],

  relatedExercises: [
    'iron-cross',
    'rings-muscle-up',
    'maltese-rings'
  ],

  faq: [
    {
      question: 'What is the Butterfly on rings?',
      answer:
        'The Butterfly is an elite straight-arm rings movement where the athlete rises from a dead hang, passes through an Iron Cross, and continues pressing until reaching a support position above the rings.'
    },
    {
      question: 'Does the Butterfly finish in an Iron Cross?',
      answer:
        'No. In the full version used by Treethenics, the Iron Cross is the middle of the movement. The athlete continues pressing from the Cross until reaching straight-arm support above the rings.'
    },
    {
      question: 'Is the Butterfly a type of Muscle Up?',
      answer:
        'The overall path resembles an extremely advanced straight-arm Muscle Up because the athlete travels from below the rings to support above them. However, unlike a regular Ring Muscle Up, the Butterfly passes through an Iron Cross and keeps the elbows straight instead of using a bent-arm pull and transition.'
    },
    {
      question: 'Do the elbows stay straight during the entire Butterfly?',
      answer:
        'Yes. Keeping the elbows extended throughout the pull, Cross, and press is one of the defining characteristics of the skill.'
    },
    {
      question: 'What should I learn before the Butterfly?',
      answer:
        'You should already have exceptional rings strength, a very strong Iron Cross, controlled Cross pressing strength, stable ring support, and sufficient shoulder mobility. Assisted straight-arm Butterfly variations can then be used to learn the complete movement path.'
    },
  ],

  seo: {
    title:
      'Butterfly on Rings: Technique & Progression | Treethenics',

    description:
      'Learn the Butterfly on rings, an elite straight-arm strength skill from dead hang through Iron Cross to support, with technique, prerequisites and common mistakes.',
  },

  imageUrl: '/images/exercises/butterfly.png',
};
