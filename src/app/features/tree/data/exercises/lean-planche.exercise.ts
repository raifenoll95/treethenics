
import { Exercise } from '../../../../shared/models/exercise.model';

export const LEAN_PLANCHE: Exercise = {
  id: 'lean-planche',
  name: 'Lean Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: [
    'shoulders',
    'biceps',
    'chest',
    'core'
  ],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'chest'
  ],

  secondaryMuscles: [
    'triceps',
    'abdominals',
    'obliques',
    'glutes',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The Lean Planche is a static straight-arm calisthenics exercise performed by shifting the shoulders forwards beyond the wrists while maintaining a rigid plank position. It develops anterior shoulder strength, scapular protraction, wrist tolerance, and core stability required for advanced planche progressions.',

  overview:
    'Begin in a high plank position with your hands approximately shoulder-width apart, your elbows fully extended, and your feet resting on the balls of your toes. Actively push the floor away to protract your shoulder blades and engage your abdominal muscles and glutes. Gradually shift your shoulders forwards beyond your wrists while keeping your arms straight and your body rigid. Allow your feet to pivot naturally on your toes as your weight moves forwards. Maintain a slightly rounded upper back through active scapular protraction without allowing your lower back to sag. Hold the forward-leaning position for a controlled duration, then slowly shift your shoulders backwards to return to the starting position. Increase the forward lean gradually as your strength and wrist tolerance improve.',

  howTo: [
    {
      title: 'Start in a high plank position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands approximately shoulder-width apart with your elbows fully extended. Extend your legs behind you and support your feet on your toes.'
    },
    {
      title: 'Protract your shoulder blades',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Push firmly against the floor to spread your shoulder blades around your rib cage. Engage your core and glutes to maintain a rigid body position.'
    },
    {
      title: 'Shift your shoulders forwards',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually lean forwards until your shoulders move beyond your wrists. Keep your elbows straight and allow your feet to pivot naturally.'
    },
    {
      title: 'Hold the Lean Planche',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain the forward lean with locked elbows, active scapular protraction, and a stable pelvis. Keep your toes in contact with the floor throughout the hold.'
    },
    {
      title: 'Return to the starting position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly shift your shoulders backwards while maintaining control. Return to the high plank position before relaxing your arms and shoulders.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'Avoid bending your arms to support the forward lean. The Lean Planche is a straight-arm exercise, and elbow flexion changes the strength demands.'
    },
    {
      title: 'Losing scapular protraction',
      description:
        'Do not allow your shoulder blades to collapse together or your chest to sink between your arms. Actively push the floor away throughout the hold.'
    },
    {
      title: 'Allowing the lower back to sag',
      description:
        'Maintain abdominal and glute engagement to prevent excessive lumbar extension. Keep your pelvis controlled as you lean forwards.'
    },
    {
      title: 'Leaning too far forwards too early',
      description:
        'Avoid attempting a forward lean that exceeds your current shoulder strength or wrist tolerance. Progress gradually while maintaining proper alignment.'
    },
    {
      title: 'Raising the hips excessively',
      description:
        'Do not lift your hips into a pike position to compensate for insufficient strength. Maintain a relatively straight body line from your shoulders to your ankles.'
    },
    {
      title: 'Allowing the shoulders to collapse',
      description:
        'Avoid passively hanging on your shoulder joints. Maintain active shoulder engagement and controlled scapular positioning throughout the exercise.'
    },
    {
      title: 'Ignoring wrist discomfort',
      description:
        'Forward leaning increases the load and extension demands on the wrists. Reduce the lean, adjust your hand position, or use suitable parallettes if wrist extension becomes uncomfortable.'
    },
  ],

  relatedExercises: [
    'plank',
    'planche-lean',
    'tuck-planche',
    'advanced-tuck-planche',
    'straddle-planche',
    'full-planche'
  ],

  faq: [
    {
      question: 'What is a Lean Planche?',
      answer:
        'A Lean Planche is a static straight-arm exercise in which the athlete shifts the shoulders forwards beyond the wrists while maintaining a rigid body position with the toes supported on the floor.'
    },
    {
      question: 'What muscles does the Lean Planche work?',
      answer:
        'The Lean Planche primarily challenges the anterior deltoids, serratus anterior, and chest. The triceps, forearms, abdominal muscles, and glutes contribute to maintaining straight arms and full-body stability.'
    },
    {
      question: 'Is the Lean Planche the same as the Planche Lean?',
      answer:
        'Yes. Lean Planche and Planche Lean generally refer to the same straight-arm forward-leaning exercise used to develop planche-specific strength.'
    },
    {
      question: 'Should my elbows remain straight?',
      answer:
        'Yes. The elbows should remain fully extended throughout the hold. This develops straight-arm strength and distinguishes the exercise from bent-arm planche variations.'
    },
    {
      question: 'Should my feet leave the floor?',
      answer:
        'No. In the standard Lean Planche, the toes remain in contact with the floor. Lifting both feet creates a different and substantially more demanding balance and strength requirement.'
    },
    {
      question: 'How far should I lean forwards?',
      answer:
        'Lean only as far as you can while maintaining straight elbows, active scapular protraction, controlled wrist loading, and a stable body position. Increase the distance gradually over time.'
    },
    {
      question: 'Does the Lean Planche help with the Full Planche?',
      answer:
        'Yes. The Lean Planche develops shoulder strength, scapular control, and tolerance to forward loading that transfer to planche progressions. However, additional strength and balance training are required for the Full Planche.'
    },
    {
      question: 'How can I make the Lean Planche harder?',
      answer:
        'Gradually increase the forward lean, extend the hold duration, or perform the exercise on parallettes. Progress towards Tuck Planche holds once you have developed sufficient strength and control.'
    },
  ],

  seo: {
    title:
      'Lean Planche: Technique & Progression | Treethenics',

    description:
      'Learn the Lean Planche with correct shoulder lean, straight-arm technique, scapular protraction, muscles worked and progressions towards the Full Planche.',
  },

  imageUrl: '/images/exercises/lean-planche.png',
};
