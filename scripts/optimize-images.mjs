import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('public/images');
const OUTPUT_DIR = path.resolve('public/optimized');

const SUPPORTED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
]);

const VARIANTS = [
  {
    name: 'card',
    width: 480,
    maxBytes: 100 * 1024,
  },
  {
    name: 'detail',
    width: 1200,
    maxBytes: 300 * 1024,
  },
];

async function getImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (
      entry.isFile() &&
      SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(sourcePath, outputPath, width, maxBytes) {
  await mkdir(path.dirname(outputPath), { recursive: true });

  const image = sharp(sourcePath, {
    animated: false,
  }).rotate();

  const metadata = await image.metadata();

  let targetWidth = Math.min(metadata.width ?? width, width);
  let result;

  for (let quality = 82; quality >= 42; quality -= 5) {
    result = await sharp(sourcePath)
      .rotate()
      .resize({
        width: targetWidth,
        withoutEnlargement: true,
      })
      .webp({
        quality,
        effort: 4,
      })
      .toBuffer();

    if (result.length <= maxBytes) {
      break;
    }

    if (quality === 42 && result.length > maxBytes) {
      targetWidth = Math.round(targetWidth * 0.85);
      quality = 87;
    }
  }

  await sharp(result).toFile(outputPath);

  const outputSize = await stat(outputPath);

  return Math.round(outputSize.size / 1024);
}

async function main() {
  const files = await getImageFiles(SOURCE_DIR);

  let generated = 0;

  for (const sourcePath of files) {
    const relativePath = path.relative(SOURCE_DIR, sourcePath);
    const relativeDirectory = path.dirname(relativePath);
    const filename = path.parse(relativePath).name;

    for (const variant of VARIANTS) {
      const outputPath = path.join(
        OUTPUT_DIR,
        variant.name,
        relativeDirectory,
        `${filename}.webp`,
      );

      const size = await optimizeImage(
        sourcePath,
        outputPath,
        variant.width,
        variant.maxBytes,
      );

      generated++;

      console.log(
        `${variant.name}: ${relativePath} → ${size} KB`,
      );
    }
  }

  console.log(
    `Optimización terminada: ${generated} imágenes generadas.`,
  );
}

await main();
