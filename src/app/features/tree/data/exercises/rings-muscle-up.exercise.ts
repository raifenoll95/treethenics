import { Exercise } from '../../../../shared/models/exercise.model';

export const RINGS_MUSCLE_UP: Exercise = {
    id: 'rings-muscle-up',
    name: 'Rings Muscle Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Hang from gymnastic rings using a false grip, pull your chest toward the rings, transition your shoulders over your hands, and push up into a stable support position. Start with strict ring pull-ups, deep ring dips, and assisted muscle-up transitions to develop pulling strength, shoulder stability, and coordination. Gradually reduce assistance, practice controlled negative muscle-ups, and focus on maintaining a strong false grip and smooth transition to perform the full movement with proper technique.',
    imageUrl: '/images/exercises/rings-muscle-up.png',
  };
