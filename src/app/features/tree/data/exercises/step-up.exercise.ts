
import { Exercise } from '../../../../shared/models/exercise.model';

export const STEP_UP: Exercise = {
  id: 'step-up',
  name: 'Step Up',
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

  equipment: ['weight-bench','added-weight'],

  description:
    'The Step Up is a beginner unilateral bodyweight leg exercise performed by stepping onto a stable elevated platform and lifting the body using the working leg. It strengthens the quadriceps and glutes while developing single-leg balance, hip stability, coordination, and lower-body control.',

  overview:
    'Stand facing a stable bench, step, or elevated platform with your feet approximately hip-width apart. Place one foot completely on the platform, keeping your knee aligned with your toes. Press through the elevated foot to extend your knee and hip, lifting your body onto the platform while minimizing assistance from the trailing leg. Bring your opposite foot onto the platform or keep it slightly elevated beside the working leg, depending on the variation. Lower yourself slowly by reversing the movement, allowing the trailing foot to return to the floor before stepping down completely. Maintain a stable torso, controlled knee alignment, and balanced weight distribution. Repeat with the opposite leg or complete all repetitions on one side before switching.',

  howTo: [
    {
      title: 'Stand in front of a platform',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright facing a stable bench or step. Keep your feet approximately hip-width apart and maintain a comfortable posture.'
    },
    {
      title: 'Place one foot on the platform',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Place your entire working foot on the elevated surface. Keep your knee aligned with your toes and establish a stable base before lifting.'
    },
    {
      title: 'Push through the working leg',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Press firmly through the elevated foot to extend your knee and hip. Lift your body upwards while minimizing the push from your trailing foot.'
    },
    {
      title: 'Reach the top position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Stand tall on the platform with your working leg extended. Bring your opposite foot onto the platform while maintaining balance and controlled hip alignment.'
    },
    {
      title: 'Step down with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower the trailing foot back towards the floor by bending your working knee and hip. Return to the starting position slowly, then repeat on the opposite side.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pushing excessively from the trailing leg',
      description:
        'Avoid jumping or pushing strongly from the foot on the floor. The elevated leg should provide most of the force needed to lift your body.'
    },
    {
      title: 'Allowing the working knee to collapse inward',
      description:
        'Keep your working knee tracking naturally in line with your toes. Avoid excessive inward knee movement during the ascent and descent.'
    },
    {
      title: 'Using an excessively high platform',
      description:
        'A platform that is too high can restrict movement, compromise balance, and encourage excessive trunk compensation. Begin with a height that allows controlled stepping.'
    },
    {
      title: 'Placing only the toes on the platform',
      description:
        'Avoid supporting your bodyweight on only the front portion of your foot. Place your entire working foot securely on the elevated surface.'
    },
    {
      title: 'Leaning forwards excessively',
      description:
        'Some forward torso inclination is natural, but avoid collapsing your upper body or using excessive momentum to complete the movement.'
    },
    {
      title: 'Dropping too quickly',
      description:
        'Do not step down abruptly or allow your body to fall towards the floor. Control the lowering phase through the working leg.'
    },
    {
      title: 'Using an unstable platform',
      description:
        'Avoid surfaces that can slide, tip, or collapse. Always use a secure platform capable of safely supporting your bodyweight.'
    },
  ],

  relatedExercises: [
    'squat',
    'forward-lunge',
    'reverse-lunge',
    'walking-lunges',
    'pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Step Up?',
      answer:
        'A Step Up is a unilateral leg exercise in which the athlete places one foot on an elevated platform and pushes through that leg to lift the body onto the surface before stepping back down.'
    },
    {
      question: 'What muscles do Step Ups work?',
      answer:
        'Step Ups primarily strengthen the quadriceps and gluteal muscles. The hamstrings, calves, hip stabilizers, and core muscles also contribute to balance and movement control.'
    },
    {
      question: 'Are Step Ups good for beginners?',
      answer:
        'Yes. Step Ups are suitable for many beginners because the difficulty can be adjusted by changing the platform height. Start with a low, stable step and increase the height gradually as strength and balance improve.'
    },
    {
      question: 'How high should the platform be?',
      answer:
        'Choose a platform height that allows you to place your entire foot securely on the surface and step up without excessive momentum or uncomfortable joint positions. Lower platforms are generally easier.'
    },
    {
      question: 'Should I push with the leg on the floor?',
      answer:
        'The trailing leg may provide some assistance, especially for beginners, but the goal is to generate most of the upward force through the elevated working leg.'
    },
    {
      question: 'Are Step Ups better than Lunges?',
      answer:
        'Neither exercise is universally better. Step Ups emphasize lifting the body onto an elevated surface, while Lunges involve stepping and lowering between two foot positions. Both are useful for unilateral leg strength.'
    },
    {
      question: 'Do Step Ups help with Pistol Squats?',
      answer:
        'Yes. Step Ups can develop unilateral quadriceps and glute strength, balance, and knee control. However, Pistol Squats also require greater ankle mobility, hip flexion, and strength through a deeper single-leg squat range.'
    },
    {
      question: 'How can I make Step Ups harder?',
      answer:
        'Gradually increase the platform height within a comfortable range, slow down the lowering phase, pause at the top, or add external resistance after mastering the bodyweight variation.'
    },
  ],

  seo: {
    title:
      'Step Up: Technique & Muscles | Treethenics',

    description:
      'Learn Step Ups with proper platform height, single-leg technique, muscles worked, common mistakes and progressions towards stronger legs.',
  },

  imageUrl: '/images/exercises/step-up.png',
};
