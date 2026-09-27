import { Exercise } from '../../../../shared/models/exercise.model';

export const NORDIC_CURL: Exercise = {
  id: 'nordic-curl',
  name: 'Nordic Curl',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'legs',

  targetAreas: ['glutes', 'legs'],

  primaryMuscles: [
    'glutes'
  ],

  secondaryMuscles: [
    'glutes',
    'calves',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The Nordic Curl is a bodyweight hamstring exercise performed from a kneeling position with your ankles securely anchored. You resist your body falling forward by controlling knee extension with your hamstrings, then return towards the starting position with assistance or your own strength.',

  overview:
    'The Nordic Curl is especially demanding during the eccentric phase, so you do not need a full unassisted repetition to start training it. Begin by controlling the forward descent as far as possible, use your hands to catch yourself, and assist the return. As your hamstrings become stronger, increase the range you can control before using less assistance and eventually working towards a full Nordic Curl in both directions.',

  howTo: [
    {
      title: 'Secure your ankles',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Kneel on a comfortable surface and secure your ankles under a stable anchor or with a partner. Start tall with your knees on the floor and your hips extended.'
    },
    {
      title: 'Keep your body rigid',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Brace your core and maintain a relatively straight line from your knees through your hips and shoulders. Avoid folding at the hips to make the movement easier.'
    },
    {
      title: 'Resist the fall',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly lean forward from your knees while your hamstrings resist the increasing leverage. Control the descent for as long as possible instead of simply falling towards the floor.'
    },
    {
      title: 'Catch yourself',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'When you can no longer control the descent, place your hands on the floor to catch your body. Use your arms only as much as necessary to keep the movement controlled.'
    },
    {
      title: 'Return with assistance',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Push lightly through your hands or use another form of assistance to begin the return, then let your hamstrings contribute as much as possible. Progress towards using less assistance through a larger range.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending at the hips',
      description:
        'Pushing your hips backward shortens the effective lever and makes the exercise much easier. Keep your hips extended and move your torso and thighs forward together as one controlled unit.'
    },
    {
      title: 'Dropping through the eccentric',
      description:
        'The controlled descent is one of the most valuable parts of the Nordic Curl. If you immediately fall towards the floor, shorten the range or use band assistance so your hamstrings can actively resist the movement.'
    },
    {
      title: 'Forcing the concentric too early',
      description:
        'Returning from the bottom is considerably harder than controlling part of the descent. Use your hands, a band, or another form of assistance while building enough strength instead of changing your body position to force a full repetition.'
    },
    {
      title: 'Using an unstable ankle anchor',
      description:
        'Your feet need to remain securely anchored as your body moves forward. Make sure the setup cannot slide, lift, or unexpectedly release before loading the exercise.'
    },
  ],

  relatedExercises: [
    'hip-thrust',
    'single-leg-hip-thrust',
    'nordic-curl-assisted'
  ],

  faq: [
    {
      question: 'What muscles does the Nordic Curl work?',
      answer:
        'The hamstrings are the primary muscles trained because they resist knee extension as your body falls forward and flex the knee during an unassisted return. The glutes and core help maintain your hip and torso position, while the calves can also contribute around the knee.'
    },
    {
      question: 'Do I need to perform a full Nordic Curl?',
      answer:
        'No. Controlled eccentric repetitions are a legitimate way to train the exercise. Lower yourself as far as your hamstrings can control, catch yourself with your hands, and use assistance on the way back while gradually increasing your controlled range.'
    },
    {
      question: 'Why can I lower myself but not come back up?',
      answer:
        'The full return requires enough concentric knee-flexion strength to overcome a very demanding bodyweight lever. It is normal to develop the eccentric portion first. Use hand or band assistance on the return and gradually reduce it as your strength improves.'
    },
    {
      question: 'How can I make Nordic Curls easier?',
      answer:
        'Use a resistance band for assistance, limit the range of motion, or catch and push from the floor with your hands. The goal is to choose enough assistance that you can control the movement rather than dropping through the difficult portion.'
    },
    {
      question: 'Should I bend at the hips during Nordic Curls?',
      answer:
        'For the standard Nordic Curl, keep your hips relatively extended so your torso and thighs move together. Deliberately flexing the hips reduces the hamstring leverage and turns the exercise into an easier variation.'
    },
  ],

  seo: {
    title:
      'Nordic Curl: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Nordic Curl with proper technique, eccentric progressions, muscles worked and common mistakes for building strong hamstrings.',
  },

  imageUrl: '/images/exercises/nordic-curl.png',
};
