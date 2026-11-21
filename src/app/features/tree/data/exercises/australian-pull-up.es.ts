import type { Exercise } from '../../../../shared/models/exercise.model';
import { AUSTRALIAN_PULL_UP } from './australian-pull-up.exercise';

export const AUSTRALIAN_PULL_UP_ES: Exercise = {
  ...AUSTRALIAN_PULL_UP,

  name: 'Dominada australiana',

  description:
    'La dominada australiana, también llamada remo invertido, es un ejercicio de tirón en el que acercas el pecho a una barra baja con los pies apoyados en el suelo. La inclinación del cuerpo te permite ajustar cuánto peso mueves y desarrollar la fuerza de espalda y brazos que necesitarás para las dominadas.',

  overview:
    'En la dominada australiana te colocas debajo de una barra baja y tiras del cuerpo hacia ella con un movimiento de remo. Los pies permanecen apoyados mientras los dorsales, la parte superior de la espalda y los bíceps acercan el pecho a la barra. Si estás empezando, coloca el cuerpo bastante erguido. A medida que ganes fuerza, adelanta los pies para trabajar en una posición más horizontal.',

  howTo: [
    {
      title: 'Elige una inclinación que puedas controlar',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Agarra una barra baja con las manos algo más separadas que la anchura de los hombros. Adelanta los pies y deja los brazos extendidos. Para las primeras repeticiones, busca una posición bastante erguida. Cuanto más horizontal quede el cuerpo, mayor será el esfuerzo.',
    },
    {
      title: 'Alinea los hombros, las caderas y las piernas',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Apoya bien los pies y contrae el abdomen y los glúteos. Mantén esa tensión para que el pecho y la cadera suban y bajen juntos durante toda la repetición.',
    },
    {
      title: 'Acerca el pecho a la barra',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Lleva los codos hacia atrás y junta las escápulas a medida que subes. Dirige el pecho hacia la barra y mantén el cuello alineado con el tronco.',
    },
    {
      title: 'Desciende con control',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Extiende los codos poco a poco hasta volver a la posición inicial. Termina con los brazos estirados y conserva la tensión en el abdomen y los glúteos hasta completar la bajada.',
    },
    {
      title: 'Progresa hacia una posición más horizontal',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Cuando puedas completar las repeticiones con buen control, adelanta un poco más los pies. Así acercarás el cuerpo a la horizontal. Cuando domines esa posición, puedes empezar a incorporar dominadas en barra alta.',
    },
  ],

  commonMistakes: [
    {
      title: 'Dejar caer la cadera',
      description:
        'Si el pecho sube y la cadera se queda atrás, pierdes la alineación del cuerpo. Contrae el abdomen y los glúteos desde el inicio. Si te cuesta mantener la postura, utiliza una posición más erguida.',
    },
    {
      title: 'Adelantar la barbilla para llegar a la barra',
      description:
        'Estirar el cuello puede dar la impresión de que has completado la repetición cuando el tronco aún está lejos de la barra. Mantén la cabeza alineada y fíjate en la distancia entre el pecho y la barra.',
    },
    {
      title: 'Encoger los hombros',
      description:
        'Si los hombros se acercan a las orejas durante la subida, revisa el tirón. Lleva los codos hacia atrás y controla el movimiento de las escápulas.',
    },
    {
      title: 'Empezar con demasiada inclinación',
      description:
        'Si pierdes la posición del cuerpo antes de acercar el pecho a la barra, eleva la barra o retrasa un poco los pies. Vuelve a aumentar la inclinación cuando puedas completar el recorrido con control.',
    },
  ],

  faq: [
    {
      question: '¿La dominada australiana ayuda a conseguir la primera dominada?',
      answer:
        'Sí. Fortalece los dorsales, la parte superior de la espalda y los bíceps, que también intervienen en la dominada en barra alta. Como el remo invertido trabaja el tirón en horizontal, conviene combinarlo con práctica de tirón vertical para preparar tu primera dominada.',
    },
    {
      question: '¿Cómo puedo hacer el remo invertido más fácil o más difícil?',
      answer:
        'Ajusta la posición de los pies. Con el tronco más erguido, la repetición resulta más fácil. Al adelantar los pies, el cuerpo queda más horizontal y aumenta la dificultad sin necesidad de añadir lastre.',
    },
    {
      question: '¿Tiene que tocar el pecho la barra?',
      answer:
        'El contacto con el pecho es una buena referencia si la altura de la barra y tu posición lo permiten. Acércate todo lo que puedas con control, manteniendo la cadera alineada y el cuello en una posición cómoda.',
    },
    {
      question: '¿Qué músculos trabaja la dominada australiana?',
      answer:
        'Los principales son los dorsales, la musculatura de la parte superior de la espalda y los bíceps. Los deltoides posteriores y los antebrazos también participan en el tirón, mientras que el abdomen ayuda a estabilizar el cuerpo.',
    },
  ],

  seo: {
    title: 'Dominada australiana o remo invertido: técnica y músculos | Treethenics',
    description:
      'Aprende a hacer la dominada australiana en barra baja, ajustar la inclinación, corregir los errores frecuentes y progresar hacia tu primera dominada.',
  },
};
