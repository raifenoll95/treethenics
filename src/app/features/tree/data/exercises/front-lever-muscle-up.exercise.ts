import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER_MUSCLE_UP: Exercise = {
  id: 'front-lever-muscle-up',
  name: 'Front Lever to Muscle Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'chest', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'forearms',
    'abdominals',
    'rear-deltoids',
    'chest',
    'triceps'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Front Lever to Muscle Up is an advanced bar skill that connects a horizontal front lever directly into a muscle up. Starting with your body straight and parallel to the ground, you pull from the lever towards the bar, transition your torso above it, and finish by pressing into a straight-arm support. It combines front lever strength with powerful bent-arm pulling and a strong muscle up transition.',

  overview:
    'The Front Lever to Muscle Up combines two advanced pulling abilities in one continuous movement. You need enough straight-arm strength to establish a clean front lever, but you also need powerful bent-arm pulling to escape the horizontal position and gain enough height for the transition. Learn the two skills separately first, then practice the connection with shorter front lever positions such as tuck or straddle. A false grip can make the turnover easier, but the goal is still to create the transition through strength and control rather than a large swing.',

  howTo: [
    {
      title: 'Build both skills separately',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled front lever together with a strong muscle up and high pulling strength. Before connecting them, practice front lever pulls and make sure you can transition above the bar without relying on a large kip.'
    },
    {
      title: 'Start from a solid front lever',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Enter a front lever with straight elbows and your shoulders, hips, knees, and feet forming a controlled horizontal line. Briefly stabilize the position instead of immediately using momentum from the entry.'
    },
    {
      title: 'Pull from the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Begin bending your elbows and pull your torso strongly towards the bar. Keep your core tight and continue driving the bar towards your body as you rise out of the horizontal position.'
    },
    {
      title: 'Move through the transition',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'As your torso approaches the bar, continue pulling and bring your chest over it. Rotate both elbows around the bar together instead of throwing one shoulder over first.'
    },
    {
      title: 'Finish above the bar',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your torso is above the bar, press down through the straight bar dip until your elbows reach full extension. Stabilize in support to clearly finish the repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Using the front lever only to create a swing',
      description:
        'Do not immediately drop your legs from the lever to generate enough momentum for an ordinary muscle up. Stabilize the front lever first and initiate the movement through a strong pull if your goal is the strict variation.'
    },
    {
      title: 'Losing the lever before starting the pull',
      description:
        'If your hips have already dropped and your body has folded before your elbows begin to bend, you are avoiding the hardest part of the skill. Use an easier lever progression and learn to initiate the pull while the body is still controlled.'
    },
    {
      title: 'Pulling too low',
      description:
        'Simply bending your elbows out of the front lever is not enough. Continue pulling aggressively so your torso gains the height required to move above the bar. Front lever pull variations are useful for building this specific strength.'
    },
    {
      title: 'Using a chicken-wing transition',
      description:
        'Avoid placing one elbow above the bar before the other. Build enough pulling height and transition strength to bring both sides over the bar together.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'front-lever-pull-up',
    'muscle-up'
  ],

  faq: [
    {
      question: 'What is a Front Lever to Muscle Up?',
      answer:
        'It is an advanced combination where you begin in a front lever, pull your body from the horizontal position towards the bar, transition above it, and finish in a straight-arm support. A strict repetition connects the two skills without dropping into a normal hanging muscle up first.'
    },
    {
      question: 'Do I need a full front lever first?',
      answer:
        'You can begin learning the movement with tuck, advanced tuck, or straddle variations before you have the full skill. However, performing a full Front Lever to Muscle Up requires enough front lever strength to establish and control the full horizontal position before beginning the pull.'
    },
    {
      question: 'Do I need a muscle up first?',
      answer:
        'Yes, a strong muscle up is an important foundation. The Front Lever to Muscle Up makes the pulling phase significantly more demanding, so learning the muscle up transition separately allows you to focus on connecting it to the front lever rather than learning both problems at once.'
    },
    {
      question: 'Does a false grip help with the Front Lever to Muscle Up?',
      answer:
        'Yes. A false grip can reduce the amount of grip repositioning required as you move from below the bar into the transition. It is especially useful while learning the connection, although strong athletes can also perform variations without relying heavily on it.'
    },
  ],

  seo: {
    title:
      'Front Lever to Muscle Up: Technique & Progressions | Treethenics',

    description:
      'Learn the Front Lever to Muscle Up with proper technique, prerequisites, pulling progressions and tips for a clean transition above the bar.',
  },

  imageUrl: '/images/exercises/front-lever-muscle-up.png',
};
