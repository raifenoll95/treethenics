
import { Exercise } from '../../../../shared/models/exercise.model';

export const CALF_RAISE: Exercise = {
  id: 'calf-raise',
  name: 'Calf Raise',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: [
    'legs'
  ],

  secondaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  equipment: ['floor'],

  description:
    'The Calf Raise is a beginner bodyweight exercise performed by lifting the heels off the floor while standing on the balls of the feet. It strengthens the gastrocnemius and soleus muscles, improves ankle plantarflexion strength, and develops lower-leg muscular endurance and balance.',

  overview:
    'Stand upright with your feet approximately hip-width apart and your weight evenly distributed across both feet. Keep your knees straight but not forcefully locked and maintain a stable torso. Press through the balls of your feet to lift your heels as high as comfortably possible. Pause briefly at the top while maintaining balance and avoiding excessive ankle rolling. Slowly lower your heels until they return to the floor. Repeat using a controlled tempo without bouncing or using momentum. For additional stability, lightly hold a wall or another secure support. Progress gradually towards Single Leg Calf Raises as your strength and balance improve.',

  howTo: [
    {
      title: 'Establish a standing position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand upright with your feet approximately hip-width apart. Keep your heels on the floor, your knees extended, and your torso stable.'
    },
    {
      title: 'Engage your lower legs',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Distribute your weight evenly across the balls of your feet. Maintain controlled ankle alignment and prepare to lift your heels.'
    },
    {
      title: 'Raise your heels',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Push through the balls of your feet and lift both heels off the ground. Keep your knees nearly straight and avoid using momentum.'
    },
    {
      title: 'Reach the top position',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Rise onto your toes as high as comfortably possible. Briefly hold the elevated position while maintaining balance and controlled ankle alignment.'
    },
    {
      title: 'Lower with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly lower your heels back to the floor. Maintain muscular control throughout the descent and avoid bouncing into the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bouncing through repetitions',
      description:
        'Avoid using rapid bouncing movements to lift your heels. Perform each repetition with controlled muscular effort rather than momentum.'
    },
    {
      title: 'Performing a limited range of motion',
      description:
        'Avoid raising your heels only slightly when you can comfortably move further. Aim for a controlled, full plantarflexion range without forcing your ankles.'
    },
    {
      title: 'Rolling the ankles outward',
      description:
        'Do not allow your ankles to collapse excessively towards the outside edges of your feet. Maintain balanced pressure through the forefoot.'
    },
    {
      title: 'Rolling the ankles inward',
      description:
        'Avoid excessive inward ankle collapse while rising onto your toes. Keep your feet and ankles aligned throughout the movement.'
    },
    {
      title: 'Bending the knees excessively',
      description:
        'Keep your knees nearly straight during the standing Calf Raise. Significant knee bending changes the muscular emphasis and makes the movement resemble a bent-knee variation.'
    },
    {
      title: 'Leaning forwards excessively',
      description:
        'Avoid shifting your torso forwards to generate momentum. Maintain an upright posture and initiate the movement primarily through your ankles.'
    },
    {
      title: 'Dropping the heels too quickly',
      description:
        'Do not allow your heels to fall abruptly to the floor. Control the lowering phase to maintain muscular tension and improve movement quality.'
    },
  ],

  relatedExercises: [
    'squat',
    'step-up',
    'forward-lunge',
    'reverse-lunge',
    'walking-lunges'
  ],

  faq: [
    {
      question: 'What is a Calf Raise?',
      answer:
        'A Calf Raise is a lower-body exercise performed by lifting the heels while standing on the balls of the feet. The movement trains the muscles responsible for ankle plantarflexion.'
    },
    {
      question: 'What muscles do Calf Raises work?',
      answer:
        'Calf Raises primarily train the gastrocnemius and soleus muscles. These muscles work together to lift the heel and produce plantarflexion at the ankle.'
    },
    {
      question: 'What is the difference between the gastrocnemius and soleus?',
      answer:
        'The gastrocnemius crosses both the knee and ankle joints, while the soleus primarily acts at the ankle. Standing Calf Raises with relatively straight knees emphasize the gastrocnemius more than bent-knee variations, although both muscles remain active.'
    },
    {
      question: 'Are Calf Raises good for beginners?',
      answer:
        'Yes. Bodyweight Calf Raises are accessible to most beginners and can be performed without specialized equipment. A wall or stable support can help with balance.'
    },
    {
      question: 'Should my knees be straight during Calf Raises?',
      answer:
        'For the standard standing variation, keep your knees straight or slightly relaxed. Avoid excessive knee bending, which changes the relative contribution of the calf muscles.'
    },
    {
      question: 'How high should I raise my heels?',
      answer:
        'Lift your heels as high as comfortably possible while maintaining balanced pressure through your forefoot and controlled ankle alignment.'
    },
    {
      question: 'Can Calf Raises improve ankle strength?',
      answer:
        'Yes. Calf Raises strengthen the muscles responsible for plantarflexion and can improve lower-leg muscular endurance and ankle control when performed consistently.'
    },
    {
      question: 'How can I make Calf Raises harder?',
      answer:
        'Progress towards Single Leg Calf Raises, increase the controlled range of motion using a stable step, slow down the lowering phase, or add external resistance.'
    },
  ],

  seo: {
    title:
      'Calf Raise: Technique & Muscles | Treethenics',

    description:
      'Learn Calf Raises with proper heel elevation, ankle alignment, muscles worked, common mistakes and progressions for stronger calves.',
  },

  imageUrl: '/images/exercises/calf-raise.png',
};
