import { Exercise } from '../../../../shared/models/exercise.model';

export const HANDSTAND_RINGS: Exercise = {
    id: 'handstand-rings',
    name: 'Rings Handstand',
    difficulty: 'advanced',
    movementType: 'static',
    graphLevel: 5,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body upside down on gymnastic rings with your arms straight, core engaged, and legs extended, keeping the rings stable and your body aligned. Start with floor handstands, ring support holds, and assisted ring handstands to develop shoulder strength, balance, and stability. Gradually reduce assistance, practice controlled kick-ups and weight shifts, and focus on maintaining proper alignment and ring control as you progress toward a freestanding handstand on rings.',

    imageUrl: '/images/exercises/handstand-rings.png',
  };
