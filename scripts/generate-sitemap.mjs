import {
  readdirSync,
  writeFileSync,
  mkdirSync,
} from 'node:fs';

import { resolve } from 'node:path';

const DOMAIN = 'https://www.treethenics.com';

const exercisesDir = resolve(
  'src/app/features/tree/data/exercises',
);

// -----------------------------------------------------
// Obtener ejercicios desde los archivos .exercise.ts
// -----------------------------------------------------

const exerciseIds = readdirSync(exercisesDir)
  .filter((file) => file.endsWith('.exercise.ts'))
  .map((file) => file.replace('.exercise.ts', ''));

if (exerciseIds.length === 0) {
  throw new Error('No se han encontrado ejercicios.');
}

// Evita duplicados por seguridad.
const uniqueIds = [...new Set(exerciseIds)].sort();

const EXERCISES_PER_PAGE = 24;
const totalPages = Math.ceil(uniqueIds.length / EXERCISES_PER_PAGE);

const paginationPaths = Array.from(
  { length: Math.max(0, totalPages - 1) },
  (_, index) => `/train/page/${index + 2}`,
);

// -----------------------------------------------------
// Rutas estáticas
// -----------------------------------------------------

const staticPaths = [
  '/',
  '/tree',
  '/search',
  '/train',
  '/compare',
  '/about',
  '/pro',
];

// -----------------------------------------------------
// Generar URLs
// -----------------------------------------------------

const urls = [
  ...staticPaths,
  ...paginationPaths,
  ...uniqueIds.map(
    (id) => `/exercises/${encodeURIComponent(id)}`,
  ),
];

// -----------------------------------------------------
// Generar sitemap.xml
// -----------------------------------------------------

const translatedIds = new Set(
  readdirSync(exercisesDir)
    .filter(file => file.endsWith('.es.ts'))
    .map(file => file.slice(0, -'.es.ts'.length))
);

const translationImports = [];
const translationEntries = [];

for (const id of uniqueIds) {
  if (!translatedIds.has(id)) continue;

  const exportName = `${id.replaceAll('-', '_').toUpperCase()}_ES`;

  translationImports.push(
    `import { ${exportName} } from './exercises/${id}.es';`
  );
  translationEntries.push(`  [${exportName}.id, ${exportName}],`);
}

const registry = [
  '// Generado por scripts/generate-sitemap.mjs.',
  "import type { Exercise } from '../../../shared/models/exercise.model';",
  ...translationImports,
  '',
  'export const SPANISH_EXERCISES: ReadonlyMap<string, Exercise> = new Map<string, Exercise>([',
  ...translationEntries,
  ']);',
  '',
].join('\n');

writeFileSync(
  resolve(exercisesDir, '../spanish-exercises.generated.ts'),
  registry,
  'utf8',
);

const spanishPaths = new Map();

for (const id of uniqueIds) {
  if (translatedIds.has(id)) {
    const englishPath = `/exercises/${encodeURIComponent(id)}`;
    spanishPaths.set(englishPath, `${englishPath}/es`);
  }
}

for (const englishPath of ['/about', '/tree', '/train', ...paginationPaths]) {
  spanishPaths.set(englishPath, `${englishPath}/es`);
}

spanishPaths.set('/', '/es');

const sitemapPaths = [...urls, ...spanishPaths.values()];

const entries = sitemapPaths.map(path => {
  const englishPath = path.endsWith('/es')
    ? (path.slice(0, -3) || '/')
    : path;
  const spanishPath = spanishPaths.get(englishPath);
  const lines = ['  <url>', `    <loc>${DOMAIN}${path}</loc>`];

  if (spanishPath) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${englishPath}" />`,
      `    <xhtml:link rel="alternate" hreflang="es" href="${DOMAIN}${spanishPath}" />`,
    );
  }

  lines.push('  </url>');
  return lines.join('\n');
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

mkdirSync(resolve('public'), {
  recursive: true,
});

writeFileSync(
  resolve('public/sitemap.xml'),
  xml,
  'utf8',
);

console.log(
  `Sitemap generado: ${sitemapPaths.length} URLs ` +
  `(${uniqueIds.length} ejercicios, ${translatedIds.size} fichas en español).`
);
