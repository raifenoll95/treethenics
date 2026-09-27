import { Exercise } from '../../../../shared/models/exercise.model';

export const HUMAN_FLAG: Exercise = {
  id: 'human-flag',
  name: 'Human Flag',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'core',

  targetAreas: ['core', 'shoulders', 'back'],

  primaryMuscles: [
    'obliques',
    'front-deltoids',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'abdominals',
    'upper-back',
    'triceps',
    'forearms',
    'glutes'
  ],

  equipment: ['vertical-pole'],

  description:
    'The Human Flag is an advanced static calisthenics skill where you hold your entire body sideways and approximately parallel to the ground while gripping a vertical bar. The top arm pulls while the bottom arm pushes, and your core keeps your hips and legs aligned in a rigid horizontal position.',

  overview:
    'The Human Flag combines straight-arm pushing and pulling strength with lateral core control. Start by learning the push-pull mechanics on a vertical bar, then develop control through vertical, tuck, one-leg, and straddle variations before attempting the full legs-together position. Train both sides and increase the lever gradually while keeping your elbows straight, shoulders active, and hips aligned with the rest of your body.',

  howTo: [
    {
      title: 'Learn the push-pull position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a secure vertical bar with one hand above the other. Keep both elbows straight and learn to pull with the top arm while strongly pushing away from the bar with the bottom arm.'
    },
    {
      title: 'Build your Tuck Human Flag',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Lift your feet and bring your knees towards your torso to shorten the lever. Keep your hips away from the bar and maintain active pressure through both arms instead of hanging mainly from the top hand.'
    },
    {
      title: 'Extend the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progress to an open tuck or one-leg Human Flag. Extend your body gradually while keeping your pelvis controlled and preventing your hips from rotating towards the floor.'
    },
    {
      title: 'Build your Straddle Human Flag',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extend both knees and spread your legs into a straddle. Keep your shoulders, hips, and legs approximately horizontal while maintaining the same push-pull action through your arms.'
    },
    {
      title: 'Close into the Full Human Flag',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Gradually bring your straight legs together until your body forms one long horizontal line. Keep both elbows extended, brace your core and glutes, and maintain active pressure through both arms for the entire hold.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying to pull with the top arm only',
      description:
        'The Human Flag is not simply a one-arm pulling exercise. The bottom arm must actively push against the bar while the top arm pulls. Losing that opposing pressure makes it much harder to keep your body away from the support.'
    },
    {
      title: 'Bending the bottom arm',
      description:
        'Keep the bottom elbow extended and actively push through the bar. Bending the arm changes your leverage and usually causes the shoulder and hips to collapse towards the support.'
    },
    {
      title: 'Letting your hips sag or rotate',
      description:
        'Your hips should remain aligned with your torso instead of falling or turning towards the ground. If you cannot control your pelvis, return to a tuck, one-leg, or wider straddle progression.'
    },
    {
      title: 'Training only your stronger side',
      description:
        'Most athletes naturally prefer one orientation, but repeatedly training only that side can create a large skill imbalance. Practice with each arm in the top and bottom positions, even if progress is different between sides.'
    },
  ],

  relatedExercises: [
    'tuck-human-flag',
    'straddle-human-flag',
    'human-flag-pull-up'
  ],

  faq: [
    {
      question: 'What muscles does the Human Flag work?',
      answer:
        'The Human Flag heavily challenges the obliques and the rest of the core while also requiring substantial shoulder, lat, upper-back, arm, and grip strength. The two arms perform different jobs: the top arm pulls while the bottom arm pushes against the support.'
    },
    {
      question: 'Should my arms be straight in a Human Flag?',
      answer:
        'Yes. In the standard Human Flag, both elbows remain extended. The top arm maintains pulling tension while the straight bottom arm pushes strongly into the bar to support the body.'
    },
    {
      question: 'How should I progress towards a Full Human Flag?',
      answer:
        'First learn the push-pull mechanics and become comfortable supporting yourself on a vertical bar. Then progressively lengthen the lever through Tuck, Open Tuck or One-Leg, Straddle, and finally Full Human Flag. Controlled negatives from a higher position can also help you build strength through the horizontal range.'
    },
    {
      question: 'Is the Human Flag mainly a core exercise?',
      answer:
        'The core, especially the obliques, is extremely important for maintaining the sideways body line, but the Human Flag is a full-body skill. Strong shoulders, lats, arms, grip, and coordinated pushing and pulling are also necessary to support the horizontal position.'
    },
  ],

  seo: {
    title:
      'Human Flag: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Human Flag with proper push-pull technique, muscles worked, common mistakes and progressions from Tuck to Full Human Flag.',
  },

  imageUrl: '/images/exercises/human-flag.png',
};
