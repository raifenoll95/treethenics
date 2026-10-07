import { Exercise } from '../../../../shared/models/exercise.model';

export const EARLY_PLANCHE_PROGRESSIONS: Exercise = {
  id: 'early-planche-progressions',
  name: 'Tuck Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: [
    'shoulders',
    'chest',
    'core'
  ],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'chest'
  ],

  secondaryMuscles: [
    'biceps',
    'triceps',
    'abdominals',
    'forearms'
  ],

  equipment: [
    'floor',
    'parallettes'
  ],

  description:
    'The Tuck Planche is a straight-arm calisthenics hold where the entire body is supported on the hands with the feet off the ground and the knees tucked towards the chest. It is one of the fundamental Planche progressions and introduces unsupported straight-arm balance before moving towards longer body positions.',

  overview:
    'Place your hands on the floor or parallettes and lean your shoulders forward beyond your hands while keeping your elbows completely straight. Push strongly through the support and protract your shoulder blades, then draw your knees towards your chest and gradually lift both feet from the ground. Keep the knees unsupported and maintain the hips high enough to create a compact Planche position rather than an upright Tuck L-Sit. As your Planche strength develops, the next step is to gradually open the hips and move the knees farther away from the chest towards an Advanced Tuck Planche.',

  howTo: [
    {
      title: 'Set your hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands approximately shoulder-width apart on the floor or parallettes. Straighten your elbows and prepare to support your weight through locked arms.'
    },
    {
      title: 'Lean forward',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Shift your shoulders forward beyond your hands while keeping your arms straight. The forward lean creates the counterbalance needed to eventually lift your feet.'
    },
    {
      title: 'Push the floor away',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Actively protract your shoulder blades by pushing strongly through your hands. Keep your upper back broad instead of allowing your chest to collapse between your arms.'
    },
    {
      title: 'Lift your feet',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Bring your knees towards your chest and gradually transfer enough weight forward for both feet to leave the ground. Keep your knees completely free from your arms.'
    },
    {
      title: 'Hold the Tuck Planche',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain straight elbows, active shoulder protraction, and a compact tuck with both feet suspended. Keep your hips controlled and balance the position through small pressure adjustments in your hands.'
    },
  ],

  commonMistakes: [
    {
      title: 'Resting the knees on the arms',
      description:
        'Your knees should remain unsupported. Resting them on your upper arms turns the position into a Frog or Crow-style balance rather than a true Tuck Planche.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Tuck Planche is a straight-arm strength skill. Keep your elbows fully extended instead of using bent arms to make the leverage easier.'
    },
    {
      title: 'Not leaning far enough forward',
      description:
        'Your shoulders need to move beyond your hands to counterbalance the weight behind them. Without enough forward lean, your feet will remain on the floor or immediately fall back down.'
    },
    {
      title: 'Letting the shoulders collapse',
      description:
        'Do not sink between your arms or allow the shoulder blades to retract. Push firmly through the support and maintain active scapular protraction.'
    },
    {
      title: 'Keeping the hips too low',
      description:
        'Avoid hanging underneath your shoulders in an upright Tuck L-Sit position. The hips should rise into a compact Planche shape while the shoulders remain forward of the hands.'
    },
  ],

  relatedExercises: [
    'planche-lean',
    'frog-stand',
    'advanced-tuck-planche'
  ],

  faq: [
    {
      question: 'What is a Tuck Planche?',
      answer:
        'The Tuck Planche is a static straight-arm skill where you support your entire body on your hands while keeping your knees tucked towards your chest and both feet off the ground.'
    },
    {
      question: 'What is the difference between a Frog Stand and a Tuck Planche?',
      answer:
        'In a Frog Stand, the knees are supported by the arms and the elbows are usually bent. In a Tuck Planche, the knees do not touch the arms and the elbows remain completely straight, so the shoulders must support much more of your bodyweight.'
    },
    {
      question: 'Should my arms be straight in a Tuck Planche?',
      answer:
        'Yes. Full elbow extension is one of the defining requirements of a Tuck Planche. A bent-arm tuck is a different type of hold and should not be used as the standard position.'
    },
    {
      question: 'Why do my shoulders need to lean past my hands?',
      answer:
        'Your legs and hips remain behind your hands, so your shoulders must move forward to keep your combined center of mass over the base created by your hands. Harder Planche variations generally require increasingly demanding forward loading.'
    },
    {
      question: 'How do I progress from Tuck Planche?',
      answer:
        'Once you can consistently control the Tuck Planche with straight arms and active shoulders, begin opening your hips and moving your knees farther away from your chest. This gradually transforms the position into an Advanced Tuck Planche and increases the effective lever.'
    },
  ],

  seo: {
    title:
      'Tuck Planche: Technique & Planche Progression | Treethenics',

    description:
      'Learn the Tuck Planche with proper straight-arm technique, scapular position and balance, and progress towards the Advanced Tuck and Full Planche.',
  },

  imageUrl: '/images/exercises/tuck-planche.png',
};
