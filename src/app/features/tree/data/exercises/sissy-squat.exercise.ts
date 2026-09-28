import { Exercise } from '../../../../shared/models/exercise.model';

export const SISSY_SQUAT: Exercise = {
  id: 'sissy-squat',
  name: 'Sissy Squat',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs'],

  primaryMuscles: [
    'quadriceps'
  ],

  secondaryMuscles: [
    'calves',
    'abdominals',
    'glutes'
  ],

  equipment: ['floor'],

  description:
    'The Sissy Squat is a quad-focused bodyweight exercise where you bend deeply at the knees while allowing them to travel forward, lifting your heels and leaning your body backwards. Unlike a regular squat, the hips remain relatively extended so the quadriceps handle most of the movement.',

  overview:
    'The Sissy Squat uses a very different strategy from a regular squat. Instead of sitting the hips backwards, rise onto the balls of your feet and allow your knees to travel forward while your torso and thighs lean backwards together. This creates a long lever around the knee and places a large demand on the quadriceps. Start with a stable support for balance and gradually increase your depth as your strength and control improve.',

  howTo: [
    {
      title: 'Set your stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet around hip to shoulder width and use a stable object for light balance assistance if needed. Keep your torso tall and prepare to move through the knees rather than sitting your hips backwards.'
    },
    {
      title: 'Rise onto your toes',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Allow your heels to lift as you begin bending your knees. Keep pressure through the balls of your feet and maintain control instead of suddenly dropping forward.'
    },
    {
      title: 'Drive the knees forward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue bending your knees forward while your body leans backwards. Keep your hips relatively extended so your torso and thighs move together rather than folding at the waist.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Descend only as far as you can control while maintaining the long body position. Use your support for balance rather than pulling strongly with your arm.'
    },
    {
      title: 'Extend the knees',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Contract your quadriceps to straighten your knees and bring your body back towards standing. Lower your heels as you finish the repetition under control.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a regular squat',
      description:
        'Pushing your hips far backwards reduces the characteristic knee-dominant mechanics of the Sissy Squat. Keep the hips relatively extended and let the knees travel forward as your body leans backwards.'
    },
    {
      title: 'Bending at the waist',
      description:
        'Folding your torso forward shortens the lever and changes the exercise. Keep your trunk and thighs relatively aligned throughout the descent instead of hinging strongly at the hips.'
    },
    {
      title: 'Dropping too quickly',
      description:
        'The bottom portion can place a large demand on the quadriceps and knees. Control the eccentric phase and use assistance or a smaller range if you cannot smoothly stop and reverse the descent.'
    },
    {
      title: 'Using the support to pull yourself up',
      description:
        'Holding a stable object is useful for balance, but pulling heavily with your arm removes much of the load from your legs. Use only as much assistance as necessary to maintain control.'
    },
  ],

  relatedExercises: [
    'squat',
    'isometric-squat',
    'pistol-squat'
  ],

  faq: [
    {
      question: 'What is a Sissy Squat?',
      answer:
        'The Sissy Squat is a knee-dominant bodyweight squat variation where the knees travel forward, the heels rise, and the body leans backwards while the hips remain relatively extended. This creates a strong quadriceps challenge without requiring external weight.'
    },
    {
      question: 'What muscles does the Sissy Squat work?',
      answer:
        'The quadriceps are the primary target because they control and reverse the large knee-flexion movement. The calves help maintain the raised-heel position, while the core and surrounding hip musculature help keep the body controlled.'
    },
    {
      question: 'Should my knees go past my toes in a Sissy Squat?',
      answer:
        'Yes. Forward knee travel is a defining part of the exercise rather than a technique error. The Sissy Squat intentionally uses substantial knee flexion and forward knee displacement to create its knee-extensor demand.'
    },
    {
      question: 'Should I keep my heels on the floor?',
      answer:
        'No. In the standard bodyweight Sissy Squat, the heels rise naturally as the knees move forward and the body leans backwards. You remain supported primarily through the front of the feet during the deepest portion.'
    },
    {
      question: 'How do I make the Sissy Squat easier?',
      answer:
        'Hold a stable object for balance and begin with a shallow range of motion. Gradually descend deeper as you develop the quadriceps strength and control required to reverse the movement without pulling yourself up with your arms.'
    },
  ],

  seo: {
    title:
      'Sissy Squat: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Sissy Squat with proper technique, muscles worked, quad-focused mechanics, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/sissy-squat.png',
};
