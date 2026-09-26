import { Exercise } from '../../../../shared/models/exercise.model';

export const X_GRIP_MUSCLE_UP: Exercise = {
    id: 'x-grip-muscle-up',
    name: 'X Grip Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms crossed in an X-shaped grip, pull yourself explosively upward, and transition your chest over the bar before pushing up into a supported position. Start with regular muscle-ups, crossed-grip pull-ups, and assisted X-grip transitions to develop pulling strength, coordination, and wrist mobility. Gradually reduce assistance, improve your explosive pulling power, and practice controlled transitions while maintaining proper grip positioning and shoulder stability.',
    imageUrl: '/images/exercises/x-grip-muscle-up.png',
  };
