import { Exercise } from '../../../../shared/models/exercise.model';

export const REVERSE_CRUNCHES: Exercise = {
  id: 'reverse-crunches',
  name: 'Reverse Crunches',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core'
  ],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'Reverse Crunches are a dynamic abdominal exercise where you curl your pelvis towards your rib cage instead of lifting your upper body towards your legs. The movement develops abdominal control by using a posterior pelvic tilt to lift the hips slightly from the floor.',

  overview:
    'Lie on your back with your knees bent and bring your legs up until your knees are positioned roughly above your hips. Brace your core, then curl your pelvis towards your rib cage and allow your hips to lift slightly from the floor. The movement should come from the pelvis rather than simply swinging your knees towards your chest. Slowly uncurl your spine and return your pelvis to the floor before beginning the next repetition.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your back with your arms beside your body and your knees bent. Lift your feet until your knees are positioned approximately above your hips.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your abdominals and stabilize your upper body against the floor before beginning the movement.'
    },
    {
      title: 'Curl your pelvis',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Use your abdominals to roll your pelvis towards your rib cage. Think about bringing your hips towards your shoulders rather than simply moving your knees towards your face.'
    },
    {
      title: 'Lift your hips',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Allow your hips and lower spine to lift slightly from the floor as the pelvis continues to curl upward. Keep the movement controlled and avoid using momentum.'
    },
    {
      title: 'Return with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly uncurl your spine until your pelvis returns to the floor and your knees are again positioned above your hips. Maintain abdominal tension throughout the descent.'
    },
  ],

  commonMistakes: [
    {
      title: 'Only moving the knees',
      description:
        'Bringing your knees towards your chest without lifting or curling the pelvis turns the exercise mostly into hip flexion. Focus on actively rolling your pelvis towards your rib cage.'
    },
    {
      title: 'Using momentum',
      description:
        'Avoid swinging your legs to throw your hips from the floor. The hip lift should come from a controlled abdominal contraction rather than momentum.'
    },
    {
      title: 'Throwing the legs overhead',
      description:
        'The goal is not to send your knees as far towards your head as possible. Stop once you have achieved a controlled pelvic curl and your lower spine has naturally lifted from the floor.'
    },
    {
      title: 'Dropping the hips',
      description:
        'Do not allow your pelvis to fall back onto the floor after reaching the top. Slowly uncurl your spine to maintain control throughout the entire repetition.'
    },
    {
      title: 'Changing the knee angle',
      description:
        'Keep your knees comfortably bent at approximately the same angle throughout the repetition. Avoid repeatedly extending and bending your legs to generate momentum.'
    },
  ],

  relatedExercises: [
    'crunch',
    'bicycle-crunches',
    'leg-raises'
  ],

  faq: [
    {
      question: 'What are Reverse Crunches?',
      answer:
        'Reverse Crunches are an abdominal exercise where the pelvis moves towards the rib cage. Instead of lifting your shoulders from the floor like a regular Crunch, you curl your pelvis upward and slightly lift your hips.'
    },
    {
      question: 'What muscles do Reverse Crunches work?',
      answer:
        'The abdominals are the main muscles responsible for curling the pelvis towards the rib cage. The obliques and other core muscles help stabilize and control the movement, while the hip flexors also contribute to positioning the legs.'
    },
    {
      question: 'Should my hips leave the floor during Reverse Crunches?',
      answer:
        'Yes. A small and controlled hip lift is an important part of the movement. The goal is to curl the pelvis upward rather than simply bringing your knees closer to your chest.'
    },
    {
      question: 'What is the difference between a Reverse Crunch and a Leg Raise?',
      answer:
        'A Reverse Crunch focuses on curling and lifting the pelvis towards the rib cage. A Leg Raise primarily moves the legs through hip flexion while the abdominals work to control the pelvis and lower back.'
    },
    {
      question: 'How can I make Reverse Crunches harder?',
      answer:
        'Make each pelvic curl slower and more controlled, especially during the lowering phase. You can later progress to movements that use a longer leg lever, such as Leg Raises, while maintaining the same level of pelvic and trunk control.'
    },
  ],

  seo: {
    title:
      'Reverse Crunches: Technique, Muscles & Guide | Treethenics',

    description:
      'Learn how to perform Reverse Crunches with proper pelvic movement, abdominal control, progressions and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/reverse-crunches.png',
};
