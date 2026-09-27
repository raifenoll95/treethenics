import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_PUSH_UPS: Exercise = {
  id: 'full-planche-push-ups',
  name: 'Full Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
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
    'The full planche push up is one of the hardest pushing exercises in calisthenics. You perform a complete push up while keeping your entire body horizontal above the ground, with your legs straight, feet together, and nothing except your hands touching the floor. It requires exceptional shoulder strength, pushing power, and full-body control, making it the final step after mastering tuck, advanced tuck, and straddle planche push ups.',

  overview:
    'The full planche push up takes everything you have built through your planche training and puts it into one movement. Unlike the straddle variation, your legs stay completely together, creating the longest and most demanding lever of the main planche progressions. Before working on full reps, you should already have a strong full planche and controlled straddle planche push ups. From there, gradually close your straddle, build controlled negatives, and work towards pressing through the entire movement without losing your horizontal position.',

  howTo: [
    {
      title: 'Build a solid full planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before adding push ups, make sure you can hold a clean full planche with straight arms. Keep your legs completely extended and together, point your toes, lean your shoulders forward, and push strongly through the floor while keeping your body roughly parallel to the ground.'
    },
    {
      title: 'Close your straddle push ups',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use your straddle planche push ups to gradually prepare for the full position. Instead of immediately bringing your feet completely together, reduce the width of your straddle over time while maintaining the same range of motion and body position.'
    },
    {
      title: 'Practice full planche negatives',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Start from a full planche with straight arms and slowly bend your elbows. Keep your legs together and control the descent without letting your feet touch the floor. Even if you cannot press back up yet, controlled negatives will help you build strength in the exact position you need.'
    },
    {
      title: 'Build the press with partial reps',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Work through a range of motion you can control while keeping the full planche shape. Start with shallow reps if necessary and gradually go deeper as you get stronger. Do not separate your legs or drop your hips just to complete a larger range of motion.'
    },
    {
      title: 'Perform the full planche push up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'From a straight-arm full planche, bend your elbows and lower your body under control while keeping your legs straight and together. Push strongly through your hands until your elbows are fully extended again, finishing in the same clean full planche position where you started.'
    },
  ],

  commonMistakes: [
    {
      title: 'Opening your legs during the rep',
      description:
        'It is common to start with your feet together and gradually open into a straddle when the push becomes difficult. This shortens the effective lever and makes the exercise easier. If you cannot keep your legs together, continue building strength with narrower straddle planche push ups.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Your shoulders, hips, and legs should remain roughly in the same horizontal line throughout the movement. If your hips drop significantly as you bend or extend your elbows, reduce the range of motion or return to an easier progression until you can maintain the position.'
    },
    {
      title: 'Losing the forward lean',
      description:
        'Your shoulders need to remain forward of your hands to balance the weight of your body behind them. Shifting backwards during the press may make the movement feel easier, but it will usually cause your legs to drop and break the planche position.'
    },
    {
      title: 'Sacrificing form just to get a rep',
      description:
        'A full planche push up is not about getting your chest down and back up at any cost. Opening your legs, bending your knees, dropping your hips, or using momentum changes the difficulty considerably. A controlled partial rep with a clean full planche shape is more useful than forcing a complete rep with poor form.'
    },
  ],

  relatedExercises: [
    'straddle-planche-push-up',
    'full-planche',
    '90-degree-push-up'
  ],

  faq: [
    {
      question: 'Do I need a full planche before learning full planche push ups?',
      answer:
        'Yes, having a strong full planche should come first. The push up requires you to maintain the same position while your elbows bend and straighten, which is considerably harder than holding it with straight arms. If your static full planche is still inconsistent, keep building that foundation before focusing on full push ups.'
    },
    {
      question: 'Why are full planche push ups harder than straddle planche push ups?',
      answer:
        'Bringing your legs together creates a more demanding lever than the straddle position. Your shoulders have to produce more force to keep your lower body suspended behind your hands, which is why closing even a strong straddle can feel like a huge jump in difficulty.'
    },
    {
      question: 'How do I progress from straddle to full planche push ups?',
      answer:
        'You do not need to go directly from a wide straddle to legs completely together. Gradually narrow your straddle while keeping your push ups clean, and combine this with full planche holds, negatives, and partial reps. Over time, keep reducing the distance between your feet until you can maintain the full position.'
    },
    {
      question: 'Should I train full planche push ups on the floor or parallettes?',
      answer:
        'Both are valid. Parallettes keep your wrists in a neutral position and give you extra clearance at the bottom of the push up, while floor planche push ups require more wrist extension. Train with the setup that lets you maintain the strongest and most controlled planche position.'
    },
  ],

  seo: {
    title:
      'Full Planche Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn the Full Planche Push Up with proper technique, muscles worked, common mistakes and progressions from straddle planche push ups to full reps.',
  },

  imageUrl: '/images/exercises/full-planche-pu.png',
};
