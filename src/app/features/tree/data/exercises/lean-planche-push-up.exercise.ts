import { Exercise } from '../../../../shared/models/exercise.model';

export const LEAN_PLANCHE_PUSH_UP: Exercise = {
  id: 'lean-planche-push-up',
  name: 'Lean Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: ['front-deltoids', 'chest', 'triceps'],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The planche lean push up is a harder push up variation where you shift your shoulders forward past your hands and try to maintain that lean throughout every rep. This small change makes a huge difference: your shoulders have to support much more of your bodyweight while your chest and triceps help you complete the push. It is a great exercise for developing planche-specific pushing strength before moving on to harder progressions.',

  overview:
    'If regular push ups are no longer challenging enough and you want to start building strength for the planche, the planche lean push up is a great exercise to add to your training. Instead of keeping your shoulders directly above your hands, you lean forward and maintain that position as you perform each rep. The further you lean, the harder the exercise becomes, so there is no need to rush. Start with a small lean, keep your body tight, and gradually move your shoulders further forward as you get stronger.',

  howTo: [
    {
      title: 'Build a strong planche lean',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start in a push up position with your arms straight and push strongly through the floor so your upper back stays active. Lean forward until your shoulders move slightly past your hands while keeping your feet on the ground. Before adding push ups, get comfortable supporting your weight in this position.'
    },
    {
      title: 'Start with a small forward lean',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Once the static position feels comfortable, use a lean that you can control throughout an entire rep. Keep your core and glutes tight and maintain a strong body position from your shoulders to your feet. You can turn your hands slightly outward if that feels more comfortable on your wrists.'
    },
    {
      title: 'Lower yourself without losing the lean',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and lower your body towards the floor while keeping your shoulders forward. Do not shift your weight backwards as soon as the rep becomes difficult. Use a smaller lean if necessary and focus on keeping the same position from top to bottom.'
    },
    {
      title: 'Push back up with control',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push strongly through your hands until your arms are extended again, finishing in the same forward-leaning position where you started. Keep pushing the floor away at the top instead of relaxing through your shoulders.'
    },
    {
      title: 'Gradually increase your lean',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'As you get stronger, move your shoulders slightly further past your hands. Increasing the lean is more useful than simply chasing a huge number of reps. Over time, this will place more of your bodyweight over your hands and build the strength you need for harder planche progressions.'
    },
  ],

  commonMistakes: [
    {
      title: 'Leaning too far too soon',
      description:
        'A bigger lean makes the exercise much harder, but that does not mean you should force it from the beginning. If you cannot control the full rep or your body position starts falling apart, reduce the lean and build your strength gradually.'
    },
    {
      title: 'Shifting backwards during the rep',
      description:
        'One of the easiest ways to make the exercise easier without realizing it is to start with your shoulders forward and then shift backwards as you lower yourself. Try to maintain roughly the same forward lean throughout the entire repetition.'
    },
    {
      title: 'Letting your shoulder blades collapse',
      description:
        'Do not simply hang between your shoulders at the top of the movement. Push the floor away and keep your upper back active. Learning to maintain strong scapular protraction is especially important if you are using this exercise to prepare for the planche.'
    },
    {
      title: 'Ignoring your wrists',
      description:
        'The forward lean puts considerably more pressure on your wrists than a regular push up. Increase the lean gradually and give your wrists time to adapt. If the floor position is uncomfortable, parallettes can be a useful option because they allow your wrists to stay in a more neutral position.'
    },
  ],

  relatedExercises: [
    'push-up',
    'planche-lean',
    'tuck-planche'
  ],

  faq: [
    {
      question: 'Are planche lean push ups good for learning the planche?',
      answer:
        'Yes. They are a useful way to build pushing strength in the forward-leaning position used during planche training. They should not completely replace static planche work, but combining planche leans with planche lean push ups can help you develop both straight-arm control and dynamic pushing strength.'
    },
    {
      question: 'How far forward should I lean?',
      answer:
        'Lean only as far as you can while keeping good form throughout the entire rep. Your shoulders should move past your hands, but there is no specific distance you need to reach. As you get stronger, gradually moving your shoulders further forward is an easy way to make the exercise harder.'
    },
    {
      question: 'Why do planche lean push ups feel so much harder than regular push ups?',
      answer:
        'Leaning forward shifts more of your bodyweight towards your hands and changes the leverage of the exercise. Your shoulders have to work much harder to support and move your body, which is why even a small forward lean can make the exercise feel dramatically harder than a regular push up.'
    },
    {
      question: 'Should I use the floor or parallettes?',
      answer:
        'Both are good options. Training on the floor requires more wrist extension, while parallettes allow you to keep your wrists in a more neutral position and can feel more comfortable when you start increasing the lean. Use whichever option lets you train consistently with good control.'
    },
  ],

  seo: {
    title:
      'Planche Lean Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the Planche Lean Push Up with proper technique, muscles worked, common mistakes and progressions to build planche pushing strength.',
  },

  imageUrl: '/images/exercises/lean-planche-push-up.png',
};
