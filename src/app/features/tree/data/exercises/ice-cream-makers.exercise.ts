import { Exercise } from '../../../../shared/models/exercise.model';

export const ICE_CREAM_MAKERS: Exercise = {
  id: 'ice-cream-makers',
  name: 'Ice Cream Makers',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'back',
    'core',
    'biceps'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'abdominals',
    'rear-deltoids',
    'triceps',
    'forearms'
  ],

  equipment: ['pull-up-bar'],

  description:
    'Ice Cream Makers are a dynamic pulling exercise that transitions between the top of a Pull Up and a Front Lever position. They combine bent-arm pulling strength, straight-arm control, and full-body tension, making them an excellent exercise for developing the Front Lever.',

  overview:
    'Start at the top of a Pull Up with your chin above the bar and your body under control. Lean your torso backwards while simultaneously raising your legs and gradually extending your elbows. Continue until your body reaches your current Front Lever progression, ideally with the arms straight and the body horizontal. Reverse the movement by bending your elbows and rotating your body back towards the top Pull Up position. Beginners can learn the movement with a Tuck or Advanced Tuck before progressing towards straight legs.',

  howTo: [
    {
      title: 'Start at the top',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Pull yourself up until your chin is above the bar. Keep your shoulders active, elbows bent, and your entire body under tension.'
    },
    {
      title: 'Lean backwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin leaning your torso backwards while raising your hips and legs. Keep the movement controlled instead of throwing your legs upward.'
    },
    {
      title: 'Extend your arms',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As your body approaches horizontal, gradually extend your elbows while maintaining tension through your back, core, and glutes.'
    },
    {
      title: 'Reach the Front Lever',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Reach your Front Lever progression with your body rigid and your arms as straight as possible. Use a Tuck or Advanced Tuck position if you cannot maintain the full straight-leg position.'
    },
    {
      title: 'Return to the top',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement by bending your elbows and rotating your body back towards the bar until you return to the top Pull Up position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Swinging into the lever',
      description:
        'Avoid throwing your legs upwards to create momentum. The transition should come from controlled pulling strength and shoulder movement rather than a large swing.'
    },
    {
      title: 'Keeping the elbows bent',
      description:
        'The elbows should progressively extend as you move towards the Front Lever position. Staying heavily bent at the horizontal point changes the movement and reduces the straight-arm Front Lever stimulus.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Keep your shoulders, hips, and legs connected as one rigid unit. If your hips consistently fall below the rest of your body, use an easier Front Lever progression.'
    },
    {
      title: 'Piking at the hips',
      description:
        'Avoid reaching the horizontal position by folding significantly at the hips. Maintain full-body tension and choose a shorter lever if necessary.'
    },
    {
      title: 'Confusing it with a Front Lever Pull Up',
      description:
        'In a Front Lever Pull Up, the body remains approximately horizontal while the elbows bend and straighten. During an Ice Cream Maker, the entire body transitions between the top Pull Up position and a horizontal Front Lever position.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'front-lever',
    'front-lever-pull-up'
  ],

  faq: [
    {
      question: 'What are Ice Cream Makers?',
      answer:
        'Ice Cream Makers are a dynamic calisthenics exercise where you transition from the top of a Pull Up into a Front Lever position and then reverse the movement back towards the bar.'
    },
    {
      question: 'What muscles do Ice Cream Makers work?',
      answer:
        'The lats, upper back, and biceps produce much of the pulling force, while the abdominals maintain full-body tension. The shoulders, triceps, and forearms also contribute as the elbows extend and the body transitions towards the Front Lever.'
    },
    {
      question: 'Do I need a full Front Lever to perform Ice Cream Makers?',
      answer:
        'No. Ice Cream Makers can be performed using easier Front Lever progressions such as Tuck or Advanced Tuck. As your strength improves, gradually increase the lever until you can perform the movement with straight legs.'
    },
    {
      question: 'What is the difference between Ice Cream Makers and Front Lever Pull Ups?',
      answer:
        'During a Front Lever Pull Up, your body stays approximately horizontal while your elbows bend and straighten. During an Ice Cream Maker, your entire body rotates between the top Pull Up position and the horizontal Front Lever position.'
    },
    {
      question: 'How can I progress Ice Cream Makers?',
      answer:
        'Begin with Tuck Ice Cream Makers and focus on smooth transitions and straightening the arms in the lever position. Progress through Advanced Tuck and Straddle variations before attempting the movement with both legs fully extended.'
    },
  ],

  seo: {
    title:
      'Ice Cream Makers: Technique & Front Lever Progression | Treethenics',

    description:
      'Learn Ice Cream Makers with proper technique, Front Lever progressions, muscles worked and common mistakes for developing advanced pulling strength.',
  },

  imageUrl: '/images/exercises/ice-cream-makers.png',
};
