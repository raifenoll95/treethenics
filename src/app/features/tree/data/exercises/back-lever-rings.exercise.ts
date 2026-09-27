import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER_RINGS: Exercise = {
  id: 'back-lever-rings',
  name: 'Back Lever Rings',
  movementType: 'static',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'pull',

  targetAreas: ['back', 'shoulders', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'biceps',
    'rear-deltoids'
  ],

  secondaryMuscles: [
    'chest',
    'abdominals',
    'lower-back',
    'forearms'
  ],

  equipment: ['rings'],

  description:
    'The back lever on rings is an advanced static skill where you hold your entire body horizontally underneath the rings with your arms straight and your body facing the floor. It requires strong shoulders, biceps, back, and full-body tension while your arms support your weight behind your torso. The freedom of the rings allows your hands to rotate naturally, but also requires you to control each ring independently.',

  overview:
    'The back lever is built through straight-arm strength, shoulder control, and progressively longer body positions. Gymnastics rings are a great place to learn the skill because your hands can rotate naturally as you move through the inverted hang and into the lever. Start by becoming comfortable with Skin the Cat and German Hang positions, then progress through tuck, advanced tuck, and straddle variations before attempting the full back lever. Never force the shoulder extension required for the skill if the position feels painful or unstable.',

  howTo: [
    {
      title: 'Master the Skin the Cat',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start hanging from the rings and bring your legs through your arms into an inverted position. Slowly rotate backwards into a comfortable German Hang and return with control. This teaches you how to move through the shoulder range used in the back lever before adding harder static holds.'
    },
    {
      title: 'Build your tuck back lever',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'From an inverted hang, tuck your knees tightly towards your chest and lower your body until your back is roughly parallel to the floor. Keep your elbows completely straight and actively control the rings instead of simply hanging from your shoulders.'
    },
    {
      title: 'Open into an advanced tuck',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Gradually move your knees further away from your chest and open your hips while maintaining the horizontal position. Keep your arms locked and your core tight. If your hips start falling below your shoulders, return to a tighter tuck.'
    },
    {
      title: 'Progress through the straddle',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extend your legs behind you and spread them apart to create a straddle back lever. Keep your knees straight, hips extended, and body roughly parallel to the floor. Gradually narrow your straddle as your straight-arm strength improves.'
    },
    {
      title: 'Hold the full back lever',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Extend both legs completely and bring them together. Keep your elbows locked, squeeze your glutes and core, and maintain a straight line from your shoulders through your hips to your feet. Hold your body parallel to the floor without letting your hips drop or your lower back arch.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending your elbows',
      description:
        'The back lever is a straight-arm skill. Keep your elbows completely extended throughout the hold. If you need to bend them to stay horizontal, shorten the lever and return to an easier progression.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Dropping your hips changes the position and usually means the progression is currently too difficult. Keep your glutes and core engaged and aim to hold your shoulders, hips, and feet in one horizontal line.'
    },
    {
      title: 'Arching your lower back',
      description:
        'Do not create the appearance of a horizontal lever by excessively arching your lower back. Keep your ribs controlled, squeeze your glutes, and maintain tension through your entire body so the position stays as straight as possible.'
    },
    {
      title: 'Forcing the shoulder position',
      description:
        'The back lever places your shoulders under load in a large amount of extension. Do not drop aggressively into a German Hang or force a range that feels painful or unstable. Build your mobility and strength gradually through Skin the Cat and easier lever positions.'
    },
  ],

  relatedExercises: [
    'tuck-back-lever',
    'straddle-back-lever',
    'back-lever-pull-up'
  ],

  faq: [
    {
      question: 'Is the back lever easier on rings or a bar?',
      answer:
        'Rings allow your hands to rotate naturally as you enter and hold the back lever, which can make the grip and shoulder position feel more comfortable. However, each ring can also move independently, so you have to stabilize them throughout the skill. Neither version is automatically easier for everyone.'
    },
    {
      question: 'What should I learn before the back lever on rings?',
      answer:
        'Start by becoming comfortable hanging and moving on rings, then learn a controlled Skin the Cat and a comfortable German Hang. From there, build the back lever through tuck, advanced tuck, and longer lever positions rather than jumping directly to the full hold.'
    },
    {
      question: 'Should my arms be straight during a back lever?',
      answer:
        'Yes. A standard back lever is performed with the elbows fully extended. Bending your elbows changes the exercise and reduces the straight-arm strength requirement, so use an easier body position if you cannot maintain locked elbows.'
    },
    {
      question: 'How do I know when to move to a harder back lever progression?',
      answer:
        'Move on when you can repeatedly enter your current progression, hold it with straight arms and a controlled horizontal body line, and exit without collapsing or using momentum. Clean position and control are more useful than chasing a specific hold time.'
    },
  ],

  seo: {
    title:
      'Back Lever on Rings: Technique & Progressions | Treethenics',

    description:
      'Learn the Back Lever on Rings with proper technique, common mistakes and progressions from Skin the Cat and tuck holds to the full back lever.',
  },

  imageUrl: '/images/exercises/back-lever-rings.png',
};
