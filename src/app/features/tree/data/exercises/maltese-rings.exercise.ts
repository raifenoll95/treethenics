import { Exercise } from '../../../../shared/models/exercise.model';

export const MALTESE_RINGS: Exercise = {
  id: 'maltese-rings',
  name: 'Maltese Rings',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 6,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'biceps'],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'biceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'latissimus-dorsi',
    'triceps',
    'forearms',
    'abdominals',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Maltese Rings is an elite straight-arm strength skill where you hold your entire body horizontally at approximately ring height while your arms extend wide beside you. The unstable rings and extreme shoulder leverage make it one of the most demanding static strength positions in gymnastics.',

  overview:
    'The Maltese Rings combines a horizontal body position with an extremely wide straight-arm support. Unlike a Ring Planche, your hands are not positioned directly beneath your torso: the rings move much farther out to the sides, dramatically increasing the leverage at the shoulders and arms. Build advanced straight-arm ring strength first, then use assisted Maltese positions, controlled negatives, and progressively less assistance to develop the full hold without sacrificing elbow lockout or body alignment.',

  howTo: [
    {
      title: 'Build advanced ring strength',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong Ring Support and Ring Planche progressions before attempting full Maltese loading. Your elbows should remain locked and you should be able to control the rings under significant straight-arm tension.'
    },
    {
      title: 'Learn the assisted position',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use bands, a counterweight, a spotter, or another form of assistance to practice the Maltese position. Keep your body straight while gradually moving the rings farther away from underneath your torso.'
    },
    {
      title: 'Lower towards ring height',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'With your elbows completely extended, lower your straight body towards horizontal as your arms move wider. Keep your hips aligned with your shoulders instead of allowing your legs to hang below the position.'
    },
    {
      title: 'Reduce the assistance',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Gradually decrease assistance while preserving the same body line and arm position. Control both rings symmetrically and avoid bending your elbows as the leverage becomes more demanding.'
    },
    {
      title: 'Hold the full Maltese',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Hold your body straight and approximately horizontal at ring height with both arms fully extended. Keep the rings controlled beside your body and maintain tension through your shoulders, arms, trunk, and legs.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a Ring Planche',
      description:
        'If the rings remain too close underneath your torso, the position becomes much closer to a Ring Planche. In the Maltese, the arms extend much farther out from the body, creating the characteristic wide support position.'
    },
    {
      title: 'Bending the elbows',
      description:
        'The Maltese is defined by straight-arm strength. Bending your elbows significantly changes the leverage and makes the position easier. Increase assistance instead of sacrificing elbow extension.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Keep your shoulders, hips, and legs approximately aligned horizontally. Dropping the hips shortens the effective lever and changes the skill, so use more assistance if you cannot maintain the body line.'
    },
    {
      title: 'Allowing the rings to drift unevenly',
      description:
        'The independent rings can move differently as fatigue builds. Avoid twisting your torso or allowing one arm to move significantly farther out than the other. Use enough assistance to maintain a symmetrical position.'
    },
  ],

  relatedExercises: [
    'full-planche-rings',
    'iron-cross',
    'maltese'
  ],

  faq: [
    {
      question: 'What is Maltese Rings?',
      answer:
        'Maltese Rings is a static gymnastics strength skill where you hold your straight body horizontally at approximately ring height while supporting yourself through two widely extended straight arms. The position is performed on gymnastics rings and requires exceptional straight-arm strength and ring control.'
    },
    {
      question: 'What muscles does Maltese Rings work?',
      answer:
        'The Maltese places very high demands on the anterior shoulders and chest, while the biceps and surrounding arm musculature help maintain the straight-arm position. The serratus, lats, triceps, forearms, core, and glutes contribute to controlling the rings and maintaining a rigid horizontal body line.'
    },
    {
      question: 'What is the difference between Maltese and Maltese Rings?',
      answer:
        'The body position is similar, but Maltese Rings is performed on two independently moving gymnastics rings. A Maltese performed on the floor or parallettes has a fixed support surface, while the rings add substantial stabilization demands and allow the hands to move freely relative to the body.'
    },
    {
      question: 'Is Maltese Rings harder than Full Planche Rings?',
      answer:
        'The Maltese generally creates a more extreme straight-arm lever because the rings are positioned much farther away from underneath the torso. A strong Full Planche Rings is therefore an excellent foundation, but the Maltese still requires specific preparation for its wider arm position.'
    },
    {
      question: 'How should I progress towards Maltese Rings?',
      answer:
        'Build advanced Ring Support and Ring Planche strength first, then introduce assisted Maltese holds and controlled negatives. Gradually reduce assistance while maintaining locked elbows, symmetrical rings, and a horizontal body line instead of progressing based only on hold duration.'
    },
  ],

  seo: {
    title:
      'Maltese Rings: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Maltese Rings with proper straight-arm technique, muscles worked, assisted progressions and common mistakes for this elite gymnastics strength hold.',
  },

  imageUrl: '/images/exercises/maltese-rings.png',
};
