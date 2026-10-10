import { Exercise } from '../../../shared/models/exercise.model';

import { FRONT_LEVER } from './exercises/front-lever.exercise';
import { PULL_UP } from './exercises/pull-up.exercise';
import { DIPS } from './exercises/dips.exercise';
import { PUSH_UP } from './exercises/push-up.exercise';
import { EARLY_FRONT_LEVER_PROGRESSIONS } from './exercises/early-front-lever-progressions.exercise';
import { CHEST_TO_BAR } from './exercises/chest-to-bar.exercise';
import { L_SIT } from './exercises/l-sit.exercise';
import { HANDSTAND } from './exercises/handstand.exercise';
import { PIKE_PUSH_UP } from './exercises/pike-push-up.exercise';
import { BENT_ARM_PLANCHE } from './exercises/bent-arm-planche.exercise';
import { SKIN_THE_CAT } from './exercises/skin-the-cat.exercise';
import { HANG_TO_INVERTED_PRESS } from './exercises/hang-to-inverted-press.exercise';
import { DRAGON_FLAG } from './exercises/dragon-flag.exercise';
import { MUSCLE_UP } from './exercises/muscle-up.exercise';
import { IMPOSSIBLE_DIP } from './exercises/impossible-dip.exercise';
import { KOREAN_DIP } from './exercises/korean-dip.exercise';
import { PRESS_TO_HANDSTAND } from './exercises/press-to-handstand.exercise';
import { EARLY_PLANCHE_PROGRESSIONS } from './exercises/early-planche-progressions.exercise';
import { HANDSTAND_PUSH_UP } from './exercises/handstand-push-up.exercise';
import { ONE_ARM_BENT_PLANCHE } from './exercises/one-arm-bent-planche.exercise';
import { BACK_LEVER } from './exercises/back-lever.exercise';
import { ONE_ARM_PULL_UP } from './exercises/one-arm-pull-up.exercise';
import { WAIST_PULL_UP } from './exercises/waist-pull-up.exercise';
import { HUMAN_FLAG } from './exercises/human-flag.exercise';
import { HEFESTO } from './exercises/hefesto.exercise';
import { V_SIT } from './exercises/v-sit.exercise';
import { STRADDLE_PLANCHE } from './exercises/straddle-planche.exercise';
import { EXERCISE_90_DEGREE_PUSH_UP } from './exercises/90-degree-push-up.exercise';
import { ONE_ARM_PUSH_UP_CLEAN_FORM } from './exercises/one-arm-push-up-clean-form.exercise';
import { ONE_ARM_BACK_LEVER } from './exercises/one-arm-back-lever.exercise';
import { BACK_LEVER_PULL_UP } from './exercises/back-lever-pull-up.exercise';
import { TOUCH_FRONT_LEVER } from './exercises/touch-front-lever.exercise';
import { FRONT_LEVER_PULL_UP } from './exercises/front-lever-pull-up.exercise';
import { FRONT_LEVER_PRESS } from './exercises/front-lever-press.exercise';
import { X_GRIP_FRONT_LEVER } from './exercises/x-grip-front-lever.exercise';
import { HUMAN_FLAG_PULL_UP } from './exercises/human-flag-pull-up.exercise';
import { ENTRADA_DE_ANGEL } from './exercises/entrada-de-angel.exercise';
import { FULL_PLANCHE } from './exercises/full-planche.exercise';
import { CLEAN_ONE_ARM_HANDSTAND } from './exercises/clean-one-arm-handstand.exercise';
import { IRON_CROSS } from './exercises/iron-cross.exercise';
import { ONE_ARM_FRONT_LEVER } from './exercises/one-arm-front-lever.exercise';
import { VICTORIAN } from './exercises/victorian.exercise';
import { VICTORIAN_PRESS } from './exercises/victorian-press.exercise';
import { VICTORIAN_FLOOR } from './exercises/victorian-floor.exercise';
import { BUTTERFLY } from './exercises/butterfly.exercise';
import { MANA } from './exercises/mana.exercise';
import { FULL_PLANCHE_PUSH_UPS } from './exercises/full-planche-push-ups.exercise';
import { MALTESE } from './exercises/maltese.exercise';
import { CARUSO } from './exercises/caruso.exercise';
import { INVERTED_BUTTERFLY } from './exercises/inverted-butterfly.exercise';
import { ENTRADA_DE_DIABLO } from './exercises/entrada-de-diablo.exercise';
import { REVERSE_PLANCHE } from './exercises/reverse-planche.exercise';
import { ONE_ARM_PLANCHE } from './exercises/one-arm-planche.exercise';
import { PELICAN } from './exercises/pelican.exercise';
import { ZANETTI } from './exercises/zanetti.exercise';
import { INVERTED_CROSS } from './exercises/inverted-cross.exercise';
import { FULL_PLANCHE_RINGS } from './exercises/full-planche-rings.exercise';
import { MALTESE_RINGS } from './exercises/maltese-rings.exercise';
import { BACK_LEVER_RINGS } from './exercises/back-lever-rings.exercise';
import { HANDSTAND_RINGS } from './exercises/handstand-rings.exercise';
import { SUPINATED_PULL_UP } from './exercises/supinated-pull-up.exercise';
import { ARCHER_PULL_UP } from './exercises/archer-pull-up.exercise';
import { L_SIT_PULL_UP } from './exercises/l-sit-pull-up.exercise';
import { AUSTRALIAN_PULL_UP } from './exercises/australian-pull-up.exercise';
import { FROG_STAND } from './exercises/frog-stand.exercise';
import { PLANK } from './exercises/plank.exercise';
import { DIAMOND_PUSH_UP } from './exercises/diamond-push-up.exercise';
import { DECLINE_PUSH_UP } from './exercises/decline-push-up.exercise';
import { SPHINX_PUSH_UP } from './exercises/sphinx-push-up.exercise';
import { CLAPPING_PUSH_UP } from './exercises/clapping-push-up.exercise';
import { LEAN_PLANCHE_PUSH_UP } from './exercises/lean-planche-push-up.exercise';
import { TUCKED_PLANCHE_PUSH_UP } from './exercises/tucked-planche-push-up.exercise';
import { STRADDLE_PLANCHE_PUSH_UP } from './exercises/straddle-planche-push-up.exercise';
import { TUCK_ADVANCED_PLANCHE_PUSH_UP } from './exercises/tuck-advanced-planche-push-up.exercise';
import { TUCK_ADVANCED_PLANCHE } from './exercises/tuck-advanced-planche.exercise';
import { KNEE_PUSH_UP } from './exercises/knee-push-up.exercise';
import { X_GRIP_MUSCLE_UP } from './exercises/x-grip-muscle-up.exercise';
import { L_SIT_MUSCLE_UP } from './exercises/l-sit-muscle-up.exercise';
import { ONE_ARM_MUSCLE_UP } from './exercises/one-arm-muscle-up.exercise';
import { EXTREME_WIDE_MUSCLE_UP } from './exercises/extreme-wide-muscle-up.exercise';
import { SLOW_MUSCLE_UP } from './exercises/slow-muscle-up.exercise';
import { FRONT_LEVER_MUSCLE_UP } from './exercises/front-lever-muscle-up.exercise';
import { ONE_ARM_FRONT_LEVER_MUSCLE_UP } from './exercises/one-arm-front-lever-muscle-up.exercise';
import { RINGS_MUSCLE_UP } from './exercises/rings-muscle-up.exercise';
import { PISTOL_SQUAT } from './exercises/pistol-squat.exercise';
import { BULGARIAN_SQUAT } from './exercises/bulgarian-squat.exercise';
import { JUMP_SQUAT } from './exercises/jump-squat.exercise';
import { COSSACK_SQUAT } from './exercises/cossack-squat.exercise';
import { BROAD_JUMPS } from './exercises/broad-jumps.exercise';
import { ISOMETRIC_SQUAT } from './exercises/isometric-squat.exercise';
import { SISSY_SQUAT } from './exercises/sissy-squat.exercise';
import { HIP_THRUST } from './exercises/hip-thrust.exercise';
import { SQUAT } from './exercises/squat.exercise';
import { NORDIC_CURL } from './exercises/nordic-curl.exercise';
import { DRAGON_PISTOL_SQUAT } from './exercises/dragon-pistol-squat.exercise';
import { CLOSE_TO_IMPOSSIBLE } from './exercises/close-to-impossible.exercise';
import { CRUNCH } from './exercises/crunch.exercise';
import { SIDE_PLANK } from './exercises/side-plank.exercise';
import { SINGLE_LEG_GLUTE_BRIDGE } from './exercises/single-leg-glute-bridge.exercise';
import { MALTESE_CROSS } from './exercises/maltese-cross.exercise';
import { TRICEP_EXTENSIONS } from './exercises/tricep-extensions.exercise';
import { TOES_TO_BAR } from './exercises/toes-to-bar.exercise';
import { INVERTED_ROW } from './exercises/inverted-row.exercise';
import { ONE_ARM_DRAGON_FLAG } from './exercises/one-arm-dragon-flag.exercise';
import { ONE_ARM_L_SIT } from './exercises/one-arm-l-sit.exercise';
import { ARM_LEVER } from './exercises/arm-lever.exercise';
import { CLUTCH_FLAG } from './exercises/clutch-flag.exercise';
import { X_GRIP_FLAG } from './exercises/x-grip-flag.exercise';
import { SHOULDER_FLAG } from './exercises/shoulder-flag.exercise';
import { WALL_HANDSTAND } from './exercises/wall-handstand.exercise';
import { TUCK_PLANCHE_PRESS_TO_HANDSTAND } from './exercises/tuck-planche-press-to-handstand.exercise';
import { STRADDLE_PLANCHE_PRESS_TO_HANDSTAND } from './exercises/straddle-planche-press-to-handstand.exercise';
import { FULL_PLANCHE_PRESS_TO_HANDSTAND } from './exercises/full-planche-press-to-handstand.exercise';
import { L_SIT_TO_HANDSTAND } from './exercises/l-sit-to-handstand.exercise';
import { STRADDLE_PRESS_TO_HANDSTAND } from './exercises/straddle-press-to-handstand.exercise';
import { COMANDO_PULL_UP } from './exercises/comando-pull-up.exercise';
import { TUCK_ADVANCED_FRONT_LEVER } from './exercises/tuck-advanced-front-lever.exercise';
import { TUCK_ADVANCED_FRONT_LEVER_PULL_UP } from './exercises/tuck-advanced-front-lever-pull-up.exercise';
import { STRADDLE_FRONT_LEVER } from './exercises/straddle-front-lever-pull-up.exercise';
import { ARCH_BODY_HOLD } from './exercises/arch-body-hold.exercise';
import { BIRD_DOG } from './exercises/bird-dog.exercise';
import { HOLLOW_BODY_HOLD } from './exercises/hollow-body-hold.exercise';
import { HANGING_KNEE_RAISES } from './exercises/hanging-knee-raises.exercise';
import { JUMPING_JACKS } from './exercises/jumping-jacks.exercise';
import { TRICEPS_DIP } from './exercises/triceps-dip.exercise';
import { WALL_SQUAT } from './exercises/wall-squat.exercise';
import { SIT_UPS } from './exercises/sit-ups.exercise';
import { MOUNTAIN_CLIMBERS } from './exercises/mountain-climbers.exercise';
import { LEG_RAISES } from './exercises/leg-raises.exercise';
import { BURPEES } from './exercises/burpees.exercise';
import { BICYCLE_CRUNCHES } from './exercises/bicycle-crunches.exercise';
import { ICE_CREAM_MAKERS } from './exercises/ice-cream-makers.exercise';


