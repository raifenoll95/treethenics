import { Exercise } from '../../../../shared/models/exercise.model';

export const REVERSE_PLANCHE: Exercise = {
    id: 'reverse-planche',
    name: 'Reverse Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'back', 'core'],
    primaryMuscles: ['rear-deltoids', 'triceps', 'upper-back'],
    secondaryMuscles: ['latissimus-dorsi', 'glutes', 'abdominals', 'forearms'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor behind your hips with your arms straight, lift your entire body horizontally, and keep your legs extended while engaging your core, triceps, and rear shoulders. Start with reverse plank holds, L-sits, and assisted reverse planche variations to develop shoulder extension strength, scapular retraction, and body control. Gradually increase your hip elevation, extend your legs, and reduce assistance while maintaining straight arms and proper body alignment as you progress toward the full reverse planche.s',
    imageUrl: '/images/exercises/reverse-planche.png',
  };
