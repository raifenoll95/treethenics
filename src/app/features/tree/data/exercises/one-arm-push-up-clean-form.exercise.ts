import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PUSH_UP_CLEAN_FORM: Exercise = {
  id: 'one-arm-push-up-clean-form',
  name: 'One Arm Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'push',

  targetAreas: ['chest', 'triceps', 'shoulders'],

  primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

  secondaryMuscles: [
    'abdominals',
    'obliques',
    'serratus-anterior',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The one arm push up is an advanced pushing exercise where one arm handles the entire movement while the rest of your body works hard to keep you balanced. It requires much more than a strong chest and triceps: your core has to resist rotation and you need enough control to keep your body stable from top to bottom. Start with a wide stance and gradually make the exercise stricter as your strength and balance improve.',

  overview:
    'The one arm push up is a great test of unilateral pushing strength and full-body control. Unlike a regular push up, removing one hand gives you a much smaller base of support and makes your body want to rotate towards the unsupported side. A wider foot position makes the exercise easier to balance when you are learning, while bringing your feet closer together makes it considerably harder. Build the movement gradually and focus on getting the same quality of rep on both arms.',

  howTo: [
    {
      title: 'Build strength with archer push ups',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start with archer push ups to get used to shifting most of your weight onto one arm. Move your chest towards the working hand while the opposite arm stays straighter and provides some assistance. Gradually rely less on the assisting side as you get stronger.'
    },
    {
      title: 'Practice assisted one arm push ups',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Place your working hand on the floor and use your other hand on a raised surface for light assistance. Keep most of your weight over the working arm and gradually reduce how much help you use from the other side.'
    },
    {
      title: 'Control one arm negatives',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Start at the top with one hand on the floor and your feet spread wide for balance. Slowly lower your chest towards the ground using only the working arm. Place your second hand down to return to the top if you cannot press yourself back up yet.'
    },
    {
      title: 'Achieve your first one arm push up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Use a wide foot position and place your working hand in a strong and comfortable position underneath your upper body. Lower your chest towards the floor under control, then push through the same arm until your elbow is fully extended again. Keep your core and glutes tight throughout the entire rep.'
    },
    {
      title: 'Gradually narrow your stance',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once you can perform clean reps consistently, start bringing your feet closer together. A narrower stance gives you less help with balance and makes it harder to control rotation. Eventually, you can work towards strict one arm push ups with your legs together.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying to keep your body perfectly square',
      description:
        'Some rotation and weight shift is normal during a one arm push up, especially when your stance becomes narrower. Do not force your shoulders and hips to stay perfectly square if it destroys your balance. Instead, keep the movement controlled and avoid excessive twisting just to complete the rep.'
    },
    {
      title: 'Cutting the range of motion',
      description:
        'It is easy to make one arm push ups look much easier by only lowering halfway. Use a consistent range of motion and work towards bringing your chest close to the floor before pressing back to full elbow extension. If you cannot reach that depth yet, use an easier progression.'
    },
    {
      title: 'Letting your hips sag',
      description:
        'The one arm push up puts a serious demand on your core. Keep your abs and glutes engaged so your lower back does not collapse as you press. If your hips start dropping every time you approach the bottom, reduce the difficulty and build more control first.'
    },
    {
      title: 'Ignoring your weaker arm',
      description:
        'Most people will have one side that feels stronger or more coordinated. Do not build all your reps on that side while barely training the other. Practice both arms and let your weaker side determine how much work you perform.'
    },
  ],

  relatedExercises: [
    'push-up',
    'archer-push-up',
    'diamond-push-up'
  ],

  faq: [
    {
      question: 'How do I progress to a one arm push up?',
      answer:
        'Start by building a strong base with regular push ups, then use exercises such as archer push ups and assisted one arm push ups to gradually shift more weight onto one side. One arm negatives are another great step because they let you practice the full position before you are strong enough to push yourself back up.'
    },
    {
      question: 'Should my feet be wide or together?',
      answer:
        'Start with your feet wide. A wider stance gives you a larger base of support and makes it easier to control rotation while you learn the movement. As you get stronger, gradually bring your feet closer together. Performing the exercise with your legs together is a much stricter and more difficult variation.'
    },
    {
      question: 'Why does my body rotate during one arm push ups?',
      answer:
        'Removing one hand makes your base of support much smaller, so your body naturally has to adjust its position to stay balanced over the working hand and your feet. Some controlled rotation is normal. The problem is when you lose control completely, twist aggressively, or use the rotation to avoid doing a full rep.'
    },
    {
      question: 'How many regular push ups do I need before trying one arm push ups?',
      answer:
        'There is no exact number that guarantees you are ready. Being able to perform plenty of regular push ups helps, but unilateral strength and body control matter more than simply chasing a high rep count. If regular push ups are easy and you can perform controlled archer push ups on both sides, you are in a good position to start working on one arm progressions.'
    },
  ],

  seo: {
    title:
      'One Arm Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the One Arm Push Up with proper technique, muscles worked, common mistakes and progressions from archer push ups to strict reps.',
  },

  imageUrl: '/images/exercises/one-arm-push-up.png',
};
