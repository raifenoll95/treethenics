import { Exercise } from '../../../../shared/models/exercise.model';

export const BICYCLE_CRUNCHES: Exercise = {
  id: 'bicycle-crunches',
  name: 'Bicycle Crunches',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals',
    'obliques'
  ],

  secondaryMuscles: [
    'quadriceps'
  ],

  equipment: ['floor'],

  description:
    'Bicycle Crunches are a dynamic core exercise that combines abdominal flexion, torso rotation, and alternating leg movement. Each repetition brings one shoulder towards the opposite knee while the other leg extends, challenging both the abdominals and obliques.',

  overview:
    'Lie on your back with your hands lightly supporting your head and lift your legs from the floor. Bring one knee towards your chest while extending the opposite leg, then rotate your torso so the opposite shoulder moves towards the bent knee. Switch sides in a smooth and controlled motion. Focus on rotating through your torso rather than pulling your elbow across with your arm, and avoid rushing the pedaling movement.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your back with your hands lightly behind your head. Lift your shoulders from the floor and bring your knees into a bent position above your hips.'
    },
    {
      title: 'Extend one leg',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Extend one leg away from your body while keeping it elevated from the floor. At the same time, bring the opposite knee towards your chest.'
    },
    {
      title: 'Rotate your torso',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Rotate through your trunk and bring the opposite shoulder towards the bent knee. Think about moving your rib cage towards the opposite side rather than simply moving your elbow.'
    },
    {
      title: 'Switch sides',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Begin extending the bent leg as the other knee comes towards your chest. Rotate your torso in the opposite direction with the same controlled motion.'
    },
    {
      title: 'Continue alternating',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Alternate from side to side while keeping your shoulders elevated and your movement controlled. Maintain a steady rhythm without turning the exercise into a fast pedaling motion.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pulling on the neck',
      description:
        'Your hands should only provide light support for your head. Do not pull your head forward to create the illusion of a larger crunch.'
    },
    {
      title: 'Moving only the elbows',
      description:
        'Bringing an elbow towards the opposite knee without rotating the torso misses an important part of the exercise. Lift and rotate the shoulder and rib cage towards the opposite side.'
    },
    {
      title: 'Pedaling too quickly',
      description:
        'Rapidly kicking the legs back and forth often replaces controlled abdominal work with momentum. Slow the movement down enough to clearly control each rotation.'
    },
    {
      title: 'Resting between sides',
      description:
        'Avoid completely relaxing your shoulders onto the floor every time you switch sides. Maintain abdominal tension as you transition from one rotation to the other.'
    },
    {
      title: 'Losing control of the extended leg',
      description:
        'Do not force the straight leg extremely close to the floor if you cannot control your trunk position. Keep it higher and gradually increase the lever as your core strength improves.'
    },
  ],

  relatedExercises: [
    'crunch',
    'reverse-crunch',
    'hollow-body-hold'
  ],

  faq: [
    {
      question: 'What are Bicycle Crunches?',
      answer:
        'Bicycle Crunches are an alternating abdominal exercise that combines a crunch with torso rotation and a cycling motion of the legs. One knee moves towards the body while the opposite shoulder rotates towards it.'
    },
    {
      question: 'What muscles do Bicycle Crunches work?',
      answer:
        'The rectus abdominis and obliques are the main abdominal muscles involved. The hip flexors also help move the legs, while other core muscles contribute to controlling the trunk throughout the exercise.'
    },
    {
      question: 'Should my elbow touch my knee?',
      answer:
        'It can, but making contact is not the main objective. Focus on rotating your torso and bringing your shoulder towards the opposite knee rather than forcing the elbow across your body just to touch it.'
    },
    {
      question: 'Why do I feel Bicycle Crunches in my hip flexors?',
      answer:
        'The hip flexors actively move and support your legs during the cycling motion, so some involvement is normal. Slow the exercise down and focus on abdominal flexion and torso rotation instead of only moving your legs.'
    },
    {
      question: 'How can I make Bicycle Crunches easier?',
      answer:
        'Keep the extended leg higher from the floor, reduce the range of the leg movement, and perform each side slowly. You can also build abdominal control first with regular Crunches before returning to the alternating version.'
    },
  ],

  seo: {
    title:
      'Bicycle Crunches: Technique, Muscles & Guide | Treethenics',

    description:
      'Learn how to perform Bicycle Crunches with proper torso rotation, controlled leg movement, muscles worked and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/bicycle-crunches.png',
};
