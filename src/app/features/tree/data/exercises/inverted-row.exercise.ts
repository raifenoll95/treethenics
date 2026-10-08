import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_ROW: Exercise = {
  id: 'inverted-row',
  name: 'Inverted L Sit Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'back',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'abdominals',
    'obliques',
    'forearms',
    'quadriceps'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Inverted L Sit Pull Up is an advanced pulling variation that combines a horizontal body position beneath a bar with a straight-leg L shape. It challenges the back, arms, and core to maintain a stable position while performing controlled pulling repetitions.',

  overview:
    'Begin beneath a secure horizontal bar and establish an inverted L-shaped position with your torso approximately horizontal and your legs extended at roughly 90 degrees to it. Maintain abdominal tension as you bend your elbows and pull your upper body towards the bar. Keep your hips and legs controlled rather than allowing them to swing or change position. Slowly extend your arms to return to the starting position. Build a strong foundation with strict Pull Ups, L Sit holds, and controlled horizontal pulling before attempting the full variation.',

  howTo: [
    {
      title: 'Establish your grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a secure horizontal bar with your hands approximately shoulder-width apart. Keep your shoulders active and prepare to support your bodyweight.'
    },
    {
      title: 'Create the inverted L',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Position your torso approximately horizontal beneath the bar and extend your legs to form a controlled L shape. Brace your core and keep your knees straight.'
    },
    {
      title: 'Initiate the pull',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and pull your upper body towards the bar while maintaining the L position. Avoid kicking or swinging your legs to create momentum.'
    },
    {
      title: 'Reach the top position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your upper torso approaches the bar. Keep your shoulders controlled and maintain the angle between your torso and legs.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Gradually extend your elbows and return to the starting position without dropping your hips or losing the L-shaped body position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Losing the L position',
      description:
        'Allowing the legs to drop or the hip angle to change removes the defining shape of the exercise. Use an easier variation if you cannot maintain the position.'
    },
    {
      title: 'Swinging the legs',
      description:
        'Avoid generating momentum by kicking your legs during the pulling phase. Keep the movement controlled through the back and arms.'
    },
    {
      title: 'Letting the hips collapse',
      description:
        'Maintain abdominal tension throughout the repetition. Do not allow your pelvis to drop or rotate uncontrollably as you approach the bar.'
    },
    {
      title: 'Shortening the pulling range',
      description:
        'Avoid performing only small elbow movements. Use the largest controlled range available while preserving the intended body position.'
    },
    {
      title: 'Changing the body angle to finish',
      description:
        'Do not repeatedly rotate your torso or swing your legs to complete the pull. Keep the inverted L shape consistent during both the upward and downward phases.'
    },
  ],

  relatedExercises: [
    'l-sit-pull-up',
    'australian-pull-up',
    'front-lever-pull-up'
  ],

  faq: [
    {
      question: 'What is an Inverted L Sit Pull Up?',
      answer:
        'It is a pulling exercise performed with the torso approximately horizontal beneath a bar and the legs extended in an L shape. The athlete pulls the upper body towards the bar while maintaining the position.'
    },
    {
      question: 'What muscles does the Inverted L Sit Pull Up work?',
      answer:
        'The lats, upper back, and biceps provide the main pulling force. The abdominals and obliques stabilize the torso, while the hip flexors help maintain the raised-leg position.'
    },
    {
      question: 'How is it different from a regular L Sit Pull Up?',
      answer:
        'A regular L Sit Pull Up is a vertical pull performed with the legs raised in front of the body. The Inverted L Sit Pull Up uses a more horizontal torso position, changing the pulling angle and stabilization demands.'
    },
    {
      question: 'Do I need a Front Lever first?',
      answer:
        'Not necessarily, but Front Lever progressions can help develop the horizontal pulling strength and body control required. Strict Pull Ups and L Sit work are also useful foundations.'
    },
    {
      question: 'How can I make this exercise easier?',
      answer:
        'Begin with supported horizontal rows and bent-knee variations. Gradually reduce assistance and extend your legs while maintaining a stable torso and controlled pulling motion.'
    },
  ],

  seo: {
    title:
      'Inverted L Sit Pull Up: Technique | Treethenics',

    description:
      'Learn the Inverted L Sit Pull Up, an advanced horizontal pulling variation combining back strength, core stability and L-shaped body control.',
  },

  imageUrl: '/images/exercises/inverted-row.png',
};

