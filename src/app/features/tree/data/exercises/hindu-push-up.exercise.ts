
import { Exercise } from '../../../../shared/models/exercise.model';

export const HINDU_PUSH_UP: Exercise = {
  id: 'hindu-push-up',
  name: 'Hindu Push Up',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'push',

  targetAreas: [
    'chest',
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'chest',
    'front-deltoids',
    'triceps'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'upper-back',
    'abdominals',
    'glutes',
    'forearms'
  ],

  equipment: ['floor'],

  description:
    'The Hindu Push Up is a dynamic bodyweight pushing exercise that combines a downward-facing pike position with a sweeping chest movement and an extended upper-body finish. It develops chest, shoulder, and triceps strength while challenging mobility, coordination, and body control.',

  overview:
    'Begin with your hands and feet on the floor, hips raised high, and body forming an inverted V shape. Bend your elbows and move your head and chest forward and downward, passing close to the floor in a smooth sweeping motion. Continue pushing forward until your chest rises, your arms extend, and your hips approach the ground. Return to the starting pike position by lifting your hips and moving your body backward. The movement should remain fluid and controlled, without collapsing through the shoulders or forcing excessive lower-back extension.',

  howTo: [
    {
      title: 'Start in a pike position',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your hands approximately shoulder-width apart and your feet on the floor. Raise your hips high to form an inverted V shape, keeping your arms extended and your shoulders active.'
    },
    {
      title: 'Lower your head and chest',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Bend your elbows and begin moving your upper body forward and downward. Guide your head and chest towards the floor while maintaining control through your shoulders.'
    },
    {
      title: 'Sweep forward',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Move your chest forward close to the ground, allowing your torso to travel between your hands. Keep the movement smooth rather than dropping abruptly onto the floor.'
    },
    {
      title: 'Extend into the finish',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press through your palms and straighten your arms as your chest rises and your hips lower towards the floor. Open your chest without forcing an excessive arch in your lower back.'
    },
    {
      title: 'Return to the pike',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Push through your hands, lift your hips, and shift your body backward to return to the inverted V position. Reset your alignment before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Dropping the chest too quickly',
      description:
        'Avoid collapsing towards the floor during the lowering phase. Control the descent through your shoulders, chest, and triceps while maintaining a smooth movement path.'
    },
    {
      title: 'Keeping the hips too high',
      description:
        'The Hindu Push Up requires the hips to lower as the chest travels forward. Keeping them elevated throughout the repetition prevents the full sweeping movement.'
    },
    {
      title: 'Excessive lower-back arching',
      description:
        'Do not force your spine into an uncomfortable extension at the finishing position. Raise your chest through controlled shoulder movement and use only a comfortable spinal range.'
    },
    {
      title: 'Shortening the sweeping motion',
      description:
        'Avoid performing a simple pike push-up followed by an abrupt hip drop. The chest should travel forward close to the floor in a continuous controlled arc.'
    },
    {
      title: 'Flaring the elbows excessively',
      description:
        'Keep your elbows moving through a comfortable path rather than pointing directly outwards. Excessive flaring can reduce control and increase shoulder discomfort.'
    },
    {
      title: 'Rushing the repetitions',
      description:
        'Do not use momentum to move rapidly between positions. Prioritize a smooth descent, controlled press, and deliberate return to the starting position.'
    },
  ],

  relatedExercises: [
    'push-up',
    'pike-push-up',
    'decline-push-up'
  ],

  faq: [
    {
      question: 'What is a Hindu Push Up?',
      answer:
        'A Hindu Push Up is a dynamic Push Up variation that begins in an inverted V position, moves the chest forward close to the floor, and finishes with the arms extended, chest raised, and hips lowered.'
    },
    {
      question: 'What muscles do Hindu Push Ups work?',
      answer:
        'Hindu Push Ups primarily work the chest, anterior deltoids, and triceps. The serratus anterior, upper back, abdominals, and other stabilizing muscles help control the movement and maintain body coordination.'
    },
    {
      question: 'Are Hindu Push Ups harder than regular Push Ups?',
      answer:
        'They can be more challenging because they require greater coordination, shoulder mobility, and control through multiple body positions. However, the difficulty depends on technique, mobility, and individual strength.'
    },
    {
      question: 'What is the difference between Hindu Push Ups and Dive Bomber Push Ups?',
      answer:
        'Both exercises use a sweeping movement from a pike position into an extended chest-up position. In a common distinction, Hindu Push Ups return to the starting pike by lifting the hips and shifting backward, while Dive Bomber Push Ups reverse the entire sweeping path during the return.'
    },
    {
      question: 'Do Hindu Push Ups improve shoulder mobility?',
      answer:
        'They can help develop active control through a range of shoulder positions when performed comfortably. However, the movement should not be forced through painful or restricted ranges.'
    },
    {
      question: 'How can I make Hindu Push Ups easier?',
      answer:
        'Reduce the depth of the sweeping movement, use a comfortable range of motion, or elevate your hands on a stable surface. Practice regular Push Ups and Pike Push Ups separately to build the necessary strength.'
    },
  ],

  seo: {
    title:
      'Hindu Push Up: Technique & Benefits | Treethenics',

    description:
      'Learn the Hindu Push Up with correct sweeping technique, muscles worked, shoulder mobility, common mistakes and progressions.',
  },

  imageUrl: '/images/exercises/hindu-push-up.png',
};
