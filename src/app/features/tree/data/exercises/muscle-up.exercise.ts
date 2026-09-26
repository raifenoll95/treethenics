import { Exercise } from '../../../../shared/models/exercise.model';

export const MUSCLE_UP: Exercise = {
    id: 'muscle-up',
    name: 'Muscle Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar','rings','added-weight'],
    description:
      'Hang from a pull-up bar, pull yourself explosively upward, transition your chest over the bar, and push up until your arms are fully extended. Start with explosive pull-ups, straight-bar dips, and assisted muscle-ups to develop the strength and coordination needed for the movement. Gradually reduce assistance, improve your transition technique, and work toward performing strict muscle-ups with controlled movements and minimal momentum.',
    imageUrl: '/images/exercises/muscle-up.png',
  };
