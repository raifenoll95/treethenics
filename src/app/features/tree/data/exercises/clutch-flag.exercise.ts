import { Exercise } from '../../../../shared/models/exercise.model';

export const CLUTCH_FLAG: Exercise = {
  id: 'clutch-flag',
  name: 'Clutch Flag',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'shoulders',
    'back'
  ],

  primaryMuscles: [
    'obliques',
    'abdominals',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'upper-back',
    'front-deltoids',
    'biceps',
    'forearms',
    'glutes'
  ],

  equipment: ['vertical-pole'],

  description:
    'The Clutch Flag is a static calisthenics hold performed against a vertical pole, where the athlete uses a clutch-style arm position to support the body horizontally. Strong lateral core tension and upper-body stability are required to keep the torso and legs extended parallel to the ground.',

  overview:
    'Stand beside a vertical pole and position the back of your upper arm and armpit against it. Use the upper arm to secure the pole around sternum height, then place the opposite arm lower and wedge its elbow firmly against the abdominal area while gripping the pole. Brace your core, lift your feet, and initially keep your knees bent. Once balanced, progressively extend your hips and legs until your entire body forms a straight horizontal line. Practice both sides to develop balanced control and strength.',

  howTo: [
    {
      title: 'Set the upper arm',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand beside the pole with the back of your armpit against it. Secure the pole with your upper arm and hand around sternum height.'
    },
    {
      title: 'Position the lower arm',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Grip the pole lower down with your opposite hand and wedge that elbow firmly into your abdominal area to create a stable support position.'
    },
    {
      title: 'Lift your feet',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Brace your core and lift both feet from the ground with your knees bent. Establish control of the clutch position before trying to extend your body.'
    },
    {
      title: 'Extend your body',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Gradually straighten your hips, knees, and legs until your body approaches a horizontal position. Maintain strong tension from your shoulders through your feet.'
    },
    {
      title: 'Hold the Clutch Flag',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Hold your body straight and approximately parallel to the ground. Keep breathing normally, maintain the arm positions, and repeat the skill on the opposite side.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips drop',
      description:
        'A Clutch Flag should create a strong horizontal body line. If your hips consistently fall below your shoulders and legs, return to a shorter-leg progression and rebuild control.'
    },
    {
      title: 'Losing the elbow support',
      description:
        'The lower elbow plays an important role in creating the clutch position against the torso. Allowing it to slide away can dramatically reduce stability and cause the body to rotate downward.'
    },
    {
      title: 'Extending the legs too early',
      description:
        'Straight legs create a much longer lever. First establish control with bent knees, then progressively extend the legs without losing your horizontal position.'
    },
    {
      title: 'Bending at the hips',
      description:
        'Avoid keeping the legs high by folding significantly at the hips. In the full Clutch Flag, the torso, hips, and legs should form one continuous body line.'
    },
    {
      title: 'Training only one side',
      description:
        'The Clutch Flag is strongly unilateral. Practice both orientations instead of always using your preferred side so that your technique and strength remain balanced.'
    },
  ],

  relatedExercises: [
    'human-flag',
    'side-plank',
    'one-arm-side-plank'
  ],

  faq: [
    {
      question: 'What is a Clutch Flag?',
      answer:
        'The Clutch Flag is a static calisthenics skill performed on a vertical pole where the arms create a clutch-style support against the pole and torso, allowing the athlete to hold the body horizontally off the ground.'
    },
    {
      question: 'What muscles does the Clutch Flag work?',
      answer:
        'The obliques and other core muscles work strongly to maintain the lateral body position, while the lats, shoulders, arms, and forearms stabilize the upper body against the pole. The glutes also help keep the hips extended and the body straight.'
    },
    {
      question: 'What is the difference between a Clutch Flag and a Human Flag?',
      answer:
        'A Human Flag normally uses two separated hands on the pole with one arm pulling and the other pushing. A Clutch Flag uses a different support mechanism, with the pole secured around the upper arm and armpit while the opposite elbow is braced against the torso.'
    },
    {
      question: 'How can I make the Clutch Flag easier?',
      answer:
        'Begin with both knees bent to shorten the lever. As the position becomes stable, extend the legs partially and gradually work towards keeping both legs completely straight.'
    },
    {
      question: 'Should I train the Clutch Flag on both sides?',
      answer:
        'Yes. Because the skill places very different demands on each side of the body, practicing both orientations is useful for developing balanced strength, coordination, and technique.'
    },
  ],

  seo: {
    title:
      'Clutch Flag: Technique, Muscles & Progression | Treethenics',

    description:
      'Learn how to perform the Clutch Flag with proper pole position, core tension and body alignment, including progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/clutch-flag.png',
};
