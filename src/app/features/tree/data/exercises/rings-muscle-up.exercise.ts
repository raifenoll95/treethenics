import { Exercise } from '../../../../shared/models/exercise.model';

export const RINGS_MUSCLE_UP: Exercise = {
  id: 'rings-muscle-up',
  name: 'Rings Muscle Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
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

  equipment: ['rings'],

  description:
    'The Rings Muscle Up is an advanced compound skill that takes you from a hang below the rings to a stable support position above them. The strict version combines a false-grip pull, a controlled transition over the rings, and a deep ring dip without relying on a large kip for momentum.',

  overview:
    'The Rings Muscle Up combines pulling, transitioning, and pressing into one continuous movement. Unlike a bar Muscle Up, the rings move independently, so you must control their position throughout the entire repetition. Build a reliable false grip, strong ring pull-ups, deep ring dips, and low-ring transitions before attempting the full skill. For the strict Treethenics version, keep the rings close to your body and use strength and body control rather than a large swing to pass through the transition.',

  howTo: [
    {
      title: 'Set the false grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip each ring high in the hand so the wrist sits over the ring. Start from a controlled hang and maintain the false grip as you begin the pull.'
    },
    {
      title: 'Pull rings to your chest',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Pull strongly while keeping the rings close to your body. Aim to bring the rings towards your lower chest or sternum instead of stopping when your chin reaches hand height.'
    },
    {
      title: 'Move through the transition',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As the rings reach your chest, lean your torso forward and drive your elbows back so your shoulders move from below the rings to above them. Keep the rings close instead of letting them flare away from you.'
    },
    {
      title: 'Catch the deep dip',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Arrive above the rings in a low dip position with the rings controlled beside your torso. Stabilize this position before beginning the final press.'
    },
    {
      title: 'Press to support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Press through the rings until your elbows are fully extended and finish in a stable support position. Keep the rings controlled rather than allowing them to swing or separate excessively.'
    },
  ],

  commonMistakes: [
    {
      title: 'Losing the false grip',
      description:
        'If your wrists slide underneath the rings during the pull, the transition becomes much harder. Build false-grip hangs, rows, and pull-ups until you can maintain the grip under load.'
    },
    {
      title: 'Stopping the pull too low',
      description:
        'A normal chin-over-rings pull-up does not place you high enough for an efficient strict transition. Develop deeper false-grip pulls towards the chest before forcing full Muscle Up attempts.'
    },
    {
      title: 'Letting the rings flare out',
      description:
        'Allowing the rings to move far away from your torso makes the transition and dip significantly harder to control. Keep them close as you pull and move your chest through the rings.'
    },
    {
      title: 'Trying to kip through weak positions',
      description:
        'A large swing can hide weaknesses in the pull or transition. For the strict variation used here, develop each phase separately and connect them without relying on momentum.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'ring-dips',
    'rings-pull-up'
  ],

  faq: [
    {
      question: 'What is a Rings Muscle Up?',
      answer:
        'The Rings Muscle Up is a compound gymnastics and calisthenics skill that moves you from hanging below the rings to supporting yourself above them. It combines a pull-up, a transition through the rings, and a ring dip.'
    },
    {
      question: 'Do I need a false grip for a Rings Muscle Up?',
      answer:
        'For the strict version, the false grip is the standard and most practical technique because it keeps your wrists positioned above the rings as you move from pulling to pressing. Some dynamic variations can be performed differently, but they should be treated separately from the strict skill.'
    },
    {
      question: 'What muscles does the Rings Muscle Up work?',
      answer:
        'The lats, biceps, and upper back drive the pulling phase, while the chest, shoulders, and triceps become increasingly involved through the transition and dip. The forearms maintain the false grip, and the core helps control your body as you move around the rings.'
    },
    {
      question: 'Why can I do a Bar Muscle Up but not a Rings Muscle Up?',
      answer:
        'The two skills share pulling and pressing strength, but their transitions are different. On rings you must control two independent supports, maintain the false grip, move through a deep transition, and stabilize the rings during the dip. A Bar Muscle Up therefore does not automatically transfer to the ring version.'
    },
    {
      question: 'How do I progress to a Rings Muscle Up?',
      answer:
        'Develop ring support, false-grip ring pull-ups, deep ring dips, and low-ring transitions first. Then use foot-assisted, box-assisted, or band-assisted transitions and Muscle Ups while progressively reducing assistance until you can connect the full strict movement.'
    },
  ],

  seo: {
    title:
      'Rings Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the strict Rings Muscle Up with false-grip technique, transition drills, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/rings-muscle-up.png',
};
