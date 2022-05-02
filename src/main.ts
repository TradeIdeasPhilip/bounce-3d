import "./style.css";
import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"
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
import { FIGURE_SPACE, makeLinear, pick, polarToRectangular } from "./lib/misc";

// Source:  https://methodshop.com/batman-fight-words/
import batmanFightWords from "./batman-fight-words.json";
import { Point } from "roughjs/bin/geometry";

// Coordinates in the 3d world:
// x=0 is the center of the viewing area / box.
// Positive x moves to the right, negative x moves to the left, just like in algebra class.
// y=0 is the center of the viewing area / box.
// Positive y moves up, negative y moves down, just like in algebra class.
// (But the opposite of the canvas!)
// z=0 is the center of the viewing area / box.
// Positive z moves toward the camera.  Negative z moves toward the horizon.

class BumpEffect {
  static readonly #size = 300;
  #canvas = document.createElement("canvas");
  #context = this.#canvas.getContext("2d")!
  #texture = new THREE.CanvasTexture(this.#canvas);
  constructor(private readonly material: THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial) {
    if (!this.#context) {
      throw new Error("wtf");
    }
    this.#canvas.height = BumpEffect.#size;
    this.#canvas.width = BumpEffect.#size;
  }
  private fillCanvas(x: number, y: number, radius: number) {
    const context = this.#context;
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    // The radial gradient will reflect the part that we're iterating over.
    // So we get one complete period of a cosine.  At the edge the value is the lowest.
    // And the derivative is 0, to match the part of the plane that doesn't get distorted.
    // At the center the value is at its highest.  And the derivative is 0, to match the
    // mirror image.  The derivate is highest half way between the center and the outer edge.
    //
    // The color stops are laid out like the contour lines on a map.  The stops and the lines
    // are close to each other where the altitude changes quickly.  They spread out more as
    // the altitude changes less quickly.
    for (let i = 0; i < 16; i++) {
      // Should I cache these values?
      const color = "#" + i.toString(16).repeat(3);
      const location = Math.acos((i / 15) * 2 - 1) / Math.PI;
      gradient.addColorStop(location, color);
    }
    context.fillStyle = gradient;
    context.fillRect(0, 0, BumpEffect.#size, BumpEffect.#size);
    this.#texture.needsUpdate = true;
  }
  #program: { doAnimationFrame: (time: DOMHighResTimeStamp) => void, end: () => void } | undefined;
  isActive() {
    return this.#program != undefined;
  }
  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#program?.doAnimationFrame(time);
  }
  end() {
    this.#program?.end();
    this.#program = undefined;
  }
  start(startTime: DOMHighResTimeStamp, x: number, y: number, ballVelocity: number) {
    x *= BumpEffect.#size / Wall.canvasSize;
    y *= BumpEffect.#size / Wall.canvasSize;
    //console.log({start: this, startTime, x, y, ballVelocity});
    this.end();
    const endTime = startTime + 1500;
    const maxDisplacement = 3;
    const getAmplitude = makeLinear(startTime, 3, endTime, 0);
    const getPhase = makeLinear(startTime, 0, endTime, - Math.PI * 3);
    // TODO we probably want to limit the radius so the bump doesn't go off the edge.
    // In any case, this radius was just a guess.  Need to try it.
    this.fillCanvas(x, y, BumpEffect.#size / 10);
    this.material.displacementMap = this.#texture;
    this.material.displacementScale = 0;
    this.#program = {
      doAnimationFrame: (time) => {
        const amplitude = getAmplitude(time);
        if (amplitude <= 0) {
          this.end();
        } else {
          this.material.displacementScale = amplitude * Math.sin(getPhase(time));
          this.material.needsUpdate = true;
        }
      },
      end: () => {
        this.material.displacementMap = null;
        this.material.needsUpdate = true;
      },
    };
  }
}

type RowAndColumn = { row: number, column: number };

