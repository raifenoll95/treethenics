import fs from 'node:fs';

const mapping = JSON.parse(
  fs.readFileSync('./public/models/anatomy/mesh_mapping.json', 'utf8')
);

const patterns = [
  'latissimus_dorsi',
  'serratus_anterior',

  'trapezius',
  'rhomboid',
  'teres_major',
  'teres_minor',

  'erector_spinae',
  'iliocostalis',
  'longissimus',
  'spinalis',

  'spinal_part_of',
  'posterior_deltoid',

  'clavicular_part_of',
  'anterior_deltoid',

  'acromial_part_of',
  'middle_deltoid',

  'biceps_brachii',
  'brachialis',

  'triceps_brachii',

  'brachioradialis',
  'flexor_carpi',
  'extensor_carpi',
  'pronator_teres',

  'pectoralis_major',
  'pectoralis_minor',

  'rectus_abdominis',
  'transversus_abdominis',

  'external_oblique',
  'internal_oblique',

  'iliopsoas',
  'psoas_major',
  'iliacus',
  'rectus_femoris',

  'gluteus_maximus',
  'gluteus_medius',
  'gluteus_minimus',

  'vastus_lateralis',
  'vastus_medialis',
  'vastus_intermedius',

  'biceps_femoris',
  'semitendinosus',
  'semimembranosus',

  'gastrocnemius',
  'soleus',
];

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/-/g, '_');
}

const used = [];
const unused = [];

for (const mesh of mapping) {
  const name = normalize(mesh.name);

  const matches = patterns.some(pattern =>
    name.includes(pattern)
  );

  if (matches) {
    used.push(mesh);
  } else {
    unused.push(mesh);
  }
}

console.log('\n==============================');
console.log(' ANATOMY ANALYSIS');
console.log('==============================');

console.log(`Total:      ${mapping.length}`);
console.log(`Used:       ${used.length}`);
console.log(`Unused:     ${unused.length}`);
console.log(
  `Removable: ${((unused.length / mapping.length) * 100).toFixed(1)}%`
);

console.log('\n--- USED ---');
for (const mesh of used) {
  console.log(mesh.name);
}

console.log('\n--- UNUSED ---');
for (const mesh of unused) {
  console.log(mesh.name);
}

fs.writeFileSync(
  './anatomy-used.json',
  JSON.stringify(used, null, 2)
);

fs.writeFileSync(
  './anatomy-unused.json',
  JSON.stringify(unused, null, 2)
);

console.log('\nGenerated:');
console.log('  anatomy-used.json');
console.log('  anatomy-unused.json');
