
import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_ADVANCED_PLANCHE: Exercise = {
  id: 'tuck-advanced-planche',
  name: 'Advanced Tuck Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'core'],

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

  equipment: ['floor', 'parallettes'],

  description:
    'The Advanced Tuck Planche is a straight-arm Planche progression where the knees remain bent but move farther away from the chest, opening the hips and creating a flatter back. This longer lever makes it significantly more demanding than the basic Tuck Planche and prepares you for the Straddle Planche.',

  overview:
    'The Advanced Tuck Planche bridges the gap between the compact Tuck Planche and longer-lever Planche variations. Start from a strong Tuck Planche, lean your shoulders forward, and gradually open your hips while keeping your knees bent. Aim to bring your hips approximately level with your shoulders and flatten your back without losing elbow lockout or active scapular protraction. As you become stronger, move the knees progressively farther from your chest before beginning to extend the legs towards a Straddle Planche.',

  howTo: [
    {
      title: 'Start from Tuck Planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Establish a controlled Tuck Planche with your feet off the floor, elbows completely straight, shoulders leaning forward, and knees close to your chest.'
    },
    {
      title: 'Open the hips',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Slowly move your knees away from your chest while keeping them bent. Allow your hips to open and your back to become flatter without letting your feet touch the floor.'
    },
    {
      title: 'Maintain the forward lean',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep your shoulders forward beyond your hands as the lever becomes longer. Push strongly through the floor and maintain active scapular protraction.'
    },
    {
      title: 'Level the hips',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Aim to keep your hips approximately level with your shoulders while maintaining a flatter back. Keep your knees bent and your elbows locked throughout the hold.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the position without allowing your hips to rise back into a compact Tuck Planche or fall below the horizontal line. End the hold when you can no longer preserve the position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Staying too tucked',
      description:
        'Keeping your knees tightly against your chest turns the position back into a regular Tuck Planche. Open the hips and move the knees farther away while maintaining control.'
    },
    {
      title: 'Raising the hips too high',
      description:
        'Lifting your hips significantly above your shoulders shortens the lever and makes the position closer to a regular tuck. Aim for a flatter back with the hips approximately around shoulder height.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Advanced Tuck Planche is a straight-arm skill. Keep your elbows fully extended and return to an easier progression if you cannot maintain the longer lever without bending them.'
    },
    {
      title: 'Losing scapular protraction',
      description:
        'Allowing the chest to sink between the shoulders reduces stability and changes the position. Continue pushing the floor away and maintain an active upper back throughout the hold.'
    },
  ],

  relatedExercises: [
    'tuck-planche',
    'straddle-planche',
    'advanced-tuck-planche-push-up'
  ],

  faq: [
    {
      question: 'What is an Advanced Tuck Planche?',
      answer:
        'The Advanced Tuck Planche is a harder version of the Tuck Planche where the knees remain bent but move farther away from the chest. The hips are more open and the back becomes flatter, creating a longer and more demanding lever.'
    },
    {
      question: 'What is the difference between Tuck Planche and Advanced Tuck Planche?',
      answer:
        'In a Tuck Planche, the knees stay close to the chest and the back is naturally more rounded. In an Advanced Tuck Planche, you open the hips and move the knees farther away, creating a flatter back and increasing the load on the shoulders.'
    },
    {
      question: 'Should my back be flat in an Advanced Tuck Planche?',
      answer:
        'Aim for a substantially flatter back than in a regular Tuck Planche, with the hips approximately around shoulder height. The important change is opening the hip angle and lengthening the lever rather than simply trying to force a visually perfect line.'
    },
    {
      question: 'Should my arms stay completely straight?',
      answer:
        'Yes. The Advanced Tuck Planche is a straight-arm strength skill, so the elbows should remain locked throughout the hold.'
    },
    {
      question: 'How do I progress from Advanced Tuck Planche to Straddle Planche?',
      answer:
        'Gradually increase the lever while maintaining the same straight-arm position. You can begin opening the knees and extending one or both legs into a wider straddle, progressively relying less on the tucked position until both legs are straight.'
    },
  ],

  seo: {
    title:
      'Advanced Tuck Planche: Technique & Progressions | Treethenics',

    description:
      'Learn the Advanced Tuck Planche with proper flat-back technique, muscles worked, progressions and common mistakes before advancing to Straddle Planche.',
  },

  imageUrl: '/images/exercises/tuck-advanced-planche.png',
};
