import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER_PULL_UP: Exercise = {
    id: 'front-lever-pull-up',
    name: 'Front Lever Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar, extend your body into a horizontal front lever position, and pull your torso toward the bar while keeping your core engaged and body straight. Start with tuck front lever pull-ups, front lever rows, and assisted variations to develop back strength, core stability, and pulling power. Gradually progress through advanced tuck, one-leg, and straddle variations, focusing on maintaining a horizontal body position and controlled movement before attempting full front lever pull-ups.',
    imageUrl: '/images/exercises/front-lever-pull.png',
  };
