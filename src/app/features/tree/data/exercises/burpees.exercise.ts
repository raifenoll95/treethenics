import { Exercise } from '../../../../shared/models/exercise.model';

export const BURPEES: Exercise = {
  id: 'burpees',
  name: 'Burpees',
  movementType: 'dynamic',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'legs',

  targetAreas: [
    'legs',
    'core',
    'shoulders'
  ],

  primaryMuscles: [
    'quadriceps',
    'glutes'
  ],

  secondaryMuscles: [
    'calves',
    'abdominals',
    'front-deltoids',
    'triceps'
  ],

  equipment: ['floor'],

  description:
    'Burpees are a full-body conditioning exercise that combines a squat, a transition to plank, a return to the feet, and an explosive vertical jump. They challenge cardiovascular fitness, coordination, lower-body power, and the ability to repeatedly move between standing and floor positions.',

  overview:
    'Start from a standing position, bend your knees, and place your hands on the floor in front of you. Jump your feet backwards into a strong plank position, then quickly bring them forward again underneath your body. Rise from the squat and finish with a controlled vertical jump before beginning the next repetition. Keep your trunk stable when your feet move backwards and focus on smooth transitions rather than rushing through each phase with poor body control.',

  howTo: [
    {
      title: 'Lower to the floor',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'From standing, bend your knees and hips to lower your body and place both hands firmly on the floor in front of your feet.'
    },
    {
      title: 'Jump back to plank',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Jump both feet backwards and land in a strong plank position with your hands underneath or close to your shoulders.'
    },
    {
      title: 'Control the plank',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Keep your trunk braced and avoid allowing your hips to collapse towards the floor when your legs reach the plank position.'
    },
    {
      title: 'Bring your feet forward',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Jump both feet forward towards your hands and return to a compact squat position while keeping your feet firmly planted.'
    },
    {
      title: 'Jump vertically',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Drive through your legs to stand and jump vertically. Land softly with slightly bent knees and immediately regain control before starting the next repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips collapse in the plank',
      description:
        'When your feet jump backwards, do not allow your lower back to sag towards the floor. Brace your core and arrive in a controlled plank position.'
    },
    {
      title: 'Landing with stiff legs',
      description:
        'Absorb the landing from the vertical jump through your ankles, knees, and hips instead of landing with completely straight legs.'
    },
    {
      title: 'Rushing the floor transition',
      description:
        'Trying to move as fast as possible can turn the transition into an uncontrolled fall towards the floor. Place your hands securely and maintain control as your feet move backwards.'
    },
    {
      title: 'Jumping the feet too far from the hands',
      description:
        'When returning from the plank, bring your feet far enough forward to establish a strong position for standing and jumping instead of trying to jump vertically from an excessively stretched position.'
    },
    {
      title: 'Adding a Push Up unintentionally',
      description:
        'A standard Treethenics Burpee does not require your chest to touch the floor. If you perform a Push Up at the bottom, treat it as a separate and more demanding variation rather than changing technique from repetition to repetition.'
    },
  ],

  relatedExercises: [
    'jump-squat',
    'mountain-climbers',
    'jumping-jacks'
  ],

  faq: [
    {
      question: 'What is a Burpee?',
      answer:
        'A Burpee is a full-body conditioning exercise that repeatedly moves you from standing to a plank position and back to standing, usually finishing with a vertical jump.'
    },
    {
      question: 'Do Burpees include a Push Up?',
      answer:
        'There are several accepted Burpee variations. In Treethenics, the standard Burpee moves from plank directly back towards the squat without a Push Up. Adding a Push Up is a harder variation that increases the upper-body demand.'
    },
    {
      question: 'What muscles do Burpees work?',
      answer:
        'Burpees involve much of the body. The quadriceps and glutes produce most of the force when standing and jumping, while the calves contribute to the jump and the shoulders, triceps, and core stabilize the plank position.'
    },
    {
      question: 'Are Burpees a cardio exercise?',
      answer:
        'Burpees are commonly used for conditioning because they repeatedly move a large amount of body mass through several positions. Performing them continuously can raise heart rate quickly while also challenging muscular endurance.'
    },
    {
      question: 'How can I make Burpees easier?',
      answer:
        'Remove the final jump and step one foot backwards at a time instead of jumping into the plank. As your coordination and conditioning improve, reintroduce the jumping transitions.'
    },
  ],

  seo: {
    title:
      'Burpees: Technique, Muscles & How to Do Them | Treethenics',

    description:
      'Learn how to perform Burpees with proper plank transitions, jumping technique, muscles worked, easier progressions and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/burpees.png',
};
