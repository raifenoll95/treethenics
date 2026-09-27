import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT: Exercise = {
  id: 'l-sit',
  name: 'L-Sit',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: true,
  category: 'core',

  targetAreas: ['core', 'shoulders'],

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
    'The L-Sit is a static calisthenics skill where you support your entire body on straight arms while holding both legs extended horizontally in front of you. It combines core compression, hip-flexor strength, straight-arm support, and full-body control.',

  overview:
    'A clean L-Sit is more than simply lifting your feet from the floor. Your hips and feet should remain clear of the ground, your elbows stay locked, and your legs extend forward with straight knees. Build the position progressively through Tuck L-Sits and Single-Leg L-Sits before extending both legs. Parallettes are useful while learning because the extra clearance makes it easier to lift the hips and legs without touching the floor.',

  howTo: [
    {
      title: 'Build your support',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands beside your hips on the floor or parallettes. Press strongly through straight arms and lift your hips away from the ground while keeping your shoulders active.'
    },
    {
      title: 'Start with a Tuck L-Sit',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bring both knees towards your chest and lift your feet completely from the floor. Maintain straight elbows and learn to support your body without allowing your shoulders to collapse.'
    },
    {
      title: 'Extend one leg',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep one knee tucked while slowly extending the other leg forward. Practice both sides while keeping your hips elevated and the extended knee straight.'
    },
    {
      title: 'Extend both legs',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From the tuck, straighten both legs in front of you without allowing your hips to drop. Contract your quadriceps to keep your knees locked and actively compress your thighs towards your torso.'
    },
    {
      title: 'Hold the full L-Sit',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain straight arms, elevated hips, and both legs approximately horizontal. Keep breathing while holding the position and finish the set when your knees bend or your legs can no longer remain controlled.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the knees',
      description:
        'Bent knees shorten the lever and turn the position into an easier progression. Use a Tuck or Single-Leg L-Sit intentionally until you can extend both knees without losing the rest of the position.'
    },
    {
      title: 'Letting the shoulders collapse',
      description:
        'Do not simply hang between your arms. Press strongly through your hands and maintain active shoulders so your hips remain elevated and your upper body stays supported.'
    },
    {
      title: 'Letting the legs drop',
      description:
        'If your straight legs fall substantially below hip height, your compression strength may be limiting the hold. Return to a shorter-lever progression instead of compensating with a lower and lower leg position.'
    },
    {
      title: 'Training only the abs',
      description:
        'The L-Sit also requires strong hip flexion and straight-arm support. If your abs feel strong but you still cannot hold the position, train Tuck L-Sits, seated compression lifts, and support holds instead of relying only on abdominal exercises.'
    },
  ],

  relatedExercises: [
    'l-sit-pull-up',
    'l-sit-to-handstand',
    'v-sit'
  ],

  faq: [
    {
      question: 'What muscles does the L-Sit work?',
      answer:
        'The abdominals stabilize the trunk and pelvis while the hip flexors actively hold the thighs in front of the body. The triceps maintain straight elbows, the quadriceps keep the knees extended, and the shoulders and scapular muscles stabilize the support position.'
    },
    {
      question: 'Why can I do leg raises but not an L-Sit?',
      answer:
        'An L-Sit requires more than raising your legs. You also need enough straight-arm support to lift your hips, active compression to keep the legs high, and enough mobility to maintain straight knees. Training Tuck L-Sits and support holds can expose which part is limiting you.'
    },
    {
      question: 'Is the L-Sit easier on parallettes or on the floor?',
      answer:
        'Parallettes are usually easier for learning because they provide additional clearance beneath your hips and feet. A Floor L-Sit gives you less room, so you need stronger active compression and hip elevation to keep your heels off the ground.'
    },
    {
      question: 'What is the best progression for the L-Sit?',
      answer:
        'A practical progression is Tuck L-Sit, Single-Leg L-Sit, and then Full L-Sit. Instead of chasing a universal hold-time requirement, progress when you can maintain straight arms, elevated hips, and good control in your current variation.'
    },
  ],

  seo: {
    title:
      'L-Sit: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the L-Sit with proper technique, muscles worked, Tuck and Single-Leg progressions, common mistakes and tips for building a clean static hold.',
  },

  imageUrl: '/images/exercises/l-sit.png',
};
