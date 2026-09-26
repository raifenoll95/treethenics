import { Exercise } from '../../../../shared/models/exercise.model';

export const SHOULDER_FLAG: Exercise = {
    id: 'shoulder-flag',
    name: 'Shoulder Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'osition your shoulder against a vertical pole, secure your grip, and lift your body horizontally while keeping your core engaged and legs extended to maintain balance and stability. Start with regular human flags, assisted shoulder flag holds, and tuck variations to develop shoulder strength, core stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions while maintaining proper shoulder positioning and full-body tension as you progress toward the full shoulder human flag.',
    imageUrl: '/images/exercises/shoulder-flag.png',
  };
