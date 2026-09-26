import { Exercise } from '../../../../shared/models/exercise.model';

export const DIPS: Exercise = {
    id: 'dips',
    name: 'Dips',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

    showInTree: true,
    category: 'push',

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],

    equipment: [
      'parallettes', 'added-weight', 'rings'
    ],

    description:
      'Grip the parallel bars, lower your body by bending your elbows, and push back up while keeping your core engaged and movements controlled. Start with assisted dips or resistance bands to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight to increase the difficulty and continue building upper-body strength.',

    imageUrl: '/images/exercises/dips.png',
  };
