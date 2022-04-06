import "./style.css";
import * as THREE from "three";

import { getById } from "../lib/client-misc";
import { FIGURE_SPACE } from "../lib/misc";

const canvas = getById("canvas", HTMLCanvasElement);
const canvasHolder = getById("canvasHolder", HTMLDivElement);

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

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const boxMax = 14;
const boxMin = -boxMax;
const boxSize = boxMax - boxMin;

//const lightHelper = new THREE.PointLightHelper(pointLight);

function addGrids() {
  const gridHelperBottom = new THREE.GridHelper(boxSize, 3);
  gridHelperBottom.position.y = boxMin;
  scene.add(gridHelperBottom);

  const interiorColor = 0x333333;

  const gridHelperBottom1 = new THREE.GridHelper(
    boxSize,
    3,
    interiorColor,
    interiorColor
  );
  gridHelperBottom1.position.y = boxMin / 3;
  scene.add(gridHelperBottom1);

  const gridHelperTop = new THREE.GridHelper(boxSize, 3);
  gridHelperTop.position.y = boxMax;
  scene.add(gridHelperTop);

  const gridHelperTop1 = new THREE.GridHelper(
    boxSize,
    3,
    interiorColor,
    interiorColor
  );
  gridHelperTop1.position.y = boxMax / 3;
  scene.add(gridHelperTop1);

  const gridHelperLeft = new THREE.GridHelper(boxSize, 3);
  gridHelperLeft.rotation.z = Math.PI / 2;
  gridHelperLeft.position.x = boxMin;
  scene.add(gridHelperLeft);

  const gridHelperLeft1 = new THREE.GridHelper(
    boxSize,
    3,
    interiorColor,
    interiorColor
  );
  gridHelperLeft1.rotation.z = Math.PI / 2;
  gridHelperLeft1.position.x = boxMin / 3;
  scene.add(gridHelperLeft1);

  const gridHelperRight = new THREE.GridHelper(boxSize, 3);
  gridHelperRight.rotation.z = Math.PI / 2;
  gridHelperRight.position.x = boxMax;
  scene.add(gridHelperRight);

  const gridHelperRight1 = new THREE.GridHelper(
    boxSize,
    3,
    interiorColor,
    interiorColor
  );
  gridHelperRight1.rotation.z = Math.PI / 2;
  gridHelperRight1.position.x = boxMax / 3;
  scene.add(gridHelperRight1);

  const gridHelperBack = new THREE.GridHelper(boxSize, 3);
  gridHelperBack.rotation.x = Math.PI / 2;
  gridHelperBack.position.z = boxMin;
  //scene.add(gridHelperBack);
}
addGrids();

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
  x: THREE.MathUtils.randFloatSpread(12),
  y: THREE.MathUtils.randFloatSpread(12),
  z: THREE.MathUtils.randFloatSpread(12),
};
let lastBallUpdate: number | undefined;

// The _center_ of the ball can _not_ go all the way to the wall.
// Always reserve one ball radius.
const ballMin = boxMin + 0.5;
const ballMax = boxMax - 0.5;

const wallTimeout = new Map<THREE.GridHelper, number>();

function updateBall(time: DOMHighResTimeStamp) {
  // TODO would be a good pace to add a light.  It would be temporary.  it would be exactly where the ball hit the well
  // it would last as long as the highlight on the wall.  (Maybe show the highlights on the mini-map at the same time TODO)

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
    miniBall.cx.baseVal.value = ball.position.x;
    miniBall.cy.baseVal.value = ball.position.z;
    const miniBallRadius = ball.position.y/boxMax + 2;
    miniBall.rx.baseVal.value = miniBallRadius;
    miniBall.ry.baseVal.value = miniBallRadius;
  }
  lastBallUpdate = time;
}

/**
 * Set the camera's Field of View as requested.
 * Then move the camera to a reasonable distance based on the new FOV.
 *
 * This is implementing a dolly zoom.
 * The front of the box should always stay the same.
 * fov is a way of specifying the zoom.
 * And a dolly is a device for moving a physical camera.
 * @param fov Field of view.
 * If this is blank, use the camera's current FOV.
 * Otherwise, set the camera's FOV to this value before doing any calculations.
 */
