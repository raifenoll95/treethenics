import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND_PUSH_UP: Exercise = {
    id: 'handstand-push-up',
    name: 'Handstand Push Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'triceps', 'chest'],
    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a handstand position with your hands shoulder-width apart, bend your elbows to lower your head toward the floor, and push back up while maintaining a stable body position. Begin with pike push-ups and wall-assisted handstand push-ups to develop shoulder strength, balance, and control. Gradually increase your range of motion, reduce wall assistance, and progress toward freestanding handstand push-ups with proper technique and stability.',
    imageUrl: '/images/exercises/hspu3.png',
  };