class TicTacToe {
  #nextMove: "X" | "O" | undefined = (Math.random() >= 0.5) ? "X" : "O";
  canAddMore() { return this.#nextMove !== undefined; }
  disable() { this.#nextMove = undefined; }
  private static toIndex(rowAndColumn: RowAndColumn) {
    return rowAndColumn.row * 3 + rowAndColumn.column;
  }
  #squares: (undefined | "X" | "O")[] = new Array(9);
  canAdd(rowAndColumn: RowAndColumn) {
    return this.canAddMore() && (this.#squares[TicTacToe.toIndex(rowAndColumn)] === undefined);
  }
  add(rowAndColumn: RowAndColumn) {
    if (!this.canAdd(rowAndColumn)) {
      return false;
    } else {
      this.#squares[TicTacToe.toIndex(rowAndColumn)] = this.#nextMove;
      this.#nextMove = (this.#nextMove == "X") ? "O" : "X";
      // Should we disable() this if the board is full?
      // Should we draw a line and disable this if that move wins?
      // Maybe TODO
      return true;
    }
  }
  static findCell(x: number, y: number): RowAndColumn {
    function oneDimension(input: number) {
      return Math.floor((input * 3 / Wall.canvasSize));
    }
    return { row: oneDimension(y), column: oneDimension(x) };
  }
}

/**
 * The main canvas where we display the 3d scene.
 */
const canvas = getById("canvas", HTMLCanvasElement);

/**
 * We put the canvas into a div to help with the layout magic.
 * Whenever the canvasHolder gets resized (e.g. you rotate your phone 90°)
 * we call code to resize the canvas **and** the renderer.
 * The canvas has has `position` set to `absolute` so its size
 * does not automatically change.
 * And when we manually change the canvas's size, that will not cause an other changes in the document.
 */
const canvasHolder = getById("canvasHolder", HTMLDivElement);

const scene = new THREE.Scene();

/**
 * A standard camera.
 *
 * Some of these values are just placeholders.
 * See setCameraPosition() for the actual values.
 */
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
// TODO I had shadows working when I use using PointLight.
// But things stopped when I switched to SpotLight.
// That makes no sense!
// 
// I'm temporarily disabling the shadows.
// They don't work with the existing code.  The and
// PointLight code was *really* slow.
//
// I want to try again.  The slow code looked really good!
// 
// https://threejs.org/docs/#api/en/constants/Renderer (shadow types)
// https://threejs.org/docs/#api/en/lights/SpotLight
// https://threejs.org/docs/#api/en/lights/shadows/SpotLightShadow
// https://r105.threejsfundamentals.org/threejs/lessons/threejs-shadows.html
//renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

//const ambientLight = new THREE.AmbientLight(0xffffff);
//scene.add(pointLight, ambientLight);

/**
 * The largest position we care about in the 3d coordinates.
 * 0 is the center of the box.
 */
const boxMax = 14;

/**
 * The smallest position we care about in the 3d coordinates.
 * 0 is the center of the box.
 */
const boxMin = -boxMax;

/**
 * The size of the box where the ball is bouncing, in 3d coordinates.
 */
const boxSize = boxMax - boxMin;

//const lightHelper = new THREE.PointLightHelper(pointLight);

const dimensions = ["x", "y", "z"] as const;

/**
 * Use this to draw the words on the side walls.
 *
 * White on the front, black on the sides.
 * These words sit just outside the wall and should look black and white.
 */
const materials = [
  new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
  new THREE.MeshPhongMaterial({ color: 0x000000 }), // side
];

/**
 * Use this to draw the words on the rear wall.
 *
 * White everywhere.
 * These words just barely poke out from behind the wall.
 * The extruded part is almost entirely behind the wall, so the color will be a combination of white and the color of the wall.
 * The words themselves will be white.
 */
const materialsBack = [
  new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
  new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
];

// I copied this from an example.
// I think it has a small effect on the ball.
// This should be tweaked with the lights and the shadows.
scene.fog = new THREE.Fog(0x000000, 250, 1400);

//const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
//dirLight.position.set(0, 0, 1).normalize();
//dirLight.castShadow = true;
//scene.add(dirLight);

const rightLight = new THREE.SpotLight(0xffffff, 2 / 3, 0, Math.PI/2);
rightLight.position.set(boxMax / 2, boxMax / 4, boxMax * 1.5);
rightLight.castShadow = true;
rightLight.shadow.radius = 8;  // Add blur.  The default is 1.  That's totally black if this is the only light.
scene.add(rightLight);
const leftLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI/2);
leftLight.position.set(-boxMax / 2, boxMax / 2, boxMax * 1.5);
leftLight.castShadow = true;
leftLight.shadow.radius = 8;  // https://stackoverflow.com/a/53522410/971955
scene.add(leftLight);

(window as any).phil = { rightLight, leftLight, scene, makeMarker };

/**
 * Use these when displaying 3d extruded text.
 *
 * Note that these get loaded from the internet when the program starts.
 * So the list might be partially or completely empty, for a brief moment.
 */
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

/**
 * This is cleanup code for the 3d words.
 *
 * When we go to add new words, the first thing we do is remove any previous words that were already written on that wall.
 *
 * TODO move all of this to the Wall class.
 */
const drawnOnWall = new Map<string, () => void>();

/**
 * Call this when the ball hits a wall so we can update the GUI.
 *
 * This is what draws the 3d Batman fight words.
 * @param bounceDimension Which wall
 * @param side Which wall
 */
function drawOnWall(bounceDimension: "x" | "y" | "z", side: "min" | "max") {
  // TODO move all of this into Wall.highlightPoint().
  // This code always draws the words.
  // Wall.highlightPoint() will include multiple options, and this should be one of them.
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

  // I tried using TextBufferGeometry.
  // I ran into a bug:  https://github.com/vitejs/vite/issues/7964
  // The documentation says that the "Buffer" versions are more efficient.
  // While investigating this bug I found that TextBufferGeometry is just an alias for TextGeometry, so it's not a big deal.  
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

  // TODO use Wall.#group and WallInfo.flatten() to simplify this.
  // The code below is a duplicate of some work we've done elsewhere.
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
    // Cleanup code.
    scene.remove(textMesh);
    textGeo.dispose();
  });
}

