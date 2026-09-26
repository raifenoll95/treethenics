import { Exercise } from '../../../../shared/models/exercise.model';

export const PELICAN: Exercise = {
    id: 'pelican',
    name: 'Pelican',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in a back lever position on gymnastic rings with your body horizontal and arms straight, then rotate your shoulders and transition into a full planche while maintaining core tension and body alignment. Begin with back lever holds, assisted planche variations, and controlled transition exercises to develop shoulder strength, mobility, and straight-arm stability. Gradually reduce assistance, practice slow and controlled transitions, and focus on maintaining proper technique and ring stability as you progress toward performing the full Pelican.',
    imageUrl: '/images/exercises/pelican.png',
  };
