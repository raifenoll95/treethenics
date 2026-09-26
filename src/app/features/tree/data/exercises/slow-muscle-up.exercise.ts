import { Exercise } from '../../../../shared/models/exercise.model';

export const SLOW_MUSCLE_UP: Exercise = {
    id: 'slow-muscle-up',
    name: 'Slow Muscle Up',
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
      'Hang from a pull-up bar with a secure grip, pull yourself upward slowly, transition your chest over the bar without using momentum, and push up until your arms are fully extended. Start with strict pull-ups, straight-bar dips, and assisted muscle-up transitions to develop the strength and control needed for the movement. Gradually reduce assistance, incorporate slow negative muscle-ups, and focus on improving your transition technique to perform the entire movement smoothly and without swinging.',
    imageUrl: '/images/exercises/slow-muscle-up.png',
  };
