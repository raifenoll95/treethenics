import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_PLANCHE_PRESS_TO_HANDSTAND: Exercise = {
    id: 'tuck-planche-press-to-handstand',
    name: 'Tuck Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a tuck planche position with your arms straight, knees tucked toward your chest, and feet lifted off the ground, then press your hips upward and extend your legs into a stable handstand. Begin with tuck planche holds, wall-assisted handstand presses, and controlled transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, improve your hip elevation and leg extension, and practice smooth transitions while maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/tuck-planche-press-to-handstand.png',
  };
