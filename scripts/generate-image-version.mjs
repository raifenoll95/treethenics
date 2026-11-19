import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.resolve('public');
const outputDir = path.resolve('src/app/core/config');
const versions = {};

async function addFile(file) {
  const key = path.relative(publicDir, file).split(path.sep).join('/');
  const content = await readFile(file);
  versions[key] = createHash('sha256').update(content).digest('hex').slice(0, 16);
}

async function addDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await addDirectory(file);
    } else if (entry.isFile()) {
      await addFile(file);
    }
  }
}

for (const directory of ['optimized', 'about', 'anatomy-static']) {
  await addDirectory(path.join(publicDir, directory));
}

for (const file of [
  'pro/devices.png',
  'home-video/home-video9.mp4',
  'welcome/welcome_me.jpg',
]) {
  await addFile(path.join(publicDir, file));
}

const sorted = Object.fromEntries(
  Object.keys(versions).sort().map(key => [key, versions[key]]),
);
const json = JSON.stringify(sorted, null, 2);
const catalogVersion = createHash('sha256').update(json).digest('hex').slice(0, 16);

await mkdir(outputDir, { recursive: true });
await writeFile(
  path.join(outputDir, 'image-version.ts'),
  `export const IMAGE_VERSION = '${catalogVersion}';\n` +
  `export const MEDIA_VERSIONS: Readonly<Record<string, string>> = ${json};\n`,
  'utf8',
);

console.log(`Versiones generadas para ${Object.keys(sorted).length} archivos.`);
