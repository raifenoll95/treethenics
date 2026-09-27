import { Exercise } from '../../../../shared/models/exercise.model';

export const HEFESTO: Exercise = {
  id: 'hefesto',
  name: 'Hefesto',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',

  targetAreas: ['biceps', 'shoulders', 'chest'],

  primaryMuscles: [
    'biceps',
    'front-deltoids',
    'chest'
  ],

  secondaryMuscles: [
    'forearms',
    'latissimus-dorsi',
    'upper-back',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Hefesto is an advanced calisthenics pulling skill performed behind the body. Starting from a German Hang or tucked back lever position with a supinated grip, you bend your elbows and pull your body upward until your hips approach the bar and you reach the bottom position of a Korean Dip. It demands exceptional biceps strength, shoulder extension mobility, grip control, and preparation of the elbows and wrists.',

  overview:
    'The Hefesto combines an unusual behind-the-body pulling pattern with a demanding shoulder position. Before attempting the full movement, become comfortable with Skin the Cat and German Hang positions and develop strength through Korean Dips, assisted Hefesto pulls, and controlled negatives. A high false-style grip can make the transition around the bar easier while learning. Progress gradually because the movement places substantial stress on the biceps, elbows, wrists, and shoulders.',

  howTo: [
    {
      title: 'Build your German Hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop comfortable Skin the Cats and controlled German Hang positions with a supinated grip. Gradually build tolerance to shoulder extension instead of forcing yourself into a range you cannot control.'
    },
    {
      title: 'Learn the assisted pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use a low bar, your feet, or a resistance band to practice the Hefesto pulling path. Start behind the bar and learn to bend your elbows while keeping your body close to the bar.'
    },
    {
      title: 'Build controlled negatives',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Start from the upper position behind the bar and slowly reverse the movement. Control the descent through the difficult elbow and shoulder angles until you reach the lower Hefesto position.'
    },
    {
      title: 'Pull your hips towards the bar',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From the lower position, flex your elbows and pull strongly while keeping your hips close to the bar. Continue rotating around the bar as your torso becomes more upright.'
    },
    {
      title: 'Complete the Hefesto',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Continue pulling until you reach the bottom position of a Korean Dip behind the bar. From there, you can finish by pressing to straight-arm support if you want to continue the movement above the bar.'
    },
  ],

  commonMistakes: [
    {
      title: 'Training it without shoulder preparation',
      description:
        'The Hefesto places your shoulders in substantial extension behind your body. Build this range gradually with controlled Skin the Cats and German Hangs instead of forcing deeper positions before your shoulders are ready.'
    },
    {
      title: 'Losing the grip during the transition',
      description:
        'If your wrists roll too far underneath the bar, the hardest part of the pull becomes much more difficult. While learning, practice placing the wrist high over the bar and maintaining that grip as your body rotates upward.'
    },
    {
      title: 'Letting your hips move away from the bar',
      description:
        'Allowing your body to swing away increases the leverage and makes the pull considerably harder. Keep your hips and lower back close to the bar as you move through the transition.'
    },
    {
      title: 'Skipping assisted and eccentric work',
      description:
        'Repeated full attempts can overload the elbows and biceps before you have enough specific strength. Assisted pulls and controlled negatives let you develop strength through the actual Hefesto range with less load.'
    },
  ],

  relatedExercises: [
    'back-lever',
    'korean-dip',
    'skin-the-cat'
  ],

  faq: [
    {
      question: 'What is a Hefesto?',
      answer:
        'The Hefesto is an advanced behind-the-body pulling skill. You start underneath and behind the bar, usually from a German Hang or tucked back lever position with a supinated grip, and pull yourself upward until your hips reach the bar and you arrive around the bottom position of a Korean Dip.'
    },
    {
      question: 'What muscles does the Hefesto work?',
      answer:
        'The biceps are heavily involved in the unusual behind-the-body pull, while the shoulders, chest, forearms, back, and scapular muscles contribute to producing and controlling the movement. Your core also helps keep the body controlled as you rotate around the bar.'
    },
    {
      question: 'Do I need a Back Lever before learning Hefesto?',
      answer:
        'A controlled Back Lever is useful evidence that you already have significant straight-arm strength and experience in shoulder extension, but you can begin easier Hefesto-specific drills before mastering a perfect Full Back Lever. German Hangs, assisted Hefesto pulls, Korean Dips, and negatives are more specific to the movement.'
    },
    {
      question: 'What are the best progressions for Hefesto?',
      answer:
        'Start with Skin the Cat and comfortable German Hang work, then learn the pulling path with foot or band assistance. Add Korean Dips and controlled Hefesto negatives before reducing assistance and attempting the full movement.'
    },
  ],

  seo: {
    title:
      'Hefesto: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Hefesto with proper technique, muscles worked, assisted progressions, negatives and common mistakes for this advanced calisthenics skill.',
  },

  imageUrl: '/images/exercises/hefesto.png',
};
