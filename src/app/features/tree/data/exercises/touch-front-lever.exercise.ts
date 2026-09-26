import { Exercise } from '../../../../shared/models/exercise.model';

export const TOUCH_FRONT_LEVER: Exercise = {
    id: 'touch-front-lever',
    name: 'Touch Front Lever',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms straight, engage your core and back muscles, and lift your body into a horizontal position before pulling your hips toward the bar while maintaining full-body tension. Start with regular front lever holds, tuck front lever rows, and assisted touch front levers to develop pulling strength and body control. Gradually progress to advanced tuck and straddle variations, reducing assistance and focusing on bringing your hips closer to the bar without losing proper alignment or stability.',
    imageUrl: '/images/exercises/touch-front.png',
  };
