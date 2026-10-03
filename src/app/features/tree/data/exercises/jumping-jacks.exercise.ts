import { Exercise } from '../../../../shared/models/exercise.model';

export const JUMPING_JACKS: Exercise = {
  id: 'jumping-jacks',
  name: 'Jumping Jacks',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'shoulders'],

  primaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  secondaryMuscles: [
    'calves',
    'front-deltoids',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'Jumping Jacks are a fundamental full-body conditioning exercise where you repeatedly jump your feet apart while raising your arms overhead, then return both the arms and legs to the starting position. They develop coordination, cardiovascular endurance, and basic lower-body power.',

  overview:
    'Stand upright with your feet together and your arms relaxed by your sides. Jump lightly and move both feet outward while simultaneously raising your arms overhead. Land softly with a slight bend in your knees, then jump again to bring your feet together as your arms return to your sides. Keep the movement rhythmic and coordinated, maintain an upright torso, and focus on controlled landings rather than simply performing the repetitions as quickly as possible.',

  howTo: [
    {
      title: 'Stand tall',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start with your feet together, arms by your sides, and your torso upright. Brace your core lightly and prepare to move your arms and legs at the same time.'
    },
    {
      title: 'Jump your feet apart',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Jump lightly and move both feet outward to the sides while keeping your body centered and upright.'
    },
    {
      title: 'Raise your arms',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As your feet move apart, sweep both arms out to the sides and overhead in one coordinated movement.'
    },
    {
      title: 'Land softly',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Land with control and allow your knees to bend slightly to absorb the impact. Keep your feet and knees aligned rather than landing stiff-legged.'
    },
    {
      title: 'Return to the start',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Jump your feet back together while lowering your arms to your sides. Continue alternating between both positions with a smooth and consistent rhythm.'
    },
  ],

  commonMistakes: [
    {
      title: 'Landing with stiff knees',
      description:
        'Avoid landing with your knees completely straight. Use a small amount of knee and hip flexion to absorb each landing smoothly.'
    },
    {
      title: 'Landing too heavily',
      description:
        'Jumping Jacks should feel light and rhythmic rather than producing a hard impact on every repetition. Reduce your speed or use Step Jacks if you cannot land under control.'
    },
    {
      title: 'Losing coordination',
      description:
        'The arms and legs should move together. Avoid rushing the exercise if your arms return before your feet or your movement becomes inconsistent.'
    },
    {
      title: 'Letting the knees collapse inward',
      description:
        'Keep your knees tracking in the same general direction as your feet when you land instead of allowing them to collapse towards each other.'
    },
    {
      title: 'Sacrificing form for speed',
      description:
        'Moving faster is not useful if your landings become uncontrolled or your range of motion disappears. Establish a consistent rhythm before increasing the pace.'
    },
  ],

  relatedExercises: [
    'jump-squat',
    'broad-jumps',
    'high-knees'
  ],

  faq: [
    {
      question: 'What are Jumping Jacks?',
      answer:
        'Jumping Jacks are a full-body conditioning exercise where you repeatedly jump your feet apart while raising your arms overhead, then jump back to the starting position with your feet together and arms by your sides.'
    },
    {
      question: 'What muscles do Jumping Jacks work?',
      answer:
        'The quadriceps and glutes contribute to the repeated jumping action, while the calves, hip abductors and adductors help move and stabilize the legs. The shoulders move the arms overhead and the core helps maintain an upright and controlled torso.'
    },
    {
      question: 'Are Jumping Jacks a cardio exercise?',
      answer:
        'Yes. Continuous Jumping Jacks rapidly increase heart rate because large muscle groups repeatedly work while the entire body remains in motion, making them useful for cardiovascular conditioning and warm-ups.'
    },
    {
      question: 'How can I make Jumping Jacks easier?',
      answer:
        'Perform Step Jacks instead of jumping. Step one foot out to the side while raising your arms, return to the center, and alternate sides. This keeps the basic movement pattern while reducing impact.'
    },
    {
      question: 'How should I progress from Jumping Jacks?',
      answer:
        'First improve your rhythm, landing control, and ability to maintain the movement continuously. For more explosive lower-body training, you can then progress separately to exercises such as Jump Squats, Broad Jumps, or other plyometric movements.'
    },
  ],

  seo: {
    title:
      'Jumping Jacks: Technique, Muscles & Benefits | Treethenics',

    description:
      'Learn how to perform Jumping Jacks with proper technique, controlled landings, muscles worked and common mistakes for full-body conditioning.',
  },

  imageUrl: '/images/exercises/jumping-jacks.png',
};
