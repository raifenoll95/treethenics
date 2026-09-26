import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_BUTTERFLY: Exercise = {
    id: 'inverted-butterfly',
    name: 'Inverted Butterfly',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in an inverted hang on gymnastic rings, lower your body into an inverted Iron Cross with your arms extended to the sides, and press upward into a stable handstand position while maintaining full-body tension and control. Begin with assisted inverted Iron Cross holds, ring handstands, and controlled cross presses to develop shoulder strength, straight-arm stability, and balance. Gradually reduce assistance, improve your transition technique, and practice controlled repetitions while maintaining proper alignment and ring stability as you progress toward the full Inverted Butterfly.',
    imageUrl: '/images/exercises/inverted-butterfly.png',
  };
