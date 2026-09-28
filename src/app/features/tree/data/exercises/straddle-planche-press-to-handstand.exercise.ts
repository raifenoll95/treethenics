import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
  id: 'straddle-planche-press-to-handstand',
  name: 'Straddle Planche Press to Handstand',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'chest'
  ],

  secondaryMuscles: [
    'triceps',
    'abdominals',
    'upper-back',
    'forearms',
    'glutes'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Straddle Planche Press to Handstand is an advanced straight-arm transition where you press from a horizontal Straddle Planche into a Handstand without bending your elbows or using momentum. The straddle position shortens the effective lever compared with the full legs-together version while still demanding exceptional shoulder strength, scapular control, and balance.',

  overview:
    'The Straddle Planche Press to Handstand connects two advanced straight-arm positions in one continuous movement. Begin in a stable Straddle Planche, keep your elbows locked, and press strongly through your hands as your hips rise. As your center of mass moves over your hands, progressively open the shoulder angle and bring your torso towards vertical. Finish by stacking the hips over the shoulders and hands before bringing the legs together into a controlled Handstand.',

  howTo: [
    {
      title: 'Establish the Straddle Planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a controlled Straddle Planche with straight elbows, active shoulders, hips approximately level with the shoulders, and both legs fully extended and spread apart.'
    },
    {
      title: 'Press and raise the hips',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Push strongly through the floor or parallettes while keeping your elbows locked. Begin raising your hips as your shoulders and center of mass move towards the stacked Handstand position.'
    },
    {
      title: 'Open towards vertical',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue pressing as your hips travel above your shoulders. Maintain the straddle and control the movement with straight arms instead of bending the elbows to escape the hardest part.'
    },
    {
      title: 'Stack the Handstand',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Bring your hips over your shoulders and hands until your body reaches a stable vertical position. Keep your legs straddled until you have established control over the balance point.'
    },
    {
      title: 'Close the legs',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once the Handstand is stable, smoothly bring your legs together and finish in a controlled straight-body Handstand without stepping down or bending your arms.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The defining challenge is pressing from Planche to Handstand with straight arms. Bending the elbows changes the mechanics towards a bent-arm press or 90 Degree Push Up variation.'
    },
    {
      title: 'Kicking the legs upward',
      description:
        'Throwing the legs creates momentum and bypasses part of the straight-arm pressing demand. Keep the straddle controlled and generate the transition by pressing through the shoulders as the hips rise.'
    },
    {
      title: 'Losing the Planche before pressing',
      description:
        'Do not begin from a falling or already rising Straddle Planche. Establish a recognizable horizontal position first so the movement actually starts from the Planche rather than from momentum.'
    },
    {
      title: 'Closing the straddle too early',
      description:
        'Bringing the legs together before reaching the Handstand increases the effective lever and can make the hardest part unnecessarily difficult. Maintain the straddle until your hips are stacked and then close the legs under control.'
    },
  ],

  relatedExercises: [
    'straddle-planche',
    'full-planche-press-to-handstand',
    'handstand'
  ],

  faq: [
    {
      question: 'What is a Straddle Planche Press to Handstand?',
      answer:
        'It is a straight-arm transition from a horizontal Straddle Planche to a vertical Handstand. The elbows remain locked while the shoulders press and the hips rise until the body becomes stacked over the hands.'
    },
    {
      question: 'Do my arms have to stay straight?',
      answer:
        'Yes. For the strict version used here, straight elbows are a defining part of the skill. Bending the arms changes the movement into a different type of Planche-to-Handstand press.'
    },
    {
      question: 'Why does the straddle make the press easier?',
      answer:
        'Spreading the legs brings more of your body mass closer to the hands and reduces the effective lever compared with keeping both legs straight and together. This is why the Straddle Planche is generally more accessible than the Full Planche.'
    },
    {
      question: 'Should I learn the Straddle Planche first?',
      answer:
        'Yes. You should be able to establish and control the starting Straddle Planche rather than immediately falling out of it. A stable Handstand is also important because you need to control the position you are pressing into.'
    },
    {
      question: 'How do I progress to a Straddle Planche Press to Handstand?',
      answer:
        'Build the Straddle Planche and Handstand separately, then practice controlled Handstand-to-Straddle-Planche negatives, assisted presses, and partial-range presses. Gradually increase the concentric range until you can press from a motionless Straddle Planche into Handstand.'
    },
  ],

  seo: {
    title:
      'Straddle Planche Press to Handstand | Treethenics',

    description:
      'Learn the Straddle Planche Press to Handstand with strict straight-arm technique, progressions, muscles worked and common mistakes.',
  },

  imageUrl:
    '/images/exercises/straddle-planche-press-to-handstand.png',
};
