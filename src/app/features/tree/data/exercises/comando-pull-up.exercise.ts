import { Exercise } from '../../../../shared/models/exercise.model';

export const COMANDO_PULL_UP: Exercise = {
    id: 'comando-pull-up',
    name: 'Comando Pull-Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Grip a pull-up bar with both hands facing each other, position your body sideways beneath the bar, and pull yourself upward until your head passes the bar, alternating sides with each repetition. Start with regular pull-ups, neutral-grip pull-ups, and assisted commando pull-ups to develop back strength, grip endurance, and coordination. Gradually reduce assistance, increase your range of motion, and incorporate weighted variations while maintaining proper technique and controlled movement.',
    imageUrl: '/images/exercises/comando-pull-up.png',
  };
