import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER_RINGS: Exercise = {
    id: 'back-lever-rings',
    name: 'Rings Back Lever',
    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['rings'],
    description:
      'Hang from gymnastic rings, rotate your body backward, and extend your legs until your body is horizontal and facing downward, keeping your arms straight, core engaged, and rings stable. Start with skin the cat, German hangs, and tuck back lever holds to develop shoulder mobility, strength, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations, focusing on maintaining proper alignment and ring stability before attempting the full back lever on rings.',
    imageUrl: '/images/exercises/back-lever-rings.png',
  };
