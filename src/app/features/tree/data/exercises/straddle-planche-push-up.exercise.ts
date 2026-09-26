import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE_PUSH_UP: Exercise = {
    id: 'straddle-planche-push-up',
    name: 'Straddle Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a straddle planche position with your arms straight, legs spread apart, and body horizontal, then bend your elbows to lower yourself before pushing back up while maintaining balance and core tension. Begin with tuck planche push-ups, advanced tuck variations, and assisted straddle planche push-ups to develop shoulder strength, wrist stability, and body control. Gradually increase your range of motion, reduce assistance, and focus on maintaining proper alignment and controlled movement as you progress toward full straddle planche push-ups.',
    imageUrl: '/images/exercises/straddle-planche-push-up.png',
  };
