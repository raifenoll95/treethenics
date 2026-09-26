import { Exercise } from '../../../../shared/models/exercise.model';

export const CLOSE_TO_IMPOSSIBLE: Exercise = {
    id: 'close-to-impossible',
    name: 'Close To Impossible',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms straight, lean your body backward, and maintain a nearly horizontal position while keeping your core engaged and shoulders stable. Start with assisted holds, controlled negatives, and front lever variations to develop straight-arm strength, core stability, and body control. Gradually reduce assistance, increase your backward lean, and focus on maintaining proper alignment and controlled movement as you progress toward the full Close to Impossible position.',
    imageUrl: '/images/exercises/close-to-impossible.png',
  };
