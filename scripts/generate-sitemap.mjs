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

// -----------------------------------------------------
// Rutas estáticas
// -----------------------------------------------------

const staticPaths = [
  '/',
  '/search',
  '/what-should-i-train',
  '/compare',
  '/about',
  '/pro',
];

// -----------------------------------------------------
// Generar URLs
// -----------------------------------------------------

const urls = [
  ...staticPaths,
  ...uniqueIds.map(
    (id) => `/exercises/${encodeURIComponent(id)}`,
  ),
];

// -----------------------------------------------------
// Generar sitemap.xml
// -----------------------------------------------------

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${DOMAIN}${path}</loc>
  </url>`,
  )
  .join('\n')}
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
  `Sitemap generado: ${urls.length} URLs (${uniqueIds.length} ejercicios).`,
);
