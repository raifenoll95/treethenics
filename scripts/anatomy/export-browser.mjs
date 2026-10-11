import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { ANATOMY_MUSCLE_MAP } from '__anatomy_map__';

window.exportAnatomy = async () => {
  const width = 480, height = 960;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(1);
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.autoClear = false;
  document.body.append(renderer.domElement);
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, .65));
  for (const [color, intensity, position] of [[0xffeee4,1.7,[3,5,6]],[0xffffff,.75,[-4,2,3]],[0xc8d8ff,.9,[-3,3,-5]]]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...position); scene.add(light);
  }
  const draco = new DRACOLoader().setDecoderPath('/draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco).setMeshoptDecoder(MeshoptDecoder);
  const { scene: anatomy } = await loader.loadAsync('/model.glb');
  anatomy.rotation.x = -Math.PI / 2;
  const pivot = new THREE.Group(); pivot.add(anatomy); scene.add(pivot);
  let box = new THREE.Box3().setFromObject(pivot);
  const scale = 3.5 / box.getSize(new THREE.Vector3()).y;
  anatomy.scale.setScalar(scale);
  box = new THREE.Box3().setFromObject(pivot);
  anatomy.position.sub(box.getCenter(new THREE.Vector3()));
  scene.updateMatrixWorld(true);
  const size = new THREE.Box3().setFromObject(pivot).getSize(new THREE.Vector3());
  const camera = new THREE.PerspectiveCamera(35, width / height, .01, 100);
  const tan = Math.tan(THREE.MathUtils.degToRad(35 / 2));
  const distance = Math.max(size.y / (2*tan), size.x / (2*tan*width/height))*1.12 + size.z/2;
  camera.position.set(0, 0, distance); camera.lookAt(0,0,0);
  const material = color => new THREE.MeshStandardMaterial({ color, roughness:.94, metalness:0, side:THREE.DoubleSide });
  const normal = material(0xc59a85), primary = material(0xe63e52), secondary = material(0xb85b65);
  // Use the same shader geometry for depth and colour to avoid depth precision differences.
  const depth = normal.clone(); depth.colorWrite = false;
  const meshes = [], groups = new Map(), matched = new Set();
  anatomy.traverse(mesh => {
    if (!mesh.isMesh) return;
    if (mesh.geometry.index) mesh.geometry = mesh.geometry.toNonIndexed();
    meshes.push(mesh); mesh.material = normal;
    const muscles = Object.entries(ANATOMY_MUSCLE_MAP)
      .filter(([,names]) => names.some(n => mesh.name.toLowerCase().includes(n.toLowerCase())))
      .map(([key]) => key).sort();
    muscles.forEach(m => matched.add(m));
    if (!muscles.length) return;
    const key = muscles.join('|');
    if (!groups.has(key)) groups.set(key, { id: 'r'+String(groups.size).padStart(2,'0'), muscles, meshes:[] });
    groups.get(key).meshes.push(mesh);
  });
  const report = { meshCount: meshes.length, unmatchedMuscles: Object.keys(ANATOMY_MUSCLE_MAP).filter(m=>!matched.has(m)),
    meshNames: meshes.map(m=>m.name), width, height, layers: {front:[],back:[]} };
  if (!meshes.length) throw new Error('No meshes found');
  const snapshot = async name => {
    const png = renderer.domElement.toDataURL('image/png').split(',')[1];
    return window.saveAnatomyImage(name, png);
  };
  for (const [view, angle] of [['front',0],['back',Math.PI]]) {
    pivot.rotation.y = angle + (Number(window.frontAngle) || 0);
    for (const mesh of meshes) mesh.material = normal;
    renderer.state.buffers.color.setMask(true); renderer.state.buffers.depth.setMask(true); renderer.clear(); renderer.render(scene,camera);
    await snapshot(`${view}-base`);
    for (const group of groups.values()) {
      // Full-body depth prepass keeps hidden muscles hidden. Never export isolated meshes alone.
      for (const [role, mat] of [['primary',primary],['secondary',secondary]]) {
        for (const mesh of meshes) mesh.material = depth;
        renderer.state.buffers.color.setMask(true); renderer.state.buffers.depth.setMask(true); renderer.clear(); renderer.render(scene,camera);
        for (const mesh of group.meshes) mesh.material = mat;
        renderer.render(scene,camera);
        const exists = await snapshot(`${view}-${group.id}-${role}`);
        if (role === 'primary' && exists) report.layers[view].push({ id:group.id, muscles:group.muscles });
      }
    }
  }
  renderer.dispose(); draco.dispose();
  return report;
};
