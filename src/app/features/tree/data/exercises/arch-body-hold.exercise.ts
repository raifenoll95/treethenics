import { Exercise } from '../../../../shared/models/exercise.model';

export const ARCH_BODY_HOLD: Exercise = {
  id: 'arch-body-hold',
  name: 'Arch Body Hold',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core', 'back', 'glutes'],

  primaryMuscles: [
    'lower-back',
    'glutes'
  ],

  secondaryMuscles: [
    'hamstrings',
    'upper-back',
    'rear-deltoids',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The Arch Body Hold is a fundamental gymnastics body position performed face down with the arms and legs extended off the floor. It develops posterior-chain strength and teaches you to maintain full-body tension in an extended position.',

  overview:
    'Lie face down with your arms extended overhead and your legs straight and together. Create tension through your entire body, then lift your chest, arms, thighs, and feet away from the floor while keeping your elbows and knees straight. Rather than trying to create the biggest possible lower-back arch, think about reaching long through your fingertips and toes while using your upper back, glutes, and posterior chain to distribute the position across the whole body.',

  howTo: [
    {
      title: 'Lie face down',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your stomach with your legs straight and together. Extend both arms overhead with your elbows locked and keep your body as long as possible.'
    },
    {
      title: 'Create full-body tension',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Squeeze your glutes, straighten your knees, and reach actively through your arms and legs before lifting away from the floor.'
    },
    {
      title: 'Lift the upper and lower body',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Raise your arms and chest while simultaneously lifting your thighs and feet. Keep your elbows and knees completely straight.'
    },
    {
      title: 'Maintain a long arch',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue reaching your fingertips and toes away from each other while keeping your glutes and back active. Maintain a controlled arch rather than compressing only through the lower back.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Keep your arms and legs elevated while breathing normally and maintaining full-body tension. Lower under control when you can no longer preserve the position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Arching only the lower back',
      description:
        'Do not concentrate all of the movement in your lumbar spine. Use your glutes and upper back and think about creating a long whole-body arch rather than simply bending your lower back as much as possible.'
    },
    {
      title: 'Bending the knees',
      description:
        'Keep your knees fully extended and your legs together. Bending the knees shortens the body position and reduces the full-body tension required by the Arch Body Hold.'
    },
    {
      title: 'Bending the elbows',
      description:
        'Keep your arms long and your elbows locked. Reach overhead rather than allowing the arms to collapse as you become tired.'
    },
    {
      title: 'Lifting the head excessively',
      description:
        'Avoid throwing your head backwards to make the chest appear higher. Keep the neck controlled and let the lift come from the body rather than excessive neck extension.'
    },
    {
      title: 'Relaxing the glutes',
      description:
        'The Arch Body Hold should not be performed using only the spinal muscles. Actively squeeze your glutes to help extend the hips and lift the legs.'
    },
  ],

  relatedExercises: [
    'hollow-body-hold',
    'arch-body-rock',
    'dragon-flag'
  ],

  faq: [
    {
      question: 'What is an Arch Body Hold?',
      answer:
        'The Arch Body Hold is a static gymnastics position performed lying face down with the arms, chest, and legs elevated from the floor. It develops posterior-chain strength and full-body tension in an extended position.'
    },
    {
      question: 'Is Arch Body Hold the same as Superman Hold?',
      answer:
        'The names are often used interchangeably. In gymnastics and calisthenics, Arch Body Hold usually emphasizes a long and controlled body position with straight arms and legs and tension distributed throughout the posterior chain.'
    },
    {
      question: 'What muscles does the Arch Body Hold work?',
      answer:
        'The spinal erectors and glutes are major contributors to the position, while the hamstrings, upper back, shoulders, and surrounding trunk muscles help maintain the extended body line.'
    },
    {
      question: 'What is the difference between Hollow Body Hold and Arch Body Hold?',
      answer:
        'They train opposite body shapes. Hollow Body Hold uses a rounded position with the front of the trunk strongly engaged, while Arch Body Hold places the body in controlled extension and emphasizes the posterior chain.'
    },
    {
      question: 'How can I make the Arch Body Hold easier?',
      answer:
        'Reduce the lever by keeping your arms closer to your sides or initially lifting only the upper or lower body. Progress towards the full position with both straight arms overhead and both legs elevated.'
    },
  ],

  seo: {
    title:
      'Arch Body Hold: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Arch Body Hold with proper gymnastics technique, muscles worked, progressions and common mistakes for building posterior-chain strength.',
  },

  imageUrl: '/images/exercises/arch-body-hold.png',
};
