import { Exercise } from '../../../../shared/models/exercise.model';

export const X_GRIP_MUSCLE_UP: Exercise = {
  id: 'x-grip-muscle-up',
  name: 'X Grip Muscle Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'chest', 'triceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'triceps'
  ],

  secondaryMuscles: [
    'upper-back',
    'chest',
    'front-deltoids',
    'forearms',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The X Grip Muscle Up is an advanced Muscle Up variation performed with the hands crossed on the bar. The crossed grip creates an asymmetrical pulling and transition pattern, requiring strong explosive pulling, wrist control, and coordination to move from below the bar into a stable support position.',

  overview:
    'The X Grip Muscle Up keeps the basic structure of a bar Muscle Up but changes the grip completely. Start below the bar with your arms crossed and both hands gripping securely, then pull explosively while controlling the natural tendency of the torso to rotate. As your chest rises towards the bar, guide the crossed arms through the transition and bring your shoulders above the bar before pressing into support. A strong regular Muscle Up and controlled X Grip Pull Ups should come first, since the crossed position makes both the pull and transition considerably more technical.',

  howTo: [
    {
      title: 'Set the X grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Hang from the bar with your hands close together and your arms crossed into an X. Make sure both hands have a secure grip before loading the position.'
    },
    {
      title: 'Pull explosively',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Brace your core and pull as high as possible while maintaining the crossed grip. Generate enough height to bring your chest towards and above the bar rather than stopping at chin level.'
    },
    {
      title: 'Control the rotation',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Resist excessive twisting as you rise. The crossed grip is naturally asymmetrical, so keep your trunk tight and guide your body towards the center of the bar.'
    },
    {
      title: 'Transition over the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'As you reach maximum pulling height, bring your shoulders forward and above the bar while allowing the wrists and elbows to move into the support position.'
    },
    {
      title: 'Press to support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish by extending your elbows until you reach a controlled support above the bar. Stabilize the position before reversing the movement or returning to the ground.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pulling too low',
      description:
        'A chin-height Pull Up does not create enough space for the crossed-arm transition. Develop explosive X Grip Pull Ups and high pulls before forcing the turnover.'
    },
    {
      title: 'Losing the crossed grip',
      description:
        'Do not uncross or reposition your hands during the repetition if you are performing the strict X Grip variation. Establish a secure X position before starting the pull.'
    },
    {
      title: 'Letting the body rotate excessively',
      description:
        'Some asymmetry is inherent to the grip, but uncontrolled twisting makes the transition inconsistent. Brace your core and keep the movement centered around the bar.'
    },
    {
      title: 'Forcing the wrists through the transition',
      description:
        'The crossed position can place the wrists in an unusual angle. Build the grip and transition progressively instead of forcing a painful range of motion.'
    },
    {
      title: 'Skipping X Grip Pull Ups',
      description:
        'Being able to perform a regular Muscle Up does not automatically give you control in the crossed position. Develop strong X Grip Pull Ups before combining the grip with the full transition.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'x-grip-pull-up',
    'slow-muscle-up'
  ],

  faq: [
    {
      question: 'What is an X Grip Muscle Up?',
      answer:
        'The X Grip Muscle Up is a bar Muscle Up variation performed with the arms crossed and the hands close together on the bar. You maintain the crossed grip while pulling, transitioning over the bar, and reaching support.'
    },
    {
      question: 'Is X Grip Muscle Up the same as Mixed Grip Muscle Up?',
      answer:
        'No. Mixed Grip refers to using different hand orientations, typically with one hand pronated and the other supinated. X Grip refers specifically to crossing the arms and hands into an X-shaped grip.'
    },
    {
      question: 'What should I learn before the X Grip Muscle Up?',
      answer:
        'First develop a reliable regular Muscle Up. Then practice X Grip hangs, X Grip Pull Ups, and increasingly high pulls so you can control the crossed position before adding the transition.'
    },
    {
      question: 'Why is the X Grip Muscle Up harder than a regular Muscle Up?',
      answer:
        'The crossed grip makes the pull asymmetrical and changes the wrist, elbow, and shoulder positions during the transition. This increases the coordination and rotational-control demands compared with a normal symmetrical grip.'
    },
    {
      question: 'Should I practice both X Grip orientations?',
      answer:
        'Yes. Alternate which arm crosses over the other so you develop the movement on both sides instead of becoming dependent on a single configuration.'
    },
  ],

  seo: {
    title:
      'X Grip Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the X Grip Muscle Up with proper crossed-grip technique, explosive pulling, transition progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/x-grip-muscle-up.png',
};
