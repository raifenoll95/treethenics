import { Exercise } from '../../../../shared/models/exercise.model';

export const SIDE_PLANK: Exercise = {
  id: 'side-plank',
  name: 'Side Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'obliques'
  ],

  secondaryMuscles: [
    'abdominals',
    'glutes',
    'serratus-anterior',
    'front-deltoids'
  ],

  equipment: ['floor'],

  description:
    'The Side Plank is an isometric core exercise where you support your body on one forearm and the side of your feet while maintaining a straight lateral position. It primarily challenges the obliques and surrounding trunk muscles to prevent your hips from dropping towards the floor.',

  overview:
    'The Side Plank develops lateral core stability rather than simply training the abdominals through movement. Stack your elbow beneath your shoulder, extend your legs, and lift your hips until your head, torso, hips, and feet form a controlled line. Keep the pelvis elevated and avoid rotating your chest towards the floor. Train both sides and prioritize a stable position over holding for as long as possible.',

  howTo: [
    {
      title: 'Set your forearm',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your side and place your forearm on the floor with your elbow approximately underneath your shoulder. Keep the supporting shoulder active instead of collapsing into it.'
    },
    {
      title: 'Extend your legs',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Straighten both legs and stack your feet, or use a slightly staggered foot position while learning the exercise. Keep your body aligned before lifting your hips.'
    },
    {
      title: 'Lift your hips',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Press through your forearm and feet while lifting your hips away from the floor. Create a long line through your head, shoulders, hips, knees, and ankles.'
    },
    {
      title: 'Control your torso',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Brace your core and glutes while keeping your chest facing forward. Avoid allowing your pelvis to rotate towards the floor or excessively backwards.'
    },
    {
      title: 'Hold both sides',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the position while breathing normally, then repeat on the opposite side. End the hold when you can no longer keep your hips elevated and your torso controlled.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips drop',
      description:
        'As fatigue increases, the pelvis often begins to sag towards the floor. End the hold or use an easier variation when you can no longer maintain a straight lateral body position.'
    },
    {
      title: 'Rotating towards the floor',
      description:
        'Turning your chest and pelvis down changes the position and reduces the lateral stability challenge. Keep your torso controlled and approximately perpendicular to the floor.'
    },
    {
      title: 'Collapsing into the shoulder',
      description:
        'Do not let your supporting shoulder sink towards your ear or carry the position passively. Press actively through your forearm and maintain space through the shoulder throughout the hold.'
    },
    {
      title: 'Holding longer with poor form',
      description:
        'Extra seconds are not useful if your hips have dropped or your torso has rotated. Prioritize a shorter, controlled hold and progress the exercise when maintaining good alignment becomes easy.'
    },
  ],

  relatedExercises: [
    'plank',
    'side-plank-hip-lifts',
    'star-side-plank'
  ],

  faq: [
    {
      question: 'What is a Side Plank?',
      answer:
        'The Side Plank is a static core exercise performed on one side of the body. You support yourself on one forearm and your feet while keeping the hips elevated and the torso stable.'
    },
    {
      question: 'What muscles does the Side Plank work?',
      answer:
        'The obliques are heavily involved in maintaining the lateral trunk position. The rest of the abdominal wall, glutes, shoulder stabilizers, and serratus also contribute to keeping the pelvis, torso, and supporting shoulder controlled.'
    },
    {
      question: 'Why do I feel Side Planks in my shoulder?',
      answer:
        'Your supporting shoulder must stabilize a significant portion of your bodyweight, so some muscular effort there is expected. Keep the elbow beneath the shoulder and actively press through the forearm instead of sinking into the joint.'
    },
    {
      question: 'Should my feet be stacked or staggered?',
      answer:
        'Both positions are useful. Staggering the feet creates a larger base of support and can make balance easier, while stacking the feet narrows the base and increases the stability challenge. Use the position that lets you maintain good alignment.'
    },
    {
      question: 'How can I make the Side Plank harder?',
      answer:
        'Progress from a stable forearm Side Plank to stacked feet, longer lever positions, controlled hip movements, or variations where the upper leg is lifted. Increase difficulty only while you can maintain your hip and shoulder position.'
    },
  ],

  seo: {
    title:
      'Side Plank: Proper Form, Muscles & Progressions | Treethenics',

    description:
      'Learn the Side Plank with proper form, muscles worked, lateral core technique, progressions and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/side-plank.png',
};
