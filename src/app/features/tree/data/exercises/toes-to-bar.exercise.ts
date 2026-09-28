import { Exercise } from '../../../../shared/models/exercise.model';

export const TOES_TO_BAR: Exercise = {
  id: 'toes-to-bar',
  name: 'Toes to Bar',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals',
    'latissimus-dorsi'
  ],

  secondaryMuscles: [
    'quadriceps',
    'forearms',
    'upper-back'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Toes to Bar is a hanging core exercise where you raise your legs from a full hang until your feet reach the pull-up bar. In the strict version, the movement is performed without a deliberate kip, combining powerful hip flexion, abdominal compression, active lat engagement, and grip strength.',

  overview:
    'The strict Toes to Bar takes the hanging leg raise through its full range of motion. Start from a controlled hang with straight arms, keep your legs together, and actively press down on the bar as you raise your hips and legs. Rather than simply lifting your feet in front of you, continue compressing at the hips and trunk until your toes reach the bar. Lower the legs under control and eliminate unnecessary swinging before beginning the next repetition.',

  howTo: [
    {
      title: 'Start from a controlled hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Hang from the bar with your arms extended and a secure grip. Keep your legs together and stabilize your body before beginning the repetition.'
    },
    {
      title: 'Press down on the bar',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Keep your arms straight and actively press against the bar through your shoulders and lats. This helps move your upper body backwards as your legs begin to rise.'
    },
    {
      title: 'Raise the legs',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lift your legs with control while keeping them as straight as your mobility allows. Continue beyond the L-Sit position instead of stopping when your legs become horizontal.'
    },
    {
      title: 'Bring the toes to the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue closing the angle between your torso and legs until both feet reach the bar. Use your abdominals, hip flexors, and active shoulder position instead of throwing the legs upward with momentum.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement smoothly until you return to the hang. Control the descent so your legs do not create a large swing before the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a kipping Toes to Bar',
      description:
        'A large arch-to-hollow swing can generate enough momentum to throw the feet towards the bar. For the strict Treethenics version, keep the movement controlled and minimize momentum so the core, hip flexors, and upper body produce the repetition.'
    },
    {
      title: 'Only lifting the legs',
      description:
        'Simply flexing at the hips often gets the legs to horizontal but not all the way to the bar. Continue compressing through the trunk and actively press down on the bar to complete the upper portion of the movement.'
    },
    {
      title: 'Bending the knees too early',
      description:
        'Significant knee bending shortens the lever and makes the movement easier. Keep your legs as straight as your current mobility allows, or deliberately use a knee-raise progression if the full variation is not yet available.'
    },
    {
      title: 'Dropping the legs',
      description:
        'Letting the legs fall from the bar creates uncontrolled swinging and removes much of the eccentric challenge. Lower them deliberately until you return to a stable hang.'
    },
  ],

  relatedExercises: [
    'hanging-leg-raise',
    'l-sit',
    'dragon-flag'
  ],

  faq: [
    {
      question: 'What is a Toes to Bar?',
      answer:
        'The Toes to Bar is a hanging exercise where you raise your feet from below the pull-up bar until they reach the bar above you. In the strict version, the movement is performed under control without relying on a large kip or swing.'
    },
    {
      question: 'What muscles does the Toes to Bar work?',
      answer:
        'The abdominals and hip flexors create much of the compression needed to raise the legs, while the lats actively help control the shoulder angle and position the torso. The forearms maintain the grip, and the quadriceps help keep the knees extended.'
    },
    {
      question: 'Do my legs need to stay completely straight?',
      answer:
        'For a clean strict variation, aim to keep your knees extended and your legs together. Limited hamstring mobility can make this more difficult, so a small amount of knee bend is preferable to forcing a range you cannot control.'
    },
    {
      question: 'What is the difference between strict and kipping Toes to Bar?',
      answer:
        'Strict Toes to Bar minimizes momentum and relies primarily on strength and compression to reach the bar. Kipping Toes to Bar deliberately uses an arch-to-hollow swing to generate momentum and is commonly used when cycling repetitions quickly.'
    },
    {
      question: 'How do I progress to Toes to Bar?',
      answer:
        'Start with hanging knee raises, then develop controlled straight-leg raises and L-Sit-height hanging leg raises. Gradually increase the height of your feet while strengthening your compression and learning to actively press against the bar.'
    },
  ],

  seo: {
    title:
      'Toes to Bar: Strict Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn strict Toes to Bar technique, muscles worked, hanging core progressions and common mistakes without relying on momentum.',
  },

  imageUrl: '/images/exercises/toes-to-bar.png',
};
