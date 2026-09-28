import { Exercise } from '../../../../shared/models/exercise.model';

export const SINGLE_LEG_GLUTE_BRIDGE: Exercise = {
  id: 'single-leg-glute-bridge',
  name: 'Single Leg Glute Bridge',
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
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The Single Leg Glute Bridge is a unilateral hip-extension exercise where one foot remains on the floor while the opposite leg stays elevated. It strengthens the glutes while adding a greater stability challenge than the regular Glute Bridge because the pelvis must remain controlled on a single supporting leg.',

  overview:
    'The Single Leg Glute Bridge is a natural progression from the regular Glute Bridge. Lie on your back, keep one foot planted, lift the opposite leg, and drive your hips upward using the working glute. The main challenge is not simply lifting as high as possible, but extending the hip without arching your lower back or allowing one side of your pelvis to drop or rotate. Train both sides and prioritize controlled hip extension over extra range of motion.',

  howTo: [
    {
      title: 'Set your working leg',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your back with one knee bent and the working foot flat on the floor. Lift the opposite leg and brace your abdominals before beginning the movement.'
    },
    {
      title: 'Drive through the floor',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Press the working foot firmly into the floor and contract the glute to begin extending your hip. Keep your upper back and shoulders in contact with the ground.'
    },
    {
      title: 'Lift your hips',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Raise your pelvis until your working hip reaches a strong extended position. Keep both sides of your pelvis controlled instead of allowing the unsupported side to drop or rotate.'
    },
    {
      title: 'Finish with the glute',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Squeeze the working glute at the top without forcing your hips higher by arching your lower back. Maintain abdominal tension throughout the top position.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly lower your hips towards the floor while maintaining pelvic control. Complete your repetitions with one leg before switching sides.'
    },
  ],

  commonMistakes: [
    {
      title: 'Rotating the pelvis',
      description:
        'The unsupported side of the pelvis often drops or rotates as you lift. Keep your hips controlled and approximately level instead of using rotation to create extra height.'
    },
    {
      title: 'Arching the lower back',
      description:
        'Do not chase maximum height by extending through your lumbar spine. Stop when your hip reaches extension and your glute is fully contracted while your trunk remains controlled.'
    },
    {
      title: 'Pushing mostly through the hamstrings',
      description:
        'If your hamstrings constantly cramp or dominate the movement, adjust your foot position and focus on driving hip extension with the glute. Bringing the working foot somewhat closer can reduce hamstring contribution for some people.'
    },
    {
      title: 'Pushing from the upper body',
      description:
        'Your arms and shoulders can provide stability, but they should not create the movement. Generate the lift by pressing through the working leg and extending the hip.'
    },
  ],

  relatedExercises: [
    'glute-bridge',
    'hip-thrust',
    'single-leg-hip-thrust'
  ],

  faq: [
    {
      question: 'What is a Single Leg Glute Bridge?',
      answer:
        'The Single Leg Glute Bridge is a unilateral bridge where one foot remains on the floor while the opposite leg is elevated. The working leg extends the hip and raises the pelvis while your trunk and pelvis resist unwanted rotation.'
    },
    {
      question: 'What muscles does the Single Leg Glute Bridge work?',
      answer:
        'The glutes are the main target, while the hamstrings assist with hip extension. The abdominal and oblique muscles help stabilize the trunk and pelvis as you perform the movement on one leg.'
    },
    {
      question: 'Why do I feel Single Leg Glute Bridges in my hamstrings?',
      answer:
        'The hamstrings also extend the hip, so some hamstring activity is normal. If they dominate or cramp, experiment with bringing the working foot closer to your hips and focus on maintaining abdominal tension while actively contracting the glute.'
    },
    {
      question: 'Should my hips stay level?',
      answer:
        'Yes. Try to keep both sides of your pelvis controlled throughout the repetition. A major hip drop or rotation usually means the unilateral position is exceeding your current ability to stabilize the movement.'
    },
    {
      question: 'How can I make the Single Leg Glute Bridge harder?',
      answer:
        'First increase your control through the full range of motion. From there, you can progress to the Single Leg Hip Thrust, where elevating the upper back allows a larger hip movement and provides more options for increasing the difficulty.'
    },
  ],

  seo: {
    title:
      'Single Leg Glute Bridge: Form & Muscles Worked | Treethenics',

    description:
      'Learn the Single Leg Glute Bridge with proper technique, muscles worked, pelvic control, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/single-leg-glute-bridge.png',
};
