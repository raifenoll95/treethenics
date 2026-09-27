import { Exercise } from '../../../../shared/models/exercise.model';

export const MALTESE: Exercise = {
  id: 'maltese',
  name: 'Maltese',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'biceps'],

  primaryMuscles: [
    'chest',
    'front-deltoids',
    'biceps'
  ],

  secondaryMuscles: [
    'latissimus-dorsi',
    'serratus-anterior',
    'upper-back',
    'forearms',
    'abdominals',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Maltese is an elite straight-arm rings skill where you hold your entire body horizontally with your arms extended wide to the sides. Compared with a Ring Planche, the wider arm position creates a much more demanding lever through the shoulders and requires exceptional chest, shoulder, biceps, and straight-arm ring strength.',

  overview:
    'The Maltese is not simply a wider Planche. On rings, your body remains horizontal while your straight arms extend far out to the sides and the rings stay under control beside your body. Build a strong Ring Planche and advanced straight-arm ring strength first, then develop the Maltese with assisted holds, Maltese leans, partial positions, and controlled negatives. Reduce assistance gradually rather than repeatedly attempting the unsupported position before your shoulders and elbows are prepared for the leverage.',

  howTo: [
    {
      title: 'Build your ring foundation',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong straight-arm support and Ring Planche control before specializing in the Maltese. Your elbows should remain locked and the rings controlled under significant forward and lateral loading.'
    },
    {
      title: 'Practice assisted Maltese positions',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use bands, a counterweight, a spotter, or foot assistance to practice the Maltese body position at reduced intensity. Keep your arms straight and gradually move them farther away from your torso.'
    },
    {
      title: 'Increase the arm width',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Progressively widen your support while keeping your body horizontal. Avoid bending your elbows or raising your torso to compensate as the leverage becomes more difficult.'
    },
    {
      title: 'Reduce the assistance',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Use less assistance while maintaining the same straight-arm position. Keep your chest, shoulders, and arms actively resisting the rings instead of allowing them to drift uncontrollably outward.'
    },
    {
      title: 'Hold the full Maltese',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Hold your body horizontal with your legs straight and together while both elbows remain completely extended. Keep the rings stable, maintain full-body tension, and finish the attempt when you can no longer preserve the position.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a Ring Planche',
      description:
        'If your hands move too close underneath your body, the position becomes much closer to a Ring Planche. The defining challenge of the Maltese is maintaining the horizontal body while the straight arms are extended much farther out to the sides.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Maltese is a straight-arm strength skill. Bending your elbows significantly reduces the lever and changes the exercise. Increase assistance rather than forcing an unsupported hold with bent arms.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Do not compensate for insufficient upper-body strength by allowing your hips and legs to hang below your shoulders. Use enough assistance to maintain a horizontal body line from shoulders through feet.'
    },
    {
      title: 'Progressing the width too quickly',
      description:
        'Moving the rings farther from your body rapidly increases the straight-arm demand. Increase the width and reduce assistance gradually so your shoulders and elbows can adapt to the position.'
    },
  ],

  relatedExercises: [
    'full-planche-rings',
    'iron-cross',
    'inverted-cross'
  ],

  faq: [
    {
      question: 'What is the Maltese?',
      answer:
        'The Maltese is an advanced static rings skill where your body is held horizontally while both straight arms extend widely out to the sides. It combines a horizontal body position with an extremely demanding straight-arm support angle.'
    },
    {
      question: 'What muscles does the Maltese work?',
      answer:
        'The Maltese places enormous demands on the chest and anterior shoulders while the biceps and surrounding arm musculature help maintain the straight-arm position. The lats, upper back, serratus, forearms, core, and glutes contribute to stabilizing the rings and maintaining the horizontal body line.'
    },
    {
      question: 'What is the difference between a Maltese and a Planche?',
      answer:
        'Both skills hold the body horizontally with straight arms, but in a Planche the hands remain much closer beneath the body. In a Maltese the arms extend much farther out to the sides, greatly increasing the shoulder lever and straight-arm strength requirement.'
    },
    {
      question: 'Should I learn the Full Planche before the Maltese?',
      answer:
        'A strong Full Planche is an excellent foundation, but the Maltese still requires specific preparation because the much wider arm position changes the leverage. On rings, rebuild the skill with assisted Maltese positions and progressively wider straight-arm holds rather than assuming Planche strength will transfer automatically.'
    },
    {
      question: 'How should I progress towards the Maltese?',
      answer:
        'Build strong straight-arm ring support and Ring Planche strength first. Then use Maltese leans, assisted holds, partial positions, and controlled negatives. Gradually move the arms farther from the body and reduce assistance while keeping the elbows locked and the body horizontal.'
    },
  ],

  seo: {
    title:
      'Maltese: Technique, Muscles & Ring Progressions | Treethenics',

    description:
      'Learn the Maltese on rings with proper straight-arm technique, muscles worked, assisted progressions and common mistakes for this elite gymnastics strength skill.',
  },

  imageUrl: '/images/exercises/maltese.png',
};
