import { Exercise } from '../../../../shared/models/exercise.model';

export const ENTRADA_DE_ANGEL: Exercise = {
    id: 'entrada-de-angel',
    name: 'Entrada de Ángel',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a supported position on a pull-up bar, lean your torso forward, and rotate your body backward while maintaining straight arms and controlled shoulder movement to transition into a back lever position. Begin with skin the cat, German hangs, and tuck back lever transitions to develop shoulder mobility, strength, and body awareness. Gradually increase your range of motion, practice assisted entries, and reduce assistance as you improve your control and coordination throughout the movement.',
    imageUrl: '/images/exercises/entrada-angel.png',
  };
