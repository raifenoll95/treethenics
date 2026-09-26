import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_ROW: Exercise = {
    id: 'inverted-row',
    name: 'Inverted Row',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['upper-back', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['rear-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Position yourself beneath a low bar, grip it with your hands shoulder-width apart, and pull your chest toward the bar while keeping your body straight and core engaged. Start with bent-knee inverted rows or a higher bar to develop back strength, grip endurance, and body control. Gradually lower the bar, extend your legs, or elevate your feet to increase difficulty, progressing toward weighted or single-arm inverted rows while maintaining proper technique.',
    imageUrl: '/images/exercises/inverted-row.png',
  };
