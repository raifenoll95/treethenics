import fs from 'node:fs';
import { NodeIO } from '@gltf-transform/core';

const INPUT =
  './public/models/anatomy/anatomy.glb';

const OUTPUT =
  './public/models/anatomy/anatomy-treethenics.glb';

const UNUSED_FILE =
  './anatomy-unused.json';

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/-/g, '_');
}

const unused = JSON.parse(
  fs.readFileSync(UNUSED_FILE, 'utf8')
);

const unusedNames = new Set(
  unused.map(item => normalize(item.name))
);

const io = new NodeIO();

const document = await io.read(INPUT);
const root = document.getRoot();

let removed = 0;
let kept = 0;

for (const node of [...root.listNodes()]) {
  const mesh = node.getMesh();

  if (!mesh) continue;

  const nodeName = normalize(node.getName());
  const meshName = normalize(mesh.getName());

  const shouldRemove =
    unusedNames.has(nodeName) ||
    unusedNames.has(meshName);

  if (shouldRemove) {
    node.dispose();
    removed++;
  } else {
    kept++;
  }
}

await io.write(OUTPUT, document);

console.log('');
console.log('==============================');
console.log(' TREETHENICS GLB');
console.log('==============================');
console.log(`Removed: ${removed}`);
console.log(`Kept:    ${kept}`);
console.log('');
console.log(`Generated: ${OUTPUT}`);
