import { Exercise } from '../../../../shared/models/exercise.model';

export const MANA: Exercise = {
  id: 'mana',
  name: 'Manna',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'core',

  targetAreas: ['core', 'shoulders', 'biceps'],

  primaryMuscles: [
    'rear-deltoids',
    'triceps',
    'abdominals'
  ],

  secondaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'quadriceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Manna is an elite static calisthenics and gymnastics skill where you support your entire body on straight arms while driving your hips forward and upward and extending your legs above your torso. It requires exceptional shoulder extension strength, compression, straight-arm support, and balance.',

  overview:
    'The Manna is not simply a higher V-Sit. As the skill develops, your hips travel forward and upward while your shoulders move into deep extension behind your torso. Build a strong L-Sit first, then develop the specific shoulder position through Advanced L-Sits, Middle Split Holds, and Straddle Manna progressions. Keep your elbows locked and increase the hip height gradually instead of trying to throw your legs backward into the final position.',

  howTo: [
    {
      title: 'Build a strong L-Sit',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled L-Sit with straight elbows and legs. Alongside it, train active compression and gradually prepare your shoulders to support weight with your hands beside or slightly behind your hips.'
    },
    {
      title: 'Move the hips forward',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Progress to an Advanced L-Sit by pressing strongly through your hands and moving your hips forward relative to them. Keep your chest open and your elbows completely extended.'
    },
    {
      title: 'Build the Middle Split Hold',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Open your legs into a straddle and practice supporting your hips between your hands while maintaining straight arms. Gradually lift the hips higher as your shoulder extension strength improves.'
    },
    {
      title: 'Develop the Straddle Manna',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pressing your hips forward and upward while keeping your legs straddled. Use the wider leg position to develop the final hip height and balance before attempting to bring the legs together.'
    },
    {
      title: 'Close into the Manna',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your hips are high enough, gradually bring your straight legs together above your torso. Maintain locked elbows, active shoulder extension, strong compression, and control of the final position without kicking into it.'
    },
  ],

  commonMistakes: [
    {
      title: 'Treating it like a higher V-Sit',
      description:
        'Simply lifting your feet higher does not create a Manna. Focus on moving your hips forward and upward while developing the deeper shoulder extension that separates the Manna from the V-Sit.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Manna is a straight-arm support skill. If your elbows bend as your hips rise, return to a lower progression and build more shoulder-extension and straight-arm support strength.'
    },
    {
      title: 'Kicking the legs backward',
      description:
        'Using momentum may briefly place your legs above your torso without developing control of the actual position. Build the skill through a straddle and progressively raise your hips instead of throwing your legs into place.'
    },
    {
      title: 'Forcing shoulder extension',
      description:
        'The Manna requires an unusually demanding shoulder position. Develop that range gradually with active support exercises instead of forcing your shoulders into a passive range that you cannot control.'
    },
  ],

  relatedExercises: [
    'l-sit',
    'v-sit',
    'straddle-manna'
  ],

  faq: [
    {
      question: 'What is a Manna?',
      answer:
        'The Manna is an advanced static skill where you support your body on straight arms while raising your hips forward and upward and extending your legs above your torso. The final position combines extreme compression with deep active shoulder extension.'
    },
    {
      question: 'What is the difference between a Manna and a V-Sit?',
      answer:
        'A V-Sit primarily progresses by raising the straight legs above horizontal while the hips remain relatively close to the hands. In a Manna, the hips move much farther forward and upward while the shoulders move into deeper extension behind the torso.'
    },
    {
      question: 'Do I need a V-Sit before learning the Manna?',
      answer:
        'A strong V-Sit is useful because it develops compression strength, but it is not the only preparation you need. Advanced L-Sits, Middle Split Holds, and Straddle Manna work are more specific for developing the hips-forward position and shoulder-extension strength of the Manna.'
    },
    {
      question: 'What muscles does the Manna work?',
      answer:
        'The rear shoulders, triceps, and upper-back musculature help support the demanding straight-arm shoulder position, while the abdominals and hip flexors maintain compression. The quadriceps keep the knees straight, the adductors help close the legs from a straddle, and the forearms stabilize the hands and wrists.'
    },
    {
      question: 'What is the best progression towards the Manna?',
      answer:
        'A practical progression is L-Sit, Advanced L-Sit, Middle Split Hold, elevated or higher Middle Split Holds, Straddle Manna, and finally Manna. V-Sit training is useful alongside this progression, but simply increasing your V-Sit height does not fully prepare the Manna shoulder position.'
    },
  ],

  seo: {
    title:
      'Manna: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Manna with proper straight-arm technique, muscles worked, L-Sit and Straddle Manna progressions, and common mistakes for this elite static skill.',
  },

  imageUrl: '/images/exercises/manna.png',
};
