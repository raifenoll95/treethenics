
import { Exercise } from '../../../../shared/models/exercise.model';

export const BEAR_CRAWL: Exercise = {
  id: 'bear-crawl',
  name: 'Bear Crawl',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'shoulders',
    'biceps',
    'legs'
  ],

  primaryMuscles: [
    'abdominals',
    'obliques',
    'front-deltoids',
    'serratus-anterior'
  ],

  secondaryMuscles: [
    'triceps',
    'quadriceps',
    'glutes',
    'upper-back'
  ],

  equipment: ['floor'],

  description:
    'The Bear Crawl is a beginner dynamic bodyweight exercise performed by moving forwards on the hands and feet while keeping the knees slightly elevated above the floor. It develops core stability, shoulder endurance, coordination, and full-body control through alternating contralateral movements.',

  overview:
    'Begin on your hands and knees with your hands positioned beneath your shoulders and your knees beneath your hips. Tuck your toes into the floor and lift your knees a few centimeters above the ground. Maintain a relatively flat back, a stable pelvis, and an engaged core. Move one hand forwards together with the opposite foot, then repeat with the other hand and foot. Take small, controlled steps while keeping your hips relatively low and minimizing side-to-side rotation. Continue crawling forwards without allowing your knees to touch the floor. Breathe naturally and maintain coordinated movements throughout the exercise. Reverse Bear Crawls can be performed by following the same principles while travelling backwards.',

  howTo: [
    {
      title: 'Start on your hands and knees',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Position yourself on all fours with your hands beneath your shoulders and your knees beneath your hips. Spread your fingers and establish a stable base.'
    },
    {
      title: 'Lift your knees',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tuck your toes and lift both knees a few centimeters above the floor. Engage your abdominal muscles and keep your back relatively flat.'
    },
    {
      title: 'Move opposite limbs forwards',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Advance your right hand and left foot together using a short, controlled step. Keep your hips stable and avoid excessive torso rotation.'
    },
    {
      title: 'Alternate the movement',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Advance your left hand and right foot. Maintain a consistent distance between your knees and the floor while transferring your bodyweight smoothly.'
    },
    {
      title: 'Continue crawling forwards',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Repeat the alternating pattern to travel forwards. Keep your movements controlled, your core engaged, and your knees suspended throughout the exercise.'
    },
  ],

  commonMistakes: [
    {
      title: 'Raising the hips too high',
      description:
        'Avoid lifting your hips into a high pike position. Keep your knees relatively close to the floor and maintain a stable crawling posture.'
    },
    {
      title: 'Allowing the lower back to sag',
      description:
        'Maintain abdominal engagement and avoid excessive lumbar extension. Keep your torso controlled as your limbs move.'
    },
    {
      title: 'Moving the same-side hand and foot together',
      description:
        'The standard Bear Crawl uses a contralateral movement pattern. Coordinate your right hand with your left foot and your left hand with your right foot.'
    },
    {
      title: 'Taking excessively large steps',
      description:
        'Long steps can make it difficult to maintain balance and pelvic stability. Use smaller movements until you can crawl smoothly without rotating excessively.'
    },
    {
      title: 'Allowing the knees to touch the floor',
      description:
        'Keep your knees slightly elevated throughout the crawling sequence. If you cannot maintain this position, shorten the set or reduce your movement speed.'
    },
    {
      title: 'Rotating the hips excessively',
      description:
        'Avoid shifting your pelvis dramatically from side to side. Maintain core tension and control your weight transfer between supporting limbs.'
    },
    {
      title: 'Rushing the movement',
      description:
        'Do not prioritize speed over technique. Move deliberately and maintain consistent coordination, shoulder stability, and body alignment.'
    },
  ],

  relatedExercises: [
    'plank',
    'side-plank',
    'hollow-body-hold',
    'push-up',
    'reverse-plank'
  ],

  faq: [
    {
      question: 'What is a Bear Crawl?',
      answer:
        'A Bear Crawl is a quadrupedal bodyweight movement performed on the hands and feet with the knees suspended above the floor. The athlete travels forwards by alternately moving opposite hands and feet.'
    },
    {
      question: 'What muscles do Bear Crawls work?',
      answer:
        'Bear Crawls challenge the abdominal muscles, obliques, shoulders, serratus anterior, and triceps. The quadriceps, glutes, and other stabilizing muscles also contribute to maintaining the crawling position.'
    },
    {
      question: 'Are Bear Crawls good for beginners?',
      answer:
        'Yes. Bear Crawls can be suitable for beginners when performed slowly over short distances. Beginners can first practice holding a stationary Bear Plank before introducing movement.'
    },
    {
      question: 'What is the difference between a Bear Crawl and a Bear Plank?',
      answer:
        'A Bear Plank is a static position performed on the hands and feet with the knees slightly elevated. A Bear Crawl adds coordinated limb movements to travel across the floor.'
    },
    {
      question: 'Should my knees touch the floor during Bear Crawls?',
      answer:
        'No. In the standard Bear Crawl, the knees remain slightly elevated throughout the movement. This increases the demand on the core, shoulders, and legs.'
    },
    {
      question: 'Should I move opposite hands and feet together?',
      answer:
        'Yes. The standard Bear Crawl uses contralateral coordination, meaning the right hand moves with the left foot and the left hand moves with the right foot.'
    },
    {
      question: 'How low should my hips be during Bear Crawls?',
      answer:
        'Keep your hips relatively low, with your knees hovering a few centimeters above the floor. Avoid raising your hips excessively or allowing your lower back to sag.'
    },
    {
      question: 'How can I make Bear Crawls harder?',
      answer:
        'Increase the crawling distance, reduce your movement speed to emphasize control, introduce backward crawling, or perform longer sets while maintaining consistent technique.'
    },
  ],

  seo: {
    title:
      'Bear Crawl: Technique & Muscles | Treethenics',

    description:
      'Learn the Bear Crawl with proper contralateral coordination, core engagement, shoulder stability, common mistakes and beginner progressions.',
  },

  imageUrl: '/images/exercises/bear-crawl.png',
};
