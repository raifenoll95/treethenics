import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_CROSS: Exercise = {
  id: 'inverted-cross',
  name: 'Inverted Cross',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'biceps'],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'triceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'upper-back',
    'biceps',
    'forearms',
    'abdominals'
  ],

  equipment: ['rings'],

  description:
    'The Inverted Cross is an elite straight-arm rings skill where you hold your body vertically upside down while extending both arms horizontally out to the sides. It combines exceptional shoulder strength with straight-arm control, ring stability, and the balance required to keep your body above two independent supports.',

  overview:
    'The Inverted Cross can be thought of as an inverted straight-arm cross position, but it should not be treated as simply lowering your arms from a Ring Handstand. The final position requires your body to remain vertical while both arms reach approximately horizontal at shoulder level with the elbows locked. Build the skill with assisted holds and progressively deeper arm positions, and develop the specific straight-arm shoulder strength separately before attempting an unsupported full hold.',

  howTo: [
    {
      title: 'Build a strong Ring Handstand',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a stable Ring Handstand with straight elbows and good control of the rings. You should be comfortable balancing above the rings before adding the much greater strength demand of lowering your arms towards the cross position.'
    },
    {
      title: 'Develop specific straight-arm strength',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use assisted Inverted Cross positions and controlled straight-arm conditioning to strengthen the shoulders through the required range. Keep the elbows locked and increase resistance gradually.'
    },
    {
      title: 'Lower into partial positions',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'From an assisted inverted position, gradually move your straight arms farther out to the sides. Maintain a vertical torso and control both rings instead of allowing your body to fall between them.'
    },
    {
      title: 'Approach horizontal arms',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Progressively reduce assistance until you can reach a position where your straight arms are close to shoulder height. Keep your body stacked vertically and avoid bending your elbows to compensate for insufficient strength.'
    },
    {
      title: 'Hold the Inverted Cross',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reach the full position with both arms straight and approximately horizontal while your body remains vertically inverted. Stabilize the rings and hold the position without allowing your arms to rise or your body to tip forward or backward.'
    },
  ],

  commonMistakes: [
    {
      title: 'Keeping the arms too high',
      description:
        'A partially lowered Ring Handstand is not yet a full Inverted Cross. In the complete position, the arms should reach approximately horizontal at shoulder level. Use assistance if you cannot reach that depth with control.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Inverted Cross is a straight-arm strength skill. Bending your elbows substantially changes the mechanics and reduces the required shoulder leverage. Use more assistance instead of compensating with bent arms.'
    },
    {
      title: 'Losing the vertical body line',
      description:
        'Because your center of mass is above the rings, balance is a major part of the skill. Avoid allowing your hips and legs to drift forward or backward as your arms descend.'
    },
    {
      title: 'Training only the final position',
      description:
        'Full attempts are extremely demanding and do not provide an easy way to scale the load. Use counterweight, band, spotter, or partial-range variations so you can develop the required straight-arm strength progressively.'
    },
  ],

  relatedExercises: [
    'handstand-rings',
    'iron-cross',
    'maltese'
  ],

  faq: [
    {
      question: 'What is an Inverted Cross?',
      answer:
        'The Inverted Cross is a static rings skill where the body is held vertically upside down while both straight arms extend horizontally out to the sides. It resembles an Iron Cross turned upside down, but the balance and force demands are different because your body is positioned above the rings.'
    },
    {
      question: 'Is the Inverted Cross the same as a wide Ring Handstand?',
      answer:
        'No. A Ring Handstand keeps the hands much closer beneath the body. In a full Inverted Cross, the straight arms extend laterally until they are approximately horizontal, creating a much longer and more demanding shoulder lever.'
    },
    {
      question: 'Do I need a Ring Handstand before training the Inverted Cross?',
      answer:
        'A strong Ring Handstand is an important foundation because the Inverted Cross also requires control while inverted above unstable rings. However, the specific straight-arm strength needed for the cross position must be developed separately with assisted and progressively deeper variations.'
    },
    {
      question: 'How should I train towards an Inverted Cross?',
      answer:
        'Develop Ring Handstand control and specific straight-arm shoulder strength, then practice the Inverted Cross with a spotter, counterweight, bands, or another form of assistance. Gradually reduce assistance and lower the arms closer to horizontal while preserving straight elbows and a vertical body line.'
    },
  ],

  seo: {
    title:
      'Inverted Cross: Technique & Ring Progressions | Treethenics',

    description:
      'Learn the Inverted Cross on rings with proper straight-arm technique, assisted progressions, common mistakes and preparation for the full hold.',
  },

  imageUrl: '/images/exercises/inverted-cross.png',
};
