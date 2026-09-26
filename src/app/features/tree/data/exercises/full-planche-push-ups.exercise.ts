import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_PUSH_UPS: Exercise = {
    id: 'full-planche-push-ups',
    name: 'Full Planche Push Ups',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a full planche position with your arms straight, body horizontal, and legs extended, then bend your elbows to lower your body before pushing back up while maintaining balance and control. Begin with planche leans, tuck planche push-ups, and straddle planche push-ups to develop shoulder strength, core stability, and pushing power. Gradually progress to assisted full planche push-ups, reduce assistance, and focus on maintaining proper body alignment and controlled movement throughout the exercise.',
    imageUrl: '/images/exercises/full-planche-pu.png',
  };
