import { Exercise } from '../../../../shared/models/exercise.model';

export const WALL_SQUAT: Exercise = {
  id: 'wall-squat',
  name: 'Wall Squat',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'glutes'],

  primaryMuscles: [
    'quadriceps'
  ],

  secondaryMuscles: [
    'glutes',
    'hamstrings',
    'calves',
    'abdominals'
  ],

  equipment: ['wall'],

  description:
    'The Wall Squat is a beginner isometric leg exercise where you hold a squat position with your back supported against a wall. It primarily develops quadriceps strength and muscular endurance while the glutes and core help maintain a stable lower-body position.',

  overview:
    'Stand with your back against a wall and place your feet slightly forward. Slide down the wall by bending your knees until you reach a comfortable squat position, ideally with your thighs approaching parallel to the floor. Keep your feet planted, your knees aligned with your toes, and your back supported against the wall. Instead of performing repetitions, maintain the position under control and continue breathing normally throughout the hold.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your back against a stable wall and place your feet around hip to shoulder width apart. Walk your feet forward so you have enough space to lower into the squat.'
    },
    {
      title: 'Slide down the wall',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Slowly bend your knees and slide your back down the wall. Keep your feet completely planted as you descend.'
    },
    {
      title: 'Find your squat depth',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lower until you reach a controlled squat position. A common target is to bring the thighs approximately parallel to the floor, but beginners can start from a higher position.'
    },
    {
      title: 'Maintain alignment',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your knees tracking in the same direction as your toes and maintain firm contact between your back and the wall. Distribute pressure through your feet rather than shifting onto your toes.'
    },
    {
      title: 'Hold the position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the squat without using your hands to support your legs. Keep your core engaged and breathe normally until you can no longer hold the position with good form.'
    },
  ],

  commonMistakes: [
    {
      title: 'Standing too close to the wall',
      description:
        'If your feet are too close to the wall, it becomes difficult to create a stable squat position. Move them forward until you can maintain comfortable knee and ankle alignment.'
    },
    {
      title: 'Letting the knees collapse inward',
      description:
        'Keep your knees tracking in the same general direction as your toes instead of allowing them to fall towards each other during the hold.'
    },
    {
      title: 'Resting your hands on your thighs',
      description:
        'Pushing through your thighs with your hands removes some of the load from your legs. Keep your arms relaxed by your sides or crossed in front of your body.'
    },
    {
      title: 'Lifting the heels',
      description:
        'Keep your feet planted throughout the hold. Adjust your foot position if you find yourself shifting excessively towards your toes or lifting your heels.'
    },
    {
      title: 'Holding your breath',
      description:
        'Do not stop breathing as the exercise becomes difficult. Maintain steady breathing while keeping your legs and core under tension.'
    },
  ],

  relatedExercises: [
    'squat',
    'isometric-squat',
    'bulgarian-squat'
  ],

  faq: [
    {
      question: 'What is a Wall Squat?',
      answer:
        'The Wall Squat is an isometric squat variation performed with your back supported against a wall. You lower into a squat position and hold it instead of repeatedly moving up and down. It is also commonly known as a Wall Sit.'
    },
    {
      question: 'What muscles does the Wall Squat work?',
      answer:
        'The quadriceps perform most of the work during the hold. The glutes, hamstrings, calves, and core also contribute to maintaining a stable squat position.'
    },
    {
      question: 'How low should I go in a Wall Squat?',
      answer:
        'A common full position places the thighs approximately parallel to the floor, but this is not mandatory for beginners. Start higher if necessary and gradually increase the depth while maintaining comfortable and controlled positioning.'
    },
    {
      question: 'Is Wall Squat the same as Wall Sit?',
      answer:
        'Yes. Wall Squat and Wall Sit are commonly used to describe the same isometric exercise where you maintain a squat position with your back supported against a wall.'
    },
    {
      question: 'How can I make the Wall Squat easier or harder?',
      answer:
        'Use a higher squat position or shorter holds to make it easier. As your strength improves, gradually use a deeper position or maintain the hold for longer while preserving the same technique.'
    },
  ],

  seo: {
    title:
      'Wall Squat: Technique, Muscles & Wall Sit Guide | Treethenics',

    description:
      'Learn the Wall Squat or Wall Sit with proper technique, muscles worked, progressions and common mistakes for developing lower-body strength and endurance.',
  },

  imageUrl: '/images/exercises/wall-squat.png',
};
