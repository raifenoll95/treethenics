import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT_MUSCLE_UP: Exercise = {
    id: 'l-sit-muscle-up',
    name: 'L-Sit Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your legs extended forward in an L-sit position, pull yourself explosively upward, transition your chest over the bar, and push up while keeping your legs elevated. Start with regular muscle-ups, L-sit pull-ups, and straight-bar dips to develop pulling strength, core stability, and coordination. Gradually incorporate assisted L-sit muscle-ups, improve your transition technique, and reduce assistance while maintaining straight legs and proper body control throughout the movement.',
    imageUrl: '/images/exercises/l-sit-muscle-up.png',
  };
