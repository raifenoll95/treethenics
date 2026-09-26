import { Exercise } from '../../../../shared/models/exercise.model';

export const TULLOCH: Exercise = {
    id: 'tulloch',
    name: 'Tulloch',
    movementType: 'dynamic',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: [],
    description:
      'Perform the Tulloch strength element with deliberate scapular control and full-body tension. The back and shoulders sustain the demanding lever while the trunk stabilizes the body. Confirm the exact variation and apparatus against your reference image before publishing.',
    imageUrl: '/images/exercises/tulloch.png',
  };
