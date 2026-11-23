import type { Exercise } from '../../../../shared/models/exercise.model';
import { BURPEES } from './burpees.exercise';

export const BURPEES_ES: Exercise = {
  ...BURPEES,
  "name": "Burpees",
  "description": "El burpee combina una sentadilla, el paso a plancha, el regreso a los pies y un salto vertical explosivo. Desarrolla resistencia cardiovascular, coordinación y potencia de piernas al alternar entre el suelo y la posición de pie.",
  "overview": "Flexiona las rodillas y apoya las manos por delante. Salta con los pies atrás hasta quedar en plancha y recógelos bajo el cuerpo. Levántate y salta en vertical. Mantén el tronco firme al entrar en plancha y busca fluidez antes de aumentar el ritmo.",
  "howTo": [
    {
      "title": "Baja al suelo",
      "imageUrl": "/images/progressions/step-1.png",
      "description": "Flexiona caderas y rodillas desde la posición de pie y apoya ambas manos delante de los pies."
    },
    {
      "title": "Salta a plancha",
      "imageUrl": "/images/progressions/step-2.png",
      "description": "Lleva ambos pies atrás de un salto, con las manos bajo los hombros o cerca de esa línea."
    },
    {
      "title": "Estabiliza el tronco",
      "imageUrl": "/images/progressions/step-3.png",
      "description": "Activa el abdomen para evitar hundir la cadera al extender las piernas."
    },
    {
      "title": "Recoge los pies",
      "imageUrl": "/images/progressions/step-4.png",
      "description": "Acerca ambos pies a las manos de un salto y apóyalos bien en una sentadilla compacta."
    },
    {
      "title": "Salta en vertical",
      "imageUrl": "/images/progressions/step-5.png",
      "description": "Empuja el suelo con las piernas para incorporarte y saltar. Aterriza suavemente con las rodillas algo flexionadas y recupera el equilibrio antes de repetir."
    }
  ],
  "commonMistakes": [
    {
      "title": "Hundir la cadera",
      "description": "Aprieta el abdomen al saltar atrás para que la zona lumbar no caiga hacia el suelo."
    },
    {
      "title": "Aterrizar con las piernas rígidas",
      "description": "Amortigua el salto flexionando tobillos, rodillas y caderas."
    },
    {
      "title": "Precipitar la bajada",
      "description": "Asegura primero el apoyo de las manos para evitar que la transición se convierta en una caída."
    },
    {
      "title": "Dejar los pies lejos de las manos",
      "description": "Al salir de plancha, recoge los pies lo suficiente para poder levantarte y saltar desde una base firme."
    },
    {
      "title": "Añadir una flexión sin proponértelo",
      "description": "En el burpee básico de Treethenics el pecho no tiene que tocar el suelo. Si añades una flexión, mantén esa variante en toda la serie."
    }
  ],
  "faq": [
    {
      "question": "¿Qué es un burpee?",
      "answer": "Es un ejercicio de acondicionamiento de cuerpo completo que enlaza la posición de pie con una plancha y el regreso a los pies. Suele terminar en salto."
    },
    {
      "question": "¿Incluye una flexión?",
      "answer": "Hay varias versiones. En Treethenics se pasa de plancha a sentadilla directamente. Una flexión añade dificultad y más trabajo de tren superior."
    },
    {
      "question": "¿Qué músculos trabajan?",
      "answer": "Cuádriceps y glúteos producen la mayor parte del impulso, con ayuda de los gemelos en el salto. Hombros, tríceps y abdomen estabilizan la plancha."
    },
    {
      "question": "¿Sirven para hacer cardio?",
      "answer": "Sí. Desplazar repetidamente gran parte del peso corporal puede elevar rápidamente las pulsaciones y exige resistencia muscular."
    },
    {
      "question": "¿Cómo reduzco la dificultad?",
      "answer": "Quita el salto final y lleva los pies atrás de uno en uno. Recupera las transiciones con salto conforme ganes coordinación y resistencia."
    }
  ],
  "seo": {
    "title": "Burpees: técnica, músculos y ejecución | Treethenics",
    "description": "Aprende a enlazar la plancha y el salto en el burpee. Descubre los músculos implicados, las variantes iniciales y los errores frecuentes."
  }
};
