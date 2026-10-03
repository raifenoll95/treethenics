import { Exercise } from '../../../../shared/models/exercise.model';

export const MOUNTAIN_CLIMBERS: Exercise = {
  id: 'mountain-climbers',
  name: 'Mountain Climbers',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: [
    'core',
    'legs'
  ],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'quadriceps',
    'glutes',
    'front-deltoids',
    'triceps'
  ],

  equipment: ['floor'],

  description:
    'Mountain Climbers are a dynamic full-body exercise performed from a high plank while alternately driving each knee towards the chest. They combine core stabilization with rapid hip and leg movement, making them useful for developing coordination, muscular endurance, and cardiovascular conditioning.',

  overview:
    'Start in a strong high plank with your hands underneath your shoulders and your body forming a straight line from your shoulders to your heels. Bring one knee towards your chest, then switch legs by extending it back as the opposite knee moves forward. Keep your hands firmly planted and your torso as stable as possible while your legs alternate underneath you. Begin slowly to master the plank position, then increase the pace without allowing your hips or lower back to lose control.',

  howTo: [
    {
      title: 'Start in a high plank',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands on the floor around shoulder width apart and extend both legs behind you. Keep your arms straight and establish a strong plank position.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your abdominals and keep your hips controlled so your torso remains stable as your legs begin to move.'
    },
    {
      title: 'Drive one knee forward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bring one knee towards your chest while keeping the opposite leg extended behind you and both hands firmly planted on the floor.'
    },
    {
      title: 'Switch your legs',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extend the forward leg backwards as you simultaneously drive the opposite knee towards your chest.'
    },
    {
      title: 'Continue alternating',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Alternate your legs with a smooth rhythm while keeping your shoulders, core, and hips controlled. Increase your speed only if you can maintain the plank position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips rise',
      description:
        'Avoid pushing your hips high into the air as you bring your knees forward. Maintain a recognizable plank position throughout the exercise.'
    },
    {
      title: 'Letting the lower back sag',
      description:
        'Keep your core engaged so your pelvis does not drop towards the floor. Slow the exercise down if you cannot maintain control of your trunk.'
    },
    {
      title: 'Bouncing through each repetition',
      description:
        'Moving quickly should not mean losing control. Keep the movement coordinated instead of bouncing randomly between your hands and feet.'
    },
    {
      title: 'Shifting too far forward',
      description:
        'Do not continually push your entire body towards your hands as your knees move forward. Keep your upper body relatively stable while the legs alternate underneath you.'
    },
    {
      title: 'Prioritizing speed over position',
      description:
        'Fast repetitions are useful for conditioning only when you can maintain good body position. Learn the movement slowly before increasing your pace.'
    },
  ],

  relatedExercises: [
    'plank',
    'burpees',
    'bicycle-crunches'
  ],

  faq: [
    {
      question: 'What are Mountain Climbers?',
      answer:
        'Mountain Climbers are a dynamic exercise performed from a high plank. You alternately drive each knee towards your chest while keeping your hands on the floor and your upper body relatively stable.'
    },
    {
      question: 'What muscles do Mountain Climbers work?',
      answer:
        'The abdominals help stabilize the trunk while the legs repeatedly flex and extend at the hips. The quadriceps and glutes contribute to the leg movement, while the shoulders and triceps support the upper body in the plank position.'
    },
    {
      question: 'Are Mountain Climbers a core or cardio exercise?',
      answer:
        'They can be both. Your core continuously stabilizes the plank position, while performing the alternating leg movement at a faster pace can create a significant cardiovascular demand.'
    },
    {
      question: 'Should Mountain Climbers be performed fast?',
      answer:
        'Not at first. Learn to alternate your legs while maintaining a stable plank, then gradually increase your speed. Fast repetitions are only useful if your trunk and hip position remain controlled.'
    },
    {
      question: 'How can I make Mountain Climbers easier?',
      answer:
        'Perform them slowly with one controlled knee drive at a time. You can also place your hands on an elevated surface to reduce the difficulty of supporting and stabilizing your body.'
    },
  ],

  seo: {
    title:
      'Mountain Climbers: Technique, Muscles & Guide | Treethenics',

    description:
      'Learn how to perform Mountain Climbers with proper plank position, controlled knee drives, muscles worked and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/mountain-climbers.png',
};
