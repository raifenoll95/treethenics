
import { Exercise } from '../../../../shared/models/exercise.model';

export const WIDE_PUSH_UP: Exercise = {
  id: 'wide-push-up',
  name: 'Wide Push Up',
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
    'front-deltoids'
  ],

  secondaryMuscles: [
    'triceps',
    'serratus-anterior',
    'abdominals',
    'obliques',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The Wide Push Up is a bodyweight pushing exercise performed with the hands positioned wider than shoulder-width apart. This variation changes the mechanical demands of a standard Push Up, emphasizing the chest while challenging shoulder stability and upper-body control.',

  overview:
    'Begin in a high plank with your hands placed wider than shoulder-width apart and your feet extended behind you. Keep your body aligned from head to heels while engaging your core and glutes. Bend both elbows simultaneously to lower your chest towards the floor, allowing your elbows to move outward at a comfortable angle. Press through both palms to extend your arms and return to the starting position. Maintain symmetrical movement and avoid using an excessively wide hand position that compromises shoulder comfort or control.',

  howTo: [
    {
      title: 'Set a wide hand position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands on the floor wider than shoulder-width apart, with your fingers pointing forward or slightly outward. Choose a width that allows comfortable shoulder movement.'
    },
    {
      title: 'Establish a strong plank',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Extend your legs behind you and support your body on your hands and toes. Brace your abdominals and glutes to maintain a straight line from your head to your heels.'
    },
    {
      title: 'Lower your chest',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend both elbows simultaneously and lower your chest towards the floor. Keep your shoulders controlled and avoid allowing your elbows to flare excessively.'
    },
    {
      title: 'Push through both hands',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press firmly through both palms and extend your elbows to raise your body. Keep your hips and shoulders moving together without shifting your weight to one side.'
    },
    {
      title: 'Complete the repetition',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Return to the starting plank with your arms extended and your body aligned. Maintain control before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Placing the hands excessively wide',
      description:
        'An extreme hand width can reduce your usable range of motion and place unnecessary stress on the shoulders. Use a moderate width that allows controlled movement.'
    },
    {
      title: 'Flaring the elbows too far',
      description:
        'Avoid forcing your upper arms directly out to the sides at a 90-degree angle to your torso. Keep your elbows at a comfortable angle to maintain shoulder control.'
    },
    {
      title: 'Performing shallow repetitions',
      description:
        'Do not use the wider hand position as an excuse to perform very short repetitions. Lower through a comfortable range while maintaining proper shoulder alignment.'
    },
    {
      title: 'Letting the hips sag',
      description:
        'Allowing your pelvis to drop creates excessive lower-back extension. Maintain abdominal and glute tension throughout the movement.'
    },
    {
      title: 'Shifting towards one arm',
      description:
        'The Wide Push Up is a symmetrical pushing exercise. Avoid shifting most of your bodyweight to one side, which changes the movement towards an Archer Push Up.'
    },
    {
      title: 'Rushing the movement',
      description:
        'Avoid bouncing at the bottom or using momentum to return to the top. Maintain a controlled descent and smooth pushing phase.'
    },
  ],

  relatedExercises: [
    'push-up',
    'archer-push-up',
    'diamond-push-up'
  ],

  faq: [
    {
      question: 'What is a Wide Push Up?',
      answer:
        'A Wide Push Up is a Push Up variation performed with the hands positioned farther apart than shoulder-width. Both arms bend and extend together while the body remains aligned.'
    },
    {
      question: 'What muscles do Wide Push Ups work?',
      answer:
        'Wide Push Ups primarily train the pectorals and anterior deltoids, with the triceps assisting elbow extension. The serratus anterior and core muscles contribute to shoulder stability and body alignment.'
    },
    {
      question: 'Do Wide Push Ups target the chest more than regular Push Ups?',
      answer:
        'A wider hand position changes shoulder and elbow mechanics and can increase the relative emphasis on the pectorals. However, muscle activation depends on technique and hand width, and an excessively wide grip does not necessarily produce better results.'
    },
    {
      question: 'Are Wide Push Ups harder than regular Push Ups?',
      answer:
        'Not necessarily. A wider hand position can reduce the range of motion and change the leverage. Some athletes find Wide Push Ups easier, while others experience greater shoulder demands.'
    },
    {
      question: 'What is the difference between Wide Push Ups and Archer Push Ups?',
      answer:
        'Wide Push Ups involve bending both elbows simultaneously while keeping the body centered. Archer Push Ups shift most of the bodyweight towards one arm while the opposite arm remains nearly straight.'
    },
    {
      question: 'How wide should my hands be?',
      answer:
        'Start with your hands moderately wider than shoulder-width apart and adjust according to your mobility and comfort. Avoid extreme widths that force your shoulders into an uncomfortable position.'
    },
  ],

  seo: {
    title:
      'Wide Push Up: Technique & Muscles Worked | Treethenics',

    description:
      'Learn the Wide Push Up with proper hand placement, chest activation, shoulder alignment, common mistakes and progressions.',
  },

  imageUrl: '/images/exercises/wide-push-up.png',
};
