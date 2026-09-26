import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
    id: 'straddle-planche-press-to-handstand',
    name: 'Straddle Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a straddle planche position with your arms straight, legs spread apart, and body horizontal, then press your hips upward while lifting your legs into a stable handstand. Begin with straddle planche holds, assisted handstand presses, and controlled planche-to-handstand transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, improve your hip elevation and shoulder control, and practice smooth transitions while maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/straddle-planche-press-to-handstand.png',
  };
