
import { Exercise } from '../../../../shared/models/exercise.model';

export const HANGING_LEG_RAISE: Exercise = {
  id: 'hanging-leg-raise',
  name: 'Hanging Leg Raise',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'biceps',
    'shoulders'
  ],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'quadriceps',
    'forearms',
    'latissimus-dorsi',
    'upper-back'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Hanging Leg Raise is an intermediate bodyweight core exercise performed while hanging from a pull-up bar. The athlete raises both straight legs towards hip height while maintaining controlled shoulder positioning and minimizing momentum. It strengthens the abdominal muscles and hip flexors while challenging grip endurance and pelvic control.',

  overview:
    'Begin hanging from a secure pull-up bar with an overhand grip approximately shoulder-width apart. Keep your elbows extended, shoulders controlled, and legs together. Engage your abdominal muscles and lift both straight legs forward by flexing at the hips, aiming to reach approximately a 90-degree angle between your legs and torso. Add a slight posterior pelvic tilt to increase abdominal involvement and avoid excessive lower-back arching. Pause briefly at the top, then lower your legs slowly to the starting position without swinging. Maintain straight knees throughout the movement and avoid using momentum to raise your legs.',

  howTo: [
    {
      title: 'Establish a stable hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a secure pull-up bar with your palms facing away from you and your hands approximately shoulder-width apart. Hang with your elbows fully extended and your feet off the ground.'
    },
    {
      title: 'Engage your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Keep your legs together and your knees extended. Engage your abdominals, maintain controlled shoulder positioning, and minimize body swinging before initiating the movement.'
    },
    {
      title: 'Raise your straight legs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lift both legs forward while keeping your knees straight. Control the movement through your hips and abdominal muscles rather than swinging your lower body.'
    },
    {
      title: 'Reach the horizontal position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue lifting until your legs are approximately parallel to the floor. Maintain abdominal tension and gently tilt your pelvis backwards without excessively rounding your upper back.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly lower your legs to the starting hanging position. Keep your knees extended, avoid excessive swinging, and regain stability before beginning another repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using momentum',
      description:
        'Avoid swinging your legs backwards before lifting them. Raise your legs through controlled muscular effort rather than using a pendulum motion.'
    },
    {
      title: 'Bending the knees excessively',
      description:
        'The Hanging Leg Raise is performed with straight or nearly straight knees. Excessive knee bending reduces the lever length and changes the exercise towards a Hanging Knee Raise.'
    },
    {
      title: 'Arching the lower back',
      description:
        'Avoid excessive lumbar extension during the movement. Engage your abdominals and maintain controlled pelvic positioning as your legs rise.'
    },
    {
      title: 'Lifting the legs too quickly',
      description:
        'Rapid leg movement can generate momentum and reduce control. Use a smooth lifting phase and avoid jerking your hips.'
    },
    {
      title: 'Dropping the legs',
      description:
        'Do not allow your legs to fall freely from the top position. Control the eccentric phase to maintain abdominal tension and minimize swinging.'
    },
    {
      title: 'Losing shoulder stability',
      description:
        'Avoid uncontrolled shoulder movement while hanging. Maintain a secure grip and comfortable shoulder alignment throughout the exercise.'
    },
    {
      title: 'Performing an incomplete range of motion',
      description:
        'Avoid stopping well below hip height if your goal is a full Hanging Leg Raise. Use an easier progression if you cannot lift your straight legs towards the horizontal position with control.'
    },
  ],

  relatedExercises: [
    'hanging-knee-raises',
    'l-sit',
    'toes-to-bar',
    'leg-raises'
  ],

  faq: [
    {
      question: 'What is a Hanging Leg Raise?',
      answer:
        'A Hanging Leg Raise is a core exercise performed while suspended from a pull-up bar. The athlete lifts both straight legs forward, typically until they reach approximately hip height, before lowering them under control.'
    },
    {
      question: 'What muscles do Hanging Leg Raises work?',
      answer:
        'Hanging Leg Raises train the abdominal muscles and hip flexors. The obliques assist with pelvic control, while the forearms, upper back, and shoulder stabilizers help maintain the hanging position.'
    },
    {
      question: 'Are Hanging Leg Raises harder than Hanging Knee Raises?',
      answer:
        'Yes. Keeping the legs straight increases the distance between the hips and the legs’ center of mass, creating a greater torque demand than raising bent knees.'
    },
    {
      question: 'Should my legs stay completely straight?',
      answer:
        'Ideally, the knees should remain extended throughout the exercise. A slight bend is acceptable if necessary for mobility, but significant knee bending makes the movement easier.'
    },
    {
      question: 'How high should I raise my legs?',
      answer:
        'For a standard Hanging Leg Raise, aim to lift your straight legs until they are approximately parallel to the floor. Raising the feet all the way to the bar is a more demanding variation commonly called Toes To Bar.'
    },
    {
      question: 'How can I stop swinging during Hanging Leg Raises?',
      answer:
        'Begin from a stable hang, engage your core before lifting, and use a controlled tempo. Avoid throwing your legs upwards or dropping them rapidly during the lowering phase.'
    },
    {
      question: 'Do Hanging Leg Raises work the lower abs?',
      answer:
        'Hanging Leg Raises train the rectus abdominis as a whole rather than isolating a separate lower abdominal muscle. Posterior pelvic tilt and controlled pelvic movement can increase the abdominal contribution.'
    },
    {
      question: 'How can I make Hanging Leg Raises easier?',
      answer:
        'Begin with Hanging Knee Raises or perform partial straight-leg raises. Gradually increase the height of the lift while maintaining controlled movement and minimizing momentum.'
    },
  ],

  seo: {
    title:
      'Hanging Leg Raise: Technique & Progression | Treethenics',

    description:
      'Learn Hanging Leg Raises with correct straight-leg technique, abdominal activation, muscles worked, common mistakes and progressions towards Toes To Bar.',
  },

  imageUrl: '/images/exercises/hanging-leg-raise.png',
};
