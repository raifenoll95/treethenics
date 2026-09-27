import { Exercise } from '../../../../shared/models/exercise.model';

export const HIP_THRUST: Exercise = {
  id: 'hip-thrust',
  name: 'Hip Thrust',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['glutes', 'legs'],

  primaryMuscles: [
    'glutes'
  ],

  secondaryMuscles: [
    'hamstrings',
    'quadriceps',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The Hip Thrust is a hip-extension exercise performed with your upper back supported on a bench while you drive your hips upward. It primarily trains the glutes and can be performed with bodyweight or progressively loaded as your strength improves.',

  overview:
    'The Hip Thrust teaches you to produce force through hip extension while keeping your torso and pelvis controlled. Start with your upper back supported on a stable bench and your feet planted firmly on the floor. Drive through your feet and extend your hips until your torso and thighs form a strong line at the top, then lower under control. Once the bodyweight version is comfortable, resistance can be added progressively.',

  howTo: [
    {
      title: 'Set your upper back',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Sit in front of a stable bench and place your upper back against its edge. Bend your knees and plant both feet firmly on the floor around hip to shoulder width apart.'
    },
    {
      title: 'Brace before you lift',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Keep your ribs and pelvis controlled and look forward or slightly down. Brace your core before driving your hips upward instead of beginning the movement by arching your lower back.'
    },
    {
      title: 'Drive your hips upward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Push through your feet and extend your hips by contracting your glutes. Allow your torso to rotate around the bench as your hips rise.'
    },
    {
      title: 'Reach full hip extension',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Finish when your hips are fully extended and your torso and thighs form a strong line. Squeeze your glutes at the top without exaggerating the movement by hyperextending your lower back.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement by allowing your hips to descend while keeping your feet planted and your torso controlled. Lower far enough to begin the next repetition with a clear hip-extension movement.'
    },
  ],

  commonMistakes: [
    {
      title: 'Overarching your lower back',
      description:
        'Do not chase extra height by extending your lumbar spine at the top. Finish the repetition through hip extension and glute contraction while keeping your ribs and pelvis controlled.'
    },
    {
      title: 'Placing your feet too far away',
      description:
        'If your feet are excessively far from your hips, the movement can become awkward and you may struggle to reach a strong lockout. Adjust your stance until you can extend your hips comfortably while keeping your feet firmly planted.'
    },
    {
      title: 'Placing your feet too close',
      description:
        'A stance that is too close can make the movement feel dominated by the knees and make the top position uncomfortable. Experiment with your foot position until you can drive through the floor and achieve controlled hip extension.'
    },
    {
      title: 'Using momentum instead of your glutes',
      description:
        'Avoid bouncing through the bottom or throwing your hips upward. Control both directions and deliberately extend the hips so the glutes produce the movement rather than relying on momentum.'
    },
  ],

  relatedExercises: [
    'glute-bridge',
    'single-leg-hip-thrust',
    'bulgarian-squat'
  ],

  faq: [
    {
      question: 'What muscles does the Hip Thrust work?',
      answer:
        'The Hip Thrust primarily trains the gluteus maximus through hip extension. The hamstrings, quadriceps, and trunk muscles also contribute to producing and stabilizing the movement.'
    },
    {
      question: 'What is the difference between a Hip Thrust and a Glute Bridge?',
      answer:
        'In a Hip Thrust, your upper back is elevated on a bench, allowing your hips and torso to move through a different range than a Glute Bridge performed with your back on the floor. Both are hip-extension exercises and can be useful for developing the glutes.'
    },
    {
      question: 'Do I need weights to do Hip Thrusts?',
      answer:
        'No. Bodyweight Hip Thrusts are useful for learning the movement and building basic control. As they become easy, you can progress with pauses, single-leg variations, resistance bands, or external load depending on your training setup.'
    },
    {
      question: 'Why do I feel Hip Thrusts in my lower back?',
      answer:
        'Excessive lower-back extension at the top can shift the movement away from controlled hip extension. Keep your core braced, avoid flaring your ribs, and stop the upward movement when your hips are fully extended rather than trying to lift them as high as possible.'
    },
  ],

  seo: {
    title:
      'Hip Thrust: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Hip Thrust with proper technique, muscles worked, common mistakes and progressions for stronger glutes and hip extension.',
  },

  imageUrl: '/images/exercises/hip-thrust.png',
};
