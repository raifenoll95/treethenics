import { Exercise } from '../../../../shared/models/exercise.model';

export const IMPOSSIBLE_DIP: Exercise = {
  id: 'impossible-dip',
  name: 'Impossible Dip',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: true,
  category: 'push',

  targetAreas: ['triceps', 'shoulders'],

  primaryMuscles: [
    'triceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'latissimus-dorsi',
    'chest',
    'forearms',
    'abdominals'
  ],

  equipment: ['parallettes'],

  description:
    'The Impossible Dip is an advanced bent-arm strength skill performed on parallel bars. From a controlled forearm-supported position, you extend your elbows until your arms are locked while keeping your shoulders behind your elbows and avoiding momentum. The movement places an exceptional demand on the triceps and requires strong, well-prepared elbows.',

  overview:
    'Unlike a regular Dip, the Impossible Dip is dominated by elbow extension. Your shoulders remain behind your elbows instead of moving forward to make the transition easier. Build the movement gradually with backward-leaning support, partial repetitions, assisted presses, and slow negatives before attempting the full range. The goal is to press from forearm support to straight arms through pure controlled strength rather than using a swing or forward body shift.',

  howTo: [
    {
      title: 'Build your dip and support strength',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Develop strong parallel-bar support and controlled Dips first. Then practice leaning your body backward while keeping your hands secure, shoulders active, and elbows under control.'
    },
    {
      title: 'Practice assisted presses',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Use foot, band, or partner assistance to practice pressing from your forearms towards straight arms. Keep your shoulders behind your elbows instead of throwing your chest forward.'
    },
    {
      title: 'Build the negative',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Start from straight-arm support and slowly bend your elbows while leaning backward. Lower until both forearms make controlled contact with the bars instead of dropping onto them.'
    },
    {
      title: 'Press from the bottom',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'From a stable forearm-supported position, press firmly through your hands and extend your elbows. Keep your hips controlled and resist the temptation to swing your legs or move your shoulders forward.'
    },
    {
      title: 'Reach full lockout',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Continue extending both elbows until you return to a stable straight-arm support. A clean repetition finishes at lockout without bouncing, kicking, or converting the movement into a Russian Dip.'
    },
  ],

  commonMistakes: [
    {
      title: 'Throwing your shoulders forward',
      description:
        'Moving your shoulders aggressively forward makes the transition easier but changes the mechanics towards a Russian Dip. In a strict Impossible Dip, keep your shoulders behind your elbows throughout the press.'
    },
    {
      title: 'Bouncing from the forearms',
      description:
        'Do not crash onto the bars and use the rebound to begin the press. Lower under control, stabilize the bottom position, and initiate the ascent through muscular force.'
    },
    {
      title: 'Using leg momentum',
      description:
        'Swinging or kicking the legs can help you escape the hardest part of the movement. Keep your lower body controlled and use more assistance if you cannot initiate the press without momentum.'
    },
    {
      title: 'Rushing the full range',
      description:
        'The bottom position places very high demands on the triceps and elbows. Build depth progressively with partials, assisted repetitions, and negatives instead of repeatedly forcing maximal attempts.'
    },
  ],

  relatedExercises: [
    'dips',
    'korean-dip',
    'russian-dip'
  ],

  faq: [
    {
      question: 'What is an Impossible Dip?',
      answer:
        'An Impossible Dip is an advanced parallel-bar exercise where you press from forearm support to straight-arm support primarily through elbow extension. A strict repetition avoids swinging, leg drive, bouncing, and a large forward shoulder movement.'
    },
    {
      question: 'What muscles does the Impossible Dip work?',
      answer:
        'The triceps are the main force-producing muscles because the defining action is powerful elbow extension. The shoulders, lats, chest, forearms, and trunk also contribute to maintaining the backward body position and controlling the bars.'
    },
    {
      question: 'What is the difference between an Impossible Dip and a Russian Dip?',
      answer:
        'A Russian Dip uses a forward transition from the forearms back onto the hands, often with a noticeable weight shift or momentum. A strict Impossible Dip keeps the shoulders behind the elbows and presses upward mainly through elbow extension, making it much more demanding on the triceps.'
    },
    {
      question: 'How should I progress towards an Impossible Dip?',
      answer:
        'Build strong Dips and parallel-bar support first, then practice backward-leaning positions, assisted Impossible Dips, partial repetitions, and slow negatives. Gradually increase the range or reduce assistance while keeping the movement controlled and pain-free.'
    },
  ],

  seo: {
    title:
      'Impossible Dip: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Impossible Dip with proper technique, triceps-focused progressions, negatives, common mistakes and the difference between Impossible and Russian Dips.',
  },

  imageUrl: '/images/exercises/impossible-dip.png',
};
