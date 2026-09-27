import { Exercise } from '../../../../shared/models/exercise.model';

export const JUMP_SQUAT: Exercise = {
  id: 'jump-squat',
  name: 'Jump Squat',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: ['legs', 'glutes'],

  primaryMuscles: [
    'quadriceps',
    'glutes',
    'hamstrings'
  ],

  secondaryMuscles: [
    'calves',
    'abdominals'
  ],

  equipment: ['floor'],

  description:
    'The Jump Squat is an explosive lower-body exercise where you descend into a squat and rapidly extend your hips, knees, and ankles to jump vertically. It develops lower-body power while also teaching you to absorb force and control your landing before the next repetition.',

  overview:
    'The Jump Squat takes the basic squat pattern and turns it into an explosive movement. Descend under control, then drive through the floor and accelerate upward into a vertical jump. Land softly with your knees and hips bending to absorb the impact. Focus on powerful takeoffs and consistent landings rather than performing as many repetitions as possible, since jump quality usually decreases as fatigue builds.',

  howTo: [
    {
      title: 'Set your squat stance',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet around shoulder width apart and keep your whole foot connected to the floor. Brace your trunk and prepare to descend as you would for a regular Squat.'
    },
    {
      title: 'Load the jump',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your hips and knees into a controlled squat. Keep your knees tracking in the same general direction as your toes and use a depth that allows you to reverse the movement powerfully.'
    },
    {
      title: 'Jump explosively',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Drive forcefully through the floor and rapidly extend your hips, knees, and ankles. Use your arms naturally if desired and focus on producing a powerful vertical takeoff.'
    },
    {
      title: 'Land softly',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Land on both feet and immediately allow your ankles, knees, and hips to bend to absorb the impact. Keep your knees controlled instead of allowing them to collapse inward.'
    },
    {
      title: 'Reset and repeat',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Regain control before the next jump. Keep each repetition explosive and stop the set when your jump height, landing control, or overall technique begins to noticeably deteriorate.'
    },
  ],

  commonMistakes: [
    {
      title: 'Landing with stiff legs',
      description:
        'Avoid landing with your knees nearly straight. Bend your ankles, knees, and hips as you contact the floor so your lower body can absorb the landing instead of hitting the ground rigidly.'
    },
    {
      title: 'Letting your knees collapse inward',
      description:
        'Keep your knees tracking in the same general direction as your toes during both takeoff and landing. If you cannot control your knee position when landing, reduce the jump intensity and rebuild your landing mechanics.'
    },
    {
      title: 'Turning every set into conditioning',
      description:
        'Fast, high-repetition sets can quickly reduce jump height and landing quality. If your goal is explosive power, prioritize strong individual jumps and adequate recovery rather than continuing after your explosiveness disappears.'
    },
    {
      title: 'Skipping the landing before the next jump',
      description:
        'Do not rush immediately into another repetition if your feet, knees, or balance are out of position. Learn to own each landing before progressing to faster consecutive jumps.'
    },
  ],

  relatedExercises: [
    'squat',
    'broad-jumps',
    'box-jump'
  ],

  faq: [
    {
      question: 'What muscles do Jump Squats work?',
      answer:
        'Jump Squats train the quadriceps, glutes, and hamstrings as you rapidly extend the hips and knees. The calves contribute to the final part of the takeoff, while your trunk helps stabilize your body during the jump and landing.'
    },
    {
      question: 'Are Jump Squats good for explosive power?',
      answer:
        'Yes. Jump Squats are a ballistic lower-body exercise that trains you to produce force quickly. They are commonly used in power and athletic training because the movement combines rapid lower-body extension with an actual takeoff from the ground.'
    },
    {
      question: 'Should I jump as high as possible on every repetition?',
      answer:
        'If you are using Jump Squats to develop power, each repetition should be intentionally explosive. However, height should not come at the expense of a controlled landing. Stop or rest when fatigue causes a clear loss of jump or landing quality.'
    },
    {
      question: 'What is the difference between a Jump Squat and a Broad Jump?',
      answer:
        'A Jump Squat primarily emphasizes vertical propulsion, while a Broad Jump emphasizes horizontal distance. Both develop explosive lower-body power, but the direction of force and the landing demands are different.'
    },
  ],

  seo: {
    title:
      'Jump Squat: Technique, Muscles & Explosive Power | Treethenics',

    description:
      'Learn the Jump Squat with proper takeoff and landing technique, muscles worked, common mistakes and progressions for explosive leg power.',
  },

  imageUrl: '/images/exercises/jump-squat.png',
};
