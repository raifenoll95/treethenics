import { Exercise } from '../../../../shared/models/exercise.model';

export const ARCHER_PULL_UP: Exercise = {
  id: 'archer-pull-up',
  name: 'Archer Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'forearms',
    'rear-deltoids',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar', 'bands'],

  description:
    'The archer pull up is an uneven pull up variation where you pull your body towards one hand while the opposite arm extends along the bar. This shifts much more of the work onto one side and develops the unilateral pulling strength needed for harder skills such as the one arm pull up. It is a natural progression once regular pull ups are strong and controlled.',

  overview:
    'The archer pull up is not just a wide pull up. Instead of pulling straight towards the middle of the bar, you move your chest towards one hand while gradually straightening the opposite arm. The working arm does most of the pulling while the straighter arm still provides assistance and balance. Start by shifting only part of your weight to one side, then make the assisting arm straighter as your unilateral strength improves.',

  howTo: [
    {
      title: 'Build strong pull ups',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start with clean regular and wide-grip pull ups. Practice pulling from a controlled hang without kicking or swinging so you have enough basic pulling strength before shifting most of your weight onto one arm.'
    },
    {
      title: 'Practice side-to-side pulling',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Take a wide overhand grip and begin pulling your body towards one hand instead of straight up through the middle. Let the opposite arm become longer as your chest moves towards the working side.'
    },
    {
      title: 'Use assisted archer pull ups',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'If you cannot keep the assisting arm mostly straight, use a resistance band or allow that arm to bend slightly. As you get stronger, rely on it less and make more of the movement come from the working arm.'
    },
    {
      title: 'Perform the full archer pull up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From a wide grip, pull your chest towards your working hand while extending the opposite arm along the bar. Reach the top under control, then reverse the movement and lower yourself back towards a full hang.'
    },
    {
      title: 'Reduce assistance from the straight arm',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'As your archer pull ups improve, focus on doing less work with the assisting arm while keeping your reps controlled. This gradually prepares your working side for assisted one arm pull ups and eventually the full one arm pull up.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pulling straight through the middle',
      description:
        'If both elbows bend equally and your chest stays in the center, you are basically performing a wide-grip pull up. Deliberately shift your body towards the working hand while the opposite arm becomes straighter.'
    },
    {
      title: 'Forcing the assisting arm completely straight',
      description:
        'Do not force your elbow into a perfectly straight position before you have the strength and control for it. A slightly bent assisting arm is a valid progression. Gradually straighten it as the working side becomes stronger.'
    },
    {
      title: 'Swinging towards the working hand',
      description:
        'Do not use your legs or momentum to throw your body sideways. Brace your core and make the lateral movement come from a controlled pull rather than a swing.'
    },
    {
      title: 'Always pulling with your stronger side',
      description:
        'Archer pull ups make left-to-right strength differences very obvious. Train both directions and give your weaker side the same range of motion and attention instead of letting your dominant arm do most of the work.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'typewriter-pull-up',
    'one-arm-pull-up'
  ],

  faq: [
    {
      question: 'What is the difference between an archer pull up and a regular pull up?',
      answer:
        'A regular pull up distributes the work relatively evenly between both arms as you pull towards the center. In an archer pull up, you deliberately move towards one hand while the opposite arm becomes straighter. This places much more of the pulling demand on the working side.'
    },
    {
      question: 'Does the straight arm do any work during an archer pull up?',
      answer:
        'Yes. The extended arm still holds the bar, assists the movement, and helps stabilize your body. The goal is not to make it completely inactive, but to gradually reduce how much assistance it provides as your working arm becomes stronger.'
    },
    {
      question: 'Do I need to keep the assisting arm completely straight?',
      answer:
        'Not when you are first learning the exercise. Allowing the assisting elbow to bend slightly makes the movement easier and is a useful progression. As you improve, work towards a straighter assisting arm while keeping the movement comfortable and controlled.'
    },
    {
      question: 'Are archer pull ups good for learning the one arm pull up?',
      answer:
        'Yes. Archer pull ups are a useful step towards one arm pulling because they let you progressively shift more work onto a single side while the other hand still provides assistance. However, they are not the same as a one arm pull up, so more specific assisted one arm work and negatives are usually needed afterwards.'
    },
  ],

  seo: {
    title:
      'Archer Pull Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn the Archer Pull Up with proper technique, muscles worked, common mistakes and progressions towards the One Arm Pull Up.',
  },

  imageUrl: '/images/exercises/archer-pull-up.png',
};
