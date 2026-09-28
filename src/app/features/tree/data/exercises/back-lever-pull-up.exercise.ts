import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER_PULL_UP: Exercise = {
  id: 'back-lever-pull-up',
  name: 'Back Lever Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'shoulders'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'abdominals',
    'forearms'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The back lever pull up is an advanced pulling exercise performed while holding your body horizontally underneath a bar or rings. Starting from a full back lever, you bend your elbows and pull your body towards the bar without losing your straight body line, then lower back to straight arms. It combines the full-body control of a back lever with demanding bent-arm pulling strength.',

  overview:
    'The back lever pull up takes a static back lever and turns it into a dynamic pulling exercise. Instead of changing your body angle, the goal is to keep your shoulders, hips, knees, and feet roughly parallel to the ground while your elbows bend and straighten. You should already have a controlled full back lever before training the full variation. Tuck, advanced tuck, and straddle back lever pull ups are useful ways to learn the pulling action with a shorter lever.',

  howTo: [
    {
      title: 'Build a solid back lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start by developing a controlled back lever with straight arms. Keep your body horizontal, legs straight, and core and glutes tight. If you cannot maintain the static position consistently, continue working on your back lever before adding the pull.'
    },
    {
      title: 'Learn the pull in a tuck position',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use a tuck back lever to learn the movement with a shorter lever. From the horizontal position, bend your elbows and pull your body towards the bar while keeping your hips from dropping. Lower back to straight arms under control.'
    },
    {
      title: 'Increase the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progress through advanced tuck, one-leg, or straddle variations while using the same pulling motion. Only increase the lever when you can bend and straighten your arms without losing your horizontal body position.'
    },
    {
      title: 'Perform the full back lever pull up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Start in a full back lever with your legs straight and together. Bend your elbows and pull your body towards the bar as one rigid unit. Keep your shoulders, hips, and feet approximately level instead of allowing your legs to fall.'
    },
    {
      title: 'Return to the back lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly extend your elbows and move away from the bar until your arms are straight again. Finish in a controlled full back lever before beginning another rep.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a back lever raise',
      description:
        'A back lever pull up should come mainly from bending and extending your elbows while your body stays horizontal. If your arms remain straight and your entire body rotates towards an inverted hang, you are performing a back lever pull or raise instead.'
    },
    {
      title: 'Letting your legs drop',
      description:
        'Do not allow your hips and feet to fall as you pull towards the bar. Keep your core and glutes tight so your body remains roughly parallel to the ground throughout the repetition. Use a shorter lever if you cannot maintain that position.'
    },
    {
      title: 'Breaking at the hips',
      description:
        'Piking at the hips shortens the lever and makes the pull easier. Keep your hips extended and move your torso and legs together as one unit instead of folding your body to reach the bar.'
    },
    {
      title: 'Skipping easier lever positions',
      description:
        'Being able to hold a full back lever does not automatically mean you can perform a full back lever pull up. If the pulling phase immediately destroys your body line, practice tuck, advanced tuck, or straddle pull ups before returning to the full variation.'
    },
  ],

  relatedExercises: [
    'back-lever',
    'straddle-back-lever',
    'front-lever-pull-up'
  ],

  faq: [
    {
      question: 'What is the difference between a back lever pull up and a back lever pull?',
      answer:
        'In a back lever pull up, you bend your elbows and pull your body towards the bar while trying to maintain the horizontal back lever position. A back lever pull or raise normally uses straight arms and rotates the entire body between the back lever and a higher position. They are different movements even though the names are sometimes used interchangeably.'
    },
    {
      question: 'Do I need a full back lever before learning back lever pull ups?',
      answer:
        'You should have a controlled back lever before attempting the full variation. However, you can start learning the pulling action earlier with tuck or advanced tuck back lever pull ups. These shorter lever positions let you develop the specific bent-arm strength without having to support the full lever immediately.'
    },
    {
      question: 'How do I progress to a full back lever pull up?',
      answer:
        'Start with tuck back lever pull ups and gradually increase the lever as your strength improves. Advanced tuck, one-leg, and straddle variations can bridge the gap to the full movement. Prioritize maintaining your horizontal body line rather than moving to a harder progression too quickly.'
    },
    {
      question: 'Can I do back lever pull ups on rings?',
      answer:
        'Yes. Back lever pull ups can be performed on both a fixed bar and gymnastics rings. Rings move independently and add a stability challenge, so a fixed bar can be easier when you are first learning the movement.'
    },
  ],

  seo: {
    title:
      'Back Lever Pull Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn the Back Lever Pull Up with proper technique, muscles worked, common mistakes and progressions from tuck to full back lever pull ups.',
  },

  imageUrl: '/images/exercises/back-lever-pull-up.png',
};
