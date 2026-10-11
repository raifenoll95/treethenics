
import { Exercise } from '../../../../shared/models/exercise.model';

export const WIDE_GRIP_PULL_UP: Exercise = {
  id: 'wide-grip-pull-up',
  name: 'Wide Grip Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'back',
    'biceps',
    'shoulders',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Wide Grip Pull Up is an intermediate bodyweight pulling exercise performed with an overhand grip wider than shoulder-width apart. It develops upper-body pulling strength, particularly in the latissimus dorsi and upper-back muscles, while challenging shoulder control and grip endurance.',

  overview:
    'Grip a secure pull-up bar with your palms facing away from you and your hands moderately wider than shoulder-width apart. Begin hanging with your elbows fully extended and your shoulders controlled. Engage your core to minimize swinging, then pull your body upwards by bending your elbows and coordinating your shoulder blades. Continue until your chin approaches or passes the bar, depending on your comfortable range of motion and shoulder mechanics. Lower yourself slowly to full elbow extension without dropping abruptly. Avoid excessively wide hand positions that restrict movement or cause shoulder discomfort.',

  howTo: [
    {
      title: 'Establish a wide overhand grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip the pull-up bar with your palms facing away from you and your hands moderately wider than shoulder-width apart. Choose a width that allows comfortable shoulder movement.'
    },
    {
      title: 'Begin from a controlled hang',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Hang with your arms fully extended and your feet off the ground. Engage your abdominals and glutes to maintain a stable body position.'
    },
    {
      title: 'Initiate the pull',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Engage your back muscles and begin bending your elbows while coordinating your shoulder blades. Keep your torso controlled and avoid swinging your legs.'
    },
    {
      title: 'Reach the top position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your chin approaches or passes the bar without excessively extending your neck. Maintain a comfortable elbow and shoulder position throughout the movement.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly extend your elbows and return to the starting hang. Maintain shoulder control during the descent and avoid releasing tension abruptly.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using an excessively wide grip',
      description:
        'Placing your hands extremely far apart can restrict your range of motion and increase shoulder discomfort. Use a moderately wide grip that allows controlled movement.'
    },
    {
      title: 'Using momentum',
      description:
        'Avoid kicking your legs or swinging your torso to lift your body. Perform the exercise using controlled back and arm strength.'
    },
    {
      title: 'Performing incomplete repetitions',
      description:
        'Avoid intentionally shortening the movement because of the wider grip. Use a comfortable hand position that allows full elbow extension and a controlled upward pull.'
    },
    {
      title: 'Extending the neck excessively',
      description:
        'Do not tilt your head backwards to force your chin above the bar. Maintain a relatively neutral neck position and lift your body through the pulling movement.'
    },
    {
      title: 'Losing shoulder control',
      description:
        'Avoid forcing your shoulders into uncomfortable positions or allowing uncontrolled movement during the ascent and descent.'
    },
    {
      title: 'Pulling behind the neck',
      description:
        'Do not force the bar behind your head. Perform the movement in front of your body to maintain more natural shoulder and neck alignment.'
    },
    {
      title: 'Dropping too quickly',
      description:
        'Avoid releasing tension abruptly at the top. Control the lowering phase until your elbows are fully extended.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'neutral-grip-pull-up',
    'supinated-pull-up',
    'archer-pull-up'
  ],

  faq: [
    {
      question: 'What is a Wide Grip Pull Up?',
      answer:
        'A Wide Grip Pull Up is a Pull Up variation performed with an overhand grip wider than shoulder-width apart. The athlete pulls the body upwards while maintaining controlled shoulder and elbow movement.'
    },
    {
      question: 'What muscles do Wide Grip Pull Ups work?',
      answer:
        'Wide Grip Pull Ups primarily train the latissimus dorsi, upper-back muscles, and elbow flexors. The rear deltoids, forearms, and core muscles also contribute to stabilization.'
    },
    {
      question: 'Are Wide Grip Pull Ups harder than regular Pull Ups?',
      answer:
        'Many athletes find Wide Grip Pull Ups more challenging because the hand position changes the leverage and available range of motion. However, difficulty varies with grip width, shoulder mobility, and individual strength.'
    },
    {
      question: 'Do Wide Grip Pull Ups build wider lats?',
      answer:
        'They can contribute to latissimus dorsi development, but there is no guarantee that a wider grip produces greater lat growth than a standard grip. Progressive overload, adequate training volume, and controlled technique are more important.'
    },
    {
      question: 'How wide should my grip be?',
      answer:
        'Start with your hands moderately wider than shoulder-width apart. Adjust the spacing according to your shoulder comfort and ability to perform controlled repetitions.'
    },
    {
      question: 'Should I pull the bar behind my neck?',
      answer:
        'No. Pulling behind the neck is not necessary for Wide Grip Pull Ups and may create uncomfortable shoulder or neck positions. Keep the bar in front of your body.'
    },
    {
      question: 'How can I make Wide Grip Pull Ups easier?',
      answer:
        'Use a slightly narrower grip, practice standard Pull Ups, or perform assisted repetitions with a resistance band or suitable assistance equipment.'
    },
  ],

  seo: {
    title:
      'Wide Grip Pull Up: Technique & Muscles | Treethenics',

    description:
      'Learn Wide Grip Pull Ups with proper hand placement, back activation, muscles worked, common mistakes and progressions for stronger pulling.',
  },

  imageUrl: '/images/exercises/wide-grip-pull-up.png',
};
