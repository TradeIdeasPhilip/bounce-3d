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
camera.position.set(0, 24, 40);
camera.lookAt(0, 15, 0);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

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

Array<void>(200).fill().forEach(addStar);

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
