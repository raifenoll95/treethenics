import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_BUTTERFLY: Exercise = {
  id: 'inverted-butterfly',
  name: 'Inverted Butterfly',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'push',

  targetAreas: [
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'front-deltoids',
    'biceps'
  ],

  secondaryMuscles: [
    'upper-back',
    'chest',
    'latissimus-dorsi',
    'forearms',
    'abdominals',
    'triceps'
  ],

  equipment: ['rings'],

  description:
    'The Inverted Butterfly is an elite gymnastics rings strength movement where the athlete rises from an inverted hang into an Inverted Cross while keeping both arms completely straight. Also associated with the Zaika element, it demands extraordinary shoulder strength, mobility, and control throughout the entire transition.',

  overview:
    'Begin in a stable inverted hang with your body vertical, legs together, and elbows completely extended. Without swinging or bending your arms, generate force through your shoulders to raise your inverted body while progressively opening the rings outward. Maintain a straight body line and avoid excessive back arching or allowing your hips to move ahead of your shoulders. Continue until your arms reach the lateral Inverted Cross position, then stabilize the hold. This is an exceptionally demanding rings skill that requires an established Inverted Cross and extensive preparation for straight-arm shoulder loading.',

  howTo: [
    {
      title: 'Establish the inverted hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin hanging upside down between the rings with your body straight, legs together, and elbows fully extended. Stabilize your shoulders and prevent unnecessary swinging.'
    },
    {
      title: 'Initiate the shoulder pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin raising your inverted body using controlled shoulder strength. Keep both elbows locked and avoid bending your arms to create momentum.'
    },
    {
      title: 'Open the rings outward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually move your arms outward as your body rises. Maintain symmetrical shoulder movement and keep your torso aligned with your hips and legs.'
    },
    {
      title: 'Approach the Inverted Cross',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue the straight-arm transition until your arms approach a horizontal position at your sides. Avoid arching your back or allowing your body to travel diagonally.'
    },
    {
      title: 'Hold the Inverted Cross',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish in a stable Inverted Cross with your body vertical and upside down, both arms extended laterally, and elbows completely locked. Maintain control without relying on momentum.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The movement is defined by straight-arm strength. Bending your elbows to generate additional force changes the mechanics and reduces the difficulty of the transition.'
    },
    {
      title: 'Excessive back arching',
      description:
        'Avoid creating a large arch through your lower back to shorten the effective lever. Keep your ribs, pelvis, and legs aligned throughout the movement.'
    },
    {
      title: 'Moving diagonally',
      description:
        'A slashed or diagonal body path reduces the intended vertical strength demand. Keep your body aligned as you rise from the inverted hang towards the Inverted Cross.'
    },
    {
      title: 'Using a bounce',
      description:
        'Do not rely on swinging or rebounding to pass through the hardest portion. The strict variation requires a controlled strength transition rather than momentum.'
    },
    {
      title: 'Failing to stabilize the Cross',
      description:
        'Reaching the final position momentarily is not enough for a complete controlled execution. Establish a recognizable Inverted Cross without bending the elbows or losing your body line.'
    },
  ],

  relatedExercises: [
    'inverted-cross',
    'butterfly',
    'iron-cross'
  ],

  faq: [
    {
      question: 'What is the Inverted Butterfly?',
      answer:
        'The Inverted Butterfly is an elite straight-arm gymnastics rings movement where the athlete rises from an inverted hang into an Inverted Cross without bending the elbows.'
    },
    {
      question: 'Is the Inverted Butterfly also called the Zaika?',
      answer:
        'The straight-arm strength rise from inverted hang to Inverted Cross was performed by Ilya Zaika at the 2026 Paris World Challenge Cup and recognized under his name. Inverted Butterfly remains a useful descriptive name for the movement.'
    },
    {
      question: 'What muscles does the Inverted Butterfly work?',
      answer:
        'The anterior and middle deltoids are major contributors to the shoulder movement, while the biceps experience substantial straight-arm loading. The upper back, chest, lats, and core contribute to stability and body alignment.'
    },
    {
      question: 'What is the difference between Butterfly and Inverted Butterfly?',
      answer:
        'The regular Butterfly begins from a normal dead hang and moves through an Iron Cross towards ring support in the full variation used by Treethenics. The Inverted Butterfly begins upside down and rises into an Inverted Cross, placing a different and exceptionally high demand on the shoulders.'
    },
    {
      question: 'What should I learn before attempting the Inverted Butterfly?',
      answer:
        'A strong and stable Inverted Cross is essential. Advanced straight-arm rings strength, shoulder mobility, and experience with controlled negative transitions are important foundations. The full movement should only be approached with specialist coaching and appropriate assistance.'
    },
  ],

  seo: {
    title:
      'Inverted Butterfly (Zaika): Technique | Treethenics',

    description:
      'Discover the Inverted Butterfly, also known as the Zaika, an elite rings strength movement from inverted hang to Inverted Cross with straight arms.',
  },

  imageUrl: '/images/exercises/inverted-butterfly.png',
};

