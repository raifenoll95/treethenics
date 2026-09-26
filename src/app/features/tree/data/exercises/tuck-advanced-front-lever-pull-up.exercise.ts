import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_ADVANCED_FRONT_LEVER_PULL_UP: Exercise = {
  id: 'tuck-advanded-front-lever-pull-up',
  name: 'Tuck Advanced Front Lever Pull Up',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'static',

  targetAreas: ['back', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'biceps',
    'forearms',
    'glutes'
  ],

  equipment: [
    'pull-up-bar',
    'rings'
  ],

  description:
    'Hang from a pull-up bar with your arms straight, engage your core and back muscles, and lift your body until it is parallel to the ground while maintaining a straight body position. Start with tuck front lever holds and controlled front lever raises to develop core strength, shoulder stability, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations before attempting the full front lever with proper alignment and stability.',

  overview:
    'The front lever is an advanced static calisthenics skill performed while hanging from a pull-up bar or gymnastic rings. The body is held horizontally with the arms straight and the torso, hips, and legs aligned. It requires strong lats, significant core tension, straight-arm strength, and full-body control to maintain a stable position parallel to the ground.',

  howTo: [
    {
      title: 'Start from a dead hang',
      description:
        'Grip the bar around shoulder width and begin from a controlled dead hang with your arms completely straight.',
    },
    {
      title: 'Set your shoulders',
      description:
        'Depress your shoulders and engage your lats before lifting your body. Keep your elbows locked throughout the movement.',
    },
    {
      title: 'Create full-body tension',
      description:
        'Brace your core, squeeze your glutes, and keep your legs together to create a rigid body line from your shoulders to your feet.',
    },
    {
      title: 'Raise into the front lever',
      description:
        'Lift your body until it becomes parallel to the ground while maintaining straight arms and keeping your hips in line with your shoulders.',
    },
    {
      title: 'Hold the position',
      description:
        'Maintain the horizontal position with controlled breathing and full-body tension, then lower yourself under control.',
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips drop',
      description:
        'Dropping the hips breaks the horizontal body line and reduces the tension required for a clean front lever. Keep your glutes and core engaged throughout the hold.',
    },
    {
      title: 'Bending the elbows',
      description:
        'The front lever is a straight-arm skill. Bending the elbows changes the strength demand and usually indicates that the current progression is too difficult.',
    },
    {
      title: 'Losing shoulder tension',
      description:
        'Relaxing the shoulders makes the position unstable and reduces effective lat engagement. Maintain active shoulders throughout the entire hold.',
    },
  ],

  relatedExercises: [
    'back-lever',
  ],

  faq: [
    {
      question: 'How long does it take to learn the Front Lever?',
      answer:
        'The time required to learn the Front Lever varies considerably depending on your starting strength, body composition, training experience and consistency. Athletes with a strong pulling and core-strength base may progress faster, while others may need many months or longer. Focus on mastering each progression rather than rushing toward the full Front Lever.',
    },
    {
      question: 'How strong do you need to be for a Front Lever?',
      answer:
        'You need strong lats, upper back and core muscles together with good straight-arm strength and body tension. There is no single strength test that guarantees a Front Lever, but being comfortable with pull-ups, hanging exercises and easier Front Lever progressions provides a useful foundation.',
    },
    {
      question: 'How often should you train the Front Lever?',
      answer:
        'For many athletes, two to three focused Front Lever sessions per week can provide enough practice while allowing time for recovery. Training frequency should depend on your experience, total training volume and recovery. High-quality holds and controlled progressions are generally more useful than repeatedly training the skill while fatigued.',
    },
    {
      question: 'Is the Front Lever harder than the Back Lever?',
      answer:
        'They place different demands on the body, so the relative difficulty depends on the athlete. The Front Lever requires substantial pulling strength from the lats and upper back together with strong core tension, while the Back Lever places different demands on the shoulders and straight-arm position. Many athletes find one easier than the other.',
    },
    {
      question: 'Can you train the Front Lever on rings?',
      answer:
        'Yes. The Front Lever can be performed on both a pull-up bar and gymnastic rings. Rings introduce additional instability and require you to control each ring independently, so a pull-up bar may be easier when first learning the movement.',
    },
    {
      question: 'Why do my hips drop during the Front Lever?',
      answer:
        'Dropping hips usually means you are losing the full-body tension required to keep your body horizontal or that the progression is currently too demanding. Engage your core and glutes, maintain active shoulders and use an easier progression if you cannot keep your shoulders, hips and legs aligned.',
    },
  ],

  seo: {
      title:
        'Front Lever: How to Do It, Muscles & Progressions | Treethenics',

      description:
        'Learn how to do the Front Lever with proper technique, muscles worked, common mistakes, equipment and progressions from easier to advanced variations.',
    },

  imageUrl: '/images/exercises/tuck-advanced-front-lever-pull-up.png',
};
