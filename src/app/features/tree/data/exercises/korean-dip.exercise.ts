import { Exercise } from '../../../../shared/models/exercise.model';

export const KOREAN_DIP: Exercise = {
  id: 'korean-dip',
  name: 'Korean Dip',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: ['triceps', 'shoulders', 'chest'],

  primaryMuscles: [
    'triceps',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'chest',
    'biceps',
    'forearms',
    'abdominals',
    'upper-back'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Korean Dip is an advanced straight-bar dip performed with the bar behind your body. From a supported position above the bar, you lower yourself by bending your elbows while your shoulders move into deep extension, then press back to straight arms. It requires strong triceps, good shoulder control, and enough mobility to handle the behind-the-body position safely.',

  overview:
    'The Korean Dip places your arms behind your torso, making it very different from a standard parallel-bar Dip. Build strong regular and straight-bar dips first, then gradually introduce the behind-the-body position with support holds, partial repetitions, and controlled negatives. Increase depth only while your shoulders remain comfortable and controlled. The Korean Dip is also highly relevant to the Hefesto because its bottom position forms the upper transition of that skill.',

  howTo: [
    {
      title: 'Establish the support position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Support yourself above a straight bar with the bar behind your hips and your arms extended. Grip the bar securely and stabilize your shoulders before beginning the repetition.'
    },
    {
      title: 'Lower behind the bar',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your elbows and lower yourself under control while keeping the bar behind your body. Allow your shoulders to move into extension gradually instead of dropping suddenly into the bottom position.'
    },
    {
      title: 'Control your depth',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Descend only as far as you can maintain a strong and comfortable shoulder position. Start with partial range if necessary and gradually increase the depth as your strength and mobility improve.'
    },
    {
      title: 'Press back upward',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Drive through your hands and extend your elbows to raise your body back around the bar. Keep your torso and legs controlled instead of using a kick or large swing to escape the bottom.'
    },
    {
      title: 'Finish at lockout',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Return to a stable support with your elbows fully extended. Reset your grip and shoulder position before beginning the next controlled repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Forcing too much depth',
      description:
        'The behind-the-body position requires substantial shoulder extension. Do not chase maximum depth if you lose control or feel pain. Use partial repetitions and gradually expand the range you can actively control.'
    },
    {
      title: 'Dropping into the bottom',
      description:
        'Avoid falling quickly into the deepest part of the repetition. The eccentric should remain controlled so your shoulders and elbows are actively supporting the movement instead of suddenly absorbing your bodyweight.'
    },
    {
      title: 'Using momentum to press up',
      description:
        'Swinging your legs or throwing your torso can help you escape the hardest part of the dip but removes much of the specific strength requirement. Reduce the range or use assistance if you cannot press back up under control.'
    },
    {
      title: 'Letting the shoulders collapse',
      description:
        'Do not continue descending once you lose active control of the shoulder position. Build strength in shallower ranges first and increase the depth gradually instead of hanging passively at the bottom.'
    },
  ],

  relatedExercises: [
    'dips',
    'hefesto',
    'skin-the-cat'
  ],

  faq: [
    {
      question: 'What is a Korean Dip?',
      answer:
        'A Korean Dip is an advanced dip variation performed on a single straight bar positioned behind your body. You bend your elbows to lower behind the bar and then press back to straight-arm support while controlling a large amount of shoulder extension.'
    },
    {
      question: 'What muscles does the Korean Dip work?',
      answer:
        'The Korean Dip strongly challenges the triceps and shoulders during the pressing movement. The chest, biceps, upper back, forearms, and core also contribute to controlling the unusual behind-the-body position.'
    },
    {
      question: 'Do Korean Dips require good shoulder mobility?',
      answer:
        'Yes. Your upper arms move considerably behind your torso, requiring much more shoulder extension than a standard Dip. Build that range gradually and use partial repetitions if you cannot comfortably control the full position.'
    },
    {
      question: 'Do Korean Dips help with the Hefesto?',
      answer:
        'Yes. The Korean Dip is particularly relevant to the upper portion of the Hefesto. A Hefesto pulls you from a lower behind-the-body position towards the bar and reaches approximately the bottom position of a Korean Dip, so developing strength and control there is useful for connecting the movement.'
    },
  ],

  seo: {
    title:
      'Korean Dip: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Korean Dip with proper behind-the-bar technique, muscles worked, shoulder preparation, common mistakes and progressions.',
  },

  imageUrl: '/images/exercises/korean-dip.png',
};
