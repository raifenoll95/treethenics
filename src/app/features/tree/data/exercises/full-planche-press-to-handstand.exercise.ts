import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
    id: 'full-planche-press-to-handstand',
    name: 'Full Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a full planche position with your arms straight, legs extended, and body horizontal, then press your hips upward and lift your legs into a stable handstand while maintaining full-body tension. Begin with full planche holds, straddle planche presses, and assisted handstand transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, practice controlled negative transitions from handstand to planche, and focus on maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/full-planche-press-to-handstand.png',
  };
