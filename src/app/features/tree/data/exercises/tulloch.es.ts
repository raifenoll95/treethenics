import type { Exercise } from '../../../../shared/models/exercise.model';
import { TULLOCH } from './tulloch.exercise';

export const TULLOCH_ES: Exercise = {
  ...TULLOCH,
  "name": "Tulloch",
  "description": "Mantén la tensión en todo el cuerpo y controla la posición de las escápulas durante el Tulloch. La espalda y los hombros sostienen el cuerpo en palanca mientras el tronco estabiliza la posición."
};
