import { Exercise } from '../../../../shared/models/exercise.model';

export const DECLINE_PUSH_UP: Exercise = {
    id: 'decline-push-up',
    name: 'Decline Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your feet on an elevated surface and your hands on the floor, keeping your body straight as you lower your chest toward the ground before pushing back up with control. Start with regular push-ups and gradually increase the height of your feet to develop upper chest, shoulder, and triceps strength. Progress by incorporating slow negatives, weighted variations, or transitioning toward pike push-ups to increase difficulty and build greater upper-body strength.',
    imageUrl: '/images/exercises/decline-push-up.png',
  };
