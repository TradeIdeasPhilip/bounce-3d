import "./style.css";
import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import rough from "roughjs";
import { Options } from "roughjs/bin/core";

import optimerBold from "three/examples/fonts/optimer_bold.typeface.json?url";
import optimerRegular from "three/examples/fonts/optimer_regular.typeface.json?url";
import droidSansMonoRegular from "three/examples/fonts/droid/droid_sans_mono_regular.typeface.json?url";
import droidSansBold from "three/examples/fonts/droid/droid_sans_bold.typeface.json?url";
import droidSansRegular from "three/examples/fonts/droid/droid_sans_regular.typeface.json?url";
import droidSerifBold from "three/examples/fonts/droid/droid_serif_bold.typeface.json?url";
import droidSerifRegular from "three/examples/fonts/droid/droid_serif_regular.typeface.json?url";
import gentilisBold from "three/examples/fonts/gentilis_bold.typeface.json?url";
import gentilisRegular from "three/examples/fonts/gentilis_regular.typeface.json?url";
import helvetikerBold from "three/examples/fonts/helvetiker_bold.typeface.json?url";
import helvetikerRegular from "three/examples/fonts/helvetiker_regular.typeface.json?url";

import { getById } from "./lib/client-misc";
import { FIGURE_SPACE, pick } from "./lib/misc";

// Source:  https://methodshop.com/batman-fight-words/
import batmanFightWords from "./batman-fight-words.json";

// TODO TODO TODO
// * Make arrows work on android.  SVG?
//   http://thenewcode.com/1068/Making-Arrows-in-SVG
//   https://www.svgviewer.dev/s/11868/arrow-right-1

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
  //scene.add(gridHelperBack);
}
//addGrids();

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

const materials = [
  new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
  new THREE.MeshPhongMaterial({ color: 0x000000 }), // side
];

const materialsBack = [
  new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
  new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
];

scene.fog = new THREE.Fog(0x000000, 250, 1400);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
dirLight.position.set(0, 0, 1).normalize();
scene.add(dirLight);

// Of all the lights, this one seems to help the most!  :)
const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(0, 100, 90);
scene.add(pointLight1);

function drawText() {
  const group = new THREE.Group();
  group.position.y = 100;
  scene.add(group);

  const loader = new FontLoader();
  loader.load(optimerRegular, function (font) {
    /**
     * We're putting two surfaces at the same place.
     * It's somewhat random which gets picked, and it changes constantly with the zoom.
     * So we move the text just a little bit inside the box, so make sure it is visible.
     */
    const padding = 0.2;

    function makeWords(backWall: boolean, text?: string) {
      if (!text) {
        text =
          pick(batmanFightWords) +
          "!".repeat(Math.floor(Math.random() * 3) + 1);
      }

      /**
       * This is the extra dimension we are adding by extruding the text.
       */
      const height = backWall ? 20 : padding;

      const textGeo = new TextGeometry(text, {
        font: font,

        size: 3,
        height,
        curveSegments: 4,

        bevelThickness: 0.25,
        bevelSize: 0.25,
        bevelEnabled: false,
      });

      textGeo.computeBoundingBox();

      const centerOffset =
        -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);

      const textMesh = new THREE.Mesh(
        textGeo,
        backWall ? materialsBack : materials
      );

      return { centerOffset, textMesh, height };
    }
    // position and rotation are both relative to
    // * The left side of the text.
    // * The baseline of the text, which may or my not be the lowest part.  qjy
    // * And the back of the text.  The part that's furthest from the camera, if you can read the text.

    const debug = {} as any;
    (window as any).textMeshes = debug;

    {
      const { textMesh, centerOffset, height } = makeWords(true);
      textMesh.position.x = centerOffset;
      textMesh.position.y = boxMin;
      textMesh.position.z = boxMin - height + padding;
      scene.add(textMesh);
      debug.back = textMesh;
    }

    {
      const { textMesh, centerOffset, height } = makeWords(false);
      textMesh.position.z = -centerOffset;
      textMesh.position.y = boxMin;
      textMesh.position.x = boxMin - height + padding;
      textMesh.rotation.y = Math.PI / 2;
      scene.add(textMesh);
      debug.left = textMesh;
    }

    {
      const { textMesh, centerOffset, height } = makeWords(false);
      textMesh.position.z = centerOffset;
      textMesh.position.y = boxMin;
      textMesh.position.x = -(boxMin - height + padding);
      textMesh.rotation.y = -Math.PI / 2;
      scene.add(textMesh);
      debug.right = textMesh;
    }

    {
      const { textMesh, centerOffset, height } = makeWords(false);
      textMesh.position.x = centerOffset;
      textMesh.position.z = boxMin;
      textMesh.position.y = -(boxMin - height + padding);
      textMesh.rotation.x = Math.PI / 2;
      scene.add(textMesh);
      debug.top = textMesh;
    }

    {
      const { textMesh, centerOffset, height } = makeWords(false);
      textMesh.position.x = centerOffset;
      textMesh.position.z = boxMax;
      textMesh.position.y = boxMin - height + padding;
      textMesh.rotation.x = -Math.PI / 2;
      scene.add(textMesh);
      debug.bottom = textMesh;
    }
  });
}
//drawText();

