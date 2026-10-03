import { Exercise } from '../../../../shared/models/exercise.model';

export const LEG_RAISES: Exercise = {
  id: 'leg-raises',
  name: 'Leg Raises',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core'
  ],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'quadriceps',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'Leg Raises are a floor-based core exercise where you lift and lower both straight legs while keeping your torso stable. They challenge the abdominals to control the pelvis and lower back as the legs create an increasingly demanding lever away from the body.',

  overview:
    'Lie on your back with both legs together and extended. Brace your core and raise your straight legs towards the ceiling, then lower them slowly towards the floor without allowing your lower back to lose control. The exercise becomes considerably harder as the legs approach the floor because the lever acting on your pelvis increases. Only lower as far as you can maintain a stable trunk position, and shorten the range or bend your knees if necessary.',

  howTo: [
    {
      title: 'Lie on your back',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie face up with your legs together and extended. Place your arms beside your body or your hands underneath your pelvis if you need additional support.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your abdominals and establish control of your pelvis and lower back before moving your legs.'
    },
    {
      title: 'Raise your legs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keeping your knees straight and your legs together, raise both legs towards the ceiling with a smooth and controlled movement.'
    },
    {
      title: 'Begin the descent',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Slowly lower your straight legs while keeping your torso still. Resist the increasing tendency for your lower back to arch as your feet move closer to the floor.'
    },
    {
      title: 'Stop before losing control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower only as far as you can maintain control of your pelvis and lower back, then raise your legs again without using momentum.'
    },
  ],

  commonMistakes: [
    {
      title: 'Arching the lower back',
      description:
        'Do not continue lowering your legs once you can no longer control your lumbar position. Reduce the range of motion or bend your knees until your core is strong enough for the full movement.'
    },
    {
      title: 'Dropping the legs',
      description:
        'The lowering phase is an important part of the exercise. Avoid allowing gravity to pull your legs rapidly towards the floor and control the descent instead.'
    },
    {
      title: 'Forcing the heels to the floor',
      description:
        'Your heels do not need to touch the floor on every repetition. The correct bottom position is determined by how low you can take your legs without losing trunk and pelvic control.'
    },
    {
      title: 'Bending the knees unintentionally',
      description:
        'Keep your knees extended during the full Leg Raise. If you need to bend them substantially, deliberately use a bent-knee variation as a progression instead.'
    },
    {
      title: 'Using momentum',
      description:
        'Avoid swinging the legs or bouncing out of the bottom position. Raise and lower them through muscular control rather than using momentum to begin each repetition.'
    },
  ],

  relatedExercises: [
    'hollow-body-hold',
    'reverse-crunch',
    'hanging-leg-raise'
  ],

  faq: [
    {
      question: 'What are Leg Raises?',
      answer:
        'Leg Raises are a core exercise performed lying on your back. Both straight legs are raised and lowered together while the trunk and pelvis remain controlled.'
    },
    {
      question: 'What muscles do Leg Raises work?',
      answer:
        'The hip flexors actively raise and lower the legs, while the abdominals play an important role in controlling the pelvis and resisting excessive extension of the lower back. The quadriceps help keep the knees straight throughout the movement.'
    },
    {
      question: 'Why do I feel Leg Raises in my hip flexors?',
      answer:
        'This is normal because raising the thighs towards the torso requires hip flexion. The abdominals are especially important for controlling the pelvis and preventing the lower back from excessively arching as the legs are lowered.'
    },
    {
      question: 'Should my feet touch the floor?',
      answer:
        'Not necessarily. Lower your legs only as far as you can while maintaining control of your pelvis and lower back. As your core strength improves, you may gradually be able to use a larger range of motion.'
    },
    {
      question: 'How can I make Leg Raises easier?',
      answer:
        'Bend your knees to shorten the lever or reduce how far you lower your legs. Gradually straighten the knees and increase the lowering range as your control improves.'
    },
  ],

  seo: {
    title:
      'Leg Raises: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn how to perform Leg Raises with proper core control, straight-leg technique, progressions and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/leg-raises.png',
};
