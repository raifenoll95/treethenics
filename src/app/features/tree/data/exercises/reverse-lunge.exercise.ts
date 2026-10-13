
import { Exercise } from '../../../../shared/models/exercise.model';

export const REVERSE_LUNGE: Exercise = {
  id: 'reverse-lunge',
  name: 'Reverse Lunge',
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

  equipment: ['floor','added-weight'],

  description:
    'The Reverse Lunge is a beginner unilateral bodyweight leg exercise performed by stepping backwards, lowering the body through controlled knee and hip flexion, and returning to the starting position. It strengthens the quadriceps and glutes while developing balance, coordination, and single-leg stability.',

  overview:
    'Stand upright with your feet approximately hip-width apart and your arms relaxed at your sides or positioned for balance. Take a controlled step backwards with one leg, placing the ball of your rear foot on the floor. Bend both knees and lower your hips until your rear knee approaches the ground without striking it. Keep your front foot firmly planted and your front knee aligned with your toes. Maintain a stable torso with a comfortable forward inclination. Press through your front foot to extend your hip and knee, bringing your rear leg forwards to return to standing. Repeat with the opposite leg or complete all repetitions on one side before switching. Prioritize controlled movement, comfortable knee alignment, and stable foot placement.',

  howTo: [
    {
      title: 'Stand in the starting position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright with your feet approximately hip-width apart. Engage your core and maintain a comfortable, stable posture.'
    },
    {
      title: 'Step backwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Take a controlled step backwards with one leg. Land on the ball of your rear foot while keeping your front foot firmly planted on the ground.'
    },
    {
      title: 'Lower into the lunge',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend both knees and lower your hips towards the floor. Keep your front knee aligned with your toes and allow your rear knee to approach the ground.'
    },
    {
      title: 'Push through the front leg',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press firmly through your front foot to extend your knee and hip. Bring your rear leg forwards while maintaining balance and control.'
    },
    {
      title: 'Return and alternate',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Return to the original standing position with both feet beneath your hips. Repeat the movement with the opposite leg using consistent technique.'
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
        'A very short backward step can make it difficult to lower comfortably and maintain balance. Adjust your stride length to allow controlled movement.'
    },
    {
      title: 'Taking an excessively long step',
      description:
        'Stepping too far backwards can create an unstable position and make returning to standing difficult. Choose a comfortable stride that allows controlled hip and knee movement.'
    },
    {
      title: 'Pushing excessively from the rear foot',
      description:
        'Avoid relying primarily on the rear leg to return upright. Emphasize pushing through the front foot while maintaining balance.'
    },
    {
      title: 'Slamming the rear knee into the floor',
      description:
        'Lower your body under control and avoid striking the floor with your rear knee. Stop slightly above the ground when possible.'
    },
    {
      title: 'Leaning forwards excessively',
      description:
        'Avoid collapsing your torso over the front leg. A natural forward inclination is acceptable, but maintain core engagement and a stable spinal position.'
    },
    {
      title: 'Losing balance during the backward step',
      description:
        'Avoid placing your feet directly behind one another in a narrow line. Maintain approximately hip-width lateral spacing to improve stability.'
    },
  ],

  relatedExercises: [
    'squat',
    'forward-lunge',
    'pistol-squat',
    'dragon-pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Reverse Lunge?',
      answer:
        'A Reverse Lunge is a unilateral leg exercise in which the athlete steps backwards, bends both knees to lower the body, and then returns to the starting standing position.'
    },
    {
      question: 'What muscles do Reverse Lunges work?',
      answer:
        'Reverse Lunges primarily train the quadriceps and gluteal muscles. The hamstrings, calves, hip stabilizers, and core muscles also contribute to balance and movement control.'
    },
    {
      question: 'What is the difference between Reverse Lunges and Forward Lunges?',
      answer:
        'Reverse Lunges begin by stepping backwards, while Forward Lunges begin by stepping forwards. Both strengthen similar muscle groups, but the direction of movement changes the balance and braking demands.'
    },
    {
      question: 'Are Reverse Lunges easier than Forward Lunges?',
      answer:
        'Many beginners find Reverse Lunges easier to control because the front foot remains planted throughout the movement. However, the relative difficulty depends on balance, mobility, strength, and individual coordination.'
    },
    {
      question: 'Are Reverse Lunges better for the knees?',
      answer:
        'Reverse Lunges may feel more comfortable for some people because they can reduce the forward braking demands compared with Forward Lunges. However, neither variation is universally better for the knees, and both should be performed within a comfortable range of motion.'
    },
    {
      question: 'Should my front knee go past my toes?',
      answer:
        'It is not automatically incorrect for the front knee to move beyond the toes. The appropriate position depends on individual anatomy, mobility, and stride length. Focus on comfortable movement and controlled knee alignment.'
    },
    {
      question: 'Should my rear knee touch the floor?',
      answer:
        'No. Your rear knee can approach the floor without touching it. Lower only as far as you can while maintaining balance and a comfortable range of motion.'
    },
    {
      question: 'How can I make Reverse Lunges easier?',
      answer:
        'Use a wall or stable support for balance, reduce the movement depth, or practice stationary Split Squats before progressing to full Reverse Lunges.'
    },
    {
      question: 'How can I make Reverse Lunges harder?',
      answer:
        'Increase the controlled range of motion, slow down the lowering phase, add a pause at the bottom, or introduce external resistance after mastering the bodyweight variation.'
    },
  ],

  seo: {
    title:
      'Reverse Lunge: Technique & Muscles | Treethenics',

    description:
      'Learn Reverse Lunges with correct backward stepping technique, knee alignment, muscles worked, common mistakes and beginner leg progressions.',
  },

  imageUrl: '/images/exercises/reverse-lunge.png',
};
