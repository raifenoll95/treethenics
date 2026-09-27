import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_PLANCHE: Exercise = {
  id: 'one-arm-planche',
  name: 'One Arm Planche',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'biceps'
  ],

  secondaryMuscles: [
    'chest',
    'obliques',
    'abdominals',
    'forearms',
    'triceps',
    'glutes'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The One Arm Planche is an elite unilateral strength and balance skill where you hold your body approximately horizontal using one straight supporting arm. It combines extreme straight-arm shoulder strength with precise weight distribution, scapular control, and full-body tension.',

  overview:
    'The One Arm Planche is not simply a Full Planche with one hand removed. Your center of mass must shift over the supporting hand, which changes the position of your shoulders, torso, and legs. Some lateral adjustment is therefore natural even in a clean hold. Build a strong Full Planche first, then develop one-arm weight shifts, assisted holds, negatives, and straddle variations before progressing towards the full legs-together position.',

  howTo: [
    {
      title: 'Build a strong Full Planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled Full Planche with straight elbows, active scapular control, high hips, and a consistent horizontal body line before introducing heavy unilateral loading.'
    },
    {
      title: 'Shift onto one arm',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From a planche or assisted planche position, gradually move your center of mass towards one hand. Keep both hands down initially and learn the lateral body position required to unload the opposite arm.'
    },
    {
      title: 'Reduce the second hand',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progressively reduce assistance from the second hand using fingertips, an elevated support, or another controlled assistance method. Keep the supporting elbow completely straight.'
    },
    {
      title: 'Use the straddle position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Practice the unsupported position with your legs straddled to make balance adjustments easier. Maintain your horizontal line while keeping your center of mass positioned over the supporting hand.'
    },
    {
      title: 'Close into the One Arm Planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Gradually bring your legs together while maintaining one-arm support. Keep the supporting elbow locked, actively push through the shoulder, and control the lateral body position without allowing your hips to drop.'
    },
  ],

  commonMistakes: [
    {
      title: 'Simply lifting one hand',
      description:
        'Removing one hand from a normal Full Planche without first shifting your center of mass leaves your body outside the new base of support. Learn the lateral weight shift before trying to hold the skill unsupported.'
    },
    {
      title: 'Bending the supporting arm',
      description:
        'The standard One Arm Planche is a straight-arm skill. If your elbow bends significantly, you are moving towards a One Arm Bent Planche instead. Add assistance or use an easier variation until you can keep the elbow locked.'
    },
    {
      title: 'Forcing the torso perfectly square',
      description:
        'A one-arm support requires a different center-of-mass position from a regular Planche. Some lateral body adjustment is expected. Prioritize a controlled horizontal hold over forcing bilateral Planche alignment that prevents you from balancing over the hand.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Dropping or heavily twisting the hips can shorten the effective lever and hide a lack of unilateral strength. Use a straddle or more assistance while learning to keep the shoulders, hips, and legs approximately horizontal.'
    },
  ],

  relatedExercises: [
    'full-planche',
    'one-arm-bent-planche',
    'one-arm-planche-push-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Planche?',
      answer:
        'The One Arm Planche is a static skill where you hold your body approximately horizontal using only one straight supporting arm. It requires extreme unilateral shoulder strength, straight-arm control, balance, and precise positioning of your center of mass.'
    },
    {
      question: 'Should I learn the Full Planche first?',
      answer:
        'Yes. A strong Full Planche provides the straight-arm strength and body control needed before adding the much greater balance and unilateral loading of the One Arm Planche. From there, train specific one-arm weight shifts and assisted holds.'
    },
    {
      question: 'What muscles does the One Arm Planche work?',
      answer:
        'The anterior shoulder and serratus play major roles in maintaining the pushing and scapular position, while the arm musculature supports the straight elbow under heavy load. The chest contributes to the pushing position, and the obliques, abdominals, glutes, and surrounding trunk muscles control the asymmetric horizontal body line.'
    },
    {
      question: 'Is the One Arm Planche just a strength skill?',
      answer:
        'No. Exceptional strength is required, but balance and positioning are also fundamental. With only one hand touching the floor, you must place your center of mass over a very small base of support while maintaining the horizontal lever.'
    },
    {
      question: 'How do I progress to a One Arm Planche?',
      answer:
        'Start from a strong Full Planche, then develop unilateral Planche leans and weight shifts. Progress to fingertip-assisted holds, assisted or negative One Arm Planche work, and One Arm Straddle Planche before gradually closing the legs into the full position.'
    },
  ],

  seo: {
    title:
      'One Arm Planche: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the One Arm Planche with proper straight-arm technique, muscles worked, assisted progressions and common mistakes for this elite unilateral planche skill.',
  },

  imageUrl: '/images/exercises/one-arm-planche.png',
};
