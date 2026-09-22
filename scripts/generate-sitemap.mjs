import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const DOMAIN = 'https://www.treethenics.com';

const sourcePath = resolve(
  'src/app/features/tree/data/tree.mock.ts'
);

const source = readFileSync(sourcePath, 'utf8');

// Extrae los IDs de los ejercicios definidos en EXERCISES.
const exercisesSection = source.split(
  'export const EXERCISES: Exercise[] = ['
)[1];

if (!exercisesSection) {
  throw new Error('No se ha encontrado el array EXERCISES.');
}

const exerciseIds = [
  ...exercisesSection.matchAll(/^\s*id:\s*['"]([^'"]+)['"]/gm),
].map((match) => match[1]);

if (exerciseIds.length === 0) {
  throw new Error('No se han encontrado ejercicios.');
}

// Evita URLs duplicadas si algún ID se repite.
const uniqueIds = [...new Set(exerciseIds)];

const staticPaths = [
  '/',
  '/search',
  '/what-should-i-train',
  '/compare',
  '/about',
  '/pro',
];

const urls = [
  ...staticPaths,
  ...uniqueIds.map((id) => `/exercises/${encodeURIComponent(id)}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${DOMAIN}${path}</loc>
  </url>`
  )
  .join('\n')}
</urlset>
`;

mkdirSync(resolve('public'), { recursive: true });
writeFileSync(resolve('public/sitemap.xml'), xml, 'utf8');

console.log(
  `Sitemap generado: ${urls.length} URLs (${uniqueIds.length} ejercicios).`
);
