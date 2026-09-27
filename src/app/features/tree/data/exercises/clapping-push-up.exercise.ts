import { Exercise } from '../../../../shared/models/exercise.model';

export const CLAPPING_PUSH_UP: Exercise = {
  id: 'clapping-push-up',
  name: 'Clapping Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: ['chest', 'triceps', 'shoulders'],

  primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The clapping push up is an explosive variation of the regular push up where you push with enough force to lift your hands off the floor and clap before landing. Instead of focusing only on strength or endurance, this exercise teaches you to produce force quickly. It is a great introduction to explosive calisthenics and a useful progression towards more advanced plyometric push up variations.',

  overview:
    'Once regular push ups feel comfortable, clapping push ups are a great way to start developing explosive pushing power. The goal is not simply to perform a push up faster. You need to push hard enough to create real airtime, quickly clap your hands, and get them back to the floor in time to control the landing. Start by learning explosive push ups without the clap, then add it once you can consistently get enough height.',

  howTo: [
    {
      title: 'Master your regular push ups',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before adding any explosive work, make sure regular push ups are already comfortable and controlled. You should be able to maintain a strong body position through every rep without your hips dropping or your technique changing as you get tired.'
    },
    {
      title: 'Practice explosive push ups',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Lower yourself like a normal push up, then push into the floor as explosively as possible so your hands leave the ground. Do not worry about clapping yet. First learn to create enough height while keeping your body under control.'
    },
    {
      title: 'Add the clap',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Once you can comfortably get your hands off the floor, push explosively and clap your hands together while you are in the air. Keep the clap quick and immediately move your hands back towards their normal push up position.'
    },
    {
      title: 'Learn to land softly',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Bring your hands back to the floor before your body comes down and land with your elbows slightly bent so you can absorb the impact. Stay tight through your core and avoid landing with completely straight arms.'
    },
    {
      title: 'Build explosive reps',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once individual reps feel controlled, start connecting a few clapping push ups together. Keep every rep fast and explosive, and stop the set when you noticeably lose height or your landings become difficult to control. Quality matters much more than chasing high rep numbers here.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying to clap before you have enough height',
      description:
        'The clap should happen because you created enough airtime, not because you desperately move your hands together before hitting the floor. First build a strong explosive push up where your hands clearly leave the ground, then introduce the clap.'
    },
    {
      title: 'Landing with locked elbows',
      description:
        'Do not land with completely straight and rigid arms. Let your elbows bend as your hands reach the floor so you can absorb the landing under control and transition naturally into the next rep.'
    },
    {
      title: 'Losing your body position',
      description:
        'Your hands leaving the floor does not mean the rest of your body should fall apart. Keep your core and glutes engaged so your hips do not sag or shoot upwards during the explosive phase and landing.'
    },
    {
      title: 'Training for reps instead of power',
      description:
        'Clapping push ups are an explosive exercise, so doing more repetitions is not always better. Once your push becomes noticeably slower, your airtime decreases, or your landings get messy, the set has stopped serving its main purpose. Rest and come back with more power.'
    },
  ],

  relatedExercises: [
    'push-up',
    'explosive-push-up',
    'superman-push-up'
  ],

  faq: [
    {
      question: 'What muscles do clapping push ups work?',
      answer:
        'Clapping push ups mainly work your chest, triceps, and front deltoids, with your core helping keep your body stable throughout the movement. The main difference from a regular push up is not the list of muscles involved, but how quickly you need to produce force to launch your upper body away from the floor.'
    },
    {
      question: 'Are clapping push ups good for building explosive strength?',
      answer:
        'Yes. Clapping push ups are a plyometric exercise designed around producing force quickly. Instead of slowly grinding through each rep, you accelerate your body hard enough for your hands to leave the floor, which makes them useful for developing upper-body explosive power.'
    },
    {
      question: 'How do I learn clapping push ups without falling?',
      answer:
        'Start with explosive push ups without the clap. Push hard enough for your hands to leave the floor slightly, then immediately place them back down and practice controlling the landing. As your airtime increases and you become more confident, add a quick clap before returning your hands to the floor.'
    },
    {
      question: 'How many clapping push ups should I do?',
      answer:
        'Think about quality rather than a specific number. A small set of powerful reps with good height and controlled landings is much more useful than a long set where every rep gets slower. Stop when you can no longer produce the same explosive push or control the landing properly.'
    },
  ],

  seo: {
    title:
      'Clapping Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the Clapping Push Up with proper technique, muscles worked, common mistakes and progressions to build explosive pushing power.',
  },

  imageUrl: '/images/exercises/clapping-push-up.png',
};
