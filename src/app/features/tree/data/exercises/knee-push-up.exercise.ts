import { Exercise } from '../../../../shared/models/exercise.model';

export const KNEE_PUSH_UP: Exercise = {
  id: 'knee-push-up',
  name: 'Knee Push Up',
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

  equipment: ['floor'],

  description:
    'The knee push up is an easier variation of the regular push up where your knees stay on the floor, reducing the amount of bodyweight you have to press. It is a great way to build chest, triceps, and shoulder strength while learning the basic push up movement. Keep your body in a straight line from your knees to your shoulders and use a full, controlled range of motion.',

  overview:
    'If regular push ups are still too difficult, knee push ups are a simple way to build the strength you need. Supporting yourself from the knees shortens your body lever and reduces the resistance compared with a full push up. The movement itself should still look like a push up: keep your hips extended, lower your chest between your hands, and press back to straight arms. Once you can perform clean reps comfortably, start introducing regular push ups rather than simply adding more and more knee push up reps.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands on the floor around shoulder-width apart and rest your knees on the ground. Move your knees far enough back that you can create a straight line from your knees through your hips to your shoulders.'
    },
    {
      title: 'Brace your body',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your abs and glutes before you start the rep. Keep your hips extended instead of sitting back towards your heels or bending at the waist.'
    },
    {
      title: 'Lower your chest',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and lower your chest towards the floor under control. Let your elbows travel back at a comfortable angle instead of flaring them straight out to the sides.'
    },
    {
      title: 'Push the floor away',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press through your hands until your elbows are fully extended again. Keep your torso and hips moving together instead of pushing your upper body up first.'
    },
    {
      title: 'Progress to regular push ups',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once knee push ups feel controlled and you can use a full range of motion, start practicing regular push ups. You can mix a few regular push up attempts with knee push ups while you build enough strength to make the full version consistent.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending at the hips',
      description:
        'Do not perform the exercise with your hips pushed backwards and your body folded at the waist. Keep your hips extended so your knees, hips, and shoulders form one stable line throughout the rep.'
    },
    {
      title: 'Only moving your upper body',
      description:
        'Your chest and hips should lower and rise together. If your chest reaches the floor while your hips stay high, reset your position and brace your core before the next rep.'
    },
    {
      title: 'Using a very short range of motion',
      description:
        'Knee push ups are already designed to reduce the resistance, so use that advantage to practice good depth. Lower your chest close to the floor under control and finish each rep with your elbows extended.'
    },
    {
      title: 'Staying on knee push ups forever',
      description:
        'Knee push ups are useful for building strength, but if your goal is a regular push up you eventually need to practice that position too. Once the knee variation feels comfortable, begin adding regular push up attempts or another progression that brings you closer to supporting yourself from your feet.'
    },
  ],

  relatedExercises: [
    'push-up',
    'incline-push-up',
    'diamond-push-up'
  ],

  faq: [
    {
      question: 'Are knee push ups good for beginners?',
      answer:
        'Yes. Knee push ups reduce the amount of bodyweight you need to press while still letting you practice the main pushing action of a push up. They are especially useful if you cannot yet perform regular push ups through a controlled range of motion.'
    },
    {
      question: 'Do knee push ups build the same muscles as regular push ups?',
      answer:
        'They train the same main pushing muscles, including the chest, triceps, and shoulders, but the exercise is less demanding because supporting yourself from the knees shortens the lever and reduces the load. Regular push ups also place a greater demand on maintaining a full-body plank position.'
    },
    {
      question: 'Should my hips be bent during knee push ups?',
      answer:
        'No. Keep your hips extended and aim for a straight line from your knees through your hips to your shoulders. Sitting your hips back makes the exercise easier but changes the movement and gives you less practice for a regular push up.'
    },
    {
      question: 'When should I move from knee push ups to regular push ups?',
      answer:
        'There is no magic number of knee push ups you need first. When you can perform them with good depth and consistent body position, start adding regular push up attempts. You can practice a few full push ups first and then finish the set with knee push ups if needed.'
    },
  ],

  seo: {
    title:
      'Knee Push Up: How to Do It & Progress to Push Ups | Treethenics',

    description:
      'Learn how to do Knee Push Ups with proper form, muscles worked, common mistakes and an easy progression towards regular push ups.',
  },

  imageUrl: '/images/exercises/knee-push-up.png',
};
