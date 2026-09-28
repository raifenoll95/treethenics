import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_RINGS: Exercise = {
  id: 'full-planche-rings',
  name: 'Full Planche Rings',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'biceps'
  ],

  secondaryMuscles: [
    'chest',
    'triceps',
    'abdominals',
    'forearms',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Full Planche on Rings is an elite straight-arm strength skill where you support your entire body horizontally above a pair of gymnastic rings. The moving rings make the position significantly less stable than a floor or parallettes planche, demanding exceptional shoulder strength, straight-arm control, and full-body tension.',

  overview:
    'The Full Planche on Rings should be treated as its own progression even if you already have a strong Full Planche on the floor or parallettes. Start by developing stable straight-arm support on rings, then rebuild your planche through Tuck, Advanced Tuck, and Straddle positions. Keep the elbows completely locked, actively stabilize the rings, and maintain your shoulders forward while your body stays horizontal. Progress only when you can control both the body position and the rings without your arms collapsing or the rings drifting uncontrollably.',

  howTo: [
    {
      title: 'Build straight-arm ring control',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a stable straight-arm support on the rings before serious planche work. Keep your elbows locked and learn to actively control the rings instead of allowing them to shake, rotate, or drift freely.'
    },
    {
      title: 'Rebuild your planche on rings',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Start with a Tuck Planche on the rings even if you can perform harder planche variations on a fixed surface. Lean your shoulders forward, keep your arms straight, and learn to stabilize the rings while your feet remain off the floor.'
    },
    {
      title: 'Progress to Advanced Tuck and Straddle',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually open your hips into Advanced Tuck and then extend your legs into a Straddle Planche. Keep your hips around shoulder height and make sure the rings remain controlled as the lever becomes longer.'
    },
    {
      title: 'Narrow the straddle',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Bring your straight legs progressively closer together while maintaining the same forward lean and ring stability. Use narrower straddle positions to bridge the strength gap between Straddle and Full Planche.'
    },
    {
      title: 'Hold the Full Planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Bring your legs completely together and hold your body approximately parallel to the floor. Keep your elbows locked, shoulders active, hips level, and rings stable while maintaining tension from your shoulders to your feet.'
    },
  ],

  commonMistakes: [
    {
      title: 'Starting with your floor progression',
      description:
        'Do not assume that a Full Planche on the floor means you should immediately attempt the same position on rings. The unstable supports create a different stabilization challenge. Start with shorter ring planche progressions and rebuild your control.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Full Planche on Rings is a straight-arm strength skill. Keep your elbows completely extended throughout the hold. If they begin to bend as the rings move, return to a shorter lever and strengthen that position.'
    },
    {
      title: 'Letting the rings move uncontrollably',
      description:
        'Some movement is unavoidable, but the rings should not continuously drift apart, collapse inward, or rotate without control. Build stronger ring support and use an easier planche progression until you can actively stabilize both hands.'
    },
    {
      title: 'Using the straps for support',
      description:
        'Do not allow your forearms to press against the straps to create extra stability. Keep the position supported through your hands and straight arms so the rings remain the actual points of support.'
    },
  ],

  relatedExercises: [
    'full-planche',
    'straddle-planche-rings',
    'maltese'
  ],

  faq: [
    {
      question: 'Is Full Planche on Rings harder than Full Planche on the floor?',
      answer:
        'The rings add instability and require considerably more active stabilization from your shoulders and arms. Even if you already have a strong Full Planche on a fixed surface, you may need to return to Tuck, Advanced Tuck, or Straddle Planche when you begin training on rings.'
    },
    {
      question: 'Do I need a Full Planche before training it on rings?',
      answer:
        'You can begin easier ring planche progressions before achieving a Full Planche on the floor, but having strong planche fundamentals on a stable surface is extremely useful. Ring planche should still be progressed separately rather than assuming your floor level will transfer immediately.'
    },
    {
      question: 'Should my arms be straight in a Ring Planche?',
      answer:
        'Yes. A standard Full Planche on Rings is performed with fully extended elbows. Straight-arm strength and the ability to stabilize that elbow position are fundamental parts of the skill.'
    },
    {
      question: 'How should I progress towards a Full Planche on Rings?',
      answer:
        'First develop strong ring support and planche strength on stable surfaces. Then rebuild the skill on rings through Tuck, Advanced Tuck, Straddle, narrower Straddle, and finally Full Planche. Light band assistance can also help you practice longer lever positions while learning to control the rings.'
    },
  ],

  seo: {
    title:
      'Full Planche on Rings: Technique & Progressions | Treethenics',

    description:
      'Learn the Full Planche on Rings with proper straight-arm technique, ring stabilization, common mistakes and progressions from Tuck to Full.',
  },

  imageUrl: '/images/exercises/full-rings.png',
};
