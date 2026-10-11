
import { Exercise } from '../../../../shared/models/exercise.model';

export const NEUTRAL_GRIP_PULL_UP: Exercise = {
  id: 'neutral-grip-pull-up',
  name: 'Neutral Grip Pull Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
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
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Neutral Grip Pull Up is a bodyweight pulling exercise performed with the palms facing each other on parallel handles. It strengthens the latissimus dorsi, upper back, and elbow flexors while allowing a natural wrist position. It is a useful alternative to overhand and underhand Pull Ups for developing upper-body pulling strength.',

  overview:
    'Grip a pull-up station with parallel handles so that your palms face each other. Begin hanging with your arms fully extended, shoulders controlled, and feet suspended above the ground. Engage your core and initiate the pull by coordinating your shoulder blades and elbow flexors. Pull your body upwards until your chin reaches or passes the height of the handles, without excessively extending your neck. Lower yourself slowly until your elbows are fully extended again. Maintain a stable torso, avoid swinging, and perform each repetition through a controlled range of motion.',

  howTo: [
    {
      title: 'Establish a neutral grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip two parallel handles with your palms facing each other. Use a comfortable hand spacing, typically close to shoulder-width, and ensure the equipment is secure.'
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
        'Begin pulling by engaging your back muscles and bending your elbows. Keep your shoulders controlled and avoid swinging your legs to generate momentum.'
    },
    {
      title: 'Reach the top position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your chin reaches or passes the height of the handles. Keep your elbows moving naturally towards your sides and avoid excessively extending your neck.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly extend your elbows and return to the starting hang. Maintain shoulder control throughout the descent and avoid dropping abruptly.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using momentum',
      description:
        'Avoid swinging your legs or kicking your hips to lift your body. Perform the movement using controlled back and arm strength.'
    },
    {
      title: 'Not completing the range of motion',
      description:
        'Avoid performing only partial repetitions. Start from full elbow extension and pull upwards through the available controlled range.'
    },
    {
      title: 'Extending the neck excessively',
      description:
        'Do not reach your chin towards the handles by tilting your head backwards. Keep your neck relatively neutral and lift your body through the pulling movement.'
    },
    {
      title: 'Losing shoulder control',
      description:
        'Avoid shrugging excessively or allowing uncontrolled shoulder movement during the pull. Coordinate scapular movement naturally throughout the repetition.'
    },
    {
      title: 'Dropping too quickly',
      description:
        'Do not release tension abruptly during the lowering phase. Control the descent until your arms are fully extended.'
    },
    {
      title: 'Using an uncomfortable handle width',
      description:
        'An excessively narrow or wide neutral grip can make the movement awkward. Choose parallel handles that allow a comfortable position for your wrists, elbows, and shoulders.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'supinated-pull-up',
    'australian-pull-up',
    'chest-to-bar'
  ],

  faq: [
    {
      question: 'What is a Neutral Grip Pull Up?',
      answer:
        'A Neutral Grip Pull Up is a Pull Up variation performed with the palms facing each other on parallel handles. The athlete pulls the body upwards from a hanging position while keeping the grip neutral.'
    },
    {
      question: 'What muscles do Neutral Grip Pull Ups work?',
      answer:
        'Neutral Grip Pull Ups primarily train the latissimus dorsi, upper back, and elbow flexors, including the biceps and brachialis. The forearms and core muscles also contribute to grip and body stabilization.'
    },
    {
      question: 'Are Neutral Grip Pull Ups easier than regular Pull Ups?',
      answer:
        'Many athletes find Neutral Grip Pull Ups more comfortable or slightly easier than overhand Pull Ups because of the grip position and elbow mechanics. However, the actual difficulty depends on individual strength, handle spacing, and technique.'
    },
    {
      question: 'What is the difference between Neutral Grip and Chin Ups?',
      answer:
        'Neutral Grip Pull Ups use palms facing each other, while Chin Ups use an underhand grip with the palms facing towards the athlete. Both train the back and elbow flexors, but the forearm and shoulder positions differ.'
    },
    {
      question: 'Are Neutral Grip Pull Ups better for the wrists?',
      answer:
        'A neutral grip may feel more comfortable for some athletes because it avoids the fully pronated or supinated forearm positions. However, comfort varies, and the exercise should not be forced through wrist, elbow, or shoulder pain.'
    },
    {
      question: 'How can I make Neutral Grip Pull Ups easier?',
      answer:
        'Use an assistance band, an assisted Pull Up machine with neutral handles, or partial foot support. Gradually reduce assistance as your pulling strength improves.'
    },
    {
      question: 'Can Neutral Grip Pull Ups improve regular Pull Ups?',
      answer:
        'Yes. They develop general upper-body pulling strength that transfers to other Pull Up variations. However, practicing the specific grip you want to improve is also important.'
    },
  ],

  seo: {
    title:
      'Neutral Grip Pull Up: Technique & Benefits | Treethenics',

    description:
      'Learn Neutral Grip Pull Ups with proper technique, muscles worked, grip positioning, common mistakes and progressions for stronger Pull Ups.',
  },

  imageUrl: '/images/exercises/neutral-grip-pull-up.png',
};