function setCameraPosition(fov?: number) {
  if (fov === undefined) {
    fov = camera.fov;
  } else {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
  // Currently the top and bottom of the front of the box are always at the top and bottom of the canvas.
  // Depending on the aspect ratio you might see black bars on the left and right.
  // Or the far left and right of the box might be cut off.
  //
  // I'd swear that this used to work in a different way.
  // If the aspect ratio was wide, then you got black bars on the sides, like you do now.
  // But if the aspect ratio was narrow, the you got black bars on the top and bottom.
  // Nothing was ever cut off.
  // It changed when I added the resizeObserver(), but I can't see why.
  //
  // TODO the minimap is wrong.
  // Need to fix this routine to work like it used to.
  // Or, failing that, fix the minimap!
  // But first I really want to understand what changed!
  const fovInRadians = (fov / 360) * 2 * Math.PI;
  const angleToEdge = fovInRadians / 2;
  const cameraToNearFace = boxMax / Math.tan(angleToEdge);
  camera.position.set(0, 0, boxMax + cameraToNearFace);
}
//(window as any).setCameraPosition = setCameraPosition;
setCameraPosition();
camera.lookAt(0, 0, 0);

const fovPath = getById("fovPath", SVGPathElement);
const cubeRect = getById("cubeRect", SVGRectElement);
const miniBall = getById("miniBall", SVGEllipseElement);
(window as any).miniBall = miniBall;
/**
 *
 * @param fov Field of view in degrees.
 */
function showFovInSvg(fov: number) {
  const cameraX = 50;
  const cameraY = 95;
  const fovInRadians = (fov / 360) * 2 * Math.PI;
  const angleToEdge = fovInRadians / 2;

  const cubeSize = 35;
  const cubeX = (100 - cubeSize) / 2;
  cubeRect.setAttribute("x", cubeX.toString());
  const fromCubeToCamera = cubeSize / Math.tan(angleToEdge) / 2;
  const cubeY = cameraY - fromCubeToCamera - cubeSize;
  cubeRect.setAttribute("y", cubeY.toString());

  const fovRadius =
    Math.hypot(cameraX - cubeX, cameraY - cubeY) + cubeSize / 10;
  const y = cameraY - Math.cos(angleToEdge) * fovRadius;
  const xOffset = Math.sin(angleToEdge) * fovRadius;
  const fromX = cameraX - xOffset;
  const toX = cameraX + xOffset;
  // Draw a triangle.  This was useful to get started.
  //fovPath.setAttribute("d", `M 50 50 L ${fromX} ${y} L ${toX} ${y} L 50 50`)
  const largeArcFlag = +(fov > 180);
  const sweepFlag = 1;
  fovPath.setAttribute(
    "d",
    `M ${cameraX} ${cameraY} L ${fromX} ${y} A ${fovRadius} ${fovRadius} ${fov} ${largeArcFlag} ${sweepFlag} ${toX} ${y} L ${cameraX} ${cameraY}`
  );

  miniBall.setAttribute(
    "transform",
    `translate(${cubeX}, ${cubeY}) scale(${
      cubeSize / (boxMax - boxMin)
    }) translate(${-boxMin}, ${-boxMin})`
  );
}

const dollyZoomInput = getById("dollyZoomInput", HTMLInputElement);
const dollyZoomSpan = getById("dollyZoomSpan", HTMLSpanElement);
function updateDollyZoom() {
  setCameraPosition(parseInt(dollyZoomInput.value));
  dollyZoomSpan.innerText = dollyZoomInput.value.padStart(3, FIGURE_SPACE) + "°";
  showFovInSvg(+dollyZoomInput.value);
}
dollyZoomInput.addEventListener("input", updateDollyZoom);
updateDollyZoom();

// Animation Loop

function animate(time: DOMHighResTimeStamp) {
  requestAnimationFrame(animate);

  resizeAction?.();

  updateBall(time);

  //controls.update();

  //for (const toUpdate of wantsAnimationUpdate) {
  //  toUpdate.update(time);
  //}

  // The program I copied this from would often get the following error at the following line.
  // https://stackoverflow.com/questions/25219352/webgl-scene-doest-render-because-of-lost-context
  // It would only happen if I left it running for a long time. 
  // I haven't see it here.
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

/**
 * This might update the screen after a resize.
 * This function includes a delay so multiple requests in a row can be consolidated.
 */
let resizeAction : (()=>void) | undefined;

const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    if (entry.contentBoxSize.length != 1) {
      console.log("Ignoring unexpected resize info", entry);
    } else {
      const size = entry.contentBoxSize[0];
      const height = size.blockSize;
      const width = size.inlineSize;
      let count = 3;
      resizeAction = () => {
        if (count < 1) {
          resizeAction = undefined;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          // The following line sets the canvas's internal and external
          // sizes.  The input is in css pixels.  setSize() will
          // automatically convert that to device pixels where appropriate.
          renderer.setSize(width, height);  
        } else {
          count--;
        }  
      };
    }
  }
});
// renderer.setSize() resizes the inside and the outside of the canvas.
// They should go together to make sure that one pixel in the canvas's bitmap corresponds to exactly one pixel on the screen.
// I might only need one of these for my current layout.
// But to be safe I should probably listen to both.
// There is already code to merge the messages if we get a bunch quickly.
// So some of the overhead will double because of this second listener, but the main part of the work will remain the same.
observer.observe(canvasHolder,{ box: "content-box"});
observer.observe(canvasHolder,{ box: "device-pixel-content-box"});