
import { Exercise } from '../../../../shared/models/exercise.model';

export const DEAD_HANG: Exercise = {
  id: 'dead-hang',
  name: 'Dead Hang',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'biceps',
    'shoulders',
    'back',
    'core'
  ],

  primaryMuscles: [
    'forearms'
  ],

  secondaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps',
    'abdominals'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Dead Hang is a beginner static calisthenics exercise performed by hanging from a pull-up bar with both arms fully extended and the feet suspended above the ground. It develops grip endurance, forearm strength, and familiarity with overhead hanging positions, providing a foundation for Pull Ups and more advanced bar exercises.',

  overview:
    'Grip a secure pull-up bar with both hands approximately shoulder-width apart, using an overhand grip. Lift your feet off the ground and allow your body to hang vertically with your elbows fully extended. Let your shoulders rise naturally into a comfortable overhead position without forcing them into excessive elevation or maintaining a strong downward pull. Keep your body relaxed but controlled, avoiding unnecessary swinging. Maintain the position for a duration appropriate to your grip strength and shoulder comfort, then return your feet to the ground in a controlled manner. Beginners can use partial foot support to gradually build hanging tolerance.',

  howTo: [
    {
      title: 'Grip the bar',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand beneath a secure pull-up bar and grasp it with an overhand grip approximately shoulder-width apart. Wrap your thumbs around the bar and establish a firm, comfortable grip.'
    },
    {
      title: 'Lift your feet',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Transfer your bodyweight onto your hands and lift your feet off the ground. Keep your elbows fully extended and allow your body to settle into a vertical hanging position.'
    },
    {
      title: 'Allow natural shoulder elevation',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Let your shoulders move naturally upwards into a comfortable overhead position. Avoid actively pulling your shoulder blades down as you would during an Active Hang.'
    },
    {
      title: 'Maintain the hang',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Hold the position with a secure grip and straight arms. Breathe normally and minimize swinging while keeping your shoulders comfortable.'
    },
    {
      title: 'Finish with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Lower your feet onto the ground or a stable platform before releasing the bar. Avoid dropping suddenly or continuing the hold after your grip begins to fail.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Dead Hang is performed with straight arms. Avoid holding a partially flexed elbow position, which increases unnecessary muscular effort and changes the exercise.'
    },
    {
      title: 'Actively depressing the shoulders',
      description:
        'A passive Dead Hang allows the shoulders to rise naturally. Continuously pulling the shoulder blades down changes the movement into an Active Hang.'
    },
    {
      title: 'Swinging excessively',
      description:
        'Avoid kicking your legs or allowing uncontrolled body movement. Maintain a stable vertical position to focus on grip endurance and hanging control.'
    },
    {
      title: 'Forcing an uncomfortable shoulder position',
      description:
        'Do not force your shoulders into an extreme overhead range. Reduce the load with foot assistance if the hanging position causes discomfort or pain.'
    },
    {
      title: 'Holding until grip failure',
      description:
        'Avoid continuing until your fingers unexpectedly release the bar. End the hold while you can still maintain a secure grip and dismount safely.'
    },
    {
      title: 'Using an insecure bar',
      description:
        'Always check that the pull-up bar is stable and suitable for supporting your bodyweight before lifting your feet off the ground.'
    },
  ],

  relatedExercises: [
    'scapular-pull-up',
    'pull-up',
    'hanging-knee-raises',
    'hanging-leg-raise'
  ],

  faq: [
    {
      question: 'What is a Dead Hang?',
      answer:
        'A Dead Hang is a static exercise where the athlete hangs vertically from a pull-up bar with both arms fully extended and the feet off the ground, allowing the shoulders to settle into a comfortable overhead position.'
    },
    {
      question: 'What muscles do Dead Hangs work?',
      answer:
        'Dead Hangs primarily challenge the forearm and hand muscles responsible for maintaining grip. The shoulder girdle, upper back, and other stabilizing muscles also contribute to supporting the hanging position.'
    },
    {
      question: 'Are Dead Hangs good for beginners?',
      answer:
        'Yes. Dead Hangs are a useful introduction to hanging exercises and can help beginners build grip endurance before progressing to Pull Ups. Athletes who cannot support their full bodyweight can begin with their feet partially supported.'
    },
    {
      question: 'What is the difference between a Dead Hang and an Active Hang?',
      answer:
        'In a Dead Hang, the shoulders are allowed to elevate naturally while the arms remain straight. In an Active Hang, the athlete deliberately engages the shoulder girdle to depress the scapulae and slightly lift the body without bending the elbows.'
    },
    {
      question: 'How long should I hold a Dead Hang?',
      answer:
        'Start with a duration that allows a secure grip and comfortable shoulder position. Gradually increase the hold time as your endurance improves, rather than attempting maximum-duration hangs from the beginning.'
    },
    {
      question: 'Do Dead Hangs help with Pull Ups?',
      answer:
        'Yes. Dead Hangs develop grip endurance and familiarity with supporting bodyweight from a bar. However, additional pulling strength and scapular control are necessary to perform full Pull Ups.'
    },
    {
      question: 'Can Dead Hangs improve shoulder mobility?',
      answer:
        'Dead Hangs expose the shoulders to an overhead position and may help some athletes develop tolerance and control in that range. They should not be forced through pain and are not appropriate for every shoulder condition.'
    },
  ],

  seo: {
    title:
      'Dead Hang: Technique & Benefits | Treethenics',

    description:
      'Learn how to perform a Dead Hang with proper grip, shoulder positioning, common mistakes and progressions towards Scapular Pull Ups and Pull Ups.',
  },

  imageUrl: '/images/exercises/dead-hang.png',
};
