import { Exercise } from '../../../../shared/models/exercise.model';

export const SQUAT: Exercise = {
  id: 'squat',
  name: 'Squat',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
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
    'abdominals'
  ],

  equipment: ['floor','added-weight'],

  description:
    'The Squat is a fundamental lower-body exercise where you bend at the hips and knees to lower your body before returning to standing. It develops basic leg strength, coordination, mobility, and control that transfers directly to many more advanced calisthenics leg exercises.',

  overview:
    'The bodyweight Squat is one of the main foundations for lower-body training. Stand with a comfortable foot position, keep your entire foot connected to the floor, and allow your hips and knees to bend together as you descend. Your knees can travel forward naturally, and your torso does not need to remain perfectly vertical. Focus on a stable foot, controlled knee movement, and as much depth as you can comfortably manage without losing balance or position.',

  howTo: [
    {
      title: 'Set your stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet around shoulder width apart or in another comfortable squat stance. Turn your toes slightly outward if needed and distribute your weight across the whole foot.'
    },
    {
      title: 'Descend with control',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your knees and hips together as you lower your body. Allow your knees to travel forward and outward naturally while keeping your feet firmly connected to the floor.'
    },
    {
      title: 'Reach your controlled depth',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Continue descending as far as your mobility and balance allow without your heels lifting or your position collapsing. Keep your trunk braced throughout the bottom position.'
    },
    {
      title: 'Drive back up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push through your feet and extend your knees and hips together. Maintain control of your knee position instead of allowing them to suddenly collapse inward.'
    },
    {
      title: 'Return to standing',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish in a balanced standing position with your hips and knees extended. Reset your stance and body tension before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the heels lift',
      description:
        'Keep your feet firmly connected to the floor throughout the movement. If your heels consistently rise near the bottom, reduce your depth while working on the mobility and balance required for a deeper squat.'
    },
    {
      title: 'Letting the knees collapse inward',
      description:
        'Some natural knee movement is normal, but avoid an uncontrolled inward collapse during the descent or ascent. Maintain a stable foot and control the direction of your knees throughout the repetition.'
    },
    {
      title: 'Forcing an upright torso',
      description:
        'Your torso angle depends on your proportions, stance, and squat depth. A controlled forward torso inclination is normal, so do not force yourself perfectly vertical if doing so disrupts your balance.'
    },
    {
      title: 'Forcing maximum depth',
      description:
        'A deeper Squat is useful only when you can control it. Do not force yourself into a bottom position that causes your heels to lift or makes you lose balance just to reach an arbitrary depth.'
    },
  ],

  relatedExercises: [
    'isometric-squat',
    'bulgarian-squat',
    'jump-squat'
  ],

  faq: [
    {
      question: 'What muscles does the Squat work?',
      answer:
        'The quadriceps and glutes are major contributors to extending the knees and hips as you stand. The adductors, hamstrings, calves, and trunk muscles also contribute to controlling the lower body and maintaining a stable position.'
    },
    {
      question: 'How deep should I Squat?',
      answer:
        'Squat as deeply as you can while maintaining balance, a stable foot, and controlled movement. Your available depth depends on factors such as ankle and hip mobility, body proportions, stance, and experience.'
    },
    {
      question: 'Can my knees go past my toes?',
      answer:
        'Yes. Forward knee travel is a normal part of squatting, particularly as squat depth increases. Rather than trying to keep your knees behind your toes, focus on keeping your feet stable and your knee movement controlled.'
    },
    {
      question: 'Should my back stay completely vertical?',
      answer:
        'No. Some forward torso inclination is normal during a Squat and varies between people because of differences in body proportions and stance. Keep your trunk controlled rather than trying to force a perfectly upright position.'
    },
    {
      question: 'How can I make bodyweight Squats harder?',
      answer:
        'You can progress towards deeper controlled Squats, pauses and isometric holds, explosive Jump Squats, or unilateral exercises such as Bulgarian Squats and eventually Pistol Squats. Choose the progression based on whether you want more control, power, or single-leg strength.'
    },
  ],

  seo: {
    title:
      'Bodyweight Squat: Proper Form & Muscles Worked | Treethenics',

    description:
      'Learn the bodyweight Squat with proper technique, muscles worked, squat depth, knee positioning, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/squat.png',
};
