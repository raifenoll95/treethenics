import { Exercise } from '../../../../shared/models/exercise.model';

export const COMANDO_PULL_UP: Exercise = {
  id: 'commando-pull-up',
  name: 'Commando Pull Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'upper-back'
  ],

  secondaryMuscles: [
    'forearms',
    'rear-deltoids',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The commando pull up is a pull up variation performed sideways underneath the bar with one hand placed in front of the other. Instead of pulling straight up behind the bar, you bring your head to one side of it and alternate sides between reps. The unusual grip challenges your back, biceps, forearms, and core while adding a new coordination and stability challenge to the regular pull up.',

  overview:
    'The commando pull up is a great variation once regular pull ups feel comfortable. Turn your body so the bar runs in the same direction as your body, then grip it with one hand in front of the other. From a controlled hang, pull yourself up beside the bar and alternate which side your head passes on each rep. Keep your core tight to control unwanted swinging and remember to switch which hand is in front between sets so you train both grip positions.',

  howTo: [
    {
      title: 'Set your commando grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand sideways underneath the pull up bar so it runs from front to back above you. Grab it with your hands close together and one hand positioned in front of the other. Find a grip that feels secure and comfortable on your wrists.'
    },
    {
      title: 'Start from a controlled hang',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Extend your arms and brace your abs and glutes before pulling. Keep your body controlled underneath the bar instead of allowing your legs and hips to swing freely.'
    },
    {
      title: 'Pull to one side',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Drive your elbows down and pull yourself upwards while moving your head to one side of the bar. Bring your upper body close to your hands instead of simply stretching your chin forward to clear the bar.'
    },
    {
      title: 'Lower and alternate sides',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Lower yourself under control until your arms are extended again. On the next rep, pull your head past the opposite side of the bar. Continue alternating sides while keeping the movement smooth and controlled.'
    },
    {
      title: 'Switch your hand position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'On your next set, switch which hand is positioned in front. Continue alternating the side of the bar on each rep so both pulling directions and both hand positions receive practice.'
    },
  ],

  commonMistakes: [
    {
      title: 'Always pulling to the same side',
      description:
        'Do not perform every rep with your head passing the same side of the bar. Alternate sides so you practice both directions and avoid turning the movement into a consistently one-sided pull.'
    },
    {
      title: 'Never switching the front hand',
      description:
        'Alternating your head from side to side does not change which hand is positioned in front. Switch your hand position between sets so you do not always train with the same staggered grip.'
    },
    {
      title: 'Swinging around the bar',
      description:
        'The staggered grip and sideways position can make your body want to rotate or swing. Brace your core and keep the movement controlled rather than using your legs to generate momentum for the pull.'
    },
    {
      title: 'Cutting the bottom of the rep short',
      description:
        'Do not immediately start the next rep while your elbows are still heavily bent. Lower yourself under control and return to straight arms before beginning the next pull.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'chin-up',
    'archer-pull-up'
  ],

  faq: [
    {
      question: 'What is a commando pull up?',
      answer:
        'A commando pull up is a pull up variation where you position yourself sideways underneath a straight bar and grip it with one hand in front of the other. You pull your head past one side of the bar, lower yourself, and then repeat towards the opposite side.'
    },
    {
      question: 'What muscles do commando pull ups work?',
      answer:
        'Commando pull ups mainly train the lats, upper back, and biceps. Your forearms work hard to maintain the close staggered grip, while your abs and obliques help control the rotation and side-to-side movement created by the unusual body position.'
    },
    {
      question: 'Should I alternate sides on every rep?',
      answer:
        'Yes, alternating the side of the bar on each rep is a simple way to keep the movement balanced. You should also switch which hand is in front between sets because alternating your head position does not change your grip.'
    },
    {
      question: 'Are commando pull ups harder than regular pull ups?',
      answer:
        'They are not necessarily a direct harder progression in the same way as an archer pull up. The main challenge comes from the close staggered grip, different pulling path, grip demand, and the extra control needed to manage rotation. Build clean regular pull ups first, then use commando pull ups as a more challenging variation.'
    },
  ],

  seo: {
    title:
      'Commando Pull Up: Technique, Muscles & Form | Treethenics',

    description:
      'Learn how to do Commando Pull Ups with proper grip, alternating technique, muscles worked and the most common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/commando-pull-up.png',
};
