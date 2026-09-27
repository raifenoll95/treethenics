import { Exercise } from '../../../../shared/models/exercise.model';

export const COSSACK_SQUAT: Exercise = {
  id: 'cossack-squat',
  name: 'Cossack Squat',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'glutes'],

  primaryMuscles: [
    'quadriceps',
    'glutes',
  ],

  secondaryMuscles: [
    'hamstrings',
    'calves',
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The Cossack squat is a deep lateral squat where you shift your weight onto one leg while keeping the opposite leg extended to the side. It combines unilateral leg strength with hip, adductor, and ankle mobility, making it a useful way to build strength and control in ranges that regular squats rarely train.',

  overview:
    'Unlike a regular squat, the Cossack squat moves from side to side. Start from a wide stance, shift your weight over one leg, and descend while the opposite leg stays straight. The working leg produces most of the force while the extended leg experiences a strong stretch through the inner thigh. Depth should come gradually: use support or a shallower range if you cannot yet reach the bottom position with control.',

  howTo: [
    {
      title: 'Take a wide stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet considerably wider than shoulder width. Choose a stance that gives you enough room to move sideways without immediately feeling an excessive stretch through your inner thighs.'
    },
    {
      title: 'Shift onto one leg',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Move your weight towards one side and begin bending that knee and hip. Sit down and slightly back over the working leg while keeping the opposite leg extended.'
    },
    {
      title: 'Descend into your available range',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lower as deeply as you can control while keeping the working foot firmly planted. Keep the opposite knee straight. The toes of the extended leg can turn upwards if that position feels more comfortable for your hip and hamstrings.'
    },
    {
      title: 'Drive back up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push through the working foot and extend your knee and hip to return towards the center. Stay controlled instead of bouncing out of the deepest position.'
    },
    {
      title: 'Repeat on the other side',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Shift your weight towards the opposite leg and repeat the movement. Work towards similar depth and control on both sides rather than forcing your less mobile side to match the stronger one immediately.'
    },
  ],

  commonMistakes: [
    {
      title: 'Forcing full depth',
      description:
        'Do not force yourself into the deepest position just because your hip is supposed to get close to your heel. Use the deepest range you can actively control and gradually increase it as your hip, adductor, and ankle mobility improve.'
    },
    {
      title: 'Lifting the working heel',
      description:
        'Keep the foot of the bent leg firmly connected to the floor. If your heel consistently lifts as you descend, reduce the depth and work within a range where you can maintain better ankle and foot control.'
    },
    {
      title: 'Bending the extended leg',
      description:
        'The opposite leg should remain straight as you descend. If you need to bend that knee significantly to reach the bottom, use a shallower Cossack squat or hold onto a support while you develop the required mobility.'
    },
    {
      title: 'Collapsing the working knee inward',
      description:
        'Keep the bent knee controlled in the same general direction as the foot. Do not let it suddenly collapse inward as you approach the bottom or push yourself back up.'
    },
  ],

  relatedExercises: [
    'squat',
    'side-lunge',
    'pistol-squat'
  ],

  faq: [
    {
      question: 'What muscles do Cossack squats work?',
      answer:
        'Cossack squats train the quadriceps, glutes, and adductors, with the hamstrings, calves, and core also contributing. The bent leg produces most of the force while the inner thigh of the extended leg is challenged in a long muscle position.'
    },
    {
      question: 'Why can’t I go deep in a Cossack squat?',
      answer:
        'The movement requires a combination of hip mobility, adductor flexibility, ankle mobility, balance, and strength in a deep lateral position. Instead of forcing more depth, practice a shallower version or hold onto a stable support and gradually increase your range.'
    },
    {
      question: 'Should the toes of the straight leg point up?',
      answer:
        'They can, but they do not have to. Rotating the extended leg so the toes point upward is a common Cossack squat variation and may feel more comfortable for some people. Others can keep more of the foot in contact with the floor. Use the position that lets you keep the knee straight and move comfortably through your available range.'
    },
    {
      question: 'What is the difference between a Cossack squat and a side lunge?',
      answer:
        'A Cossack squat usually uses a wider stance and explores a much deeper lateral position while the opposite leg stays straight. A side lunge typically starts by stepping to the side and does not require the same deep range of motion, making the Cossack squat more demanding on hip and adductor mobility.'
    },
  ],

  seo: {
    title:
      'Cossack Squat: Technique, Muscles & Mobility | Treethenics',

    description:
      'Learn how to do the Cossack Squat with proper technique, muscles worked, common mistakes and progressions for lateral leg strength and mobility.',
  },

  imageUrl: '/images/exercises/cossack-squat.png',
};
