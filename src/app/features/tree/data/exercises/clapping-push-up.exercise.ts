import { Exercise } from '../../../../shared/models/exercise.model';

export const CLAPPING_PUSH_UP: Exercise = {
    id: 'clapping-push-up',
    name: 'Clapping Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Start in a standard push-up position, lower your chest toward the floor, and push explosively to lift your hands off the ground, clap in mid-air, and land softly with slightly bent elbows. Begin with regular push-ups and explosive push-ups without clapping to develop upper-body strength, power, and coordination. Gradually increase your explosiveness, practice controlled landings, and progress toward multiple claps or more advanced plyometric push-up variations while maintaining proper technique.',
    imageUrl: '/images/exercises/clapping-push-up.png',
  };
