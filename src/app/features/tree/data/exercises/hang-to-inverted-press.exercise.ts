import { Exercise } from '../../../../shared/models/exercise.model';

export const HANG_TO_INVERTED_PRESS: Exercise = {
    id: 'hang-to-inverted-press',
    name: 'Inverted Press',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'front-deltoids'],
    secondaryMuscles: ['upper-back', 'biceps', 'forearms', 'hip-flexors'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms extended, engage your core, and pull your body upward while keeping your legs straight until you reach a fully inverted position with your hips close to the bar. Start with hanging leg raises, inverted hangs, and assisted inverted presses to develop core strength, pulling power, and body control. Gradually reduce assistance, incorporate controlled negatives, and focus on maintaining straight legs and smooth movement throughout the transition to perform the full inverted press with proper technique.',
    imageUrl: '/images/exercises/inverted.png',
  };
