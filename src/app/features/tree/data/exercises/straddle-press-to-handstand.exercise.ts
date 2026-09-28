import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PRESS_TO_HANDSTAND: Exercise = {
  id: 'straddle-press-to-handstand',
  name: 'Straddle Press to Handstand',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'serratus-anterior',
    'abdominals'
  ],

  secondaryMuscles: [
    'triceps',
    'obliques',
    'quadriceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The Straddle Press to Handstand is a controlled straight-arm handstand entry where you lift both feet from the floor without jumping or kicking. A wide straddle and strong hip compression allow the hips to rise over the shoulders before the legs close into a balanced Handstand.',

  overview:
    'The Straddle Press to Handstand combines straight-arm shoulder strength, compression, flexibility, and handstand balance. Begin in a wide straddle with your hands on the floor, shift your shoulders forward, and raise your hips while keeping your elbows locked. Both feet should leave the floor through controlled weight transfer rather than a jump. Keep the legs straddled as the hips rise above the shoulders, then gradually open the hips and bring the legs together as you reach the Handstand.',

  howTo: [
    {
      title: 'Set the straddle',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Begin in a wide straddle and place your hands firmly on the floor. Keep your knees straight and bring your hips as high as your mobility comfortably allows.'
    },
    {
      title: 'Shift onto your hands',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Lean your shoulders forward and press strongly through your hands with your elbows locked. Transfer enough weight into your hands that your feet begin to feel light.'
    },
    {
      title: 'Lift the feet',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Use active compression to lift both feet from the floor without jumping. Focus on sending your hips upward rather than trying to throw your legs directly towards the Handstand.'
    },
    {
      title: 'Raise the hips',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your legs wide and straight as your hips travel above your shoulders. Continue pushing tall through your shoulders while controlling your balance through your hands and fingers.'
    },
    {
      title: 'Close into Handstand',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'As your hips become stacked over your shoulders and hands, gradually open your hips and bring your legs together. Finish in a stable, controlled Handstand.'
    },
  ],

  commonMistakes: [
    {
      title: 'Jumping from the floor',
      description:
        'Pushing off with your feet turns the movement into a jumping or kicking Handstand entry. Shift your center of mass over your hands and make both feet leave the floor through controlled strength.'
    },
    {
      title: 'Trying to lift the legs before the hips',
      description:
        'Throwing your legs upward while your hips remain behind your hands makes the press unnecessarily difficult. Think about raising and stacking the hips first while keeping the legs compressed.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The standard Straddle Press to Handstand is a straight-arm skill. Keep your elbows locked and use an easier progression if you need significant elbow flexion to lift from the floor.'
    },
    {
      title: 'Closing the legs too early',
      description:
        'Keeping a wide straddle reduces the effective lever and helps you maintain compression during the hardest part of the press. Bring your legs together only as your hips approach the stacked Handstand position.'
    },
  ],

  relatedExercises: [
    'handstand',
    'l-sit-to-handstand',
    'straddle-planche-press-to-handstand'
  ],

  faq: [
    {
      question: 'What is a Straddle Press to Handstand?',
      answer:
        'It is a controlled Handstand entry where you begin with your feet on the floor in a wide straddle and lift into Handstand without jumping or kicking. The arms remain straight while the hips rise above the shoulders and the legs eventually close overhead.'
    },
    {
      question: 'Do my arms need to stay straight?',
      answer:
        'Yes. In the standard straight-arm Straddle Press to Handstand, the elbows remain extended throughout the press. A bent-arm press is a different variation with different strength requirements.'
    },
    {
      question: 'Do I need a full straddle split?',
      answer:
        'No. A larger straddle and good compression can make the movement easier, but a full middle split is not required. Your strength, hip mobility, compression, body proportions, and handstand control all influence how much straddle you need.'
    },
    {
      question: 'Why can I Handstand but not press into one?',
      answer:
        'Balancing a Handstand and pressing into it are different challenges. The press requires enough straight-arm shoulder strength and active compression to move your center of mass over your hands and lift your feet without using momentum.'
    },
    {
      question: 'How do I make the Straddle Press to Handstand easier?',
      answer:
        'Practice press leans, toe-float drills, elevated-foot presses, and slow Handstand-to-Straddle negatives. Improving active compression and using a wider straddle can also reduce the difficulty while you develop the full press.'
    },
  ],

  seo: {
    title:
      'Straddle Press to Handstand: Technique & Progressions | Treethenics',

    description:
      'Learn the Straddle Press to Handstand with straight-arm technique, compression drills, muscles worked, progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/straddle-press-to-handstand.png',
};
