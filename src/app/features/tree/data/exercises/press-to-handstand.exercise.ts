import { Exercise } from '../../../../shared/models/exercise.model';

export const PRESS_TO_HANDSTAND: Exercise = {
    id: 'press-to-handstand',
    name: 'Press To Handstand',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'hip-flexors'],
    secondaryMuscles: ['triceps', 'abdominals', 'trapezius', 'forearms'],
    equipment: ['floor','parallettes'],
    description:
      'Start with your hands on the floor and your feet grounded, lean your shoulders forward, and lift your legs overhead using controlled strength until you reach a stable handstand without jumping or kicking. Begin with pike compressions, L-sit holds, and wall-assisted press handstands to develop shoulder strength, core control, and flexibility. Gradually reduce assistance, practice slow negative presses, and improve your hip mobility and balance to achieve a smooth freestanding handstand press with proper technique.',
      imageUrl: '/images/exercises/press-to-handstand.png',
  };
