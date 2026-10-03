import { Exercise } from '../../../../shared/models/exercise.model';

export const HOLLOW_BODY_HOLD: Exercise = {
  id: 'hollow-body-hold',
  name: 'Hollow Body Hold',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'quadriceps',
    'serratus-anterior',
    'glutes'
  ],

  equipment: ['floor'],

  description:
    'The Hollow Body Hold is a fundamental gymnastics core position where the lower back stays pressed into the floor while the shoulders, arms, and straight legs remain elevated. It develops full-body tension and the ability to resist excessive extension through the lower back.',

  overview:
    'Lie on your back and begin by tilting your pelvis backwards until your lower back is firmly pressed into the floor. Lift your shoulder blades and legs while maintaining that contact, then extend your arms overhead to create a long, shallow curved body position. Keep your legs together, knees straight, and ribs controlled. The height of your legs should depend on your strength: lower them only as far as you can without allowing your lower back to arch away from the floor.',

  howTo: [
    {
      title: 'Lie on your back',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie face up with your legs together and your arms extended overhead. Prepare to create tension through your entire body before lifting from the floor.'
    },
    {
      title: 'Flatten your lower back',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tilt your pelvis backwards and contract your abdominals until your lower back presses firmly against the floor. Maintain this position throughout the entire hold.'
    },
    {
      title: 'Lift your shoulders',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Raise your head and shoulder blades slightly from the floor while keeping your ribs pulled down and your arms extended overhead.'
    },
    {
      title: 'Raise your legs',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Lift both straight legs from the floor and keep them together. Lower them only to the height where you can still maintain complete control of your lower back.'
    },
    {
      title: 'Hold the hollow position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the shallow curved body shape with straight arms and legs, active abdominals, and your lower back pressed into the floor. Continue breathing without losing tension.'
    },
  ],

  commonMistakes: [
    {
      title: 'Arching the lower back',
      description:
        'If your lower back separates from the floor, the progression is currently too difficult. Raise your legs or bend your knees until you can maintain the posterior pelvic tilt.'
    },
    {
      title: 'Lowering the legs too far',
      description:
        'Keeping your heels extremely close to the floor is not the goal if it causes your lumbar spine to arch. Choose the lowest leg position you can genuinely control.'
    },
    {
      title: 'Bending the knees',
      description:
        'The full Hollow Body Hold uses straight legs. If you need to bend your knees to maintain your lower-back position, use a Tuck Hollow Hold as a progression rather than sacrificing form.'
    },
    {
      title: 'Keeping the shoulders on the floor',
      description:
        'Lift your shoulder blades slightly and maintain an active upper-body position. Leaving the entire upper back relaxed on the floor reduces the characteristic hollow shape.'
    },
    {
      title: 'Holding your breath',
      description:
        'Maintain abdominal tension while continuing to breathe. Do not rely on holding your breath to keep the body rigid.'
    },
  ],

  relatedExercises: [
    'arch-body-hold',
    'plank',
    'hollow-body-rock'
  ],

  faq: [
    {
      question: 'What is a Hollow Body Hold?',
      answer:
        'The Hollow Body Hold is a static gymnastics position where you lie on your back with your shoulders and legs elevated while keeping your lower back firmly pressed against the floor. The body forms a shallow curved or hollow shape.'
    },
    {
      question: 'What muscles does the Hollow Body Hold work?',
      answer:
        'The abdominal muscles provide most of the trunk stabilization, while the obliques, hip flexors, quadriceps, serratus anterior, and other muscles contribute to maintaining the extended full-body position.'
    },
    {
      question: 'Should my lower back touch the floor?',
      answer:
        'Yes. Maintaining lower-back contact with the floor is one of the defining technical points of the Hollow Body Hold. If your back begins to arch, make the exercise easier by raising your legs, moving your arms forward, or bending your knees.'
    },
    {
      question: 'How low should my legs be?',
      answer:
        'As low as you can control without losing your lower-back position. Stronger athletes can hold their straight legs closer to the floor, while beginners should keep them higher or use a shorter-lever variation.'
    },
    {
      question: 'How can I progress to a full Hollow Body Hold?',
      answer:
        'Start with a Tuck Hollow Hold, then progressively extend one leg and eventually both legs. Keep your arms closer to your body at first, then move them overhead as your core control improves.'
    },
  ],

  seo: {
    title:
      'Hollow Body Hold: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Hollow Body Hold with proper lower-back positioning, full-body tension, progressions and common mistakes for building a strong gymnastics core.',
  },

  imageUrl: '/images/exercises/hollow-body-hold.png',
};
