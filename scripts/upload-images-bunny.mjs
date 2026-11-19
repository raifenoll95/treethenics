import { createHash } from 'node:crypto';
import { readdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const MANIFEST_PATH = path.resolve('scripts/bunny-upload-manifest.json');
const STORAGE_URL = 'https://storage.bunnycdn.com/treethenics-assets';
const password = process.env.BUNNY_STORAGE_PASSWORD;

if (!password) {
  throw new Error('Falta BUNNY_STORAGE_PASSWORD en esta terminal.');
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const file = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listFiles(file));
    } else if (entry.isFile()) {
      files.push(file);
    }
  }

  return files;
}

async function loadManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }
}

const files = [
  ...await listFiles(path.join(PUBLIC_DIR, 'optimized')),
  ...await listFiles(path.join(PUBLIC_DIR, 'anatomy-static')),
  ...await listFiles(path.join(PUBLIC_DIR, 'about')),
  path.join(PUBLIC_DIR, 'pro', 'devices.png'),
  path.join(PUBLIC_DIR, 'home-video', 'home-video9.mp4'),
  path.join(PUBLIC_DIR, 'welcome', 'welcome_me.jpg'),
];

const manifest = await loadManifest();
let uploaded = 0;
let skipped = 0;

for (const file of files) {
  const key = path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
  const content = await readFile(file);
  const hash = createHash('sha256').update(content).digest('hex');

  if (manifest[key] === hash) {
    skipped++;
    continue;
  }

  const remotePath = key.split('/').map(encodeURIComponent).join('/');
  console.log(`Subiendo ${key}`);

  const response = await fetch(`${STORAGE_URL}/${remotePath}`, {
    method: 'PUT',
    headers: {
      AccessKey: password,
      'Content-Type': 'application/octet-stream',
    },
    body: content,
  });

  if (!response.ok) {
    throw new Error(`Bunny devolvió HTTP ${response.status} al subir ${key}.`);
  }

  manifest[key] = hash;
  const temporaryPath = `${MANIFEST_PATH}.${process.pid}.tmp`;
  await writeFile(temporaryPath, JSON.stringify(manifest, null, 2), 'utf8');
  await rename(temporaryPath, MANIFEST_PATH);
  uploaded++;
}

console.log(`Bunny: ${uploaded} subidos, ${skipped} sin cambios.`);
