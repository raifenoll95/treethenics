import { Exercise } from '../../../../shared/models/exercise.model';

export const PULL_UP: Exercise = {
  id: 'pull-up',
  name: 'Pull Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

  secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

  equipment: [
      'pull-up-bar', 'bands'
  ],

  description:
    'The pull-up is one of the foundations of calisthenics. Building up a solid number of reps is important before moving on to more advanced pulling exercises. Pull-ups will help you build a strong base, developing your back, core, and overall pulling strength. With the right training and consistent practice, anyone can achieve their first pull-up, regardless of age.',

  overview:
    'The pull-up is one of the foundations of calisthenics. Building up a solid number of reps is important before moving on to more advanced pulling exercises. Pull-ups will help you build a strong base, developing your back, core, and overall pulling strength. With the right training and consistent practice, anyone can achieve their first pull-up, regardless of age.',

    howTo: [
    {
      title: 'Start by hanging from the bar',
      imageUrl: '/images/progressions/pull-up/1.png',
      description:
        'The first step is to be able to hang from the bar for several seconds. This will help your body get used to supporting your weight and becoming comfortable in this position.'    },
    {
      title: 'Start with resistance bands',
      imageUrl: '/images/progressions/pull-up/2.png',
      description:
        'At first, you can use resistance bands to help you perform your first pull-up. This will allow you to get used to the movement and understand how the exercise works.'    },
    {
      title: 'Try half reps',
      imageUrl: '/images/progressions/pull-up/3.png',
      description:
        'At first, it’s normal if you can’t perform a full pull-up starting with your arms fully extended. If that’s the case, you can begin with half reps. Start with your arms slightly bent, or from whatever position feels comfortable for you, and gradually work towards performing a full pull-up.'    },
    {
      title: 'Perform your first pull up',
      imageUrl: '/images/progressions/pull-up/4.png',
      description:
        'Once you can perform several partial reps, it’s time to work on a full pull-up with proper form. Start with your arms fully extended, pull your body up until your chin is above the bar, then lower yourself back down in a controlled motion.'    },

    {
      title: 'Build up to 10+ pull ups',
      imageUrl: '/images/progressions/pull-up/5.png',
      description:
        'Once you can perform your first pull-up, keep training until you can complete 10 or more reps. Endurance plays an important role here: the more reps you can perform, the more you’ll develop your pulling strength and overall capacity.'    },
    ],

  commonMistakes: [
    {
      title: 'More is always better',
      description:
'It’s better to perform 5 pull-ups with proper form than 15 with poor technique. Focus on the quality of each rep rather than simply trying to do more.'    },
    {
      title: 'Train pull ups every day',
      description:
'Pull-ups are a demanding exercise that works several muscle groups at the same time. Training them too often without enough recovery can lead to excessive fatigue, making it harder to perform at your best and maintain proper form.'    },
    {
      title: 'Dont Get your chin above the bar',
      description:
'A full pull-up starts with your arms fully extended and finishes when your chin passes above the bar. Make sure you complete the full range of motion on every rep.'    },
  ],

  relatedExercises: [
    'archer-pull-up','comando-pull-up','l-sit-pull-up'
  ],

  faq: [
    {
      question: 'How long does it take to get your first pull up?',
      answer:
'It depends on the person and their starting point. For someone who is completely new to training, their first pull-up may be achievable within a few weeks with consistent and proper training. For others, especially those carrying extra body weight, it may take several months. Everyone progresses at a different pace, so focus on consistent improvement rather than a specific deadline.'    },
    {
      question: 'How many pull ups are considered good?',
      answer:
'Being able to perform 10 clean pull-ups is a solid goal that most people can work towards with consistent training. Around 15 reps shows a strong level of pulling strength and endurance, especially for someone who trains regularly. Performing more than 20 clean pull-ups is an advanced level, more commonly seen in people who specialize in calisthenics or bodyweight training.'    },
  ],

  seo: {
      title:
        'Pull Up: How to Do It, Muscles & Progressions | Treethenics',

      description:
        'Learn how to do the Pull Up with proper technique, muscles worked, common mistakes, equipment and progressions from easier to advanced variations.',
    },

  imageUrl: '/images/exercises/pull-up.png',
};
