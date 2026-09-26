import { Exercise } from '../../../../shared/models/exercise.model';

export const FULL_PLANCHE_RINGS: Exercise = {
    id: 'full-planche-rings',
    name: 'Rings Full Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms straight, legs fully extended, and core engaged, keeping the rings stable and your body parallel to the ground. Start with ring support holds, tuck planche variations, and assisted ring planches to develop shoulder strength, balance, and stability. Gradually progress through advanced tuck and straddle planche variations, reducing assistance while focusing on ring control and proper body alignment before attempting the full planche on rings.',
    imageUrl: '/images/exercises/full-rings.png',
  };
