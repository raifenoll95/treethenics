import { Exercise } from '../../../../shared/models/exercise.model';

export const TOES_TO_BAR: Exercise = {
    id: 'toes-to-bar',
    name: 'Toes to Bar',
    movementType: 'dynamic',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'hip-flexors'],
    secondaryMuscles: ['obliques', 'latissimus-dorsi', 'forearms'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a pull-up bar with your arms extended, engage your core, and lift your legs until your toes touch the bar while keeping your movements controlled and minimizing swinging. Start with hanging knee raises and straight-leg raises to develop abdominal strength, grip endurance, and hip flexor control. Gradually increase your range of motion, incorporate controlled negatives, and progress toward strict toes-to-bar repetitions while maintaining proper technique and full-body stability.',
    imageUrl: '/images/exercises/toes-to-bar.png',
  };
