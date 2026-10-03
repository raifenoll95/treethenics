import { Exercise } from '../../../../shared/models/exercise.model';

export const BIRD_DOG: Exercise = {
  id: 'bird-dog',
  name: 'Bird Dog',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core', 'back', 'glutes'],

  primaryMuscles: [
    'abdominals',
    'glutes'
  ],

  secondaryMuscles: [
    'lower-back',
    'obliques',
    'rear-deltoids',
    'hamstrings'
  ],

  equipment: ['floor'],

  description:
    'The Bird Dog is a fundamental core stability exercise performed on hands and knees while extending one arm and the opposite leg. The goal is to move the limbs without allowing the spine, hips, or shoulders to rotate or lose their neutral position.',

  overview:
    'Start on all fours with your hands under your shoulders and your knees under your hips. Brace your trunk and slowly extend one arm forward while extending the opposite leg behind you. Reach in both directions rather than trying to lift the limbs as high as possible. Keep your pelvis level, your spine neutral, and your torso as still as possible before returning under control and repeating on the opposite side.',

  howTo: [
    {
      title: 'Set the quadruped position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start on your hands and knees with your hands directly under your shoulders and your knees directly under your hips. Keep your head aligned with your spine.'
    },
    {
      title: 'Stabilize your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Create gentle tension through your trunk and establish a neutral spine before moving your arms or legs.'
    },
    {
      title: 'Extend opposite limbs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Reach one arm forward while simultaneously extending the opposite leg behind you. Keep your elbow and knee straight as you lengthen through both limbs.'
    },
    {
      title: 'Keep your torso still',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain level hips and shoulders without twisting or arching your lower back. Reach the hand and foot away from each other rather than trying to lift them excessively high.'
    },
    {
      title: 'Return and alternate',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly return your hand and knee to the floor while maintaining control, then repeat with the opposite arm and leg.'
    },
  ],

  commonMistakes: [
    {
      title: 'Lifting the leg too high',
      description:
        'Raising the leg beyond the range you can control often causes the lower back to arch. Extend the leg only as high as you can while maintaining a stable neutral spine.'
    },
    {
      title: 'Rotating the hips',
      description:
        'The pelvis should remain approximately level with the floor. Avoid opening the hip of the extended leg to gain additional height.'
    },
    {
      title: 'Shifting onto the supporting side',
      description:
        'Do not dramatically move your bodyweight towards the supporting hand and knee. Keep your torso centered and use your core to control the asymmetrical position.'
    },
    {
      title: 'Moving too quickly',
      description:
        'The purpose of the Bird Dog is controlled stability, not speed. Extend and return slowly enough that your trunk remains stable throughout the repetition.'
    },
    {
      title: 'Arching the lower back',
      description:
        'Avoid letting your abdomen drop towards the floor as your arm and leg extend. Maintain trunk control and reduce the range of motion if your lumbar position begins to change.'
    },
  ],

  relatedExercises: [
    'plank',
    'dead-bug',
    'arch-body-hold'
  ],

  faq: [
    {
      question: 'What is the Bird Dog exercise?',
      answer:
        'The Bird Dog is a quadruped core stability exercise where you extend one arm and the opposite leg while keeping your spine, shoulders, and pelvis as stable as possible.'
    },
    {
      question: 'What muscles does the Bird Dog work?',
      answer:
        'The Bird Dog trains the muscles responsible for stabilizing the trunk while the arms and legs move. The abdominals and surrounding core muscles stabilize the spine, while the glutes help extend the hip and the back, shoulders, and hamstrings contribute to the position.'
    },
    {
      question: 'Should I lift my arm and leg as high as possible?',
      answer:
        'No. The goal is stability rather than maximum height. Raise the arm and leg only as far as you can without rotating your hips or excessively arching your lower back.'
    },
    {
      question: 'Why do I extend opposite arm and leg?',
      answer:
        'Using opposite limbs creates an asymmetrical stability challenge. Your trunk has to resist rotation and unwanted movement while the shoulder and hip move independently.'
    },
    {
      question: 'How can I make the Bird Dog easier?',
      answer:
        'Begin by moving only one limb at a time. Once you can maintain a stable spine and pelvis, progress to extending the opposite arm and leg simultaneously.'
    },
  ],

  seo: {
    title:
      'Bird Dog: Technique, Muscles & Core Stability | Treethenics',

    description:
      'Learn the Bird Dog with proper opposite arm and leg technique, muscles worked, progressions and common mistakes for developing core stability.',
  },

  imageUrl: '/images/exercises/bird-dog.png',
};
