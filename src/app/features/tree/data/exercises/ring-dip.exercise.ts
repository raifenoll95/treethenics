
import { Exercise } from '../../../../shared/models/exercise.model';

export const RING_DIP: Exercise = {
  id: 'ring-dip',
  name: 'Ring Dip',
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
    'triceps',
    'chest',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'abdominals',
    'obliques',
    'upper-back',
    'forearms',
    'latissimus-dorsi'
  ],

  equipment: ['rings'],

  description:
    'The Ring Dip is an intermediate bodyweight pushing exercise performed on suspended gymnastics rings. Unlike parallel bar Dips, the independently moving rings require additional shoulder stabilization, core tension, and upper-body control. It develops triceps, chest, and shoulder strength while preparing athletes for more advanced gymnastics ring skills.',

  overview:
    'Begin in a stable support position above two gymnastics rings with your arms fully extended, shoulders controlled, and feet suspended above the ground. Keep the rings close to your sides and engage your core to prevent excessive swinging. Slowly bend your elbows and lower your body between the rings, allowing a slight forward torso lean while maintaining shoulder stability. Descend through a comfortable range, typically until your shoulders approach elbow height if your mobility and control allow it. Press firmly through both rings to extend your arms and return to the support position. Keep the rings stable throughout the movement and avoid excessive outward drifting or uncontrolled shoulder extension.',

  howTo: [
    {
      title: 'Establish ring support',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip both rings and establish a stable support position with your arms fully extended and your feet off the ground. Keep the rings close to your hips, shoulders active, and core engaged.'
    },
    {
      title: 'Stabilize your body',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Maintain a controlled upright position with a slight forward torso lean. Keep your elbows close to your body and prevent the rings from swinging or moving excessively outward.'
    },
    {
      title: 'Lower between the rings',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly bend your elbows and lower your body between the rings. Keep your shoulders stable and descend only as far as you can comfortably control.'
    },
    {
      title: 'Press back upwards',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push firmly through both rings and extend your elbows to raise your body. Keep the rings close to your sides and avoid using your legs or momentum to assist the movement.'
    },
    {
      title: 'Finish in stable support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Return to the top position with your arms fully extended, shoulders controlled, and feet suspended. Stabilize the rings before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Allowing the rings to drift outward',
      description:
        'Letting the rings separate excessively increases the demand on the shoulders and reduces control. Keep them relatively close to your body throughout the repetition.'
    },
    {
      title: 'Losing shoulder stability',
      description:
        'Avoid collapsing into your shoulders or allowing uncontrolled movement at the bottom. Maintain active shoulder control and use a comfortable range of motion.'
    },
    {
      title: 'Using excessive depth',
      description:
        'Lowering beyond your available shoulder mobility can place unnecessary stress on the joints. Do not force a deep position if you cannot maintain stability.'
    },
    {
      title: 'Swinging the body',
      description:
        'Avoid kicking your legs or using momentum to rise. Keep your core engaged and perform the movement with controlled upper-body strength.'
    },
    {
      title: 'Flaring the elbows excessively',
      description:
        'Allowing your elbows to move too far outward can make the rings harder to stabilize. Keep your elbows relatively close to your torso during the descent and ascent.'
    },
    {
      title: 'Failing to complete the support position',
      description:
        'Do not finish with partially bent elbows or unstable rings. Return to controlled full elbow extension without forcefully hyperextending the joints.'
    },
  ],

  relatedExercises: [
    'dips',
    'ring-push-up',
    'rings-muscle-up',
    'iron-cross'
  ],

  faq: [
    {
      question: 'What is a Ring Dip?',
      answer:
        'A Ring Dip is a bodyweight pushing exercise performed while suspended above two gymnastics rings. The athlete lowers the body by bending the elbows and then presses back to a stable support position.'
    },
    {
      question: 'What muscles do Ring Dips work?',
      answer:
        'Ring Dips primarily train the triceps, pectorals, and anterior deltoids. The upper back, forearms, and core muscles help stabilize the rings and maintain body control.'
    },
    {
      question: 'Are Ring Dips harder than parallel bar Dips?',
      answer:
        'Generally, yes. Gymnastics rings move independently and require additional shoulder stabilization and coordination, making Ring Dips more demanding than equivalent Dips on fixed parallel bars.'
    },
    {
      question: 'How can I prepare for Ring Dips?',
      answer:
        'Build strength with regular Dips and Ring Push Ups, then practice stable ring support holds. Assisted Ring Dips with your feet supported can help you develop control before performing full repetitions.'
    },
    {
      question: 'How deep should I go during Ring Dips?',
      answer:
        'Lower through a controlled and comfortable range. Reaching approximately shoulder-to-elbow height is a useful reference for many athletes, but depth should be limited by individual shoulder mobility and stability.'
    },
    {
      question: 'Should I turn the rings outward at the top?',
      answer:
        'A slight rings-turned-out support can develop additional stability, but it is not required for a basic Ring Dip. Beginners should first learn to maintain a secure, neutral support position.'
    },
    {
      question: 'Can Ring Dips help with Ring Muscle Ups?',
      answer:
        'Yes. Ring Dips strengthen the pressing phase of the Ring Muscle Up and develop stability in the support position. However, the pulling and transition phases must also be trained separately.'
    },
  ],

  seo: {
    title:
      'Ring Dip: Technique & Progression | Treethenics',

    description:
      'Learn how to perform Ring Dips with proper gymnastics rings technique, muscles worked, shoulder stabilization, common mistakes and progressions.',
  },

  imageUrl: '/images/exercises/ring-dip.png',
};
