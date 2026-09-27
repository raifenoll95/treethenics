import { Exercise } from '../../../../shared/models/exercise.model';

export const ISOMETRIC_SQUAT: Exercise = {
  id: 'isometric-squat',
  name: 'Isometric Squat',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'glutes'],

  primaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  secondaryMuscles: [
    'hamstrings',
    'calves',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The Isometric Squat is a static lower-body exercise where you descend into a squat and hold the position without moving. Your quadriceps and glutes remain under continuous tension while your hips, knees, ankles, and core work together to keep the position stable.',

  overview:
    'Unlike a regular Squat, the goal of the Isometric Squat is not to perform repetitions but to maintain a chosen squat depth under continuous tension. Descend into a comfortable squat, keep your whole foot connected to the floor, and hold your knees and hips in a stable position. Start at a depth you can control and gradually progress through deeper positions, longer holds, or more demanding variations rather than allowing your posture to deteriorate as you fatigue.',

  howTo: [
    {
      title: 'Set your squat stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet around shoulder width apart and turn your toes slightly outward if comfortable. Keep your whole foot in contact with the floor and prepare to squat between your hips.'
    },
    {
      title: 'Descend into position',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your knees and hips until you reach a squat depth you can control. Around parallel is a useful standard position, but you can begin higher or hold deeper depending on your strength and mobility.'
    },
    {
      title: 'Stabilize your lower body',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep your knees tracking in the same general direction as your toes and maintain pressure through the whole foot. Avoid shifting entirely onto your toes or heels.'
    },
    {
      title: 'Hold the squat',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain the same hip and knee position while keeping your torso controlled. Continue breathing instead of holding your breath and end the hold when you can no longer maintain the intended squat position.'
    },
    {
      title: 'Stand with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish the hold by driving through your feet and extending your knees and hips until you return to standing. As you improve, progress the hold time or difficulty without sacrificing your squat position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Slowly standing up during the hold',
      description:
        'As your legs fatigue, it is common to gradually raise your hips and turn the exercise into a much easier partial squat. Choose a position before starting and finish the set when you can no longer maintain it.'
    },
    {
      title: 'Letting your knees collapse inward',
      description:
        'Keep your knees tracking in the same general direction as your toes. If they repeatedly collapse inward as you fatigue, reduce the depth or duration and rebuild control.'
    },
    {
      title: 'Lifting your heels',
      description:
        'Maintain contact through the whole foot rather than shifting onto your toes. If your heels rise because you cannot reach the chosen depth comfortably, use a shallower squat while working on the mobility and control required for deeper positions.'
    },
    {
      title: 'Holding your breath',
      description:
        'Continuous muscular tension can make you instinctively stop breathing. Once you are stable in the squat, breathe normally while maintaining tension through your legs and trunk.'
    },
  ],

  relatedExercises: [
    'squat',
    'wall-sit',
    'single-leg-squat-hold'
  ],

  faq: [
    {
      question: 'What is an Isometric Squat?',
      answer:
        'An Isometric Squat is a static squat where you hold a fixed hip and knee position instead of repeatedly standing up and squatting down. Your muscles continue producing force even though there is little or no visible joint movement.'
    },
    {
      question: 'What muscles does the Isometric Squat work?',
      answer:
        'The quadriceps and glutes do much of the work required to maintain the squat position. The hamstrings, adductors, calves, and core also contribute to stabilizing your hips, knees, ankles, and torso.'
    },
    {
      question: 'Is an Isometric Squat the same as a Wall Sit?',
      answer:
        'No. Both are static squat exercises, but a Wall Sit uses the wall to support your torso. An Isometric Squat is held without that support, so you must actively maintain your squat position and balance over your feet.'
    },
    {
      question: 'How deep should I hold an Isometric Squat?',
      answer:
        'Use a depth that you can maintain with good control. Holding around thighs-parallel is a common version, but beginners can start higher and deeper positions can be used as a progression. There is no need to force a specific depth if your mobility or control does not support it.'
    },
  ],

  seo: {
    title:
      'Isometric Squat: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Isometric Squat with proper technique, muscles worked, common mistakes and progressions for lower-body isometric strength.',
  },

  imageUrl: '/images/exercises/isometric-squat.png',
};
