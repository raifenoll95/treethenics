import type { Exercise } from '../../../../shared/models/exercise.model';
import { NORDIC_CURL } from './nordic-curl.exercise';

export const NORDIC_CURL_ES: Exercise = {
  ...NORDIC_CURL,
  "name": "Curl nórdico",
  "description": "El curl nórdico trabaja los isquiotibiales con el peso corporal. Desde las rodillas y con los tobillos bien sujetos, resistes la caída del cuerpo hacia delante mientras las rodillas se extienden. Después vuelves al inicio con ayuda o con tu propia fuerza.",
  "overview": "La fase excéntrica es exigente y se puede entrenar antes de lograr una repetición completa sin asistencia. Baja hasta donde puedas frenar la caída con los isquiotibiales, recibe el peso con las manos y ayúdate a subir. Al ganar fuerza, amplía el recorrido controlado y reduce poco a poco la asistencia para llegar a hacer ambas fases.",
  "howTo": [
    {
      "title": "Sujeta los tobillos",
      "imageUrl": "/images/progressions/step-1.png",
      "description": "Arrodíllate sobre una superficie cómoda y fija los tobillos con un anclaje estable o con ayuda de otra persona. Empieza erguido, con las rodillas apoyadas y las caderas extendidas."
    },
    {
      "title": "Mantén firme el cuerpo",
      "imageUrl": "/images/progressions/step-2.png",
      "description": "Activa el abdomen y conserva una línea aproximadamente recta desde las rodillas hasta los hombros pasando por las caderas. Evita doblarte por la cintura para facilitar el movimiento."
    },
    {
      "title": "Frena la caída",
      "imageUrl": "/images/progressions/step-3.png",
      "description": "Inclínate despacio hacia delante desde las rodillas. Resiste con los isquiotibiales la palanca creciente y controla la bajada todo lo que puedas."
    },
    {
      "title": "Apoya las manos",
      "imageUrl": "/images/progressions/step-4.png",
      "description": "Cuando ya no puedas frenar el descenso, recibe el peso con las manos en el suelo. Ayúdate con los brazos solo lo necesario."
    },
    {
      "title": "Vuelve con asistencia",
      "imageUrl": "/images/progressions/step-5.png",
      "description": "Empuja ligeramente con las manos o usa otra ayuda para iniciar el regreso. Deja que los isquiotibiales hagan tanto trabajo como puedas y ve ampliando el recorrido con menos asistencia."
    }
  ],
  "commonMistakes": [
    {
      "title": "Doblarte por la cadera",
      "description": "Llevarla hacia atrás acorta la palanca y facilita el ejercicio. Mantén las caderas extendidas para que tronco y muslos se muevan juntos."
    },
    {
      "title": "Desplomarte durante la negativa",
      "description": "El descenso controlado es una parte importante del ejercicio. Si caes enseguida, reduce el recorrido o usa una banda para que los isquiotibiales puedan frenar el movimiento."
    },
    {
      "title": "Forzar la subida demasiado pronto",
      "description": "Volver desde abajo exige más que controlar parte de la bajada. Usa las manos, una banda u otra ayuda mientras ganas fuerza, sin alterar la postura para completar la repetición."
    },
    {
      "title": "Usar un anclaje inestable",
      "description": "Comprueba que el apoyo de los tobillos no pueda deslizarse, levantarse ni soltarse al cargarlo."
    }
  ],
  "faq": [
    {
      "question": "¿Qué músculos trabaja el curl nórdico?",
      "answer": "Los isquiotibiales frenan la extensión de rodilla al bajar y flexionan la rodilla al volver sin ayuda. Glúteos y abdomen mantienen la posición de cadera y tronco. Los gemelos también pueden colaborar en la rodilla."
    },
    {
      "question": "¿Tengo que hacer una repetición completa?",
      "answer": "No. Las negativas controladas sirven para entrenarlo. Baja hasta donde puedas, apoya las manos y ayúdate en la subida mientras amplías poco a poco el recorrido."
    },
    {
      "question": "¿Por qué puedo bajar pero no subir?",
      "answer": "La subida requiere mucha fuerza concéntrica de flexión de rodilla para vencer la palanca del cuerpo. Es normal dominar antes la negativa. Usa las manos o una banda al subir y reduce la ayuda con el tiempo."
    },
    {
      "question": "¿Cómo puedo facilitarlo?",
      "answer": "Usa una banda, acorta el recorrido o apoya las manos y empuja desde el suelo. Busca la ayuda que te permita controlar el tramo difícil sin caer de golpe."
    },
    {
      "question": "¿Conviene flexionar las caderas?",
      "answer": "En la versión convencional, mantenlas extendidas para que tronco y muslos avancen juntos. Doblarlas a propósito acorta la palanca y convierte el movimiento en una variante más fácil."
    }
  ],
  "seo": {
    "title": "Curl nórdico: técnica, músculos y progresiones | Treethenics",
    "description": "Aprende a hacer el curl nórdico para fortalecer los isquiotibiales con negativas controladas, progresiones asistidas y una técnica adecuada."
  }
};
