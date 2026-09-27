import { Exercise } from '../../../../shared/models/exercise.model';

export const EXTREME_WIDE_MUSCLE_UP: Exercise = {
  id: 'extreme-wide-muscle-up',
  name: 'Extreme Wide Muscle Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'chest', 'shoulders', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'chest',
    'biceps'
  ],

  secondaryMuscles: [
    'triceps',
    'front-deltoids',
    'upper-back',
    'forearms',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The extreme wide muscle up is an advanced bar muscle up variation performed with the hands significantly wider than in a standard muscle up. The wide position makes it harder to generate enough pulling height and creates a demanding transition from below the bar into support. It requires powerful pulling strength, strong shoulders, and excellent control of the turnover.',

  overview:
    'The extreme wide muscle up should come after a strong standard muscle up and a controlled wide muscle up. Start from a wide overhand grip, generate a powerful high pull, and bring your torso towards and above the bar before pressing into support. As the grip becomes wider, pulling height becomes harder to achieve, so increase your hand spacing gradually rather than immediately using the widest position possible. Keep the transition symmetrical and only use a width you can control without excessive swinging or twisting.',

  howTo: [
    {
      title: 'Master the wide muscle up',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Build clean standard muscle ups first, then gradually widen your grip. You should be able to perform a strong wide muscle up with a high and symmetrical pull before experimenting with an extreme hand position.'
    },
    {
      title: 'Set a wider grip',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Take an overhand grip significantly wider than your normal muscle up grip. Increase the width gradually between training sessions and stop widening once you can no longer maintain a powerful pull or comfortable shoulder position.'
    },
    {
      title: 'Pull explosively',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Brace your core and accelerate aggressively from below the bar. Drive your elbows down and pull your torso as high as possible, creating enough height and space to begin moving over the bar.'
    },
    {
      title: 'Transition over the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'As your chest reaches the bar, continue moving your torso forward and above it. Turn both sides over together instead of leading with one shoulder or using a chicken-wing transition.'
    },
    {
      title: 'Press to full support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your shoulders are above the bar, press down until both elbows are fully extended. Stabilize the top position before lowering under control and preparing for another repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Going extremely wide too soon',
      description:
        'More width is not automatically better. An excessively wide grip can dramatically reduce your pulling height and make the transition much harder. Increase your hand spacing gradually while preserving clean technique.'
    },
    {
      title: 'Using a chicken-wing transition',
      description:
        'Do not throw one shoulder over the bar before the other. The extreme width already creates a difficult transition, so aim to pull high enough that both shoulders can move over the bar together.'
    },
    {
      title: 'Pulling only to chest height',
      description:
        'A normal chest-to-bar pull may not create enough height for a clean wide transition. Train explosive high pulls and continue accelerating beyond ordinary pull-up height instead of trying to force an early turnover.'
    },
    {
      title: 'Replacing pulling power with a large swing',
      description:
        'Swinging aggressively can help you clear the bar, but it changes the strength requirement of the exercise. If your goal is a clean extreme wide muscle up, reduce unnecessary momentum and build the pulling power required for your chosen grip width.'
    },
  ],

  relatedExercises: [
    'muscle-up',
    'wide-muscle-up',
    'high-pull-up'
  ],

  faq: [
    {
      question: 'What is an extreme wide muscle up?',
      answer:
        'It is a wide-grip bar muscle up performed with the hands considerably farther apart than in a standard muscle up. There is no universal hand-spacing measurement that defines the extreme version, so the practical distinction is using a substantially wider grip while still completing a controlled pull, transition, and lockout.'
    },
    {
      question: 'Why is an extreme wide muscle up so difficult?',
      answer:
        'A very wide grip makes it harder to generate the pulling height needed for the transition. You still have to bring your torso above the bar and finish in support, but you have less favorable mechanics for producing the high pull that normally makes the turnover possible.'
    },
    {
      question: 'Should I learn the normal muscle up first?',
      answer:
        'Yes. Build a consistent bar muscle up before progressively widening your grip. After that, develop wide high pulls and wide muscle ups before attempting extreme widths. This lets you increase the mechanical difficulty without learning the transition and the wide grip at the same time.'
    },
    {
      question: 'How wide should my hands be?',
      answer:
        'There is no single correct extreme-wide distance. Start slightly wider than your established wide muscle up and increase the distance gradually. Your maximum useful width is one where you can still pull high, transition symmetrically, and keep your shoulders comfortable and controlled.'
    },
  ],

  seo: {
    title:
      'Extreme Wide Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the Extreme Wide Muscle Up with proper technique, wide-grip high pulls, transition progressions and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/extreme-wide-muscle-up.png',
};
