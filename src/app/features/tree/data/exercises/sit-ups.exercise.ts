import { Exercise } from '../../../../shared/models/exercise.model';

export const SIT_UPS: Exercise = {
  id: 'sit-ups',
  name: 'Sit Ups',
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
    'obliques',
    'quadriceps'
  ],

  equipment: ['floor'],

  description:
    'Sit Ups are a classic dynamic core exercise where you raise your torso from the floor towards your thighs before lowering back down under control. Unlike a Crunch, the movement continues through a larger range of motion and involves both the abdominals and hip flexors.',

  overview:
    'Lie on your back with your knees bent and your feet planted on the floor. Brace your core and begin by curling your rib cage towards your pelvis, then continue raising your torso until you reach an upright or near-upright position. Lower yourself back to the floor with control rather than dropping backwards. Keep your neck relaxed and avoid using your arms or excessive momentum to throw yourself through the movement.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your back with your knees bent and your feet flat on the floor. Keep your feet around hip width apart and place your arms across your chest or in another comfortable position.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Engage your abdominals before leaving the floor and keep your neck relaxed as you prepare to raise your torso.'
    },
    {
      title: 'Curl your torso upward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Begin by bringing your rib cage towards your pelvis, lifting your head, shoulders, and upper back from the floor as one controlled movement.'
    },
    {
      title: 'Complete the Sit Up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue raising your torso towards your thighs until you reach the top of the movement. Keep your feet planted and avoid throwing your arms forward for momentum.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement and gradually lower your torso back towards the floor. Maintain control until your upper back returns to the starting position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using momentum',
      description:
        'Avoid throwing your torso forward to complete the repetition. Move smoothly enough that your abdominal and hip muscles control the movement rather than relying on momentum.'
    },
    {
      title: 'Pulling on the neck',
      description:
        'If your hands are positioned near your head, do not pull your head forward. Keep your neck relatively relaxed and allow it to follow the movement of your torso.'
    },
    {
      title: 'Dropping back to the floor',
      description:
        'Do not relax at the top and fall backwards. Control the entire lowering phase until your torso returns to the floor.'
    },
    {
      title: 'Throwing the arms forward',
      description:
        'Aggressively swinging your arms can provide enough momentum to make the repetition considerably easier. Keep your arm position consistent throughout the movement.'
    },
    {
      title: 'Turning it into a Crunch',
      description:
        'A Sit Up uses a larger range of motion than a Crunch. Do not stop as soon as your shoulder blades leave the floor if your goal is to perform the full Sit Up.'
    },
  ],

  relatedExercises: [
    'crunch',
    'reverse-crunches',
    'bicycle-crunches'
  ],

  faq: [
    {
      question: 'What are Sit Ups?',
      answer:
        'Sit Ups are a dynamic core exercise performed by raising your torso from a lying position towards your thighs and then lowering yourself back to the floor under control.'
    },
    {
      question: 'What muscles do Sit Ups work?',
      answer:
        'The abdominals contribute to flexing and controlling the trunk, while the hip flexors become increasingly involved as the torso continues towards the thighs. The obliques also assist with trunk control.'
    },
    {
      question: 'What is the difference between Sit Ups and Crunches?',
      answer:
        'A Crunch primarily curls the rib cage towards the pelvis and lifts only the upper back from the floor. A Sit Up continues through a much larger range until most of the torso has been raised, which increases the contribution of the hip flexors.'
    },
    {
      question: 'Should I anchor my feet during Sit Ups?',
      answer:
        'It is not necessary for the basic bodyweight version. Keeping your feet unanchored can help you learn to control the movement without relying heavily on an external support.'
    },
    {
      question: 'How can I make Sit Ups easier?',
      answer:
        'Start with Crunches to develop trunk flexion strength, use a smaller Sit Up range, or extend your arms forward to provide a small counterbalance. Gradually increase the range as your control improves.'
    },
  ],

  seo: {
    title:
      'Sit Ups: Technique, Muscles & Proper Form | Treethenics',

    description:
      'Learn how to perform Sit Ups with proper technique, controlled trunk movement, muscles worked and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/sit-ups.png',
};
