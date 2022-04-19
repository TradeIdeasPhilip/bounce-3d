import "./style.css";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import optimerBold from "three/examples/fonts/optimer_bold.typeface.json?url";
import optimerRegular from "three/examples/fonts/optimer_regular.typeface.json?url";

import { getById } from "../lib/client-misc";
import { FIGURE_SPACE, pick } from "../lib/misc";

// Source:  https://methodshop.com/batman-fight-words/
import batmanFightWords from "./batman-fight-words.json";

// TODO TODO TODO
// * Make arrows work on android.  SVG?
//   http://thenewcode.com/1068/Making-Arrows-in-SVG
//   https://www.svgviewer.dev/s/11868/arrow-right-1
// * Find the text!!!  It was printed, just somewhere odd.  looked high and huge, but it was distorted so who knows for sure
//   Set FOV to 100 or more and you'll see the text.

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
  scene.add(gridHelperBack);
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

function drawLines() {
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}
//drawLines();

// TODO I can't get the text to draw.
// I don't know why not.
// I'm loading the font and I'm getting a non-zero size for the object.
// I've tried moving it but that didn't help.
//
// Note:  When running in development mode (http://localhost:4000/) the font loads correctly.
// When running in production mode (https://tradeideasphilip.github.io/bounce-3d/) the font does not.
// If you reference an asset directly from the HTML file or from a CSS import,
// Vite will figure that out and copy that file into the production bundle.
// TODO fix this.
//
// Note, in development mode I saw a hint of the text.
// When I set the field of view to around 163 the text appears.
// It is hard to read, but I'm pretty sure I found my text.
// It seems to be above the box.
// Fortunately the box is 50% transparent!
function drawText() {
  scene.fog = new THREE.Fog(0x000000, 250, 1400);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(0, 100, 90);
  scene.add(pointLight);

  const materials = [
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
  ];

  const group = new THREE.Group();
  group.position.y = 100;
  scene.add(group);

  const loader = new FontLoader();
  loader.load(
    optimerRegular,
    function (response) {
      const font = response;

      const textGeo = new TextGeometry(pick(batmanFightWords) + "!!", {
        font: font,

        size: 70,
        height: 20,
        curveSegments: 4,

        bevelThickness: 2,
        bevelSize: 1.5,
        bevelEnabled: true,
      });

      textGeo.computeBoundingBox();

      const centerOffset =
        -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);

      const textMesh1 = new THREE.Mesh(textGeo, materials);

      textMesh1.position.x = centerOffset;
      textMesh1.position.y = 30;
      textMesh1.position.z = 0;

      textMesh1.rotation.x = 0;
      textMesh1.rotation.y = Math.PI * 2;

      /*group*/ scene.add(textMesh1);
    }
  );
}
drawText();

function drawPlanes() {
  const rearPlane = new THREE.Mesh(
    new THREE.PlaneGeometry( boxSize, boxSize ),
    new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } )
  );
  rearPlane.position.z = boxMin;
  scene.add( rearPlane );
  const leftPlane = new THREE.Mesh(
    new THREE.PlaneGeometry( boxSize, boxSize ),
    new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.5, transparent: true } )
  );
  leftPlane.position.x = boxMin;
  leftPlane.rotation.y = Math.PI/2;
  scene.add(leftPlane);
  const rightPlane = new THREE.Mesh(
    new THREE.PlaneGeometry( boxSize, boxSize ),
    new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.5, transparent: true } )
  );
  rightPlane.position.x = boxMax;
  rightPlane.rotation.y = -Math.PI/2;
  scene.add(rightPlane);
  const topPlane = new THREE.Mesh(
    new THREE.PlaneGeometry( boxSize, boxSize ),
    new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.5, transparent: true } )
  );
  topPlane.position.y = boxMax;
  topPlane.rotation.x = Math.PI/2;
  scene.add(topPlane);
  const bottomPlane = new THREE.Mesh(
    new THREE.PlaneGeometry( boxSize, boxSize ),
    new THREE.MeshBasicMaterial( { color: 0x00ffff, opacity: 0.5, transparent: true } )
  );
  bottomPlane.position.y = boxMin;
  bottomPlane.rotation.x = -Math.PI/2;
  scene.add(bottomPlane);
}
drawPlanes();

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
  x: THREE.MathUtils.randFloatSpread(50),
  y: THREE.MathUtils.randFloatSpread(50),
  z: THREE.MathUtils.randFloatSpread(50),
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
    const miniBallRadius = ball.position.y / boxMax + 2;
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
 */
function setCameraPosition(fov = 50) {
  camera.fov = fov;
  camera.updateProjectionMatrix();
  //
  // For now we just rely on the aspect ration being 1.  Set by the outside.
  // I found some good info on FOV vs aspect ratio!
  // https://stackoverflow.com/questions/17837652/calculating-frame-and-aspect-ratio-guides-to-match-cameras/17840405#17840405
  // According to this, PerspectiveCamera.fov refers to the FOV in the vertical direction.
  // It includes math for computing the FOV in the horizontal direction.
  const fovInRadians = (fov / 360) * 2 * Math.PI;
  const angleToEdge = fovInRadians / 2;
  const cameraToNearFace = boxMax / Math.tan(angleToEdge);
  camera.position.set(0, 0, boxMax + cameraToNearFace);
}
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
  dollyZoomSpan.innerText =
    dollyZoomInput.value.padStart(3, FIGURE_SPACE) + "°";
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
let resizeAction: (() => void) | undefined;

const observer = new ResizeObserver((entries) => {
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
          camera.aspect = 1;
          camera.updateProjectionMatrix();
          const size = Math.min(width, height);
          renderer.setSize(size, size);
          setCameraPosition();
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
observer.observe(canvasHolder, { box: "content-box" });
observer.observe(canvasHolder, { box: "device-pixel-content-box" });
