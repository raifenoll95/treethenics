import type { Exercise } from '../../../../shared/models/exercise.model';
import { CRUNCH } from './crunch.exercise';

export const CRUNCH_ES: Exercise = {
  ...CRUNCH,
  "name": "Crunch abdominal",
  "description": "El crunch es un ejercicio de abdomen para principiantes. Flexionas el tronco para acercar las costillas a la pelvis y solo despegas la cabeza y la parte alta de la espalda. Su recorrido, más corto que el de un sit-up, permite concentrarse en la contracción abdominal.",
  "overview": "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados. Contrae el abdomen y curva el tronco para levantar los hombros. Piensa en mover las costillas y deja el cuello relajado. No hace falta llegar a sentarte: baja con el mismo control con el que has subido.",
  "howTo": [
    {
      "title": "Prepara la posición",
      "imageUrl": "/images/progressions/step-1.png",
      "description": "Túmbate boca arriba con las rodillas dobladas y los pies apoyados a la anchura de las caderas. Cruza los brazos sobre el pecho o apoya ligeramente las manos a los lados de la cabeza."
    },
    {
      "title": "Activa el abdomen",
      "imageUrl": "/images/progressions/step-2.png",
      "description": "Contrae los abdominales antes de empezar. Relaja las piernas y piensa en acortar la distancia entre las costillas y la pelvis."
    },
    {
      "title": "Flexiona el tronco",
      "imageUrl": "/images/progressions/step-3.png",
      "description": "Despega la cabeza y los hombros contrayendo el abdomen. Evita adelantar solo la cabeza. Sube lo suficiente para sentir una contracción clara."
    },
    {
      "title": "Baja con control",
      "imageUrl": "/images/progressions/step-4.png",
      "description": "Deshaz el movimiento despacio hasta apoyar de nuevo la parte alta de la espalda. Evita dejar caer los hombros antes de empezar la siguiente repetición."
    }
  ],
  "commonMistakes": [
    {
      "title": "Tirar del cuello",
      "description": "Deja que los abdominales generen el movimiento. Si tiendes a tirar de la cabeza hacia las rodillas, cruza los brazos sobre el pecho."
    },
    {
      "title": "Convertir el crunch en un sit-up",
      "description": "En el crunch se levantan los hombros y la parte superior de la espalda. La zona lumbar permanece casi por completo apoyada."
    },
    {
      "title": "Mover solo la cabeza",
      "description": "Acercar la barbilla al pecho apenas flexiona el tronco. Lleva las costillas hacia la pelvis hasta que los hombros se despeguen."
    },
    {
      "title": "Aprovechar la inercia",
      "description": "Evita lanzar los brazos o rebotar entre repeticiones. Controla con el abdomen tanto la subida como la bajada."
    }
  ],
  "faq": [
    {
      "question": "¿Qué músculos trabaja el crunch?",
      "answer": "Principalmente el recto abdominal, que recorre la parte anterior del abdomen. También colaboran los oblicuos y otros músculos del tronco."
    },
    {
      "question": "¿Qué diferencia hay entre un crunch y un sit-up?",
      "answer": "En el crunch solo curvas y elevas la parte alta del tronco. En el sit-up te incorporas hacia las piernas, de modo que interviene mucho más la articulación de la cadera."
    },
    {
      "question": "¿Puedo colocar las manos detrás de la cabeza?",
      "answer": "Sí, si las apoyas con suavidad y mantienes relajado el cuello. Si tiras de la cabeza hacia delante, cruza los brazos sobre el pecho hasta tener más control."
    },
    {
      "question": "¿Tengo que subir hasta sentarme?",
      "answer": "No. Acerca las costillas a la pelvis hasta que se despeguen los hombros y la parte alta de la espalda y sientas cómo se contrae el abdomen. Después baja con control."
    }
  ],
  "seo": {
    "title": "Crunch abdominal: técnica y músculos | Treethenics",
    "description": "Aprende a hacer el crunch abdominal, qué músculos trabaja y cómo evitar los errores de postura más frecuentes."
  }
};
