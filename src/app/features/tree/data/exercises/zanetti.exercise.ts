import { Exercise } from '../../../../shared/models/exercise.model';

export const ZANETTI: Exercise = {
    id: 'zanetti',
    name: 'Zanetti',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in a back lever position on gymnastic rings with your body horizontal and arms straight, then transition into a Victorian Cross by rotating your body while maintaining full-body tension and shoulder stability. Begin with back lever holds, assisted Victorian Cross variations, and controlled transition exercises to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, improve your shoulder mobility, and practice smooth transitions between both positions while maintaining proper alignment and ring stability.',
    imageUrl: '/images/exercises/zanetti.png',
  };
