import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT_TO_HANDSTAND: Exercise = {
  id: 'l-sit-to-handstand',
  name: 'L-Sit to Handstand',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'triceps', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
    'abdominals'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'upper-back',
    'forearms',
    'quadriceps'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The L-Sit to Handstand is an advanced calisthenics transition that moves from a controlled L-sit into a handstand without placing the feet on the floor. It combines compression strength, powerful shoulder pressing, balance, and full-body control through a demanding transition above the hands.',

  overview:
    'The L-Sit to Handstand connects two separate skills through a difficult pressing transition. Start from a strong L-sit, lean your shoulders forward, bring your legs into a shorter tuck as your hips rise, and use your shoulders and triceps to press towards the handstand. Learn the transition progressively with tuck variations, partial presses, negatives, and L-Sit to Shoulder Stand work before trying to connect the complete movement. Once the bent-arm version is strong, a straight-arm L-Sit Press to Handstand can be developed as a more demanding variation.',

  howTo: [
    {
      title: 'Build both positions',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled L-Sit and Handstand separately. Practice supporting your full bodyweight through your hands and controlling the handstand without relying entirely on a wall.'
    },
    {
      title: 'Lean forward from the L-Sit',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From the L-Sit, push strongly through your hands and shift your shoulders forward. Begin bringing your legs towards a tuck as your hips move upward and your center of mass moves over your hands.'
    },
    {
      title: 'Press through the transition',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Allow your elbows to bend as needed while continuing to raise your hips. Keep pressing into the floor or parallettes instead of collapsing onto your shoulders as you pass through the hardest part of the movement.'
    },
    {
      title: 'Bring the hips over the hands',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pressing until your hips travel above your shoulders and hands. Once your balance is stacked over your base, begin extending your legs upward rather than trying to throw them into position.'
    },
    {
      title: 'Finish in Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Extend your elbows and legs into a stable Handstand. Push tall through your shoulders and use your hands and fingers to control the final balance instead of relying on momentum to stay upright.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying to lift the legs before the hips',
      description:
        'The transition becomes much harder if you focus on throwing your feet upward while your hips remain low. Shift forward and drive your hips above your hands first, then extend the legs as you approach the Handstand.'
    },
    {
      title: 'Not leaning forward enough',
      description:
        'Your center of mass has to move over your hands before you can press vertically. If your shoulders stay behind your hands, you will usually fall back into the L-Sit no matter how hard you try to press.'
    },
    {
      title: 'Using a large leg swing',
      description:
        'A strong kick can get your feet overhead without developing control through the transition. Use a tuck and controlled hip movement while learning instead of turning the skill into a momentum-based Handstand entry.'
    },
    {
      title: 'Skipping the middle position',
      description:
        'Trying to jump directly from a low L-Sit to a straight Handstand often causes the movement to stall. Practice L-Sit to Shoulder Stand, tuck transitions, partial presses, and controlled negatives to strengthen the range where the skill is hardest.'
    },
  ],

  relatedExercises: [
    'l-sit',
    'handstand',
    'tuck-planche'
  ],

  faq: [
    {
      question: 'What is an L-Sit to Handstand?',
      answer:
        'The L-Sit to Handstand is a transition where you begin supporting yourself in an L-Sit and move directly into a Handstand without putting your feet on the floor. It requires shoulder pressing strength, core compression, balance, and control as the hips travel above the hands.'
    },
    {
      question: 'Do my arms have to stay straight during an L-Sit to Handstand?',
      answer:
        'Not necessarily. A common L-Sit to Handstand variation uses bent arms during the middle of the transition before pressing to straight arms in the Handstand. Keeping the elbows locked throughout creates a significantly harder straight-arm press variation, which can be treated as a separate progression.'
    },
    {
      question: 'What should I learn before the L-Sit to Handstand?',
      answer:
        'Develop the L-Sit and Handstand separately first, then practice the missing transition with movements such as L-Sit to Shoulder Stand, tuck presses, partial presses, and controlled Handstand negatives. The limiting factor is often the transition rather than either final position by itself.'
    },
    {
      question: 'Why do I get stuck between the L-Sit and Handstand?',
      answer:
        'A common sticking point occurs when the hips are still behind the hands. You need enough forward lean, shoulder and triceps strength, and compression to move your hips above your base of support. Tuck transitions and partial presses make this section easier to isolate and strengthen.'
    },
  ],

  seo: {
    title:
      'L-Sit to Handstand: Technique & Progressions | Treethenics',

    description:
      'Learn the L-Sit to Handstand with proper technique, progressions, muscles worked and common mistakes for a controlled transition from L-Sit to Handstand.',
  },

  imageUrl: '/images/exercises/l-sit-to-handstand.png',
};
