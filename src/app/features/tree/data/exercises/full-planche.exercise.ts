import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE: Exercise = {
  id: 'full-planche',
  name: 'Full Planche',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: true,
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
    'biceps',
    'forearms',
    'glutes'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Full Planche is an advanced straight-arm strength skill where you support your entire body horizontally on your hands with your feet off the ground. Your elbows remain locked, your legs stay straight and together, and your shoulders lean far enough forward to balance your body as one long lever.',

  overview:
    'The Full Planche is the final legs-together position of the traditional planche progression. Build it through Tuck, Advanced Tuck, and Straddle Planche while gradually increasing the length of the lever. In the full position, keep your elbows locked, push strongly through the floor, maintain active scapular protraction, and create tension from your shoulders all the way to your feet. Progress based on body-line quality rather than sacrificing form just to hold the position for longer.',

  howTo: [
    {
      title: 'Build your planche foundations',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong Planche Leans and progress through Tuck and Advanced Tuck Planche. Learn to support your weight with straight elbows, active shoulders, and a strong forward lean before extending into longer positions.'
    },
    {
      title: 'Master the Straddle Planche',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Extend both legs into a wide straddle while keeping your knees straight and hips around shoulder height. Maintain the same forward lean and scapular control instead of compensating by lifting your hips.'
    },
    {
      title: 'Gradually close the straddle',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bring your legs progressively closer together while preserving your horizontal position. A narrower straddle increases the effective lever and helps bridge the large strength gap between Straddle and Full Planche.'
    },
    {
      title: 'Extend into the full position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Bring both legs completely together with your knees straight. Squeeze your glutes and brace your core so your shoulders, hips, knees, and feet remain connected in one rigid line.'
    },
    {
      title: 'Hold the Full Planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Keep your elbows locked, shoulders forward, and body approximately parallel to the floor. Push continuously through your hands and maintain full-body tension until you can no longer preserve the position cleanly.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Full Planche is a straight-arm skill. Keep your elbows completely extended instead of using bent arms to reduce the leverage. If your elbows begin to soften, return to a Straddle or Advanced Tuck variation.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Do not count a hold just because your feet remain off the floor. Your hips should stay around shoulder height so your body remains approximately horizontal. Dropping hips usually means the current lever is too difficult.'
    },
    {
      title: 'Losing scapular control',
      description:
        'Do not allow your upper body to collapse between your shoulders. Continue pushing the floor away and maintain active scapular protraction throughout the hold.'
    },
    {
      title: 'Opening the legs when strength fades',
      description:
        'If your legs gradually separate, you are returning towards a Straddle Planche to reduce the lever. End the full attempt when you can no longer keep your legs straight and together, then continue training with an appropriate progression.'
    },
  ],

  relatedExercises: [
    'straddle-planche',
    'full-planche-push-up',
    'full-planche-press-to-handstand'
  ],

  faq: [
    {
      question: 'What is the difference between Straddle Planche and Full Planche?',
      answer:
        'Both are straight-arm horizontal holds, but the Straddle Planche is performed with the legs spread apart. Spreading the legs moves more of your mass closer to your hands and reduces the effective lever. In the Full Planche, your straight legs remain together, creating a more demanding position.'
    },
    {
      question: 'Should my arms be completely straight in a Full Planche?',
      answer:
        'Yes. Locked elbows are one of the defining features of a standard Full Planche. If you intentionally bend your elbows, you are performing a different bent-arm planche variation.'
    },
    {
      question: 'How do I progress from Straddle to Full Planche?',
      answer:
        'Gradually narrow your straddle while keeping your hips high, elbows locked, and knees straight. You can also use light band assistance or controlled Full Planche attempts to practice the legs-together position without sacrificing your body line.'
    },
    {
      question: 'Is Full Planche mainly a core exercise?',
      answer:
        'No. Your core and glutes are important for keeping your body rigid, but the Full Planche requires exceptional straight-arm shoulder strength. Your front deltoids, serratus anterior, chest, arms, and wrists all contribute to supporting and stabilizing the position.'
    },
  ],

  seo: {
    title:
      'Full Planche: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Full Planche with proper straight-arm technique, muscles worked, common mistakes and progressions from Straddle to Full Planche.',
  },

  imageUrl: '/images/exercises/full-planche.png',
};
