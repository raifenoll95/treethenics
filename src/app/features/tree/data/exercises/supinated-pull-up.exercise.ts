import { Exercise } from '../../../../shared/models/exercise.model';

export const SUPINATED_PULL_UP: Exercise = {
      id: 'supinated-pull-up',
      name: 'Chin Up',
      difficulty: 'beginner',
      movementType: 'dynamic',
      graphLevel: 1,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Grip the bar with your palms facing toward you, keep your core engaged, and pull yourself upward until your chin passes the bar, then lower yourself with control. Start with assisted chin-ups or resistance bands to build strength, gradually increasing repetitions while maintaining proper form and a full range of motion. As your strength improves, incorporate slow negatives, weighted chin-ups, or archer chin-ups to increase difficulty and develop greater pulling power.',

      imageUrl: '/images/exercises/supinated-pull-up.png',
    };
