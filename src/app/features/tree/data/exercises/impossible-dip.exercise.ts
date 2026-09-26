import { Exercise } from '../../../../shared/models/exercise.model';

export const IMPOSSIBLE_DIP: Exercise = {
    id: 'impossible-dip',
    name: 'Impossible Dip',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['parallettes'],
    description:
      'Start on parallel bars with your arms straight, then slowly lower your body by bending your elbows while keeping your forearms close to the bars and maintaining full-body control. Begin with regular dips, deep dips, and assisted impossible dips to develop the triceps, shoulder strength, and mobility required for the movement. Gradually reduce assistance, practice controlled negatives, and work toward performing the full impossible dip with proper technique and stability.',
    imageUrl: '/images/exercises/impossible-dip.png',
  };
