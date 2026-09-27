import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE_PUSH_UP: Exercise = {
  id: 'straddle-planche-push-up',
  name: 'Straddle Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'triceps'
  ],

  secondaryMuscles: [
    'chest',
    'abdominals',
    'biceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The straddle planche push up is an advanced pushing skill where you perform a full push up while holding your body horizontally above the ground with your legs straight and spread apart. Compared with the advanced tuck, extending your legs creates a much longer lever and dramatically increases the demand on your shoulders. It is one of the final progressions before the full planche push up.',

  overview:
    'The straddle planche push up combines serious planche strength with dynamic pushing power. Your legs stay completely straight and spread apart while your shoulders remain forward of your hands and your body stays roughly parallel to the floor. Before working on full reps, you should already have strong advanced tuck planche push ups and be comfortable holding a straddle planche. Start with negatives and partial reps, then gradually build enough strength to press through the full range of motion.',

  howTo: [
    {
      title: 'Build a solid straddle planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before adding push ups, build a controlled straddle planche with straight arms. Lean your shoulders forward, push strongly through the floor, extend your legs behind you, and spread them apart while keeping your hips around shoulder height. Make sure you can maintain the position before adding dynamic work.'
    },
    {
      title: 'Practice straddle planche negatives',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Start from a strong straddle planche and slowly bend your elbows while keeping your legs straight and your feet off the ground. Control the descent for as long as possible and try to maintain the same horizontal body position instead of letting your hips drop.'
    },
    {
      title: 'Build strength with partial reps',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Once your negatives are controlled, start pressing through a smaller range of motion. Only go as deep as you can while keeping your legs straight, hips up, and shoulders forward. Gradually increase the depth as your pushing strength improves.'
    },
    {
      title: 'Perform the full straddle planche push up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Lower yourself under control while maintaining your straddle position, then push strongly through your hands until your elbows are fully extended again. Finish the rep in a clean straddle planche without letting your feet touch the ground.'
    },
    {
      title: 'Start closing your legs',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your straddle planche push ups are strong, gradually reduce the distance between your legs. Bringing your feet closer together increases the leverage and makes the exercise harder. Over time, this progression can take you towards the full planche push up with your legs together.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending your knees',
      description:
        'The straddle position should be performed with your legs extended. Bending your knees shortens the lever and makes the movement considerably easier. If you cannot keep your legs straight throughout the rep, return to advanced tuck work or use a smaller range of motion.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Your body should stay roughly horizontal throughout the movement. When your hips drop below your shoulders, you lose the position and change the mechanics of the exercise. Keep your glutes and core tight and reduce the range of motion if you cannot maintain your height.'
    },
    {
      title: 'Losing the forward lean',
      description:
        'As you press back up, it is tempting to shift your shoulders behind your hands to make the rep easier. Keep your shoulders forward and maintain pressure through your hands so your center of mass stays in the right position.'
    },
    {
      title: 'Bringing your legs in when the rep gets hard',
      description:
        'Another common way to shorten the lever is to pull your legs closer together by bending at the hips or returning towards an advanced tuck. Keep your hips open and your legs extended behind you. If you cannot maintain the straddle shape, use an easier progression instead of forcing the rep.'
    },
  ],

  relatedExercises: [
    'advanced-tuck-planche-push-up',
    'straddle-planche',
    'planche-push-up'
  ],

  faq: [
    {
      question: 'Why is a straddle planche push up easier than a full planche push up?',
      answer:
        'Spreading your legs changes how your body mass is distributed and reduces the effective leverage compared with keeping your legs together. It is still an extremely difficult exercise, but the straddle position is generally more manageable than the full planche position.'
    },
    {
      question: 'Should I learn the straddle planche before straddle planche push ups?',
      answer:
        'Yes. You should already be comfortable supporting yourself in a straddle planche before adding the push up. If maintaining the static position is still a struggle, bending your elbows will make it much harder to keep your body off the ground and control the movement.'
    },
    {
      question: 'How do I progress from advanced tuck to straddle planche push ups?',
      answer:
        'Start by extending your legs further behind you instead of jumping immediately from advanced tuck to a wide straddle. Build your static straddle planche first, then use negatives and partial push ups to develop strength through the movement. Gradually increase your range of motion until you can complete a full rep.'
    },
    {
      question: 'What comes after the straddle planche push up?',
      answer:
        'The full planche push up is the natural next progression. Instead of spreading your legs, you gradually bring them closer together while maintaining the same horizontal body position. The smaller the straddle becomes, the closer you are to performing the movement with your legs completely together.'
    },
  ],

  seo: {
    title:
      'Straddle Planche Push Up: Guide & Progressions | Treethenics',

    description:
      'Learn the Straddle Planche Push Up with proper technique, muscles worked, common mistakes and progressions towards the full planche push up.',
  },

  imageUrl: '/images/exercises/straddle-planche-push-up.png',
};
