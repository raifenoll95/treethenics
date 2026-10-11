
import { Exercise } from '../../../../shared/models/exercise.model';

export const WALKING_LUNGES: Exercise = {
  id: 'walking-lunges',
  name: 'Walking Lunges',
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
    'Walking Lunges are a dynamic unilateral bodyweight leg exercise performed by taking consecutive forward lunges while continuously moving across the floor. They strengthen the quadriceps and glutes while developing dynamic balance, coordination, lower-body endurance, and single-leg stability.',

  overview:
    'Stand upright with your feet approximately hip-width apart and enough clear space in front of you. Take a controlled step forwards with one leg and lower your hips by bending both knees until your rear knee approaches the floor. Keep your front foot firmly planted and your front knee aligned with your toes. Push through your front foot to rise, then bring your rear leg forwards into the next lunge instead of stepping backwards to the original position. Continue alternating legs as you travel forwards. Maintain a stable torso, comfortable stride length, and controlled movement throughout the exercise. Avoid rushing, allowing your knees to collapse inward, or losing balance between steps.',

  howTo: [
    {
      title: 'Stand in the starting position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright with your feet approximately hip-width apart. Engage your core, keep your chest comfortably lifted, and prepare to move forwards.'
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
        'Bend both knees and lower your hips towards the ground. Keep your front knee aligned with your toes and allow your rear knee to approach the floor without striking it.'
    },
    {
      title: 'Rise and advance',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press through your front foot to rise. Bring your rear leg forwards, transferring your bodyweight smoothly as you prepare for the next step.'
    },
    {
      title: 'Continue alternating legs',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Step forwards with the opposite leg and repeat the lunge. Continue travelling forwards while maintaining balance, consistent stride length, and controlled technique.'
    },
  ],

  commonMistakes: [
    {
      title: 'Stepping backwards between repetitions',
      description:
        'Avoid returning to the original starting position after every lunge. Walking Lunges require continuous forward progression rather than repeated Forward Lunges in place.'
    },
    {
      title: 'Allowing the front knee to collapse inward',
      description:
        'Keep your front knee tracking naturally in line with your toes. Avoid excessive inward knee movement during the lowering and rising phases.'
    },
    {
      title: 'Taking excessively long steps',
      description:
        'Overstriding can reduce balance and make the transition between lunges difficult. Use a comfortable stride length that allows controlled hip and knee movement.'
    },
    {
      title: 'Taking excessively short steps',
      description:
        'Very short steps can create an awkward lowering position and reduce stability. Adjust your stride to allow both knees to bend comfortably.'
    },
    {
      title: 'Losing balance between steps',
      description:
        'Avoid placing your feet directly along a narrow line. Maintain enough lateral spacing between your feet to support stable forward movement.'
    },
    {
      title: 'Slamming the rear knee into the floor',
      description:
        'Lower your body under control and avoid striking the floor with your rear knee. Stop slightly above the ground if necessary.'
    },
    {
      title: 'Rushing through repetitions',
      description:
        'Avoid using excessive momentum to travel forwards. Prioritize controlled weight transfer and stable foot placement over speed.'
    },
  ],

  relatedExercises: [
    'squat',
    'forward-lunge',
    'reverse-lunge',
    'pistol-squat'
  ],

  faq: [
    {
      question: 'What are Walking Lunges?',
      answer:
        'Walking Lunges are a unilateral leg exercise performed by alternating forward lunges while continuously moving across the floor instead of returning to the original starting position.'
    },
    {
      question: 'What muscles do Walking Lunges work?',
      answer:
        'Walking Lunges primarily strengthen the quadriceps and glutes. The hamstrings, calves, hip stabilizers, and core muscles also contribute to balance and movement control.'
    },
    {
      question: 'What is the difference between Walking Lunges and Forward Lunges?',
      answer:
        'In Forward Lunges, the athlete steps forwards and then returns to the original standing position. In Walking Lunges, the athlete continues moving forwards by bringing the rear leg into the next lunge.'
    },
    {
      question: 'Are Walking Lunges harder than Forward Lunges?',
      answer:
        'Walking Lunges generally require more dynamic balance and coordination because the body continues moving forwards between repetitions. However, their relative difficulty depends on strength, technique, and individual experience.'
    },
    {
      question: 'Should my rear knee touch the floor?',
      answer:
        'No. Your rear knee can approach the floor without touching it. Lower as far as you can while maintaining balance and a comfortable range of motion.'
    },
    {
      question: 'Should my front knee go past my toes?',
      answer:
        'It is not automatically incorrect for the front knee to move beyond the toes. Knee position depends on individual anatomy, stride length, and mobility. Focus on comfortable movement and controlled alignment.'
    },
    {
      question: 'How can I make Walking Lunges easier?',
      answer:
        'Practice stationary Split Squats or Forward Lunges before attempting continuous Walking Lunges. You can also use shorter sets and pause between steps to regain balance.'
    },
    {
      question: 'How can I make Walking Lunges harder?',
      answer:
        'Increase the number of controlled steps, slow down the lowering phase, add brief pauses at the bottom, or introduce external resistance after mastering the bodyweight variation.'
    },
  ],

  seo: {
    title:
      'Walking Lunges: Technique & Muscles | Treethenics',

    description:
      'Learn Walking Lunges with proper forward stepping technique, muscles worked, balance tips, common mistakes and leg strength progressions.',
  },

  imageUrl: '/images/exercises/walking-lunges.png',
};
