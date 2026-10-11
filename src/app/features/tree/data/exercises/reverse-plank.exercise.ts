
import { Exercise } from '../../../../shared/models/exercise.model';

export const REVERSE_PLANK: Exercise = {
  id: 'reverse-plank',
  name: 'Reverse Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'shoulders',
    'back',
    'legs'
  ],

  primaryMuscles: [
    'glutes',
    'upper-back'
  ],

  secondaryMuscles: [
    'abdominals',
    'triceps',
    'rear-deltoids',
    'quadriceps'
  ],

  equipment: ['floor'],

  description:
    'The Reverse Plank is a static bodyweight exercise performed with the hands and heels supporting the body while the chest faces upwards. The athlete maintains a straight line from the shoulders to the ankles by engaging the glutes, posterior chain, and shoulder stabilizers. It develops hip extension endurance, core stability, and upper-body support strength.',

  overview:
    'Begin seated on the floor with your legs extended in front of you. Place your hands on the ground slightly behind your hips, approximately shoulder-width apart, with your fingers pointing towards your feet or in another comfortable direction. Press firmly through your palms and heels while extending your hips upwards. Engage your glutes and maintain straight elbows until your body forms a nearly straight line from shoulders to ankles. Keep your abdomen engaged to prevent excessive lower-back arching, and maintain a comfortable head and neck position. Hold the position while breathing naturally, then lower your hips slowly back to the floor. Adjust your hand position if you experience wrist or shoulder discomfort.',

  howTo: [
    {
      title: 'Establish a seated position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Sit on the floor with your legs extended and your heels resting on the ground. Place your hands slightly behind your hips, approximately shoulder-width apart.'
    },
    {
      title: 'Position your hands',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Press your palms firmly into the floor with your fingers pointing towards your feet or in a comfortable direction. Straighten your elbows and prepare to support your bodyweight.'
    },
    {
      title: 'Lift your hips',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Push through your hands and heels while squeezing your glutes. Raise your hips until your torso and legs approach a straight line.'
    },
    {
      title: 'Hold the reverse plank',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain a straight body position from shoulders to ankles. Keep your elbows extended, glutes engaged, and shoulders stable while breathing naturally.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly lower your hips towards the floor without collapsing through your shoulders. Return to the seated position before beginning another hold.'
    },
  ],

  commonMistakes: [
    {
      title: 'Allowing the hips to drop',
      description:
        'Avoid letting your pelvis sag towards the floor. Engage your glutes and maintain sufficient hip extension to keep your body aligned.'
    },
    {
      title: 'Arching the lower back excessively',
      description:
        'Do not compensate for limited hip extension by excessively arching your lumbar spine. Focus on lifting through your hips while maintaining abdominal control.'
    },
    {
      title: 'Bending the elbows',
      description:
        'Keep your elbows extended throughout the hold. Excessive elbow bending reduces the stability of the supporting position.'
    },
    {
      title: 'Forcing an uncomfortable wrist position',
      description:
        'Avoid placing your hands in a position that causes wrist pain. Adjust your finger direction or hand placement to find a comfortable supporting angle.'
    },
    {
      title: 'Dropping the head backwards',
      description:
        'Do not force your neck into excessive extension. Keep your head aligned comfortably with your torso.'
    },
    {
      title: 'Losing shoulder stability',
      description:
        'Avoid collapsing into your shoulders or allowing uncontrolled movement at the shoulder joints. Press actively through your hands and maintain a stable upper-body position.'
    },
    {
      title: 'Holding your breath',
      description:
        'Maintain natural breathing during the isometric hold. Avoid unnecessary breath-holding as fatigue increases.'
    },
  ],

  relatedExercises: [
    'plank',
    'side-plank',
    'arch-body-hold',
    'hollow-body-hold'
  ],

  faq: [
    {
      question: 'What is a Reverse Plank?',
      answer:
        'A Reverse Plank is a static bodyweight exercise where the athlete supports the body on the hands and heels while facing upwards and maintaining a straight line from the shoulders to the ankles.'
    },
    {
      question: 'What muscles do Reverse Planks work?',
      answer:
        'Reverse Planks primarily challenge the glutes and posterior-chain muscles responsible for maintaining hip extension. The shoulders, triceps, upper back, and abdominal muscles contribute to supporting and stabilizing the body.'
    },
    {
      question: 'Are Reverse Planks harder than regular Planks?',
      answer:
        'They challenge the body differently. Regular Planks emphasize anterior core stabilization, while Reverse Planks place greater emphasis on hip extension and posterior-chain endurance. The relative difficulty depends on individual strength and mobility.'
    },
    {
      question: 'Should my hips be completely straight?',
      answer:
        'Aim to maintain a nearly straight line from your shoulders to your ankles. Avoid sagging hips or compensating with excessive lower-back extension.'
    },
    {
      question: 'Where should my hands point?',
      answer:
        'Your fingers can point towards your feet or slightly outwards, depending on wrist and shoulder comfort. Choose a hand position that allows stable support without pain.'
    },
    {
      question: 'Should I look upwards during a Reverse Plank?',
      answer:
        'You may look upwards while maintaining a comfortable neck position. Avoid forcing your head backwards or creating excessive cervical extension.'
    },
    {
      question: 'How can I make Reverse Planks easier?',
      answer:
        'Begin with a Reverse Tabletop Hold, keeping your knees bent and your feet flat on the floor. Progress to straight legs as your hip extension strength and shoulder stability improve.'
    },
    {
      question: 'How long should I hold a Reverse Plank?',
      answer:
        'Choose a duration that allows you to maintain straight elbows, elevated hips, and comfortable shoulder alignment. Increase hold times gradually as your strength and endurance improve.'
    },
  ],

  seo: {
    title:
      'Reverse Plank: Technique & Muscles | Treethenics',

    description:
      'Learn the Reverse Plank with proper hip alignment, shoulder positioning, muscles worked, common mistakes and beginner posterior-chain progressions.',
  },

  imageUrl: '/images/exercises/reverse-plank.png',
};
