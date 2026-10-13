import { Exercise } from '../../../../shared/models/exercise.model';

export const TRICEPS_DIP: Exercise = {
  id: 'triceps-dip',
  name: 'Triceps Dip',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'push',

  targetAreas: ['triceps', 'shoulders'],

  primaryMuscles: [
    'triceps'
  ],

  secondaryMuscles: [
    'front-deltoids',
    'chest'
  ],

  equipment: ['weight-bench'],

  description:
    'The Triceps Dip is a bodyweight pushing exercise performed with your hands on an elevated surface behind your body and your feet supported on the floor. It primarily trains elbow extension strength through the triceps while the shoulders and chest assist throughout the movement.',

  overview:
    'Sit on the edge of a stable bench and place your hands beside your hips with your fingers facing forward. Move your hips just beyond the edge and support yourself between your hands and feet. Bend your elbows to lower your body while keeping your hips close to the bench, then extend your elbows to press yourself back up. Keep the movement controlled and use only a range of motion that feels comfortable at the shoulders. Bend your knees to make the exercise easier or extend your legs farther forward to increase the amount of bodyweight supported by your arms.',

  howTo: [
    {
      title: 'Set your hands',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Sit on the edge of a stable bench and place your hands beside your hips. Grip the edge securely with your fingers facing forward.'
    },
    {
      title: 'Move off the bench',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Move your hips just beyond the edge of the bench and support your body through your hands and feet. Keep your hips close to the bench throughout the exercise.'
    },
    {
      title: 'Lower your body',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows backwards and lower yourself under control. Stop before the shoulder position becomes uncomfortable or excessively deep.'
    },
    {
      title: 'Keep the elbows controlled',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your elbows travelling mostly backwards rather than allowing them to flare widely to the sides. Maintain a stable torso and avoid shrugging your shoulders.'
    },
    {
      title: 'Press back up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Push firmly through your hands and extend your elbows to raise your body back to the starting position while keeping your hips close to the bench.'
    },
  ],

  commonMistakes: [
    {
      title: 'Going too deep',
      description:
        'More depth is not automatically better. Lower only through a comfortable shoulder range and avoid forcing your upper arms far beyond the position you can control.'
    },
    {
      title: 'Moving away from the bench',
      description:
        'Allowing your hips to drift far forward increases the distance between your body and the support. Keep your hips relatively close to the edge throughout the repetition.'
    },
    {
      title: 'Flaring the elbows',
      description:
        'Avoid allowing your elbows to spread excessively to the sides. Keep them travelling mostly backwards as you lower and press.'
    },
    {
      title: 'Shrugging the shoulders',
      description:
        'Do not collapse into your shoulders at the bottom of the repetition. Maintain an active and controlled shoulder position throughout the movement.'
    },
    {
      title: 'Dropping into the bottom',
      description:
        'Control the lowering phase instead of falling quickly into the deepest position. A smooth descent makes the exercise easier to control and avoids unnecessary stress on the shoulders.'
    },
  ],

  relatedExercises: [
    'dips',
    'diamond-push-up',
    'sphinx-push-up'
  ],

  faq: [
    {
      question: 'What is a Triceps Dip?',
      answer:
        'The Triceps Dip is a bodyweight exercise performed with your hands on a bench or other elevated surface behind your body. You lower yourself by bending the elbows and press back up using primarily the triceps.'
    },
    {
      question: 'What muscles do Triceps Dips work?',
      answer:
        'The triceps are the main muscle responsible for extending the elbows and producing the pressing movement. The chest and front deltoids also contribute to the exercise.'
    },
    {
      question: 'What is the difference between Triceps Dips and regular Dips?',
      answer:
        'In a Triceps Dip or Bench Dip, your hands are supported behind you on a bench while your feet remain on the floor. In regular parallel-bar Dips, your entire body is suspended between the bars, making the exercise significantly more demanding.'
    },
    {
      question: 'How can I make Triceps Dips easier?',
      answer:
        'Bend your knees and move your feet closer to the bench. This allows your legs to support more of your bodyweight and reduces the load placed on your arms.'
    },
    {
      question: 'How can I make Triceps Dips harder?',
      answer:
        'Gradually extend your legs farther from the bench. Once you have strong control, elevating the feet increases the amount of bodyweight supported by the upper body before progressing to more demanding Dip variations.'
    },
  ],

  seo: {
    title:
      'Triceps Dip: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Triceps Dip with proper bench technique, muscles worked, progressions and common mistakes for building bodyweight triceps strength.',
  },

  imageUrl: '/images/exercises/triceps-dip.png',
};
