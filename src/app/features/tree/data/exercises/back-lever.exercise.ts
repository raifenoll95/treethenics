import { Exercise } from '../../../../shared/models/exercise.model';

export const BACK_LEVER: Exercise = {
    id: 'back-lever',
    name: 'Back Lever',
    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['rear-deltoids', 'chest', 'biceps'],
    secondaryMuscles: ['forearms', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar or gymnastic rings, rotate your body backward, and extend your legs until your body is horizontal, keeping your arms straight and core engaged. Start with tuck back lever holds and assisted variations to develop shoulder strength, mobility, and body control. Gradually progress to the advanced tuck, one-leg, and straddle back lever before attempting the full position with proper alignment and stability.',
    imageUrl: '/images/exercises/back-lever.png',
  };
