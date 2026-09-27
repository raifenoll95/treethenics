import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_BENT_PLANCHE: Exercise = {
  id: 'one-arm-bent-planche',
  name: 'One Arm Elbow Planche',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'chest',
    'triceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'obliques',
    'forearms',
    'upper-back'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The One Arm Bent Planche is an advanced unilateral balance and strength skill where you hold your body approximately horizontal using one bent supporting arm. Unlike a One Arm Elbow Lever, your torso does not rest on your elbow, so the supporting shoulder, chest, and triceps must actively carry your bodyweight.',

  overview:
    'The One Arm Bent Planche combines the horizontal body position of a Bent Arm Planche with the balance and unilateral loading of a One Arm Planche. Bending the supporting arm shortens the effective leverage compared with a straight-arm One Arm Planche, making it a useful bridge towards the full skill. Start with a strong Bent Arm Planche, then progressively shift more weight onto one side using assisted and straddle variations before removing the second hand completely.',

  howTo: [
    {
      title: 'Master the Bent Arm Planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop a controlled two-arm Bent Arm Planche with your body horizontal and your elbows beside your torso. Make sure your body is supported by muscular effort rather than resting on your elbows.'
    },
    {
      title: 'Shift towards one arm',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From the bent-arm position, gradually shift your center of mass over one supporting hand. Use a wide straddle to reduce the balance and leverage demands while learning the unilateral position.'
    },
    {
      title: 'Reduce assistance',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep the second hand on fingertips, a raised surface, or another light support while transferring progressively more bodyweight onto the bent supporting arm.'
    },
    {
      title: 'Remove the free hand',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Once your center of mass is securely positioned over the supporting hand, gradually remove the assisting hand. Allow the torso to rotate slightly as needed while keeping the hips and legs controlled.'
    },
    {
      title: 'Clean the position',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Work towards a stable horizontal hold with one bent supporting arm and no contact from the free hand. Gradually improve your body line and reduce unnecessary rotation without sacrificing control.'
    },
  ],

  commonMistakes: [
    {
      title: 'Resting the torso on the elbow',
      description:
        'If your elbow presses into your abdomen or hip and acts as a shelf, you are performing a One Arm Elbow Lever rather than a One Arm Bent Planche. Keep the elbow beside the torso and support the position actively through the arm and shoulder.'
    },
    {
      title: 'Removing the second hand too early',
      description:
        'The difficult part is not simply lifting your free hand but positioning your center of mass over the supporting arm. Use fingertip or elevated-hand assistance until you can progressively unload the second arm without falling.'
    },
    {
      title: 'Letting the hips drop',
      description:
        'Dropping the hips dramatically changes the horizontal position. Use a straddle, shorter lever, or more assistance if necessary so you can keep your hips approximately level with your shoulders.'
    },
    {
      title: 'Trying to stay perfectly square',
      description:
        'A unilateral planche naturally requires changes in weight distribution and can involve some sideways body rotation, especially while learning. Prioritize balance and a controlled horizontal position before trying to eliminate every visible asymmetry.'
    },
  ],

  relatedExercises: [
    'bent-arm-planche',
    'one-arm-planche',
    '90-degree-push-up'
  ],

  faq: [
    {
      question: 'What is a One Arm Bent Planche?',
      answer:
        'It is a unilateral version of the Bent Arm Planche where your body is held approximately horizontal using one bent supporting arm. The free arm does not touch the floor and your torso remains unsupported by the elbow.'
    },
    {
      question: 'Is a One Arm Bent Planche the same as a One Arm Elbow Lever?',
      answer:
        'No. In a One Arm Elbow Lever, the supporting elbow presses into the torso and provides a physical shelf for the body. In a One Arm Bent Planche, the torso does not rest on the elbow, so the position requires much greater active pushing strength.'
    },
    {
      question: 'Is One Arm Bent Planche easier than One Arm Planche?',
      answer:
        'Bending the supporting arm generally reduces the leverage compared with the straight-arm One Arm Planche and can make it easier to position your center of mass over the hand. However, it still requires exceptional unilateral pushing strength and balance.'
    },
    {
      question: 'Should I learn Bent Arm Planche first?',
      answer:
        'Yes. A strong two-arm Bent Arm Planche gives you the horizontal body control and bent-arm pushing strength needed for the unilateral variation. From there, progressively shift weight to one side and reduce assistance from the opposite hand.'
    },
    {
      question: 'How do I progress towards a One Arm Bent Planche?',
      answer:
        'Start with a solid Bent Arm Planche, then practice unilateral weight shifts, straddle variations, fingertip-assisted holds, and progressively lighter assistance. Remove the second hand only when you can keep your center of mass controlled over the supporting arm.'
    },
  ],

  seo: {
    title:
      'One Arm Bent Planche: Technique & Progressions | Treethenics',

    description:
      'Learn the One Arm Bent Planche with proper technique, muscles worked, assisted progressions and common mistakes for this advanced unilateral planche skill.',
  },

  imageUrl: '/images/exercises/one-arm-elbow-lever.png',
};
