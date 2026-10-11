
import { Exercise } from '../../../../shared/models/exercise.model';

export const SHRIMP_SQUAT: Exercise = {
  id: 'shrimp-squat',
  name: 'Shrimp Squat',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
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
    'The Shrimp Squat is an intermediate unilateral bodyweight squat performed while balancing on one leg with the opposite leg bent behind the body. It develops quadriceps and glute strength, single-leg balance, knee control, and lower-body mobility.',

  overview:
    'Stand upright on one leg and bend your opposite knee, bringing the free foot behind your body. Keep your torso stable and extend your arms forwards for balance if necessary. Slowly bend your supporting knee and hip, lowering your body while keeping the rear leg suspended. Continue descending until your rear knee approaches or lightly touches the floor, depending on your mobility and control. Maintain comfortable knee alignment and avoid excessive twisting or collapsing forwards. Press through your supporting foot to extend your knee and hip, returning to the starting position without placing your free foot on the ground. Repeat on the opposite side. More demanding variations involve holding the rear foot with one or both hands.',

  howTo: [
    {
      title: 'Balance on one leg',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright on one foot with your supporting knee slightly relaxed. Engage your core and maintain a stable posture.'
    },
    {
      title: 'Bend the free leg backwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your non-supporting knee and position your lower leg behind your body. Keep the free foot off the floor and extend your arms forwards if needed for balance.'
    },
    {
      title: 'Lower into the squat',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly bend your supporting knee and hip. Lower your body under control while keeping your rear leg bent and your supporting foot firmly planted.'
    },
    {
      title: 'Reach the bottom position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue descending until your rear knee approaches or gently touches the floor. Maintain balance and keep your supporting knee aligned with your toes.'
    },
    {
      title: 'Push back to standing',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Press through your supporting foot to extend your knee and hip. Return to an upright position without using your rear foot to push off the floor.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using the rear leg for assistance',
      description:
        'Avoid pushing against the floor with your rear foot or knee. The supporting leg should generate the force required to complete the squat.'
    },
    {
      title: 'Allowing the supporting knee to collapse inward',
      description:
        'Keep your supporting knee tracking naturally in line with your toes. Avoid excessive inward movement during the descent or ascent.'
    },
    {
      title: 'Dropping onto the rear knee',
      description:
        'Do not fall into the bottom position or strike the floor with your rear knee. Lower slowly and maintain muscular control throughout the movement.'
    },
    {
      title: 'Leaning forwards excessively',
      description:
        'A natural forward torso inclination is acceptable, but avoid collapsing your chest towards the supporting thigh or losing spinal control.'
    },
    {
      title: 'Losing balance',
      description:
        'Avoid rushing the movement or making sudden corrections with your upper body. Use a stable support or a reduced range of motion while developing balance.'
    },
    {
      title: 'Twisting the hips',
      description:
        'Keep your pelvis relatively level and facing forwards. Avoid rotating excessively towards the supporting leg to compensate for limited strength or mobility.'
    },
    {
      title: 'Attempting excessive depth too early',
      description:
        'Do not force the rear knee to the floor if you cannot maintain control. Begin with partial repetitions and gradually increase the range of motion.'
    },
  ],

  relatedExercises: [
    'squat',
    'step-up',
    'forward-lunge',
    'reverse-lunge',
    'pistol-squat',
    'dragon-pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Shrimp Squat?',
      answer:
        'A Shrimp Squat is a unilateral bodyweight squat performed on one leg while the opposite knee remains bent behind the body. The athlete lowers towards the floor and returns to standing using the supporting leg.'
    },
    {
      question: 'What muscles do Shrimp Squats work?',
      answer:
        'Shrimp Squats primarily train the quadriceps and gluteal muscles of the supporting leg. The hip stabilizers, hamstrings, calves, and core muscles also contribute to balance and movement control.'
    },
    {
      question: 'What is the difference between a Shrimp Squat and a Pistol Squat?',
      answer:
        'In a Shrimp Squat, the free leg is bent behind the body. In a Pistol Squat, the free leg is extended forwards. These positions create different mobility, balance, and strength demands.'
    },
    {
      question: 'Are Shrimp Squats harder than Pistol Squats?',
      answer:
        'Neither exercise is universally harder. Shrimp Squats can create substantial quadriceps demands, while Pistol Squats require greater forward leg control and often more ankle mobility. Difficulty also depends on the specific variation.'
    },
    {
      question: 'Should my rear knee touch the floor?',
      answer:
        'The rear knee may lightly touch the floor in a full-range Shrimp Squat, but this is not mandatory. Prioritize controlled movement and avoid dropping your bodyweight onto the knee.'
    },
    {
      question: 'Do I need to hold my rear foot?',
      answer:
        'No. Beginners can perform Shrimp Squats with the rear leg bent freely behind the body. Holding the rear foot with one or both hands is a more demanding variation that changes the balance and mobility requirements.'
    },
    {
      question: 'How can I make Shrimp Squats easier?',
      answer:
        'Use a wall or stable support for balance, perform partial repetitions, or lower towards a raised cushion or platform. Step Ups and supported Split Squats can also help build the required unilateral strength.'
    },
    {
      question: 'How can I make Shrimp Squats harder?',
      answer:
        'Increase the controlled range of motion, pause near the bottom, slow down the lowering phase, or progress towards variations where the rear foot is held behind the body.'
    },
  ],

  seo: {
    title:
      'Shrimp Squat: Technique & Progression | Treethenics',

    description:
      'Learn the Shrimp Squat with proper single-leg technique, muscles worked, common mistakes and progressions for strength, balance and mobility.',
  },

  imageUrl: '/images/exercises/shrimp-squat.png',
};
