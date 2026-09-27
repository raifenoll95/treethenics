import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT_PULL_UP: Exercise = {
  id: 'l-sit-pull-up',
  name: 'L-Sit Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps', 'core'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'abdominals'
  ],

  secondaryMuscles: [
    'upper-back',
    'forearms',
    'rear-deltoids',
    'quadriceps'
  ],

  equipment: ['pull-up-bar', 'rings'],

  description:
    'The L-Sit Pull Up combines a strict Pull Up with a hanging L-sit. You keep your legs straight and extended in front of you while pulling from straight arms until your chin clears the bar, creating a demanding combination of vertical pulling strength, core compression, and body control.',

  overview:
    'The L-Sit Pull Up is more than a Pull Up with your legs raised. The L position should remain active throughout the entire repetition, including the descent. Build the two components separately first: a clean strict Pull Up and a controlled hanging L-sit. Then combine them with tucked or single-leg variations before progressing to both legs fully extended. If your legs begin to drop or you need to swing to complete the pull, regress the L position rather than sacrificing the movement.',

  howTo: [
    {
      title: 'Build the two components',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop clean strict Pull Ups and a controlled hanging L-sit separately. You should be comfortable pulling from straight arms and holding your legs in front of you without relying on momentum.'
    },
    {
      title: 'Set the L-sit',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Hang from the bar with straight arms, then raise your legs until they are approximately horizontal. Keep your knees extended, legs together, and trunk controlled before beginning the pull.'
    },
    {
      title: 'Pull without dropping the legs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Drive your elbows down and pull your body towards the bar while maintaining the same L position. Avoid swinging your legs downward to create momentum.'
    },
    {
      title: 'Clear the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until your chin clears the bar while your legs remain straight and elevated. Keep the movement controlled instead of reaching your chin forward to finish the repetition.'
    },
    {
      title: 'Lower while holding the L',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Extend your elbows under control until you return to the bottom position. Keep your legs elevated during the descent and finish with straight arms before starting the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the legs drop during the pull',
      description:
        'The L position should remain throughout the repetition. If your legs progressively fall below horizontal, use a tucked or single-leg variation until you have enough compression strength to maintain the full position.'
    },
    {
      title: 'Using the legs to create momentum',
      description:
        'Avoid dropping and swinging your legs as you begin the pull. Establish the L-sit first and keep your lower body controlled so the repetition remains a strict vertical pull.'
    },
    {
      title: 'Bending the knees',
      description:
        'Bent knees shorten the lever and turn the exercise into an easier progression. That is useful while learning, but for the full L-Sit Pull Up keep your knees extended throughout the repetition.'
    },
    {
      title: 'Losing the L during the descent',
      description:
        'Do not treat the L-sit as something you only need on the way up. Control the eccentric back to straight arms while maintaining the same leg position instead of dropping your feet immediately after clearing the bar.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'l-sit',
    'l-sit-muscle-up'
  ],

  faq: [
    {
      question: 'What is an L-Sit Pull Up?',
      answer:
        'An L-Sit Pull Up is a strict Pull Up performed while holding your straight legs horizontally in front of your body. The upper body performs a vertical pull while the core and hip flexors maintain the L position.'
    },
    {
      question: 'What muscles do L-Sit Pull Ups work?',
      answer:
        'The lats, biceps, and upper back produce most of the pulling movement, while the abdominals help stabilize the pelvis and trunk. The hip flexors actively maintain the elevated leg position, the quadriceps keep the knees extended, and the forearms maintain your grip.'
    },
    {
      question: 'Why do my legs drop during L-Sit Pull Ups?',
      answer:
        'Your L-sit strength or compression endurance may be limiting the exercise before your pulling strength does. Instead of accepting progressively lower legs, use tucked or single-leg L-Sit Pull Ups and train the hanging L-sit separately.'
    },
    {
      question: 'Should I learn the L-Sit or Pull Up first?',
      answer:
        'Learn both components separately before combining them. A clean strict Pull Up gives you the vertical pulling strength, while the L-Sit develops the compression and body control needed to keep your legs elevated throughout the repetition.'
    },
  ],

  seo: {
    title:
      'L-Sit Pull Up: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the L-Sit Pull Up with strict technique, muscles worked, progressions and common mistakes for combining pulling strength with L-sit control.',
  },

  imageUrl: '/images/exercises/l-sit-pull-up.png',
};