export const EXERCISES: Exercise[] = [
  FRONT_LEVER,
  PULL_UP,
  DIPS,
  PUSH_UP,
  EARLY_FRONT_LEVER_PROGRESSIONS,
  CHEST_TO_BAR,
  L_SIT,
  HANDSTAND,
  PIKE_PUSH_UP,
  BENT_ARM_PLANCHE,
  SKIN_THE_CAT,
  HANG_TO_INVERTED_PRESS,
  DRAGON_FLAG,
  MUSCLE_UP,
  IMPOSSIBLE_DIP,
  KOREAN_DIP,
  PRESS_TO_HANDSTAND,
  EARLY_PLANCHE_PROGRESSIONS,
  HANDSTAND_PUSH_UP,
  ONE_ARM_BENT_PLANCHE,
  BACK_LEVER,
  ONE_ARM_PULL_UP,
  WAIST_PULL_UP,
  HUMAN_FLAG,
  HEFESTO,
  V_SIT,
  STRADDLE_PLANCHE,
  EXERCISE_90_DEGREE_PUSH_UP,
  ONE_ARM_PUSH_UP_CLEAN_FORM,
  ONE_ARM_BACK_LEVER,
  BACK_LEVER_PULL_UP,
  TOUCH_FRONT_LEVER,
  FRONT_LEVER_PULL_UP,
  FRONT_LEVER_PRESS,
  X_GRIP_FRONT_LEVER,
  HUMAN_FLAG_PULL_UP,
  ENTRADA_DE_ANGEL,
  FULL_PLANCHE,
  CLEAN_ONE_ARM_HANDSTAND,
  IRON_CROSS,
  ONE_ARM_FRONT_LEVER,
  VICTORIAN,
  VICTORIAN_PRESS,
  VICTORIAN_FLOOR,
  BUTTERFLY,
  MANA,
  FULL_PLANCHE_PUSH_UPS,
  MALTESE,
  CARUSO,
  INVERTED_BUTTERFLY,
  ENTRADA_DE_DIABLO,
  REVERSE_PLANCHE,
  ONE_ARM_PLANCHE,
  PELICAN,
  ZANETTI,
  INVERTED_CROSS,
  FULL_PLANCHE_RINGS,
  MALTESE_RINGS,
  BACK_LEVER_RINGS,
  HANDSTAND_RINGS,
  SUPINATED_PULL_UP,
  ARCHER_PULL_UP,
  L_SIT_PULL_UP,
  AUSTRALIAN_PULL_UP,
  FROG_STAND,
  PLANK,
  DIAMOND_PUSH_UP,
  DECLINE_PUSH_UP,
  SPHINX_PUSH_UP,
  CLAPPING_PUSH_UP,
  LEAN_PLANCHE_PUSH_UP,
  TUCKED_PLANCHE_PUSH_UP,
  STRADDLE_PLANCHE_PUSH_UP,
  TUCK_ADVANCED_PLANCHE_PUSH_UP,
  TUCK_ADVANCED_PLANCHE,
  KNEE_PUSH_UP,
  X_GRIP_MUSCLE_UP,
  L_SIT_MUSCLE_UP,
  ONE_ARM_MUSCLE_UP,
  EXTREME_WIDE_MUSCLE_UP,
  SLOW_MUSCLE_UP,
  FRONT_LEVER_MUSCLE_UP,
  ONE_ARM_FRONT_LEVER_MUSCLE_UP,
  RINGS_MUSCLE_UP,
  PISTOL_SQUAT,
  BULGARIAN_SQUAT,
  JUMP_SQUAT,
  COSSACK_SQUAT,
  BROAD_JUMPS,
  ISOMETRIC_SQUAT,
  SISSY_SQUAT,
  HIP_THRUST,
  SQUAT,
  NORDIC_CURL,
  DRAGON_PISTOL_SQUAT,
  CLOSE_TO_IMPOSSIBLE,
  CRUNCH,
  SIDE_PLANK,
  SINGLE_LEG_GLUTE_BRIDGE,
  MALTESE_CROSS,
  TRICEP_EXTENSIONS,
  TOES_TO_BAR,
  INVERTED_ROW,
  ONE_ARM_DRAGON_FLAG,
  ONE_ARM_L_SIT,
  ARM_LEVER,
  CLUTCH_FLAG,
  X_GRIP_FLAG,
  SHOULDER_FLAG,
  WALL_HANDSTAND,
  TUCK_PLANCHE_PRESS_TO_HANDSTAND,
  STRADDLE_PLANCHE_PRESS_TO_HANDSTAND,
  FULL_PLANCHE_PRESS_TO_HANDSTAND,
  L_SIT_TO_HANDSTAND,
  STRADDLE_PRESS_TO_HANDSTAND,
  COMANDO_PULL_UP,
  TUCK_ADVANCED_FRONT_LEVER,
  TUCK_ADVANCED_FRONT_LEVER_PULL_UP,
  STRADDLE_FRONT_LEVER,
  ARCH_BODY_HOLD,
  BIRD_DOG,
  HOLLOW_BODY_HOLD,
  HANGING_KNEE_RAISES,
  JUMPING_JACKS,
  TRICEPS_DIP,
  WALL_SQUAT,
  SIT_UPS,
  MOUNTAIN_CLIMBERS,
  LEG_RAISES,
  BURPEES,
  BICYCLE_CRUNCHES,
  ICE_CREAM_MAKERS,
];


