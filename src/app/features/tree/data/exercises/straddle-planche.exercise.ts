import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE: Exercise = {
  id: 'straddle-planche',
  name: 'Straddle Planche',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'chest'
  ],

  secondaryMuscles: [
    'biceps',
    'triceps',
    'abdominals',
    'forearms',
    'glutes'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Straddle Planche is an advanced straight-arm strength skill where you hold your entire body approximately horizontal above the ground with your legs straight and spread apart. The straddle position reduces the effective lever compared with a Full Planche while still demanding exceptional shoulder strength, scapular control, and full-body tension.',

  overview:
    'The Straddle Planche is one of the final major progressions before the Full Planche. Lean your shoulders forward beyond your hands, keep your elbows completely locked, and push strongly through the floor while maintaining active scapular protraction. Extend both legs behind you and open them into a wide straddle to bring more of your body mass closer to the hands. Build the skill from a strong Advanced Tuck Planche and progressively extend and separate the legs without sacrificing hip height or straight-arm control.',

  howTo: [
    {
      title: 'Start from Advanced Tuck',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Establish a strong Advanced Tuck Planche with straight elbows, active shoulders, and your hips approximately level with your shoulders before beginning to extend the legs.'
    },
    {
      title: 'Lean over your hands',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Shift your shoulders forward beyond your hands while pressing strongly into the floor. Maintain the forward lean as your legs begin moving farther away from your torso.'
    },
    {
      title: 'Open into the straddle',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Extend your knees and spread your legs apart. Use a wider straddle initially to reduce the effective lever while keeping your feet completely off the floor.'
    },
    {
      title: 'Maintain the horizontal line',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your elbows locked, hips elevated, and legs straight while actively pushing through the shoulders. Adjust your forward lean as necessary to keep your center of mass over your hands.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the position without bending your arms or allowing your feet to touch the floor. End the hold when you can no longer preserve the straight-arm horizontal position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Straddle Planche is a straight-arm skill. Bending your elbows changes the mechanics and reduces the specific straight-arm strength demand. Return to an easier progression if you cannot keep them locked.'
    },
    {
      title: 'Dropping the hips',
      description:
        'Allowing the hips to hang below the shoulders creates a downward body angle instead of a clean horizontal Planche. Use a wider straddle or shorter lever until you can maintain your hip position.'
    },
    {
      title: 'Not leaning far enough forward',
      description:
        'Your shoulders must move significantly beyond your hands to balance the weight of your legs behind you. If your shoulders remain directly above your wrists, your feet will usually fall back to the floor.'
    },
    {
      title: 'Bending the knees',
      description:
        'Bent knees shorten the lever and turn the position into an intermediate progression rather than a full Straddle Planche. Keep both knees extended and use a wider leg position if you need to reduce the difficulty.'
    },
  ],

  relatedExercises: [
    'advanced-tuck-planche',
    'full-planche',
    'straddle-planche-press-to-handstand'
  ],

  faq: [
    {
      question: 'What is a Straddle Planche?',
      answer:
        'The Straddle Planche is a static straight-arm skill where you support your entire body on your hands while holding your torso and legs approximately horizontal. Unlike the Full Planche, the legs are spread apart to reduce the effective lever.'
    },
    {
      question: 'Why is the Straddle Planche easier than the Full Planche?',
      answer:
        'Spreading the legs brings some of your body mass closer to the hands and reduces the rotational demand created by the lower body. Bringing the legs together increases the effective lever and makes the Full Planche harder.'
    },
    {
      question: 'What muscles does the Straddle Planche work?',
      answer:
        'The anterior shoulders, serratus anterior, and chest contribute heavily to maintaining the forward-leaning support position. The arm musculature stabilizes the locked elbows, while the abdominals, glutes, and surrounding trunk muscles maintain the horizontal body position.'
    },
    {
      question: 'Should my elbows be completely straight?',
      answer:
        'Yes. Straight elbows are a defining part of the standard Straddle Planche. If your arms bend significantly, use an easier progression or additional assistance until you can maintain elbow lockout.'
    },
    {
      question: 'How do I progress from Straddle Planche to Full Planche?',
      answer:
        'Once your Straddle Planche is controlled, gradually reduce the width of your straddle while maintaining the same shoulder lean, elbow lockout, and hip height. Narrow the legs progressively until you can hold them straight and together without losing the horizontal position.'
    },
  ],

  seo: {
    title:
      'Straddle Planche: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Straddle Planche with proper straight-arm technique, muscles worked, progressions and common mistakes before advancing to the Full Planche.',
  },

  imageUrl: '/images/exercises/straddle-planche.png',
};
