
import { Exercise } from '../../../../shared/models/exercise.model';

export const ARCHER_PUSH_UP: Exercise = {
  id: 'archer-push-up',
  name: 'Archer Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: [
    'chest',
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'chest',
    'triceps',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'obliques',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The Archer Push Up is an intermediate unilateral pushing exercise performed with a wide hand position. By bending one arm while keeping the opposite arm nearly straight, the athlete shifts most of the bodyweight towards the working side. It develops chest, shoulder, and triceps strength while preparing the body for the One Arm Push Up.',

  overview:
    'Begin in a high plank with your hands positioned significantly wider than shoulder-width apart. Keep your body straight and your core engaged. Shift your weight towards one hand while bending that elbow and lowering your chest towards the working side. The opposite arm remains extended to the side, providing balance and partial assistance. Press through the bent arm to return to the starting position, then repeat on the opposite side. Maintain controlled movement and avoid rotating or twisting your torso excessively.',

  howTo: [
    {
      title: 'Set a wide hand position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a high plank with your hands placed much wider than shoulder-width apart. Keep your elbows extended, legs straight, and core engaged.'
    },
    {
      title: 'Shift your weight',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Move your upper body towards one hand while keeping your hips and shoulders aligned. Allow the opposite arm to extend outwards as your weight shifts towards the working side.'
    },
    {
      title: 'Lower towards one arm',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend the working elbow and lower your chest towards that hand. Keep the opposite arm nearly straight and maintain a rigid body position from head to heels.'
    },
    {
      title: 'Push back to the center',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press strongly through the working hand to extend your elbow and move your torso back towards the center. Avoid twisting your hips or using momentum.'
    },
    {
      title: 'Repeat on the opposite side',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Shift your weight towards the other hand and repeat the movement with the opposite arm. Maintain a consistent range of motion and controlled technique on both sides.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending both elbows equally',
      description:
        'The Archer Push Up requires one arm to perform most of the pushing while the opposite arm remains nearly straight. Bending both elbows equally turns the exercise into a wide Push Up.'
    },
    {
      title: 'Not shifting enough weight',
      description:
        'Keeping your torso centered between both hands reduces the unilateral strength demand. Move your chest towards the working arm during the lowering phase.'
    },
    {
      title: 'Rotating the hips',
      description:
        'Avoid twisting your pelvis or opening your torso excessively towards the working side. Keep your hips and shoulders as aligned as possible.'
    },
    {
      title: 'Using a partial range of motion',
      description:
        'Lower your chest towards the working hand through a controlled range rather than performing only a shallow elbow bend.'
    },
    {
      title: 'Letting the hips sag',
      description:
        'Maintain abdominal and glute tension throughout the exercise. Avoid arching your lower back or allowing your hips to drop.'
    },
    {
      title: 'Placing the hands excessively wide',
      description:
        'An unnecessarily wide grip can create excessive shoulder stress and reduce control. Choose a width that allows the supporting arm to remain extended without forcing an uncomfortable position.'
    },
  ],

  relatedExercises: [
    'push-up',
    'diamond-push-up',
    'one-arm-push-up-clean-form'
  ],

  faq: [
    {
      question: 'What is an Archer Push Up?',
      answer:
        'The Archer Push Up is a unilateral pushing variation where one arm bends to support most of the bodyweight while the opposite arm stays nearly straight and provides assistance.'
    },
    {
      question: 'What muscles do Archer Push Ups work?',
      answer:
        'Archer Push Ups primarily work the pectorals, triceps, and anterior deltoids. The serratus anterior and core muscles help stabilize the shoulders and prevent excessive body rotation.'
    },
    {
      question: 'Are Archer Push Ups harder than regular Push Ups?',
      answer:
        'Yes. Archer Push Ups shift more bodyweight towards one arm, increasing the strength and stability demands compared with a standard Push Up.'
    },
    {
      question: 'Are Archer Push Ups good for learning One Arm Push Ups?',
      answer:
        'Yes. They are a useful progression because they increase the load on one arm while allowing the opposite hand to provide assistance. Gradually reducing that assistance can help prepare for a strict One Arm Push Up.'
    },
    {
      question: 'Should the supporting arm be completely straight?',
      answer:
        'The supporting arm should remain straight or nearly straight during the lowering phase. Its role is to provide balance and limited assistance while the working arm performs most of the pushing.'
    },
    {
      question: 'How can I make Archer Push Ups easier?',
      answer:
        'Perform them with your hands elevated on a stable surface, reduce the amount of weight shifted towards the working arm, or practice controlled wide Push Ups before progressing to the full movement.'
    },
  ],

  seo: {
    title:
      'Archer Push Up: Technique & Progression | Treethenics',

    description:
      'Learn the Archer Push Up with proper unilateral pushing technique, muscles worked, common mistakes and progressions towards the One Arm Push Up.',
  },

  imageUrl: '/images/exercises/archer-push-up.png',
};
