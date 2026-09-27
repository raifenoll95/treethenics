import { Exercise } from '../../../../shared/models/exercise.model';

export const DIAMOND_PUSH_UP: Exercise = {
  id: 'diamond-push-up',
  name: 'Diamond Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: ['triceps', 'chest', 'shoulders'],

  primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

  secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

  equipment: ['floor'],

  description:
    'The diamond push up is a close-grip variation of the regular push up that puts more emphasis on your triceps while still working your chest and shoulders. Bringing your hands closer together makes the exercise noticeably harder, so it is a great progression once regular push ups start to feel comfortable. It is also a simple way to build stronger triceps using nothing more than your own bodyweight.',

  overview:
    'If you can already perform regular push ups with good form, the diamond push up is a great next step. The closer hand position makes your triceps work harder and challenges your pushing strength in a different way. You do not need to force your hands into a perfect diamond shape either. Keep them close, find a position that feels comfortable on your wrists, and focus on clean reps with a full range of motion.',

  howTo: [
    {
      title: 'Start with close-grip knee push ups',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'If the full variation is too difficult, start on your knees. Place your hands close together under your chest and perform controlled push ups while keeping your body aligned from your knees to your shoulders. This lets you get used to the narrower hand position without having to support your full bodyweight.'
    },
    {
      title: 'Find a comfortable hand position',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Place your hands close together underneath your chest. Your thumbs and index fingers can touch to create the classic diamond shape, but do not force the position if it feels uncomfortable on your wrists. A small gap between your hands is completely fine.'
    },
    {
      title: 'Lower your chest towards your hands',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep your core tight and your body in a straight line as you lower yourself towards the floor. Keep your elbows relatively close to your torso instead of letting them flare far out to the sides, and control the movement all the way down.'
    },
    {
      title: 'Push back to the starting position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push the floor away until your arms are fully extended again, keeping your hips and chest moving together. Once you can perform clean diamond push ups consistently, start adding reps while maintaining the same range of motion and body position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Forcing a perfect diamond shape',
      description:
        'Your thumbs and index fingers do not have to form a perfect diamond. Everyone has slightly different wrist mobility and proportions, so forcing your hands into an uncomfortable position is unnecessary. Keep your hands close together and use a position that allows you to push comfortably.'
    },
    {
      title: 'Letting your elbows flare too far out',
      description:
        'Try not to let your elbows point directly out to the sides as you lower yourself. Keep them relatively close to your torso and let them move naturally throughout the rep. This will help you maintain a stronger and more controlled pushing position.'
    },
    {
      title: 'Losing your body position',
      description:
        'Diamond push ups are harder than regular push ups, and it is common for the hips to drop or rise when you start getting tired. Keep your abs and glutes engaged so your shoulders, hips, and legs move as one unit throughout the exercise.'
    },
    {
      title: 'Sacrificing range of motion for more reps',
      description:
        'Short reps might let you reach a bigger number, but they make it difficult to judge your actual progress. Lower yourself under control and use a consistent range of motion on every rep. If you cannot maintain it, switch to an easier variation and build your strength from there.'
    },
  ],

  relatedExercises: [
    'push-up',
    'sphinx-push-up'
  ],

  faq: [
    {
      question: 'Are diamond push ups harder than regular push ups?',
      answer:
        'For most people, yes. Bringing your hands closer together changes the mechanics of the push up and places a greater demand on your triceps. If you can do regular push ups but struggle with diamond push ups, that is completely normal. Start with the knee variation or use a slightly wider hand position and gradually bring your hands closer as you get stronger.'
    },
    {
      question: 'Do diamond push ups work the chest or the triceps?',
      answer:
        'They work both. Diamond push ups are especially useful for putting more emphasis on the triceps, but your chest and shoulders are still heavily involved in the movement. Think of them as a close-grip push up rather than a triceps-only exercise.'
    },
    {
      question: 'Do your hands have to make a perfect diamond?',
      answer:
        'No. The name comes from placing your thumbs and index fingers together to create a diamond shape, but there is no reason to force this exact position. Keeping your hands close together is what matters. If a small gap between your hands feels better on your wrists, use it.'
    },
    {
      question: 'How many diamond push ups should I be able to do?',
      answer:
        'There is no number you need to reach, but 10 clean reps is a good first goal. Once you can perform around 15–20 controlled reps with a full range of motion, you have built a solid level of strength in the movement and can start exploring harder push up variations.'
    },
  ],

  seo: {
    title:
      'Diamond Push Up: How to Do It, Muscles & Progressions | Treethenics',

    description:
      'Learn how to do the Diamond Push Up with proper technique, muscles worked, common mistakes and progressions to build stronger triceps and pushing strength.',
  },

  imageUrl: '/images/exercises/diamond-push-up.png',
};
