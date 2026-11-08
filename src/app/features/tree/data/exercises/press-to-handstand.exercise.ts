import { Exercise } from '../../../../shared/models/exercise.model';

export const PRESS_TO_HANDSTAND: Exercise = {
  id: 'press-to-handstand',
  name: 'Press To Handstand',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: [
    'shoulders',
    'core',
    'biceps'
  ],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'abdominals'
  ],

  secondaryMuscles: [
    'triceps',
    'upper-back',
    'forearms',
    'quadriceps'
  ],

  equipment: ['floor','parallettes'],

  description:
    'The Press To Handstand is an advanced calisthenics movement where the athlete lifts the body from the floor into a vertical Handstand using straight-arm shoulder strength, core compression, and balance. Unlike a kick-up, the entire transition is performed slowly and without momentum.',

  overview:
    'Begin standing in a forward fold with your hands planted firmly on the floor and your legs extended. Shift your shoulders forward beyond your hands while pushing strongly through straight arms. Transfer your bodyweight onto your hands and gradually lift your feet from the floor without jumping. Keep your hips elevated and your legs controlled as you rotate your pelvis over your shoulders. Once your hips are stacked above your hands, extend your legs upward until you reach a fully aligned Handstand. This movement requires a combination of shoulder strength, hamstring flexibility, hip compression, and precise balance.',

  howTo: [
    {
      title: 'Set your starting position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet on the floor and fold forward to place your hands approximately shoulder-width apart. Keep your elbows straight and bring your hips high above your feet.'
    },
    {
      title: 'Lean over your hands',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Shift your shoulders forward beyond your wrists while actively pushing the floor away. Maintain straight arms and engage your core to prepare for the weight transfer.'
    },
    {
      title: 'Lift your feet',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually transfer your weight onto your hands and lift both feet from the floor without jumping. Keep your hips elevated and maintain a compact, controlled body position.'
    },
    {
      title: 'Raise your hips and legs',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue elevating your pelvis until it stacks above your shoulders. Progressively extend your legs upward while controlling your balance through your hands and shoulders.'
    },
    {
      title: 'Finish in Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Bring your legs together and align your wrists, shoulders, hips, and ankles vertically. Keep your elbows locked, shoulders elevated, and core engaged to stabilize the Handstand.'
    },
  ],

  commonMistakes: [
    {
      title: 'Jumping into the Handstand',
      description:
        'Using a kick or jump removes the controlled strength component of the exercise. The Press To Handstand should be performed through a continuous weight transfer without momentum.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The standard Press To Handstand is a straight-arm movement. Bending the elbows changes the mechanics and reduces the intended shoulder strength demand.'
    },
    {
      title: 'Lifting the legs too early',
      description:
        'Trying to straighten your legs upward before your hips have risen sufficiently can make the movement unnecessarily difficult. Prioritize lifting and stacking your pelvis first.'
    },
    {
      title: 'Collapsing through the shoulders',
      description:
        'Avoid sinking into your shoulders during the press. Maintain active scapular elevation and push firmly through the floor throughout the transition.'
    },
    {
      title: 'Losing core compression',
      description:
        'Insufficient abdominal and hip flexor engagement can make it difficult to lift the feet and control the pelvis. Maintain a strong compressed position during the initial phase.'
    },
  ],

  relatedExercises: [
    'handstand',
    'pike-push-up',
    'l-sit'
  ],

  faq: [
    {
      question: 'What is a Press To Handstand?',
      answer:
        'A Press To Handstand is a controlled movement where the athlete lifts the body from the floor into a Handstand using shoulder strength, flexibility, and balance without kicking or jumping.'
    },
    {
      question: 'What muscles does the Press To Handstand work?',
      answer:
        'The anterior deltoids and serratus anterior provide shoulder support and control, while the abdominals and hip flexors help lift and position the pelvis and legs. The triceps and forearms contribute to arm stability and balance.'
    },
    {
      question: 'Is Press To Handstand harder than a regular Handstand?',
      answer:
        'Generally, yes. A regular Handstand requires balance and overhead stability, while a Press To Handstand additionally demands significant straight-arm strength, active flexibility, and controlled compression.'
    },
    {
      question: 'Do I need flexible hamstrings for Press To Handstand?',
      answer:
        'Good hamstring flexibility is very helpful because it allows the hips to rise while the feet remain close to the hands. Limited flexibility can make the weight transfer more difficult and increase the strength required.'
    },
    {
      question: 'How can I progress towards Press To Handstand?',
      answer:
        'Develop a stable Handstand, practice Planche Leans and compression exercises, and use elevated surfaces or partial presses to reduce the difficulty. Gradually decrease assistance while keeping the arms straight and eliminating momentum.'
    },
  ],

  seo: {
    title:
      'Press To Handstand: Technique & Progression | Treethenics',

    description:
      'Learn the Press To Handstand with straight-arm technique, shoulder strength, core compression and balance, including progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/press-to-handstand.png',
};

