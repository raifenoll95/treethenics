import { Exercise } from '../../../../shared/models/exercise.model';

export const WAIST_PULL_UP: Exercise = {
  id: 'waist-pull-up',
  name: 'Waist Pull Up',
  movementType: 'dynamic',
  difficulty: 'advanced',
  graphLevel: 4,
  showInTree: true,
  category: 'pull',

  targetAreas: ['back', 'biceps'],

  primaryMuscles: [
    'latissimus-dorsi',
    'upper-back',
    'biceps'
  ],

  secondaryMuscles: [
    'rear-deltoids',
    'forearms',
    'abdominals',
    'chest'
  ],

  equipment: ['pull-up-bar'],

  description:
    'The Waist Pull Up is an advanced explosive Pull Up variation where you pull significantly higher than chest level, bringing the bar towards your lower abdomen or waist. It develops the high-range pulling power and coordination needed for advanced bar skills such as the Muscle Up.',

  overview:
    'The Waist Pull Up takes explosive pulling strength far beyond a normal Pull Up. Start from a controlled hang and accelerate your body upward as powerfully as possible. As you rise, allow your torso to lean slightly backwards so the bar can travel past your chest towards your lower abdomen and waist. Keep your legs controlled and avoid using a deliberate kip or knee drive. The goal is maximum pulling height while remaining below the bar rather than transitioning into a Muscle Up.',

  howTo: [
    {
      title: 'Start from a controlled hang',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Take an overhand grip around shoulder width and begin with your elbows straight. Brace your core, keep your legs controlled, and eliminate unnecessary swinging before the pull.'
    },
    {
      title: 'Pull explosively',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Drive your elbows down and accelerate upward as powerfully as possible. Unlike a regular Pull Up, continue producing force after your chin and chest have passed bar height.'
    },
    {
      title: 'Create space from the bar',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Allow your torso to lean slightly backwards as you rise so the bar can travel towards your lower torso instead of stopping against your upper chest.'
    },
    {
      title: 'Reach the waist',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Continue pulling until the bar reaches or closely approaches your lower abdomen or natural waistline. Stay below the bar instead of rolling your shoulders over it into a Muscle Up transition.'
    },
    {
      title: 'Lower under control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Reverse the movement smoothly and return to straight arms. Regain control of any swing before beginning another explosive repetition.'
    },
  ],

  commonMistakes: [
    {
      title: 'Stopping at chest height',
      description:
        'A Chest to Bar Pull Up is an important progression, but it does not reach the height required for a Waist Pull Up. Continue developing explosive pulling power and progressively target the lower chest, ribs, abdomen, and finally the waist.'
    },
    {
      title: 'Pulling completely vertically',
      description:
        'Trying to keep your torso perfectly vertical causes the bar to block your path as you reach chest height. A controlled backward torso angle creates the space needed to pull towards the abdomen and waist.'
    },
    {
      title: 'Using a large kip',
      description:
        'Aggressively swinging the legs or driving the knees can create height without demonstrating the required pulling power. Keep the lower body controlled and generate the repetition primarily through an explosive upper-body pull.'
    },
    {
      title: 'Turning it into a Muscle Up',
      description:
        'Do not throw your shoulders over the bar or begin pressing into support at the top. The Waist Pull Up finishes as a high pull while the body remains below the bar.'
    },
  ],

  relatedExercises: [
    'pull-up',
    'high-pull-up',
    'muscle-up'
  ],

  faq: [
    {
      question: 'What is a Waist Pull Up?',
      answer:
        'The Waist Pull Up is an explosive Pull Up variation where you pull high enough for the bar to reach approximately your lower abdomen or waist. It requires substantially more pulling height and power than a standard Pull Up.'
    },
    {
      question: 'Is a Waist Pull Up the same as a High Pull Up?',
      answer:
        'The Waist Pull Up can be considered an advanced High Pull Up target. High Pull Up is a broader term that can include pulls towards the chest, lower ribs, or abdomen, while Waist Pull Up specifically describes reaching approximately waist height.'
    },
    {
      question: 'What is the difference between Chest to Bar and Waist Pull Up?',
      answer:
        'A Chest to Bar Pull Up finishes when the chest reaches the bar. In a Waist Pull Up, you continue pulling significantly higher until the lower abdomen or waist approaches the bar, requiring greater acceleration and high-range pulling strength.'
    },
    {
      question: 'Should I use momentum for a Waist Pull Up?',
      answer:
        'The Treethenics version is performed without a deliberate kip or knee drive. The movement should still be explosive, but the height should come primarily from powerful upper-body pulling rather than a large body swing.'
    },
    {
      question: 'Does the Waist Pull Up help with Muscle Ups?',
      answer:
        'Yes. Pulling towards the lower abdomen or waist develops the height and explosive pulling strength that make the Muscle Up transition easier. However, the Muscle Up also requires its own transition technique and pressing strength above the bar.'
    },
  ],

  seo: {
    title:
      'Waist Pull Up: Technique, Muscles & Progressions | Treethenics',

    description:
      'Learn the Waist Pull Up with explosive waist-to-bar technique, muscles worked, progressions and common mistakes for higher Pull Ups and Muscle Ups.',
  },

  imageUrl: '/images/exercises/waist-pull-up.png',
};
