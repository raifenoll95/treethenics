
import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_HANG: Exercise = {
  id: 'one-arm-hang',
  name: 'One Arm Hang',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'biceps',
    'shoulders',
    'back',
    'core'
  ],

  primaryMuscles: [
    'forearms',
    'latissimus-dorsi',
    'upper-back'
  ],

  secondaryMuscles: [
    'biceps',
    'rear-deltoids',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The One Arm Hang is an intermediate static calisthenics exercise performed by suspending the entire bodyweight from a pull-up bar using only one hand. It develops unilateral grip endurance, shoulder stability, and body control while providing a useful foundation for advanced pulling skills such as the One Arm Pull Up.',

  overview:
    'Begin hanging from a secure pull-up bar with both hands and your elbows fully extended. Establish a stable body position before gradually transferring more weight onto one arm. Release the opposite hand only when you can safely support your bodyweight with the working arm. Maintain a straight elbow and allow the supporting shoulder to settle into a comfortable overhead position while keeping the shoulder girdle controlled. Prevent excessive swinging or twisting by engaging your core. Hold the position for a manageable duration, then return your free hand to the bar before switching sides. Train both arms and progress gradually to avoid excessive stress on the fingers, elbow, and shoulder.',

  howTo: [
    {
      title: 'Begin with both hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a secure pull-up bar with both hands approximately shoulder-width apart. Hang with your elbows extended and establish a stable body position before transferring your weight.'
    },
    {
      title: 'Shift your weight',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Gradually transfer your bodyweight towards one hand while keeping the supporting elbow straight. Maintain shoulder control and avoid sudden loading.'
    },
    {
      title: 'Release the opposite hand',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Carefully remove your free hand from the bar once the working arm can support your weight. Keep your feet suspended and allow your body to find a balanced hanging position.'
    },
    {
      title: 'Maintain the one-arm hang',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Hold your bodyweight with one straight arm. Maintain a secure grip, comfortable shoulder alignment, and controlled torso position while minimizing swinging and excessive rotation.'
    },
    {
      title: 'Return and switch arms',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Regrip the bar with your free hand before releasing the working arm. Recover briefly and repeat on the opposite side, prioritizing controlled technique and balanced development.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the supporting elbow',
      description:
        'The One Arm Hang is performed with a straight supporting arm. Avoid holding a partially flexed elbow position, which changes the exercise and increases the demand on the elbow flexors.'
    },
    {
      title: 'Releasing the second hand too quickly',
      description:
        'Suddenly transferring your entire bodyweight onto one arm can overload the fingers, elbow, or shoulder. Shift your weight gradually before removing the assisting hand.'
    },
    {
      title: 'Losing shoulder control',
      description:
        'Avoid forcing the supporting shoulder into an uncomfortable overhead position. Maintain controlled alignment and reduce the load if you experience pain or instability.'
    },
    {
      title: 'Swinging or rotating excessively',
      description:
        'Some natural body rotation may occur, but uncontrolled twisting and swinging increase the difficulty of maintaining a stable grip. Engage your core and keep the movement controlled.'
    },
    {
      title: 'Holding until grip failure',
      description:
        'Do not continue until your fingers unexpectedly release the bar. End the hold while you can still safely regrip with your free hand or place your feet on a stable surface.'
    },
    {
      title: 'Training only the stronger arm',
      description:
        'Avoid developing a large imbalance between sides. Practice both arms and adjust the assistance or duration according to each side’s current ability.'
    },
    {
      title: 'Progressing without sufficient grip strength',
      description:
        'A secure two-arm Dead Hang does not automatically mean you are ready to support your full bodyweight with one hand. Use assisted one-arm hangs before attempting unsupported holds.'
    },
  ],

  relatedExercises: [
    'dead-hang',
    'scapular-pull-up',
    'pull-up',
    'one-arm-pull-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Hang?',
      answer:
        'A One Arm Hang is a static hanging exercise where the athlete supports their entire bodyweight from a pull-up bar using only one hand while keeping the supporting elbow extended.'
    },
    {
      question: 'What muscles do One Arm Hangs work?',
      answer:
        'One Arm Hangs strongly challenge the finger flexors and forearm muscles responsible for grip. The latissimus dorsi, shoulder stabilizers, upper back, and core muscles help maintain a controlled hanging position.'
    },
    {
      question: 'Are One Arm Hangs harder than Dead Hangs?',
      answer:
        'Yes. Supporting bodyweight with one hand significantly increases the load on the working grip and shoulder compared with a standard two-arm Dead Hang.'
    },
    {
      question: 'Do One Arm Hangs help with One Arm Pull Ups?',
      answer:
        'Yes. They develop unilateral grip endurance and shoulder stability, which are useful foundations for the One Arm Pull Up. However, they do not replace the specific pulling strength needed to bend the elbow and lift the body with one arm.'
    },
    {
      question: 'Should my shoulder be relaxed during a One Arm Hang?',
      answer:
        'The shoulder can move into a naturally elevated overhead position, but it should remain controlled and comfortable. Avoid forcing a completely passive position if it causes pain or instability.'
    },
    {
      question: 'How can I make One Arm Hangs easier?',
      answer:
        'Keep your free hand lightly supporting the bar, hold the wrist of your working arm, or use partial foot support to reduce the load. Gradually decrease assistance as your grip and shoulder control improve.'
    },
    {
      question: 'How long should I hold a One Arm Hang?',
      answer:
        'Use a duration that allows you to maintain a secure grip, straight elbow, and comfortable shoulder position. Increase hold times gradually rather than training to uncontrolled grip failure.'
    },
    {
      question: 'Should I train both arms?',
      answer:
        'Yes. Training both sides helps develop balanced grip strength and shoulder stability. Begin with the weaker side and adjust the difficulty or duration when necessary.'
    },
  ],

  seo: {
    title:
      'One Arm Hang: Technique & Progression | Treethenics',

    description:
      'Learn the One Arm Hang with correct grip technique, shoulder positioning, muscles worked, common mistakes and progressions towards the One Arm Pull Up.',
  },

  imageUrl: '/images/exercises/one-arm-hang.png',
};
