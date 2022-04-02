import './style.css'
import * as THREE from "three";

const canvas = document.querySelector("canvas")!;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  canvas.offsetWidth / canvas.offsetHeight,
  0.1,
  1000
);
(window as any).camera = camera;
const renderer = new THREE.WebGLRenderer({
  canvas
});

renderer.setPixelRatio(window.devicePixelRatio);
// Is the next line right?  Seems like circular logic!
// I copied this from code that was resizing the canvas based on the size of the window.
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const boxMax = 14;
const boxMin = -boxMax;
const boxSize = boxMax - boxMin;

//const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelperBottom = new THREE.GridHelper(boxSize, 3);
gridHelperBottom.position.y = boxMin;
scene.add(gridHelperBottom);
(window as any).gridHelper = gridHelperBottom;

const gridHelperTop = new THREE.GridHelper(boxSize, 3);
gridHelperTop.position.y = boxMax;
scene.add(gridHelperTop);

const gridHelperLeft = new THREE.GridHelper(boxSize, 3);
gridHelperLeft.rotation.z = Math.PI/2;
gridHelperLeft.position.x = boxMin;
scene.add(gridHelperLeft);

const gridHelperRight = new THREE.GridHelper(boxSize, 3);
gridHelperRight.rotation.z = Math.PI/2;
gridHelperRight.position.x = boxMax;
scene.add(gridHelperRight);

const gridHelperBack = new THREE.GridHelper(boxSize, 3);
gridHelperBack.rotation.x = Math.PI/2;
gridHelperBack.position.z = boxMin;
//scene.add(gridHelperBack);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array<void>(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

//Array<void>(200).fill().forEach(addStar);

// x=0 is currently in the center of the viewport.
// Positive x moves to the right, negative x moves to the left, just like in algebra class.
// y=0 is on the grid.
// Positive y moves up, negative y moves down, just line kin algebra class.
// z=0 is the center of the grid.
// Positive z moves toward the camera.  Negative z moves toward the horizon.

function makeMarker(x = 0, y = 0, z = 0) {
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xff2020 });
  const marker = new THREE.Mesh(geometry, material);
  marker.position.set(x, y, z);
  scene.add(marker);
  return marker;
}
(window as any).makeMarker = makeMarker;

const ball = makeMarker();
const ballVelocity = { x: THREE.MathUtils.randFloatSpread(3), y: THREE.MathUtils.randFloatSpread(3), z:THREE.MathUtils.randFloatSpread(3)};

// Animation Loop

function animate(time: DOMHighResTimeStamp) {
  requestAnimationFrame(animate);

  //controls.update();

  //for (const toUpdate of wantsAnimationUpdate) {
  //  toUpdate.update(time);
  //}

  // TODO if I leave it running I eventually get this error:
  // https://stackoverflow.com/questions/25219352/webgl-scene-doest-render-because-of-lost-context
  // TODO catch the error and try again.  Or something.  Fix it!
  // Currently everything flashes white, and the the loop stops running.
  // The auto refresh that happens when I save my code does not fix this bug.
  // But hitting the refresh button does.
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);
