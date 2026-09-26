import { Exercise } from '../../../../shared/models/exercise.model';

export const BROAD_JUMPS: Exercise = {
    id: 'broad-jumps',
    name: 'Broad Jumps',
    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand with your feet shoulder-width apart, bend your knees, swing your arms backward, and jump explosively forward, landing softly with both feet while maintaining balance and control. Start with regular squats, standing jumps, and controlled landings to develop leg strength, explosive power, and coordination. Gradually increase your jumping distance, incorporate consecutive broad jumps or single-leg variations, and focus on improving your takeoff technique and landing stability.',
    imageUrl: '/images/exercises/broad-jumps.png',
  };