/**
 * This is how you customize a wall.
 * This is what makes one wall different from another.
 */
type WallInfo = {
  /**
   * The background color.  Any css color will do.
   */
  readonly fillColor: string;
  /**
   * The foreground color.  Any css color will do.
   */
  readonly strokeColor: string;
  /**
   * Convert from the ball's coordinate system, to a coordinate system appropriate to the wall.
   * Use this function to add 3d effects on a wall (like the batman words that use extruded text) without worrying about the fact that each wall faces a different direction.
   *
   * Use Wall.flatten(), instead, if you want to draw on the canvas.
   * WallInfo.flatten() is used to implement Wall.flatten().
   * @param input A point in the ball's coordinates.
   * @returns A point on the wall.
   * There is no Z dimension because the wall is flat.
   * If you set Z=0, this should match the 3d coordinates of the Wall.#group.
   */
  flatten(input: THREE.Vector3): THREE.Vector2;
  /**
   * Move the group into the correct position.
   * The group holds the wall and whatever 3d objects are attached to the wall.
   *
   * flatten() and init() need to be consistent.
   * The both describe the position of the wall.
   */
  init(group: THREE.Group): void;
};

class Wall {
  /**
   * Width and height of the canvas.
   * The number is arbitrary, but a higher number will have more precision and a higher cost.
   * The canvas will be projected onto a surface that is not a square, so I don't know that there is any ideal value here.
   */
  static readonly canvasSize = 600;

  protected static readonly margin = this.canvasSize / 20;

  /**
   * Converts from the output of WallInfo.flatten() to a value suitable for the canvas.
   * @param x The x coordinate that comes from WallInfo.flatten().x
   * @returns The corresponding x coordinate on the canvas.
   */
  protected static readonly xToCanvas = makeLinear(
    boxMin,
    0,
    boxMax,
    this.canvasSize
  );

  /**
   * Converts from the output of WallInfo.flatten() to a value suitable for the canvas.
   * @param y The y coordinate that comes from WallInfo.flatten().y
   * @returns The corresponding x coordinate on the canvas.
   */
  protected static readonly yToCanvas = makeLinear(
    boxMin,
    this.canvasSize,
    boxMax,
    0
  );

  /**
   * This stores the position and rotation of the wall.
   *
   * Put 3d objects into here if you want them to be relative to a specific wall.
   * The x coordinate will always go from [wallMin, wallMax].
   * The y coordinate will always go from [wallMin, wallMax].
   * z = 0 is on the wall.
   * Positive z will move toward (and possibly past) the center of the box and the opposite wall.
   * Negative z will move outside and away from the box.
   */
  #group = new THREE.Group();

  /**
   * Draw on this at any time.
   * (Ideally but not necessarily in the animationFrame callback.)
   *
   * Set `this.#texture.needsUpdate = true;` at any time to copy from the canvas to the 3d object.
   * The copy will probably happen in the next animationFrame callback.
   *
   * Each wall gets its own canvas because the update isn't done immediately.
   * The canvas holds the image until the renderer is ready for it.
   */
  #canvas = document.createElement("canvas");

