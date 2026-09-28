import { Exercise } from '../../../../shared/models/exercise.model';

export const SKIN_THE_CAT: Exercise = {
  id: 'skin-the-cat',
  name: 'Skin the Cat',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 2,
  showInTree: true,
  category: 'pull',

  targetAreas: ['shoulders', 'back', 'core'],

  primaryMuscles: [
    'front-deltoids',
    'latissimus-dorsi',
    'abdominals'
  ],

  secondaryMuscles: [
    'biceps',
    'chest',
    'upper-back',
    'forearms'
  ],

  equipment: ['rings', 'pull-up-bar'],

  description:
    'Skin the Cat is a controlled rotational exercise where you move from a hanging position through an inverted tuck and into a German Hang before reversing the movement. It combines pulling strength, core compression, grip control, and loaded shoulder extension through a large range of motion.',

  overview:
    'Skin the Cat is an important foundation for advanced straight-arm skills such as the Back Lever. Start from a hang, tuck your knees towards your chest, rotate your hips backwards through your arms, and gradually lower into a comfortable German Hang. Then reverse the movement under control. Do not chase maximum shoulder extension immediately. Build the range progressively and use low rings or foot assistance if you cannot enter and leave the bottom position safely.',

  howTo: [
    {
      title: 'Start from a hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Hang from the rings or bar with a secure grip. Keep your movement controlled and make sure you have enough space for your legs to pass through your arms.'
    },
    {
      title: 'Tuck and invert',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bring your knees towards your chest and lift your hips above your shoulders. Continue rotating backwards until your legs pass between and behind your arms.'
    },
    {
      title: 'Lower into the German Hang',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Slowly lower your hips and legs behind you while keeping your elbows straight. Descend only as far as your shoulders can comfortably control the loaded extension position.'
    },
    {
      title: 'Reverse the movement',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Pull out of the German Hang by lifting your hips and bringing your knees back towards your chest. Rotate through the inverted position without using a sudden swing.'
    },
    {
      title: 'Return to the hang',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Pass your legs back through your arms and lower them under control until you return to the starting hang. Maintain your grip and shoulder control throughout the entire repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Dropping into the German Hang',
      description:
        'Do not let gravity suddenly pull you into your deepest shoulder-extension position. Lower gradually and stop at a range that you can actively control.'
    },
    {
      title: 'Forcing shoulder range',
      description:
        'More depth is not automatically better. Loaded shoulder extension should be developed progressively, especially if the German Hang position is new to you.'
    },
    {
      title: 'Bending the elbows at the bottom',
      description:
        'Keep your elbows straight as you enter the German Hang. If you need to bend them to tolerate the position, reduce the depth or use foot assistance while developing the required mobility.'
    },
    {
      title: 'Using momentum to return',
      description:
        'Swinging or kicking your legs can hide a lack of strength when exiting the bottom position. Use a tighter tuck or assistance and learn to reverse the movement under control.'
    },
  ],

  relatedExercises: [
    'german-hang',
    'back-lever',
    'hefesto'
  ],

  faq: [
    {
      question: 'What is Skin the Cat?',
      answer:
        'Skin the Cat is a rotational gymnastics and calisthenics exercise where you move from a hang through an inverted position into a German Hang and then reverse the movement. It develops shoulder mobility, pulling control, core compression, and familiarity with loaded shoulder extension.'
    },
    {
      question: 'Is Skin the Cat the same as a German Hang?',
      answer:
        'No. The German Hang is the static bottom position where your arms are extended behind your torso. Skin the Cat is the complete movement used to enter that position and, in a full repetition, return from it.'
    },
    {
      question: 'What muscles does Skin the Cat work?',
      answer:
        'The shoulders, lats, and core help control the rotation and return from the bottom position. The biceps, chest, upper back, and forearms also contribute to straight-arm shoulder control, grip, and stability throughout the movement.'
    },
    {
      question: 'Is Skin the Cat useful for the Back Lever?',
      answer:
        'Yes. Skin the Cat introduces the loaded shoulder-extension position used in Back Lever training and teaches you to enter and leave it under control. It is an excellent foundation, although Back Lever strength still requires its own specific progressions.'
    },
    {
      question: 'How do I make Skin the Cat easier?',
      answer:
        'Use low rings so your feet can assist, keep your body in a tight tuck, and limit how deeply you descend into the German Hang. Gradually reduce assistance and increase the range only as your shoulder mobility and pulling control improve.'
    },
  ],

  seo: {
    title:
      'Skin the Cat: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn Skin the Cat with proper technique, German Hang control, muscles worked, shoulder mobility progressions and common mistakes.',
  },

  imageUrl: '/images/exercises/skin-the-cat.png',
};
