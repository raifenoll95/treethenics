
import { Exercise } from '../../../../shared/models/exercise.model';

export const FORWARD_LUNGE: Exercise = {
  id: 'forward-lunge',
  name: 'Forward Lunge',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: [
    'legs',
    'core'
  ],

  primaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  secondaryMuscles: [
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The Forward Lunge is a beginner unilateral bodyweight leg exercise performed by stepping forwards, lowering the body through controlled knee and hip flexion, and pushing back to the starting position. It strengthens the quadriceps and glutes while developing balance, coordination, and lower-body stability.',

  overview:
    'Stand upright with your feet approximately hip-width apart and your arms relaxed at your sides or positioned for balance. Take a controlled step forwards with one leg, placing your entire front foot firmly on the ground. Bend both knees and lower your hips until your rear knee approaches the floor without striking it. Keep your front knee aligned with your toes and your torso relatively upright with a natural forward inclination. Press through your front foot to return to the starting standing position. Repeat with the opposite leg or complete all repetitions on one side before switching. Maintain controlled movement and avoid excessive knee collapse, unstable foot placement, or using momentum to return upright.',

  howTo: [
    {
      title: 'Stand in the starting position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright with your feet approximately hip-width apart. Engage your core and maintain a comfortable, neutral posture.'
    },
    {
      title: 'Step forwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Take a controlled step forwards with one leg. Place your front foot firmly on the floor while keeping your hips facing forwards.'
    },
    {
      title: 'Lower into the lunge',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend both knees and lower your hips towards the floor. Keep your front knee aligned with your toes and allow your rear knee to approach the ground.'
    },
    {
      title: 'Push back to standing',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press through your front foot to extend your knee and hip, returning to the original standing position with control.'
    },
    {
      title: 'Repeat on the opposite leg',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Perform the movement with the opposite leg. Maintain consistent step length, balance, and controlled technique on both sides.'
    },
  ],

  commonMistakes: [
    {
      title: 'Allowing the front knee to collapse inward',
      description:
        'Avoid letting your front knee move excessively towards the inside of your foot. Keep your knee tracking naturally in line with your toes.'
    },
    {
      title: 'Taking an excessively short step',
      description:
        'A very short step can make it difficult to maintain balance and a comfortable lowering position. Adjust your stride length to allow controlled movement through both knees and hips.'
    },
    {
      title: 'Taking an excessively long step',
      description:
        'An overly long stride can restrict movement and make returning to standing difficult. Choose a comfortable distance that allows stable foot placement.'
    },
    {
      title: 'Losing balance',
      description:
        'Avoid placing your feet directly in one narrow line. Maintain enough lateral distance between your feet to support a stable lunge.'
    },
    {
      title: 'Slamming the rear knee into the floor',
      description:
        'Lower your body under control and avoid striking the ground with your rear knee. Stop slightly above the floor if necessary.'
    },
    {
      title: 'Pushing excessively from the rear leg',
      description:
        'Avoid relying primarily on the rear foot to return upright. Emphasize pushing through the front leg while maintaining balance.'
    },
    {
      title: 'Rushing the movement',
      description:
        'Do not step forwards or return to standing using uncontrolled momentum. Maintain a smooth and deliberate tempo throughout each repetition.'
    },
  ],

  relatedExercises: [
    'squat',
    'pistol-squat',
    'dragon-pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Forward Lunge?',
      answer:
        'A Forward Lunge is a unilateral leg exercise in which the athlete steps forwards, bends both knees to lower the body, and then pushes backwards to return to the starting standing position.'
    },
    {
      question: 'What muscles do Forward Lunges work?',
      answer:
        'Forward Lunges primarily train the quadriceps and gluteal muscles. The hamstrings, hip stabilizers, calves, and core muscles also contribute to controlling the movement and maintaining balance.'
    },
    {
      question: 'Are Forward Lunges good for beginners?',
      answer:
        'Yes. Forward Lunges are suitable for many beginners, although they require balance and coordination. Beginners can use a wall or stable support and reduce the movement depth until they develop sufficient control.'
    },
    {
      question: 'What is the difference between Forward Lunges and Reverse Lunges?',
      answer:
        'Forward Lunges begin by stepping forwards, while Reverse Lunges begin by stepping backwards. Both train similar muscle groups, but they create different balance and movement demands.'
    },
    {
      question: 'Should my front knee go past my toes?',
      answer:
        'It is not automatically incorrect for the front knee to move beyond the toes. The appropriate knee position depends on individual anatomy, stride length, and mobility. Prioritize comfortable movement and controlled knee alignment.'
    },
    {
      question: 'Should my rear knee touch the floor?',
      answer:
        'No. Your rear knee can approach the floor without touching it. Lower as far as you can while maintaining balance and a comfortable range of motion.'
    },
    {
      question: 'How can I make Forward Lunges easier?',
      answer:
        'Use a stable support for balance, reduce your step length or depth, or practice stationary Split Squats before progressing to full Forward Lunges.'
    },
    {
      question: 'How can I make Forward Lunges harder?',
      answer:
        'Increase your range of motion, slow down the lowering phase, add a brief pause at the bottom, or introduce external resistance once your bodyweight technique is consistent.'
    },
  ],

  seo: {
    title:
      'Forward Lunge: Technique & Muscles | Treethenics',

    description:
      'Learn Forward Lunges with correct stepping technique, knee alignment, muscles worked, common mistakes and beginner leg progressions.',
  },

  imageUrl: '/images/exercises/forward-lunge.png',
};
