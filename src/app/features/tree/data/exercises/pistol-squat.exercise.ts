import { Exercise } from '../../../../shared/models/exercise.model';

export const PISTOL_SQUAT: Exercise = {
  id: 'pistol-squat',
  name: 'Pistol Squat',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
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

  equipment: ['floor','added-weight'],

  description:
    'The Pistol Squat is a deep single-leg squat performed while keeping the non-working leg extended in front of you. It combines unilateral leg strength with balance, ankle mobility, hip control, and the active flexibility needed to keep the free leg off the floor.',

  overview:
    'The Pistol Squat challenges much more than leg strength. You must control your entire bodyweight on one leg while descending into a deep squat, keeping the heel grounded and the free leg elevated. Build the movement progressively with assisted pistols, controlled negatives, and bottom-position practice. Your knee can naturally travel forward as you descend; focus on keeping the foot stable and the knee tracking in a controlled direction rather than trying to keep the shin vertical.',

  howTo: [
    {
      title: 'Set your balance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand on one leg and extend the opposite leg in front of you. Reach your arms forward as needed for balance and keep the entire working foot firmly connected to the floor.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your working knee and hip while sitting down into the squat. Allow the knee to travel forward naturally while keeping the heel grounded and the free foot off the floor.'
    },
    {
      title: 'Reach the bottom',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Descend as deeply as your mobility and control allow, eventually bringing your hips close to your working heel. Keep the extended leg elevated throughout the bottom position.'
    },
    {
      title: 'Drive through the working leg',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push through your working foot and extend the knee and hip to rise. Keep your balance over the foot instead of allowing the knee or ankle to collapse inward.'
    },
    {
      title: 'Finish standing',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Return to a controlled single-leg standing position before placing the free foot down. Train both sides and use assistance when one side cannot yet complete the same range.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the heel lift',
      description:
        'If your heel repeatedly leaves the floor as you approach the bottom, ankle mobility or control may be limiting your position. Use assisted or reduced-depth Pistols while developing the range you need.'
    },
    {
      title: 'Letting the knee collapse inward',
      description:
        'Keep the working foot stable and control the knee throughout the descent and ascent. Avoid allowing the knee to suddenly collapse towards the inside as you move through the hardest part of the squat.'
    },
    {
      title: 'Dropping into the bottom',
      description:
        'Falling quickly into the deepest position avoids developing strength through the descent and makes balance harder to control. Slow negatives and assisted repetitions are useful when you cannot yet reach the bottom smoothly.'
    },
    {
      title: 'Forcing depth you cannot control',
      description:
        'Do not sacrifice balance and foot control just to reach maximum depth. Work within your current range and progressively increase depth as your ankle mobility, strength, and bottom-position control improve.'
    },
  ],

  relatedExercises: [
    'bulgarian-squat',
    'cossack-squat',
    'dragon-pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Pistol Squat?',
      answer:
        'A Pistol Squat is a deep single-leg squat performed while the opposite leg remains straight and elevated in front of the body. The working leg supports your entire bodyweight through the descent and return to standing.'
    },
    {
      question: 'What muscles does the Pistol Squat work?',
      answer:
        'The quadriceps and glutes produce most of the force needed to control and reverse the squat. The hamstrings, adductors, calves, and core also contribute to controlling the hip, knee, ankle, and overall balance.'
    },
    {
      question: 'Why do I fall backwards in a Pistol Squat?',
      answer:
        'Limited ankle dorsiflexion, difficulty controlling the bottom position, or simply unfamiliarity with the balance point can all make you fall backwards. Assisted Pistols and bottom-position practice can help you develop the required mobility and control.'
    },
    {
      question: 'Can my knee go past my toes?',
      answer:
        'Yes. Forward knee travel is a normal part of a deep Pistol Squat and should not automatically be treated as a technique error. Focus instead on keeping your heel grounded, your foot stable, and the knee movement controlled.'
    },
    {
      question: 'How do I progress to a Pistol Squat?',
      answer:
        'Build a comfortable deep squat and single-leg strength first, then practice supported Pistols, controlled negatives, and the bottom position. Gradually reduce assistance until you can descend and stand back up on one leg without support.'
    },
  ],

  seo: {
    title:
      'Pistol Squat: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Pistol Squat with proper technique, muscles worked, assisted progressions, mobility requirements and common mistakes for mastering the single-leg squat.',
  },

  imageUrl: '/images/exercises/pistol-squat.png',
};
