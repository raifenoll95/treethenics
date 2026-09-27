import { Exercise } from '../../../../shared/models/exercise.model';

export const PUSH_UP: Exercise = {
  id: 'push-up',
  name: 'Push Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: true,
  category: 'push',

  targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

    equipment: ['floor', 'rings'],

  description:
    'Push ups are another iconic bodyweight exercise and a key movement in calisthenics, although they are widely used across many different sports and training styles. With many variations to choose from, push ups are an excellent way to develop strong pushing strength in your chest, shoulders, and triceps. Building up a solid number of clean push ups will give you a strong foundation and prepare your body for more advanced calisthenics exercises and skills in the future.',

  overview:
    'Push ups are another iconic bodyweight exercise and a key movement in calisthenics, although they are widely used across many different sports and training styles. With many variations to choose from, push ups are an excellent way to develop strong pushing strength in your chest, shoulders, and triceps. Building up a solid number of clean push ups will give you a strong foundation and prepare your body for more advanced calisthenics exercises and skills in the future.',

    howTo: [
    {
      title: 'Start with knee push ups',
      imageUrl: '/images/progressions/push-up/1.png',
      description:
        'If regular push-ups are too difficult at first, start by keeping your knees on the ground. Place your hands around shoulder-width apart and lower your body until your chest touches the floor, then push yourself back up while maintaining the same form. Pay attention to your elbows throughout the movement. There’s no need to flare them out to the sides; keep them relatively close to your torso for a more controlled and stable movement.'    },
    {
      title: 'Hold the bottom position for a few seconds',
      imageUrl: '/images/progressions/push-up/2.png',
      description:
        'Another good way to start is by holding the bottom position of the push-up for a few seconds, with your chest close to the floor. Pay attention to the position of your elbows and make sure your body stays properly aligned throughout the hold.'    },
    {
      title: 'Achieve your first push up',
      imageUrl: '/images/progressions/push-up/3.png',
      description:
        'Keep practicing and building your strength until you can perform your first full push-up. Use easier variations such as knee push-ups, push-up holds, and other beginner-friendly progressions to gradually develop the strength and control you need for a full rep.'    },
    {
      title: 'Build up to 10+ push ups',
      imageUrl: '/images/progressions/push-up/4.png',
      description:
        'Once you can perform your first push up, keep training until you can complete 10 or more reps. Endurance plays an important role here: the more reps you can perform, the more you’ll develop your pushing strength and overall capacity.'    },
    ],

  commonMistakes: [
    {
      title: 'More is always better',
      description:
'It’s better to perform 5 push ups with proper form than 15 with poor technique. Focus on the quality of each rep rather than simply trying to do more.'    },
    {
      title: 'Train push ups every day',
      description:
'Push ups are a demanding exercise that works several muscle groups at the same time. Training them too often without enough recovery can lead to excessive fatigue, making it harder to perform at your best and maintain proper form.'    },
    {
      title: 'Dont Get your chin above the bar',
      description:
'A full pull-up starts with your arms fully extended and finishes when your chin passes above the bar. Make sure you complete the full range of motion on every rep.'    },
  ],

  relatedExercises: [
    'diamond-push-up','decline-push-up','sphinx-push-up'
  ],

  faq: [
    {
      question: 'How long does it take to get your first push up?',
      answer:
'It depends on the person and their starting point. For someone who is completely new to training, their first push up may be achievable within a few weeks with consistent and proper training. For others, especially those carrying extra body weight, it may take several months. Everyone progresses at a different pace, so focus on consistent improvement rather than a specific deadline.'    },
    {
      question: 'How many push ups are considered good?',
      answer:
'Being able to perform 10 clean push ups is a solid goal that most people can work towards with consistent training. Around 20 reps shows a strong level of pushing strength and endurance, especially for someone who trains regularly. Performing more than 40 clean push ups is an advanced level, more commonly seen in people who specialize in calisthenics or bodyweight training.'    },
  ],

  seo: {
      title:
        'Push Up: How to Do It, Muscles & Progressions | Treethenics',

      description:
        'Learn how to do the Push Up with proper technique, muscles worked, common mistakes, equipment and progressions from easier to advanced variations.',
    },

  imageUrl: '/images/exercises/push-ups.png',
};
