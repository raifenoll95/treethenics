import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
  id: 'tuck-planche-press-to-handstand',
  name: 'Tuck Planche Press to Handstand',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'core', 'chest'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'triceps'
  ],

  secondaryMuscles: [
    'chest',
    'abdominals',
    'upper-back',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Tuck Planche Press to Handstand is a straight-arm transition where you press from a horizontal Tuck Planche into a Handstand without jumping or bending your elbows. The tucked position shortens the lever, making it an important first step towards more advanced Planche Press variations.',

  overview:
    'The Tuck Planche Press to Handstand connects straight-arm Planche strength with Handstand control. Begin in a stable Tuck Planche with your knees close to your chest and your shoulders leaning forward beyond your hands. Keep your elbows locked as you press strongly through the floor and raise your hips. As the hips move above the shoulders, gradually reduce the forward lean and stack your body over your hands before extending the legs into a controlled Handstand.',

  howTo: [
    {
      title: 'Establish the Tuck Planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a controlled Tuck Planche with your feet off the floor, knees tucked towards your chest, elbows locked, and shoulders leaning forward beyond your hands.'
    },
    {
      title: 'Begin raising the hips',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Push strongly through your hands and shoulders while keeping your arms straight. Start lifting your hips while maintaining the tuck instead of trying to extend your legs immediately.'
    },
    {
      title: 'Press towards vertical',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue raising your hips above your shoulders as your center of mass moves towards your hands. Gradually reduce the forward shoulder lean while keeping the elbows locked.'
    },
    {
      title: 'Stack the tuck handstand',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Reach a balanced vertical position with your hips stacked over your shoulders and hands. Keep the knees tucked until you have established control over the Handstand balance point.'
    },
    {
      title: 'Extend into Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your balance is stable, smoothly extend your hips and knees until you reach a full Handstand. Finish tall through the shoulders without changing your hand position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The strict Tuck Planche Press to Handstand is a straight-arm transition. Bending your elbows changes the movement into a bent-arm press and reduces the specific straight-arm strength requirement.'
    },
    {
      title: 'Kicking out of the tuck',
      description:
        'Throwing your legs upward creates momentum and can hide a weak press. Keep the tuck compact while your hips rise and extend the legs only when you are approaching the Handstand.'
    },
    {
      title: 'Losing the Planche before the press',
      description:
        'Start from a recognizable Tuck Planche rather than immediately lifting your hips as soon as your feet leave the floor. Establish the horizontal position first, then begin the press.'
    },
    {
      title: 'Trying to straighten the body too early',
      description:
        'Extending your legs before your hips are high increases the lever and makes the transition much harder. Maintain the tuck through the difficult lower portion and open the body as you approach vertical.'
    },
  ],

  relatedExercises: [
    'tuck-planche',
    'handstand',
    'straddle-planche-press-to-handstand'
  ],

  faq: [
    {
      question: 'What is a Tuck Planche Press to Handstand?',
      answer:
        'It is a straight-arm transition from a horizontal Tuck Planche into a Handstand. You keep your knees tucked while raising your hips over your shoulders, then extend your body once you reach the vertical position.'
    },
    {
      question: 'Do my arms need to stay straight?',
      answer:
        'Yes. In the strict version, the elbows remain locked throughout the transition. A Tuck Planche to Handstand performed with significant elbow flexion is a different bent-arm variation.'
    },
    {
      question: 'Why is the Tuck Planche Press easier than the Straddle Planche Press?',
      answer:
        'Keeping the knees close to the torso shortens the body lever and brings more of your mass closer to the hands. A Straddle Planche places considerably more body mass farther from the support point, increasing the straight-arm strength required.'
    },
    {
      question: 'Should I learn the Tuck Planche or Handstand first?',
      answer:
        'You should develop both positions independently before combining them. The Tuck Planche provides the starting straight-arm strength, while a controlled Handstand gives you the balance and overhead position needed to finish the press.'
    },
    {
      question: 'How do I progress to a Tuck Planche Press to Handstand?',
      answer:
        'Build a strong Tuck Planche and Handstand, then practice partial Tuck Planche presses, assisted presses, and slow Handstand-to-Tuck-Planche negatives. Gradually increase the concentric range until you can connect both positions without bending your arms.'
    },
  ],

  seo: {
    title:
      'Tuck Planche Press to Handstand: Technique & Progressions | Treethenics',

    description:
      'Learn the Tuck Planche Press to Handstand with strict straight-arm technique, muscles worked, progressions and common mistakes.',
  },

  imageUrl:
    '/images/exercises/tuck-planche-press-to-handstand.png',
};
