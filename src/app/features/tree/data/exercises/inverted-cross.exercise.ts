import { Exercise } from '../../../../shared/models/exercise.model';

export const INVERTED_CROSS: Exercise = {
    id: 'inverted-cross',
    name: 'Inverted Cross',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'trapezius'],
    secondaryMuscles: ['triceps', 'chest', 'abdominals'],
    equipment: ['rings'],
    description:
      'tart in a handstand position on gymnastic rings, extend your arms horizontally to the sides, and maintain your body vertically inverted while keeping your elbows straight, core engaged, and shoulders stable. Begin with ring handstands, assisted inverted cross holds, and controlled shoulder exercises to develop straight-arm strength, balance, and stability. Gradually reduce assistance, increase your arm extension, and practice controlled transitions from a handstand into the inverted cross while maintaining proper body alignment and ring control.',
    imageUrl: '/images/exercises/inverted-cross.png',
  };
