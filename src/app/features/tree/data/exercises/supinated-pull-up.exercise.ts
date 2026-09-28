import { Exercise } from '../../../../shared/models/exercise.model';

export const SUPINATED_PULL_UP: Exercise = {
  id: 'supinated-pull-up',
  name: 'Chin Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'forearms',
    'rear-deltoids',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Supinated Pull Up, commonly called a Chin-Up, is a vertical pulling exercise performed with your palms facing towards you. The underhand grip places the biceps in a strong position while the lats and upper back remain major contributors to the movement.',

  overview:
    'The Supinated Pull Up uses the same fundamental vertical pulling pattern as a regular Pull Up but changes the forearms into a supinated position. Start from a controlled hang with your palms facing you, pull your body upward by bending your elbows and driving them down, and continue until your chin clearly passes the bar. Lower yourself back to straight arms under control. The supinated grip generally makes the biceps feel more involved, which is one reason many athletes find this variation more accessible than a pronated Pull Up.',

  howTo: [
    {
      title: 'Take a supinated grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip the bar with your palms facing towards you. Use a comfortable grip around shoulder width and begin from a controlled hang with your elbows extended.'
    },
    {
      title: 'Set your body',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Brace your core and keep your lower body controlled. Avoid creating a large swing before beginning the pull.'
    },
    {
      title: 'Pull towards the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and pull your body upward while driving your elbows down towards your sides. Keep the movement smooth rather than kicking your legs for momentum.'
    },
    {
      title: 'Clear the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your chin clearly passes the bar. Maintain control instead of reaching your chin forward just to create the appearance of extra height.'
    },
    {
      title: 'Lower to the hang',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower yourself under control until your elbows return to full extension. Stabilize the bottom position before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using a grip that is too wide',
      description:
        'A very wide underhand grip can make the position uncomfortable and removes some of the natural advantage of the supinated grip. Start around shoulder width and adjust slightly based on your comfort and anatomy.'
    },
    {
      title: 'Kicking to reach the bar',
      description:
        'Swinging the legs or aggressively driving the hips can turn the repetition into a momentum-assisted pull. Keep your body controlled so the back and arms produce the movement.'
    },
    {
      title: 'Reaching with the chin',
      description:
        'Do not extend your neck just to get your chin over the bar. Continue pulling your body upward and keep your head in a natural position.'
    },
    {
      title: 'Cutting the bottom range short',
      description:
        'Repeatedly stopping with significantly bent elbows removes part of the range of motion. Lower to straight arms under control before beginning the next repetition.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'australian-pull-up',
    'commando-pull-up'
  ],

  faq: [
    {
      question: 'Is a Supinated Pull Up the same as a Chin-Up?',
      answer:
        'Yes. A Pull Up performed with a supinated or underhand grip is commonly called a Chin-Up. The palms face towards you instead of away from you as they do in a conventional pronated Pull Up.'
    },
    {
      question: 'What muscles does the Supinated Pull Up work?',
      answer:
        'The lats, biceps, and upper back are major contributors. The forearms help maintain the grip, while the shoulders and core help stabilize the body throughout the repetition.'
    },
    {
      question: 'Does the Supinated Pull Up work the biceps more than a regular Pull Up?',
      answer:
        'Both variations strongly involve the biceps and back. Research comparing the movements has found greater biceps activation during the Chin-Up in some conditions, but changing the grip does not turn the exercise into an isolated biceps movement.'
    },
    {
      question: 'Is the Supinated Pull Up easier than a regular Pull Up?',
      answer:
        'Many people find the Supinated Pull Up easier because the underhand grip places the elbow flexors in a favorable position. However, the difference varies between athletes depending on their strength, technique, proportions, and experience.'
    },
    {
      question: 'How wide should my grip be?',
      answer:
        'Around shoulder width is a practical starting point for most people. You can adjust the width slightly to find a comfortable position for your wrists, elbows, and shoulders while maintaining a controlled vertical pull.'
    },
  ],

  seo: {
    title:
      'Supinated Pull Up (Chin-Up): Technique & Muscles | Treethenics',

    description:
      'Learn the Supinated Pull Up or Chin-Up with proper underhand grip technique, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/supinated-pull-up.png',
};
