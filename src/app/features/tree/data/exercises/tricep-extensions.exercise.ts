import { Exercise } from '../../../../shared/models/exercise.model';

export const TRICEP_EXTENSIONS: Exercise = {
    id: 'tricep-extensions',
    name: 'Tricep Extensions',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'static',
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Grip a horizontal bar with both hands, lean forward with your body straight, and bend your elbows to lower your head toward the bar before extending your arms to push back up. Start with a higher bar and a more upright body position to develop triceps strength, shoulder stability, and core control. Gradually lower the bar, increase your body angle, and incorporate slow negatives or single-arm assisted variations to increase difficulty while maintaining proper technique.',
    imageUrl: '/images/exercises/tricep-extensions.png',
  };
