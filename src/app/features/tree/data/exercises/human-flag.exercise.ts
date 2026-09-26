import { Exercise } from '../../../../shared/models/exercise.model';

export const HUMAN_FLAG: Exercise = {
    id: 'human-flag',
    movementType: 'static',
    name: 'Human Flag',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with both hands, push with your lower arm and pull with your upper arm to lift your body horizontally while keeping your core engaged and legs extended. Start with vertical flag holds, tuck human flags, and assisted variations to develop shoulder strength, core stability, and body control. Gradually progress to one-leg and straddle human flags, focusing on maintaining proper alignment and balance before attempting the full human flag.',
    imageUrl: '/images/exercises/human-flag.png',
  };
