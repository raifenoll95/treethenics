import { Exercise } from '../../../../shared/models/exercise.model';

export const X_GRIP_FRONT_LEVER: Exercise = {
    id: 'x-grip-front-lever',
    name: 'X Grip Front Lever',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms crossed in an X-shaped grip, engage your core and back muscles, and lift your body into a horizontal position while keeping your arms straight and legs extended. Start with regular front lever holds, crossed-grip hangs, and assisted X-grip front lever variations to develop pulling strength, shoulder stability, and body control. Gradually reduce assistance, progress through tuck and straddle variations, and focus on maintaining proper alignment and balance as you work toward the full X-grip front lever.',
    imageUrl: '/images/exercises/x-grip-front-lever.png',
  };
