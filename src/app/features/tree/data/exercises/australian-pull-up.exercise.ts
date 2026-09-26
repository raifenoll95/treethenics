import { Exercise } from '../../../../shared/models/exercise.model';

export const AUSTRALIAN_PULL_UP: Exercise = {
      id: 'australian-pull-up',
      name: 'Australian Pull Up',
      difficulty: 'beginner',
      movementType: 'dynamic',
      graphLevel: 1,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Position yourself beneath a low bar, grip it with your hands shoulder-width apart, and pull your chest toward the bar while keeping your body straight and core engaged. Start with your knees bent or the bar positioned higher to reduce difficulty, gradually extending your legs and lowering the bar as your strength improves. Progress by elevating your feet, slowing down the lowering phase, or adding weight to increase resistance and develop greater back and arm strength.',
      imageUrl: '/images/exercises/australian-pull-up.png',
    };
