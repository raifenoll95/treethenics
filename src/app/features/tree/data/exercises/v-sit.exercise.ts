import { Exercise } from '../../../../shared/models/exercise.model';

export const V_SIT: Exercise = {
  id: 'v-sit',
  name: 'V-Sit',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'core',

  targetAreas: ['core', 'triceps'],

  primaryMuscles: [
    'abdominals',
    'triceps'
  ],

  secondaryMuscles: [
    'quadriceps',
    'front-deltoids',
    'serratus-anterior',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The V-Sit is an advanced straight-arm support hold where you suspend your body on your hands while keeping both legs straight and raised clearly above horizontal. It builds on the L-Sit by demanding greater active compression, hip mobility, and support strength.',

  overview:
    'The V-Sit is the next major progression beyond the L-Sit. Support your body on locked arms, press strongly through your hands, and lift your straight legs above the horizontal L-Sit position. As the legs rise, allow your torso to lean backwards slightly to maintain balance while continuing to compress the thighs towards your chest. The challenge comes from combining strong active compression with straight knees, elevated hips, and stable straight-arm support.',

  howTo: [
    {
      title: 'Establish the L-Sit',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a controlled L-Sit with your elbows locked, hips completely off the floor, and both legs straight in front of you.'
    },
    {
      title: 'Press through your hands',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Push strongly into the floor or parallettes and keep your shoulders active. Maintain straight elbows as you prepare to raise your legs higher.'
    },
    {
      title: 'Increase the compression',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Pull your thighs closer towards your torso while keeping your knees extended. Raise both feet progressively above the horizontal L-Sit position.'
    },
    {
      title: 'Balance the V position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Allow your torso to lean slightly backwards as the legs rise. Keep your hips suspended, legs together, and knees locked while finding a balanced V-shaped position.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the highest leg position you can control without bending your knees or collapsing through your arms. Lower back towards the L-Sit under control when your position begins to break.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the knees',
      description:
        'Bent knees reduce the compression and mobility demands of the full V-Sit. Use a Tuck or One-Leg V-Sit progression if you cannot yet keep both knees extended.'
    },
    {
      title: 'Only leaning backwards',
      description:
        'Leaning the torso back without actively raising the legs can create the appearance of a tighter angle without developing the required compression. Actively pull your straight legs higher towards your torso.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The V-Sit is a straight-arm support skill. Keep your elbows locked and press strongly through your hands rather than sinking between your shoulders.'
    },
    {
      title: 'Forcing the legs towards vertical',
      description:
        'Your legs do not need to reach vertical for the position to qualify as a V-Sit. First develop a clean position above horizontal, then progressively increase the leg height as your compression and mobility improve.'
    },
  ],

  relatedExercises: [
    'l-sit',
    'manna',
    'straddle-press-to-handstand'
  ],

  faq: [
    {
      question: 'What is a V-Sit?',
      answer:
        'The V-Sit is a static support skill where you hold your body above the floor on straight arms while keeping both straight legs raised above horizontal. It is a more compressed progression of the L-Sit.'
    },
    {
      question: 'What is the difference between an L-Sit and a V-Sit?',
      answer:
        'In an L-Sit, the legs are held approximately horizontal. In a V-Sit, both straight legs are raised clearly above horizontal towards the torso, requiring greater active compression and usable hamstring flexibility.'
    },
    {
      question: 'Do my legs need to be vertical in a V-Sit?',
      answer:
        'No. The defining progression from an L-Sit is that the straight legs rise clearly above horizontal. Raising them progressively closer to vertical makes the position harder and can eventually lead towards an I-Sit.'
    },
    {
      question: 'Why can I hold an L-Sit but not a V-Sit?',
      answer:
        'The V-Sit requires substantially more active compression. You need enough hip-flexor strength and hamstring mobility to pull your straight legs higher while continuing to support your entire body on locked arms.'
    },
    {
      question: 'How do I progress from L-Sit to V-Sit?',
      answer:
        'Start from a strong L-Sit and train active compression separately. Then use High Tuck V-Sits, One-Leg V-Sits, and progressively higher straight-leg holds until both legs can remain clearly above horizontal.'
    },
  ],

  seo: {
    title:
      'V-Sit: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the V-Sit with proper straight-arm technique, active compression, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/v-sit.png',
};
