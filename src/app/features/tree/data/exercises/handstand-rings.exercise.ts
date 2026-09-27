import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND_RINGS: Exercise = {
  id: 'handstand-rings',
  name: 'Handstand Rings',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
    'serratus-anterior'
  ],

  secondaryMuscles: [
    'forearms',
    'upper-back',
    'abdominals',
    'obliques'
  ],

  equipment: ['rings'],

  description:
    'The Handstand on Rings is an advanced hand-balancing skill performed above a pair of freely moving gymnastic rings. Compared with a floor handstand, the unstable supports demand much greater control from the shoulders and arms while you maintain straight elbows, an elevated shoulder position, and a balanced vertical body line.',

  overview:
    'A strong floor Handstand should come before serious Ring Handstand training, but the balance must still be learned specifically on the rings. Start by developing stable straight-arm ring support, then practice inverted positions with your feet using the straps for assistance. Gradually reduce that assistance until you can balance without touching the straps. Keep your elbows locked, push tall through your shoulders, and actively control the rings rather than allowing them to move freely beneath you.',

  howTo: [
    {
      title: 'Build strong ring support',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a stable straight-arm support on the rings before training the inverted position. Keep your elbows locked and learn to control the rings without relying on the straps for stability.'
    },
    {
      title: 'Use the straps for assistance',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Enter a Ring Handstand with your feet or legs lightly supported by the straps. Push tall through your shoulders, straighten your elbows, and become comfortable controlling the moving rings while inverted.'
    },
    {
      title: 'Reduce strap assistance',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progress from stronger contact with the straps to only light contact. Practice brief moments where your feet leave the straps completely, then return to assistance before your position breaks down.'
    },
    {
      title: 'Find the freestanding balance',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Remove your feet from the straps and actively stabilize both rings. Keep your shoulders elevated and make small corrections through your hands, arms, and shoulders instead of allowing large movements through your hips.'
    },
    {
      title: 'Hold a clean Ring Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the freestanding position with straight elbows, active shoulders, and a controlled vertical body line. Keep your arms clear of the straps and finish the hold without using them for additional support.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying rings before owning a floor Handstand',
      description:
        'The moving rings add another balance problem rather than replacing the original one. Build a reliable freestanding Handstand on the floor or parallettes before making unsupported Ring Handstands a primary goal.'
    },
    {
      title: 'Bending your elbows to catch the balance',
      description:
        'Keep your elbows locked instead of repeatedly bending your arms whenever the rings move. Bent arms create a less consistent support position and turn every correction into a much larger movement.'
    },
    {
      title: 'Sinking into your shoulders',
      description:
        'Do not allow your shoulders to collapse or create a large closed shoulder angle. Continue pushing tall through the rings so your shoulders remain elevated and your body can stack more effectively above your hands.'
    },
    {
      title: 'Using the straps as permanent support',
      description:
        'The straps are useful while learning, but a freestanding Ring Handstand should not depend on your arms or legs pressing against them. Gradually reduce contact until you can stabilize the rings without assistance.'
    },
  ],

  relatedExercises: [
    'handstand',
    'handstand-push-up-rings',
    'press-to-handstand-rings'
  ],

  faq: [
    {
      question: 'Is a Ring Handstand harder than a normal Handstand?',
      answer:
        'Yes, the main difference is that the rings can move underneath you. A floor Handstand gives you a fixed surface, while a Ring Handstand requires you to control two independent supports while maintaining your inverted position.'
    },
    {
      question: 'Should I learn a floor Handstand first?',
      answer:
        'Yes. A reliable floor or parallettes Handstand gives you the alignment, inversion confidence, and balance experience needed before adding the instability of the rings. You should still expect to rebuild some of your balance specifically on rings.'
    },
    {
      question: 'Can I use the straps while learning a Ring Handstand?',
      answer:
        'Yes. Using your feet or legs against the straps is a common progression for learning the inverted position on rings. Gradually reduce the amount of assistance until you can remove your feet completely and balance without strap contact.'
    },
    {
      question: 'Should my arms touch the straps in a Ring Handstand?',
      answer:
        'For a clean freestanding Ring Handstand, avoid using your arms against the straps for extra support. Keep your elbows straight and actively stabilize the rings with your hands, arms, and shoulders.'
    },
  ],

  seo: {
    title:
      'Handstand on Rings: Technique & Progressions | Treethenics',

    description:
      'Learn the Handstand on Rings with proper technique, strap-assisted progressions, balance tips and common mistakes for a clean freestanding hold.',
  },

  imageUrl: '/images/exercises/handstand-rings.png',
};
