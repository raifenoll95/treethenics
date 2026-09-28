import { Exercise } from '../../../../shared/models/exercise.model';

export const SLOW_MUSCLE_UP: Exercise = {
  id: 'slow-muscle-up',
  name: 'Slow Muscle Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'chest', 'triceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'triceps'
  ],

  secondaryMuscles: [
    'chest',
    'front-deltoids',
    'upper-back',
    'forearms',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Slow Muscle Up is a strict bar Muscle Up performed under continuous control instead of using an explosive pull or kip to pass the transition. It requires exceptional pulling strength, transition strength, and control as you move gradually from below the bar to a support position above it.',

  overview:
    'A normal strict Muscle Up can still use significant pulling speed to carry the body through the transition. The Slow Muscle Up removes much of that advantage. Pull progressively towards the bar, keep your body close, and continue applying force as your wrists, elbows, and shoulders move around the bar. The goal is a smooth transition with no obvious jump, kick, or sudden acceleration. Build strong strict Muscle Ups, high pull-ups, straight-bar dips, and controlled transition drills before training the full movement.',

  howTo: [
    {
      title: 'Start from a controlled hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin below the bar with a secure grip and a quiet body position. Brace your core and avoid creating a large swing before initiating the pull.'
    },
    {
      title: 'Pull gradually towards the bar',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin pulling without an explosive acceleration. Keep your body close to the bar and continue producing force as your chest approaches bar height.'
    },
    {
      title: 'Control the transition',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue moving your shoulders over the bar while your elbows travel from below and in front of it towards the support position. Avoid suddenly throwing your chest forward to escape the hardest range.'
    },
    {
      title: 'Enter the straight-bar dip',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Once your shoulders are above the bar, stabilize the low dip position and keep the movement continuous instead of resting on the bar.'
    },
    {
      title: 'Press to support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Extend your elbows under control until you reach a stable support above the bar. The entire repetition should look deliberate and continuous from hang to lockout.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into an explosive Muscle Up',
      description:
        'Pulling as fast as possible and using momentum to fly through the transition defeats the purpose of the variation. Reduce the speed while maintaining enough force to keep moving through the sticking point.'
    },
    {
      title: 'Using a hidden kip',
      description:
        'A sudden hip drive or leg swing can create enough momentum to bypass the hardest portion. Keep your lower body controlled and make the transition primarily with upper-body strength.'
    },
    {
      title: 'Stopping at the transition',
      description:
        'Resting your chest or abdomen heavily on the bar breaks the continuous movement. Use assisted slow transitions if you cannot yet move smoothly from the pull into the dip.'
    },
    {
      title: 'Chicken-winging over the bar',
      description:
        'Allowing one elbow to transition far before the other turns the movement into an asymmetric turnover. Reduce the difficulty and develop enough transition strength to move both sides over the bar together.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'high-pull-up',
    'straight-bar-dip'
  ],

  faq: [
    {
      question: 'What is a Slow Muscle Up?',
      answer:
        'The Slow Muscle Up is a strict Muscle Up performed with deliberate control from the hang to the top support. Instead of relying on explosive pulling speed or a kip, you continue producing force through the entire pull and transition.'
    },
    {
      question: 'Why is a Slow Muscle Up harder than a regular Muscle Up?',
      answer:
        'An explosive Muscle Up can use the velocity generated during the pull to help carry your body through the transition. Moving slowly reduces that momentum advantage, so you must produce more controlled strength through the difficult positions around the bar.'
    },
    {
      question: 'Do I need a false grip for a Slow Muscle Up?',
      answer:
        'A higher wrist position or false-grip-style setup can make a very slow transition easier because less hand repositioning is required around the bar. However, technique varies between athletes, so the defining feature of this variation is the slow, strict transition rather than one mandatory grip.'
    },
    {
      question: 'Should I learn the regular Muscle Up first?',
      answer:
        'Yes. First develop a clean Muscle Up and understand the pull, transition, and straight-bar dip. Then progressively slow the movement and strengthen the transition instead of trying to learn every component under maximum time under tension from the beginning.'
    },
    {
      question: 'How do I train the Slow Muscle Up transition?',
      answer:
        'Use slow Muscle Up negatives, low-bar or foot-assisted transitions, high pull-ups, and controlled straight-bar dips. Gradually reduce assistance while spending more time in the transition until you can connect the pull and press smoothly.'
    },
  ],

  seo: {
    title:
      'Slow Muscle Up: Strict Technique & Progressions | Treethenics',

    description:
      'Learn the Slow Muscle Up with strict technique, controlled transition drills, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/slow-muscle-up.png',
};
