import { mkdir, writeFile } from 'node:fs/promises';

const output = 'src/app/core/config/image-version.ts';

const version =
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  Date.now().toString();

await mkdir('src/app/core/config', { recursive: true });

await writeFile(
  output,
  `export const IMAGE_VERSION = ${JSON.stringify(version)};\n`,
  'utf8',
);

console.log(`Versión de imágenes generada: ${version}`);
