import { Exercise } from '../../../../shared/models/exercise.model';

export const SPHINX_PUSH_UP: Exercise = {
  id: 'sphinx-push-up',
  name: 'Sphinx Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: false,
  category: 'push',

  targetAreas: ['triceps', 'chest', 'shoulders'],

  primaryMuscles: ['triceps'],

  secondaryMuscles: [
    'chest',
    'front-deltoids',
    'abdominals',
    'obliques'
  ],

  equipment: ['floor'],

  description:
    'The sphinx push up is a bodyweight exercise that puts much more emphasis on your triceps than a regular push up. Instead of lowering your chest directly towards the floor, you bend your elbows until your forearms reach the ground and then use your triceps to extend your arms again. It is a simple but challenging exercise that requires no equipment and is a great option for building stronger triceps for other pushing movements.',

  overview:
    'If you want to put more focus on your triceps without using weights, the sphinx push up is a great exercise to learn. The movement is similar to a bodyweight triceps extension: you move between a forearm plank and a straight-arm position mainly by bending and extending your elbows. Start from your knees if the full version is too difficult, then progress to your toes once you can control the entire movement without losing your body position.',

  howTo: [
    {
      title: 'Start with the knee variation',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'If you are new to sphinx push ups, start with your knees on the floor. Keep your hands in front of you and practice lowering onto your forearms before extending your elbows to push yourself back up. This reduces the amount of bodyweight your triceps have to move and lets you learn the technique first.'
    },
    {
      title: 'Move into a full plank',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Once the knee variation feels comfortable, extend your legs and support yourself on your toes. Keep your core and glutes tight so your body stays in a straight line throughout the exercise.'
    },
    {
      title: 'Lower onto your forearms',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and slowly lower your body until your forearms reach the floor. Keep your elbows relatively close instead of letting them flare far out to the sides, and control the descent rather than dropping into the bottom position.'
    },
    {
      title: 'Extend your elbows to push back up',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press firmly through your hands and extend your elbows until your arms are straight again. Your body should rise as one unit, so keep your hips and torso in the same position instead of using momentum to make the rep easier.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a regular push up',
      description:
        'The main movement should come from bending and extending your elbows. If your chest is moving forwards and down like a regular push up, you are changing the exercise and taking some of the emphasis away from your triceps.'
    },
    {
      title: 'Letting your elbows flare out',
      description:
        'Try to keep your elbows relatively close to your body as you lower onto your forearms. Letting them move too far out to the sides changes the movement and makes it harder to maintain a strong pressing position.'
    },
    {
      title: 'Dropping onto your forearms',
      description:
        'Do not simply fall into the bottom of each rep. Control the lowering phase until your forearms reach the floor gently. If you cannot control the descent yet, switch to the knee variation and build your strength there first.'
    },
    {
      title: 'Moving your hips instead of your arms',
      description:
        'When your triceps start getting tired, it is tempting to lift or drop your hips to help finish the rep. Keep your abs and glutes engaged so your body stays rigid and let your elbows do the work.'
    },
  ],

  relatedExercises: [
    'push-up',
    'diamond-push-up',
    'dips'
  ],

  faq: [
    {
      question: 'What muscles do sphinx push ups work?',
      answer:
        'Sphinx push ups mainly target your triceps because most of the movement comes from extending your elbows against your bodyweight. Your chest and shoulders also contribute to the press, while your abs and the rest of your core help keep your body stable throughout each rep.'
    },
    {
      question: 'Are sphinx push ups harder than regular push ups?',
      answer:
        'They can feel much harder, especially if your triceps are not used to this type of movement. A regular push up spreads the work more between your chest, shoulders, and triceps, while the sphinx push up places much more emphasis on elbow extension and therefore demands more from your triceps.'
    },
    {
      question: 'How can I make sphinx push ups easier?',
      answer:
        'Start with your knees on the floor. This shortens the lever and reduces the amount of bodyweight your arms have to move. Once you can perform controlled reps without dropping onto your forearms or moving your hips, progress to the full version from your toes.'
    },
    {
      question: 'Are sphinx push ups good for building triceps?',
      answer:
        'Yes. The sphinx push up is essentially a bodyweight triceps extension performed on the floor, so your triceps have to work hard to straighten your elbows and raise your body. If regular or diamond push ups are not giving your triceps enough of a challenge, sphinx push ups are a useful variation to add.'
    },
  ],

  seo: {
    title:
      'Sphinx Push Up: How to Do It, Muscles & Progressions | Treethenics',

    description:
      'Learn how to do the Sphinx Push Up with proper technique, muscles worked, common mistakes and progressions to build stronger triceps.',
  },

  imageUrl: '/images/exercises/sphinx-push-up.png',
};
