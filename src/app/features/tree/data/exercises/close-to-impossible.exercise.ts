import { Exercise } from '../../../../shared/models/exercise.model';

export const CLOSE_TO_IMPOSSIBLE: Exercise = {
  id: 'close-to-impossible',
  name: 'Close To Impossible',
  movementType: 'static',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'shoulders',
    'back',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'rear-deltoids',
    'forearms'
  ],

  secondaryMuscles: [
    'upper-back',
    'biceps',
    'abdominals',
    'obliques'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Close To Impossible, or CTI, is an elite straight-arm bar hold where the arms remain approximately parallel to the ground while the body extends downward at an oblique angle. The position creates an extreme leverage challenge through the shoulders, back, forearms, wrists, and grip.',

  overview:
    'Grip the bar and position your body below and away from it while keeping both elbows completely locked. Extend your arms until they are approximately parallel to the floor and maintain a rigid body line at an oblique angle beneath the bar. The goal is not to imitate the theoretical perfectly vertical CTI, but to maintain the accepted achievable form with the center of mass positioned beneath the bar. Grip choice and width can significantly change the mechanics, with Wide CTI and Omni Grip Close Grip CTI being two recognized variations.',

  howTo: [
    {
      title: 'Establish your grip',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Take a secure grip on the bar and prepare your shoulders, wrists, and forearms for the extreme straight-arm leverage of the position.'
    },
    {
      title: 'Move away from the bar',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Shift your body away from the bar while keeping your elbows locked. Your shoulders should move behind and below the hands as the arms approach a horizontal position.'
    },
    {
      title: 'Straighten the arms',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Reach a position where both arms are completely straight and approximately parallel to the floor. Maintain strong tension through the shoulders, back, wrists, and grip.'
    },
    {
      title: 'Set the body angle',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Keep your body straight while allowing it to remain oblique beneath the bar. The hips and legs should follow the torso instead of folding to artificially shorten the lever.'
    },
    {
      title: 'Hold the CTI',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Maintain the position without bending the elbows or changing your body shape. Keep the arms close to horizontal and the body rigid while preserving a sustainable position beneath the bar.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'Straight arms are fundamental to the CTI. Bending the elbows substantially changes the leverage and makes the position considerably easier.'
    },
    {
      title: 'Trying to stay perfectly vertical',
      description:
        'Do not confuse the accepted CTI with its idealized vertical version. A perfectly vertical body with horizontal arms places the center of mass outside the support line and represents the theoretical form generally considered mechanically unrealistic.'
    },
    {
      title: 'Letting the arms rise',
      description:
        'If the hands-to-shoulders line becomes strongly diagonal instead of remaining close to horizontal, the leverage changes significantly. Keep the arms as close to parallel with the ground as your variation requires.'
    },
    {
      title: 'Piking the body',
      description:
        'Do not fold significantly at the hips to bring your center of mass closer to the bar. Maintain a straight line through the torso and legs while using the required oblique body angle.'
    },
    {
      title: 'Relying on excessive grip assistance',
      description:
        'Some CTI variations intentionally use an Omni Grip, but excessive wrist or forearm support can dramatically change the leverage. Keep the amount of grip assistance consistent with the variation you are performing.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'victorian',
    'straight-arm-touch'
  ],

  faq: [
    {
      question: 'What is the Close To Impossible?',
      answer:
        'The Close To Impossible, commonly called CTI, is an extreme straight-arm bar hold where the arms are approximately horizontal and the body remains straight at an oblique angle beneath the bar.'
    },
    {
      question: 'Is the Close To Impossible actually impossible?',
      answer:
        'The idealized version with a perfectly vertical body and horizontal arms is generally considered mechanically unrealistic because the body center of mass would not remain beneath the bar. Practical CTI variations solve this by placing the body at an oblique angle or changing the grip and hand spacing.'
    },
    {
      question: 'Why is the body angled during a real CTI?',
      answer:
        'The oblique body position moves the athlete center of mass beneath the bar, creating a position that can actually be balanced. The closer the body approaches the theoretical vertical position while the arms remain horizontal, the more extreme the leverage becomes.'
    },
    {
      question: 'Do the arms have to be straight in a CTI?',
      answer:
        'Yes. Locked elbows are one of the defining characteristics of a clean CTI. Bending the arms significantly reduces the leverage and changes the skill.'
    },
    {
      question: 'Are there different versions of the CTI?',
      answer:
        'Yes. Wide CTI and Close Grip CTI using an Omni Grip are two notable variations. Grip width, wrist position, body angle, and the amount of Omni Grip can substantially change the difficulty and appearance of the skill.'
    },
  ],

  seo: {
    title:
      'Close To Impossible (CTI): Technique & Form | Treethenics',

    description:
      'Learn the Close To Impossible, an elite straight-arm calisthenics hold with horizontal arms and an oblique body, including proper CTI form, muscles and variations.',
  },

  imageUrl: '/images/exercises/close-to-impossible.png',
};
