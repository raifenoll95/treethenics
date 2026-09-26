import { Exercise } from '../../../../shared/models/exercise.model';

export const BENT_ARM_PLANCHE: Exercise = {
    id: 'bent-arm-planche',
    name: 'Elbow lever Planche',

    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 2,

    showInTree: true,
    category: 'static',

    targetAreas: ['shoulders', 'chest', 'core'],

    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],

    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],

    equipment: ['floor','parallettes'],

    description:
      'Place your hands on the floor, bend your elbows into your abdomen, and lean forward while lifting your legs to balance your body horizontally. Start by practicing with your feet on the ground or one leg extended to develop balance, wrist strength, and core stability. Gradually shift more weight onto your hands, extend both legs, and work toward maintaining a stable elbow lever with full body control.',

    imageUrl: '/images/exercises/bent-arm-planche.png',
  };
