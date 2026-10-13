
import { Exercise } from '../../../../shared/models/exercise.model';

export const COPENHAGEN_PLANK: Exercise = {
  id: 'copenhagen-plank',
  name: 'Copenhagen Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'legs',
    'shoulders'
  ],

  primaryMuscles: [
    'obliques',
  ],

  secondaryMuscles: [
    'abdominals',
    'glutes',
    'quadriceps',
    'front-deltoids'
  ],

  equipment: ['weight-bench'],

  description:
    'The Copenhagen Plank is an intermediate static bodyweight exercise performed in a side plank position with the upper leg supported on an elevated surface. It strengthens the hip adductors, obliques, and lateral core stabilizers while challenging pelvic control and shoulder endurance.',

  overview:
    'Position yourself sideways next to a stable bench or elevated platform. Place the inside of your upper ankle or lower leg on top of the support, with your lower leg suspended beneath it. Support your upper body on your lower forearm, keeping your elbow directly beneath your shoulder. Press your upper leg into the bench and lift your hips until your torso and upper leg form a straight line. Engage your abdominal muscles and maintain a stable pelvis without allowing your hips to sag or rotate. Hold the position while breathing naturally, then lower yourself slowly. Repeat on the opposite side. Beginners can reduce the difficulty by supporting the upper knee instead of the ankle.',

  howTo: [
    {
      title: 'Position yourself beside a bench',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your side next to a stable bench. Place your lower forearm on the floor with your elbow directly beneath your shoulder.'
    },
    {
      title: 'Place your upper leg on the support',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Rest the inside of your upper ankle or lower leg on the bench. Keep your lower leg beneath the support without placing weight on the floor.'
    },
    {
      title: 'Lift your hips',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Press your upper leg down into the bench while lifting your hips away from the floor. Engage your obliques and hip adductors to stabilize your body.'
    },
    {
      title: 'Hold the Copenhagen Plank',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain a straight line from your shoulders through your hips to your upper ankle. Keep your lower leg suspended and prevent your pelvis from dropping or rotating.'
    },
    {
      title: 'Lower and switch sides',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower your hips slowly and return to the starting position. Rest briefly before repeating the exercise on the opposite side.'
    },
  ],

  commonMistakes: [
    {
      title: 'Allowing the hips to sag',
      description:
        'Avoid dropping your pelvis towards the floor. Maintain sufficient tension through your obliques and adductors to keep your body aligned.'
    },
    {
      title: 'Rotating the pelvis',
      description:
        'Do not allow your hips to roll forwards or backwards. Keep your pelvis relatively stacked and your torso facing sideways.'
    },
    {
      title: 'Placing the elbow too far from the shoulder',
      description:
        'Position your supporting elbow approximately beneath your shoulder to maintain stable alignment and avoid unnecessary shoulder strain.'
    },
    {
      title: 'Using an unstable support',
      description:
        'Avoid benches or platforms that can slide, tip, or move unexpectedly. Use a stable surface capable of supporting the applied force.'
    },
    {
      title: 'Letting the lower leg touch the floor',
      description:
        'In the full Copenhagen Plank, the lower leg remains suspended. Resting it on the floor reduces the stabilization demand and changes the exercise.'
    },
    {
      title: 'Progressing too quickly',
      description:
        'Supporting the upper leg near the ankle creates a substantial load on the hip adductors. Begin with knee-supported variations and progress gradually to reduce the risk of groin strain.'
    },
    {
      title: 'Holding your breath',
      description:
        'Avoid breath-holding throughout the exercise. Maintain controlled breathing while keeping your abdominal muscles engaged.'
    },
  ],

  relatedExercises: [
    'side-plank',
    'plank',
    'reverse-plank',
    'human-flag'
  ],

  faq: [
    {
      question: 'What is a Copenhagen Plank?',
      answer:
        'The Copenhagen Plank is a side plank variation in which the upper leg rests on an elevated support while the athlete holds the body horizontally using the hip adductors and lateral core muscles.'
    },
    {
      question: 'What muscles do Copenhagen Planks work?',
      answer:
        'Copenhagen Planks strongly challenge the hip adductors of the supported leg and the oblique abdominal muscles. The shoulder stabilizers, glutes, and other core muscles also contribute to maintaining the position.'
    },
    {
      question: 'Are Copenhagen Planks harder than Side Planks?',
      answer:
        'Generally, yes. The elevated upper-leg support creates a greater demand on the hip adductors while the athlete maintains lateral trunk stability.'
    },
    {
      question: 'What is the difference between short-lever and long-lever Copenhagen Planks?',
      answer:
        'In the short-lever variation, the upper knee or thigh rests on the support, reducing the load on the adductors. In the long-lever variation, the ankle or lower leg rests on the support, creating a longer and more demanding lever.'
    },
    {
      question: 'Do Copenhagen Planks strengthen the groin?',
      answer:
        'Yes. Copenhagen Planks strengthen the hip adductor muscles located along the inner thigh and groin region. They are commonly included in progressive adductor-strengthening programs.'
    },
    {
      question: 'Should the lower leg remain suspended?',
      answer:
        'In the full static variation, the lower leg remains suspended beneath the supported leg. Beginners can modify the exercise by using a shorter lever or additional support.'
    },
    {
      question: 'How long should I hold a Copenhagen Plank?',
      answer:
        'Begin with short, controlled holds that allow you to maintain stable hip alignment without groin or shoulder pain. Increase the duration gradually as your strength improves.'
    },
    {
      question: 'Can Copenhagen Planks help prevent groin injuries?',
      answer:
        'Progressive hip adductor strengthening, including Copenhagen-style exercises, can be useful in groin injury prevention programs. However, no single exercise guarantees injury prevention, and training loads should be increased gradually.'
    },
  ],

  seo: {
    title:
      'Copenhagen Plank: Technique & Muscles | Treethenics',

    description:
      'Learn the Copenhagen Plank with proper hip alignment, adductor activation, muscles worked, common mistakes and progressions from Side Plank.',
  },

  imageUrl: '/images/exercises/copenhagen-plank.png',
};
