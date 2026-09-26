import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER_PULL_UP: Exercise = {
    id: 'back-lever-pull-up',
    name: 'Back Lever Pull Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Start in a horizontal back lever position with your arms straight, engage your core and back muscles, and bend your elbows to pull your body toward the bar while maintaining full-body tension and control. Begin with tuck back lever pull-ups, assisted variations, and controlled negatives to develop pulling strength, shoulder stability, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations, reducing assistance while maintaining proper alignment and a controlled range of motion as you work toward full back lever pull-ups.',
    imageUrl: '/images/exercises/back-lever-pull-up.png',
  };
