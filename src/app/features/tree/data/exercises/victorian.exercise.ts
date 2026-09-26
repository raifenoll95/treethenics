import { Exercise } from '../../../../shared/models/exercise.model';

export const VICTORIAN: Exercise = {
    id: 'victorian',
    name: 'Victorian',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['rings','parallettes'],
    description:
      'Hang from a pull-up bar or gymnastic rings and extend your body horizontally, facing upward, with your arms straight and positioned alongside your torso while keeping your core engaged and body aligned. Start with regular front levers, advanced tuck Victorian holds, and assisted variations to develop shoulder strength, core stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions to build the strength and stability needed to perform the full Victorian Front Lever.',
    imageUrl: '/images/exercises/victorian.png',
  };
