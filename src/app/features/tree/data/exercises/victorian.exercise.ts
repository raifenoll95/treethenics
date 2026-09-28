import { Exercise } from '../../../../shared/models/exercise.model';

export const VICTORIAN: Exercise = {
  id: 'victorian',
  name: 'Victorian',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'shoulders', 'biceps'],

  primaryMuscles: [
    'rear-deltoids',
    'triceps',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'upper-back',
    'chest',
    'biceps',
    'forearms',
    'abdominals',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Victorian, also known as the Victorian Cross or Inverted Swallow, is an elite straight-arm rings skill where the body is held face-up and horizontal at approximately ring height while the arms remain extended wide beside the body. It demands exceptional shoulder extension strength, elbow stability, ring control, and full-body tension.',

  overview:
    'The Victorian is one of the most demanding straight-arm strength skills on rings. Unlike a Front Lever, where the hands remain above and in front of the body, the Victorian places the rings wide beside the torso while the body stays horizontal and face-up. Keep both elbows completely locked, maintain a rigid line from shoulders to feet, and prevent the hips from dropping below ring height. Build the position with substantial assistance before gradually progressing towards an unsupported full hold.',

  howTo: [
    {
      title: 'Set the rings',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Take an even grip on both rings and establish straight elbows before loading the target position. Keep the rings symmetrical and prepare a controlled assisted entry.'
    },
    {
      title: 'Open the arms',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Move your straight arms outward and beside your body while turning into a face-up horizontal position. Keep the elbows locked as the rings move away from the Front Lever position.'
    },
    {
      title: 'Raise to ring height',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Use strong shoulder extension and upper-body tension to bring your shoulders, hips, and legs towards a horizontal line approximately level with the rings.'
    },
    {
      title: 'Establish the body line',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your legs straight and together, hips extended, and trunk rigid. Maintain equal pressure through both rings without allowing one side to drop.'
    },
    {
      title: 'Hold with straight arms',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the horizontal position with both elbows completely extended and the rings controlled beside your body. Exit the hold before your arms bend or your body line collapses.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a wide Front Lever',
      description:
        'Keeping the hands too far overhead leaves the movement closer to a Wide Front Lever. In the Victorian, the arms open much farther beside the body and the torso rises towards ring height.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The strict Victorian is a straight-arm strength skill. Significant elbow flexion changes the mechanics and reduces the specific shoulder and elbow demands of the full position.'
    },
    {
      title: 'Holding the body below the rings',
      description:
        'A strong horizontal position below ring height can still be useful as a progression, but the full Victorian brings the body approximately to the level of the rings while maintaining the face-up position.'
    },
    {
      title: 'Resting on the rings or straps',
      description:
        'Do not support the position by resting your forearms, wrists, or body against the rings or straps. The strict rings variation is supported through the hands with the arms actively maintaining the position.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'touch-front-lever',
    'maltese-rings'
  ],

  faq: [
    {
      question: 'What is the Victorian?',
      answer:
        'The Victorian is an elite straight-arm rings hold where the body remains face-up and horizontal at approximately ring height while the arms extend wide beside the body. In artistic gymnastics, the position is known as the Inverted Swallow.'
    },
    {
      question: 'Is the Victorian the same as a Front Lever?',
      answer:
        'No. Both positions hold the body horizontally and face-up, but a Front Lever keeps the hands overhead while the body hangs below the apparatus. The Victorian opens the arms much farther beside the body and raises the torso towards ring height.'
    },
    {
      question: 'What muscles does the Victorian work?',
      answer:
        'The rear deltoids and triceps are heavily involved in maintaining the straight-arm shoulder-extension position. The lats and upper back contribute to shoulder and scapular control, while the chest, arms, forearms, and core help stabilize the rings and maintain the horizontal body line.'
    },
    {
      question: 'Do I need a Front Lever before training the Victorian?',
      answer:
        'A strong Front Lever is an excellent foundation because it develops horizontal straight-arm pulling strength and body-line control. However, the Victorian has a much wider and more demanding shoulder position, so Front Lever strength alone is not enough.'
    },
    {
      question: 'How do I progress towards the Victorian?',
      answer:
        'Build strong Front Lever and ring foundations first, then develop Wide Front Lever positions and Victorian-specific assisted holds. Leg-supported, counterweighted, straddle, and spotter-assisted Victorian holds can progressively introduce the final arm and shoulder position before attempting the full skill.'
    },
  ],

  seo: {
    title:
      'Victorian Cross: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Victorian Cross on rings with strict straight-arm technique, muscles worked, progressions and the differences from Front Lever.',
  },

  imageUrl: '/images/exercises/victorian.png',
};
