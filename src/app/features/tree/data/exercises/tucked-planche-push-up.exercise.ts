import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCKED_PLANCHE_PUSH_UP: Exercise = {
  id: 'tucked-planche-push-up',
  name: 'Tuck Planche Push Up',
  movementType: 'dynamic',
  difficulty: 'intermediate',
  graphLevel: 3,
  showInTree: false,
  category: 'push',

  targetAreas: ['shoulders', 'chest', 'triceps'],

  primaryMuscles: ['front-deltoids', 'serratus-anterior', 'triceps'],

  secondaryMuscles: [
    'chest',
    'abdominals',
    'biceps',
    'forearms'
  ],

  equipment: ['floor', 'parallettes'],

  description:
    'The tuck planche push up takes the static tuck planche and turns it into a full pushing movement. Your feet stay completely off the ground while you bend your elbows, lower your body, and press back into the tuck planche position. It requires a combination of strong shoulders, triceps, core control, and solid planche technique, making it an important step towards advanced tuck and eventually full planche push ups.',

  overview:
    'Before working on tuck planche push ups, you should already feel comfortable holding a tuck planche with straight arms. From there, the challenge is learning to maintain your forward lean and tucked position while your elbows bend and straighten. Start with controlled negatives if you cannot press back up yet, and do not worry about getting lots of reps. A few clean repetitions where your feet stay off the floor and your shoulders remain forward are much more valuable than forcing a bigger number with poor form.',

  howTo: [
    {
      title: 'Build a solid tuck planche',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Before adding push ups, make sure you can hold a controlled tuck planche. Lean your shoulders forward past your hands, push strongly through the floor, keep your arms straight, and pull your knees towards your chest until both feet leave the ground.'
    },
    {
      title: 'Practice tuck planche negatives',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Start from a strong tuck planche and slowly bend your elbows to lower yourself. Keep your knees tucked and your feet off the floor for as long as possible. Focus on controlling the descent instead of dropping as soon as your arms begin to bend.'
    },
    {
      title: 'Maintain your forward lean',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'As you lower into the push up, keep your shoulders forward instead of shifting your weight backwards. Your hips and shoulders should stay controlled while your knees remain close to your chest. If you constantly fall backwards, work on a smaller range of motion first.'
    },
    {
      title: 'Press back into the tuck planche',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Push strongly through your hands and extend your elbows until you return to straight arms. Finish every rep in a proper tuck planche with your feet still off the ground and your shoulder blades pushed apart.'
    },
    {
      title: 'Progress towards the advanced tuck',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Once you can perform several controlled tuck planche push ups, start opening your hips and moving your knees further away from your chest. This increases the lever and prepares you for advanced tuck planche push ups and harder planche variations.'
    },
  ],

  commonMistakes: [
    {
      title: 'Trying push ups before owning the tuck planche',
      description:
        'If you can barely hold the starting position, adding a push up will usually make your technique fall apart immediately. Spend more time developing your tuck planche first so you can focus on the pressing movement instead of fighting just to stay off the floor.'
    },
    {
      title: 'Losing the forward lean',
      description:
        'A common mistake is shifting your shoulders backwards when you start pressing up. This makes the movement easier but also causes your feet to drop towards the floor. Keep your shoulders forward and maintain pressure through your hands throughout the entire rep.'
    },
    {
      title: 'Letting your hips drop',
      description:
        'Your hips should not collapse towards the floor as soon as you bend your elbows. Keep your core tight and your knees tucked towards your chest so your body stays compact. If your hips consistently drop, reduce the range of motion and build more strength before going deeper.'
    },
    {
      title: 'Losing scapular control at the top',
      description:
        'Finishing the rep with straight arms is not enough. Push the floor away and keep your shoulder blades protracted as you return to the tuck planche. Relaxing through your shoulders at the top makes the position much less stable.'
    },
  ],

  relatedExercises: [
    'lean-planche-push-up',
    'tuck-planche',
    'tuck-advanced-planche-push-up'
  ],

  faq: [
    {
      question: 'How strong should my tuck planche be before trying tuck planche push ups?',
      answer:
        'You should be able to hold a clean tuck planche comfortably before adding repetitions. There is no magic number of seconds, but if you are still fighting to keep your feet off the floor or cannot maintain straight arms and a strong shoulder position, keep working on the static tuck planche first.'
    },
    {
      question: 'Why do my feet touch the floor when I push back up?',
      answer:
        'This usually happens because you lose your forward lean or your hips drop as you press. Keep your shoulders in front of your hands, pull your knees towards your chest, and stay tight through your core. If you still cannot maintain the position, practice negatives or partial reps until you build enough strength.'
    },
    {
      question: 'Should I learn tuck planche push ups on the floor or parallettes?',
      answer:
        'Both work. Parallettes give your legs more room and keep your wrists in a neutral position, which many people find more comfortable when learning the movement. The floor requires more wrist extension and gives you less clearance, but it is still a perfectly valid way to train the exercise.'
    },
    {
      question: 'What comes after the tuck planche push up?',
      answer:
        'The advanced tuck planche push up is a natural next progression. Instead of keeping your knees tightly compressed against your chest, you gradually open the hips and move your knees further away from your body. This creates a longer lever and makes your shoulders work considerably harder.'
    },
  ],

  seo: {
    title:
      'Tuck Planche Push Up: How to Do It & Progressions | Treethenics',

    description:
      'Learn how to do the Tuck Planche Push Up with proper technique, muscles worked, common mistakes and progressions towards advanced planche push ups.',
  },

  imageUrl: '/images/exercises/tucked-planche-push-up.png',
};
