import { Exercise } from '../../../../shared/models/exercise.model';

export const IRON_CROSS: Exercise = {
    id: 'iron-cross',
    name: 'Iron Cross',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body on gymnastic rings with your arms extended horizontally to the sides, keeping your elbows straight, shoulders stable, and core engaged. Start with ring support holds, assisted iron cross variations, and controlled cross pulls to develop shoulder strength, tendon resilience, and stability. Gradually reduce assistance using resistance bands or a pulley system, focusing on maintaining proper alignment and control as you progress toward the full iron cross.',
    imageUrl: '/images/exercises/iron-cross.png',
  };
