import { Exercise } from '../../../../shared/models/exercise.model';

export const NORDIC_CURL: Exercise = {
    id: 'nordic-curl',
    name: 'Nordic Curl',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Kneel on a padded surface with your ankles securely anchored, keep your hips extended and core engaged, and slowly lower your torso forward while resisting the movement with your hamstrings. Start with assisted Nordic curls using resistance bands or your hands for support to develop hamstring strength, knee stability, and eccentric control. Gradually reduce assistance, increase your range of motion, and incorporate controlled negative repetitions before progressing toward full Nordic curls with proper technique..',
    imageUrl: '/images/exercises/nordic-curl.png',
  };
