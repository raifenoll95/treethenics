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
    width: 360,
    maxBytes: 40 * 1024,
  },
  {
    name: 'detail',
    width: 1000,
    maxBytes: 120 * 1024,
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

  let targetWidth = width;
  let result;

  while (true) {
    // Primero reduce calidad; después, si hace falta, resolución.
    for (let quality = 75; quality >= 30; quality -= 5) {
      result = await sharp(sourcePath, { animated: false })
        .rotate()
        .resize({
          width: targetWidth,
          withoutEnlargement: true,
        })
        .webp({
          quality,
          alphaQuality: 80,
          effort: 6,
        })
        .toBuffer();

      if (result.length <= maxBytes) {
        await sharp(result).toFile(outputPath);

        const outputSize = await stat(outputPath);
        return Math.round(outputSize.size / 1024);
      }
    }

    if (targetWidth === 1) {
      throw new Error(
        `No se puede alcanzar el límite de ${maxBytes} bytes: ${sourcePath}`,
      );
    }

    targetWidth = Math.max(1, Math.floor(targetWidth * 0.85));
  }
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
