import { Exercise } from '../../../../shared/models/exercise.model';

export const LEAN_PLANCHE_PUSH_UP: Exercise = {
    id: 'lean-planche-push-up',
    name: 'Lean Planche Push Up',
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
      'Start in a push-up position with your hands near your hips, lean your shoulders forward past your wrists, and lower your chest toward the floor while keeping your core engaged and body straight. Begin with regular push-ups, planche leans, and pseudo planche push-ups to develop shoulder strength, wrist stability, and body control. Gradually increase your forward lean, reduce assistance, and progress toward tuck planche push-ups while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/lean-planche-push-up.png',
  };
