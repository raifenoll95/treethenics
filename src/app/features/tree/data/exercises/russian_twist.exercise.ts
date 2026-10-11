
import { Exercise } from '../../../../shared/models/exercise.model';

export const RUSSIAN_TWIST: Exercise = {
  id: 'russian-twist',
  name: 'Russian Twist',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core'
  ],

  primaryMuscles: [
    'obliques',
    'abdominals'
  ],

  secondaryMuscles: [
    'quadriceps'
  ],

  equipment: ['floor'],

  description:
    'The Russian Twist is a bodyweight core exercise performed in a seated position with the torso leaning slightly backwards. The athlete rotates the upper body from side to side while maintaining abdominal tension and pelvic stability. It develops rotational core strength, muscular endurance, and trunk control.',

  overview:
    'Sit on the floor with your knees bent and your feet resting on the ground. Lean your torso slightly backwards while maintaining a comfortable, controlled spinal position. Bring your hands together in front of your chest and engage your abdominal muscles. Rotate your rib cage and shoulders towards one side while keeping your pelvis relatively stable. Return through the center and rotate towards the opposite side. Keep the movement smooth and controlled, avoiding excessive twisting through the lower back. Breathe naturally and maintain a consistent torso angle throughout the exercise. To increase difficulty, lift your feet slightly above the floor while preserving balance and control.',

  howTo: [
    {
      title: 'Establish a seated position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Sit on the floor with your knees bent and your feet resting on the ground. Keep your hands together in front of your chest.'
    },
    {
      title: 'Lean backwards',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Lean your torso slightly backwards while engaging your abdominal muscles. Maintain a comfortable spinal position and keep your chest lifted.'
    },
    {
      title: 'Rotate to the left',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Rotate your shoulders and rib cage towards your left side. Keep your pelvis relatively stable and move through a comfortable range without forcing your lower back.'
    },
    {
      title: 'Rotate to the right',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Return through the center and rotate your torso towards the right side. Keep your hands in front of your body and avoid using momentum.'
    },
    {
      title: 'Continue alternating',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Alternate controlled rotations between both sides while maintaining abdominal tension, steady breathing, and a consistent torso angle.'
    },
  ],

  commonMistakes: [
    {
      title: 'Moving only the arms',
      description:
        'Avoid swinging your hands from side to side without rotating your torso. The movement should involve controlled rotation of the shoulders and rib cage.'
    },
    {
      title: 'Rotating too quickly',
      description:
        'Rapid twisting can create momentum and reduce muscular control. Perform each rotation slowly enough to maintain a stable position.'
    },
    {
      title: 'Rounding the lower back excessively',
      description:
        'Avoid collapsing into a deeply rounded seated position. Maintain a comfortable spinal alignment and reduce the backward lean if necessary.'
    },
    {
      title: 'Forcing excessive rotation',
      description:
        'Do not twist beyond your comfortable range of motion. Excessive rotation, particularly through the lumbar spine, can create unnecessary discomfort.'
    },
    {
      title: 'Losing pelvic stability',
      description:
        'Avoid allowing your hips and knees to swing excessively from side to side. Keep your pelvis relatively stable while rotating your upper body.'
    },
    {
      title: 'Leaning too far backwards',
      description:
        'An excessive backward lean can make it difficult to maintain abdominal control and proper posture. Choose an angle that allows stable, controlled rotations.'
    },
    {
      title: 'Holding your breath',
      description:
        'Avoid breath-holding throughout the set. Breathe naturally and maintain abdominal engagement during each rotation.'
    },
  ],

  relatedExercises: [
    'bicycle-crunches',
    'side-plank',
    'plank',
    'flutter-kicks'
  ],

  faq: [
    {
      question: 'What is a Russian Twist?',
      answer:
        'The Russian Twist is a seated core exercise in which the athlete leans slightly backwards and rotates the torso from side to side while maintaining abdominal tension and pelvic stability.'
    },
    {
      question: 'What muscles do Russian Twists work?',
      answer:
        'Russian Twists primarily challenge the obliques and abdominal muscles. The hip flexors also contribute to maintaining the seated position, especially when the feet are elevated.'
    },
    {
      question: 'Are Russian Twists good for obliques?',
      answer:
        'Yes. Russian Twists involve controlled trunk rotation, making them useful for training the oblique muscles and improving rotational core endurance.'
    },
    {
      question: 'Should my feet be on the floor or elevated?',
      answer:
        'Keeping your feet on the floor generally provides greater stability and is suitable for beginners. Elevating your feet increases the balance and stabilization demands but is not required for effective torso rotation.'
    },
    {
      question: 'Should my hands touch the floor?',
      answer:
        'No. Touching the floor is optional and should not determine the movement range. Focus on rotating your rib cage and shoulders through a comfortable range rather than reaching as far as possible with your hands.'
    },
    {
      question: 'Can Russian Twists hurt the lower back?',
      answer:
        'Russian Twists may cause discomfort if performed with excessive spinal rotation, poor control, or an uncomfortable backward lean. Reduce the range of motion, keep your feet supported, or choose a different core exercise if pain occurs.'
    },
    {
      question: 'How can I make Russian Twists harder?',
      answer:
        'You can gradually increase the duration, slow down each rotation, or lift your feet slightly off the ground while maintaining pelvic stability. Additional resistance can be introduced once the bodyweight variation is well controlled.'
    },
    {
      question: 'Do Russian Twists burn belly fat?',
      answer:
        'Russian Twists strengthen the core but do not selectively burn abdominal fat. Changes in body fat depend primarily on overall energy balance and broader lifestyle factors.'
    },
  ],

  seo: {
    title:
      'Russian Twist: Technique & Muscles | Treethenics',

    description:
      'Learn Russian Twists with proper torso rotation, oblique activation, muscles worked, common mistakes and beginner core progressions.',
  },

  imageUrl: '/images/exercises/russian-twist.png',
};