  #roughCanvas = rough.canvas(this.#canvas);
  #texture = new THREE.CanvasTexture(this.#canvas);
  #plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(boxSize, boxSize, 50, 50),
    new THREE.MeshPhongMaterial({
      map: this.#texture,
      //flatShading: true
    })
  );
  #bumpEffect = new BumpEffect(this.#plane.material);
  #ticTacToe = new TicTacToe();
  private constructor(private readonly info: WallInfo) {
    info.init(this.#group);
    scene.add(this.#group);
    this.#canvas.width = Wall.canvasSize;
    this.#canvas.height = Wall.canvasSize;
    this.makeWall();
    this.#group.add(this.#plane);
    this.#plane.castShadow = true;
    this.#plane.receiveShadow = true;
  }

  /**
   *
   * @param point A 3d point in the same coordinate system as the ball.
   * @returns A 2d point in the canvas's coordinate system.
   */
  protected flatten(point: THREE.Vector3) {
    const { x, y } = this.info.flatten(point);
    return new THREE.Vector2(Wall.xToCanvas(x), Wall.yToCanvas(y));
  }

  highlightPoint(point: THREE.Vector3, time: DOMHighResTimeStamp) {
    const { x, y } = this.flatten(point);

    const ballVelocity = 5;  // TODO.


    //this.makeWall();
    /*
    const context = this.#canvas.getContext("2d")!;
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, canvasX, canvasY);
    */

    const drawCircle = () => {
      this.#roughCanvas.circle(x, y, Wall.canvasSize / 5, {
        stroke: this.info.strokeColor,
        strokeWidth: 10,
        roughness: 3,
      });
    };

    const drawStar = () => {
      const radius = (Wall.canvasSize / 14) * (Math.random() + 1);
      const initialAngle = Math.random() * 2 * Math.PI;
      const nextAngle = ((2 * Math.PI) / 5) * 2;
      const points: Point[] = [];
      for (let i = 0; i < 5; i++) {
        const offset = polarToRectangular(radius, initialAngle + i * nextAngle);
        points.push([x + offset.x, y + offset.y]);
      }
      this.#roughCanvas.polygon(points, {
        stroke: this.info.strokeColor,
        strokeWidth: 5 + Math.random() * 5,
        roughness: 2 * Math.random() * 2,
        disableMultiStroke: Math.random() > 0.5,
      });
    };
    //drawStar();

    const canvasSize = Wall.canvasSize;

    function findCellCenter() {
      function findDimensionCenter(input: number) {
        if (input < canvasSize / 3) {
          return canvasSize / 6;
        } else if (input < canvasSize * (2 / 3)) {
          return canvasSize / 2;
        } else {
          return canvasSize * (5 / 6);
        }
      }
      return { x: findDimensionCenter(x), y: findDimensionCenter(y) };
    }

    const drawTicTacToeMove = () => {
      // TODO only do this if the cell is free.  Otherwise choose a different type of drawing.
      const margin = Wall.margin;
      const radius = canvasSize / 6 - margin;
      const center = findCellCenter();
      if (Math.random() < 0.5) {
        this.#roughCanvas.circle(center.x, center.y, radius * 2, {
          stroke: this.info.strokeColor,
          strokeWidth: 7 + Math.random() * 2,
          roughness: 3,
          disableMultiStroke: true
        });
        //console.log("circle", {radius, margin, center});
      } else {
        const left = center.x - radius;
        const right = center.x + radius;
        const top = center.y - radius;
        const bottom = center.y + radius;
        const options: Options = {
          stroke: this.info.strokeColor,
          strokeWidth: 7 + Math.random() * 2,
          roughness: 4,
          bowing: 4,
          disableMultiStroke: true
        };
        this.#roughCanvas.line(left, top, right, bottom, options);
        this.#roughCanvas.line(left, bottom, right, top, options);
        //console.log("square", {radius, margin, center, left, top, right, bottom});
      }
    }
    const cell = TicTacToe.findCell(x, y);
    if (this.#ticTacToe.canAdd(cell)) {
      this.#ticTacToe.add(cell);
      drawTicTacToeMove();
    } else if (!this.#bumpEffect.isActive()) {
      this.#bumpEffect.start(time, x, y, ballVelocity);
    }

    this.#texture.needsUpdate = true;
  }

  protected makeWall() {
    const context = this.#canvas.getContext("2d")!;
    context.fillStyle = this.info.fillColor;
    const margin = Wall.margin;
    const width = this.#canvas.width;
    const height = this.#canvas.height;
    context.fillRect(0, 0, width, height);

    const options: Options = {
      stroke: this.info.strokeColor,
      strokeWidth: 10,
      roughness: 3,
      bowing: 3,
    };
    const roughCanvas = this.#roughCanvas;
    // TODO cache the Drawable result.
    // By default, we want to redraw the line in exactly the same place each time.
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

    this.#texture.needsUpdate = true;
  }

  static readonly rear = new Wall({
    fillColor: "hsl(0, 100%, 45%)",//"#ff0000",
    strokeColor: "hsl(0, 100%, 83%)",//"#ff8080",
    flatten(input) {
      return new THREE.Vector2(input.x, input.y);
    },
    init(group) {
      group.position.z = boxMin;
    },
  });

  static readonly left = new Wall({
    fillColor: "hsl(120, 100%, 45%)",//"#00ff00",
    strokeColor: "hsl(120, 100%, 83%)",//"#c0ffc0",
    flatten(input) {
      return new THREE.Vector2(-input.z, input.y);
    },
    init(group) {
      group.position.x = boxMin;
      group.rotation.y = Math.PI / 2;
    },
  });

  static readonly right = new Wall({
    fillColor: "hsl(240, 100%, 45%)",//"#0000ff",
    strokeColor: "hsl(240, 100%, 83%)",//"#c0c0ff",
    flatten(input) {
      return new THREE.Vector2(input.z, input.y);
    },
    init(group) {
      group.position.x = boxMax;
      group.rotation.y = -Math.PI / 2;
    },
  });

  static readonly top = new Wall({
    fillColor: "hsl(60, 100%, 45%)", //This was "#ffff00" / "hsl(60, 100%, 50%)", but that was too bright to see well.
    strokeColor: "hsl(60, 100%, 83%)", //"#ffffc0",
    flatten(input) {
      return new THREE.Vector2(input.x, input.z);
    },
    init(group) {
      group.position.y = boxMax;
      group.rotation.x = Math.PI / 2;
    },
  });

  static readonly bottom = new Wall({
    fillColor: "hsl(180, 100%, 45%)",//"#00ffff",
    strokeColor: "hsl(180, 100%, 83%)",//"#c0ffff",
    flatten(input) {
      return new THREE.Vector2(input.x, -input.z);
    },
    init(group) {
      group.position.y = boxMin;
      group.rotation.x = -Math.PI / 2;
    },
  });

  static readonly all: readonly Wall[] = [this.top, this.bottom, this.left, this.right, this.rear];

  static find(dimension: "x" | "y" | "z", position: number): Wall | undefined {
    if (position < 0) {
      if (dimension == "x") {
        return this.left;
      } else if (dimension == "y") {
        return this.bottom;
      } else if (dimension == "z") {
        return this.rear;
      }
    } else {
      if (dimension == "x") {
        return this.right;
      } else if (dimension == "y") {
        return this.top;
      }
    }
    return;
  }

  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#bumpEffect.doAnimationFrame(time);
  }
}

