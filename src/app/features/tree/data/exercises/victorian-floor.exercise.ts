import { Exercise } from '../../../../shared/models/exercise.model';

export const VICTORIAN_FLOOR: Exercise = {
  id: 'victorian-floor',
  name: 'Victorian Floor',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: false,
  category: 'pull',

  targetAreas: ['shoulders', 'back', 'core'],

  primaryMuscles: [
    'rear-deltoids',
    'latissimus-dorsi',
    'triceps'
  ],

  secondaryMuscles: [
    'upper-back',
    'abdominals',
    'obliques',
    'glutes',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The Victorian Floor is an advanced face-up horizontal hold performed close to the ground with the hands positioned beside or slightly behind the hips. The body is kept rigid and elevated while the shoulders, back, arms, and core work together to maintain the long horizontal lever.',

  overview:
    'The Victorian Floor is an advanced posterior straight-body strength skill. Start with your hands beside or slightly behind your hips, press strongly into the floor, and lean your torso backwards while keeping your legs straight. Lift your hips and feet until the body approaches a horizontal face-up position. The goal is to maintain a rigid line through the torso, hips, and legs without letting the hips touch the floor or folding at the waist. Build the position progressively with shorter-lever and assisted variations before attempting the full hold.',

  howTo: [
    {
      title: 'Set your hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Sit with your legs extended and place your hands firmly on the floor beside or slightly behind your hips. Spread your fingers and establish a stable base before loading the position.'
    },
    {
      title: 'Lean backwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Shift your torso backwards while pressing strongly through your hands. Create tension through your shoulders, arms, and upper back before lifting into the full lever.'
    },
    {
      title: 'Lift the hips and legs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Raise your hips and both legs away from the floor while keeping your knees extended. Brace your trunk and squeeze your glutes to prevent the pelvis from dropping.'
    },
    {
      title: 'Extend into the Victorian',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Reach a long face-up position with your torso, hips, knees, and ankles approximately aligned. Keep your hands firmly planted and maintain strong tension behind the shoulders.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the horizontal position without allowing your hips or legs to touch the floor. End the hold when you can no longer preserve the body line or stable upper-body position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips drop',
      description:
        'The hips should remain elevated with the rest of the body rather than hanging close to the floor. Use a shorter-lever progression if you cannot maintain the horizontal line.'
    },
    {
      title: 'Piking at the hips',
      description:
        'Folding the body at the hips shortens the lever and changes the skill. Keep the glutes active and maintain a long line through the torso and legs.'
    },
    {
      title: 'Bringing the hands too far forward',
      description:
        'Placing the hands like an L-Sit changes the shoulder position and makes it difficult to create the characteristic backwards Victorian lean. Keep the support beside or slightly behind the hips.'
    },
    {
      title: 'Trying the full lever too early',
      description:
        'Straight legs create a very long lever. Develop the shoulder and posterior-chain strength with assisted or shorter-lever positions before forcing the full Victorian.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'touch-front-lever',
    'dragon-press'
  ],

  faq: [
    {
      question: 'What is a Victorian Floor?',
      answer:
        'The Victorian Floor is an advanced face-up horizontal hold performed close to the ground. The hands support the upper body beside or behind the hips while the shoulders, back, arms, and core keep the rest of the body elevated.'
    },
    {
      question: 'What muscles does the Victorian Floor work?',
      answer:
        'The posterior shoulders, lats, triceps, and upper back contribute strongly to the support position. The abdominals, obliques, and glutes maintain the rigid horizontal body line.'
    },
    {
      question: 'Is the Victorian Floor the same as a Front Lever?',
      answer:
        'No. A Front Lever hangs from an overhead bar with the arms positioned above the torso. The Victorian Floor uses support behind the body and creates a very different shoulder position while maintaining a similar face-up horizontal body line.'
    },
    {
      question: 'Is the Victorian Floor the same as the Victorian on rings?',
      answer:
        'No. The Rings Victorian is a suspended straight-arm gymnastics skill where the rings are held wide beside the body. The floor variation uses the ground for support and has different mechanics and leverage.'
    },
    {
      question: 'How do I progress to the Victorian Floor?',
      answer:
        'Build strong posterior shoulder and horizontal pulling strength first, then practice assisted Victorian leans and shorter-lever holds. Gradually extend the legs and reduce assistance while keeping the hips elevated and the body rigid.'
    },
  ],

  seo: {
    title:
      'Victorian Floor: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Victorian Floor with proper body position, muscles worked, progressions and common mistakes for this advanced horizontal hold.',
  },

  imageUrl: '/images/exercises/victorian-floor.png',
};
