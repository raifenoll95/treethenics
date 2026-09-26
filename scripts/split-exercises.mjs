import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const SOURCE_FILE = path.join(
  ROOT,
  'src/app/features/tree/data/tree.mock.ts',
);

const OUTPUT_DIR = path.join(
  ROOT,
  'src/app/features/tree/data/exercises',
);

const INDEX_FILE = path.join(
  ROOT,
  'src/app/features/tree/data/exercises.ts',
);

const source = fs.readFileSync(SOURCE_FILE, 'utf8');

const arrayMarker = 'export const EXERCISES: Exercise[] = [';
const arrayStart = source.indexOf(arrayMarker);

if (arrayStart === -1) {
  throw new Error('No se ha encontrado EXERCISES en tree.mock.ts');
}

const contentStart =
  source.indexOf('[', arrayStart + arrayMarker.length - 1) + 1;

// -----------------------------------------------------
// Encontrar el ] real que cierra EXERCISES
// -----------------------------------------------------

let depth = 1;
let inString = false;
let quote = '';
let escaped = false;
let arrayEnd = -1;

for (let i = contentStart; i < source.length; i++) {
  const char = source[i];

  if (inString) {
    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (char === quote) {
      inString = false;
    }

    continue;
  }

  if (char === "'" || char === '"' || char === '`') {
    inString = true;
    quote = char;
    continue;
  }

  if (char === '[') {
    depth++;
  }

  if (char === ']') {
    depth--;

    if (depth === 0) {
      arrayEnd = i;
      break;
    }
  }
}

if (arrayEnd === -1) {
  throw new Error('No se ha encontrado el final de EXERCISES');
}

const exercisesBlock = source.slice(contentStart, arrayEnd);

// -----------------------------------------------------
// Extraer objetos de primer nivel
// -----------------------------------------------------

const objects = [];

let braceDepth = 0;
let objectStart = -1;

inString = false;
quote = '';
escaped = false;

for (let i = 0; i < exercisesBlock.length; i++) {
  const char = exercisesBlock[i];

  if (inString) {
    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (char === quote) {
      inString = false;
    }

    continue;
  }

  if (char === "'" || char === '"' || char === '`') {
    inString = true;
    quote = char;
    continue;
  }

  if (char === '{') {
    if (braceDepth === 0) {
      objectStart = i;
    }

    braceDepth++;
    continue;
  }

  if (char === '}') {
    braceDepth--;

    if (braceDepth === 0 && objectStart !== -1) {
      objects.push(
        exercisesBlock.slice(objectStart, i + 1).trim(),
      );

      objectStart = -1;
    }
  }
}

if (objects.length === 0) {
  throw new Error('No se ha encontrado ningún ejercicio');
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// -----------------------------------------------------
// Helpers
// -----------------------------------------------------

function getId(objectText) {
  const match = objectText.match(/\bid:\s*['"]([^'"]+)['"]/);

  if (!match) {
    throw new Error(
      `Ejercicio sin id:\n${objectText.slice(0, 200)}`,
    );
  }

  return match[1];
}

function toConstantName(id) {
  let name = id
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase();

  if (/^[0-9]/.test(name)) {
    name = `EXERCISE_${name}`;
  }

  return name;
}

// -----------------------------------------------------
// Generar archivos
// -----------------------------------------------------

const generated = [
  {
    id: 'front-lever',
    constantName: 'FRONT_LEVER',
    fileName: 'front-lever.exercise',
  },
];

for (const objectText of objects) {
  const id = getId(objectText);
  const constantName = toConstantName(id);

  // Front Lever ya lo hemos migrado manualmente.
  if (id === 'front-lever') {
    generated.push({
      id,
      constantName: 'FRONT_LEVER',
      fileName: 'front-lever.exercise',
    });

    console.log('↷ front-lever: conservado');
    continue;
  }

  const fileName = `${id}.exercise`;
  const filePath = path.join(
    OUTPUT_DIR,
    `${fileName}.ts`,
  );

  const fileContent = `import { Exercise } from '../../../../shared/models/exercise.model';

export const ${constantName}: Exercise = ${objectText};
`;

  fs.writeFileSync(filePath, fileContent, 'utf8');

  generated.push({
    id,
    constantName,
    fileName,
  });

  console.log(`✓ ${id}`);
}

// -----------------------------------------------------
// Generar exercises.ts
// -----------------------------------------------------

const imports = generated
  .map(
    ({ constantName, fileName }) =>
      `import { ${constantName} } from './exercises/${fileName}';`,
  )
  .join('\n');

const entries = generated
  .map(({ constantName }) => `  ${constantName},`)
  .join('\n');

const indexContent = `import { Exercise } from '../../../shared/models/exercise.model';

${imports}

export const EXERCISES: Exercise[] = [
${entries}
];
`;

fs.writeFileSync(INDEX_FILE, indexContent, 'utf8');

console.log('');
console.log(`Generados ${generated.length} ejercicios.`);
console.log('Generado exercises.ts');
console.log('');
console.log('tree.mock.ts NO ha sido modificado.');
