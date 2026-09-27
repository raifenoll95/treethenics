import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND_PUSH_UP: Exercise = {
  id: 'handstand-push-up',
  name: 'Handstand Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'triceps'],

  primaryMuscles: ['front-deltoids', 'triceps'],

  secondaryMuscles: [
    'serratus-anterior',
    'upper-back',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The handstand push up is one of the main vertical pushing exercises in calisthenics. Instead of pushing your body away from the floor horizontally, you press almost your entire bodyweight while upside down, making it a serious test of shoulder and triceps strength. Learning it takes time, but you do not need a freestanding handstand to start. Using a wall lets you build the strength and confidence you need before eventually taking the movement away from it.',

  overview:
    'The handstand push up is a big step up from exercises like push ups and pike push ups. You need strong shoulders and triceps, but you also need to feel comfortable supporting your body upside down. The best approach is to build the movement gradually: get strong at elevated pike push ups, become comfortable holding a handstand against the wall, then introduce negatives and partial reps before attempting the full exercise. Once wall handstand push ups become solid, you can start working towards the freestanding version.',

  howTo: [
    {
      title: 'Build strong elevated pike push ups',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before going upside down, get comfortable with elevated pike push ups. Place your feet on a box and keep your hips high so your upper body is as vertical as possible. This lets you build the overhead pushing strength needed for handstand push ups without having to support your full bodyweight.'
    },
    {
      title: 'Get comfortable in a wall handstand',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Next, practice holding a handstand against the wall with straight arms and active shoulders. You should be able to stay upside down comfortably and maintain control before adding repetitions. A chest-to-wall handstand is especially useful for learning a straighter body position.'
    },
    {
      title: 'Practice negative handstand push ups',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Start at the top of a wall handstand and slowly bend your elbows, lowering your head towards the floor under control. Take a few seconds on the way down instead of simply dropping into the bottom position. Negatives are a great way to build strength before you are able to push yourself back up.'
    },
    {
      title: 'Introduce partial reps',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Once your negatives are controlled, start performing partial handstand push ups against the wall. Use a reduced range of motion that you can actually press through, then gradually increase the depth as you get stronger instead of forcing a full rep too early.'
    },
    {
      title: 'Achieve your first handstand push up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Start with your arms extended, lower yourself under control until your head gently reaches the floor, then press strongly through your hands until your arms are extended again. Once wall reps become consistent, you can continue building strength and eventually start working towards freestanding handstand push ups.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying handstand push ups too early',
      description:
        'Being able to kick into a handstand does not necessarily mean you are ready to perform handstand push ups. Build your overhead strength with pike push ups and make sure you can comfortably support yourself against the wall before adding full repetitions.'
    },
    {
      title: 'Dropping onto your head',
      description:
        'Never let gravity do the work on the way down. The descent should be controlled from beginning to end, with your head reaching the floor gently. If you cannot control the negative yet, go back to elevated pike push ups or shorter handstand push up negatives.'
    },
    {
      title: 'Arching your lower back',
      description:
        'It is easy to overextend your lower back when you are upside down, especially when the rep starts getting difficult. Keep your core and glutes engaged and try to maintain a strong body position instead of turning every rep into a big back arch.'
    },
    {
      title: 'Using a tiny range of motion',
      description:
        'Partial reps are useful when you intentionally use them as a progression, but they should gradually lead towards a larger range of motion. Do not keep adding reps at the same shallow depth just to increase your numbers. Build the strength to go deeper over time.'
    },
  ],

  relatedExercises: [
    'pike-push-up',
    'decline-push-up',
    'handstand'
  ],

  faq: [
    {
      question: 'Do I need to know how to handstand before learning handstand push ups?',
      answer:
        'You do not need a freestanding handstand, but you should be comfortable holding yourself upside down against a wall before attempting full handstand push ups. The wall removes most of the balance requirement and lets you focus on building the strength and control needed for the movement.'
    },
    {
      question: 'What muscles do handstand push ups work?',
      answer:
        'Handstand push ups mainly challenge your shoulders and triceps, with your upper chest and the muscles around your shoulder blades also helping during the press. Your core and the rest of your body have another important job: keeping you stable and maintaining a strong position while you are upside down.'
    },
    {
      question: 'Are pike push ups good for learning handstand push ups?',
      answer:
        'Yes. Pike push ups are one of the best exercises to use before handstand push ups because they train a similar vertical pushing pattern with less bodyweight over your hands. Elevating your feet makes the exercise even more specific and is a great progression before moving to the wall.'
    },
    {
      question: 'Should I learn wall or freestanding handstand push ups first?',
      answer:
        'For most people, wall handstand push ups should come first. The wall takes away much of the balance requirement, allowing you to focus on developing strength and learning the movement. Once your wall reps are strong and controlled, you can start combining that strength with freestanding handstand practice.'
    },
  ],

  seo: {
    title:
      'Handstand Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the Handstand Push Up with proper technique, muscles worked, common mistakes and progressions from pike push ups to full reps.',
  },

  imageUrl: '/images/exercises/hspu3.png',
};
