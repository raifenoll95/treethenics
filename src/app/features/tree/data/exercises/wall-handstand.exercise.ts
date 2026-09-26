import { Exercise } from '../../../../shared/models/exercise.model';

export const WALL_HANDSTAND: Exercise = {
    id: 'wall-handstand',
    name: 'Wall Handstand',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands shoulder-width apart on the floor, kick your legs up against a wall, and maintain a straight body position while engaging your core and shoulders. Start with wall walks and chest-to-wall handstands to develop shoulder strength, balance, and body awareness. Gradually practice controlled weight shifts, heel pulls, and freestanding handstand attempts to improve stability and reduce your reliance on the wall.',
    imageUrl: '/images/exercises/wall-handstand.png',
  };
