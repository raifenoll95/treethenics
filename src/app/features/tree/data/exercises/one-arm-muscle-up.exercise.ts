import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_MUSCLE_UP: Exercise = {
    id: 'one-arm-muscle-up',
    name: 'One-Arm Muscle Up',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with one hand, pull yourself explosively upward, transition your shoulder over the bar, and push up until your supporting arm is fully extended. Start with strict muscle-ups, assisted one-arm pull-ups, and single-arm straight-bar dips to develop unilateral strength, explosive power, and shoulder stability. Gradually reduce assistance, practice controlled one-arm transitions, and focus on maintaining proper technique and body control as you progress toward the full one-arm muscle-up.',
    imageUrl: '/images/exercises/one-arm-muscle-up.png',
  };
