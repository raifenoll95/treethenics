import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_DRAGON_FLAG: Exercise = {
  id: 'one-arm-dragon-flag',
  name: 'One Arm Dragon Flag',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'core',

  targetAreas: ['core', 'back'],

  primaryMuscles: [
    'abdominals',
    'obliques',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'glutes',
    'forearms',
    'upper-back',
    'triceps'
  ],

  equipment: ['weight-bench','floor'],

  description:
    'The One Arm Dragon Flag is an advanced unilateral variation of the Dragon Flag where you lower and raise your rigid body while maintaining the upper-body anchor with only one arm. Removing one hand greatly increases the anti-rotation, stabilization, and pulling demands of the exercise.',

  overview:
    'The One Arm Dragon Flag keeps the same fundamental body position as a regular Dragon Flag: your shoulders and upper back provide the base while your torso and legs move together as one rigid lever. The difference is that only one arm maintains the anchor behind you, creating a strong rotational challenge in addition to the normal anti-extension demand. Master the standard Dragon Flag first, then progressively reduce the contribution of one hand before attempting completely unsupported one-arm repetitions.',

  howTo: [
    {
      title: 'Master the Dragon Flag',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Build controlled full Dragon Flags first. Keep your body rigid from shoulders to feet and make sure you can control both the lowering and raising phases without bending significantly at the hips.'
    },
    {
      title: 'Reduce one hand',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Perform Dragon Flags while gradually reducing the grip of one hand. Start by using fewer fingers or a lighter grip while your main arm takes progressively more of the anchoring load.'
    },
    {
      title: 'Practice one-arm negatives',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Begin from the raised position, release the assisting hand, and lower your straight body as slowly as possible using one arm for the upper-body anchor. Stop before your hips or lower back lose position.'
    },
    {
      title: 'Control the bottom range',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Gradually extend your one-arm negative closer to horizontal while resisting both extension and rotation. Keep your shoulders stable and prevent your hips from twisting towards the working side.'
    },
    {
      title: 'Complete the full repetition',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower under control with one arm, maintain a rigid body near the bottom, and reverse the movement without piking at the hips. Train both arms rather than developing the skill exclusively on your stronger side.'
    },
  ],

  commonMistakes: [
    {
      title: 'Removing one hand too early',
      description:
        'A shaky standard Dragon Flag is not a good foundation for the one-arm version. First develop strong control through the full two-arm movement, then gradually unload one hand instead of immediately removing it.'
    },
    {
      title: 'Rotating the hips',
      description:
        'The unilateral anchor creates a strong tendency for your torso and pelvis to rotate. Brace your obliques and keep your shoulders, hips, and legs as controlled as possible instead of twisting to shorten the effective lever.'
    },
    {
      title: 'Piking at the hips',
      description:
        'Folding at the hips makes the lever considerably easier. Keep your glutes engaged and move your torso and legs together rather than raising the legs first and letting the hips follow.'
    },
    {
      title: 'Dropping through the negative',
      description:
        'Do not sacrifice the eccentric phase just to reach a lower position. If you cannot resist the descent with one arm, use partial range or light assistance from the second hand until you can control more of the movement.'
    },
  ],

  relatedExercises: [
    'dragon-flag',
    'dragon-press',
    'front-lever'
  ],

  faq: [
    {
      question: 'What is a One Arm Dragon Flag?',
      answer:
        'It is an advanced Dragon Flag variation performed with only one arm maintaining the upper-body anchor. Your shoulders and upper back remain supported while your torso and legs move as a rigid lever, creating additional anti-rotation and unilateral upper-body demands.'
    },
    {
      question: 'What muscles does the One Arm Dragon Flag work?',
      answer:
        'The abdominals maintain the rigid trunk position while the obliques become especially important for resisting rotation. The lats and surrounding upper-body muscles help maintain the one-arm anchor, while the glutes keep the hips extended and the body connected as one lever.'
    },
    {
      question: 'Should I master the Dragon Flag first?',
      answer:
        'Yes. A controlled full Dragon Flag is the most specific foundation because the one-arm version keeps the same basic body mechanics while removing one side of the upper-body anchor. Once the standard movement is strong, progressively reduce the assistance from one hand.'
    },
    {
      question: 'How do I progress to a One Arm Dragon Flag?',
      answer:
        'Start with strong full Dragon Flags, then reduce the grip of one hand using fewer fingers or lighter assistance. Progress to one-arm negatives and partial repetitions before attempting the complete movement with one arm.'
    },
    {
      question: 'Is a One Arm Dragon Flag the same as a One Arm Dragon Press?',
      answer:
        'No. In a One Arm Dragon Flag, the upper back and shoulders remain the main contact with the surface while one arm maintains the anchor behind you. A Dragon Press uses a different support mechanism and requires substantially different straight-arm pressing and shoulder strength.'
    },
  ],

  seo: {
    title:
      'One Arm Dragon Flag: Technique & Progressions | Treethenics',

    description:
      'Learn the One Arm Dragon Flag with proper technique, muscles worked, one-arm negatives, progressions and common mistakes for this advanced core skill.',
  },

  imageUrl: '/images/exercises/one-arm-dragon-flag.png',
};
