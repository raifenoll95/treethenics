import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND: Exercise = {
  id: 'handstand',
  name: 'Handstand',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
    'serratus-anterior'
  ],

  secondaryMuscles: [
    'forearms',
    'upper-back',
    'abdominals',
    'glutes'
  ],

  equipment: ['floor','parallettes'],

  description:
    'The Handstand is a fundamental hand-balancing skill where you support your entire body upside down with straight arms. It combines shoulder strength, wrist control, body awareness, and balance. A strong handstand also provides the foundation for advanced skills such as Handstand Push Ups, Press to Handstand, and One Arm Handstands.',

  overview:
    'Learning a Handstand is not just about kicking hard enough to stay upside down. Start by building a comfortable chest-to-wall position, learn how to exit safely, and develop control through your hands and fingers. From there, practice removing your feet from the wall and eventually kick up into a freestanding balance. Keep your elbows straight, push tall through your shoulders, and use small pressure changes through your hands instead of making large corrections with your whole body.',

  howTo: [
    {
      title: 'Build your wall handstand',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Walk your feet up a wall until you can support yourself comfortably on straight arms. Gradually bring your hands closer to the wall and work towards a stacked position with your shoulders pushed tall and your body controlled.'
    },
    {
      title: 'Learn to exit safely',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Practice turning out of the handstand and bringing one foot back to the floor, similar to a cartwheel exit. Being comfortable with falling makes it much easier to commit to freestanding balance attempts.'
    },
    {
      title: 'Learn hand balance',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'From a wall handstand, gently move your feet away from the wall and try to balance without support. Spread your fingers and learn to increase fingertip pressure when you begin falling too far over your hands.'
    },
    {
      title: 'Practice your kick-up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Place your hands on the floor and kick one leg upward while the other follows. Use only enough momentum to bring your hips above your shoulders instead of throwing your legs past the balance point.'
    },
    {
      title: 'Build a freestanding hold',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once upside down, keep your elbows straight and push tall through your shoulders. Use small corrections through your fingers, wrists, shoulders, and hips to keep your center of mass above your hands while gradually improving your body line.'
    },
  ],

  commonMistakes: [
    {
      title: 'Kicking up too hard',
      description:
        'More momentum does not make balancing easier. If every attempt immediately falls over the other side, reduce the force of your kick and practice entering the balance point with greater precision.'
    },
    {
      title: 'Ignoring your fingers',
      description:
        'Your hands actively control the balance. Spread your fingers and use fingertip pressure when your body begins moving too far beyond your hands instead of waiting until you need a large shoulder or hip correction.'
    },
    {
      title: 'Sinking into your shoulders',
      description:
        'Keep your elbows straight and actively push the floor away so your shoulders stay elevated. A strong supporting position gives you a more stable structure to balance above.'
    },
    {
      title: 'Leaving the wall too early',
      description:
        'Finding a few seconds of freestanding balance does not make wall training useless. Continue using chest-to-wall holds and controlled wall balance drills to improve your alignment while practicing freestanding attempts alongside them.'
    },
  ],

  relatedExercises: [
    'frog-stand',
    'handstand-push-up',
    'one-arm-handstand'
  ],

  faq: [
    {
      question: 'How do you balance a Handstand?',
      answer:
        'Balance comes largely from small changes in pressure through your hands and wrists. When you begin tipping towards your fingers, pressing harder through the fingertips can help bring you back. Your shoulders, hips, and other joints can also make corrections when larger adjustments are needed.'
    },
    {
      question: 'Should I learn Handstand against a wall first?',
      answer:
        'Wall training is extremely useful for learning how to support your body upside down and developing a more consistent body position. Chest-to-wall Handstands are especially useful for alignment, but you should eventually combine wall drills with freestanding balance and entry practice.'
    },
    {
      question: 'Should my arms be straight in a Handstand?',
      answer:
        'For a standard Handstand, yes. Keep your elbows extended and actively push through your shoulders. Bent-arm positions exist as separate hand-balancing variations, but they are not the standard Handstand position.'
    },
    {
      question: 'Why can I hold a Handstand against the wall but not freestanding?',
      answer:
        'The wall removes most of the balance problem. A freestanding Handstand requires you to recognize small changes in your center of mass and correct them through your hands, wrists, shoulders, and hips. Wall floats and controlled kick-ups help bridge that gap.'
    },
  ],

  seo: {
    title:
      'Handstand: Technique, Balance & Progressions | Treethenics',

    description:
      'Learn the Handstand with proper technique, wall progressions, balance tips, common mistakes and the path towards a freestanding hold.',
  },

  imageUrl: '/images/exercises/handstand.png',
};
