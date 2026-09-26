import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PRESS_TO_HANDSTAND: Exercise = {
    id: 'straddle-press-to-handstand',
    name: 'Straddle Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start with your hands on the floor and legs spread wide, lean your shoulders forward, and lift your hips and legs upward into a stable handstand while keeping your arms straight and core engaged. Begin with seated straddle leg lifts, pike compressions, and wall-assisted handstand presses to develop shoulder strength, hip mobility, and core control. Gradually reduce assistance, improve your straddle flexibility, and practice controlled negative presses to achieve a smooth freestanding straddle press to handstand with proper technique.',
    imageUrl: '/images/exercises/straddle-press-to-handstand.png',
  };
