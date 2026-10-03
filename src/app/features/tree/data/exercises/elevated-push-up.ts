import { Exercise } from '../../../../shared/models/exercise.model';

export const ELEVATED_PUSH_UP: Exercise = {
  id: 'elevated-push-up',
  name: 'Elevated Push Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'push',

  targetAreas: ['chest', 'triceps', 'shoulders'],

  primaryMuscles: [
    'chest',
    'triceps',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'obliques'
  ],


  description:
    'The Elevated Push Up is a beginner Push Up variation performed with your hands on a raised surface and your feet on the floor. The elevated position reduces the amount of bodyweight supported by the upper body, making it an excellent progression towards a full Push Up.',

  overview:
    'Place your hands on a stable elevated surface and walk your feet backwards until your body forms a straight inclined line from your shoulders to your heels. Bend your elbows and lower your chest towards the surface while keeping your torso and hips moving together. Press back to straight arms without allowing your hips to sag or rise independently. Start with a higher surface if necessary, then gradually lower the support as your pushing strength improves until you can perform the movement on the floor.',

  howTo: [
    {
      title: 'Choose a stable surface',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Use a sturdy bench, box, or similar elevated surface that will not move while you perform the exercise.'
    },
    {
      title: 'Set your body position',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Place your hands approximately shoulder-width apart and walk your feet backwards until your body forms a straight inclined line from your shoulders to your heels.'
    },
    {
      title: 'Lower your chest',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and lower your chest towards the elevated surface. Keep your elbows travelling diagonally backwards rather than flaring directly out to the sides.'
    },
    {
      title: 'Keep your body rigid',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain tension through your core and glutes so your shoulders, hips, and legs move together instead of folding at the waist.'
    },
    {
      title: 'Press back up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Push through both hands and extend your elbows until you return to the starting position. Maintain the same body line throughout the repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending at the hips',
      description:
        'Do not leave your hips behind as your chest moves towards the surface. Your shoulders and hips should lower and rise together as one controlled unit.'
    },
    {
      title: 'Letting the hips sag',
      description:
        'Maintain abdominal and glute tension throughout the repetition. If your lower back begins to arch and your hips drop, use a higher surface until you can control the position.'
    },
    {
      title: 'Flaring the elbows',
      description:
        'Avoid pointing your elbows directly out to the sides. Allow them to travel diagonally backwards in a comfortable position as you lower your chest.'
    },
    {
      title: 'Reaching with the head',
      description:
        'Do not move your chin towards the bench to create the appearance of greater depth. Keep your neck aligned and bring your chest towards the support.'
    },
    {
      title: 'Using an unstable surface',
      description:
        'Avoid chairs, boxes, or furniture that can slide or tip when you apply force. The elevated support should remain completely stable throughout the exercise.'
    },
  ],

  relatedExercises: [
    'knee-push-up',
    'push-up',
    'diamond-push-up'
  ],

  faq: [
    {
      question: 'What is an Elevated Push Up?',
      answer:
        'The Elevated Push Up is a Push Up performed with your hands on a raised surface while your feet remain on the floor. It is also commonly known as an Incline Push Up.'
    },
    {
      question: 'Is an Elevated Push Up easier than a regular Push Up?',
      answer:
        'Yes. Elevating your hands changes your body angle and reduces the amount of bodyweight that your upper body has to support, making the exercise easier than a standard floor Push Up.'
    },
    {
      question: 'How high should the elevated surface be?',
      answer:
        'Use a height that allows you to perform controlled repetitions with a straight body line and consistent depth. A higher surface makes the exercise easier, while progressively lowering the surface increases the difficulty.'
    },
    {
      question: 'What muscles does the Elevated Push Up work?',
      answer:
        'The chest, triceps, and front deltoids produce most of the pressing movement, while the serratus anterior and core muscles help control the shoulder blades and maintain a stable body position.'
    },
    {
      question: 'How do I progress from Elevated Push Ups to Push Ups?',
      answer:
        'Gradually use lower surfaces while maintaining the same technique and full range of motion. As the hands move closer to floor level, more of your bodyweight must be supported by the upper body until you are ready for a regular Push Up.'
    },
  ],

  seo: {
    title:
      'Elevated Push Up: Technique & Push Up Progression | Treethenics',

    description:
      'Learn the Elevated Push Up with proper technique, muscles worked, common mistakes and progressions towards your first full Push Up.',
  },

  imageUrl: '/images/exercises/elevated-push-up.png',
};
