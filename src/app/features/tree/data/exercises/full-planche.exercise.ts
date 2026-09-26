import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE: Exercise = {
    id: 'full-planche',
    name: 'Full Planche',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your entire body horizontally with your arms straight and legs fully extended, keeping your core engaged and shoulders protracted. Start with tuck planche, advanced tuck planche, and straddle planche variations to develop shoulder strength, wrist stability, and body control. Gradually bring your legs closer together from the straddle position, practice assisted full planche holds, and focus on maintaining proper alignment and balance as you progress toward the full movement.',
    imageUrl: '/images/exercises/full-planche.png',
  };
