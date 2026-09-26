import { Exercise } from '../../../../shared/models/exercise.model';

export const ONE_ARM_BACK_LEVER: Exercise = {
    id: 'one-arm-back-lever',
    name: 'One Arm Back Lever',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a bar or gymnastic rings with one arm, rotate your body backward, and extend your legs until your body is horizontal, keeping your core engaged and shoulders stable. Start with regular back levers, assisted one-arm holds, and one-arm hanging exercises to develop shoulder strength, grip endurance, and body control. Gradually reduce assistance, practice controlled one-arm negatives, and work toward maintaining a full one-arm back lever with proper alignment and stability.',
    imageUrl: '/images/exercises/one-arm-back-lever.png',
  };
