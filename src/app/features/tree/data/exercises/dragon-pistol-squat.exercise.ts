import { Exercise } from '../../../../shared/models/exercise.model';

export const DRAGON_PISTOL_SQUAT: Exercise = {
  id: 'dragon-pistol-squat',
  name: 'Dragon Pistol Squat',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 5,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'glutes'],

  primaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  secondaryMuscles: [
    'hamstrings',
    'calves',
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The dragon pistol squat is an advanced single-leg squat where the free leg travels behind and around the working leg as you descend into a deep squat. It combines the strength of a pistol squat with significantly greater demands on hip mobility, balance, coordination, and active control of the free leg.',

  overview:
    'The dragon pistol squat is best learned after you already have a controlled pistol squat. Balance on one leg and begin squatting while sweeping the free leg behind and around your supporting leg. As you approach the bottom, continue guiding the free leg around until it extends in front of you without touching the floor. The challenge is not simply reaching the bottom: you need enough strength and mobility to control the entire path and reverse it back to standing.',

  howTo: [
    {
      title: 'Build a strong pistol squat',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'First develop a deep and controlled pistol squat on each leg. You should be comfortable balancing on one foot, keeping the working foot planted, and standing back up without using momentum.'
    },
    {
      title: 'Learn the leg path',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Balance on one leg and practice moving the free leg behind and around your supporting leg. Use a stable support if necessary while you learn the unusual hip rotation and coordination without worrying about balance.'
    },
    {
      title: 'Practice an assisted dragon squat',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Hold onto a stable support and descend on one leg while sweeping the free leg behind and around you. Keep that leg as light as possible and gradually reduce how much assistance you use.'
    },
    {
      title: 'Keep the free leg off the floor',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Perform the movement without support and keep the free foot from touching the ground as it travels around the working leg. Stay balanced over your supporting foot and control the deepest part of the squat.'
    },
    {
      title: 'Complete the full dragon pistol',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Descend smoothly until you reach the full bottom position, then drive through the working leg and reverse the movement back to standing. Keep the free leg controlled throughout the entire repetition rather than using it to push against the floor.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying it before mastering the pistol squat',
      description:
        'The dragon variation adds mobility and coordination on top of an already difficult single-leg squat. If basic pistol squats are still inconsistent, build that strength and balance first instead of compensating through the dragon movement.'
    },
    {
      title: 'Letting the free foot touch the floor',
      description:
        'The free leg should travel around the working leg without becoming a second point of support. If it repeatedly touches the floor, use assistance or practice from an elevated surface while developing the mobility needed to clear the ground.'
    },
    {
      title: 'Forcing the leg around the hip',
      description:
        'Do not aggressively twist your free leg into position just to complete the shape. The dragon squat requires significant active hip mobility. Develop the leg path gradually and only use a range you can control comfortably.'
    },
    {
      title: 'Losing control of the working knee',
      description:
        'The unusual rotational position can make the supporting leg harder to control. Keep your foot planted and maintain control of your knee as you descend and stand back up instead of allowing it to suddenly collapse inward.'
    },
  ],

  relatedExercises: [
    'pistol-squat',
    'shrimp-squat',
    'cossack-squat'
  ],

  faq: [
    {
      question: 'What is a dragon pistol squat?',
      answer:
        'A dragon pistol squat is an advanced pistol squat variation where the free leg passes behind and around the supporting leg as you descend. The free foot stays off the floor, making the exercise a combination of single-leg strength, mobility, balance, and coordination.'
    },
    {
      question: 'Is the dragon pistol squat harder than a regular pistol squat?',
      answer:
        'For most people, yes. Both require deep single-leg strength, but the dragon pistol adds a much more demanding path for the free leg and requires additional hip mobility and balance. A controlled pistol squat is therefore a useful foundation before training the dragon variation.'
    },
    {
      question: 'What mobility do I need for a dragon pistol squat?',
      answer:
        'You need enough ankle mobility to reach a deep single-leg squat and substantial hip mobility to move the free leg behind and around the supporting leg. You also need active mobility: being flexible enough to reach the position is not sufficient if you cannot keep the free leg lifted and control it.'
    },
    {
      question: 'How can I progress towards a dragon pistol squat?',
      answer:
        'Build strong pistol squats first, then practice the dragon leg path with assistance. Elevated dragon pistols are especially useful because the extra height gives the free leg more room to travel below your supporting foot. From there, progress to assisted reps and finally full repetitions on the floor.'
    },
  ],

  seo: {
    title:
      'Dragon Pistol Squat: Technique & Progressions | Treethenics',

    description:
      'Learn the Dragon Pistol Squat with proper technique, mobility drills, common mistakes and progressions from pistol squats to full dragon reps.',
  },

  imageUrl: '/images/exercises/dragon-pistol-squat.png',
};
