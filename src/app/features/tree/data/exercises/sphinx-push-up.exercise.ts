import { Exercise } from '../../../../shared/models/exercise.model';

export const SPHINX_PUSH_UP: Exercise = {
    id: 'sphinx-push-up',
    name: 'Sphinx Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['floor'],
    description:
      'Start in a forearm plank position with your elbows beneath your shoulders, engage your core, and push through your hands to lift your forearms off the ground until your arms are fully extended, then lower yourself with control. Begin with knee-supported Sphinx push-ups and regular forearm planks to develop triceps strength, shoulder stability, and core control. Gradually progress to full Sphinx push-ups, slow eccentric repetitions, and feet-elevated variations to increase difficulty while maintaining proper body alignment.',
    imageUrl: '/images/exercises/sphinx-push-up.png',
  };
