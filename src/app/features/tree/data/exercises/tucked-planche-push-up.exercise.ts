import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCKED_PLANCHE_PUSH_UP: Exercise = {
    id: 'tucked-planche-push-up',
    name: 'Tucked Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a tuck planche position with your knees close to your chest, arms straight, and feet lifted off the ground, then bend your elbows to lower your body before pushing back up while maintaining balance and core tension. Begin with planche leans, pseudo planche push-ups, and tuck planche holds to develop shoulder strength, wrist stability, and body control. Gradually increase your range of motion, incorporate controlled negatives, and progress toward advanced tuck planche push-ups by extending your hips and moving your knees farther away from your chest.',
    imageUrl: '/images/exercises/tucked-planche-push-up.png',
  };
