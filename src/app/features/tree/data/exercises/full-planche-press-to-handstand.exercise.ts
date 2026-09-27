import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
  id: 'full-planche-press-to-handstand',
  name: 'Full Planche Press to Handstand',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'chest'
  ],

  secondaryMuscles: [
    'triceps',
    'abdominals',
    'upper-back',
    'forearms',
    'glutes'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Full Planche Press to Handstand is an elite straight-arm pushing skill where you move from a horizontal Full Planche into a vertical Handstand without bending your elbows. It combines full planche strength with powerful shoulder elevation, body-line control, and handstand balance through a large range of motion.',

  overview:
    'The Full Planche Press to Handstand should come after you already have strong control of both the Full Planche and Handstand. Starting from a horizontal planche, keep your elbows locked and gradually raise your hips and legs while your shoulders move from far in front of your hands towards a stacked handstand position. Learn the transition with shorter levers first, progressing from tuck to advanced tuck and straddle before attempting the full straight-body press.',

  howTo: [
    {
      title: 'Build both positions',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled Full Planche and a stable freestanding Handstand separately. Practice straight-arm transitions with tuck and straddle variations before attempting to connect the two full positions.'
    },
    {
      title: 'Start from a solid Full Planche',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Establish a horizontal Full Planche with your elbows locked, legs together, knees straight, and feet off the floor. Push strongly through your shoulders and stabilize the position before beginning the press.'
    },
    {
      title: 'Drive your hips upward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep your arms straight and continue pushing through the floor as you raise your hips and legs. Maintain full-body tension and avoid folding sharply at the hips simply to escape the planche.'
    },
    {
      title: 'Move towards the handstand stack',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'As your body rises, gradually bring your shoulders back towards alignment over your wrists. Keep pushing tall through your shoulders and use your hands and fingers to control the changing balance point.'
    },
    {
      title: 'Finish in Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Continue pressing until your hips, legs, and feet reach vertical above your shoulders and hands. Finish with straight elbows, elevated shoulders, straight knees, and a controlled freestanding Handstand.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'A strict Full Planche Press to Handstand is a straight-arm transition. Bending your elbows changes the movement into a different type of press and reduces the straight-arm shoulder strength required. Use an easier planche progression if you cannot keep your elbows locked.'
    },
    {
      title: 'Losing the planche before pressing',
      description:
        'Do not let your feet drop or immediately pike your hips before initiating the movement. Start from a recognizable horizontal Full Planche and create the transition through controlled shoulder and hip movement.'
    },
    {
      title: 'Trying to lift the feet first',
      description:
        'Do not think about throwing your legs towards the ceiling. Focus on pushing through the shoulders and raising your hips while controlling your center of mass over the hands. The legs should follow the movement rather than create it through momentum.'
    },
    {
      title: 'Using momentum to reach Handstand',
      description:
        'Avoid kicking, swinging, or rapidly snapping your hips to escape the hardest part of the press. Reduce the lever to straddle or tuck and develop enough strength to make the transition smooth and controlled.'
    },
  ],

  relatedExercises: [
    'full-planche',
    'straddle-planche-press-to-handstand',
    'handstand'
  ],

  faq: [
    {
      question: 'What is a Full Planche Press to Handstand?',
      answer:
        'It is a straight-arm transition from a horizontal Full Planche into a vertical Handstand. Your feet remain off the floor throughout the movement and your elbows stay extended while your body rises above your hands.'
    },
    {
      question: 'Do I need a Full Planche before learning it?',
      answer:
        'You can train easier versions of the transition before you have a Full Planche, but the full variation requires enough strength to establish and control the Full Planche itself. Tuck, advanced tuck, and straddle presses are better ways to develop the transition while building towards the full skill.'
    },
    {
      question: 'Should my arms stay straight?',
      answer:
        'Yes, for the strict Full Planche Press to Handstand. Keeping the elbows extended is one of the defining characteristics of the straight-arm version. A press performed by significantly bending the elbows should be treated as a different variation.'
    },
    {
      question: 'How should I progress towards a Full Planche Press to Handstand?',
      answer:
        'Learn the transition with shorter levers first. Build Tuck Planche to Handstand, then progress through Advanced Tuck and Straddle Planche presses before attempting the Full Planche version. Controlled Handstand-to-Planche negatives can also help you learn the same pathway in reverse.'
    },
  ],

  seo: {
    title:
      'Full Planche Press to Handstand: Progressions | Treethenics',

    description:
      'Learn the Full Planche Press to Handstand with straight-arm technique, progressions, common mistakes and tips for a controlled transition.',
  },

  imageUrl: '/images/exercises/full-planche-press-to-handstand.png',
};
