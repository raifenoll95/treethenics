import { readdir, readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { createHash } from 'node:crypto';

const SOURCE_DIR = path.resolve('public/optimized');
const BUCKET = 'treethenics-assets';

const MANIFEST_PATH = path.resolve(
  'scripts/image-upload-manifest.json',
);

async function getFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function loadManifest() {
  try {
    const content = await readFile(MANIFEST_PATH, 'utf8');
    return JSON.parse(content);
  } catch {
    return {};
  }
}

async function getFileHash(filePath) {
  const content = await readFile(filePath);

  return createHash('sha256')
    .update(content)
    .digest('hex');
}

async function main() {
  const files = await getFiles(SOURCE_DIR);

  console.log(`Archivos encontrados: ${files.length}`);

  const manifest = await loadManifest();
  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    const relativePath = path
      .relative(SOURCE_DIR, file)
      .split(path.sep)
      .join('/');

    const key = `optimized/${relativePath}`;

    const hash = await getFileHash(file);

    if (manifest[key] === hash) {
      console.log(`Sin cambios: ${key}`);
      skipped++;
      continue;
    }

    console.log(`Subiendo: ${key}`);

    const result = spawnSync(
      'npx',
      [
        'wrangler',
        'r2',
        'object',
        'put',
        `${BUCKET}/${key}`,
        '--file',
        file,
        '--remote',
      ],
      {
        stdio: 'inherit',
        shell: true,
      },
    );

    if (result.status !== 0) {
      throw new Error(`Error subiendo ${key}`);
    }

    manifest[key] = hash;

    await writeFile(
      MANIFEST_PATH,
      JSON.stringify(manifest, null, 2),
      'utf8',
    );

    uploaded++;
  }

  console.log(
    `Subida terminada: ${uploaded} subidos, ${skipped} sin cambios.`,
  );
}

await main();
