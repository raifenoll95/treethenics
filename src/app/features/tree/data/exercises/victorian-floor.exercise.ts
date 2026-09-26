import { Exercise } from '../../../../shared/models/exercise.model';

export const VICTORIAN_FLOOR: Exercise = {
    id: 'victorian-floor',
    name: 'Victorian On Floor',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['floor'],
    description:
      'Place your hands on the floor behind your hips with your arms straight, lift your legs and torso off the ground, and maintain a horizontal body position while engaging your core, triceps, and shoulders. Start with L-sits, reverse plank holds, and assisted Floor Victorian variations to develop shoulder extension strength, core stability, and balance. Gradually extend your legs, increase your hip elevation, and reduce assistance while focusing on maintaining straight arms and proper body alignment as you progress toward the full Floor Victorian.',
    imageUrl: '/images/exercises/victorian-floor.png',
  };
