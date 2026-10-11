
import { Exercise } from '../../../../shared/models/exercise.model';

export const TYPEWRITER_PULL_UP: Exercise = {
  id: 'typewriter-pull-up',
  name: 'Typewriter Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'back',
    'biceps',
    'shoulders',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Typewriter Pull Up is an advanced bodyweight pulling exercise that combines a wide-grip Pull Up with controlled lateral movement above the bar. After pulling into the top position, the athlete shifts the torso from one arm to the other while maintaining elevated body position. It develops unilateral pulling strength, upper-back endurance, grip strength, and core stability.',

  overview:
    'Begin hanging from a pull-up bar with a wide overhand grip and your arms fully extended. Pull yourself upwards until your chin reaches or passes the bar. While maintaining this elevated position, shift your upper body horizontally towards one hand, bending the working elbow more deeply as the opposite arm becomes nearly straight. Without lowering into a full hang, move across the bar towards the other hand, transferring the load between your arms. Keep your chin approximately at bar height throughout the lateral movement. After completing the movement on both sides, return to the center and lower yourself under control. Avoid swinging, excessive torso rotation, or allowing your body to drop between sides.',

  howTo: [
    {
      title: 'Establish a wide grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a secure pull-up bar with your palms facing away from you and your hands wider than shoulder-width apart. Hang with your elbows fully extended and engage your core.'
    },
    {
      title: 'Pull above the bar',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Perform a controlled wide-grip Pull Up until your chin reaches or passes bar height. Keep your shoulders active and avoid swinging your legs.'
    },
    {
      title: 'Shift towards one arm',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Move your torso horizontally towards one hand while keeping your body elevated. Bend the working elbow more deeply and gradually extend the opposite arm.'
    },
    {
      title: 'Travel across the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain your chin approximately at bar height as you move laterally towards the opposite hand. Transfer your bodyweight smoothly while keeping your shoulders and core controlled.'
    },
    {
      title: 'Return and lower',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Move back towards the center and lower yourself slowly until your elbows are fully extended. Reset your body position before beginning another repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Dropping between sides',
      description:
        'Avoid lowering into a full hang while moving from one arm to the other. The Typewriter Pull Up requires maintaining an elevated pulling position during the lateral transition.'
    },
    {
      title: 'Using a grip that is too narrow',
      description:
        'A narrow grip restricts lateral movement and makes it difficult to extend the assisting arm. Use a sufficiently wide grip without forcing an uncomfortable shoulder position.'
    },
    {
      title: 'Swinging the legs',
      description:
        'Avoid kicking or swinging your legs to move sideways. The lateral transition should be driven by controlled upper-body strength.'
    },
    {
      title: 'Rotating the torso excessively',
      description:
        'Keep your chest generally facing the bar. Excessive twisting can reduce control and change the intended pulling mechanics.'
    },
    {
      title: 'Failing to extend the assisting arm',
      description:
        'As you shift towards one hand, allow the opposite arm to become nearly straight. Keeping both elbows equally bent reduces the unilateral strength demand.'
    },
    {
      title: 'Moving too quickly',
      description:
        'Avoid rushing across the bar. Use slow, deliberate lateral movement to maintain tension and prevent uncontrolled shoulder loading.'
    },
    {
      title: 'Forcing the shoulders into uncomfortable positions',
      description:
        'Do not force extreme lateral reach or elbow extension under load. Reduce the movement range or use assistance if you cannot maintain comfortable shoulder control.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'wide-grip-pull-up',
    'archer-pull-up',
    'one-arm-pull-up'
  ],

  faq: [
    {
      question: 'What is a Typewriter Pull Up?',
      answer:
        'A Typewriter Pull Up is an advanced Pull Up variation where the athlete pulls to the top of a wide-grip Pull Up and then moves horizontally between the hands while maintaining an elevated position.'
    },
    {
      question: 'What muscles do Typewriter Pull Ups work?',
      answer:
        'Typewriter Pull Ups primarily train the latissimus dorsi, biceps, and upper-back muscles. The forearms, rear deltoids, and core muscles help stabilize the body during the lateral movement.'
    },
    {
      question: 'Are Typewriter Pull Ups harder than regular Pull Ups?',
      answer:
        'Yes. Typewriter Pull Ups require enough pulling strength to remain elevated while transferring more bodyweight towards one arm. They also demand greater muscular endurance and lateral control.'
    },
    {
      question: 'What is the difference between Archer Pull Ups and Typewriter Pull Ups?',
      answer:
        'An Archer Pull Up emphasizes pulling upwards towards one hand while the opposite arm remains extended. A Typewriter Pull Up begins with a full Pull Up and adds a horizontal transition between both sides while maintaining the elevated position.'
    },
    {
      question: 'Do Typewriter Pull Ups help with One Arm Pull Ups?',
      answer:
        'Yes. They develop unilateral pulling strength and control while gradually shifting more load towards one arm. However, specific assisted One Arm Pull Up training is also necessary to develop strength through the full vertical pulling range.'
    },
    {
      question: 'Should my chin stay above the bar?',
      answer:
        'Ideally, your chin should remain approximately at or above bar height throughout the lateral movement. If you cannot maintain that position, reduce the lateral range or use assistance.'
    },
    {
      question: 'How can I make Typewriter Pull Ups easier?',
      answer:
        'Practice wide-grip Pull Ups, Archer Pull Ups, and controlled top-position holds. You can also use a resistance band or perform shorter lateral movements before progressing to full side-to-side transitions.'
    },
  ],

  seo: {
    title:
      'Typewriter Pull Up: Technique & Progression | Treethenics',

    description:
      'Learn the Typewriter Pull Up with correct lateral pulling technique, muscles worked, common mistakes and progressions towards the One Arm Pull Up.',
  },

  imageUrl: '/images/exercises/typewriter-pull-up.png',
};
