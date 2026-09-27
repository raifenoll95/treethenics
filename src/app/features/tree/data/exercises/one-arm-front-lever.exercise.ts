import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_FRONT_LEVER: Exercise = {
  id: 'one-arm-front-lever',
  name: 'One Arm Front Lever',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'core', 'shoulders'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals',
    'obliques'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'biceps',
    'forearms',
    'glutes'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The One Arm Front Lever is an elite unilateral pulling skill where you hold your entire body approximately horizontal beneath the bar using one straight supporting arm. It combines extreme straight-arm back strength with full-body tension and a much greater anti-rotation demand than the regular Front Lever.',

  overview:
    'The One Arm Front Lever is more than simply removing one hand from a Front Lever. Once one arm is released, your center of mass and rotational forces change significantly, so you must learn to position your body around the supporting shoulder while resisting unwanted twisting. Build a strong Full Front Lever first, then use assisted one-arm holds and shorter lever positions before progressively extending into the full skill.',

  howTo: [
    {
      title: 'Master the Full Front Lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled Full Front Lever with straight elbows, high hips, and consistent body tension. Build strength on both sides before introducing significant unilateral loading.'
    },
    {
      title: 'Shift towards one arm',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From an easier Front Lever progression, gradually transfer more weight onto one arm while the second hand provides light assistance. Learn how your torso and hips need to adjust around the supporting shoulder.'
    },
    {
      title: 'Use a shorter one-arm lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Practice one-arm holds with a tuck, one-leg, or straddle position. Keep the supporting elbow completely extended and focus on controlling rotation before increasing the body lever.'
    },
    {
      title: 'Reduce the assistance',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Progress from a firm assisting grip to fingertips, a band, or increasingly lighter assistance. Maintain the same horizontal position instead of compensating by dropping your hips.'
    },
    {
      title: 'Extend into the full lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Straighten and bring your legs together while maintaining one-arm support. Keep the working elbow locked, your hips approximately level with your shoulders, and your torso rotation under control.'
    },
  ],

  commonMistakes: [
    {
      title: 'Simply removing one hand',
      description:
        'A strong two-arm Front Lever does not automatically give you the balance and positioning required for the unilateral version. Progressively transfer weight to one arm instead of suddenly releasing the other hand.'
    },
    {
      title: 'Bending the supporting arm',
      description:
        'The standard One Arm Front Lever is a straight-arm skill. If the supporting elbow bends significantly, return to an easier lever or add assistance until you can maintain elbow extension.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Dropping the hips shortens the effective lever and changes the position. Use a straddle, one-leg variation, or more assistance if necessary to keep your body approximately horizontal.'
    },
    {
      title: 'Fighting all torso rotation',
      description:
        'The unilateral position changes how your center of mass relates to the supporting hand, so some body adjustment is natural. Focus on controlling rotation rather than forcing your chest to remain perfectly square at the expense of the lever position.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'one-arm-front-lever-pull-up',
    'one-arm-front-lever-to-muscle-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Front Lever?',
      answer:
        'The One Arm Front Lever is a unilateral Front Lever where you hold your body approximately horizontal beneath a bar or rings using one straight supporting arm. It requires exceptional pulling strength, straight-arm control, and resistance to rotation.'
    },
    {
      question: 'Should I learn the Full Front Lever first?',
      answer:
        'Yes. A strong Full Front Lever is the most specific bilateral foundation for the skill. You can introduce assisted one-arm drills before completely mastering the final unilateral position, but the full version should be built on very strong Front Lever mechanics.'
    },
    {
      question: 'What muscles does the One Arm Front Lever work?',
      answer:
        'The lats and upper back provide much of the straight-arm pulling and shoulder control, while the abdominals and obliques maintain the body position and resist rotation. The rear shoulders, biceps, forearms, and glutes contribute to stabilizing the arm, grip, and body line.'
    },
    {
      question: 'Can my body rotate in a One Arm Front Lever?',
      answer:
        'Some rotation or adjustment can occur because removing one hand changes the support and center-of-mass relationship. The goal is a controlled horizontal lever, not forcing a perfectly square torso by allowing the hips to drop or the supporting elbow to bend.'
    },
    {
      question: 'How do I progress to a One Arm Front Lever?',
      answer:
        'Start from a strong Full Front Lever, then practice assisted unilateral weight shifts and one-arm holds with shorter lever positions such as tuck, one-leg, or straddle. Gradually reduce assistance and extend the body until you can maintain the full lever with one straight arm.'
    },
  ],

  seo: {
    title:
      'One Arm Front Lever: Technique & Progressions | Treethenics',

    description:
      'Learn the One Arm Front Lever with proper technique, muscles worked, assisted one-arm progressions and common mistakes for this elite calisthenics skill.',
  },

  imageUrl: '/images/exercises/one-arm-front-lever.png',
};
