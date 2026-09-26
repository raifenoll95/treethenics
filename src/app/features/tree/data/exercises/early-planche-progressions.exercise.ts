import { Exercise } from '../../../../shared/models/exercise.model';

export const EARLY_PLANCHE_PROGRESSIONS: Exercise = {
    id: 'early-planche-progressions',
    name: 'Tucked Planche',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your feet off the ground while keeping your knees tucked toward your chest and your arms straight. Start with planche leans and frog stands to develop wrist strength, shoulder stability, and core control. Gradually increase your forward lean, improve your balance, and progress toward the advanced tuck planche by extending your hips and moving your knees farther away from your chest.',
    imageUrl: '/images/exercises/tuck-planche.png',
  };