const ballRadius = 1;

/**
 * @param x 
 * @param y 
 * @param z 
 * @returns The ball.
 */
function makeMarker(x?: number, y?: number, z?: number): THREE.Object3D;
/**
 * Create a ball at the given position and add it to the scene.
 * @param source Put the marker in the same position as this object.
 * @returns The ball.
 */
function makeMarker(source: THREE.Object3D): THREE.Object3D;
function makeMarker(x: number | THREE.Object3D = 0, y = 0, z = 0): THREE.Object3D {
  if (x instanceof THREE.Object3D) {
    z = x.position.z;
    y = x.position.y;
    x = x.position.x;
  }
  const geometry = new THREE.SphereBufferGeometry(ballRadius, 24, 24);
  const material = new THREE.MeshPhongMaterial({ color: 0xff2020 });
  const marker = new THREE.Mesh(geometry, material);
  marker.position.set(x, y, z);
  marker.castShadow = true;
  scene.add(marker);
  return marker;
}
(window as any).makeMarker = makeMarker;

const ball = makeMarker();
let ballVelocity = {
  y: 0,
  x: 0,
  z: 0,
};

/**
 * The last time that we updated the ball's position.
 * We know the velocity of the ball.
 * We need to know how much time has passed since the last update, so we can use the velocity.
 */
