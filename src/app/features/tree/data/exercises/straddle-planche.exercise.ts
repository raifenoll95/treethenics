import { Exercise } from '../../../../shared/models/exercise.model';

export const STRADDLE_PLANCHE: Exercise = {
    id: 'straddle-planche',
    name: 'Straddle Planche',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your body horizontally with your arms straight and legs spread apart, keeping your core engaged and shoulders stable. Start with tuck planche and advanced tuck planche variations to develop shoulder strength, wrist stability, and body control. Gradually extend your legs into a wider straddle position, increase your forward lean, and practice assisted holds and controlled negatives to achieve a full straddle planche with proper alignment and balance.',
    imageUrl: '/images/exercises/straddle-planche.png',
  };
