import { Exercise } from '../../../../shared/models/exercise.model';

export const TUCK_ADVANCED_PLANCHE: Exercise = {
    id: 'tuck-advanced-planche',
    name: 'Tuck Advanced Planche',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean your shoulders forward, and lift your feet off the ground while keeping your arms straight, back flat, and knees bent away from your chest. Start with tuck planche holds, planche leans, and assisted advanced tuck variations to develop shoulder strength, wrist stability, and core control. Gradually extend your hips, increase your forward lean, and progress toward the straddle planche by extending your legs while maintaining proper alignment and balance.',
    imageUrl: '/images/exercises/tuck-advanced-planche.png',
  };
