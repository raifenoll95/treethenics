import { Exercise } from '../../../../shared/models/exercise.model';

export const HANGING_KNEE_RAISES: Exercise = {
  id: 'hanging-knee-raises',
  name: 'Hanging Knee Raises',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'latissimus-dorsi',
    'forearms'
  ],

  equipment: ['pull-up-bar'],

  description:
    'Hanging Knee Raises are a fundamental hanging core exercise where you lift your bent knees towards your chest while keeping your upper body stable. They develop abdominal control, hip flexion strength, grip, and the ability to resist swinging while hanging from a bar.',

  overview:
    'Hang from a pull-up bar with straight arms and establish a stable position before beginning the movement. Bend your knees and bring them towards your chest while gently curling your pelvis upward at the top. Avoid simply swinging the thighs forward; the goal is to control both the hip movement and the position of your pelvis. Lower your legs slowly until you return to a stable hang before beginning the next repetition. Once this movement becomes controlled, progress towards Hanging Leg Raises by gradually extending the knees and increasing the lever length.',

  howTo: [
    {
      title: 'Hang from the bar',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip the pull-up bar around shoulder width and hang with your elbows completely straight. Create light tension through your shoulders and wait until your body is still.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your trunk and keep your ribs and pelvis controlled before moving your legs. Avoid starting the repetition from a swing.'
    },
    {
      title: 'Raise your knees',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your knees and bring them upward towards your chest. Keep the movement smooth and avoid kicking your legs forward for momentum.'
    },
    {
      title: 'Curl the pelvis',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Near the top, gently curl your pelvis towards your ribs instead of stopping as soon as your thighs reach horizontal. Keep your upper body controlled.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly lower your knees until your hips return to the starting position. Remove any swing before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Swinging the body',
      description:
        'Using the backward and forward swing to lift your knees removes much of the controlled core work. Begin each repetition from a stable hang and stop the movement if momentum starts to take over.'
    },
    {
      title: 'Only lifting the thighs',
      description:
        'Simply bringing the thighs to hip height makes the movement primarily a hip-flexion action. Continue by gently curling the pelvis upward to involve the abdominal muscles more actively.'
    },
    {
      title: 'Dropping the legs',
      description:
        'Do not let your legs fall after reaching the top. Control the lowering phase so you return to the starting position without creating momentum for the next repetition.'
    },
    {
      title: 'Bending the elbows',
      description:
        'Keep your arms straight instead of turning the exercise into a partial Pull Up. Your upper body should provide a stable base while your pelvis and legs perform the movement.'
    },
    {
      title: 'Shrugging into the shoulders',
      description:
        'Avoid completely collapsing into a passive hang during every repetition. Maintain enough shoulder and upper-back tension to keep the hanging position stable and controlled.'
    },
  ],

  relatedExercises: [
    'hanging-leg-raise',
    'toes-to-bar',
    'l-sit'
  ],

  faq: [
    {
      question: 'What are Hanging Knee Raises?',
      answer:
        'Hanging Knee Raises are a core exercise performed while hanging from a bar. You bend your knees and raise them towards your chest while controlling your pelvis and preventing your body from swinging.'
    },
    {
      question: 'What muscles do Hanging Knee Raises work?',
      answer:
        'The abdominals and hip flexors are heavily involved in raising and controlling the pelvis and thighs. The obliques assist with trunk stability, while the forearms, lats, and shoulder stabilizers help maintain a controlled hanging position.'
    },
    {
      question: 'Why do I feel Hanging Knee Raises in my hip flexors?',
      answer:
        'The hip flexors actively lift your thighs, so feeling them work is normal. To increase the abdominal contribution, avoid simply stopping with your thighs horizontal and add a controlled posterior pelvic curl as your knees move towards your chest.'
    },
    {
      question: 'Should my knees reach my chest?',
      answer:
        'Bring your knees as high as you can while maintaining control. The exact height depends on your strength and mobility, but the movement should include controlled pelvic motion rather than relying on momentum to force additional range.'
    },
    {
      question: 'How do I progress from Hanging Knee Raises?',
      answer:
        'Gradually increase the lever by extending your legs. You can progress through partially extended knee raises before performing Hanging Leg Raises with straight legs, and later advance towards strict Toes to Bar.'
    },
  ],

  seo: {
    title:
      'Hanging Knee Raises: Technique & Progressions | Treethenics',

    description:
      'Learn Hanging Knee Raises with proper core and pelvic control, muscles worked, progressions and common mistakes before advancing to Hanging Leg Raises.',
  },

  imageUrl: '/images/exercises/hanging-knee-raises.png',
};
