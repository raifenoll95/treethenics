import { Exercise } from '../../../../shared/models/exercise.model';

export const X_GRIP_FRONT_LEVER: Exercise = {
  id: 'x-grip-front-lever',
  name: 'X Grip Front Lever',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'biceps',
    'rear-deltoids',
    'forearms'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The X Grip Front Lever is an advanced Front Lever variation performed with a crossed and asymmetrical hand position on the bar. The body remains straight and horizontal while the unusual grip creates additional rotational and unilateral stability demands.',

  overview:
    'The X Grip Front Lever keeps the same horizontal body position as a Full Front Lever but changes the connection to the bar. By crossing the arms into an X-style grip, the left and right sides no longer work from identical positions, making rotational control a major part of the skill. Keep both elbows straight, maintain a rigid body line, and resist twisting towards either side. A strong Full Front Lever should be established before treating the X Grip as a separate advanced variation.',

  howTo: [
    {
      title: 'Set the X grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Take the bar with your arms crossed into the X Grip position. Establish a secure grip and make sure both elbows can remain completely straight before loading the lever.'
    },
    {
      title: 'Engage your upper body',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Depress and control your shoulders while creating strong tension through your lats, upper back, arms, and core. Resist the rotational pull created by the asymmetrical grip.'
    },
    {
      title: 'Raise into the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lift into the Front Lever under control while keeping your elbows locked. Bring your shoulders, hips, knees, and ankles towards a horizontal line.'
    },
    {
      title: 'Control the rotation',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your chest and hips facing upward instead of allowing the body to rotate towards one arm. Brace your obliques and maintain balanced tension through both sides.'
    },
    {
      title: 'Hold the position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain a straight horizontal body with locked elbows and a stable X Grip. Train both crossed-hand configurations so the same arm is not always placed in the dominant position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Twisting the torso',
      description:
        'The asymmetrical grip naturally encourages rotation. Keep your chest and pelvis facing upward and use your core to resist turning towards either side.'
    },
    {
      title: 'Bending one elbow',
      description:
        'Allowing one arm to bend changes the leverage and can turn the position into a different mixed-arm variation. Keep both elbows fully extended throughout the hold.'
    },
    {
      title: 'Losing the Front Lever line',
      description:
        'Do not focus so much on maintaining the unusual grip that your hips drop. Preserve the same shoulder-to-feet horizontal line you would use in a clean Full Front Lever.'
    },
    {
      title: 'Always crossing the same way',
      description:
        'One X Grip orientation can quickly become much stronger than the other. Practice both configurations to develop more balanced control and avoid relying exclusively on your preferred side.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'one-arm-front-lever',
    'touch-front-lever'
  ],

  faq: [
    {
      question: 'What is an X Grip Front Lever?',
      answer:
        'The X Grip Front Lever is a Front Lever variation performed with the arms crossed into an X-style grip on the bar. The body still remains straight and horizontal, but the asymmetrical hand position adds a significant rotational stability challenge.'
    },
    {
      question: 'Is X Grip Front Lever harder than a normal Front Lever?',
      answer:
        'For most athletes, the X Grip adds difficulty because the two arms work from different positions and the body must resist rotation. A clean Full Front Lever is therefore a strong foundation before training the X Grip variation.'
    },
    {
      question: 'Is X Grip Front Lever the same as Mixed Grip Front Lever?',
      answer:
        'No. Mixed Grip usually refers to changing the orientation of the hands, such as combining different grip directions. X Grip specifically refers to crossing the arms into the characteristic X-shaped position.'
    },
    {
      question: 'Should my arms be straight in an X Grip Front Lever?',
      answer:
        'Yes. Treat it as a straight-arm Front Lever variation and keep both elbows locked. If one elbow bends significantly, reduce the lever or use assistance until you can control the position.'
    },
    {
      question: 'Should I train the X Grip on both sides?',
      answer:
        'Yes. Alternate which arm takes each position in the crossed grip. The movement is asymmetrical, so training both configurations helps prevent one orientation from becoming your only usable side.'
    },
  ],

  seo: {
    title:
      'X Grip Front Lever: Technique & Progressions | Treethenics',

    description:
      'Learn the X Grip Front Lever with proper crossed-grip technique, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/x-grip-front-lever.png',
};
