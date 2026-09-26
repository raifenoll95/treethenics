import { Exercise } from '../../../../shared/models/exercise.model';

export const HEFESTO: Exercise = {
    id: 'hefesto',
    name: 'Hefesto',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a bar or gymnastic rings with a supinated grip, rotate your shoulders backward, and pull your body upward from a German hang position until you reach a supported position with your arms extended. Start with assisted Hefesto transitions, German hangs, and reverse curls to develop biceps strength, shoulder mobility, and control. Gradually reduce assistance, incorporate controlled negative repetitions, and work toward performing the full Hefesto with proper technique and stability.',
    imageUrl: '/images/exercises/hefesto.png',
  };
