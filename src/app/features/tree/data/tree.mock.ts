import { Exercise } from '../../../shared/models/exercise.model';
import { ExerciseRelation } from '../../../shared/models/exercise-relation.model';

export const EXERCISES: Exercise[] = [
  /*
   * LEVEL 1 — BEGINNER
   */
  {
    id: 'pull-up',
    name: 'Pull Up',

    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar', 'rings', 'added-weight'
    ],

    description:
      'Grip the bar with your palms facing away and pull your chest toward the bar, keeping your core engaged and lowering yourself with control. Start with assisted pull-ups or resistance bands to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight to increase the difficulty and continue building strength.',

    imageUrl: '/images/exercises/pull-up.png',
  },
  {
    id: 'dips',
    name: 'Dips',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

    showInTree: true,
    category: 'push',

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],

    equipment: [
      'parallettes', 'added-weight', 'rings'
    ],

    description:
      'Grip the parallel bars, lower your body by bending your elbows, and push back up while keeping your core engaged and movements controlled. Start with assisted dips or resistance bands to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight to increase the difficulty and continue building upper-body strength.',

    imageUrl: '/images/exercises/dips.png',
  },
  {
    id: 'push-up',
    name: 'Push Up',
    movementType: 'dynamic',

    difficulty: 'beginner',
    graphLevel: 1,

    showInTree: true,
    category: 'push',

    targetAreas: ['chest', 'triceps', 'shoulders'],

    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],

    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],

    equipment: ['floor', 'rings', 'added-weight'],

    description:
      'Place your hands slightly wider than shoulder-width apart, keep your body straight, and lower your chest toward the floor before pushing back up with control. Start with knee push-ups or incline push-ups to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 15–20 clean reps, progress to decline push-ups, diamond push-ups, or weighted push-ups to increase the difficulty and build upper-body strength.',

    imageUrl: '/images/exercises/push-ups.png',
  },

  /*
   * LEVEL 2 — INTERMEDIATE
   */
  {
    id: 'early-front-lever-progressions',
    name: 'Tucked Front Lever',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],

    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],

    equipment: [
      'pull-up-bar',
      'rings'
    ],

    description:
      'Hang from a pull-up bar, bring your knees toward your chest, and engage your core and back muscles to hold your body parallel to the ground. Start with short holds of 5–10 seconds, gradually increasing the duration while maintaining proper form and body control. Once you can hold the position for 15–20 seconds, progress to the advanced tuck front lever or one-leg front lever to build greater strength and stability.',

    imageUrl: '/images/exercises/tuck-front.png',
  },
  {
    id: 'chest-to-bar',
    name: 'Chest to Bar',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['back', 'biceps'],

    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],

    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],

    equipment: [
      'pull-up-bar',
    ],

    description:
      'Grip the bar slightly wider than shoulder-width apart, engage your core, and pull yourself up until your chest touches the bar, then lower yourself with control. Start with regular pull-ups or assisted chest-to-bar pull-ups to build strength, gradually increasing repetitions while maintaining proper form. Once you can perform 10–12 clean reps, add extra weight or progress to explosive chest-to-bar pull-ups to increase difficulty and develop upper-body strength.',

    imageUrl: '/images/exercises/chest-to-bar.png',
  },
  {
    id: 'l-sit',
    name: 'L-Sit',
    movementType: 'static',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'core',

    targetAreas: ['core', 'shoulders'],

    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],

    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],

    equipment: [
      'parallettes',
      'rings', 'floor'
    ],

    description:
      'Support your body on parallel bars or the floor, keep your arms straight, and lift your legs until they are parallel to the ground while engaging your core. Start with tuck L-sits or bent-knee holds, gradually increasing the duration and extending your legs as your strength improves. Once you can hold a full L-sit for 15–20 seconds, progress to longer holds, weighted L-sits, or V-sits to increase difficulty and build greater core strength.',

    imageUrl: '/images/exercises/l-sit.png',
  },
  {
    id: 'handstand',
    name: 'Handstand',

    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 2,

    showInTree: true,
    category: 'static',

    targetAreas: ['shoulders', 'core'],

    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],

    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],

    equipment: ['parallettes','floor'],

    description:
      'Place your hands shoulder-width apart, kick your legs overhead, and maintain a straight body position while engaging your core and shoulders. Start by practicing handstands against a wall to develop balance, strength, and body awareness. Gradually reduce your reliance on the wall, practice controlled kick-ups, and work toward holding a freestanding handstand with proper alignment and stability.',

    imageUrl: '/images/exercises/handstand.png',
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push Up',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'push',

    targetAreas: ['shoulders', 'triceps', 'chest'],

    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],

    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],

    equipment: ['floor','parallettes'],

    description:
      'Start in a downward dog position with your hips raised, hands shoulder-width apart, and legs straight, then bend your elbows to lower your head toward the floor before pushing back up. Begin with regular pike push-ups, focusing on controlled movements and proper shoulder engagement to build strength. Gradually elevate your feet to increase difficulty, progressing toward wall-assisted handstand push-ups as your shoulder strength and stability improve.',

    imageUrl: '/images/exercises/pike-push-up.png',
  },
  {
    id: 'bent-arm-planche',
    name: 'Elbow lever Planche',

    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 2,

    showInTree: true,
    category: 'static',

    targetAreas: ['shoulders', 'chest', 'core'],

    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],

    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],

    equipment: ['floor','parallettes'],

    description:
      'Place your hands on the floor, bend your elbows into your abdomen, and lean forward while lifting your legs to balance your body horizontally. Start by practicing with your feet on the ground or one leg extended to develop balance, wrist strength, and core stability. Gradually shift more weight onto your hands, extend both legs, and work toward maintaining a stable elbow lever with full body control.',

    imageUrl: '/images/exercises/bent-arm-planche.png',
  },
   {
    id: 'skin-the-cat',
    name: 'Skin the Cat',
    movementType: 'dynamic',

    difficulty: 'intermediate',
    graphLevel: 2,

    showInTree: true,
    category: 'pull',

    targetAreas: ['shoulders', 'back', 'core'],

    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'rear-deltoids'],

    secondaryMuscles: ['biceps', 'chest', 'forearms'],

    equipment: [
      'pull-up-bar','rings',
    ],

    description:
      'Hang from a pull-up bar or gymnastic rings, tuck your knees toward your chest, and rotate your body backward through your arms into a controlled inverted position. Start with assisted rotations and partial movements to develop shoulder mobility, core strength, and body control. Gradually increase your range of motion, progressing toward a full rotation into the German hang position and returning to the starting position with control.',

    imageUrl: '/images/exercises/skin-the-cat.png',
  },

    /*
   * LEVEL 3 — INTERMEDIATE
   */
  {
    id: 'hang-to-inverted-press',
    name: 'Inverted Press',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'abdominals', 'front-deltoids'],
    secondaryMuscles: ['upper-back', 'biceps', 'forearms', 'hip-flexors'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms extended, engage your core, and pull your body upward while keeping your legs straight until you reach a fully inverted position with your hips close to the bar. Start with hanging leg raises, inverted hangs, and assisted inverted presses to develop core strength, pulling power, and body control. Gradually reduce assistance, incorporate controlled negatives, and focus on maintaining straight legs and smooth movement throughout the transition to perform the full inverted press with proper technique.',
    imageUrl: '/images/exercises/inverted.png',
  },
  {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'core',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
    equipment: ['floor'],
    description:
      'ie on your back, grip a stable support behind your head, and lift your body while keeping your shoulders on the ground and your core engaged. Lower your body slowly in a straight line without letting your hips drop or your lower back arch. Start with bent-knee dragon flags or controlled negatives, gradually extending your legs and increasing your range of motion until you can perform the full movement with proper technique.',
    imageUrl: '/images/exercises/dragon-flag.png',
  },
  {
    id: 'muscle-up',
    name: 'Muscle Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar','rings','added-weight'],
    description:
      'Hang from a pull-up bar, pull yourself explosively upward, transition your chest over the bar, and push up until your arms are fully extended. Start with explosive pull-ups, straight-bar dips, and assisted muscle-ups to develop the strength and coordination needed for the movement. Gradually reduce assistance, improve your transition technique, and work toward performing strict muscle-ups with controlled movements and minimal momentum.',
    imageUrl: '/images/exercises/muscle-up.png',
  },
  {
    id: 'impossible-dip',
    name: 'Impossible Dip',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['parallettes'],
    description:
      'Start on parallel bars with your arms straight, then slowly lower your body by bending your elbows while keeping your forearms close to the bars and maintaining full-body control. Begin with regular dips, deep dips, and assisted impossible dips to develop the triceps, shoulder strength, and mobility required for the movement. Gradually reduce assistance, practice controlled negatives, and work toward performing the full impossible dip with proper technique and stability.',
    imageUrl: '/images/exercises/impossible-dip.png',
  },
  {
    id: 'korean-dip',
    name: 'Korean Dip',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['parallettes'],
    description:
      'Position yourself on a straight bar with your hands behind your body, then bend your elbows to lower yourself while maintaining control and keeping your shoulders stable. Start with regular dips and straight-bar dips to develop upper-body strength, gradually introducing assisted Korean dips to improve shoulder mobility and stability. As your strength and flexibility improve, reduce assistance and focus on performing the full movement with proper technique and a controlled range of motion.',
    imageUrl: '/images/exercises/korean-dip.png',
  },
  {
    id: 'press-to-handstand',
    name: 'Press To Handstand',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'hip-flexors'],
    secondaryMuscles: ['triceps', 'abdominals', 'trapezius', 'forearms'],
    equipment: ['floor','parallettes'],
    description:
      'Start with your hands on the floor and your feet grounded, lean your shoulders forward, and lift your legs overhead using controlled strength until you reach a stable handstand without jumping or kicking. Begin with pike compressions, L-sit holds, and wall-assisted press handstands to develop shoulder strength, core control, and flexibility. Gradually reduce assistance, practice slow negative presses, and improve your hip mobility and balance to achieve a smooth freestanding handstand press with proper technique.',
      imageUrl: '/images/exercises/press-to-handstand.png',
  },
  {
    id: 'early-planche-progressions',
    name: 'Tucked Planche',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your feet off the ground while keeping your knees tucked toward your chest and your arms straight. Start with planche leans and frog stands to develop wrist strength, shoulder stability, and core control. Gradually increase your forward lean, improve your balance, and progress toward the advanced tuck planche by extending your hips and moving your knees farther away from your chest.',
    imageUrl: '/images/exercises/tuck-planche.png',
  },
  {
    id: 'handstand-push-up',
    name: 'Handstand Push Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'triceps', 'chest'],
    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a handstand position with your hands shoulder-width apart, bend your elbows to lower your head toward the floor, and push back up while maintaining a stable body position. Begin with pike push-ups and wall-assisted handstand push-ups to develop shoulder strength, balance, and control. Gradually increase your range of motion, reduce wall assistance, and progress toward freestanding handstand push-ups with proper technique and stability.',
    imageUrl: '/images/exercises/hspu3.png',
  },
  {
    id: 'one-arm-bent-planche',
    name: 'One Arm Elbow Planche',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: ['floor'],
    description:
      'Balance your body horizontally on one bent arm, keeping your core engaged and your legs extended while maintaining full-body tension and control. Start with tuck planche holds, bent-arm planche variations, and assisted one-arm balances to develop the necessary shoulder strength and stability. Gradually shift more weight onto your supporting arm, reduce assistance, and work toward extending your legs while maintaining proper alignment and balance.',
    imageUrl: '/images/exercises/one-arm-elbow-lever.png',
  },
  {
    id: 'back-lever',
    name: 'Back Lever',
    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 3,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['rear-deltoids', 'chest', 'biceps'],
    secondaryMuscles: ['forearms', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar or gymnastic rings, rotate your body backward, and extend your legs until your body is horizontal, keeping your arms straight and core engaged. Start with tuck back lever holds and assisted variations to develop shoulder strength, mobility, and body control. Gradually progress to the advanced tuck, one-leg, and straddle back lever before attempting the full position with proper alignment and stability.',
    imageUrl: '/images/exercises/back-lever.png',
  },

  /*
   * LEVEL 4 — ADVANCED
   */
  {
    id: 'front-lever',
    name: 'Front Lever',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a pull-up bar with your arms straight, engage your core and back muscles, and lift your body until it is parallel to the ground while maintaining a straight body position. Start with tuck front lever holds and controlled front lever raises to develop core strength, shoulder stability, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations before attempting the full front lever with proper alignment and stability.',
    imageUrl: '/images/exercises/front-lever.png',
  },
  {
    id: 'one-arm-pull-up',
    name: 'One Arm Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a pull-up bar using one hand, engage your core and back muscles, and pull yourself upward until your chin reaches the bar, then lower yourself with control. Start with weighted pull-ups, archer pull-ups, and assisted one-arm pull-ups to develop unilateral strength and grip stability. Gradually reduce assistance, incorporate controlled one-arm negatives, and work toward performing a full one-arm pull-up with proper technique and minimal momentum.',
    imageUrl: '/images/exercises/oap.png',
  },
  {
    id: 'waist-pull-up',
    name: 'Waist Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with an overhand grip, engage your core, and pull explosively until the bar reaches your waist, keeping your body controlled throughout the movement. Start with regular pull-ups, chest-to-bar pull-ups, and explosive high pull-ups to develop the strength and power needed for this exercise. Gradually increase your pulling height, improve your coordination, and focus on generating explosive power while minimizing momentum to achieve a controlled waist-level pull-up.',
    imageUrl: '/images/exercises/waist-pull-up.png',
  },
  {
    id: 'human-flag',
    movementType: 'static',
    name: 'Human Flag',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with both hands, push with your lower arm and pull with your upper arm to lift your body horizontally while keeping your core engaged and legs extended. Start with vertical flag holds, tuck human flags, and assisted variations to develop shoulder strength, core stability, and body control. Gradually progress to one-leg and straddle human flags, focusing on maintaining proper alignment and balance before attempting the full human flag.',
    imageUrl: '/images/exercises/human-flag.png',
  },
  {
    id: 'hefesto',
    name: 'Hefesto',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a bar or gymnastic rings with a supinated grip, rotate your shoulders backward, and pull your body upward from a German hang position until you reach a supported position with your arms extended. Start with assisted Hefesto transitions, German hangs, and reverse curls to develop biceps strength, shoulder mobility, and control. Gradually reduce assistance, incorporate controlled negative repetitions, and work toward performing the full Hefesto with proper technique and stability.',
    imageUrl: '/images/exercises/hefesto.png',
  },
  {
    id: 'v-sit',
    name: 'V-Sit',
    difficulty: 'advanced',
    movementType: 'static',
    graphLevel: 4,
    showInTree: true,
    category: 'core',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Support your body on parallel bars or the floor with your arms straight, engage your core, and lift your legs upward to form a V-shape while keeping your knees extended and maintaining balance. Start with L-sits, seated leg raises, and compression exercises to develop core strength, hip flexor endurance, and flexibility. Gradually increase your leg elevation, improve your hamstring flexibility, and progress toward a full V-sit with proper body alignment and control.',
    imageUrl: '/images/exercises/v-sit.png',
  },
  {
    id: 'straddle-planche',
    name: 'Straddle Planche',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your body horizontally with your arms straight and legs spread apart, keeping your core engaged and shoulders stable. Start with tuck planche and advanced tuck planche variations to develop shoulder strength, wrist stability, and body control. Gradually extend your legs into a wider straddle position, increase your forward lean, and practice assisted holds and controlled negatives to achieve a full straddle planche with proper alignment and balance.',
    imageUrl: '/images/exercises/straddle-planche.png',
  },
  {
    id: '90-degree-push-up',
    name: '90 Degree Push Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'triceps', 'chest'],
    primaryMuscles: ['front-deltoids', 'triceps', 'chest'],
    secondaryMuscles: ['serratus-anterior', 'trapezius', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a handstand position, bend your elbows, and lower your body into a horizontal bent-arm planche before pushing back up into a handstand with control. Begin with handstand push-ups, planche leans, and bent-arm planche holds to develop shoulder strength, balance, and body control. Gradually incorporate assisted transitions and controlled negatives, reducing assistance as you build the strength and coordination needed to perform the full movement.',
  },
  {
    id: 'one-arm-push-up-clean-form',
    name: 'One Arm Push Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: true,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Place one hand on the floor beneath your shoulder, keep your body straight and hips level, and lower your chest toward the ground before pushing back up without twisting your torso. Start with regular push-ups, archer push-ups, and assisted one-arm push-ups to develop unilateral strength and core stability. Gradually reduce assistance, narrow your foot stance, and focus on maintaining proper alignment and control until you can perform a strict one-arm push-up with minimal body rotation.',
    imageUrl: '/images/exercises/one-arm-push-up.png',
  },
  {
    id: 'one-arm-back-lever',
    name: 'One Arm Back Lever',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a bar or gymnastic rings with one arm, rotate your body backward, and extend your legs until your body is horizontal, keeping your core engaged and shoulders stable. Start with regular back levers, assisted one-arm holds, and one-arm hanging exercises to develop shoulder strength, grip endurance, and body control. Gradually reduce assistance, practice controlled one-arm negatives, and work toward maintaining a full one-arm back lever with proper alignment and stability.',
    imageUrl: '/images/exercises/one-arm-back-lever.png',
  },
  {
    id: 'back-lever-pull-up',
    name: 'Back Lever Pull Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Start in a horizontal back lever position with your arms straight, engage your core and back muscles, and bend your elbows to pull your body toward the bar while maintaining full-body tension and control. Begin with tuck back lever pull-ups, assisted variations, and controlled negatives to develop pulling strength, shoulder stability, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations, reducing assistance while maintaining proper alignment and a controlled range of motion as you work toward full back lever pull-ups.',
    imageUrl: '/images/exercises/back-lever-pull-up.png',
  },

  /*
   * LEVEL 5 — ADVANCED
   */
  {
    id: 'touch-front-lever',
    name: 'Touch Front Lever',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms straight, engage your core and back muscles, and lift your body into a horizontal position before pulling your hips toward the bar while maintaining full-body tension. Start with regular front lever holds, tuck front lever rows, and assisted touch front levers to develop pulling strength and body control. Gradually progress to advanced tuck and straddle variations, reducing assistance and focusing on bringing your hips closer to the bar without losing proper alignment or stability.',
    imageUrl: '/images/exercises/touch-front.png',
  },
  {
    id: 'front-lever-pull-up',
    name: 'Front Lever Pull Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar, extend your body into a horizontal front lever position, and pull your torso toward the bar while keeping your core engaged and body straight. Start with tuck front lever pull-ups, front lever rows, and assisted variations to develop back strength, core stability, and pulling power. Gradually progress through advanced tuck, one-leg, and straddle variations, focusing on maintaining a horizontal body position and controlled movement before attempting full front lever pull-ups.',
    imageUrl: '/images/exercises/front-lever-pull.png',
  },
    {
    id: 'front-lever-press',
    name: 'Front Lever Press',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a front lever position with your body horizontal and arms straight, then raise your body into an inverted hang while maintaining core tension, shoulder stability, and controlled movement. Begin with tuck front lever raises, inverted hangs, and assisted press variations to develop back strength, core stability, and straight-arm control. Gradually progress through advanced tuck and straddle variations, reduce assistance, and practice controlled transitions while maintaining proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/front-lever-press.png',
  },
  {
    id: 'x-grip-front-lever',
    name: 'X Grip Front Lever',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['abdominals', 'rear-deltoids', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms crossed in an X-shaped grip, engage your core and back muscles, and lift your body into a horizontal position while keeping your arms straight and legs extended. Start with regular front lever holds, crossed-grip hangs, and assisted X-grip front lever variations to develop pulling strength, shoulder stability, and body control. Gradually reduce assistance, progress through tuck and straddle variations, and focus on maintaining proper alignment and balance as you work toward the full X-grip front lever.',
    imageUrl: '/images/exercises/x-grip-front-lever.png',
  },
  {
    id: 'human-flag-pull-up',
    name: 'Human Flag Pull Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'pull',
    targetAreas: ['core', 'shoulders', 'back', 'biceps'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['front-deltoids', 'triceps', 'upper-back', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with both hands, lift your body into a horizontal human flag position, and pull yourself upward by bending your upper arm while keeping your core engaged and body aligned. Start with static human flag holds, assisted flag pull-ups, and controlled partial repetitions to develop shoulder strength, core stability, and pulling power. Gradually increase your range of motion, reduce assistance, and progress toward full human flag pull-ups while maintaining proper technique and body control.',
    imageUrl: '/images/exercises/human-flag-pu.png',
  },
  {
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
  },
  {
    id: 'full-planche',
    name: 'Full Planche',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean forward, and lift your entire body horizontally with your arms straight and legs fully extended, keeping your core engaged and shoulders protracted. Start with tuck planche, advanced tuck planche, and straddle planche variations to develop shoulder strength, wrist stability, and body control. Gradually bring your legs closer together from the straddle position, practice assisted full planche holds, and focus on maintaining proper alignment and balance as you progress toward the full movement.',
    imageUrl: '/images/exercises/full-planche.png',
  },
  {
    id: 'clean-one-arm-handstand',
    name: 'One Arm Handstand',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Balance your body upside down on one hand, keeping your supporting arm straight, core engaged, and legs extended while maintaining proper alignment and stability. Start with regular handstands, wall-assisted weight shifts, and fingertip-supported one-arm holds to develop shoulder strength, balance, and body awareness. Gradually transfer more weight onto your supporting hand, reduce fingertip assistance, and practice controlled one-arm balances until you can maintain a stable freestanding one-arm handstand.',
    imageUrl: '/images/exercises/oah2.png',
  },
  {
    id: 'iron-cross',
    name: 'Iron Cross',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body on gymnastic rings with your arms extended horizontally to the sides, keeping your elbows straight, shoulders stable, and core engaged. Start with ring support holds, assisted iron cross variations, and controlled cross pulls to develop shoulder strength, tendon resilience, and stability. Gradually reduce assistance using resistance bands or a pulley system, focusing on maintaining proper alignment and control as you progress toward the full iron cross.',
    imageUrl: '/images/exercises/iron-cross.png',
  },

  /*
   * LEVEL 6 — ELITE
   */
  {
    id: 'one-arm-front-lever',
    name: 'One Arm Front Lever',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with one arm, engage your core and back muscles, and extend your body horizontally while maintaining full-body tension and shoulder stability. Start with regular front levers, assisted one-arm holds, and one-arm hanging exercises to develop unilateral strength, grip endurance, and body control. Gradually reduce assistance, practice controlled one-arm negatives, and progress toward maintaining a full one-arm front lever with proper alignment and minimal body rotation.',
    imageUrl: '/images/exercises/one-arm-front.png',
  },
  {
    id: 'victorian',
    name: 'Victorian',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['rings','parallettes'],
    description:
      'Hang from a pull-up bar or gymnastic rings and extend your body horizontally, facing upward, with your arms straight and positioned alongside your torso while keeping your core engaged and body aligned. Start with regular front levers, advanced tuck Victorian holds, and assisted variations to develop shoulder strength, core stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions to build the strength and stability needed to perform the full Victorian Front Lever.',
    imageUrl: '/images/exercises/victorian.png',
  },
   {
    id: 'victorian-press',
    name: 'Victorian Press',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['rings','parallettes'],
    description:
      'Start in a Victorian Cross position with your body horizontal, facing upward, and arms extended to the sides, then press your body upward into a stable support position while maintaining full-body tension and control. Begin with assisted Victorian Cross holds, ring support exercises, and controlled pressing movements to develop shoulder strength, straight-arm stability, and core control. Gradually reduce assistance, practice controlled negative repetitions, and improve your pressing strength while maintaining proper body alignment and ring stability throughout the movement.',
    imageUrl: '/images/exercises/victorian-press.png',
  },
    {
    id: 'victorian-floor',
    name: 'Victorian On Floor',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'abdominals'],
    secondaryMuscles: ['rear-deltoids', 'biceps', 'forearms', 'glutes'],
    equipment: ['floor'],
    description:
      'Place your hands on the floor behind your hips with your arms straight, lift your legs and torso off the ground, and maintain a horizontal body position while engaging your core, triceps, and shoulders. Start with L-sits, reverse plank holds, and assisted Floor Victorian variations to develop shoulder extension strength, core stability, and balance. Gradually extend your legs, increase your hip elevation, and reduce assistance while focusing on maintaining straight arms and proper body alignment as you progress toward the full Floor Victorian.',
    imageUrl: '/images/exercises/victorian-floor.png',
  },
  {
    id: 'butterfly',
    name: 'Butterfly Muscle Up',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start by hanging from gymnastic rings with your arms straight, transition into an Iron Cross position with your legs extended forward, and press upward until you reach a stable support position above the rings. Begin with assisted Iron Cross holds, ring support exercises, and controlled cross presses to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, improve your transition technique, and practice controlled repetitions to perform the full Butterfly with proper alignment and stability.',
    imageUrl: '/images/exercises/butterfly.png',
  },
  {
    id: 'mana',
    name: 'Manna',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Support your body on the floor or parallel bars with your hands beside your hips, keep your arms straight, and lift your legs and hips upward until your body forms a horizontal position with your legs extended behind your torso. Start with L-sits, V-sits, and seated compression exercises to develop core strength, shoulder mobility, and flexibility. Gradually increase your hip elevation, improve your shoulder extension, and practice assisted manna holds to build the strength and control needed to achieve the full position.',
    imageUrl: '/images/exercises/manna.png',
  },
  {
    id: 'full-planche-push-ups',
    name: 'Full Planche Push Ups',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: true,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a full planche position with your arms straight, body horizontal, and legs extended, then bend your elbows to lower your body before pushing back up while maintaining balance and control. Begin with planche leans, tuck planche push-ups, and straddle planche push-ups to develop shoulder strength, core stability, and pushing power. Gradually progress to assisted full planche push-ups, reduce assistance, and focus on maintaining proper body alignment and controlled movement throughout the exercise.',
    imageUrl: '/images/exercises/full-planche-pu.png',
  },
  {
    id: 'maltese',
    name: 'Maltese',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings','floor','parallettes'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides at shoulder level, keeping your core engaged and maintaining full-body tension. Start with planche holds, Maltese leans, and assisted Maltese variations to develop shoulder strength, straight-arm stability, and body control. Gradually increase your arm extension, reduce assistance, and practice controlled Maltese holds while maintaining proper alignment and stability as you progress toward the full movement.',
    imageUrl: '/images/exercises/maltese.png',
  },

  /*
   * LEVEL 7 — ELITE
   */
  {
    id: 'caruso',
    name: 'Caruso',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'tart in a front lever position on gymnastic rings with your body horizontal and arms straight, then transition into a Victorian Cross by lowering your body between the rings while maintaining full-body tension and control. Begin with front lever holds, assisted Victorian Cross variations, and controlled transition exercises to develop shoulder strength, core stability, and straight-arm control. Gradually reduce assistance, improve your shoulder mobility, and practice smooth transitions between both positions while maintaining proper body alignment and ring stability.',
    imageUrl: '/images/exercises/caruso.png',
  },
  {
    id: 'inverted-butterfly',
    name: 'Inverted Butterfly',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'chest', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['triceps', 'upper-back', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in an inverted hang on gymnastic rings, lower your body into an inverted Iron Cross with your arms extended to the sides, and press upward into a stable handstand position while maintaining full-body tension and control. Begin with assisted inverted Iron Cross holds, ring handstands, and controlled cross presses to develop shoulder strength, straight-arm stability, and balance. Gradually reduce assistance, improve your transition technique, and practice controlled repetitions while maintaining proper alignment and ring stability as you progress toward the full Inverted Butterfly.',
    imageUrl: '/images/exercises/inverted-butterfly.png',
  },
  {
    id: 'entrada-de-diablo',
    name: 'Entrada de Diablo',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a supported position on a pull-up bar with a fully reversed grip, lean your torso forward, and rotate your body backward through a controlled shoulder dislocation to transition into a back lever position. Begin with skin the cat, German hangs, and assisted shoulder rotation exercises to develop shoulder mobility, strength, and body control. Gradually increase your range of motion, practice assisted Devil Entry transitions, and reduce assistance while maintaining proper technique and avoiding excessive shoulder strain.',
  },
  {
    id: 'reverse-planche',
    name: 'Reverse Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'back', 'core'],
    primaryMuscles: ['rear-deltoids', 'triceps', 'upper-back'],
    secondaryMuscles: ['latissimus-dorsi', 'glutes', 'abdominals', 'forearms'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor behind your hips with your arms straight, lift your entire body horizontally, and keep your legs extended while engaging your core, triceps, and rear shoulders. Start with reverse plank holds, L-sits, and assisted reverse planche variations to develop shoulder extension strength, scapular retraction, and body control. Gradually increase your hip elevation, extend your legs, and reduce assistance while maintaining straight arms and proper body alignment as you progress toward the full reverse planche.s',
    imageUrl: '/images/exercises/reverse-planche.png',
  },
  {
    id: 'one-arm-planche',
    name: 'One Arm Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Balance your body horizontally on one straight arm, keeping your core engaged, legs extended, and shoulders stable while maintaining full-body tension and control. Start with full planche holds, assisted one-arm planche variations, and controlled weight shifts to develop unilateral shoulder strength, wrist stability, and balance. Gradually transfer more weight onto your supporting arm, reduce assistance, and practice straddle one-arm planche variations before progressing toward the full one-arm planche with proper alignment and stability.',
    imageUrl: '/images/exercises/one-arm-planche.png',
  },
  {
    id: 'pelican',
    name: 'Pelican',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'pull',
    targetAreas: ['biceps', 'shoulders', 'back'],
    primaryMuscles: ['biceps', 'latissimus-dorsi', 'rear-deltoids'],
    secondaryMuscles: ['chest', 'forearms', 'upper-back', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in a back lever position on gymnastic rings with your body horizontal and arms straight, then rotate your shoulders and transition into a full planche while maintaining core tension and body alignment. Begin with back lever holds, assisted planche variations, and controlled transition exercises to develop shoulder strength, mobility, and straight-arm stability. Gradually reduce assistance, practice slow and controlled transitions, and focus on maintaining proper technique and ring stability as you progress toward performing the full Pelican.',
    imageUrl: '/images/exercises/pelican.png',
  },
  {
    id: 'zanetti',
    name: 'Zanetti',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Start in a back lever position on gymnastic rings with your body horizontal and arms straight, then transition into a Victorian Cross by rotating your body while maintaining full-body tension and shoulder stability. Begin with back lever holds, assisted Victorian Cross variations, and controlled transition exercises to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, improve your shoulder mobility, and practice smooth transitions between both positions while maintaining proper alignment and ring stability.',
    imageUrl: '/images/exercises/zanetti.png',
  },
  {
    id: 'inverted-cross',
    name: 'Inverted Cross',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: true,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'trapezius'],
    secondaryMuscles: ['triceps', 'chest', 'abdominals'],
    equipment: ['rings'],
    description:
      'tart in a handstand position on gymnastic rings, extend your arms horizontally to the sides, and maintain your body vertically inverted while keeping your elbows straight, core engaged, and shoulders stable. Begin with ring handstands, assisted inverted cross holds, and controlled shoulder exercises to develop straight-arm strength, balance, and stability. Gradually reduce assistance, increase your arm extension, and practice controlled transitions from a handstand into the inverted cross while maintaining proper body alignment and ring control.',
    imageUrl: '/images/exercises/inverted-cross.png',
  },




  /*
    * LEVEL 9 - no salen en arbol
  */

  {
    id: 'full-planche-rings',
    name: 'Rings Full Planche',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms straight, legs fully extended, and core engaged, keeping the rings stable and your body parallel to the ground. Start with ring support holds, tuck planche variations, and assisted ring planches to develop shoulder strength, balance, and stability. Gradually progress through advanced tuck and straddle planche variations, reducing assistance while focusing on ring control and proper body alignment before attempting the full planche on rings.',
    imageUrl: '/images/exercises/full-rings.png',
  },
  {
    id: 'maltese-rings',
    name: 'Maltese Rings',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 6,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides, keeping your body facing downward, core engaged, and shoulders stable. Start with ring support holds, planche variations, and assisted Maltese exercises to develop shoulder strength, straight-arm stability, and body control. Gradually increase your arm extension, reduce assistance, and practice controlled Maltese holds while maintaining proper alignment and ring stability as you progress toward the full movement.',
    imageUrl: '/images/exercises/maltese-rings.png',
  },
  {
    id: 'back-lever-rings',
    name: 'Rings Back Lever',
    difficulty: 'intermediate',
    movementType: 'static',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'rear-deltoids', 'chest'],
    secondaryMuscles: ['biceps', 'upper-back', 'abdominals', 'glutes'],
    equipment: ['rings'],
    description:
      'Hang from gymnastic rings, rotate your body backward, and extend your legs until your body is horizontal and facing downward, keeping your arms straight, core engaged, and rings stable. Start with skin the cat, German hangs, and tuck back lever holds to develop shoulder mobility, strength, and body control. Gradually progress through advanced tuck, one-leg, and straddle variations, focusing on maintaining proper alignment and ring stability before attempting the full back lever on rings.',
    imageUrl: '/images/exercises/back-lever-rings.png',
  },
  {
    id: 'handstand-rings',
    name: 'Rings Handstand',
    difficulty: 'advanced',
    movementType: 'static',
    graphLevel: 5,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body upside down on gymnastic rings with your arms straight, core engaged, and legs extended, keeping the rings stable and your body aligned. Start with floor handstands, ring support holds, and assisted ring handstands to develop shoulder strength, balance, and stability. Gradually reduce assistance, practice controlled kick-ups and weight shifts, and focus on maintaining proper alignment and ring control as you progress toward a freestanding handstand on rings.',

    imageUrl: '/images/exercises/handstand-rings.png',
  },
  {
      id: 'supinated-pull-up',
      name: 'Chin Up',
      difficulty: 'beginner',
      movementType: 'dynamic',
      graphLevel: 1,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Grip the bar with your palms facing toward you, keep your core engaged, and pull yourself upward until your chin passes the bar, then lower yourself with control. Start with assisted chin-ups or resistance bands to build strength, gradually increasing repetitions while maintaining proper form and a full range of motion. As your strength improves, incorporate slow negatives, weighted chin-ups, or archer chin-ups to increase difficulty and develop greater pulling power.',

      imageUrl: '/images/exercises/supinated-pull-up.png',
    },
    {
      id: 'archer-pull-up',
      name: 'Archer Pull Up',
      difficulty: 'intermediate',
      movementType: 'dynamic',
      graphLevel: 2,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Grip the bar with your hands wider than shoulder-width apart, pull your body toward one hand while extending the opposite arm, and alternate sides while maintaining core tension and control. Start with wide-grip pull-ups, assisted archer pull-ups, and controlled negatives to develop unilateral pulling strength and stability. Gradually reduce assistance, increase your range of motion, and focus on keeping your extended arm straight as you progress toward strict archer pull-ups and more advanced one-arm variations.',
      imageUrl: '/images/exercises/archer-pull-up.png',
    },
   {
      id: 'l-sit-pull-up',
      name: 'L-Sit Pull Up',
      difficulty: 'intermediate',
      movementType: 'dynamic',
      graphLevel: 2,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['hip-flexors', 'abdominals', 'forearms', 'quadriceps'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Hang from a pull-up bar with your legs extended forward at hip height, forming an L-shape, then pull your chin above the bar while keeping your core engaged and legs straight. Start with regular pull-ups, hanging leg raises, and tuck L-sit pull-ups to develop upper-body strength, core stability, and hip flexor endurance. Gradually extend your legs, improve your L-sit position, and incorporate controlled repetitions or weighted variations to increase difficulty and build greater strength.',
      imageUrl: '/images/exercises/l-sit-pull-up.png',
    },
     {
      id: 'australian-pull-up',
      name: 'Australian Pull Up',
      difficulty: 'beginner',
      movementType: 'dynamic',
      graphLevel: 1,
      showInTree: false,
      category: 'pull',
      targetAreas: ['back', 'biceps'],
      primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
      secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
      equipment: [
        'pull-up-bar','rings'
      ],
      description:
        'Position yourself beneath a low bar, grip it with your hands shoulder-width apart, and pull your chest toward the bar while keeping your body straight and core engaged. Start with your knees bent or the bar positioned higher to reduce difficulty, gradually extending your legs and lowering the bar as your strength improves. Progress by elevating your feet, slowing down the lowering phase, or adding weight to increase resistance and develop greater back and arm strength.',
      imageUrl: '/images/exercises/australian-pull-up.png',
    },

    {
    id: 'frog-stand',
    name: 'Frog Stand',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, rest your knees on your upper arms, and lean forward until your feet lift off the ground, maintaining balance through your hands and core. Start by practicing controlled weight shifts and supported frog stands to develop wrist strength, shoulder stability, and body awareness. Gradually increase your forward lean, improve your balance, and progress toward lifting your knees away from your arms to transition into a tuck planche.',
    imageUrl: '/images/exercises/frog-stand.png',
  },
    {
    id: 'plank',
    name: 'Plank',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['glutes', 'front-deltoids', 'serratus-anterior'],
    equipment: ['floor'],
    description:
      'Place your forearms on the floor with your elbows beneath your shoulders, keep your body straight from head to heels, and engage your core and glutes while maintaining a neutral spine. Start with knee planks or elevated planks to develop core strength and stability, gradually progressing to a full forearm plank with proper alignment. Increase the difficulty by incorporating shoulder taps, plank variations with alternating leg lifts, or weighted planks to challenge your balance and build greater core strength.',
    imageUrl: '/images/exercises/plank.png',
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Place your hands close together beneath your chest, forming a diamond shape with your thumbs and index fingers, then lower your body while keeping your elbows close to your torso before pushing back up. Start with knee diamond push-ups or incline variations to develop triceps strength and upper-body control, gradually progressing to the full movement. Increase the difficulty by elevating your feet, incorporating slow negatives, or adding weight while maintaining proper form and stability.',
    imageUrl: '/images/exercises/diamond-push-up.png',
  },
  {
    id: 'decline-push-up',
    name: 'Decline Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your feet on an elevated surface and your hands on the floor, keeping your body straight as you lower your chest toward the ground before pushing back up with control. Start with regular push-ups and gradually increase the height of your feet to develop upper chest, shoulder, and triceps strength. Progress by incorporating slow negatives, weighted variations, or transitioning toward pike push-ups to increase difficulty and build greater upper-body strength.',
    imageUrl: '/images/exercises/decline-push-up.png',
  },
  {
    id: 'sphinx-push-up',
    name: 'Sphinx Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: ['floor'],
    description:
      'Start in a forearm plank position with your elbows beneath your shoulders, engage your core, and push through your hands to lift your forearms off the ground until your arms are fully extended, then lower yourself with control. Begin with knee-supported Sphinx push-ups and regular forearm planks to develop triceps strength, shoulder stability, and core control. Gradually progress to full Sphinx push-ups, slow eccentric repetitions, and feet-elevated variations to increase difficulty while maintaining proper body alignment.',
    imageUrl: '/images/exercises/sphinx-push-up.png',
  },
  {
    id: 'clapping-push-up',
    name: 'Clapping Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor'],
    description:
      'Start in a standard push-up position, lower your chest toward the floor, and push explosively to lift your hands off the ground, clap in mid-air, and land softly with slightly bent elbows. Begin with regular push-ups and explosive push-ups without clapping to develop upper-body strength, power, and coordination. Gradually increase your explosiveness, practice controlled landings, and progress toward multiple claps or more advanced plyometric push-up variations while maintaining proper technique.',
    imageUrl: '/images/exercises/clapping-push-up.png',
  },
  {
    id: 'lean-planche-push-up',
    name: 'Lean Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a push-up position with your hands near your hips, lean your shoulders forward past your wrists, and lower your chest toward the floor while keeping your core engaged and body straight. Begin with regular push-ups, planche leans, and pseudo planche push-ups to develop shoulder strength, wrist stability, and body control. Gradually increase your forward lean, reduce assistance, and progress toward tuck planche push-ups while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/lean-planche-push-up.png',
  },
  {
    id: 'tucked-planche-push-up',
    name: 'Tucked Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a tuck planche position with your knees close to your chest, arms straight, and feet lifted off the ground, then bend your elbows to lower your body before pushing back up while maintaining balance and core tension. Begin with planche leans, pseudo planche push-ups, and tuck planche holds to develop shoulder strength, wrist stability, and body control. Gradually increase your range of motion, incorporate controlled negatives, and progress toward advanced tuck planche push-ups by extending your hips and moving your knees farther away from your chest.',
    imageUrl: '/images/exercises/tucked-planche-push-up.png',
  },
  {
    id: 'straddle-planche-push-up',
    name: 'Straddle Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a straddle planche position with your arms straight, legs spread apart, and body horizontal, then bend your elbows to lower yourself before pushing back up while maintaining balance and core tension. Begin with tuck planche push-ups, advanced tuck variations, and assisted straddle planche push-ups to develop shoulder strength, wrist stability, and body control. Gradually increase your range of motion, reduce assistance, and focus on maintaining proper alignment and controlled movement as you progress toward full straddle planche push-ups.',
    imageUrl: '/images/exercises/straddle-planche-push-up.png',
  },
  {
    id: 'tuck-advanced-planche-push-up',
    name: 'Tuck Advanced Planche Push Up',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'triceps', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms', 'glutes'],
    equipment: ['floor','parallettes'],
    description:
      'Start in an advanced tuck planche position with your arms straight, hips extended, and knees bent behind your torso, then bend your elbows to lower your body before pushing back up while maintaining balance and core tension. Begin with tuck planche push-ups, planche leans, and assisted advanced tuck variations to develop shoulder strength, wrist stability, and body control. Gradually increase your range of motion, reduce assistance, and progress toward straddle planche push-ups by extending your legs while maintaining proper alignment and stability.',
    imageUrl: '/images/exercises/tuck-advanced-planche-push-up.png',
  },
  {
    id: 'tuck-advanced-planche',
    name: 'Tuck Advanced Planche',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'serratus-anterior', 'chest'],
    secondaryMuscles: ['triceps', 'abdominals', 'forearms', 'hip-flexors'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands on the floor, lean your shoulders forward, and lift your feet off the ground while keeping your arms straight, back flat, and knees bent away from your chest. Start with tuck planche holds, planche leans, and assisted advanced tuck variations to develop shoulder strength, wrist stability, and core control. Gradually extend your hips, increase your forward lean, and progress toward the straddle planche by extending your legs while maintaining proper alignment and balance.',
    imageUrl: '/images/exercises/tuck-advanced-planche.png',
  },
  {
    id: 'knee-push-up',
    name: 'Knee Push Up',
    movementType: 'dynamic',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'push',
    targetAreas: ['chest', 'triceps', 'shoulders'],
    primaryMuscles: ['chest', 'triceps', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'obliques'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands slightly wider than shoulder-width apart, keep your knees on the floor, and lower your chest toward the ground while maintaining a straight line from your head to your knees. Start with controlled knee push-ups to develop chest, shoulder, and triceps strength, gradually increasing repetitions while maintaining proper form. Progress by incorporating slow negatives, reducing knee support, and transitioning toward full push-ups as your upper-body strength and core stability improve.',
    imageUrl: '/images/exercises/knee-push-up.png',
  },
  {
    id: 'x-grip-muscle-up',
    name: 'X Grip Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms crossed in an X-shaped grip, pull yourself explosively upward, and transition your chest over the bar before pushing up into a supported position. Start with regular muscle-ups, crossed-grip pull-ups, and assisted X-grip transitions to develop pulling strength, coordination, and wrist mobility. Gradually reduce assistance, improve your explosive pulling power, and practice controlled transitions while maintaining proper grip positioning and shoulder stability.',
    imageUrl: '/images/exercises/x-grip-muscle-up.png',
  },
  {
    id: 'l-sit-muscle-up',
    name: 'L-Sit Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your legs extended forward in an L-sit position, pull yourself explosively upward, transition your chest over the bar, and push up while keeping your legs elevated. Start with regular muscle-ups, L-sit pull-ups, and straight-bar dips to develop pulling strength, core stability, and coordination. Gradually incorporate assisted L-sit muscle-ups, improve your transition technique, and reduce assistance while maintaining straight legs and proper body control throughout the movement.',
    imageUrl: '/images/exercises/l-sit-muscle-up.png',
  },
  {
    id: 'one-arm-muscle-up',
    name: 'One-Arm Muscle Up',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 6,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with one hand, pull yourself explosively upward, transition your shoulder over the bar, and push up until your supporting arm is fully extended. Start with strict muscle-ups, assisted one-arm pull-ups, and single-arm straight-bar dips to develop unilateral strength, explosive power, and shoulder stability. Gradually reduce assistance, practice controlled one-arm transitions, and focus on maintaining proper technique and body control as you progress toward the full one-arm muscle-up.',
    imageUrl: '/images/exercises/one-arm-muscle-up.png',
  },
  {
    id: 'extreme-wide-muscle-up',
    name: 'Extreme Wide Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Grip the pull-up bar with your hands significantly wider than shoulder-width apart, pull yourself explosively upward, and transition your chest over the bar before pushing into a supported position. Start with regular muscle-ups, wide-grip pull-ups, and assisted wide muscle-up transitions to develop pulling strength, shoulder stability, and coordination. Gradually increase your grip width within a comfortable range, reduce assistance, and focus on maintaining controlled movements and proper shoulder alignment as you progress toward the full extreme wide muscle-up.',
    imageUrl: '/images/exercises/extreme-wide-muscle-up.png',
  },
  {
    id: 'slow-muscle-up',
    name: 'Slow Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with a secure grip, pull yourself upward slowly, transition your chest over the bar without using momentum, and push up until your arms are fully extended. Start with strict pull-ups, straight-bar dips, and assisted muscle-up transitions to develop the strength and control needed for the movement. Gradually reduce assistance, incorporate slow negative muscle-ups, and focus on improving your transition technique to perform the entire movement smoothly and without swinging.',
    imageUrl: '/images/exercises/slow-muscle-up.png',
  },
  {
    id: 'front-lever-muscle-up',
    name: 'Front Lever To Muscle Up',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a horizontal front lever position with your arms straight, engage your core, and pull slowly toward the bar before transitioning your chest over it and pushing up into a supported position. Begin with front lever pull-ups, explosive high pull-ups, and strict muscle-ups to develop the pulling strength, core stability, and coordination required for the movement. Gradually practice assisted transitions from the front lever into the muscle-up, reduce assistance, and focus on maintaining body control and generating explosive power throughout the exercise.',
    imageUrl: '/images/exercises/front-lever-muscle-up.png',
  },
  {
    id: 'one-arm-front-lever-muscle-up',
    name: 'One-Arm Front Lever To Muscle Up',
    difficulty: 'elite',
    movementType: 'dynamic',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Start in a one-arm front lever position with your body horizontal, engage your core, and pull slowly toward the bar before transitioning over it into a one-arm support position. Begin with regular front lever pull-ups, assisted one-arm front levers, and one-arm muscle-up progressions to develop unilateral pulling strength, shoulder stability, and body control. Gradually practice assisted transitions between both movements, reduce assistance, and focus on maintaining proper alignment and controlled technique as you progress toward the full exercise.',
    imageUrl: '/images/exercises/one-arm-front-lever-muscle-up.png',
  },
  {
    id: 'rings-muscle-up',
    name: 'Rings Muscle Up',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 3,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'chest', 'biceps', 'triceps', 'shoulders'],
    primaryMuscles: ['latissimus-dorsi', 'biceps', 'triceps', 'chest'],
    secondaryMuscles: ['upper-back', 'front-deltoids', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Hang from gymnastic rings using a false grip, pull your chest toward the rings, transition your shoulders over your hands, and push up into a stable support position. Start with strict ring pull-ups, deep ring dips, and assisted muscle-up transitions to develop pulling strength, shoulder stability, and coordination. Gradually reduce assistance, practice controlled negative muscle-ups, and focus on maintaining a strong false grip and smooth transition to perform the full movement with proper technique.',
    imageUrl: '/images/exercises/rings-muscle-up.png',
  },
  {
    id: 'pistol-squat',
    name: 'Pistol Squat',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 2,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand on one leg with your opposite leg extended forward, lower your hips into a deep squat while maintaining balance, and push through your supporting foot to return to the starting position. Start with assisted pistol squats, box squats, and single-leg balance exercises to develop leg strength, ankle mobility, and stability. Gradually reduce assistance, increase your squat depth, and incorporate controlled negatives or weighted variations to improve strength and perform full pistol squats with proper technique.',
    imageUrl: '/images/exercises/pistol-squat.png',
  },
   {
    id: 'bulgarian-squat',
    name: 'Bulgarian Squat',
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
      'Stand with one foot forward and your rear foot elevated on a bench, bend your front knee to lower your hips toward the ground, and push through your front foot to return to the starting position. Start with bodyweight Bulgarian split squats and assisted variations to develop leg strength, balance, and hip stability. Gradually increase your range of motion, incorporate dumbbells or a barbell for added resistance, and progress toward more challenging single-leg variations while maintaining proper technique and control.',
    imageUrl: '/images/exercises/bulgarian-squat.png',
  },
     {
    id: 'jump-squat',
    name: 'Jump Squat',
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
      'Stand with your feet shoulder-width apart, lower your body into a squat position, and jump explosively upward, landing softly with your knees slightly bent. Start with regular squats and controlled jumps to develop leg strength, explosive power, and coordination. Gradually increase your jumping height, incorporate weighted jump squats or tuck jumps, and focus on maintaining proper landing technique and body control.',
    imageUrl: '/images/exercises/jump-squat.png',
  },
  {
    id: 'cossack-squat',
    name: 'Cossack Squat',
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
      'Stand with your feet wider than shoulder-width apart, shift your weight to one side, and bend one knee while keeping the opposite leg straight and your chest upright. Start with assisted Cossack squats and lateral lunges to develop leg strength, hip mobility, and balance. Gradually increase your squat depth, reduce assistance, and incorporate weighted variations or controlled side-to-side transitions to improve flexibility, stability, and lower-body strength.',
    imageUrl: '/images/exercises/cossack-squat.png',
  },
    {
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
  },
  {
    id: 'isometric-squat',
    name: 'Isometric Squat',
    difficulty: 'beginner',
    movementType: 'static',
    graphLevel: 1,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand with your back against a wall, slide down until your knees form a 90-degree angle, and hold the position while keeping your core engaged and feet flat on the floor. Start with a higher squat position to develop quadriceps strength, muscular endurance, and knee stability. Gradually lower your hips, incorporate single-leg wall sits, or add extra weight to increase difficulty while maintaining proper posture and controlled breathing.',
    imageUrl: '/images/exercises/isometric-squat.png',
  },
    {
    id: 'sissy-squat',
    name: 'Sissy Squat',
    difficulty: 'intermediate',
    movementType: 'dynamic',
    graphLevel: 2,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand with your feet shoulder-width apart, rise onto your toes, and lean your body backward while bending your knees and keeping your hips extended, then return to the starting position with control. Start with assisted sissy squats using a stable support to develop quadriceps strength, knee stability, and balance. Gradually increase your range of motion, reduce assistance, and incorporate controlled negatives or weighted variations to build greater leg strength while maintaining proper technique.',
    imageUrl: '/images/exercises/sissy-squat.png',
  },
     {
    id: 'hip-thrust',
    name: 'Hip Thrust',
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
      'SSit on the floor with your upper back resting against a bench, feet flat on the ground, and knees bent, then lift your hips by squeezing your glutes until your body forms a straight line from shoulders to knees. Start with bodyweight hip thrusts and glute bridges to develop glute strength, hip stability, and proper movement control. Gradually increase resistance using a barbell or resistance bands, incorporate single-leg variations, and focus on achieving full hip extension while maintaining proper technique.',
    imageUrl: '/images/exercises/hip-thrust.png',
  },
    {
    id: 'squat',
    name: 'Squat',
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
      'Stand with your feet shoulder-width apart, bend your knees and hips to lower your body while keeping your chest upright and core engaged, then push through your feet to return to the starting position. Start with bodyweight squats and assisted variations to develop leg strength, hip mobility, and balance. Gradually increase your squat depth, incorporate controlled repetitions, and progress toward weighted squats, jump squats, or single-leg variations to build greater lower-body strength and stability.',
    imageUrl: '/images/exercises/squat.png',
  },
     {
    id: 'nordic-curl',
    name: 'Nordic Curl',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 4,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Kneel on a padded surface with your ankles securely anchored, keep your hips extended and core engaged, and slowly lower your torso forward while resisting the movement with your hamstrings. Start with assisted Nordic curls using resistance bands or your hands for support to develop hamstring strength, knee stability, and eccentric control. Gradually reduce assistance, increase your range of motion, and incorporate controlled negative repetitions before progressing toward full Nordic curls with proper technique..',
    imageUrl: '/images/exercises/nordic-curl.png',
  },
       {
    id: 'dragon-pistol-squat',
    name: 'Dragon Pistol Squat',
    difficulty: 'advanced',
    movementType: 'dynamic',
    graphLevel: 5,
    showInTree: false,
    category: 'legs',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['quadriceps', 'glutes'],
    secondaryMuscles: ['hamstrings', 'calves', 'abdominals'],
    equipment: ['floor'],
    description:
      'Stand on one leg, cross your opposite leg behind your supporting leg, and lower your body into a deep squat while maintaining balance, core engagement, and controlled movement. Start with regular pistol squats, assisted dragon squats, and single-leg mobility exercises to develop leg strength, hip flexibility, and stability. Gradually reduce assistance, increase your squat depth, and incorporate controlled negatives or weighted variations to progress toward the full dragon pistol squat with proper technique.',
    imageUrl: '/images/exercises/dragon-pistol-squat.png',
  },
  {
    id: 'close-to-impossible',
    name: 'Close To Impossible',
    difficulty: 'elite',
    movementType: 'static',
    graphLevel: 7,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: ['pull-up-bar'],
    description:
      'Hang from a pull-up bar with your arms straight, lean your body backward, and maintain a nearly horizontal position while keeping your core engaged and shoulders stable. Start with assisted holds, controlled negatives, and front lever variations to develop straight-arm strength, core stability, and body control. Gradually reduce assistance, increase your backward lean, and focus on maintaining proper alignment and controlled movement as you progress toward the full Close to Impossible position.',
    imageUrl: '/images/exercises/close-to-impossible.png',
  },
  {
    id: 'crunch',
    name: 'Crunch',
    difficulty: 'beginner',
    movementType: 'dynamic',
    graphLevel: 1,
    showInTree: false,
    category: 'pull',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals'],
    secondaryMuscles: ['obliques', 'hip-flexors'],
    equipment: ['floor'],
    description:
      'Lie on your back with your knees bent and feet flat on the floor, engage your core, and lift your shoulders toward your knees while keeping your lower back on the ground. Start with basic crunches, focusing on controlled movements and proper breathing to develop abdominal strength and stability. Gradually increase the difficulty by incorporating slow negatives, weighted crunches, or bicycle crunches while maintaining proper technique and avoiding unnecessary neck strain.',
    imageUrl: '/images/exercises/crunch.png',
  },
    {
    id: 'side-plank',
    name: 'Side Plank',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['obliques', 'abdominals'],
    secondaryMuscles: ['glutes', 'side-deltoids', 'serratus-anterior'],
    equipment: ['floor'],
    description:
      'Lie on your side with your forearm on the floor, elbow beneath your shoulder, and lift your hips to form a straight line from head to feet while engaging your core. Start with bent-knee side planks to develop oblique strength, shoulder stability, and balance, gradually progressing to the full position. Increase the difficulty by incorporating hip dips, leg raises, or weighted side planks while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/side-plank.png',
  },
    {
    id: 'single-leg-glute-bridge',
    name: 'Single-Leg Glute Bridge',
    movementType: 'static',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['legs', 'core'],
    primaryMuscles: ['glutes', 'hamstrings'],
    secondaryMuscles: ['abdominals', 'obliques', 'lower-back'],
    equipment: ['floor'],
    description:
      'Lie on your back with one knee bent and the opposite leg extended, then push through your planted heel to lift your hips while keeping your core engaged and pelvis level. Start with regular glute bridges and assisted single-leg variations to develop glute strength, hip stability, and balance. Gradually increase your range of motion, incorporate controlled repetitions or resistance bands, and progress toward weighted single-leg glute bridges while maintaining proper alignment and stability.',
    imageUrl: '/images/exercises/single-leg-glute-bridge.png',
  },
    {
    id: 'maltese-cross',
    name: 'Maltese Cross',
    movementType: 'static',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'biceps', 'core'],
    primaryMuscles: ['chest', 'front-deltoids', 'biceps'],
    secondaryMuscles: ['latissimus-dorsi', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['rings'],
    description:
      'Support your body horizontally on gymnastic rings with your arms extended straight out to the sides, keeping your body facing downward, core engaged, and shoulders stable. Start with planche holds, ring support exercises, and assisted Maltese Cross variations to develop shoulder strength, straight-arm stability, and body control. Gradually reduce assistance, practice controlled Maltese leans, and focus on maintaining proper alignment and ring stability as you progress toward the full Maltese Cross.',
    imageUrl: '/images/exercises/maltese-cross.png',
  },
    {
    id: 'tricep-extensions',
    name: 'Tricep Extensions',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'static',
    targetAreas: ['triceps', 'chest', 'shoulders'],
    primaryMuscles: ['triceps', 'chest', 'front-deltoids'],
    secondaryMuscles: ['serratus-anterior', 'abdominals', 'forearms'],
    equipment: [],
    description:
      'Grip a horizontal bar with both hands, lean forward with your body straight, and bend your elbows to lower your head toward the bar before extending your arms to push back up. Start with a higher bar and a more upright body position to develop triceps strength, shoulder stability, and core control. Gradually lower the bar, increase your body angle, and incorporate slow negatives or single-arm assisted variations to increase difficulty while maintaining proper technique.',
    imageUrl: '/images/exercises/tricep-extensions.png',
  },
    {
    id: 'toes-to-bar',
    name: 'Toes to Bar',
    movementType: 'dynamic',
    difficulty: 'beginner',
    graphLevel: 1,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'hip-flexors'],
    secondaryMuscles: ['obliques', 'latissimus-dorsi', 'forearms'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Hang from a pull-up bar with your arms extended, engage your core, and lift your legs until your toes touch the bar while keeping your movements controlled and minimizing swinging. Start with hanging knee raises and straight-leg raises to develop abdominal strength, grip endurance, and hip flexor control. Gradually increase your range of motion, incorporate controlled negatives, and progress toward strict toes-to-bar repetitions while maintaining proper technique and full-body stability.',
    imageUrl: '/images/exercises/toes-to-bar.png',
  },
    {
    id: 'tulloch',
    name: 'Tulloch',
    movementType: 'dynamic',
    difficulty: 'elite',
    graphLevel: 7,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'shoulders', 'core'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'rear-deltoids'],
    secondaryMuscles: ['abdominals', 'biceps', 'forearms', 'obliques'],
    equipment: [],
    description:
      'Perform the Tulloch strength element with deliberate scapular control and full-body tension. The back and shoulders sustain the demanding lever while the trunk stabilizes the body. Confirm the exact variation and apparatus against your reference image before publishing.',
    imageUrl: '/images/exercises/tulloch.png',
  },
    {
    id: 'inverted-row',
    name: 'Inverted Row',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['upper-back', 'latissimus-dorsi', 'biceps'],
    secondaryMuscles: ['rear-deltoids', 'forearms', 'abdominals'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Position yourself beneath a low bar, grip it with your hands shoulder-width apart, and pull your chest toward the bar while keeping your body straight and core engaged. Start with bent-knee inverted rows or a higher bar to develop back strength, grip endurance, and body control. Gradually lower the bar, extend your legs, or elevate your feet to increase difficulty, progressing toward weighted or single-arm inverted rows while maintaining proper technique.',
    imageUrl: '/images/exercises/inverted-row.png',
  },
    {
    id: 'one-arm-dragon-flag',
    name: 'One-Arm Dragon Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core'],
    primaryMuscles: ['abdominals', 'obliques'],
    secondaryMuscles: ['latissimus-dorsi', 'hip-flexors', 'glutes'],
    equipment: ['floor'],
    description:
      'Lie on your back, grip a stable support behind your head with one hand, and lift your body into a straight line while keeping your shoulders grounded and core engaged. Lower your body slowly without letting your hips drop or your lower back arch, maintaining balance and control throughout the movement. Start with regular dragon flags, assisted one-arm variations, and controlled negatives, gradually reducing assistance as you develop the core strength and stability needed to perform the full exercise.',
    imageUrl: '/images/exercises/one-arm-dragon-flag.png',
  }
  ,
    {
    id: 'one-arm-l-sit',
    name: 'One-Arm L-Sit',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders'],
    primaryMuscles: ['hip-flexors', 'abdominals', 'triceps'],
    secondaryMuscles: ['quadriceps', 'front-deltoids', 'forearms', 'obliques'],
    equipment: ['pull-up-bar','rings'],
    description:
      'Support your body on one hand with your arm straight, lift your legs forward until they are parallel to the ground, and keep your core engaged while maintaining balance and stability. Start with regular L-sits, assisted one-arm holds, and controlled weight shifts to develop unilateral shoulder strength, core stability, and body control. Gradually reduce assistance, extend your legs fully, and practice balancing on one hand while maintaining proper alignment and controlled movement.',
    imageUrl: '/images/exercises/one-arm-l-sit.png',
  }
  ,
    {
    id: 'arm-lever',
    name: 'Arm Lever HACER',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'chest', 'core'],
    primaryMuscles: ['front-deltoids', 'chest', 'triceps'],
    secondaryMuscles: ['abdominals', 'forearms', 'serratus-anterior', 'obliques'],
    equipment: [],
    description:
      'Balance the torso horizontally on a bent supporting arm with the elbow braced against the body. Lift the legs and maintain a firm trunk while shifting the center of mass over the hand. The shoulder, chest and triceps stabilize the hold.',
    imageUrl: '/images/exercises/arm-lever.png',
  }
  ,
    {
    id: 'clutch-flag',
    name: 'Clutch Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with your arms wrapped around it, engage your core, and lift your body horizontally to the side while keeping your legs extended and maintaining balance. Start with assisted clutch flag holds, tuck variations, and side plank exercises to develop core strength, shoulder stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions to achieve a full clutch flag with proper alignment and stability.',
    imageUrl: '/images/exercises/clutch-flag.png',
  }
  ,
    {
    id: 'x-grip-flag',
    name: 'X-Grip Flag',
    movementType: 'static',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'Grip a vertical pole with your arms crossed in an X-shaped position, engage your core, and lift your body horizontally while maintaining straight legs and full-body tension. Start with regular human flags, assisted X-grip holds, and tuck variations to develop shoulder strength, grip stability, and balance. Gradually extend your legs, reduce assistance, and practice controlled transitions while focusing on maintaining proper alignment and stability as you progress toward the full X-grip human flag.',
    imageUrl: '/images/exercises/x-grip-flag.png',
  }
  ,
    {
    id: 'shoulder-flag',
    name: 'Shoulder Flag',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'static',
    targetAreas: ['core', 'shoulders', 'back'],
    primaryMuscles: ['obliques', 'latissimus-dorsi', 'front-deltoids'],
    secondaryMuscles: ['triceps', 'upper-back', 'abdominals', 'forearms'],
    equipment: ['vertical-pole'],
    description:
      'osition your shoulder against a vertical pole, secure your grip, and lift your body horizontally while keeping your core engaged and legs extended to maintain balance and stability. Start with regular human flags, assisted shoulder flag holds, and tuck variations to develop shoulder strength, core stability, and body control. Gradually extend your legs, reduce assistance, and practice controlled transitions while maintaining proper shoulder positioning and full-body tension as you progress toward the full shoulder human flag.',
    imageUrl: '/images/exercises/shoulder-flag.png',
  }
  ,
    {
    id: 'wall-handstand',
    name: 'Wall Handstand',
    movementType: 'static',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'static',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Place your hands shoulder-width apart on the floor, kick your legs up against a wall, and maintain a straight body position while engaging your core and shoulders. Start with wall walks and chest-to-wall handstands to develop shoulder strength, balance, and body awareness. Gradually practice controlled weight shifts, heel pulls, and freestanding handstand attempts to improve stability and reduce your reliance on the wall.',
    imageUrl: '/images/exercises/wall-handstand.png',
  },
    {
    id: 'tuck-planche-press-to-handstand',
    name: 'Tuck Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 4,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a tuck planche position with your arms straight, knees tucked toward your chest, and feet lifted off the ground, then press your hips upward and extend your legs into a stable handstand. Begin with tuck planche holds, wall-assisted handstand presses, and controlled transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, improve your hip elevation and leg extension, and practice smooth transitions while maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/tuck-planche-press-to-handstand.png',
  },
  {
    id: 'straddle-planche-press-to-handstand',
    name: 'Straddle Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'advanced',
    graphLevel: 5,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a straddle planche position with your arms straight, legs spread apart, and body horizontal, then press your hips upward while lifting your legs into a stable handstand. Begin with straddle planche holds, assisted handstand presses, and controlled planche-to-handstand transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, improve your hip elevation and shoulder control, and practice smooth transitions while maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/straddle-planche-press-to-handstand.png',
  },
  {
    id: 'full-planche-press-to-handstand',
    name: 'Full Planche Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'elite',
    graphLevel: 6,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in a full planche position with your arms straight, legs extended, and body horizontal, then press your hips upward and lift your legs into a stable handstand while maintaining full-body tension. Begin with full planche holds, straddle planche presses, and assisted handstand transitions to develop shoulder strength, core stability, and balance. Gradually reduce assistance, practice controlled negative transitions from handstand to planche, and focus on maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/full-planche-press-to-handstand.png',
  },
  {
    id: 'l-sit-to-handstand',
    name: 'L-sit To Handstand',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start in an L-sit position with your arms straight and legs extended forward, then lean your shoulders forward, lift your hips, and press your body upward into a stable handstand. Begin with L-sit holds, tuck planche exercises, and assisted handstand presses to develop shoulder strength, core stability, and balance. Gradually reduce assistance, improve your hip elevation and compression strength, and practice controlled transitions while maintaining straight arms and proper body alignment throughout the movement.',
    imageUrl: '/images/exercises/l-sit-to-handstand.png',
  },
  {
    id: 'straddle-press-to-handstand',
    name: 'Straddle Press To Handstand',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 3,
    showInTree: false,
    category: 'push',
    targetAreas: ['shoulders', 'core'],
    primaryMuscles: ['front-deltoids', 'side-deltoids', 'triceps','obliques'],
    secondaryMuscles: ['trapezius', 'serratus-anterior', 'forearms', 'abdominals'],
    equipment: ['floor','parallettes'],
    description:
      'Start with your hands on the floor and legs spread wide, lean your shoulders forward, and lift your hips and legs upward into a stable handstand while keeping your arms straight and core engaged. Begin with seated straddle leg lifts, pike compressions, and wall-assisted handstand presses to develop shoulder strength, hip mobility, and core control. Gradually reduce assistance, improve your straddle flexibility, and practice controlled negative presses to achieve a smooth freestanding straddle press to handstand with proper technique.',
    imageUrl: '/images/exercises/straddle-press-to-handstand.png',
  },
    {
    id: 'comando-pull-up',
    name: 'Comando Pull-Up',
    movementType: 'dynamic',
    difficulty: 'intermediate',
    graphLevel: 2,
    showInTree: false,
    category: 'pull',
    targetAreas: ['back', 'biceps'],
    primaryMuscles: ['latissimus-dorsi', 'upper-back', 'biceps'],
    secondaryMuscles: ['forearms', 'rear-deltoids', 'abdominals'],
    equipment: ['pull-up-bar'],
    description:
      'Grip a pull-up bar with both hands facing each other, position your body sideways beneath the bar, and pull yourself upward until your head passes the bar, alternating sides with each repetition. Start with regular pull-ups, neutral-grip pull-ups, and assisted commando pull-ups to develop back strength, grip endurance, and coordination. Gradually reduce assistance, increase your range of motion, and incorporate weighted variations while maintaining proper technique and controlled movement.',
    imageUrl: '/images/exercises/comando-pull-up.png',
  }
];

export const EXERCISE_RELATIONS: ExerciseRelation[] = [
  /*
   * PULL UP / FRONT LEVER BRANCH
   */
  {
    from: 'pull-up',
    to: 'early-front-lever-progressions',
    type: 'progression',
  },
  {
    from: 'pull-up',
    to: 'chest-to-bar',
    type: 'progression',
  },
  {
    from: 'pull-up',
    to: 'one-arm-pull-up',
    type: 'progression',
  },

  {
    from: 'early-front-lever-progressions',
    to: 'hang-to-inverted-press',
    type: 'progression',
  },
  {
    from: 'early-front-lever-progressions',
    to: 'front-lever',
    type: 'progression',
  },
  {
    from: 'hang-to-inverted-press',
    to: 'front-lever',
    type: 'progression',
  },

  {
    from: 'front-lever',
    to: 'touch-front-lever',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'one-arm-front-lever',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'front-lever-pull-up',
    type: 'progression',
  },
  {
    from: 'front-lever',
    to: 'caruso',
    type: 'progression',
  },

  /*
   * MUSCLE UP / PULL BRANCH
   */
  {
    from: 'chest-to-bar',
    to: 'muscle-up',
    type: 'progression',
  },
  {
    from: 'dips',
    to: 'muscle-up',
    type: 'progression',
  },
  {
    from: 'muscle-up',
    to: 'waist-pull-up',
    type: 'progression',
  },
  {
    from: 'muscle-up',
    to: 'butterfly',
    type: 'progression',
  },
  {
    from: 'waist-pull-up',
    to: 'front-lever-pull-up',
    type: 'progression',
  },
  {
    from: 'front-lever-pull-up',
    to: 'victorian',
    type: 'progression',
  },
  {
    from: 'victorian',
    to: 'caruso',
    type: 'progression',
  },
  {
    from: 'butterfly',
    to: 'inverted-butterfly',
    type: 'progression',
  },

  /*
   * DIPS BRANCH
   */
  {
    from: 'dips',
    to: 'impossible-dip',
    type: 'progression',
  },
  {
    from: 'dips',
    to: 'korean-dip',
    type: 'progression',
  },
  {
    from: 'korean-dip',
    to: 'hefesto',
    type: 'progression',
  },
  {
    from: 'hefesto',
    to: 'entrada-de-angel',
    type: 'progression',
  },
  {
    from: 'entrada-de-angel',
    to: 'entrada-de-diablo',
    type: 'progression',
  },

  /*
   * HUMAN FLAG
   */
  {
    from: 'human-flag',
    to: 'human-flag-pull-up',
    type: 'progression',
  },

  /*
   * L-SIT
   */
  {
    from: 'l-sit',
    to: 'v-sit',
    type: 'progression',
  },
  {
    from: 'v-sit',
    to: 'mana',
    type: 'progression',
  },

  /*
   * HANDSTAND / PLANCHE
   */
  {
    from: 'handstand',
    to: 'press-to-handstand',
    type: 'progression',
  },
  {
    from: 'handstand',
    to: 'handstand-push-up',
    type: 'progression',
  },
  {
    from: 'handstand',
    to: 'clean-one-arm-handstand',
    type: 'progression',
  },

  {
    from: 'press-to-handstand',
    to: 'straddle-planche',
    type: 'progression',
  },
  {
    from: 'early-planche-progressions',
    to: 'straddle-planche',
    type: 'progression',
  },
  {
    from: 'straddle-planche',
    to: 'full-planche',
    type: 'progression',
  },

  {
    from: 'full-planche',
    to: 'full-planche-push-ups',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'reverse-planche',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'one-arm-planche',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'maltese',
    type: 'progression',
  },
  {
    from: 'full-planche',
    to: 'pelican',
    type: 'progression',
  },
  {
    from: 'maltese',
    to: 'zanetti',
    type: 'progression',
  },

  /*
   * PUSH UP
   */
  {
    from: 'push-up',
    to: 'pike-push-up',
    type: 'progression',
  },
  {
    from: 'push-up',
    to: 'one-arm-push-up-clean-form',
    type: 'progression',
  },
  {
    from: 'push-up',
    to: 'bent-arm-planche',
    type: 'progression',
  },

  {
    from: 'pike-push-up',
    to: 'handstand-push-up',
    type: 'progression',
  },
  {
    from: 'handstand-push-up',
    to: '90-degree-push-up',
    type: 'progression',
  },
  {
    from: 'bent-arm-planche',
    to: 'one-arm-bent-planche',
    type: 'progression',
  },

  /*
   * BACK LEVER
   */
  {
    from: 'skin-the-cat',
    to: 'back-lever',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'one-arm-back-lever',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'pelican',
    type: 'progression',
  },
  {
    from: 'back-lever',
    to: 'zanetti',
    type: 'progression',
  },

  /*
   * IRON CROSS
   */
  {
    from: 'iron-cross',
    to: 'inverted-cross',
    type: 'progression',
  },
  {
    from: 'iron-cross',
    to: 'butterfly',
    type: 'progression',
  },
  /*
  {
    from: 'inverted-cross',
    to: 'inverted-butterfly',
    type: 'progression',
  },
  */
];
