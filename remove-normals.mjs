import { NodeIO } from '@gltf-transform/core';

const io = new NodeIO();

const document = await io.read(
  'public/models/anatomy/anatomy-simplified-40.glb'
);

let removed = 0;

for (const mesh of document.getRoot().listMeshes()) {
  for (const primitive of mesh.listPrimitives()) {
    if (primitive.getAttribute('NORMAL')) {
      primitive.setAttribute('NORMAL', null);
      removed++;
    }
  }
}

await io.write(
  'public/models/anatomy/anatomy-40-no-normals.glb',
  document
);

console.log(`Normals removed from ${removed} primitives.`);
