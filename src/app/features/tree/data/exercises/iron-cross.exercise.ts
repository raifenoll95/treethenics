import { Exercise } from '../../../../shared/models/exercise.model';

export const IRON_CROSS: Exercise = {
  id: 'iron-cross',
  name: 'Iron Cross',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'biceps'],

  primaryMuscles: [
    'chest',
    'latissimus-dorsi',
    'biceps'
  ],

  secondaryMuscles: [
    'front-deltoids',
    'upper-back',
    'forearms',
    'abdominals'
  ],

  equipment: ['rings'],

  description:
    'The Iron Cross is an elite straight-arm rings skill where you hold your body vertically between the rings with both arms extended horizontally to the sides. It requires exceptional shoulder adduction strength, straight-arm control, and stability through the shoulders and elbows.',

  overview:
    'The Iron Cross should be developed through progressive assistance rather than repeated full attempts. Build strong ring support first, then gradually lower your straight arms away from your body using bands, counterweights, a spotter, or dedicated cross trainers. As your strength improves, reduce the assistance until you can reach the full position with your arms horizontal, elbows locked, and body vertical. Progress slowly because the elbows, biceps, and shoulders must adapt to extremely demanding straight-arm loading.',

  howTo: [
    {
      title: 'Build your ring support',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a stable straight-arm support on the rings. Keep your elbows locked and learn to control both rings without allowing your shoulders or arms to collapse.'
    },
    {
      title: 'Start with an assisted cross',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use bands, a counterweight, a spotter, or a cross trainer to reduce the load. Practice the actual cross position with straight elbows instead of trying to compensate by bending your arms.'
    },
    {
      title: 'Increase the arm angle',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually move your straight arms farther away from your sides. Keep your body vertical and lower only as far as you can control without losing your elbow or shoulder position.'
    },
    {
      title: 'Reach the horizontal position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue reducing assistance until your arms can reach approximately horizontal at shoulder level. Keep both sides symmetrical and prevent your hands from drifting significantly forward or backward.'
    },
    {
      title: 'Hold the Iron Cross',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the full position with locked elbows, straight arms, and your body hanging vertically between the rings. Keep the rings controlled and maintain active tension instead of simply sinking into the shoulders.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Iron Cross is a straight-arm strength skill. Bending your elbows shortens the effective lever and changes the movement substantially. Increase assistance if you cannot maintain full elbow extension.'
    },
    {
      title: 'Attempting the full cross too early',
      description:
        'The full position creates extreme straight-arm loading. Use assisted holds and gradually reduce assistance instead of repeatedly dropping into a position your shoulders and elbows cannot yet control.'
    },
    {
      title: 'Keeping the arms too high',
      description:
        'A partial cross is a useful progression, but it is not the full skill. In the complete Iron Cross, both arms reach approximately horizontal at shoulder level while the body remains vertical.'
    },
    {
      title: 'Losing symmetry',
      description:
        'Avoid lowering one arm farther than the other or twisting your torso between the rings. Use enough assistance to keep both shoulders and hands at approximately the same height.'
    },
  ],

  relatedExercises: [
    'ring-support',
    'inverted-cross',
    'maltese'
  ],

  faq: [
    {
      question: 'What is an Iron Cross?',
      answer:
        'The Iron Cross is a static rings skill where you hold your body vertically between two rings while your straight arms extend horizontally out to the sides. The position requires exceptional straight-arm shoulder strength and control.'
    },
    {
      question: 'What muscles does the Iron Cross work?',
      answer:
        'The Iron Cross strongly challenges the muscles that produce and stabilize shoulder adduction, including the chest and lats, while the biceps and surrounding shoulder and arm musculature help maintain the demanding straight-arm position. The forearms and core also contribute to ring and body stability.'
    },
    {
      question: 'Should my arms be completely straight?',
      answer:
        'Yes. Locked elbows are a defining feature of the Iron Cross. If your elbows bend as you lower towards horizontal, use more assistance or a shorter-lever progression rather than forcing the full position.'
    },
    {
      question: 'How should I progress towards an Iron Cross?',
      answer:
        'First develop strong and stable ring support. Then train assisted Cross holds using bands, a counterweight, a spotter, or dedicated forearm supports. Gradually increase the arm angle or reduce assistance while preserving straight elbows until you can control the full horizontal-arm position.'
    },
  ],

  seo: {
    title:
      'Iron Cross: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Iron Cross on rings with proper straight-arm technique, muscles worked, assisted progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/iron-cross.png',
};
