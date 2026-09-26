import { Exercise } from '../../../../shared/models/exercise.model';

export const HUMAN_FLAG_PULL_UP: Exercise = {
    id: 'human-flag-pull-up',
    name: 'Human Flag Pull Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'pull',
    targetAreas: ['core', 'shoulders', 'back', 'biceps'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['front-deltoids', 'triceps', 'upper-back', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with both hands, lift your body into a horizontal human flag position, and pull yourself upward by bending your upper arm while keeping your core engaged and body aligned. Start with static human flag holds, assisted flag pull-ups, and controlled partial repetitions to develop shoulder strength, core stability, and pulling power. Gradually increase your range of motion, reduce assistance, and progress toward full human flag pull-ups while maintaining proper technique and body control.',
    imageUrl: '/images/exercises/human-flag-pu.png',
  };
