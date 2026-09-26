import { Exercise } from '../../../../shared/models/exercise.model';

export const BUTTERFLY: Exercise = {
    id: 'butterfly',
    name: 'Butterfly Muscle Up',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start by hanging from gymnastic rings with your arms straight, transition into an Iron Cross position with your legs extended forward, and press upward until you reach a stable support position above the rings. Begin with assisted Iron Cross holds, ring support exercises, and controlled cross presses to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, improve your transition technique, and practice controlled repetitions to perform the full Butterfly with proper alignment and stability.',
    imageUrl: '/images/exercises/butterfly.png',
  };
