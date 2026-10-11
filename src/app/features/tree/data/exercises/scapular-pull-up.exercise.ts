
import { Exercise } from '../../../../shared/models/exercise.model';

export const SCAPULAR_PULL_UP: Exercise = {
  id: 'scapular-pull-up',
  name: 'Scapular Pull Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'pull',

  targetAreas: [
    'back',
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'serratus-anterior',
    'forearms',
    'abdominals',
    'triceps'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Scapular Pull Up is a beginner bodyweight pulling exercise that develops scapular control and shoulder stability while hanging from a pull-up bar. By moving the shoulder blades without bending the elbows, the athlete learns to engage the muscles responsible for controlling the shoulder girdle during hanging and pulling movements.',

  overview:
    'Begin hanging from a pull-up bar with an overhand grip approximately shoulder-width apart and your elbows fully extended. Allow your shoulders to rise naturally into a comfortable overhead position. Without bending your elbows, engage the muscles around your shoulder blades to draw your shoulders down and slightly back, lifting your body a small distance. Pause briefly in the active hanging position, then slowly release the contraction and return to the starting hang. Keep your torso controlled and avoid swinging or using momentum. The movement is intentionally small and should come primarily from the shoulder girdle rather than the elbows.',

  howTo: [
    {
      title: 'Establish a dead hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Grip a pull-up bar with your palms facing away from you and your hands approximately shoulder-width apart. Hang with your elbows fully extended and allow your shoulders to move into a comfortable overhead position.'
    },
    {
      title: 'Engage your core',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Keep your legs controlled and engage your abdominals to minimize swinging. Maintain straight elbows throughout the entire movement.'
    },
    {
      title: 'Activate your shoulder blades',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Draw your shoulder blades down with a small, natural backward movement. Keep your arms straight and allow your torso to rise slightly without performing a conventional Pull Up.'
    },
    {
      title: 'Reach an active hang',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Hold the active shoulder position briefly while keeping your neck relaxed and elbows extended. Focus on controlled scapular movement rather than maximizing the height of the lift.'
    },
    {
      title: 'Return to the starting hang',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Slowly release the scapular contraction and allow your shoulders to rise into the starting position. Maintain control and avoid dropping abruptly before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the elbows',
      description:
        'The Scapular Pull Up is performed with straight arms. Bending your elbows turns the exercise into a partial Pull Up and reduces the focus on scapular control.'
    },
    {
      title: 'Using momentum',
      description:
        'Avoid swinging your legs or jerking your torso to create movement. The body should rise slightly through controlled activation of the shoulder girdle.'
    },
    {
      title: 'Exaggerating the movement',
      description:
        'Scapular Pull Ups have a naturally small range of motion. Do not force your shoulders into an excessive position to increase the height of the lift.'
    },
    {
      title: 'Shrugging during the active phase',
      description:
        'Avoid pulling your shoulders upwards towards your ears when trying to lift your body. Focus on controlled scapular depression during the active phase.'
    },
    {
      title: 'Arching the lower back excessively',
      description:
        'Maintain core tension and avoid creating the movement by arching your spine. The primary motion should occur around the shoulder blades.'
    },
    {
      title: 'Dropping into the bottom position',
      description:
        'Do not release the active hang abruptly. Return gradually to a comfortable overhead position while maintaining control of your shoulders.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'australian-pull-up',
    'front-lever',
    'muscle-up'
  ],

  faq: [
    {
      question: 'What is a Scapular Pull Up?',
      answer:
        'A Scapular Pull Up is a hanging exercise performed by moving the shoulder blades while keeping the elbows straight. The athlete transitions between a relaxed overhead hang and an active shoulder position without performing a full Pull Up.'
    },
    {
      question: 'What muscles do Scapular Pull Ups work?',
      answer:
        'Scapular Pull Ups primarily train muscles involved in scapular control, including the lower trapezius and latissimus dorsi. Other shoulder stabilizers, upper-back muscles, and forearm muscles assist throughout the movement.'
    },
    {
      question: 'Should my elbows bend during Scapular Pull Ups?',
      answer:
        'No. The elbows should remain fully extended throughout the exercise. The movement comes from the shoulder blades rather than elbow flexion.'
    },
    {
      question: 'Are Scapular Pull Ups good for beginners?',
      answer:
        'Yes. They help beginners develop hanging strength, scapular awareness, and shoulder control before progressing to more demanding pulling exercises.'
    },
    {
      question: 'Do Scapular Pull Ups help with regular Pull Ups?',
      answer:
        'Yes. They improve control of the shoulder girdle during hanging movements and can help athletes learn to initiate a Pull Up with coordinated shoulder activation.'
    },
    {
      question: 'Can Scapular Pull Ups help with Front Lever training?',
      answer:
        'Yes. Scapular control is important for Front Lever training, although the shoulder position and force demands differ. Scapular Pull Ups provide a useful foundation but do not replace specific Front Lever progressions.'
    },
    {
      question: 'How high should I lift my body?',
      answer:
        'Only a small amount of vertical movement is necessary. Focus on drawing the shoulder blades down while keeping your arms straight instead of trying to lift your chin towards the bar.'
    },
  ],

  seo: {
    title:
      'Scapular Pull Up: Technique & Benefits | Treethenics',

    description:
      'Learn the Scapular Pull Up with correct straight-arm technique, scapular activation, muscles worked, common mistakes and progressions towards Pull Ups.',
  },

  imageUrl: '/images/exercises/scapular-pull-up.png',
};
