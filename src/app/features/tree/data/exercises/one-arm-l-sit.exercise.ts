import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_L_SIT: Exercise = {
  id: 'one-arm-l-sit',
  name: 'One Arm L-Sit',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'core',

  targetAreas: ['core', 'shoulders', 'biceps'],

  primaryMuscles: [
    'abdominals',
    'triceps',
    'obliques'
  ],

  secondaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'quadriceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The One Arm L-Sit is an advanced unilateral variation of the L-Sit where you support your entire body on one straight arm while keeping both legs extended in front of you. It combines L-Sit compression with significantly greater balance, lateral core control, and single-arm support strength.',

  overview:
    'The One Arm L-Sit is not achieved by simply removing one hand from a regular L-Sit. Your center of mass must first shift over the supporting hand while your torso, hips, and legs adjust to maintain balance. Build a strong L-Sit first, then practice lateral weight shifts and straddle-assisted positions before progressively unloading the second hand. Expect some asymmetry in the final position because the body must balance around a single point of support.',

  howTo: [
    {
      title: 'Master the L-Sit',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Build a strong L-Sit with straight elbows, elevated hips, and fully extended legs. Make sure you can actively press through both hands instead of sinking into your shoulders.'
    },
    {
      title: 'Shift onto one hand',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From your L-Sit, gradually move your torso and center of mass towards one supporting hand. Keep both hands down initially and learn how far you need to shift before the opposite hand becomes light.'
    },
    {
      title: 'Use a straddle position',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Open your legs into a controlled straddle while shifting over the supporting arm. The wider leg position gives you more freedom to counterbalance the unilateral support.'
    },
    {
      title: 'Reduce the second hand',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Progress from full hand support to fingertips and then progressively lighter contact. Remove the assisting hand only when you can maintain your hip height and balance without collapsing towards the unsupported side.'
    },
    {
      title: 'Close into the One Arm L-Sit',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once the one-arm straddle position is controlled, gradually bring your legs together while keeping them straight and elevated. Maintain a locked supporting elbow and actively press away from the floor throughout the hold.'
    },
  ],

  commonMistakes: [
    {
      title: 'Lifting the hand before shifting your weight',
      description:
        'Removing one hand while your center of mass is still between both hands will immediately pull you towards the unsupported side. Shift your body over the working hand first, then progressively unload the other hand.'
    },
    {
      title: 'Collapsing into the supporting shoulder',
      description:
        'Do not simply hang your body from the shoulder joint. Press actively through the supporting hand and maintain shoulder control so your torso stays elevated and stable.'
    },
    {
      title: 'Bending the supporting elbow',
      description:
        'The standard One Arm L-Sit uses a straight supporting arm. If your elbow bends significantly, return to fingertip assistance or a wider straddle until you can maintain the position with the elbow locked.'
    },
    {
      title: 'Closing the legs too early',
      description:
        'Keeping the legs together reduces your ability to counterbalance the one-arm position. Develop the unilateral straddle first, then gradually narrow the legs as your balance and support strength improve.'
    },
  ],

  relatedExercises: [
    'l-sit',
    'v-sit',
    'one-arm-handstand'
  ],

  faq: [
    {
      question: 'What is a One Arm L-Sit?',
      answer:
        'The One Arm L-Sit is a unilateral support skill where you hold both legs straight in front of you while supporting your entire body on one straight arm. It combines the compression of an L-Sit with single-arm balance and lateral core control.'
    },
    {
      question: 'Is One Arm L-Sit the same as One Arm L-Sit Hang?',
      answer:
        'No. A One Arm L-Sit Hang is performed while hanging from a bar with one arm. The One Arm L-Sit is a support skill performed above the hands on the floor or parallettes, so the shoulder and arm mechanics are completely different.'
    },
    {
      question: 'What muscles does the One Arm L-Sit work?',
      answer:
        'The abdominals maintain the L-Sit compression, while the obliques help control the asymmetric body position. The supporting triceps keeps the elbow extended, and the shoulder, serratus, and forearm musculature stabilize the single-arm support. The quadriceps keep the knees straight.'
    },
    {
      question: 'Should I learn the L-Sit first?',
      answer:
        'Yes. A strong two-arm L-Sit is the foundation because the one-arm variation adds balance and unilateral support demands on top of the existing compression requirement. Train the regular L-Sit until its basic position is no longer the limiting factor.'
    },
    {
      question: 'How do I progress to a One Arm L-Sit?',
      answer:
        'Start with a strong L-Sit, then practice lateral weight shifts. Progress to a straddle position while unloading one hand, use fingertip assistance, and eventually remove the assisting hand. Once the one-arm straddle is controlled, progressively bring the legs together.'
    },
  ],

  seo: {
    title:
      'One Arm L-Sit: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the One Arm L-Sit with proper technique, muscles worked, straddle and fingertip progressions, and common mistakes for this advanced unilateral L-Sit skill.',
  },

  imageUrl: '/images/exercises/one-arm-l-sit.png',
};
