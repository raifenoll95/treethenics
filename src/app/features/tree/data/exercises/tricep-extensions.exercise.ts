import { Exercise } from '../../../../shared/models/exercise.model';

export const TRICEP_EXTENSIONS: Exercise = {
  id: 'tricep-extension',
  name: 'Tricep Extension',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: [
    'triceps',
    'shoulders',
    'core'
  ],

  primaryMuscles: [
    'triceps'
  ],

  secondaryMuscles: [
    'front-deltoids',
    'chest',
    'abdominals',
    'forearms'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Tricep Extension is a bodyweight pushing exercise performed against a horizontal bar. By bending and extending the elbows while maintaining a straight body position, the movement primarily targets the triceps and develops elbow extension strength. Its difficulty can be adjusted by changing the height of the bar.',

  overview:
    'Stand facing a stable horizontal bar and place your hands approximately shoulder-width apart with an overhand grip. Step backwards until your body forms a straight inclined line from head to heels, keeping your arms extended and your core engaged. Slowly bend your elbows to lower your forehead towards the bar while keeping your upper arms relatively stable. Press through your hands and extend your elbows to return to the starting position. A higher bar reduces the load, while a lower bar increases the difficulty by placing more bodyweight onto your arms.',

  howTo: [
    {
      title: 'Position your hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand facing a secure horizontal bar and grip it with your hands approximately shoulder-width apart, palms facing away from you.'
    },
    {
      title: 'Establish body alignment',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Step backwards and extend your arms until your body forms a straight inclined line from your head to your heels. Brace your abdominals and keep your shoulders stable.'
    },
    {
      title: 'Bend your elbows',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly flex your elbows and lower your forehead towards the bar. Keep your elbows pointing mostly forward rather than flaring excessively to the sides.'
    },
    {
      title: 'Extend your arms',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push firmly through your hands and extend your elbows to raise your body away from the bar. Focus on producing the movement through your triceps rather than turning it into a regular Push Up.'
    },
    {
      title: 'Return to the start',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish with your elbows fully extended and your body aligned. Maintain abdominal tension and repeat the movement without using momentum.'
    },
  ],

  commonMistakes: [
    {
      title: 'Flaring the elbows',
      description:
        'Allowing your elbows to move excessively outward changes the mechanics and reduces the emphasis on elbow extension. Keep your elbows relatively close and directed forward.'
    },
    {
      title: 'Letting the hips sag',
      description:
        'Avoid arching your lower back or allowing your hips to drop. Maintain a straight line through your shoulders, hips, and ankles throughout the repetition.'
    },
    {
      title: 'Using an unsuitable bar height',
      description:
        'A bar that is too low may create more resistance than you can control, while a very high bar provides less challenge. Adjust the height to maintain a smooth, controlled range of motion.'
    },
    {
      title: 'Moving the shoulders excessively',
      description:
        'Avoid turning the exercise into an inclined Push Up by moving your entire upper body through large shoulder movements. Keep the emphasis on bending and extending the elbows.'
    },
    {
      title: 'Using momentum',
      description:
        'Do not bounce out of the bottom position or rush the repetitions. Lower under control and extend your arms smoothly.'
    },
    {
      title: 'Not fully extending the elbows',
      description:
        'Stopping before completing elbow extension shortens the movement. Return to a controlled straight-arm position at the top without forcefully hyperextending the joints.'
    },
  ],

  relatedExercises: [
    'push-up',
    'diamond-push-up',
    'dips'
  ],

  faq: [
    {
      question: 'What is a Tricep Extension in calisthenics?',
      answer:
        'The Tricep Extension is a bodyweight exercise performed using a horizontal bar. The athlete bends and extends the elbows while keeping the body aligned, placing most of the muscular demand on the triceps.'
    },
    {
      question: 'What muscles does the Tricep Extension work?',
      answer:
        'The triceps are the primary muscles responsible for extending the elbows. The anterior deltoids, chest, forearms, and abdominal muscles contribute to stability and body control.'
    },
    {
      question: 'Is the Tricep Extension suitable for beginners?',
      answer:
        'Yes. Beginners can use a higher bar to reduce the percentage of bodyweight supported by the arms. As strength improves, lowering the bar progressively increases the resistance.'
    },
    {
      question: 'How can I make Tricep Extensions harder?',
      answer:
        'Gradually lower the bar to increase the load on your arms. You can also improve control by slowing the lowering phase and maintaining strict elbow positioning throughout the movement.'
    },
    {
      question: 'What is the difference between Tricep Extensions and Push Ups?',
      answer:
        'Push Ups involve substantial movement at both the shoulders and elbows, emphasizing the chest, shoulders, and triceps. Tricep Extensions minimize shoulder movement and place greater emphasis on elbow extension.'
    },
    {
      question: 'Can Tricep Extensions help improve Dips?',
      answer:
        'Yes. Strengthening the triceps can support the elbow extension required during Dips and other pushing exercises, although Dips also demand considerable shoulder and chest strength.'
    },
  ],

  seo: {
    title:
      'Tricep Extension: Technique & Progression | Treethenics',

    description:
      'Learn how to perform bodyweight Tricep Extensions on a bar, including proper elbow positioning, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/tricep-extension.png',
};

