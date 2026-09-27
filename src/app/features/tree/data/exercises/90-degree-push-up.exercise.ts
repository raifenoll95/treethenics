import { Exercise } from '../../../../shared/models/exercise.model';

export const EXERCISE_90_DEGREE_PUSH_UP: Exercise = {
  id: '90-degree-push-up',
  name: '90 Degree Push Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: [
    'front-deltoids',
    'triceps',
    'chest'
  ],

  secondaryMuscles: [
    'serratus-anterior',
    'upper-back',
    'abdominals',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The 90 degree push up is an advanced calisthenics skill that combines a freestanding handstand with the strength of a bent-arm planche. You start in a handstand, lower your entire body towards a horizontal position, and then press all the way back up without letting your feet touch the ground. It requires serious pushing strength, balance, and body control, making it one of the hardest push up variations in calisthenics.',

  overview:
    'The 90 degree push up is where vertical and horizontal pushing strength come together. Unlike a regular handstand push up, you do not simply move straight up and down. Your shoulders travel forward as your body rotates from a vertical handstand into a horizontal bent-arm planche, then you reverse the movement and press back to handstand. Before training the full skill, you should already be comfortable with freestanding handstands, handstand push ups, and bent-arm planche work.',

  howTo: [
    {
      title: 'Build your handstand push up',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Start by developing strong and controlled handstand push ups. You need enough vertical pushing strength to support and press your body while upside down, but you should also be comfortable balancing without relying on a wall. Deep handstand push ups on parallettes are especially useful preparation.'
    },
    {
      title: 'Build your bent-arm planche',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'The bottom of the 90 degree push up is essentially a bent-arm planche. Practice leaning your shoulders forward and holding your body off the ground with bent elbows. Start with easier tuck or straddle positions if necessary before trying to hold the position with your legs together.'
    },
    {
      title: 'Practice controlled negatives',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'From a stable handstand, slowly bend your elbows and move your shoulders forward as your body begins to rotate towards horizontal. Try to lower your shoulders, hips, and legs together instead of simply dropping your legs. Control the movement for as long as possible before placing your feet on the floor.'
    },
    {
      title: 'Learn to press from the bottom',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Once you can control the descent, work on reversing the movement from a bent-arm planche. Push hard through your hands while moving your center of mass back over them and raising your hips and legs towards the handstand. Tuck or straddle variations can make this phase easier while you build strength.'
    },
    {
      title: 'Connect the full 90 degree push up',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Start from a stable freestanding handstand, lower under control until your body reaches a horizontal bent-arm planche, then reverse the movement and press all the way back to handstand. Finish with straight arms and regain your balance before attempting another rep.'
    },
  ],

  commonMistakes: [
    {
      title: 'Turning it into a deep handstand push up',
      description:
        'A deep handstand push up and a 90 degree push up are not the same movement. Your legs should travel from vertical towards horizontal while your shoulders move forward past your hands. If your legs stay mostly above you throughout the rep, you are still performing a deep handstand push up.'
    },
    {
      title: 'Dropping your legs too quickly',
      description:
        'Do not throw your legs towards the floor to reach the horizontal position. Your shoulders need to move forward while your torso, hips, and legs rotate together under control. Rushing the descent makes the transition harder to balance and usually kills your chances of pressing back up.'
    },
    {
      title: 'Piking at the hips',
      description:
        'Bending heavily at the hips shortens the lever and makes the movement easier, but it also changes the skill. For a clean 90 degree push up, work towards keeping your shoulders, hips, knees, and ankles in one controlled line as your body moves from vertical to horizontal.'
    },
    {
      title: 'Trying to press straight upwards',
      description:
        'The return to handstand is not just a vertical push. From the bottom position, you also need to shift your center of mass back towards your hands as your hips and legs rise. Think about reversing the path you used on the way down rather than simply trying to muscle your body straight upwards.'
    },
  ],

  relatedExercises: [
    'handstand-push-up',
    'tucked-planche-push-up',
    'full-planche-push-up'
  ],

  faq: [
    {
      question: 'What is a 90 degree push up?',
      answer:
        'A 90 degree push up starts in a freestanding handstand and moves into a horizontal bent-arm planche before returning to the handstand. The name comes from the large change in body angle between the vertical and horizontal positions. It should not be confused with a regular push up where the elbows simply bend to 90 degrees.'
    },
    {
      question: 'Do I need to know the full planche first?',
      answer:
        'No. A full planche is performed with straight arms, while the bottom of a 90 degree push up uses bent elbows. Full planche strength can certainly help, but developing a strong bent-arm planche is much more specific to this movement.'
    },
    {
      question: 'Should I learn handstand push ups before the 90 degree push up?',
      answer:
        'Yes. Handstand push ups build the vertical pushing strength and upside-down control needed for the top half of the movement. The 90 degree push up then adds another challenge by transitioning into a horizontal bent-arm planche, so a strong freestanding handstand push up gives you a much better starting point.'
    },
    {
      question: 'Is the 90 degree push up easier on parallettes?',
      answer:
        'Parallettes are a great option for learning the skill. They keep your wrists in a more neutral position and provide extra clearance as your head and shoulders move through the transition. The exercise can also be performed on the floor, but this requires more wrist extension and gives you less room to work with.'
    },
  ],

  seo: {
    title:
      '90 Degree Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the 90 Degree Push Up with proper technique, common mistakes and progressions from handstand push ups to the full skill.',
  },

  imageUrl: '/images/exercises/90-degree-push-up.png',
};