let lastBallUpdate: number | undefined;

// The _center_ of the ball can _not_ go all the way to the wall.
// Always reserve one ball radius.
const ballMin = boxMin + ballRadius;
const ballMax = boxMax - ballRadius;

function updateBall(time: DOMHighResTimeStamp) {
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
        //drawOnWall(dimension, "min");  TODO move this into the Wall class.
        // Let Wall pick which special effects to use and when.
        Wall.find(dimension, ballMin)?.highlightPoint(ball.position, time);
      } else if (newValue > ballMax) {
        newValue = ballMax;
        ballVelocity[dimension] = -Math.abs(ballVelocity[dimension]);
        //drawOnWall(dimension, "max");
        Wall.find(dimension, ballMax)?.highlightPoint(ball.position, time);
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
  // For now we just rely on the aspect ratio being 1.  Set by the outside.
  // I found some good info on FOV vs aspect ratio!
  // https://stackoverflow.com/questions/17837652/calculating-frame-and-aspect-ratio-guides-to-match-cameras/17840405#17840405
  // According to this, PerspectiveCamera.fov refers to the FOV in the vertical direction.
  // It includes math for computing the FOV in the horizontal direction.
  const fovInRadians = (fov / 360) * 2 * Math.PI;
  const angleToEdge = fovInRadians / 2;
  const cameraToNearFace = boxMax / Math.tan(angleToEdge);
  camera.position.set(0, 0, boxMax + cameraToNearFace);

  camera.fov = fov;
  camera.near = cameraToNearFace / 2;
  camera.far = cameraToNearFace + boxSize * 1.1;
  camera.updateProjectionMatrix();
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
    `translate(${cubeX}, ${cubeY}) scale(${cubeSize / (boxMax - boxMin)
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

  //for (const toUpdate of wantsAnimationUpdate) {
  //  toUpdate.update(time);
  //}

  Wall.all.forEach(wall => wall.doAnimationFrame(time));

  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

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

{
  const scaleSpeedFromGui = makeLinear(0, 0, 5, 21.7);

  const speedInput = getById("speed", HTMLInputElement);
  const turtleIcon = getById("turtle", HTMLSpanElement);
  const rabbitIcon = getById("rabbit", HTMLSpanElement);

  const min = parseInt(speedInput.min);
  const max = parseInt(speedInput.max);

  const speedControlUpdate = () => {
    const inputSpeed = parseInt(speedInput.value);

    turtleIcon.style.cursor = (inputSpeed > min) ? "w-resize" : "";
    rabbitIcon.style.cursor = (inputSpeed < max) ? "e-resize" : "";

    const speed = scaleSpeedFromGui(inputSpeed);
    ballVelocity = randomDirection3(speed);
    /*
    console.log({
      inputSpeed,
      speed,
      ballVelocity,
      resultingSpeed: Math.hypot(
        ballVelocity.x,
        ballVelocity.y,
        ballVelocity.z
      ),
    });
    */
  };

  speedControlUpdate();

  speedInput.addEventListener("input", speedControlUpdate);
  turtleIcon.addEventListener("click", () => {
    const speed = parseInt(speedInput.value);
    if (speed > min) {
      speedInput.value = (speed - 1).toString();
      speedControlUpdate();
    }
  });
  rabbitIcon.addEventListener("click", () => {
    const speed = parseInt(speedInput.value);
    if (speed < max) {
      speedInput.value = (speed + 1).toString();
      speedControlUpdate();
    }
  });
}

// I copied this (with a tiny modification) from my roughjs-with-vite project.
// TODO move this to a shared library.
function randomDirection3(desiredLength = 1) {
  // TODO there is a better way to do this.  You can get the two angles
  // with two random numbers and an arcsine.  Details available on google.
  // There was no cut-and-paste ready solution, that's why I settled for
  // this version.  It's a good approximation, but it seems like more 
  // runtime CPU than the perfect result.
  function normal() {
    return Math.random() + Math.random() + Math.random() + Math.random() - 2;
  }
  const result = { x: normal(), y: normal(), z: normal() };
  // TODO what about ÷0 ?
  const initialLength = Math.hypot(result.x, result.y, result.z);
  const factor = desiredLength / initialLength;
  result.x *= factor;
  result.y *= factor;
  result.z *= factor;
  return result;
}