const fonts: Font[] = [];
[
  optimerBold,
  optimerRegular,
  //droidSansMonoRegular,
  droidSansBold,
  droidSansRegular,
  droidSerifBold,
  droidSerifRegular,
  gentilisBold,
  gentilisRegular,
  helvetikerBold,
  helvetikerRegular,
].forEach((fontUrl) => {
  new FontLoader().load(fontUrl, function (font) {
    fonts.push(font);
  });
});

const drawnOnWall = new Map<string, () => void>();

function drawOnWall(bounceDimension: "x" | "y" | "z", side: "min" | "max") {
  if (fonts.length == 0) {
    return;
  }

  if (bounceDimension == "z" && side == "max") {
    return;
  }

  const key = bounceDimension + side;

  {
    const cleanPrevious = drawnOnWall.get(key);
    if (cleanPrevious) {
      cleanPrevious();
    }
  }

  /**
   * How much of the words extends inside the box.
   * This refers to the extruded dimension.
   */
  const padding = 0.2;

  /**
   * This is the extra dimension we are adding by extruding the text.
   */
  const height = bounceDimension == "z" ? 20 : padding;

  const text =
    pick(batmanFightWords) + "!".repeat(Math.floor(Math.random() * 3) + 1);

  const textGeo = new TextGeometry(text, {
    font: pick(fonts),
    size: 3,
    height,
    curveSegments: 4,
    bevelEnabled: false,
  });
  textGeo.computeBoundingBox();

  const centerOffset =
    -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);

  const textMesh = new THREE.Mesh(
    textGeo,
    bounceDimension == "z" ? materialsBack : materials
  );

  if (bounceDimension == "z") {
    textMesh.position.x = centerOffset + ball.position.x;
    textMesh.position.y = ball.position.y;
    textMesh.position.z = boxMin - height + padding;
  } else if (bounceDimension == "x") {
    const invert = side == "min" ? 1 : -1;
    textMesh.position.z = ball.position.z - invert * centerOffset;
    textMesh.position.y = ball.position.y;
    textMesh.position.x = invert * (boxMin - height + padding);
    textMesh.rotation.y = invert * (Math.PI / 2);
  } else {
    const invert = side == "min" ? -1 : 1;
    textMesh.position.x = ball.position.x + centerOffset;
    textMesh.position.z = ball.position.z;
    textMesh.position.y = -invert * (boxMin - height + padding);
    textMesh.rotation.x = invert * (Math.PI / 2);
  }
  scene.add(textMesh);

  drawnOnWall.set(key, () => {
    scene.remove(textMesh);
    textGeo.dispose();
  });
}

