import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER_PRESS: Exercise = {
    id: 'front-lever-press',
    name: 'Front Lever Press',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a front lever position with your body horizontal and arms straight, then raise your body into an inverted hang while maintaining core tension, shoulder stability, and controlled movement. Begin with tuck front lever raises, inverted hangs, and assisted press variations to develop back strength, core stability, and straight-arm control. Gradually progress through advanced tuck and straddle variations, reduce assistance, and practice controlled transitions while maintaining proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/front-lever-press.png',
  };
