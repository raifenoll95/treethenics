import { Exercise } from '../../../../shared/models/exercise.model';

export const CRUNCH: Exercise = {
  id: 'crunch',
  name: 'Crunch',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The crunch is a beginner core exercise that trains your abs by flexing your torso and bringing your ribs towards your pelvis. Unlike a sit-up, you only lift your head and upper back from the floor instead of bringing your entire torso upright. This shorter movement keeps the exercise focused on controlled abdominal flexion.',

  overview:
    'Crunches are simple, but they work best when you focus on moving your rib cage rather than just lifting your head. Lie on your back with your knees bent and feet planted, tighten your abs, and curl your shoulders away from the floor. You do not need to sit all the way up or chase a huge range of motion. Make each rep smooth, keep your neck relaxed, and lower yourself with the same control you used to come up.',

  howTo: [
    {
      title: 'Set your position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Lie on your back with your knees bent and your feet flat on the floor around hip-width apart. Place your arms across your chest or keep your hands lightly beside your head without pulling on your neck.'
    },
    {
      title: 'Brace your abs',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Tighten your abdominal muscles before you move. Keep your lower body relaxed and think about shortening the distance between your ribs and pelvis.'
    },
    {
      title: 'Curl your upper body',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Use your abs to curl your head and shoulders away from the floor. Focus on flexing your torso instead of simply pushing your head forward. You only need to lift far enough to create a strong abdominal contraction.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Slowly reverse the movement until your upper back returns to the floor. Stay controlled instead of dropping your shoulders down, then begin the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Pulling on your neck',
      description:
        'Do not use your hands to drag your head towards your knees. Keep your neck relaxed and let your abdominal muscles create the movement. Crossing your arms over your chest is a simple option if you tend to pull on your head.'
    },
    {
      title: 'Turning the crunch into a sit-up',
      description:
        'You do not need to lift your entire torso from the floor. A crunch is a smaller trunk-flexion movement where your shoulders and upper back rise while your lower back remains largely supported.'
    },
    {
      title: 'Moving only your head',
      description:
        'Bringing your chin towards your chest without actually curling your torso does very little for the exercise. Think about bringing your rib cage towards your pelvis and allow your shoulders to leave the floor.'
    },
    {
      title: 'Using momentum',
      description:
        'Avoid throwing your arms forward or rapidly bouncing between repetitions. Move smoothly enough that your abs control both the lifting and lowering portions of every rep.'
    },
  ],

  relatedExercises: [
    'reverse-crunch',
    'bicycle-crunch',
    'hollow-body-hold'
  ],

  faq: [
    {
      question: 'What muscles do crunches work?',
      answer:
        'Crunches primarily train the rectus abdominis, the muscle running down the front of your abdomen. Your obliques and other muscles around your trunk also contribute, but the traditional crunch is mainly an abdominal flexion exercise.'
    },
    {
      question: 'What is the difference between a crunch and a sit-up?',
      answer:
        'A crunch only curls your upper torso away from the floor, while a sit-up continues until much more of your torso rises towards your legs. The sit-up therefore involves substantially more movement at the hips, while the crunch focuses more directly on trunk flexion.'
    },
    {
      question: 'Should I put my hands behind my head?',
      answer:
        'You can place your hands lightly beside or behind your head, but you should never use them to pull your head forward. If you find yourself doing that, cross your arms over your chest until you develop better control.'
    },
    {
      question: 'Do I need to crunch all the way up?',
      answer:
        'No. The goal is not to sit upright. Curl your ribs towards your pelvis until your shoulders and upper back lift from the floor and you feel a strong abdominal contraction, then lower yourself under control.'
    },
  ],

  seo: {
    title:
      'Crunch: How to Do It, Muscles & Proper Form | Treethenics',

    description:
      'Learn how to do Crunches with proper form, muscles worked, common mistakes and simple technique tips for stronger abs.',
  },

  imageUrl: '/images/exercises/crunch.png',
};
