import { Exercise } from '../../../../shared/models/exercise.model';

export const ARCHER_PULL_UP: Exercise = {
      id: 'archer-pull-up',
      name: 'Archer Pull Up',
      difficulty: 'intermediate',
      movementType: 'dynamic',
      graphLevel: 2,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Grip the bar with your hands wider than shoulder-width apart, pull your body toward one hand while extending the opposite arm, and alternate sides while maintaining core tension and control. Start with wide-grip pull-ups, assisted archer pull-ups, and controlled negatives to develop unilateral pulling strength and stability. Gradually reduce assistance, increase your range of motion, and focus on keeping your extended arm straight as you progress toward strict archer pull-ups and more advanced one-arm variations.',
      imageUrl: '/images/exercises/archer-pull-up.png',
    };
