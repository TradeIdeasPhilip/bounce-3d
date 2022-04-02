import "./style.css";
import * as THREE from "three";

import { getById } from "../lib/client-misc";

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
  canvas,
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

const gridHelperTop = new THREE.GridHelper(boxSize, 3);
gridHelperTop.position.y = boxMax;
scene.add(gridHelperTop);

const gridHelperLeft = new THREE.GridHelper(boxSize, 3);
gridHelperLeft.rotation.z = Math.PI / 2;
gridHelperLeft.position.x = boxMin;
scene.add(gridHelperLeft);

const gridHelperRight = new THREE.GridHelper(boxSize, 3);
gridHelperRight.rotation.z = Math.PI / 2;
gridHelperRight.position.x = boxMax;
scene.add(gridHelperRight);

const gridHelperBack = new THREE.GridHelper(boxSize, 3);
gridHelperBack.rotation.x = Math.PI / 2;
gridHelperBack.position.z = boxMin;
//scene.add(gridHelperBack);

const dimensions = ["x", "y", "z"] as const;

const flashyWalls = {
  x: {
    min: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
    max: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
  },
  y: {
    min: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
    max: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
  },
  z: {
    min: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
    max: new THREE.GridHelper(boxSize, 19, 0xff88cc, 0xff88cc),
  },
};
flashyWalls.x.min.rotation.z = Math.PI / 2;
flashyWalls.x.max.rotation.z = Math.PI / 2;
flashyWalls.z.min.rotation.x = Math.PI / 2;
flashyWalls.z.max.rotation.x = Math.PI / 2;
dimensions.forEach((dimension) => {
  flashyWalls[dimension].min.position[dimension] = boxMin;
  flashyWalls[dimension].max.position[dimension] = boxMax;
});

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
const ballVelocity = {
  x: THREE.MathUtils.randFloatSpread(7),
  y: THREE.MathUtils.randFloatSpread(7),
  z: THREE.MathUtils.randFloatSpread(7),
};
let lastBallUpdate: number | undefined;

// The _center_ of the ball can _not_ go all the way to the wall.
// Always reserve one ball radius.
const ballMin = boxMin + 0.5;
const ballMax = boxMax - 0.5;

const wallTimeout = new Map<THREE.GridHelper, number>();

function updateBall(time: DOMHighResTimeStamp) {
  wallTimeout.forEach((timeout, wall) => {
    if (time > timeout) {
      scene.remove(wall);
      wallTimeout.delete(wall);
    }
  });
  //allFlashyWalls.forEach(wall => scene.remove(wall));
  if (lastBallUpdate !== undefined) {
    const secondsPassed = (time - lastBallUpdate) / 1000;
    if (secondsPassed <= 0) {
      // Do NOT update lastBallUpdate.  Do not do anything.
      // The logic for bouncing might not work well in reverse.
      return;
    }
    for (const dimension of dimensions) {
      let newValue = ball.position[dimension];
      newValue =
        ball.position[dimension] + ballVelocity[dimension] * secondsPassed;
      if (newValue < ballMin) {
        newValue = ballMin;
        ballVelocity[dimension] = Math.abs(ballVelocity[dimension]);
        const wall = flashyWalls[dimension].min;
        scene.add(wall);
        wallTimeout.set(wall, time + 100);
      } else if (newValue > ballMax) {
        newValue = ballMax;
        ballVelocity[dimension] = -Math.abs(ballVelocity[dimension]);
        const wall = flashyWalls[dimension].max;
        scene.add(wall);
        wallTimeout.set(wall, time + 100);
      }
      ball.position[dimension] = newValue;
    }
  }
  lastBallUpdate = time;
}

// Animation Loop

function animate(time: DOMHighResTimeStamp) {
  requestAnimationFrame(animate);

  updateBall(time);

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

(
  [
    ["Left", "x", -1],
    ["Right", "x", 1],
    ["Down", "y", -1],
    ["Up", "y", 1],
    ["Away", "z", -1],
    ["Toward", "z", 1],
  ] as const
).forEach(([name, dimension, delta]) => {
  getById("nudge" + name, HTMLButtonElement).addEventListener("click", () => {
    ballVelocity[dimension] += delta;
  });
});
