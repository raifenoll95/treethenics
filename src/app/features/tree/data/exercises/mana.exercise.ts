import { Exercise } from '../../../../shared/models/exercise.model';

export const MANA: Exercise = {
    id: 'mana',
    name: 'Manna',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Support your body on the floor or parallel bars with your hands beside your hips, keep your arms straight, and lift your legs and hips upward until your body forms a horizontal position with your legs extended behind your torso. Start with L-sits, V-sits, and seated compression exercises to develop core strength, shoulder mobility, and flexibility. Gradually increase your hip elevation, improve your shoulder extension, and practice assisted manna holds to build the strength and control needed to achieve the full position.',
    imageUrl: '/images/exercises/manna.png',
  };
