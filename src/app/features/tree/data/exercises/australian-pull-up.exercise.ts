import { Exercise } from '../../../../shared/models/exercise.model';

export const AUSTRALIAN_PULL_UP: Exercise = {
  id: 'australian-pull-up',
  name: 'Australian Pull Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'upper-back',
    'latissimus-dorsi',
    'biceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The Australian pull up, also known as an inverted row, is a beginner-friendly pulling exercise where you hang underneath a low bar and pull your chest towards it while keeping your feet on the ground. It builds back and arm strength without requiring you to lift your entire bodyweight, making it a great stepping stone towards regular pull ups.',

  overview:
    'The Australian pull up is one of the best exercises for building your pulling foundation. Unlike a regular pull up, which pulls your body vertically towards a high bar, this exercise uses a more horizontal rowing motion. Your feet stay on the ground while your upper back, lats, and biceps pull your chest towards the bar. Start with your body at a higher angle and gradually move your feet further forward to make the exercise harder.',

  howTo: [
    {
      title: 'Start with a comfortable body angle',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a low bar slightly wider than shoulder-width and walk your feet forward until your arms are straight. Start fairly upright if you are new to the exercise. The more horizontal your body becomes, the more challenging the movement will feel.'
    },
    {
      title: 'Create a straight body line',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Keep your feet planted and tighten your abs and glutes. Aim to keep your shoulders, hips, and legs moving as one solid unit instead of letting your hips sag towards the floor.'
    },
    {
      title: 'Pull your chest towards the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Pull yourself towards the bar by driving your elbows back and bringing your shoulder blades together. Aim to bring your chest close to the bar instead of reaching forward with your head.'
    },
    {
      title: 'Lower yourself under control',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Slowly extend your elbows and lower your body back to the starting position. Finish with your arms straight while keeping your body tight instead of simply dropping away from the bar.'
    },
    {
      title: 'Make your body more horizontal',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'As you get stronger, move your feet further forward so your body becomes closer to parallel with the ground. Once horizontal Australian pull ups feel strong and controlled, you can start introducing regular pull ups.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting your hips sag',
      description:
        'Do not leave your hips behind as your chest moves towards the bar. Tighten your abs and glutes so your torso and legs stay together throughout the movement. If you cannot maintain that position, use a more upright body angle.'
    },
    {
      title: 'Pulling your chin instead of your chest',
      description:
        'Reaching your head forward can make it look like you have completed the rep without actually pulling your body far enough. Keep your neck comfortable and focus on bringing your chest towards the bar.'
    },
    {
      title: 'Shrugging your shoulders',
      description:
        'Avoid pulling with your shoulders constantly raised towards your ears. As you row upwards, focus on controlling your shoulder blades and pulling your elbows behind you rather than simply shrugging yourself towards the bar.'
    },
    {
      title: 'Making the angle too difficult',
      description:
        'You do not need to start with your body completely horizontal. If you cannot reach the bar without losing your body position, raise the bar or move your feet back to make the angle easier. Progressively lower your body as your pulling strength improves.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'archer-pull-up',
    'chin-up'
  ],

  faq: [
    {
      question: 'Are Australian pull ups good for learning pull ups?',
      answer:
        'Yes. They build strength in many of the same pulling muscles used during regular pull ups, including the lats, upper back, and biceps. The movement is horizontal rather than vertical, so it is not a complete replacement for pull up practice, but it is an excellent way to build your initial pulling strength.'
    },
    {
      question: 'How do I make Australian pull ups easier or harder?',
      answer:
        'Change your body angle. Keeping your torso more upright makes the exercise easier, while walking your feet forward and bringing your body closer to horizontal increases the challenge. This makes the exercise very easy to scale without adding weight.'
    },
    {
      question: 'Should my chest touch the bar?',
      answer:
        'Bringing your chest to the bar is a useful goal when your setup allows it, but do not sacrifice your body position just to make contact. Pull as high as you can with control while keeping your hips up and your neck in a comfortable position.'
    },
    {
      question: 'What muscles do Australian pull ups work?',
      answer:
        'Australian pull ups mainly train your upper back, lats, and biceps. Your rear delts and forearms also contribute to the pull, while your core helps keep your body stable as you move underneath the bar.'
    },
  ],

  seo: {
    title:
      'Australian Pull Up (Inverted Row): Form & Progressions | Treethenics',

    description:
      'Learn how to do Australian Pull Ups with proper form, muscles worked, common mistakes and progressions towards regular pull ups.',
  },

  imageUrl: '/images/exercises/australian-pull-up.png',
};
