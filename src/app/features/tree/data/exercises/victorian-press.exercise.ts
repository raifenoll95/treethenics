import { Exercise } from '../../../../shared/models/exercise.model';

export const VICTORIAN_PRESS: Exercise = {
    id: 'victorian-press',
    name: 'Victorian Press',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['rings','parallettes'],
    description:
      'Start in a Victorian Cross position with your body horizontal, facing upward, and arms extended to the sides, then press your body upward into a stable support position while maintaining full-body tension and control. Begin with assisted Victorian Cross holds, ring support exercises, and controlled pressing movements to develop shoulder strength, straight-arm stability, and core control. Gradually reduce assistance, practice controlled negative repetitions, and improve your pressing strength while maintaining proper body alignment and ring stability throughout the movement.',
    imageUrl: '/images/exercises/victorian-press.png',
  };
