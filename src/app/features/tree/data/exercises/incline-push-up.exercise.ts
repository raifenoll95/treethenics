
import { Exercise } from '../../../../shared/models/exercise.model';

export const INCLINE_PUSH_UP: Exercise = {
  id: 'incline-push-up',
  name: 'Incline Push Up',
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
    'triceps',
    'front-deltoids'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'abdominals',
    'obliques',
    'forearms'
  ],

  equipment: ['weight-bench'],

  description:
    'The Incline Push Up is a beginner-friendly bodyweight pushing exercise performed with the hands on an elevated surface and the feet on the ground. The elevated position reduces the amount of bodyweight supported by the arms, making it an effective progression towards the standard Push Up.',

  overview:
    'Place your hands approximately shoulder-width apart on a stable elevated surface such as a bench or low bar. Walk your feet backwards until your body forms a straight inclined line from head to heels. Brace your core and bend your elbows to lower your chest towards the surface while keeping your shoulders controlled. Push through your palms to extend your arms and return to the starting position. Begin with a higher surface if necessary, then gradually reduce the elevation as your pushing strength improves.',

  howTo: [
    {
      title: 'Choose an elevated surface',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Stand facing a stable bench or elevated platform. Place your hands approximately shoulder-width apart and ensure the surface cannot move during the exercise.'
    },
    {
      title: 'Establish a straight body line',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Walk your feet backwards until your body forms a straight inclined line from your shoulders to your heels. Keep your legs extended and engage your core and glutes.'
    },
    {
      title: 'Lower your chest',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Bend your elbows and slowly lower your chest towards the elevated surface. Allow your elbows to travel slightly backwards rather than flaring directly out to the sides.'
    },
    {
      title: 'Push away from the surface',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Press firmly through your palms and extend your elbows to raise your body. Maintain a stable torso and avoid pushing your hips upwards separately.'
    },
    {
      title: 'Return to the start',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Finish with your arms extended and your body aligned from head to heels. Maintain control before beginning the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips sag',
      description:
        'Allowing your hips to drop creates excessive lower-back extension. Keep your abdominals and glutes engaged to maintain a straight body line.'
    },
    {
      title: 'Raising the hips',
      description:
        'Avoid pushing your hips upwards into a pike position. Your shoulders, hips, and ankles should remain approximately aligned throughout the movement.'
    },
    {
      title: 'Flaring the elbows excessively',
      description:
        'Do not allow your elbows to point directly outwards at shoulder height. Use a comfortable elbow angle and keep your shoulders controlled during the descent.'
    },
    {
      title: 'Using an unstable surface',
      description:
        'Avoid benches, chairs, or other objects that can slide or tip over. Always choose a secure support capable of safely holding your bodyweight.'
    },
    {
      title: 'Performing shallow repetitions',
      description:
        'Lower your chest towards the elevated surface through a comfortable, controlled range rather than stopping after only a small elbow bend.'
    },
    {
      title: 'Choosing an elevation that is too low',
      description:
        'If you cannot maintain proper alignment or control the descent, use a higher surface to reduce the resistance before progressing.'
    },
  ],

  relatedExercises: [
    'knee-push-up',
    'push-up',
    'decline-push-up'
  ],

  faq: [
    {
      question: 'What is an Incline Push Up?',
      answer:
        'An Incline Push Up is a Push Up variation performed with the hands on an elevated surface and the feet on the floor. The incline reduces the load on the upper body compared with a standard Push Up.'
    },
    {
      question: 'What muscles do Incline Push Ups work?',
      answer:
        'Incline Push Ups primarily work the pectorals, triceps, and anterior deltoids. The serratus anterior and core muscles help stabilize the shoulders and maintain body alignment.'
    },
    {
      question: 'Are Incline Push Ups easier than regular Push Ups?',
      answer:
        'Yes. Raising the hands reduces the proportion of bodyweight supported by the arms. A higher surface generally makes the exercise easier, while a lower surface makes it more challenging.'
    },
    {
      question: 'Are Incline Push Ups good for beginners?',
      answer:
        'Yes. They allow beginners to practice the full Push Up movement with adjustable resistance, making them a useful way to build strength and technique before attempting floor Push Ups.'
    },
    {
      question: 'How can I make Incline Push Ups harder?',
      answer:
        'Gradually lower the height of the supporting surface while maintaining full range of motion and a straight body line. Eventually, progress to standard Push Ups on the floor.'
    },
    {
      question: 'What is the difference between Incline and Decline Push Ups?',
      answer:
        'Incline Push Ups elevate the hands and generally reduce upper-body loading. Decline Push Ups elevate the feet and generally increase the load on the shoulders and upper body.'
    },
  ],

  seo: {
    title:
      'Incline Push Up: Technique & Progression | Treethenics',

    description:
      'Learn the Incline Push Up with correct technique, muscles worked, common mistakes and progressions towards standard floor Push Ups.',
  },

  imageUrl: '/images/exercises/incline-push-up.png',
};
