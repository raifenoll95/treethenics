import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_ADVANCED_PLANCHE_PUSH_UP: Exercise = {
  id: 'tuck-advanced-planche-push-up',
  name: 'Tuck Advanced Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'triceps'
  ],

  secondaryMuscles: [
    'chest',
    'abdominals',
    'biceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The advanced tuck planche push up is a harder progression of the tuck planche push up where you open your hips and move your knees further away from your chest. This creates a longer lever and puts much more demand on your shoulders while you keep your entire body off the ground. It is an important step between tuck planche push ups and harder variations such as the straddle planche push up.',

  overview:
    'If you already have solid tuck planche push ups, the advanced tuck variation is the next big step. Instead of staying tightly compressed, you open your hips until your back is much flatter and your knees sit further behind you. That small change makes the exercise dramatically harder because more of your body extends behind your hands. Start by building a strong advanced tuck hold, then introduce negatives and partial reps before working towards full push ups.',

  howTo: [
    {
      title: 'Build a solid advanced tuck planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start from a tuck planche and gradually open your hips so your knees move further away from your chest. Keep your knees bent, bring your hips roughly level with your shoulders, and work towards a flatter back. Maintain straight arms and push strongly through the floor before adding any push ups.'
    },
    {
      title: 'Practice controlled negatives',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From a strong advanced tuck planche, slowly bend your elbows and lower yourself while keeping the same body shape. Keep your shoulders forward and try not to pull your knees back towards your chest as the movement gets harder.'
    },
    {
      title: 'Introduce partial reps',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Once you can control the negative, start pressing through a range of motion you can manage without losing your advanced tuck position. Gradually increase the depth as you get stronger instead of immediately forcing a full repetition.'
    },
    {
      title: 'Perform the full push up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Lower yourself under control while keeping your hips and shoulders roughly level, then push strongly through your hands until your elbows are fully extended again. Finish every rep in a clean advanced tuck planche with your feet still off the ground.'
    },
    {
      title: 'Progress towards the straddle planche push up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once your advanced tuck push ups are strong and consistent, begin extending your legs further behind you. You can gradually open into easier straddle positions before attempting full straddle planche push ups. The goal is to increase the lever without losing your horizontal body position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it back into a tuck planche',
      description:
        'When the rep gets difficult, it is tempting to pull your knees towards your chest and round your back. This shortens the lever and turns the movement back into a regular tuck planche push up. Keep your hips open and your knees further away from your torso throughout the rep.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Your hips should stay roughly level with your shoulders instead of falling towards the floor. If they drop every time you bend your elbows, reduce the range of motion and build more strength before attempting deeper reps.'
    },
    {
      title: 'Losing your forward lean',
      description:
        'Do not shift your shoulders backwards as you push yourself up. The advanced tuck creates a longer lever, so you need enough forward lean to keep your center of mass over your hands. Losing that lean will usually make your feet drop towards the floor.'
    },
    {
      title: 'Finishing with soft elbows',
      description:
        'A clean rep should finish back in the advanced tuck planche with your elbows fully extended. Do not stop just before lockout because the final straight-arm position is an important part of the exercise and prepares you for harder planche progressions.'
    },
  ],

  relatedExercises: [
    'tuck-planche-push-up',
    'advanced-tuck-planche',
    'straddle-planche-push-up'
  ],

  faq: [
    {
      question: 'What is the difference between a tuck and advanced tuck planche push up?',
      answer:
        'In a regular tuck planche push up, your knees stay close to your chest and your body remains compact. In the advanced tuck, you open your hips and move your knees further away from your torso while keeping them bent. This creates a longer lever, making your shoulders work much harder even though your legs are still tucked.'
    },
    {
      question: 'Should my back be flat during advanced tuck planche push ups?',
      answer:
        'That is what you should work towards. Compared with a regular tuck planche, the advanced tuck has a much flatter back with the hips opened and positioned roughly at shoulder height. If you have to round your back heavily and pull your knees into your chest, you are probably using a regular tuck position instead.'
    },
    {
      question: 'Why can I do tuck planche push ups but not advanced tuck push ups?',
      answer:
        'The advanced tuck creates a much longer lever by moving more of your bodyweight behind your hands. This increases the demand on your shoulders and makes maintaining balance considerably harder. Start with advanced tuck holds and negatives rather than expecting your tuck planche push up strength to transfer immediately.'
    },
    {
      question: 'What comes after the advanced tuck planche push up?',
      answer:
        'The straddle planche push up is a natural next goal. You can gradually work towards it by extending your legs further behind you and opening them apart. There is no need to rush the transition: even a few clean advanced tuck push ups require a high level of planche strength.'
    },
  ],

  seo: {
    title:
      'Advanced Tuck Planche Push Up: Guide & Progressions | Treethenics',

    description:
      'Learn the Advanced Tuck Planche Push Up with proper technique, muscles worked, common mistakes and progressions towards straddle planche push ups.',
  },

  imageUrl: '/images/exercises/tuck-advanced-planche-push-up.png',
};
