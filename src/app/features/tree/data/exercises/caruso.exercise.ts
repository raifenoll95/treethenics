import { Exercise } from '../../../../shared/models/exercise.model';

export const CARUSO: Exercise = {
    id: 'caruso',
    name: 'Caruso',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'tart in a front lever position on gymnastic rings with your body horizontal and arms straight, then transition into a Victorian Cross by lowering your body between the rings while maintaining full-body tension and control. Begin with front lever holds, assisted Victorian Cross variations, and controlled transition exercises to develop shoulder strength, core stability, and straight-arm control. Gradually reduce assistance, improve your shoulder mobility, and practice smooth transitions between both positions while maintaining proper body alignment and ring stability.',
    imageUrl: '/images/exercises/caruso.png',
  };
