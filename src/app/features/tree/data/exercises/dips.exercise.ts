import { Exercise } from '../../../../shared/models/exercise.model';

export const DIPS: Exercise = {
  id: 'dips',
  name: 'Dips',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: true,
  category: 'push',

  targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],

    equipment: [
      'parallettes','rings'
    ],

  description:
'Dips are one of the foundations of calisthenics. They build strong pushing strength in your chest and triceps, giving you the strength you need to progress towards more advanced calisthenics exercises. Along with pull-ups and push-ups, dips are one of the basic exercises every beginner should learn. They can be performed on parallel bars or on a straight bar, with each variation preparing you for different skills and movements.',
  overview:
'Dips are one of the foundations of calisthenics. They build strong pushing strength in your chest and triceps, giving you the strength you need to progress towards more advanced calisthenics exercises. Along with pull-ups and push-ups, dips are one of the basic exercises every beginner should learn. They can be performed on parallel bars or on a straight bar, with each variation preparing you for different skills and movements.',
    howTo: [
    {
      title: 'Start by supporting yourself on the parallel bars',
      imageUrl: '/images/progressions/step-1.png',
      description:
'The first step is to be able to support your body on the parallel bars with your arms straight. Slightly protract your shoulder blades to create a strong and stable position, while keeping your shoulders protected throughout the hold.'    },
  {
      title: 'Start with negative dips',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin by slowly lowering yourself between the parallel bars in a controlled motion. Keep your elbows relatively close to your torso and continue lowering until your feet reach the ground. You should feel your chest working throughout the movement, although your triceps will also be heavily involved. In my experience, your elbow position and the width of your grip can influence whether the chest or triceps does more of the work.'    },
    {
      title: 'Achieve your first dip',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep practicing until you can perform your first full dip. Start with your arms fully extended, lower your body until your elbows reach roughly a 90-degree angle, then push yourself back up to the starting position. Maintain a strong and secure grip on the bars, as your grip plays an important role in keeping proper form throughout the movement.'    },
    {
      title: 'Build up to 15+ dips',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep training until you can perform around 15–20 clean dips. You can use methods such as EMOM training to gradually increase your total number of reps. Always prioritize proper technique, and pay close attention to your shoulder and elbow position throughout every rep.'    },
    ],

  commonMistakes: [
    {
      title: 'More is always better',
      description:
'It’s better to perform 10 dips with proper form than 30 with poor technique. Focus on the quality of each rep rather than simply trying to do more.'    },
    {
      title: 'Train dips every day',
      description:
'Dips are a demanding exercise that works several muscle groups at the same time. Training them too often without enough recovery can lead to excessive fatigue, making it harder to perform at your best and maintain proper form.'    },
    {
      title: 'Not going deep enough',
      description:
'A common mistake in dips is not lowering your body far enough to reach a 90-degree angle at the elbows. Pay attention to your range of motion and review your technique regularly. Recording yourself can be a great way to spot mistakes that may be difficult to notice while performing the exercise.'    },
  ],

  relatedExercises: [
    'impossible-dip','korean-dip'
  ],

  faq: [
    {
      question: 'How long does it take to get your first dip?',
      answer:
'It depends on the person and their starting point. For someone who is completely new to training, their first dip may be achievable within a few weeks with consistent and proper training. For others, especially those carrying extra body weight, it may take several months. Everyone progresses at a different pace, so focus on consistent improvement rather than a specific deadline.'    },
    {
      question: 'How many dips are considered good?',
      answer:
'Being able to perform 15 clean dips is a solid goal that most people can work towards with consistent training. Around 20 reps shows a strong level of pushing strength and endurance, especially for someone who trains regularly. Performing more than 30 clean dips is an advanced level, more commonly seen in people who specialize in calisthenics or bodyweight training.'    },
  ],

  seo: {
      title:
        'Dips: How to Do It, Muscles & Progressions | Treethenics',

      description:
        'Learn how to do the Dips with proper technique, muscles worked, common mistakes, equipment and progressions from easier to advanced variations.',
    },

  imageUrl: '/images/exercises/dips.png',
};
