import { Exercise } from '../../../../shared/models/exercise.model';

export const KOREAN_DIP: Exercise = {
    id: 'korean-dip',
    name: 'Korean Dip',
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
      'Position yourself on a straight bar with your hands behind your body, then bend your elbows to lower yourself while maintaining control and keeping your shoulders stable. Start with regular dips and straight-bar dips to develop upper-body strength, gradually introducing assisted Korean dips to improve shoulder mobility and stability. As your strength and flexibility improve, reduce assistance and focus on performing the full movement with proper technique and a controlled range of motion.',
    imageUrl: '/images/exercises/korean-dip.png',
  };
