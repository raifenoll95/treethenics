import { Exercise } from '../../../../shared/models/exercise.model';

export const DECLINE_PUSH_UP: Exercise = {
  id: 'decline-push-up',
  name: 'Decline Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: ['chest', 'shoulders', 'triceps'],

  primaryMuscles: ['chest', 'front-deltoids', 'triceps'],

  secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

  equipment: ['weight-bench'],

  description:
    'The decline push up is a harder variation of the regular push up where your feet are placed on an elevated surface. This position shifts more of your bodyweight towards your upper body, making your chest, shoulders, and triceps work harder on every rep. It is a great progression once regular push ups feel comfortable and you want to build more pushing strength without adding external weight.',

  overview:
    'If regular push ups are becoming too easy, decline push ups are one of the simplest ways to make them harder. By elevating your feet, you increase the amount of bodyweight your upper body has to handle and place more demand on your shoulders and chest. Start with a low surface and only increase the height once you can perform clean reps without losing your body position.',

  howTo: [
    {
      title: 'Master regular push ups first',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before adding elevation, make sure you can perform regular push ups with a full range of motion and good body control. If you are still struggling to keep your hips and torso aligned during normal push ups, keep working on them before moving to the decline variation.'
    },
    {
      title: 'Start with a low surface',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Place your feet on a low and stable surface such as a small box or step, with your hands on the floor around shoulder-width apart. There is no need to start with a high bench. Even a small elevation will make the exercise noticeably harder.'
    },
    {
      title: 'Keep your body in a straight line',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Brace your abs and squeeze your glutes so your body stays aligned from your shoulders to your feet. Lower your chest towards the floor without letting your hips sag or sticking them up into the air.'
    },
    {
      title: 'Push back to the starting position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push the floor away until your arms are fully extended again while keeping the same body position. Once you can perform controlled reps consistently, you can gradually use a higher surface to make the exercise more challenging.'
    },
  ],

  commonMistakes: [
    {
      title: 'Starting with your feet too high',
      description:
        'You do not need to put your feet on the highest surface you can find. The higher you go, the more demanding the exercise becomes and the harder it is to maintain proper form. Start with a small elevation and increase it gradually as you get stronger.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Elevating your feet makes it easier to lose tension through your core and let your hips sag towards the floor. Keep your abs and glutes engaged throughout the entire rep so your body moves as one solid unit.'
    },
    {
      title: 'Turning it into a pike push up',
      description:
        'Another common mistake is lifting your hips too high, which changes the movement and shifts it towards a pike push up. Keep your body relatively straight and let the elevation of your feet create the extra difficulty instead.'
    },
    {
      title: 'Cutting the range of motion',
      description:
        'Decline push ups are harder than regular push ups, so it can be tempting to stop the rep early. Lower yourself under control through a consistent range of motion and fully extend your arms at the top. If you cannot do that yet, use a lower surface.'
    },
  ],

  relatedExercises: [
    'push-up',
    'diamond-push-up',
    'pike-push-up'
  ],

  faq: [
    {
      question: 'Are decline push ups harder than regular push ups?',
      answer:
        'Yes. Elevating your feet shifts more of your bodyweight towards your hands, so your upper body has to handle more load than it does during a regular push up. How much harder they feel will depend on the height of the surface you use.'
    },
    {
      question: 'What muscles do decline push ups work?',
      answer:
        'Decline push ups mainly work your chest, front deltoids, and triceps, while your core helps keep your body stable throughout the movement. Compared with a regular push up, the elevated position also makes your shoulders work harder as the angle becomes steeper.'
    },
    {
      question: 'How high should my feet be for decline push ups?',
      answer:
        'Start low. A small box or step is enough when you are learning the exercise. There is no perfect height that everyone needs to use. Increase the elevation gradually as long as you can still control the movement and maintain good form.'
    },
    {
      question: 'When should I start doing decline push ups?',
      answer:
        'Start experimenting with decline push ups once regular push ups feel comfortable and you can perform them consistently with good technique. You do not need to reach an exact number first, but being able to perform around 10–15 clean regular push ups is a useful starting point before making the movement harder.'
    },
  ],

  seo: {
    title:
      'Decline Push Up: How to Do It, Muscles & Progressions | Treethenics',

    description:
      'Learn how to do the Decline Push Up with proper technique, muscles worked, common mistakes and progressions to build stronger pushing strength.',
  },

  imageUrl: '/images/exercises/decline-push-up.png',
};
