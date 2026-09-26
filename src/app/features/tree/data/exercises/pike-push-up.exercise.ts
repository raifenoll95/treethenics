import { Exercise } from '../../../../shared/models/exercise.model';

export const PIKE_PUSH_UP: Exercise = {
    id: 'pike-push-up',
    name: 'Pike Push Up',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'push',

    targetAreas: ['shoulders', 'triceps', 'chest'],

    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],

    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],

    equipment: ['floor','parallettes'],

    description:
      'Start in a downward dog position with your hips raised, hands shoulder-width apart, and legs straight, then bend your elbows to lower your head toward the floor before pushing back up. Begin with regular pike push-ups, focusing on controlled movements and proper shoulder engagement to build strength. Gradually elevate your feet to increase difficulty, progressing toward wall-assisted handstand push-ups as your shoulder strength and stability improve.',

    imageUrl: '/images/exercises/pike-push-up.png',
  };
