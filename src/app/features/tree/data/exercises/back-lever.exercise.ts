import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER: Exercise = {
  id: 'back-lever',
  name: 'Back Lever',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'pull',

  targetAreas: ['shoulders', 'back', 'biceps'],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'biceps'
  ],

  secondaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'abdominals',
    'forearms'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The back lever is an advanced static calisthenics skill where you hold your entire body horizontally underneath a bar or rings with your arms completely straight and your body facing the floor. It requires strong shoulders and arms, solid shoulder extension, and enough full-body tension to keep your hips and legs from dropping.',

  overview:
    'The back lever is a straight-arm strength skill, so the goal is not simply to get your body horizontal. You need to maintain locked elbows, active shoulders, and a controlled body line from your shoulders to your feet. Build the movement gradually through Skin the Cat, tuck, advanced tuck, and straddle variations before attempting the full position. As the legs move further away from your body, the lever becomes longer and the exercise gets significantly harder.',

  howTo: [
    {
      title: 'Build control with Skin the Cat',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start by becoming comfortable moving from a hang into an inverted position and through a controlled Skin the Cat. Explore the shoulder extension gradually and only move through a range that feels strong and comfortable.'
    },
    {
      title: 'Learn the tuck back lever',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From an inverted position, tuck your knees towards your chest and lower your torso until it is roughly parallel to the ground. Keep your elbows fully extended and maintain active tension through your shoulders instead of hanging passively.'
    },
    {
      title: 'Open into an advanced tuck',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Move your knees further away from your chest and gradually open your hips while keeping them around shoulder height. This creates a longer lever without requiring you to fully extend your legs yet.'
    },
    {
      title: 'Progress through the straddle',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extend both legs and spread them apart while maintaining straight knees and a horizontal body position. As you get stronger, gradually make your straddle narrower without allowing your hips to drop.'
    },
    {
      title: 'Hold the full back lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Bring your legs completely together and keep your knees and elbows straight. Brace your core, squeeze your glutes, and maintain a strong line from your shoulders through your hips to your feet while keeping your body approximately parallel to the ground.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending your elbows',
      description:
        'The standard back lever is a straight-arm skill. If your elbows start bending as you reach horizontal, the progression is too difficult or you are losing control. Return to a shorter lever and build enough strength to keep your elbows locked.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Do not focus only on keeping your shoulders in position while your hips and legs fall towards the floor. Keep your core and glutes engaged so your torso and lower body stay connected. If you cannot maintain that line, use an easier progression.'
    },
    {
      title: 'Arching your lower back',
      description:
        'Excessively arching your back can hide a loss of body tension and break the horizontal line. Keep your ribs controlled and squeeze your glutes so your pelvis stays connected to the rest of your body.'
    },
    {
      title: 'Rushing the shoulder position',
      description:
        'The back lever loads your shoulders with your arms behind your torso, so do not force yourself into the full position before you can control that range. Build confidence with Skin the Cat and shorter lever variations, and stop if the shoulder position becomes painful or unstable.'
    },
  ],

  relatedExercises: [
    'tuck-back-lever',
    'straddle-back-lever',
    'back-lever-pull-up'
  ],

  faq: [
    {
      question: 'Is the back lever a push or pull exercise?',
      answer:
        'Back lever is usually classified as a pulling or straight-arm pulling skill in calisthenics, but the muscular demands are more complex than a regular pull up. Your shoulders, chest, biceps, back, and core all contribute to maintaining the straight-arm horizontal position.'
    },
    {
      question: 'Should my arms be straight during a back lever?',
      answer:
        'Yes. A standard back lever is performed with fully extended elbows. If you have to bend your arms to stay horizontal, use an easier progression until you can maintain the position with locked elbows.'
    },
    {
      question: 'Should I learn the back lever on a bar or rings?',
      answer:
        'Both are valid. A bar gives you a fixed hand position and a stable apparatus, while rings can rotate with your hands but also move independently. Use the setup where you can practice controlled entries, straight arms, and a comfortable shoulder position.'
    },
    {
      question: 'How do I progress from straddle to full back lever?',
      answer:
        'Gradually bring your legs closer together while keeping your knees straight and your hips level with your shoulders. You can also use narrow straddles, controlled full back lever negatives, or band-assisted full holds before attempting the complete position without assistance.'
    },
  ],

  seo: {
    title:
      'Back Lever: How to Do It & Progressions | Treethenics',

    description:
      'Learn the Back Lever with proper technique, muscles worked, common mistakes and progressions from Skin the Cat and tuck holds to the full Back Lever.',
  },

  imageUrl: '/images/exercises/back-lever.png',
};
