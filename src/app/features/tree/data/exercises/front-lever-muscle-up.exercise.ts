import { Exercise } from '../../../../shared/models/exercise.model';

export const FRONT_LEVER_MUSCLE_UP: Exercise = {
    id: 'front-lever-muscle-up',
    name: 'Front Lever To Muscle Up',
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
      'Start in a horizontal front lever position with your arms straight, engage your core, and pull slowly toward the bar before transitioning your chest over it and pushing up into a supported position. Begin with front lever pull-ups, explosive high pull-ups, and strict muscle-ups to develop the pulling strength, core stability, and coordination required for the movement. Gradually practice assisted transitions from the front lever into the muscle-up, reduce assistance, and focus on maintaining body control and generating explosive power throughout the exercise.',
    imageUrl: '/images/exercises/front-lever-muscle-up.png',
  };
