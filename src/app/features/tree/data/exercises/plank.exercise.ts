import { Exercise } from '../../../../shared/models/exercise.model';

export const PLANK: Exercise = {
  id: 'plank',
  name: 'Plank',
  movementType: 'static',
  difficulty: 'beginner',
  graphLevel: 1,
  showInTree: false,
  category: 'core',

  targetAreas: ['core'],

  primaryMuscles: [
    'abdominals'
  ],

  secondaryMuscles: [
    'obliques',
    'serratus-anterior',
    'glutes',
    'quadriceps'
  ],

  equipment: ['floor'],

  description:
    'The Plank is a fundamental isometric core exercise where you support your body on your forearms and toes while maintaining a rigid position from head to heels. Instead of moving the spine, your core works to resist extension and keep your torso stable.',

  overview:
    'The Plank is one of the simplest ways to learn full-body bracing and core stability. Place your elbows beneath your shoulders, extend your legs behind you, and create tension through your abdominals, glutes, and legs. The goal is not simply to stay off the floor for as long as possible. Maintain a controlled neutral position and end the hold when your hips begin to sag, rise excessively, or your lower back starts to arch.',

  howTo: [
    {
      title: 'Set your forearms',
      imageUrl: '/images/progressions/step-1.png',
      description:
        'Place your forearms on the floor with your elbows approximately underneath your shoulders. Keep your neck relaxed and your head aligned with your spine.'
    },
    {
      title: 'Extend your legs',
      imageUrl: '/images/progressions/step-2.png',
      description:
        'Step your feet back and support your lower body on your toes. Extend your knees and create a straight body position from your head through your hips to your heels.'
    },
    {
      title: 'Brace your core',
      imageUrl: '/images/progressions/step-3.png',
      description:
        'Tighten your abdominals and glutes while keeping your ribs and pelvis controlled. Avoid allowing your lower back to arch as you settle into the hold.'
    },
    {
      title: 'Push into the floor',
      imageUrl: '/images/progressions/step-4.png',
      description:
        'Maintain active pressure through your forearms and keep your shoulders stable instead of collapsing between them. Keep your entire body engaged throughout the position.'
    },
    {
      title: 'Hold with control',
      imageUrl: '/images/progressions/step-5.png',
      description:
        'Breathe normally while maintaining your body position. End the hold when you can no longer keep your hips, spine, and shoulders controlled rather than sacrificing form for extra time.'
    },
  ],

  commonMistakes: [
    {
      title: 'Letting the hips sag',
      description:
        'Allowing your hips to fall towards the floor increases lumbar extension and means you are losing the anti-extension position. Tighten your abdominals and glutes or finish the hold when you can no longer maintain alignment.'
    },
    {
      title: 'Piking the hips too high',
      description:
        'Raising your hips excessively makes the position easier and changes the exercise. Keep your hips approximately in line with your shoulders and heels instead of turning the Plank into an inverted V.'
    },
    {
      title: 'Chasing longer hold times',
      description:
        'A longer Plank is not automatically a better Plank. Once your alignment and full-body tension begin to break down, end the set rather than remaining in a compromised position just to increase the timer.'
    },
    {
      title: 'Holding your breath',
      description:
        'Bracing your core does not require you to stop breathing. Maintain controlled breathing while keeping your torso rigid and your abdominal tension consistent.'
    },
  ],

  relatedExercises: [
    'side-plank',
    'hollow-body-hold',
    'plank-walkup'
  ],

  faq: [
    {
      question: 'What is a Plank?',
      answer:
        'The Plank is a static core exercise where you support yourself on your forearms and toes while maintaining a rigid body position. Your core works isometrically to resist unwanted movement of the spine and pelvis.'
    },
    {
      question: 'What muscles does the Plank work?',
      answer:
        'The abdominal muscles provide much of the core stabilization, while the obliques and deeper trunk muscles help maintain spinal and pelvic control. The shoulders, serratus, glutes, and quadriceps also contribute to maintaining the full-body position.'
    },
    {
      question: 'How long should I hold a Plank?',
      answer:
        'There is no need to chase a specific maximum time. Hold the position only while you can maintain good alignment, controlled breathing, and full-body tension. As longer holds become easy, progressing to a harder variation can be more useful than continuously adding time.'
    },
    {
      question: 'Why does my lower back hurt during Planks?',
      answer:
        'A common reason is losing abdominal tension and allowing the hips to sag, which increases extension through the lower back. Reduce the duration or use an easier variation if you cannot maintain a controlled position without discomfort.'
    },
    {
      question: 'Is a forearm Plank or straight-arm Plank better?',
      answer:
        'Neither is universally better. The forearm Plank is the standard variation used here for basic core stability, while the straight-arm version changes the upper-body support and is useful as a separate progression or variation.'
    },
  ],

  seo: {
    title:
      'Plank: Proper Form, Muscles Worked & Progressions | Treethenics',

    description:
      'Learn how to perform a Plank with proper form, core bracing, body alignment, muscles worked and common mistakes to avoid.',
  },

  imageUrl: '/images/exercises/plank.png',
};
