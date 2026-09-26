import { Exercise } from '../../../../shared/models/exercise.model';

export const L_SIT_PULL_UP: Exercise = {
      id: 'l-sit-pull-up',
      name: 'L-Sit Pull Up',
      difficulty: 'intermediate',
      movementType: 'dynamic',
      graphLevel: 2,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['hip-flexors', 'abdominals', 'forearms', 'quadriceps'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Hang from a pull-up bar with your legs extended forward at hip height, forming an L-shape, then pull your chin above the bar while keeping your core engaged and legs straight. Start with regular pull-ups, hanging leg raises, and tuck L-sit pull-ups to develop upper-body strength, core stability, and hip flexor endurance. Gradually extend your legs, improve your L-sit position, and incorporate controlled repetitions or weighted variations to increase difficulty and build greater strength.',
      imageUrl: '/images/exercises/l-sit-pull-up.png',
    };
