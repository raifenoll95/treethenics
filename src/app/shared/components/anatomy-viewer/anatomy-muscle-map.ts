import type { ExerciseMuscle } from '../../models/exercise-muscle.model';

export const ANATOMY_MUSCLE_MAP: Record<ExerciseMuscle, string[]> = {
  "latissimus-dorsi": [
    "latissimus_dorsi"
  ],
  "serratus-anterior": [
    "serratus_anterior"
  ],
  "upper-back": [
    "trapezius",
    "rhomboid",
    "teres_major",
    "teres_minor"
  ],
  "lower-back": [
    "erector_spinae",
    "iliocostalis",
    "longissimus",
    "spinalis"
  ],
  "trapezius": [
    "trapezius"
  ],
  "rear-deltoids": [
    "spinal_part_of",
    "posterior_deltoid"
  ],
  "front-deltoids": [
    "clavicular_part_of",
    "anterior_deltoid"
  ],
  "side-deltoids": [
    "acromial_part_of",
    "middle_deltoid"
  ],
  "biceps": [
    "biceps_brachii",
    "brachialis"
  ],
  "triceps": [
    "triceps_brachii"
  ],
  "forearms": [
    "brachioradialis",
    "flexor_carpi",
    "extensor_carpi",
    "pronator_teres"
  ],
  "chest": [
    "pectoralis_major",
    "pectoralis_minor"
  ],
  "abdominals": [
    "rectus_abdominis",
    "transversus_abdominis"
  ],
  "obliques": [
    "external_oblique",
    "internal_oblique"
  ],
  "hip-flexors": [
    "iliopsoas",
    "psoas_major",
    "iliacus",
    "rectus_femoris"
  ],
  "glutes": [
    "gluteus_maximus",
    "gluteus_medius",
    "gluteus_minimus"
  ],
  "quadriceps": [
    "rectus_femoris",
    "vastus_lateralis",
    "vastus_medialis",
    "vastus_intermedius"
  ],
  "hamstrings": [
    "biceps_femoris",
    "semitendinosus",
    "semimembranosus"
  ],
  "calves": [
    "gastrocnemius",
    "soleus"
  ],
  "rotator-cuff": [
    "supraspinatus",
    "infraspinatus",
    "teres_minor",
    "subscapularis"
  ]
};
