import { Exercise } from '../../../../shared/models/exercise.model';

export const BROAD_JUMPS: Exercise = {
  id: 'broad-jumps',
  name: 'Broad Jumps',
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
    'Broad jumps are an explosive lower-body exercise where you jump forward as far as you can and land under control. Also known as standing long jumps, they train your ability to produce force quickly through your hips and legs while teaching you to absorb that force safely when you land. They are simple to learn, require no equipment, and are a great introduction to horizontal plyometrics.',

  overview:
    'Broad jumps are about power, not endurance. Start from a standing position, load your hips and knees, swing your arms, and drive aggressively into the ground to launch yourself forward. The jump is only half of the exercise: you should also be able to land quietly and under control without your knees collapsing or your balance carrying you forward. Keep your sets short enough that every jump stays explosive.',

  howTo: [
    {
      title: 'Load your jump',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand with your feet around shoulder-width apart. Swing your arms behind you while bending your knees and pushing your hips back into a quick athletic position. Keep your chest controlled and prepare to explode forward.'
    },
    {
      title: 'Drive forward',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Push hard through the ground and rapidly extend your hips, knees, and ankles. Swing your arms forward at the same time to help create momentum and project your body forward rather than simply jumping straight up.'
    },
    {
      title: 'Reach for distance',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As you travel through the air, bring your legs forward so your feet can land ahead of your body. Stay controlled instead of twisting or reaching one foot significantly further than the other.'
    },
    {
      title: 'Land softly',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Land on both feet and allow your ankles, knees, and hips to bend naturally to absorb the impact. Keep your knees tracking in the same general direction as your toes and avoid landing with completely stiff legs.'
    },
    {
      title: 'Own the landing',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish each jump in a balanced position before standing up or starting another rep. If you regularly stumble forward, fall backwards, or need another step to recover, reduce the distance and focus on controlling the landing first.'
    },
  ],

  commonMistakes: [
    {
      title: 'Jumping mostly upwards',
      description:
        'A broad jump is a horizontal power exercise. You still need enough height to move your legs underneath you, but your main goal is to project your body forward. Use a strong arm swing and drive your hips forward instead of turning the movement into a vertical jump.'
    },
    {
      title: 'Landing with stiff legs',
      description:
        'Do not hit the ground with your knees and hips locked. Allow them to bend as you land so your lower body can absorb the impact. A controlled landing should look athletic and feel much quieter than a rigid one.'
    },
    {
      title: 'Letting your knees collapse inward',
      description:
        'Keep your knees controlled as you absorb the landing instead of allowing them to collapse sharply towards each other. If you cannot maintain a stable landing, shorten the jump and rebuild control before chasing more distance.'
    },
    {
      title: 'Turning it into a conditioning exercise',
      description:
        'Broad jumps lose their purpose when every rep becomes slower and shorter because you are exhausted. Give yourself enough recovery to produce powerful jumps and stop the set when your distance or landing quality clearly starts to drop.'
    },
  ],

  relatedExercises: [
    'squat-jump',
    'box-jump',
    'jumping-lunge'
  ],

  faq: [
    {
      question: 'What do broad jumps train?',
      answer:
        'Broad jumps primarily train explosive lower-body power. Your glutes, quadriceps, and hamstrings help generate the jump, while your calves contribute as you leave the ground. Your core also helps control your body while you travel through the air and land.'
    },
    {
      question: 'Should I jump as far as possible every rep?',
      answer:
        'Not when you are first learning the exercise. Start with a distance you can land consistently without stumbling or losing control. Once your landing is solid, you can gradually put more effort into maximizing your jump distance.'
    },
    {
      question: 'How many broad jumps should I do?',
      answer:
        'Keep the reps relatively low when your goal is explosive power. Each jump should be fast and powerful, with enough recovery to maintain good distance and landing quality. Stop the set when your jumps noticeably lose power instead of forcing extra fatigued reps.'
    },
    {
      question: 'What is the difference between a broad jump and a squat jump?',
      answer:
        'Both are explosive leg exercises, but the direction is different. A squat jump focuses mainly on jumping vertically, while a broad jump is designed to project your body horizontally and cover distance. That makes the broad jump especially useful for developing forward explosive power.'
    },
  ],

  seo: {
    title:
      'Broad Jumps: Technique, Muscles & Common Mistakes | Treethenics',

    description:
      'Learn how to perform Broad Jumps with proper technique, powerful takeoffs, controlled landings and progressions for explosive lower-body power.',
  },

  imageUrl: '/images/exercises/broad-jumps.png',
};
