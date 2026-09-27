import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER: Exercise = {
  id: 'front-lever',
  name: 'Front Lever',
  movementType: 'static',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'obliques',
    'forearms',
    'glutes'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The Front Lever is an advanced static pulling skill where you hang beneath a bar or rings with straight arms while holding your entire body horizontally. It requires powerful straight-arm pulling strength from the back together with enough core and hip tension to keep your body rigid from shoulders to feet.',

  overview:
    'The Front Lever is built by progressively increasing the length of your body lever. Start with your knees tucked close to your chest, then gradually open the hips through advanced tuck, one-leg, and straddle variations before bringing both legs together. In every progression, keep your elbows straight, your shoulders active, and your hips high. Progress based on the quality of your position rather than forcing longer holds with bent arms or a sagging body line.',

  howTo: [
    {
      title: 'Build your tuck front lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Hang from the bar with straight arms, bring your knees towards your chest, and raise your hips until your back is approximately parallel to the floor. Keep your shoulders active and learn to hold the position without bending your elbows.'
    },
    {
      title: 'Open into an advanced tuck',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Move your knees farther away from your chest and open your hips while keeping your knees bent. Work towards a flatter back and keep your hips around shoulder height instead of allowing them to drop.'
    },
    {
      title: 'Extend the lever',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progress to a one-leg or straddle front lever. Keep the extended knee straight and maintain the same shoulder and hip position you developed in the shorter progressions.'
    },
    {
      title: 'Narrow your straddle',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'If you use a straddle progression, gradually bring your legs closer together while keeping both knees straight. Narrowing the legs increases the effective lever without requiring you to jump immediately to the full position.'
    },
    {
      title: 'Hold the full front lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Bring your legs together and keep your knees and elbows completely straight. Brace your abs and glutes while maintaining a straight line from your shoulders to your feet with your body approximately parallel to the ground.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending your elbows',
      description:
        'The standard Front Lever is a straight-arm skill. Bending your elbows changes the mechanics and makes the position easier. If you cannot maintain locked elbows, return to a shorter lever progression.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Do not count a hold simply because your feet are off the ground. Your hips should remain around the same height as your shoulders. If they progressively fall during the hold, shorten the lever and rebuild the position.'
    },
    {
      title: 'Arching your lower back',
      description:
        'Keep your ribs and pelvis controlled and maintain tension through your abs and glutes. Excessive lower-back arch usually breaks the rigid body line and makes it harder to transfer your strength into the full lever.'
    },
    {
      title: 'Progressing based only on hold time',
      description:
        'A long hold with bent arms, tucked hips, or a sagging body is not necessarily better than a short clean hold. Increase the lever only when you can maintain the intended shape with straight arms and controlled hips.'
    },
  ],

  relatedExercises: [
    'tuck-front-lever',
    'straddle-front-lever',
    'front-lever-pull-up'
  ],

  faq: [
    {
      question: 'What muscles does the Front Lever work?',
      answer:
        'The Front Lever heavily challenges the lats and upper back to maintain the straight-arm pulling position. Your abs and obliques help keep your torso and pelvis rigid, while your rear deltoids, forearms, glutes, and other stabilizers contribute to maintaining the complete body line.'
    },
    {
      question: 'Should my arms be straight in a Front Lever?',
      answer:
        'Yes. A standard Front Lever is performed with fully extended elbows. If you have to bend your arms to maintain the position, use an easier lever such as tuck or advanced tuck until you can keep the elbows locked.'
    },
    {
      question: 'Should I learn one-leg or straddle Front Lever first?',
      answer:
        'Either can be useful. Different body proportions and mobility can make one progression feel more natural than the other. The important goal is to gradually lengthen the lever while preserving straight arms, high hips, and a controlled body line.'
    },
    {
      question: 'How do I progress from Straddle to Full Front Lever?',
      answer:
        'Gradually narrow your straddle while keeping your knees straight and hips high. You can also use full Front Lever negatives or light assistance to experience the legs-together position. Progress when you can preserve your body line rather than relying on a specific hold-time target.'
    },
  ],

  seo: {
    title:
      'Front Lever: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Front Lever with proper technique, muscles worked, common mistakes and progressions from Tuck to a Full Front Lever.',
  },

  imageUrl: '/images/exercises/front-lever.png',
};
