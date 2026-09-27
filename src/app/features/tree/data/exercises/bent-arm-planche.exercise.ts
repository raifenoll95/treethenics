import { Exercise } from '../../../../shared/models/exercise.model';

export const BENT_ARM_PLANCHE: Exercise = {
  id: 'bent-arm-planche',
  name: 'Bent Arm Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'triceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The bent arm planche is an advanced static pushing skill where you hold your entire body horizontally above the ground with your elbows bent. Unlike an elbow lever, your torso does not rest on your arms: your shoulders, chest, and triceps actively support your body while your core keeps you horizontal. It is an important position for skills such as the 90 degree push up and planche push ups.',

  overview:
    'The bent arm planche combines a strong forward lean with bent-arm pushing strength. Your shoulders move well in front of your hands while your elbows stay bent and close to your body, allowing your legs to lift until your entire body is roughly parallel to the ground. Start with feet-assisted holds and shorter body positions before extending into a straddle and eventually a full bent arm planche. Focus on controlling the position rather than simply throwing your legs off the floor.',

  howTo: [
    {
      title: 'Build your forward-leaning strength',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Practice pseudo planche push ups and bottom push up holds with your shoulders shifted forward past your hands. Keep your elbows close to your body and gradually increase the lean as your shoulders and triceps become stronger.'
    },
    {
      title: 'Practice with your feet assisted',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Lean forward and bend your elbows while keeping your toes lightly on the floor. Move your shoulders further forward until your hands are positioned closer to your hips and gradually reduce how much weight your feet provide.'
    },
    {
      title: 'Lift into a shorter lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Shift enough weight onto your hands to lift your feet from the floor. Start with a tuck, one-leg, or compact position if necessary. Keep your elbows bent and support your torso through active pushing strength instead of resting your body on your arms.'
    },
    {
      title: 'Build the straddle position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extend both legs behind you and spread them apart while maintaining your forward lean. Keep your hips around shoulder height and your body roughly parallel to the floor. Gradually narrow the straddle as your strength improves.'
    },
    {
      title: 'Hold the full bent arm planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Bring your legs together and extend them completely behind you. Keep your elbows bent, shoulders forward, core and glutes tight, and hold your entire body approximately parallel to the ground without allowing your feet to touch the floor.'
    },
  ],

  commonMistakes: [
    {
      title: 'Resting your body on your elbows',
      description:
        'Do not turn the movement into an elbow lever by placing your elbows underneath your abdomen or hips and resting your torso on them. In a bent arm planche, your elbows stay beside your body and your shoulders, chest, and triceps actively support the position.'
    },
    {
      title: 'Not leaning far enough forward',
      description:
        'Your shoulders need to travel well past your hands to balance your legs behind you. If you keep your shoulders too far back, your feet will stay on the floor or immediately drop when you try to lift them.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Lifting your feet is not enough if your hips remain far below your shoulders. Brace your core and squeeze your glutes so your torso and legs stay connected and work towards keeping your entire body roughly horizontal.'
    },
    {
      title: 'Using momentum to lift your legs',
      description:
        'Do not kick your legs into the position and hope to catch the balance. Shift your weight forward gradually and lift your feet through controlled strength. If you need momentum to reach the hold, use a shorter lever or assisted progression.'
    },
  ],

  relatedExercises: [
    'planche-lean-push-up',
    '90-degree-push-up',
    'full-planche-push-up'
  ],

  faq: [
    {
      question: 'What is the difference between a bent arm planche and a regular planche?',
      answer:
        'A regular planche is a straight-arm skill with the elbows fully extended. In a bent arm planche, the elbows remain flexed while your body stays horizontal. This allows the chest and triceps to contribute more directly and creates a different strength requirement from the straight-arm planche.'
    },
    {
      question: 'Is a bent arm planche the same as an elbow lever?',
      answer:
        'No. In an elbow lever, your torso is supported by placing the elbows against the abdomen or hips. In a bent arm planche, your torso remains unsupported and your bent arms actively hold your body above the ground. This makes the bent arm planche considerably more demanding on your shoulders, chest, and triceps.'
    },
    {
      question: 'Does the bent arm planche help with the 90 degree push up?',
      answer:
        'Yes. The horizontal bottom position of a 90 degree push up is essentially a bent arm planche. Building a strong hold helps you develop the forward-leaning pushing strength needed to control the transition between the handstand and horizontal position.'
    },
    {
      question: 'Should I learn the bent arm planche on the floor or parallettes?',
      answer:
        'Both are valid. Parallettes give you extra clearance and keep your wrists in a more neutral position, which many people find useful when learning the forward lean. The floor works as well, but requires more wrist extension. Use the setup where you can maintain the strongest and most controlled position.'
    },
  ],

  seo: {
    title:
      'Bent Arm Planche: How to Do It & Progressions | Treethenics',

    description:
      'Learn the Bent Arm Planche with proper technique, muscles worked, common mistakes and progressions towards 90 degree and planche push ups.',
  },

  imageUrl: '/images/exercises/bent-arm-planche.png',
};
