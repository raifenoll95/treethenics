import { Exercise } from '../../../../shared/models/exercise.model';

export const CARUSO: Exercise = {
  id: 'caruso',
  name: 'Caruso',
  movementType: 'dynamic',
  difficulty: 'elite',
  graphLevel: 7,
  showInTree: true,
  category: 'pull',

  targetAreas: [
    'back',
    'shoulders',
    'biceps',
    'core'
  ],

  primaryMuscles: [
    'latissimus-dorsi',
    'rear-deltoids',
    'triceps'
  ],

  secondaryMuscles: [
    'upper-back',
    'chest',
    'biceps',
    'abdominals',
    'forearms',
    'glutes'
  ],

  equipment: ['rings'],

  description:
    'The Caruso is an elite straight-arm rings strength movement where the athlete pulls from a Front Lever into a Victorian Cross. The body rises while remaining horizontal as the straight arms travel from an overhead Front Lever position towards the wide Victorian position beside the body.',

  overview:
    'Begin in a clean Front Lever on gymnastics rings with your body straight, horizontal, and your elbows fully locked. Without bending the arms, pull your body upward while gradually opening the rings towards the sides. Keep the body horizontal throughout the transition rather than allowing the legs or torso to rise ahead of the shoulders. Continue until the rings reach the wide position beside your body and you establish a controlled Victorian Cross. The Caruso requires exceptional posterior straight-arm strength and should only be approached after developing a very strong Front Lever, Victorian Cross, and extensive rings-specific conditioning.',

  howTo: [
    {
      title: 'Establish the Front Lever',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start in a full Front Lever on the rings with your body horizontal, legs together, hips extended, and both elbows completely straight.'
    },
    {
      title: 'Initiate the straight-arm pull',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Begin pulling through your shoulders while keeping the elbows locked. Your entire body should start rising without changing its horizontal alignment.'
    },
    {
      title: 'Open the rings',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As your body rises, progressively move the rings outward and towards the sides of your torso. Keep the transition symmetrical and avoid changing your grip to escape the hardest portion.'
    },
    {
      title: 'Approach the Victorian',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue the straight-arm pull until your body approaches ring height. Keep your hips extended and your shoulders, torso, hips, knees, and ankles aligned horizontally.'
    },
    {
      title: 'Finish in Victorian Cross',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Complete the movement in a Victorian Cross with your body face-up at approximately ring height, your arms opened wide beside your body, and both elbows fully locked.'
    },
  ],

  commonMistakes: [
    {
      title: 'Bending the arms',
      description:
        'The Caruso is defined by straight-arm strength. Bending the elbows turns the transition into a different pulling pattern and considerably reduces the straight-arm demand.'
    },
    {
      title: 'Starting above the Front Lever',
      description:
        'Do not begin with your body already raised towards the Victorian position. Establish a recognizable horizontal Front Lever before initiating the pull so the complete range of motion is performed.'
    },
    {
      title: 'Pulling at an angle',
      description:
        'Avoid allowing the shoulders to rise significantly before the hips or vice versa. The body should travel upward as a rigid horizontal unit while the rings progressively move towards the Victorian position.'
    },
    {
      title: 'Changing the grip during the transition',
      description:
        'Avoid excessively increasing, reducing, or correcting your false grip as you rise. Establish your grip before beginning and maintain it as consistently as possible throughout the movement.'
    },
    {
      title: 'Bending at the hips',
      description:
        'Piking shortens the effective body lever and makes the transition easier. Keep the hips extended and preserve the straight body line from the Front Lever through to the Victorian.'
    },
  ],

  relatedExercises: [
    'front-lever',
    'victorian',
    'straight-arm-touch'
  ],

  faq: [
    {
      question: 'What is the Caruso?',
      answer:
        'The Caruso is an elite rings strength movement where the athlete pulls from a Front Lever into a Victorian Cross while keeping the elbows straight and the body horizontal.'
    },
    {
      question: 'Do the arms stay straight during the Caruso?',
      answer:
        'Yes. Straight elbows are one of the defining requirements of the movement. The transition is produced through the shoulders and straight-arm pulling strength rather than by performing a traditional bent-arm pull.'
    },
    {
      question: 'What is the difference between a Caruso and a Front Lever Pull Up?',
      answer:
        'A Front Lever Pull Up keeps the body approximately horizontal while the elbows bend to pull the torso towards the hands. In a Caruso, the elbows remain straight and the rings travel progressively outward until the athlete reaches the much wider Victorian Cross position.'
    },
    {
      question: 'What is the difference between Caruso and Baruso?',
      answer:
        'Caruso is performed on gymnastics rings and transitions towards a Victorian Cross. Baruso is the straight-bar variation, where the fixed bar limits the movement of the hands and changes both the range of motion and the final position.'
    },
    {
      question: 'What should I learn before attempting the Caruso?',
      answer:
        'A very strong Full Front Lever and Victorian Cross are essential foundations. Straight-arm posterior ring work and assisted transitions between Front Lever and Victorian can then be used to develop the specific strength and movement path required for the Caruso.'
    },
  ],

  seo: {
    title:
      'Caruso: Front Lever to Victorian Cross | Treethenics',

    description:
      'Learn the Caruso, an elite rings strength movement from Front Lever to Victorian Cross performed with straight arms, including technique, muscles and prerequisites.',
  },

  imageUrl: '/images/exercises/caruso.png',
};
