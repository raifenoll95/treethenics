import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND: Exercise = {
    id: 'handstand',
    name: 'Handstand',

    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 2,

    showInTree: true,
    category: 'static',

    targetAreas: ['shoulders', 'core'],

    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],

    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],

    equipment: ['parallettes','floor'],

    description:
      'Place your hands shoulder-width apart, kick your legs overhead, and maintain a straight body position while engaging your core and shoulders. Start by practicing handstands against a wall to develop balance, strength, and body awareness. Gradually reduce your reliance on the wall, practice controlled kick-ups, and work toward holding a freestanding handstand with proper alignment and stability.',

    imageUrl: '/images/exercises/handstand.png',
  };
