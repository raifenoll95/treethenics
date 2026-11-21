import { Exercise } from '../../../../shared/models/exercise.model';
import { PULL_UP } from './pull-up.exercise';

const descripcion =
  'La dominada es uno de los ejercicios básicos de calistenia. Trabaja la espalda, los bíceps y el abdomen, y te ayuda a desarrollar la fuerza de tirón que necesitarás para progresar hacia variantes más exigentes. Si estás empezando, puedes practicar el agarre en suspensión y usar una banda elástica hasta conseguir tu primera repetición completa.';

export const PULL_UP_ES: Exercise = {
  ...PULL_UP,

  name: 'Dominada',
  description: descripcion,
  overview: descripcion,

  howTo: [
    {
      title: 'Empieza por colgarte de la barra',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Agarra la barra y mantente en suspensión durante unos segundos. Familiarízate con la posición y con la sensación de sostener tu peso con las manos.',
    },
    {
      title: 'Practica con una banda elástica',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Usa una banda para ayudarte a subir. Elige una resistencia que te permita empezar con los brazos extendidos, superar la barra con la barbilla y bajar con control.',
    },
    {
      title: 'Trabaja con repeticiones parciales',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Si todavía te cuesta completar el recorrido, practica el tramo que puedes controlar. Por ejemplo, empieza con los codos ligeramente flexionados y ve ampliando el recorrido a medida que ganes fuerza.',
    },
    {
      title: 'Haz tu primera dominada completa',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Cuélgate con los brazos extendidos. Tira hasta que la barbilla quede por encima de la barra y baja con control hasta volver a la posición inicial.',
    },
    {
      title: 'Progresa hasta diez dominadas',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Cuando consigas tu primera dominada, aumenta poco a poco el número de repeticiones. Mantén el mismo recorrido en todas para poder comparar tu progreso de una sesión a otra.',
    },
  ],

  commonMistakes: [
    {
      title: 'Sumar repeticiones a costa de la técnica',
      description:
        'Cinco dominadas completas y controladas son una referencia más útil de tu progreso que quince hechas con balanceo o acortando el recorrido.',
    },
    {
      title: 'Entrenar dominadas a diario sin recuperar',
      description:
        'Las dominadas exigen esfuerzo a varios grupos musculares a la vez. Si acumulas fatiga entre sesiones, puede costarte mantener la técnica y repetir tu rendimiento.',
    },
    {
      title: 'Quedarte con la barbilla por debajo de la barra',
      description:
        'Empieza con los brazos extendidos y sube hasta que la barbilla supere la barra. Después, vuelve a extender los brazos con control antes de iniciar la siguiente repetición.',
    },
  ],

  faq: [
    {
      question: '¿Cuánto se tarda en conseguir la primera dominada?',
      answer:
        'Depende de tu punto de partida, tu peso corporal y la constancia con la que entrenes. Algunas personas lo consiguen en unas semanas y otras necesitan varios meses. Puedes medir tus avances observando si necesitas menos ayuda de la banda o si cada vez controlas una parte mayor del recorrido.',
    },
    {
      question: '¿Cuántas dominadas se consideran un buen número?',
      answer:
        'Diez dominadas estrictas son un buen objetivo. Llegar a quince con el mismo recorrido demuestra una buena combinación de fuerza y resistencia. Superar las veinte repeticiones limpias es una marca avanzada, más habitual entre quienes entrenan dominadas de forma específica.',
    },
  ],

  seo: {
    title: 'Dominada: técnica, músculos y progresiones | Treethenics',
    description:
      'Aprende a hacer tu primera dominada en barra. Descubre qué músculos trabaja, cómo progresar con bandas y qué errores evitar en cada repetición.',
  },
};
