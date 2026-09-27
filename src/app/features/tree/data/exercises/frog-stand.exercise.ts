import { Exercise } from '../../../../shared/models/exercise.model';

export const FROG_STAND: Exercise = {
  id: 'frog-stand',
  name: 'Frog Stand',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'triceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The frog stand is a beginner hand-balancing skill where you support your body on your hands while resting your knees against your upper arms. It teaches you how to shift your weight forward, balance with your hands, and become comfortable supporting your bodyweight before progressing to harder skills such as the tuck planche.',

  overview:
    'The frog stand is less about brute strength and more about learning where your balance point is. Start in a squat, place your knees against the backs or sides of your upper arms, and slowly lean forward until your feet become light enough to leave the floor. Keep your fingers spread and use fingertip pressure to make small balance corrections. Once the basic position feels comfortable, work towards cleaner and more controlled holds rather than throwing yourself forward to gain extra seconds.',

  howTo: [
    {
      title: 'Set your hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Squat down and place your hands on the floor around shoulder-width apart or slightly wider. Spread your fingers to create a stable base and keep your hands far enough forward that you have room to shift your weight.'
    },
    {
      title: 'Place your knees on your arms',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your elbows and place your knees against the backs or sides of your upper arms. Find a contact point that feels secure and allows your legs to stay compact.'
    },
    {
      title: 'Lean forward gradually',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly move your shoulders and bodyweight forward over your hands. Keep your toes on the floor at first and notice how they become lighter as your center of mass moves over your palms.'
    },
    {
      title: 'Lift your feet',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Lift one foot and then the other, or allow both feet to leave the floor once you find the balance point. Keep looking slightly forward and use your fingers to make small corrections instead of making large movements with your whole body.'
    },
    {
      title: 'Build a controlled hold',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Hold the position while continuing to push into the floor and breathe normally. As your balance improves, aim for smoother entries, less shaking, and consistent holds before progressing to harder unsupported planche variations.'
    },
  ],

  commonMistakes: [
    {
      title: 'Not leaning forward enough',
      description:
        'If your feet feel glued to the floor, you probably do not need to jump harder. Gradually move your shoulders farther forward until enough weight transfers onto your hands for your feet to become light.'
    },
    {
      title: 'Jumping into the balance',
      description:
        'Do not kick or hop your feet off the floor to reach the position. The goal is to find the balance point through a gradual weight shift. Keep your toes down as long as necessary while learning where that point is.'
    },
    {
      title: 'Ignoring your fingers',
      description:
        'Your palms are not passive supports. Spread your fingers and use fingertip pressure when you begin tipping forward. Learning these small hand corrections is one of the most valuable skills the frog stand can teach you.'
    },
    {
      title: 'Trying a tuck planche instead',
      description:
        'Keep your knees supported by your arms while learning the frog stand. Removing that contact turns the exercise into a much harder planche progression and dramatically increases the strength required from your shoulders.'
    },
  ],

  relatedExercises: [
    'planche-lean',
    'tuck-planche',
    'handstand'
  ],

  faq: [
    {
      question: 'Is the frog stand a beginner skill?',
      answer:
        'Yes. The frog stand is one of the most accessible hand-balancing skills in calisthenics because your knees rest on your arms, shortening the lever and giving you additional support. You still need enough wrist tolerance and upper-body strength to comfortably support your bodyweight on your hands.'
    },
    {
      question: 'What is the difference between a frog stand and a tuck planche?',
      answer:
        'In a frog stand, your knees rest against your arms and your elbows are normally bent. In a tuck planche, your knees no longer receive support from your arms and your elbows stay straight. Removing the knee support makes the tuck planche significantly more demanding on the shoulders and core.'
    },
    {
      question: 'How do I stop falling forward in a frog stand?',
      answer:
        'Use your fingers as a brake. When you feel yourself tipping forward, increase pressure through your fingertips to shift your balance back. Also practice entering the position slowly so you have time to react instead of throwing your weight past the balance point.'
    },
    {
      question: 'What should I learn after the frog stand?',
      answer:
        'If your goal is planche, you can continue developing planche leans and begin working towards a tuck planche, where the knees no longer rest on the arms. If your goal is hand balancing, the control you learn in the frog stand also provides useful preparation for handstand training.'
    },
  ],

  seo: {
    title:
      'Frog Stand: How to Balance & Progress | Treethenics',

    description:
      'Learn the Frog Stand with proper technique, balance tips, common mistakes and progressions towards the Tuck Planche and Handstand.',
  },

  imageUrl: '/images/exercises/frog-stand.png',
};
