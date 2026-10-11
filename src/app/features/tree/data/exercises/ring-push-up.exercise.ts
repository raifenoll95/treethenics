
import { Exercise } from '../../../../shared/models/exercise.model';

export const RING_PUSH_UP: Exercise = {
  id: 'ring-push-up',
  name: 'Ring Push Up',
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
    'forearms',
    'upper-back'
  ],

  equipment: ['rings'],

  description:
    'The Ring Push Up is a bodyweight pushing exercise performed on suspended gymnastics rings. The independent movement of the rings increases the demand on shoulder stability, chest and triceps strength, and core control compared with a standard floor Push Up.',

  overview:
    'Set two gymnastics rings at a suitable height and grip them with your palms facing each other. Walk your feet backwards until your body forms a straight inclined or nearly horizontal line from head to heels. Keep the rings approximately shoulder-width apart and stabilize your shoulders before bending your elbows. Lower your chest between the rings through a controlled range of motion, then press back to full arm extension without allowing the rings to swing or drift excessively outward. Higher rings make the exercise easier, while lower rings increase the load and stabilization demands.',

  howTo: [
    {
      title: 'Adjust the rings',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Set both rings at the same height and ensure they are securely attached. Begin with a higher position if you are unfamiliar with the instability of gymnastics rings.'
    },
    {
      title: 'Establish your plank',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Grip the rings with your palms facing each other and extend your legs behind you. Keep your body aligned from head to heels while engaging your abdominals and glutes.'
    },
    {
      title: 'Lower between the rings',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and slowly lower your chest between the rings. Keep your shoulders controlled and prevent the rings from drifting excessively outward.'
    },
    {
      title: 'Press upwards',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push firmly through both rings and extend your elbows. Maintain a stable body line and keep the rings moving symmetrically throughout the ascent.'
    },
    {
      title: 'Stabilize at the top',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish with your arms fully extended and the rings under control. Maintain active shoulder stability before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Allowing the rings to drift outward',
      description:
        'Letting the rings separate excessively during the lowering phase increases shoulder stress and reduces control. Maintain a manageable ring width throughout the repetition.'
    },
    {
      title: 'Letting the hips sag',
      description:
        'Avoid excessive lower-back extension by keeping your abdominals and glutes engaged. Your shoulders, hips, and ankles should remain approximately aligned.'
    },
    {
      title: 'Using rings that are too low',
      description:
        'Starting with the rings close to the floor can make the exercise unnecessarily demanding. Raise the rings until you can perform controlled repetitions without losing shoulder stability.'
    },
    {
      title: 'Losing shoulder control',
      description:
        'Avoid collapsing between the rings or allowing uncontrolled shoulder movement. Keep your shoulders active and maintain a comfortable range of motion.'
    },
    {
      title: 'Performing shallow repetitions',
      description:
        'Do not shorten the movement simply because the rings feel unstable. Use an appropriate ring height that allows a controlled and comfortable range.'
    },
    {
      title: 'Swinging the rings',
      description:
        'Avoid using momentum or allowing the rings to move unpredictably. Perform each repetition slowly enough to maintain symmetrical control.'
    },
  ],

  relatedExercises: [
    'push-up',
    'wide-push-up',
    'dips'
  ],

  faq: [
    {
      question: 'What is a Ring Push Up?',
      answer:
        'A Ring Push Up is a Push Up variation performed with the hands gripping suspended gymnastics rings and the feet supported on the floor. The instability of the rings increases the demand on shoulder and core stabilization.'
    },
    {
      question: 'What muscles do Ring Push Ups work?',
      answer:
        'Ring Push Ups primarily work the chest, triceps, and anterior deltoids. The serratus anterior, upper back, forearms, and core muscles contribute to stabilizing the rings and maintaining body alignment.'
    },
    {
      question: 'Are Ring Push Ups harder than regular Push Ups?',
      answer:
        'Ring Push Ups can be more challenging because each hand moves independently and requires additional stabilization. However, their difficulty depends on ring height, body angle, and range of motion.'
    },
    {
      question: 'How can I make Ring Push Ups easier?',
      answer:
        'Raise the rings to reduce the amount of bodyweight supported by your arms. Start with a more upright body position and gradually lower the rings as your strength and stability improve.'
    },
    {
      question: 'Should the rings touch during a Ring Push Up?',
      answer:
        'No. The rings do not need to touch. Keep them approximately shoulder-width apart or allow a small natural inward movement at the top while maintaining comfortable shoulder alignment.'
    },
    {
      question: 'Can Ring Push Ups help improve Ring Dips?',
      answer:
        'Yes. Ring Push Ups develop pressing strength and independent shoulder stabilization, which can help prepare for Ring Dips. However, Ring Dips require additional strength and control in a suspended support position.'
    },
  ],

  seo: {
    title:
      'Ring Push Up: Technique & Progression | Treethenics',

    description:
      'Learn Ring Push Ups with proper gymnastics rings technique, chest and triceps activation, shoulder stability, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/ring-push-up.png',
};