type WallInfo = {
  readonly fillColor: string;
  readonly strokeColor: string;
  flatten(input: THREE.Vector3): THREE.Vector2;
  init(group: THREE.Group): void;
};

class Wall {
  #group = new THREE.Group();
  #canvas = document.createElement("canvas");
  constructor(private readonly info: WallInfo) {
    info.init(this.#group);
    scene.add(this.#group);
    this.#canvas.width = 600;
    this.#canvas.height = 600;
    this.makeWall();
  }

  protected makeWall() {
    const context = this.#canvas.getContext("2d")!;
    context.fillStyle = this.info.fillColor;
    const margin = 30;
    const width = this.#canvas.width;
    const height = this.#canvas.height;
    const roughCanvas = rough.canvas(this.#canvas);
    context.fillRect(0, 0, width, height);

    const options: Options = {
      stroke: this.info.strokeColor,
      strokeWidth: 10,
      roughness: 3,
      bowing: 3,
    };
    roughCanvas.line(margin, height / 3, width - margin, height / 3, options);
    roughCanvas.line(
      margin,
      (height * 2) / 3,
      width - margin,
      (height * 2) / 3,
      options
    );
    roughCanvas.line(width / 3, margin, width / 3, height - margin, options);
    roughCanvas.line(
      (width * 2) / 3,
      margin,
      (width * 2) / 3,
      height - margin,
      options
    );

    const imageData = context.getImageData(0, 0, this.#canvas.width, this.#canvas.height);
    const texture = new THREE.CanvasTexture(this.#canvas);
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(boxSize, boxSize),
      new THREE.MeshBasicMaterial({
        map: texture,
        opacity: 0.5,
        transparent: true,
      })
    );
    // Is clear() enough?  Seems like we need to clean up some of the objects.  TODO
    // Instructions for disposing of three.js objects:
    // https://threejs.org/docs/index.html#manual/en/introduction/How-to-dispose-of-objects`
    this.#group.clear();
    this.#group.add(plane);

    // TODO Call       texture.needsUpdate = true;
    // any time you need to copy the contents of the canvas into the texture.
  }

  static readonly rear = new Wall({
    fillColor: "#ff0000",
    strokeColor: "#ff8080",
    flatten(input) {
      return new THREE.Vector2(input.x, input.y);
    },
    init(group) {
      group.position.z = boxMin;
    },
  });

  static readonly left = new Wall({
    fillColor: "#00ff00",
    strokeColor: "#c0ffc0",
    flatten(input) {
      return new THREE.Vector2(-input.z, input.y);
    },
    init(group) {
      group.position.x = boxMin;
      group.rotation.y = Math.PI / 2;
    },
  });

  static readonly right = new Wall({
    fillColor: "#0000ff",
    strokeColor: "#c0c0ff",
    flatten(input) {
      return new THREE.Vector2(input.z, input.y);
    },
    init(group) {
      group.position.x = boxMax;
      group.rotation.y = -Math.PI / 2;
    },
  });

  static readonly top = new Wall({
    fillColor: "#ffff00",
    strokeColor: "#ffffc0",
    flatten(input) {
      return new THREE.Vector2(input.x, -input.z);
    },
    init(group) {
      group.position.y = boxMax;
      group.rotation.x = Math.PI / 2;
    },
  });

  static readonly bottom = new Wall({
    fillColor: "#00ffff",
    strokeColor: "#c0ffff",
    flatten(input) {
      return new THREE.Vector2(input.x, input.z);
    },
    init(group) {
      group.position.y = boxMin;
      group.rotation.x = -Math.PI / 2;
    },
  });
}

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
        drawOnWall(dimension, "min");
      } else if (newValue > ballMax) {
        newValue = ballMax;
        ballVelocity[dimension] = -Math.abs(ballVelocity[dimension]);
        const wall = flashyWalls[dimension].max;
        scene.add(wall);
        wallTimeout.set(wall, time + 100);
        drawOnWall(dimension, "max");
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
