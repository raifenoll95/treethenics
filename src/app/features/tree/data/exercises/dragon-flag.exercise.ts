import { Exercise } from '../../../../shared/models/exercise.model';

export const DRAGON_FLAG: Exercise = {
  id: 'dragon-flag',
  name: 'Dragon Flag',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals',
    'obliques'
  ],

  secondaryMuscles: [
    'latissimus-dorsi',
    'glutes',
    'quadriceps',
    'forearms'
  ],

  equipment: ['weight-bench','floor'],

  description:
    'The dragon flag is an advanced core exercise where you anchor your upper body, lift your hips, and move your torso and legs together as one rigid lever. Your shoulders and upper back remain supported while your abs resist the powerful tendency for your lower back to arch as your body approaches horizontal.',

  overview:
    'The dragon flag is much more than a difficult leg raise. Your shoulders stay anchored while your torso, hips, and legs move together as one long lever. Start with tucked variations and controlled negatives before gradually extending your legs. The closer a straight body gets to horizontal, the greater the leverage and the harder your core must work to maintain position. Only lower as far as you can without folding at the hips or losing control of your lower back.',

  howTo: [
    {
      title: 'Set up a secure anchor',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on a sturdy bench or padded surface and firmly grip a secure support behind your head. Use your hands and upper body to create a stable anchor, but keep the load across your shoulders and upper back rather than your neck.'
    },
    {
      title: 'Build the position with a tuck',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bring your knees towards your chest and curl your pelvis away from the bench. Lift your hips until your weight is supported through your shoulders and upper back, then practice controlling the position with your knees bent.'
    },
    {
      title: 'Progress through longer levers',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually extend your legs as your control improves. Progress from a tuck to one-leg, straddle, or straight-leg variations rather than immediately attempting the full lever.'
    },
    {
      title: 'Lower as one rigid unit',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Brace your abs, squeeze your glutes, and slowly lower your shoulders-to-feet body line towards horizontal. Keep your hips extended and stop the descent as soon as your lower back begins to arch or your body folds at the hips.'
    },
    {
      title: 'Reverse the movement',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'From your lowest controlled position, maintain the same rigid body shape and raise yourself back towards vertical. If you cannot yet lift the full lever, perform controlled negatives and reset with a shorter-lever position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending at the hips',
      description:
        'Do not turn the dragon flag into a straight-leg raise. Your torso and legs should behave like one connected lever. If your hips fold as you approach the floor, shorten the lever or reduce your range of motion.'
    },
    {
      title: 'Arching the lower back',
      description:
        'Keep your abs and glutes engaged as the leverage increases. Stop the descent before your ribs flare and your lower back falls into excessive extension. A higher but controlled dragon flag is better than reaching horizontal with a broken body line.'
    },
    {
      title: 'Dropping through the negative',
      description:
        'The lowering phase is one of the most useful parts of the exercise. Resist gravity throughout the descent instead of allowing your hips and legs to suddenly fall towards the bench.'
    },
    {
      title: 'Supporting yourself on your neck',
      description:
        'Your shoulders and upper back should provide the support against the bench or floor. Do not balance your bodyweight on your neck or use your head as the main contact point.'
    },
  ],

  relatedExercises: [
    'hollow-body-hold',
    'hanging-leg-raise',
    'front-lever'
  ],

  faq: [
    {
      question: 'What muscles does the dragon flag work?',
      answer:
        'The dragon flag primarily challenges your abdominal wall to maintain a rigid trunk and resist lower-back extension. Your obliques contribute to trunk stability, while your lats and arms help anchor the upper body and your glutes and quadriceps keep the hips and knees extended.'
    },
    {
      question: 'Is the dragon flag a leg raise?',
      answer:
        'No. In a leg raise, your legs move relative to a comparatively stable torso. During a strict dragon flag, your torso, hips, and legs move together as one rigid lever while your shoulders and upper back remain anchored.'
    },
    {
      question: 'How should I progress towards a full dragon flag?',
      answer:
        'Start with strong hollow body control, then practice tuck dragon flags and slow negatives. Gradually increase the lever with one-leg, straddle, or partially extended variations until you can lower and raise a straight body without bending at the hips or arching your lower back.'
    },
    {
      question: 'Why can I lower a dragon flag but not raise back up?',
      answer:
        'The negative is easier to control than reversing the full lever back upwards. This is normal while learning. Keep training slow negatives and shorter-lever repetitions rather than using momentum or breaking your body position to complete the upward phase.'
    },
  ],

  seo: {
    title:
      'Dragon Flag: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Dragon Flag with proper technique, muscles worked, common mistakes and progressions from tuck and negatives to full reps.',
  },

  imageUrl: '/images/exercises/dragon-flag.png',
};
