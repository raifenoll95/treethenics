
import { Exercise } from '../../../../shared/models/exercise.model';

export const STRAIGHT_BAR_DIP: Exercise = {
  id: 'straight-bar-dip',
  name: 'Straight Bar Dip',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: [
    'chest',
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'triceps',
    'chest',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'upper-back',
    'forearms',
    'latissimus-dorsi'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Straight Bar Dip is an intermediate bodyweight pushing exercise performed above a single horizontal bar. Using an overhand grip, the athlete lowers the chest towards the bar by bending the elbows and then presses back into a straight-arm support position. It develops triceps, chest, and shoulder strength while preparing the pushing phase of the Muscle Up.',

  overview:
    'Begin in a stable support position above a horizontal bar with your hands approximately shoulder-width apart and your palms facing away from you. Keep your arms extended, shoulders active, and body slightly inclined forward. Bend your elbows and lower your upper body towards the bar while maintaining control and keeping the bar close to your lower chest or upper abdomen. Descend through a comfortable range without collapsing into your shoulders. Press firmly through the bar to extend your elbows and return to the starting support position. Maintain a controlled body position throughout the exercise and avoid using momentum or swinging your legs.',

  howTo: [
    {
      title: 'Establish support above the bar',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Position yourself above a stable horizontal bar with an overhand grip approximately shoulder-width apart. Extend your elbows fully and keep your shoulders active while supporting your bodyweight.'
    },
    {
      title: 'Lean slightly forward',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Maintain a slight forward torso lean with the bar positioned in front of your body. Engage your abdominals and glutes to stabilize your legs and prevent excessive swinging.'
    },
    {
      title: 'Lower towards the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend both elbows and slowly lower your chest towards the horizontal bar. Keep your wrists and shoulders controlled, allowing your torso to lean forward naturally during the descent.'
    },
    {
      title: 'Press back upwards',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push firmly through your hands and extend your elbows to raise your body. Maintain a controlled torso position and avoid kicking your legs to generate momentum.'
    },
    {
      title: 'Return to straight-arm support',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish above the bar with your elbows fully extended and your shoulders stable. Keep the bar close to your hips or lower abdomen and establish control before beginning another repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Leaning too far forward',
      description:
        'Excessive forward leaning can make the movement difficult to control and place unnecessary stress on the shoulders. Maintain only the forward lean needed to move comfortably around the bar.'
    },
    {
      title: 'Flaring the elbows excessively',
      description:
        'Avoid allowing your elbows to move directly outwards during the descent. Keep them relatively close to your torso to maintain controlled shoulder and elbow mechanics.'
    },
    {
      title: 'Using excessive depth',
      description:
        'Do not force your chest below the bar if your shoulder mobility or strength does not allow it. Lower only through a comfortable range while maintaining joint control.'
    },
    {
      title: 'Swinging the legs',
      description:
        'Avoid kicking your legs or using momentum to press upwards. Keep your core engaged and perform the movement using controlled upper-body strength.'
    },
    {
      title: 'Collapsing into the shoulders',
      description:
        'Maintain active shoulder control throughout the exercise. Avoid sinking abruptly into the bottom position or allowing your shoulders to become unstable.'
    },
    {
      title: 'Failing to complete elbow extension',
      description:
        'Return to a stable support position with your arms fully extended. Avoid finishing repetitions with partially bent elbows or relying on the bar to support your torso.'
    },
  ],

  relatedExercises: [
    'dips',
    'ring-dip',
    'muscle-up',
    'slow-muscle-up'
  ],

  faq: [
    {
      question: 'What is a Straight Bar Dip?',
      answer:
        'A Straight Bar Dip is a bodyweight pushing exercise performed above a single horizontal bar. The athlete lowers the chest towards the bar by bending the elbows and then presses back to a straight-arm support position.'
    },
    {
      question: 'What muscles do Straight Bar Dips work?',
      answer:
        'Straight Bar Dips primarily train the triceps, pectorals, and anterior deltoids. The serratus anterior, upper back, forearms, and core muscles help stabilize the body throughout the movement.'
    },
    {
      question: 'Are Straight Bar Dips harder than regular Dips?',
      answer:
        'They can be more technically demanding because the athlete must control the body around a single bar positioned in front of the torso. Difficulty depends on strength, mobility, and familiarity with the movement.'
    },
    {
      question: 'Do Straight Bar Dips help with Muscle Ups?',
      answer:
        'Yes. Straight Bar Dips strengthen the final pressing phase of the Muscle Up. They also help athletes become comfortable supporting and pressing their bodyweight above a horizontal bar.'
    },
    {
      question: 'How deep should I go during Straight Bar Dips?',
      answer:
        'Lower through a controlled range that allows comfortable shoulder movement. The chest may approach the bar, but forcing excessive depth is unnecessary and can increase shoulder stress.'
    },
    {
      question: 'What grip should I use for Straight Bar Dips?',
      answer:
        'Use an overhand grip with your hands approximately shoulder-width apart. Adjust the width slightly according to your wrist and shoulder comfort while keeping both hands secure on the bar.'
    },
    {
      question: 'How can I make Straight Bar Dips easier?',
      answer:
        'Practice stable straight-arm support holds above a low bar, use foot assistance when possible, or build pressing strength with regular Dips before attempting full unsupported repetitions.'
    },
  ],

  seo: {
    title:
      'Straight Bar Dip: Technique & Progression | Treethenics',

    description:
      'Learn Straight Bar Dips with correct technique, muscles worked, common mistakes and progressions to strengthen the pressing phase of the Muscle Up.',
  },

  imageUrl: '/images/exercises/straight-bar-dip.png',
};
