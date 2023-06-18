import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { makeGUI } from "./debugging";
import { makeHouse } from "./house";
import { makeGraves } from "./graves";
import { loadTextures } from "./textures";

/**
 * Base
 */
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();
const fog = new THREE.Fog(0x262837, 1, 15);
scene.fog = fog;

/**
 * Textures
 */

const textures = loadTextures();

/**
 * House
 */
const house = makeHouse(textures);

scene.add(house);
// Graves
const graves = makeGraves();

scene.add(graves);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: "#a9c388" })
);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;

//

scene.add(floor);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);

scene.add(ambientLight);

// Directional light
const moonLight = new THREE.DirectionalLight("#b9d5ff", 0.12);
moonLight.position.set(4, 5, -2);

scene.add(moonLight);

const doorLight = new THREE.PointLight(0xff7d46, 1, 7);
doorLight.position.set(0, 2.2, 2.7);
house.add(doorLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Debugging
makeGUI({ ambientLight, moonLight });

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.outputColorSpace;
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x262837);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
