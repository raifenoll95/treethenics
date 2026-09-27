import { Exercise } from '../../../../shared/models/exercise.model';

export const PIKE_PUSH_UP: Exercise = {
  id: 'pike-push-up',
  name: 'Pike Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'triceps', 'chest'],

  primaryMuscles: ['front-deltoids', 'triceps'],

  secondaryMuscles: ['serratus-anterior', 'upper-back', 'abdominals'],

  equipment: ['floor'],

  description:
    'The pike push up is one of the best bodyweight exercises for building overhead pushing strength. Unlike a regular push up, your hips stay high and your upper body moves towards the floor at a much steeper angle, making your shoulders do more of the work. It is also an important exercise to master if your goal is to eventually perform handstand push ups.',

  overview:
    'If you want to build stronger shoulders and eventually work towards handstand push ups, the pike push up is a great place to start. The movement teaches you how to press your bodyweight from a more vertical position without having to balance upside down. Focus on getting your hips high and controlling where your head travels. As you get stronger, you can elevate your feet to put more weight over your hands and gradually make the exercise closer to a handstand push up.',

  howTo: [
    {
      title: 'Start in a pike position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands on the floor around shoulder-width apart and lift your hips high until your body forms an inverted V shape. Keep your hands firmly planted and try to bring your upper body into a steeper position than you would use for a regular push up.'
    },
    {
      title: 'Lower your head towards the floor',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your elbows and lower yourself under control. Instead of bringing your chest straight down between your hands like a regular push up, think about bringing your head towards the floor slightly in front of your hands. Keep your hips high throughout the movement.'
    },
    {
      title: 'Push yourself back up',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Push strongly through your hands until your arms are extended again. At the top, actively push the floor away and return to a strong pike position without letting your hips collapse.'
    },
    {
      title: 'Elevate your feet',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Once regular pike push ups feel comfortable, place your feet on a stable box or bench. This shifts more of your weight towards your hands and makes the exercise much more demanding on your shoulders. Increase the elevation gradually instead of jumping straight to a nearly vertical position.'
    },
    {
      title: 'Work towards handstand push ups',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'As your elevated pike push ups become stronger and more vertical, you can start introducing wall handstands and handstand push up progressions. Keep building strength through controlled reps rather than rushing into full handstand push ups before you are ready.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting your hips drop',
      description:
        'If your hips drop too low, the movement starts turning into a regular push up and your shoulders do less of the work. Keep your hips high throughout the rep and think about creating an inverted V shape with your body.'
    },
    {
      title: 'Lowering your chest instead of your head',
      description:
        'A pike push up should feel more like an overhead press than a regular push up. If you are bringing your chest directly between your hands, you are probably moving too horizontally. Let your head travel towards the floor while keeping your hips high.'
    },
    {
      title: 'Flaring your elbows too far out',
      description:
        'Avoid letting your elbows point directly out to the sides as you descend. Keep them at a comfortable angle and relatively close to your body so you can maintain a strong and controlled pressing position.'
    },
    {
      title: 'Elevating your feet too early',
      description:
        'Putting your feet on a high box looks like progress, but it is not useful if your technique falls apart. First build clean pike push ups on the floor, then gradually increase the elevation while maintaining the same control and range of motion.'
    },
  ],

  relatedExercises: [
    'push-up',
    'decline-push-up',
    'handstand-push-up'
  ],

  faq: [
    {
      question: 'What muscles do pike push ups work?',
      answer:
        'Pike push ups mainly train your shoulders and triceps, with your chest and the muscles around your shoulder blades also contributing to the movement. Your core also has to stay active to help you maintain a strong pike position throughout each rep.'
    },
    {
      question: 'Are pike push ups good for learning handstand push ups?',
      answer:
        'Yes. Pike push ups are one of the most useful exercises for building the overhead pushing strength needed for handstand push ups. As you get stronger, elevating your feet makes your body more vertical and gradually increases the amount of weight supported by your upper body.'
    },
    {
      question: 'How many pike push ups should I be able to do?',
      answer:
        'There is no required number, but being able to perform around 10 clean pike push ups with a controlled range of motion is a good goal. After that, instead of only adding more reps, you can make the exercise harder by elevating your feet and working towards a more vertical position.'
    },
    {
      question: 'Why do I feel pike push ups mostly in my shoulders?',
      answer:
        'That is exactly what you should expect. The pike position changes the angle of the push up and makes the movement much closer to an overhead press, placing more demand on your shoulders. As long as you are not experiencing pain and your technique is controlled, feeling your shoulders working hard is normal.'
    },
  ],

  seo: {
    title:
      'Pike Push Up: How to Do It, Muscles & Progressions | Treethenics',

    description:
      'Learn how to do the Pike Push Up with proper technique, muscles worked, common mistakes and progressions towards stronger shoulders and handstand push ups.',
  },

  imageUrl: '/images/exercises/pike-push-up.png',
};