/*

export const EXERCISES: Exercise[] = [
  FRONT_LEVER,
  PULL_UP,
  DIPS,
  PUSH_UP,
  EARLY_FRONT_LEVER_PROGRESSIONS,
  CHEST_TO_BAR,
  L_SIT,
  HANDSTAND,
  PIKE_PUSH_UP,
  BENT_ARM_PLANCHE,
  SKIN_THE_CAT,
  HANG_TO_INVERTED_PRESS,
  DRAGON_FLAG,
  MUSCLE_UP,
  IMPOSSIBLE_DIP,
  KOREAN_DIP,
  PRESS_TO_HANDSTAND,
  EARLY_PLANCHE_PROGRESSIONS,
  HANDSTAND_PUSH_UP,
  ONE_ARM_BENT_PLANCHE,
  BACK_LEVER,
  ONE_ARM_PULL_UP,
  WAIST_PULL_UP,
  HUMAN_FLAG,
  HEFESTO,
  V_SIT,
  STRADDLE_PLANCHE,
  EXERCISE_90_DEGREE_PUSH_UP,
  ONE_ARM_PUSH_UP_CLEAN_FORM,
  ONE_ARM_BACK_LEVER,
  BACK_LEVER_PULL_UP,
  TOUCH_FRONT_LEVER,
  FRONT_LEVER_PULL_UP,
  FRONT_LEVER_PRESS,
  X_GRIP_FRONT_LEVER,
  HUMAN_FLAG_PULL_UP,
  ENTRADA_DE_ANGEL,
  FULL_PLANCHE,
  CLEAN_ONE_ARM_HANDSTAND,
  IRON_CROSS,
  ONE_ARM_FRONT_LEVER,
  VICTORIAN,
  VICTORIAN_PRESS,
  VICTORIAN_FLOOR,
  BUTTERFLY,
  MANA,
  FULL_PLANCHE_PUSH_UPS,
  MALTESE,
  CARUSO,
  INVERTED_BUTTERFLY,
  ENTRADA_DE_DIABLO,
  REVERSE_PLANCHE,
  ONE_ARM_PLANCHE,
  PELICAN,
  ZANETTI,
  INVERTED_CROSS,
  FULL_PLANCHE_RINGS,
  MALTESE_RINGS,
  BACK_LEVER_RINGS,
  HANDSTAND_RINGS,
  SUPINATED_PULL_UP,
  ARCHER_PULL_UP,
  L_SIT_PULL_UP,
  AUSTRALIAN_PULL_UP,
  FROG_STAND,
  PLANK,
  DIAMOND_PUSH_UP,
  DECLINE_PUSH_UP,
  SPHINX_PUSH_UP,
  CLAPPING_PUSH_UP,
  LEAN_PLANCHE_PUSH_UP,
  TUCKED_PLANCHE_PUSH_UP,
  STRADDLE_PLANCHE_PUSH_UP,
  TUCK_ADVANCED_PLANCHE_PUSH_UP,
  TUCK_ADVANCED_PLANCHE,
  KNEE_PUSH_UP,
  X_GRIP_MUSCLE_UP,
  L_SIT_MUSCLE_UP,
  ONE_ARM_MUSCLE_UP,
  EXTREME_WIDE_MUSCLE_UP,
  SLOW_MUSCLE_UP,
  FRONT_LEVER_MUSCLE_UP,
  ONE_ARM_FRONT_LEVER_MUSCLE_UP,
  RINGS_MUSCLE_UP,
  PISTOL_SQUAT,
  BULGARIAN_SQUAT,
  JUMP_SQUAT,
  COSSACK_SQUAT,
  BROAD_JUMPS,
  ISOMETRIC_SQUAT,
  SISSY_SQUAT,
  HIP_THRUST,
  SQUAT,
  NORDIC_CURL,
  DRAGON_PISTOL_SQUAT,
  CLOSE_TO_IMPOSSIBLE,
  CRUNCH,
  SIDE_PLANK,
  SINGLE_LEG_GLUTE_BRIDGE,
  MALTESE_CROSS,
  TRICEP_EXTENSIONS,
  TOES_TO_BAR,
  INVERTED_ROW,
  ONE_ARM_DRAGON_FLAG,
  ONE_ARM_L_SIT,
  ARM_LEVER,
  CLUTCH_FLAG,
  X_GRIP_FLAG,
  SHOULDER_FLAG,
  WALL_HANDSTAND,
  TUCK_PLANCHE_PRESS_TO_HANDSTAND,
  STRADDLE_PLANCHE_PRESS_TO_HANDSTAND,
  FULL_PLANCHE_PRESS_TO_HANDSTAND,
  L_SIT_TO_HANDSTAND,
  STRADDLE_PRESS_TO_HANDSTAND,
  COMANDO_PULL_UP,
  TUCK_ADVANCED_FRONT_LEVER,
  TUCK_ADVANCED_FRONT_LEVER_PULL_UP,
  STRADDLE_FRONT_LEVER,
  ARCH_BODY_HOLD,
  BIRD_DOG,
  HOLLOW_BODY_HOLD,
  HANGING_KNEE_RAISES,
  JUMPING_JACKS,
  TRICEPS_DIP,
  WALL_SQUAT,
  SIT_UPS,
  MOUNTAIN_CLIMBERS,
  LEG_RAISES,
  BURPEES,
  BICYCLE_CRUNCHES,
  ICE_CREAM_MAKERS,




  ARCHER_PUSH_UP,
  INCLINE_PUSH_UP,
  WIDE_PUSH_UP,
  HINDU_PUSH_UP,
  FEET_ELEVATED_PIKE_PUSH_UP,
  RING_PUSH_UP,
  RING_DIP,
  STRAIGHT_BAR_DIP,
  SCAPULAR_PULL_UP,
  DEAD_HANG,
  ONE_ARM_HANG,
  NEUTRAL_GRIP_PULL_UP,
  WIDE_GRIP_PULL_UP,
  TYPEWRITER_PULL_UP,
  RING_ROW,
  REVERSE_CRUNCH,
  HANGING_LEG_RAISE,
  FLUTTER_KICKS,
  RUSSIAN_TWIST,
  REVERSE_PLANK,
  COPENHAGEN_PLANK,
  FORWARD_LUNGE,
  REVERSE_LUNGE,
  WALKING_LUNGES,
  STEP_UP,
  CALF_RAISE,
  SHRIMP_SQUAT,
  BEAR_CRAWL,
];

*/
