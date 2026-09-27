import { Exercise } from '../../../../shared/models/exercise.model';

export const BULGARIAN_SQUAT: Exercise = {
  id: 'bulgarian-squat',
  name: 'Bulgarian Squat',
  movementType: 'dynamic',
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
    'The Bulgarian squat, also known as the Bulgarian split squat, is a single-leg exercise performed with your rear foot elevated on a bench or similar surface. Most of the work comes from the front leg while the rear leg helps with balance. It is a great way to build strong quads and glutes while improving unilateral strength, stability, and control.',

  overview:
    'The Bulgarian squat looks simple, but your setup makes a huge difference. Place your front foot far enough from the bench that you can descend comfortably without losing balance, then let your front knee and hip bend together as you lower. Your torso can lean slightly forward naturally, especially if you want more contribution from the hip. Focus on controlling the front leg rather than pushing hard through the elevated foot.',

  howTo: [
    {
      title: 'Find your stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand a comfortable distance in front of a bench and place the top of one foot behind you on the support. Keep most of your weight over the front leg and adjust your stance until you feel balanced rather than stretched between both feet.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your front knee and hip together as you lower your body towards the floor. Allow your torso to lean slightly forward if it feels natural, but keep your spine controlled and avoid collapsing over the front leg.'
    },
    {
      title: 'Use a comfortable depth',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue lowering until you reach the deepest position you can control comfortably. Your front knee can travel forward over your toes if your heel stays planted and the position feels stable.'
    },
    {
      title: 'Drive through the front leg',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push through your front foot and extend your knee and hip to stand back up. Keep the front knee tracking in line with your foot and avoid using the rear leg to launch yourself out of the bottom.'
    },
    {
      title: 'Progress the exercise',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once you can perform controlled reps on both legs, increase the difficulty with a deeper range of motion, a slower tempo, or additional resistance. Keep the same stable front-leg mechanics as the exercise gets harder.'
    },
  ],

  commonMistakes: [
    {
      title: 'Standing too close to the bench',
      description:
        'A stance that is too short can make the bottom position feel cramped and unstable. Move your front foot forward until you can descend comfortably while keeping the whole foot planted and controlling your knee.'
    },
    {
      title: 'Pushing too much with the back leg',
      description:
        'Your elevated leg should help with balance, not do most of the work. Keep your weight centered mainly over the front leg and think about using that leg to lower and raise your body.'
    },
    {
      title: 'Letting your front knee collapse inward',
      description:
        'Keep your knee controlled in the same general direction as your toes as you descend and stand up. If it repeatedly collapses inward and you cannot correct it, reduce the depth or difficulty until you have better control.'
    },
    {
      title: 'Forcing your torso perfectly upright',
      description:
        'You do not need to keep your torso completely vertical. Some forward lean is normal and can increase the demand on the hip extensors. Keep the movement controlled instead of artificially forcing one torso angle for every rep.'
    },
  ],

  relatedExercises: [
    'squat',
    'split-squat',
    'pistol-squat'
  ],

  faq: [
    {
      question: 'What muscles do Bulgarian squats work?',
      answer:
        'Bulgarian squats mainly train the quadriceps and glutes of the front leg. The hamstrings, adductors, calves, and core also contribute to producing force and keeping your body stable throughout the movement.'
    },
    {
      question: 'Should my knee go past my toes during Bulgarian squats?',
      answer:
        'It can. Your knee naturally moves forward as you squat, and allowing it to travel past your toes is not automatically bad technique. What matters more is keeping your heel planted, controlling the movement, and using a range of motion that feels comfortable for your knee and ankle.'
    },
    {
      question: 'Should I lean forward during Bulgarian squats?',
      answer:
        'A small forward torso lean is completely normal. A more upright position generally places greater demand around the knee, while leaning forward can shift more of the demand towards the hip. You do not need to exaggerate either position; choose a controlled technique that matches your goal and mobility.'
    },
    {
      question: 'How high should the rear foot be?',
      answer:
        'You do not need an extremely high bench. Use a support that lets your rear leg rest comfortably without forcing your hip or making it difficult to balance. If the usual bench height feels awkward, using a lower surface is perfectly fine.'
    },
  ],

  seo: {
    title:
      'Bulgarian Squat: Form, Muscles & Progressions | Treethenics',

    description:
      'Learn how to do Bulgarian Squats with proper form, muscles worked, common mistakes and progressions for stronger legs and glutes.',
  },

  imageUrl: '/images/exercises/bulgarian-squat.png',
};
