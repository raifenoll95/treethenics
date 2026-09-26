import { Exercise } from '../../../../shared/models/exercise.model';

export const CHEST_TO_BAR: Exercise = {
    id: 'chest-to-bar',
    name: 'Chest to Bar',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'Grip the bar slightly wider than shoulder-width apart, engage your core, and pull yourself up until your chest touches the bar, then lower yourself with control. Start with regular pull-ups or assisted chest-to-bar pull-ups to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight or progress to explosive chest-to-bar pull-ups to increase difficulty and develop upper-body strength.',

    imageUrl: '/images/exercises/chest-to-bar.png',
  };
