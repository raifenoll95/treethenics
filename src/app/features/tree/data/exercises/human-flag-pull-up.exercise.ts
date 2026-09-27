import { Exercise } from '../../../../shared/models/exercise.model';

export const HUMAN_FLAG_PULL_UP: Exercise = {
  id: 'human-flag-pull-up',
  name: 'Human Flag Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'pull',

  targetAreas: ['shoulders', 'back', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'latissimus-dorsi',
    'obliques'
  ],

  secondaryMuscles: [
    'biceps',
    'triceps',
    'upper-back',
    'abdominals',
    'forearms'
  ],

  equipment: ['vertical-pole'],

  description:
    'The Human Flag Pull Up is an elite dynamic variation of the Human Flag where you bend and extend your arms while keeping your body approximately horizontal. The top arm produces a strong pulling action, the bottom arm contributes to the opposing push, and your core keeps your hips and legs rigid throughout the movement.',

  overview:
    'The Human Flag Pull Up adds dynamic arm strength to an already demanding static skill. Start from a controlled Human Flag with straight arms, then bend your elbows to bring your head and upper torso closer to the line of your hands without allowing your legs to rise or fall. Reverse the movement by pressing and pulling back into the straight-arm flag. Learn the movement with straddle, assisted, or partial-range repetitions before attempting full legs-together reps.',

  howTo: [
    {
      title: 'Build a solid Human Flag',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a repeatable Full Human Flag before focusing on the dynamic version. Keep both elbows straight, your shoulders active, and your shoulders, hips, knees, and feet approximately aligned.'
    },
    {
      title: 'Practice easier pull-up variations',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use a Straddle Human Flag, resistance band, or partial range to learn how your elbows bend while your body remains horizontal. Increase the range only when you can prevent your hips from dropping or rotating.'
    },
    {
      title: 'Pull into the bent-arm position',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'From the straight-arm flag, pull strongly with the top arm while allowing both elbows to bend under control. Bring your head and upper torso towards the line between your hands without changing your body angle.'
    },
    {
      title: 'Press back to the flag',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Reverse the movement by pressing strongly through the bottom arm while the top arm continues to support and control the movement. Extend both elbows until you return to a straight-arm Human Flag.'
    },
    {
      title: 'Build clean full repetitions',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Perform the complete movement with your legs straight and together. Keep your body approximately horizontal from the beginning to the end of each repetition and train both sides.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a Human Flag Raise',
      description:
        'Your arms should bend and extend while your body stays approximately horizontal. If your legs move significantly up and down while your elbows remain mostly straight, you are performing more of a Human Flag Raise than a Human Flag Pull Up.'
    },
    {
      title: 'Pulling only with the top arm',
      description:
        'The top arm leads the pulling phase, but the bottom arm should not collapse. Both arms remain active, and the bottom arm becomes especially important as you press back towards the straight-arm flag.'
    },
    {
      title: 'Letting your hips sag or rotate',
      description:
        'Keep your torso and pelvis facing sideways and your hips aligned with your shoulders. If your body twists towards the floor or your hips drop during every repetition, use a straddle or assisted variation.'
    },
    {
      title: 'Training only your stronger side',
      description:
        'The roles of your arms reverse when you change sides. Practice both orientations so each arm develops experience in both the upper pulling and lower pressing positions.'
    },
  ],

  relatedExercises: [
    'human-flag',
    'straddle-human-flag',
    'human-flag-raise'
  ],

  faq: [
    {
      question: 'What is a Human Flag Pull Up?',
      answer:
        'It is a dynamic Human Flag variation where you bend both elbows to move your upper body towards your hands and then extend them again while keeping your body approximately horizontal. The movement combines the top arm pull, bottom arm push, and lateral core control of the Human Flag.'
    },
    {
      question: 'Do I need a Full Human Flag first?',
      answer:
        'A controlled Full Human Flag is the most specific foundation for the full legs-together version. You can still begin learning the pulling movement earlier with Tuck, Straddle, band-assisted, or partial-range variations.'
    },
    {
      question: 'Is a Human Flag Pull Up the same as a Human Flag Raise?',
      answer:
        'No. In a Human Flag Pull Up, the main visible movement comes from bending and extending the elbows while the body stays near horizontal. In a Human Flag Raise, the arms remain mostly straight while the entire body moves through different angles.'
    },
    {
      question: 'Should both arms bend during a Human Flag Pull Up?',
      answer:
        'Yes. In the standard variation both elbows bend and then return to full extension. The two arms do not perform identical jobs, however: the upper arm contributes strongly to the inward pull while the lower arm contributes strongly to pressing the body back out.'
    },
  ],

  seo: {
    title:
      'Human Flag Pull Up: Technique & Progressions | Treethenics',

    description:
      'Learn the Human Flag Pull Up with proper technique, muscles worked, progressions and common mistakes for clean horizontal repetitions.',
  },

  imageUrl: '/images/exercises/human-flag-pull-up.png',
};
