import { Exercise } from '../../../../shared/models/exercise.model';

export const ARM_LEVER: Exercise = {
    id: 'arm-lever',
    name: 'Arm Lever HACER',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: [],
    description:
      'Balance the torso horizontally on a bent supporting arm with the elbow braced against the body. Lift the legs and maintain a firm trunk while shifting the center of mass over the hand. The shoulder, chest and triceps stabilize the hold.',
    imageUrl: '/images/exercises/arm-lever.png',
  };
