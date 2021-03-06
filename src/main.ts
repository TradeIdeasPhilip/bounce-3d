import "./style.css";
import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry, TextGeometryParameters } from "three/examples/jsm/geometries/TextGeometry.js"
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

import { getById, getHashInfo } from "./lib/client-misc";
import { countMap, FIGURE_SPACE, makeBoundedLinear, makeLinear, pick, polarToRectangular } from "./lib/misc";

// Source:  https://methodshop.com/batman-fight-words/
import batmanFightWords from "./batman-fight-words.json";
import { Point } from "roughjs/bin/geometry";
import { RoughCanvas } from "roughjs/bin/canvas";

const urlHashInfo = getHashInfo();
const showShadows = urlHashInfo.get("shadows") === "1";

// Coordinates in the 3d world:
// x=0 is the center of the viewing area / box.
// Positive x moves to the right, negative x moves to the left, just like in algebra class.
// y=0 is the center of the viewing area / box.
// Positive y moves up, negative y moves down, just like in algebra class.
// (But the opposite of the canvas!)
// z=0 is the center of the viewing area / box.
// Positive z moves toward the camera.  Negative z moves toward the horizon.

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

const scene = new THREE.Scene();

abstract class Wall {
  /**
   * Width and height of the canvas.
   * The number is arbitrary, but a higher number will have more precision and a higher cost.
   * The canvas will be projected onto a surface that is not a square, so I don't know that there is any ideal value here.
   */
  static readonly canvasSize = 600;

  static readonly margin = this.canvasSize / 20;

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
   * Draw on this at any time.
   * (Ideally but not necessarily in the animationFrame callback.)
   *
   * Call `this.forceUpdate()` at any time to copy from the canvas to the 3d object.
   * The copy will probably happen in the next animationFrame callback.
   *
   * Each wall gets its own canvas because the update isn't done immediately.
   * The canvas holds the image until the renderer is ready for it.
   */
  protected readonly canvas = document.createElement("canvas");
  protected readonly context = this.canvas.getContext("2d")!;

  protected readonly roughCanvas = rough.canvas(this.canvas);
  protected readonly texture = new THREE.CanvasTexture(this.canvas);

  protected drawStar = (x: number, y: number, color: string) => {
    const radius = (Wall.canvasSize / 14) * (Math.random() + 1);
    const initialAngle = Math.random() * 2 * Math.PI;
    const nextAngle = ((2 * Math.PI) / 5) * 2;
    const points: Point[] = [];
    for (let i = 0; i < 5; i++) {
      const offset = polarToRectangular(radius, initialAngle + i * nextAngle);
      points.push([x + offset.x, y + offset.y]);
    }
    this.roughCanvas.polygon(points, {
      stroke: color,
      strokeWidth: 5 + Math.random() * 5,
      roughness: 2 * Math.random() * 2,
      disableMultiStroke: Math.random() > 0.5,
    });
    this.forceUpdate();
  };

  protected forceUpdate() {
    this.texture.needsUpdate = true;
  }

  abstract highlightPoint(point: THREE.Vector3, time: number): void;
  abstract doAnimationFrame(time: DOMHighResTimeStamp): void;
}

/**
 * This sets the clipping region for the cracked glass animation.
 * We start by setting the radius to innerR * half the size of the image.
 * Over time we grow to outerR * half the size of the image.
 * After that part of the animation ends, we draw the entire image, with no clipping.
 */
const crackInfo = { innerR: 0.2, outerR: 0.5 };

class FrontWall extends Wall {
  private static readonly img = getById("bulletGlass", HTMLImageElement);
  private static readonly MAX_GLASS_SIZE = 250 / 704 * this.canvasSize;
  private static readonly MIN_GLASS_SIZE = this.MAX_GLASS_SIZE * 0.66;
  private static readonly randomToGlass = makeLinear(0, this.MIN_GLASS_SIZE, 1, this.MAX_GLASS_SIZE);
  #plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(boxSize, boxSize),
    // The cracked glass effect looks the best when it is well lit!
    // When I used the Phong material it looked best when the crack was at the top,
    // where there is more direct lighting.  With the Basic material the crack looks
    // good everywhere.
    new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true
    })
  );

  /**
   * This describes the progress of the current animation.
   * This is undefined if no animation is currently active.
   * Otherwise call this #program.doAnimationFrame() once per animation frame,
   * and call #program.end() to clean up when the program is done.
   */
  #program: { doAnimationFrame: (time: DOMHighResTimeStamp) => void, end: () => void } | undefined;

  highlightPoint(point: THREE.Vector3, time: number): void {
    this.#program?.end();
    const centerX = Wall.xToCanvas(point.x);
    const centerY = Wall.yToCanvas(point.y);
    const color = "white";
    const random = Math.random();
    if (random < 0.5) {
      this.startSimpleFade(time);
      const shapeRandom = Math.random();
      if (shapeRandom < 0.3333) {
        this.drawStar(centerX, centerY, color);
      } else {
        const rowAndColumn = TicTacToe.findCell(centerX, centerY);
        if (shapeRandom < 0.666667) {
          TicTacToe.drawX(this.roughCanvas, color, rowAndColumn);
        } else {
          TicTacToe.drawO(this.roughCanvas, color, rowAndColumn);
        }
      }
    } else {
      this.startCrackedGlassEffect(time, centerX, centerY);
    }
  }
  startSimpleFade(startTime: number) {
    this.#plane.material.opacity = 1;
    this.context.clearRect(0, 0, Wall.canvasSize, Wall.canvasSize);
    this.texture.needsUpdate = true;
    const fadeStartTime = startTime + 1500;
    /**
     * The image will be completely faded at this time.
     * Do one final cleanup then finish the animation.
     */
    const fadeEndTime = startTime + 3000;
    /**
     * Use this to say how much the image should be faded.
     * @param time The time of the animation.
     */
    const opacity = makeLinear(fadeStartTime, 1, fadeEndTime, 0);
    const doAnimationFrame = (time: DOMHighResTimeStamp) => {
      if (time > fadeEndTime) {
        end();
      } else if (time >= fadeStartTime) {
        this.#plane.material.opacity = opacity(time);
      }
    }
    const end = () => {
      this.#plane.material.opacity = 0;
      this.#program = undefined;
    };
    this.#program = {
      doAnimationFrame, end
    };
  }
  startCrackedGlassEffect(startTime: number, centerX: number, centerY: number) {
    const width = FrontWall.randomToGlass(Math.random());
    const height = Math.min(FrontWall.MAX_GLASS_SIZE, Math.max(FrontWall.MIN_GLASS_SIZE, width * (Math.random() * 0.2 + 0.9)));
    const context = this.context;
    const sourceSize = FrontWall.img.naturalHeight;
    if (sourceSize <= 0) {
      // Image not loaded
      return;
    }
    const destinationX = centerX - width / 2;
    const destinationY = centerY - height / 2;
    /**
     * This is an optimization.  There is certain work we do once at the beginning.
     * We could do the work each time, but this is more efficient.
     */
    let hasBeenInitialized = false;
    /**
     * This is an optimization.  We only update the canvas and the material while
     * the first part of the animation is going.  We could redraw the cracked glass
     * ever=y frame but this is more efficient.  Most animation frames we do nothing
     * or we only change the opacity of the entire #plane.
     */
    let drawingFinished = false;
    /**
     * Draw the complete cracked glass image at this time, and leave it up.
     * Before this time, draw just part of the image.
     */
    const drawEndTime = startTime + 300;
    /**
     * Draw a small crack immediately.
     * The crack stays small until this time.
     * Then it starts growing
     */
    const growStartTime = startTime + 200;
    /**
     * How much of the cracked glass image to display at the given time.
     * @param time The time of the animation frame.
     */
    const radiusX = makeBoundedLinear(growStartTime, width / 2 * crackInfo.innerR, drawEndTime, width / 2 * crackInfo.outerR);
    /**
     * How much of the cracked glass image to display at the given time.
     * @param time The time of the animation frame.
     */
    const radiusY = makeBoundedLinear(growStartTime, height / 2 * crackInfo.innerR, drawEndTime, height / 2 * crackInfo.outerR);
    /**
     * Make the image start fading at this time.
     */
    const fadeStartTime = startTime + 1500;
    /**
     * The image will be completely faded at this time.
     * Do one final cleanup then finish the animation.
     */
    const fadeEndTime = startTime + 3000;
    /**
     * Use this to say how much the image should be faded.
     * @param time The time of the animation.
     */
    const opacity = makeLinear(fadeStartTime, 1, fadeEndTime, 0);
    const doAnimationFrame = (time: DOMHighResTimeStamp) => {
      if (time > fadeEndTime) {
        end();
        return;
      }
      if (!hasBeenInitialized) {
        this.#plane.material.opacity = 1;
        hasBeenInitialized = true;
      }
      if (!drawingFinished) {
        this.texture.needsUpdate = true;
        context.clearRect(0, 0, Wall.canvasSize, Wall.canvasSize);
        context.save();
        if (time >= drawEndTime) {
          drawingFinished = true;
        } else {
          context.beginPath();
          context.ellipse(centerX, centerY, radiusX(time), radiusY(time), 0, 0, Math.PI * 2);
          context.clip();
        }
        context.drawImage(FrontWall.img, 0, 0, sourceSize, sourceSize, destinationX, destinationY, width, height);
        context.restore();
      }
      if (time >= fadeStartTime) {
        this.#plane.material.opacity = opacity(time);
      }
    };
    const end = () => {
      this.#plane.material.opacity = 0;
      this.#program = undefined;
    };
    this.#program = {
      doAnimationFrame, end
    };
  }
  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#program?.doAnimationFrame(time);
  }
  private constructor() {
    super();
    this.canvas.width = Wall.canvasSize;
    this.canvas.height = Wall.canvasSize;

    // I could not get this plane to cast a shadow.  It would be nice to fix that.
    //this.#plane.castShadow = true;

    this.#plane.position.z = boxMax;
    scene.add(this.#plane);
  }
  static readonly instance = new FrontWall();
}

/**
 * Normally the walls are flat.
 * This is the effect that makes the wall wiggle and bounce when it gets hit.
 * There is one small "bump" where the ball made impact.
 */
class BumpEffect {
  /**
   * This is the length and width of the canvas used to define the shape of the bump.
   * Bigger gives more precision.
   * However, it will all get mapped down to the points and triangles in the plane,
   * so if you go much beyond that it won't do much good.
   */
  static readonly #size = 300;  // TODO Define this in terms of Wall.canvasSize!  Or the number of if heightSegments and widthSegments in each wall.
  /* This is the canvas used to define the shape of the bump. */
  #canvas = document.createElement("canvas");
  /* This can draw on the canvas used to define the shape of the bump. */
  #context = this.#canvas.getContext("2d")!
  /* This is a wrapper around the canvas used to define the shape of the bump. */
  #texture = new THREE.CanvasTexture(this.#canvas);
  constructor(private readonly material: THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial) {
    if (!this.#context) {
      throw new Error("wtf");
    }
    this.#canvas.height = BumpEffect.#size;
    this.#canvas.width = BumpEffect.#size;
  }
  /**
   * 
   * @param x The location of the center of the bump, in this.#canvas's coordinates.
   * @param y The location of the center of the bump, in this.#canvas's coordinates.
   * @param radius The radius of the bump, in this.#canvas's coordinates.  
   * Note that the bump has _very_ soft edges, so this number will be bigger than you might expect after viewing the bump.
   */
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
  /**
   * This describes the progress of the current animation.
   * This is undefined if no animation is currently active.
   * Otherwise call this #program.doAnimationFrame() once per animation frame,
   * and call #program.end() to clean up when the program is done.
   */
  #program: { doAnimationFrame: (time: DOMHighResTimeStamp) => void, end: () => void } | undefined;
  /**
   * 
   * @returns True if an animation is currently in progress.
   */
  isActive() {
    return this.#program != undefined;
  }
  /**
   * Call this once per animation frame.
   * @param time Standard timestamp used by performance.now() and animation frames.
   */
  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#program?.doAnimationFrame(time);
  }
  /**
   * Clean up after the animation is done.
   * This can be called at any time to abort the animation and leave the wall in a reasonable state.
   * This object will automatically call `end()` when the current animation is finished.
   * 
   * The animation will be smoother if `end()` is only called internally.
   */
  end() {
    this.#program?.end();
    this.#program = undefined;
  }
  /**
   * Start the animation.
   * 
   * You can start it at any time.
   * However, the animation will look smoother 
   * if you wait for the previous animation to finish before starting a new one.
   * See `this.isActive()`.
   * @param startTime Standard animation time value.
   * @param x Where the ball hit the wall, in the wall's canvas's coordinates.
   * @param y Where the ball hit the wall, in the wall's canvas's coordinates.
   */
  start(startTime: DOMHighResTimeStamp, x: number, y: number) {
    x *= BumpEffect.#size / Wall.canvasSize;
    y *= BumpEffect.#size / Wall.canvasSize;
    this.end();
    const endTime = startTime + 1500;
    const maxDisplacement = 3;
    const getAmplitude = makeLinear(startTime, 3, endTime, 0);
    const getPhase = makeLinear(startTime, 0, endTime, - Math.PI * 3);
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

/**
 * Tic-tac-toe coordinates.
 */
type RowAndColumn = {
  /**
   * 0 for the top row.
   * 1 for the middle row.
   * 2 for the bottom row.
   */
  row: number,
  /**
   * 0 for the left column.
   * 1 for the middle column.
   * 2 for the right column.
   */
  column: number
};

/** 
 * Each cell on the board will have one of these three things in it.
 */
type CellContents = "X" | "O" | undefined;

/**
 * This draws the moves on the wall.
 * And it keeps track of the state of the game.
 */
class TicTacToe {
  /**
   * Clear all moves from the board.
   * 
   * Note that this does **not** draw anything.
   * SolidWall and WallDrawer are responsible for that.
   * SolidWall should request a redraw from WallDrawer and a reset() from this at the same time.
   */
  reset() {
    // `new Array(9)` will be filled with 9 "empty" elements.
    // "Empty" is *not* the same as undefined!
    // [] and for/of work as expected, but .forEach() and .some() skip the "empty" elements.
    // .map() does a hybrid!
    // I cannot find any good documentation on the subject.
    // Array.from() fixes the problem.
    this.#squares = Array.from(new Array(9));
    this.#nextMove = (Math.random() >= 0.5) ? "X" : "O";
  }
  /**
   * 
   * @param roughCanvas Used to draw on the wall.
   * @param wallInfo Describes the wall.
   */
  constructor(private readonly roughCanvas: RoughCanvas,
    private readonly wallInfo: Readonly<WallInfo>) {
    this.reset();
  }
  /**
   * Alternate between X's move and O's move.
   * Randomly pick who goes first.
   * Set this to undefined when the game is over.
   */
  #nextMove: CellContents;
  /**
   * 
   * @returns True if there is at least one legal move left.
   * False if the game is over.
   */
  canAddMore() { return this.#nextMove !== undefined; }
  /**
   * Mark the game as over.
   * 
   * This is called internally / automatically if someone wins or if there is a tie.
   * 
   * This can be called externally.  Typically the main program will let the tic-tac-toe
   * game run as long as it can.  It gets a high priority because this effect lasts for
   * many bounces and most special effects only last for one bounce.
   * 
   * However, the main program includes some randomness.  It might chose to abort the game
   * so it can draw other things on top of the board.
   */
  disable() { this.#nextMove = undefined; }
  /**
   * @param rowAndColumn Which cell on the board.
   * @returns Which index in this.#squares.
   */
  private static toIndex(rowAndColumn: RowAndColumn) {
    return rowAndColumn.row * 3 + rowAndColumn.column;
  }
  /**
   * What moves have been taken so far.
   * Use `toIndex()` to create an index into this array.
   */
  #squares!: CellContents[];
  /**
   * 
   * @param rowAndColumn The space to inspect.
   * @returns True if it would be legal to add a move in this space right now.
   * False if the game is over and/or this space is full.
   */
  canAdd(rowAndColumn: RowAndColumn) {
    return this.canAddMore() && (this.#squares[TicTacToe.toIndex(rowAndColumn)] === undefined);
  }
  /**
   * Convert from tic-tac-toe coordinates to canvas coordinates.
   * 
   * Use TicTacTow.findCell() to go the other direction.
   * @param cellIndex The row or column from a RowAndColumn.
   * @returns The corresponding x or y for the wall's canvas.
   */
  private static cellCenter(cellIndex: number) {
    return cellIndex * Wall.canvasSize / 3 + Wall.canvasSize / 6;
  }
  /**
   * Try to move in the given position.
   * On success, update the display and the internal representation.
   * If that move is not possible, do nothing.
   * @param rowAndColumn Where to try to place the next move.
   * @returns true if we made the move, false if we didn't.
   */
  add(rowAndColumn: RowAndColumn) {
    if (!this.canAdd(rowAndColumn)) {
      // This is explicitly legal.
      // However, I don't expect to get here.
      // I purposely made this class very flexible, but I know how the caller intends to use this function.
      console.log("Can't add tic tac toe move.");
      return false;
    } else {
      const thisMove = this.#nextMove;
      this.#squares[TicTacToe.toIndex(rowAndColumn)] = thisMove;
      this.#nextMove = (thisMove == "X") ? "O" : "X";

      // Draw the current move.
      if (thisMove == "O") {
        TicTacToe.drawO(this.roughCanvas, this.wallInfo.strokeColor, rowAndColumn);
      } else {
        TicTacToe.drawX(this.roughCanvas, this.wallInfo.strokeColor, rowAndColumn);
      }

      // Check for end of game because there are no more moves to make.
      // The main program might act differently when the entire game is over
      // (see this.canAddMore()) vs just this cell is full.
      if (this.#squares.every(value => value)) {
        // The board is full.
        this.disable();
      }

      // Check for a winner.
      // If found, update the display and the internal representation.
      const isWinner = (positions: RowAndColumn[]): CellContents => {
        const items = positions.map(position => this.#squares[TicTacToe.toIndex(position)]);
        if (items.every(item => item == "X")) {
          this.disable();
          return "X";
        } else if (items.every(item => item == "O")) {
          this.disable();
          return "O";
        } else {
          return undefined;
        }
      };
      /**
       * Draw a line to show the winning move.
       * @param x1 
       * @param y1 
       * @param x2 
       * @param y2 
       */
      const drawSuccess = (x1: number, y1: number, x2: number, y2: number) => {
        const options: Options = {
          stroke: this.wallInfo.strokeColor,
          strokeWidth: 20,
          roughness: 4,
          bowing: 8,
          disableMultiStroke: true
        };
        /**
         * Rough.js doesn't change the endpoints much.  So I add my own randomness.
         * This is important here because we are drawing on top of other items,
         * and I don't want all the different items to line up perfectly. 
         * @returns A small random value.
         */
        const random = () => (Math.random() - 0.5) * Wall.margin;
        this.roughCanvas.line(x1 + random(), y1 + random(), x2 + random(), y2 + random(), options);
      };
      /**
       * Put the ends of the line segment in the margin.
       * 
       * There is always empty space separating the edge of the plan from the board, the X's and the O's.
       * The ends of this new line segment will be in that space.
       */
      const offset = Wall.margin / 2;
      for (let row = 0; row < 3; row++) {
        const positions = countMap(3, column => { return { row, column }; });
        if (isWinner(positions)) {
          const y = TicTacToe.cellCenter(row);
          drawSuccess(offset, y, Wall.canvasSize - offset, y);
        }
      }
      for (let column = 0; column < 3; column++) {
        const positions = countMap(3, row => { return { row, column }; });
        if (isWinner(positions)) {
          const x = TicTacToe.cellCenter(column);
          drawSuccess(x, offset, x, Wall.canvasSize - offset);
        }
      }
      const fromTopLeft = countMap(3, i => { return { row: i, column: i }; });
      if (isWinner(fromTopLeft)) {
        drawSuccess(offset, offset, Wall.canvasSize - offset, Wall.canvasSize - offset);
      }

      const fromTopRight = countMap(3, i => { return { row: i, column: 2 - i }; });
      if (isWinner(fromTopRight)) {
        drawSuccess(offset, Wall.canvasSize - offset, Wall.canvasSize - offset, offset);
      }

      return true;
    }
  }

  /**
   * Converts from canvas coordinates into tic-tac-toe squares.
   * 
   * Use TicTacToe.cellCenter() to go the other direction.
   * @param x Canvas coordinates.
   * @param y Canvas coordinates.
   * @returns Which of the 9 squares of the tic-tac-toe board contains the input.
   */
  static findCell(x: number, y: number): RowAndColumn {
    function oneDimension(input: number) {
      return Math.floor((input * 3 / Wall.canvasSize));
    }
    return { row: oneDimension(y), column: oneDimension(x) };
  }

  private static readonly radius = Wall.canvasSize / 6 - Wall.margin;

  static drawX(roughCanvas: RoughCanvas, color: string, rowAndColumn: RowAndColumn) {
    const center = {
      x: this.cellCenter(rowAndColumn.column),
      y: this.cellCenter(rowAndColumn.row)
    };
    const radius = this.radius;
    const left = center.x - radius;
    const right = center.x + radius;
    const top = center.y - radius;
    const bottom = center.y + radius;
    const options: Options = {
      stroke: color,
      strokeWidth: 7 + Math.random() * 2,
      roughness: 4,
      bowing: 4,
      disableMultiStroke: true
    };
    roughCanvas.line(left, top, right, bottom, options);
    roughCanvas.line(left, bottom, right, top, options);
  }

  static drawO(roughCanvas: RoughCanvas, color: string, rowAndColumn: RowAndColumn) {
    const center = {
      x: this.cellCenter(rowAndColumn.column),
      y: this.cellCenter(rowAndColumn.row)
    };
    roughCanvas.circle(center.x, center.y, this.radius * 2, {
      stroke: color,
      strokeWidth: 7 + Math.random() * 2,
      roughness: 3,
      disableMultiStroke: true
    });
  }
}

/**
 * The main canvas where we display the 3d scene.
 */
const canvas = getById("canvas", HTMLCanvasElement);

/**
 * We put the canvas into a div to help with the layout magic.
 * Whenever the canvasHolder gets resized (e.g. you rotate your phone 90??)
 * we call code to resize the canvas **and** the renderer.
 * The canvas has has `position` set to `absolute` so its size
 * does not automatically change.
 * And when we manually change the canvas's size, that will not cause an other changes in the document.
 */
const canvasHolder = getById("canvasHolder", HTMLDivElement);

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
if (showShadows) {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

const dimensions = ["x", "y", "z"] as const;

// I copied this from an example.
// I think it has a small effect on the ball.
// This should be tweaked with the lights and the shadows.
scene.fog = new THREE.Fog(0x000000, 250, 1400);

const useSpotlights = urlHashInfo.get("spotlight") === "1";

const rightLight = useSpotlights ? (new THREE.SpotLight(0xffffff, 2 / 3, 0, Math.PI / 2)) : (new THREE.PointLight(0xffffff, 2 / 3));
rightLight.position.set(boxMax / 2, boxMax / 4, boxMax * 1.5);
rightLight.castShadow = true;
rightLight.shadow.radius = 8;  // Add blur.  The default is 1.  That's totally black if this is the only light.
scene.add(rightLight);
const leftLight = useSpotlights ? (new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2)) : (new THREE.PointLight(0xffffff, 1));
leftLight.position.set(-boxMax / 2, boxMax / 2, boxMax * 1.5);
leftLight.castShadow = true;
leftLight.shadow.radius = 8;  // https://stackoverflow.com/a/53522410/971955
scene.add(leftLight);

class FightWordEffect {
  /**
   * Note that these get loaded from the internet when the program starts.
   * So the list might be partially or completely empty, for a brief moment.
   */
  static readonly #fonts: Font[] = [];
  static #initializer = [
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
      FightWordEffect.#fonts.push(font);
    });
  });

  /**
   * Use this to draw the words on the walls.
   * 
   * These were MeshPhongMaterial but I had trouble getting the right light on them.
   */
  static readonly #materials = [
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // front
    new THREE.MeshBasicMaterial({ color: 0x404040 }), // side
  ];

  /**
   * Lots of things that are only useful if you are debugging.
   */
  static readonly debug = {
    /**
     * 0 for normal.  A positive number to leave extra space between the words and the wall.
     * A negative number to move toward, into, and possibly past the wall.
     * Normal ball / box / world units.
     */
    extraZ: 0,

    /**
     * An index into the font list.
     * If the index is invalid, like -1, then randomly pick a font.
     * -1 is the default.
     */
    font: -1,

    /**
     * What text to display.
     * undefined is the default meaning pick randomly from the list.
     * or provide a string to display only that string.
     */
    text: undefined as (string | undefined),

    /**
     * The size of the extruded dimension.
     * undefined, the default, means to pick a small random number.
     * Or fill in a number here so it's the same every time.
     */
    height: undefined as (number | undefined),

    /**
     * Avoid all of the random stuff.
     * So you can get consistent results from one call to draw() to the next.
     * So only one variable changes at a time.
     */
    freeze() {
      this.text = "Debug!";
      this.font = 0;
      this.height = 0.3;
    },

    all: [] as FightWordEffect[]
  }

  /**
   * Add a bevel to text on the back wall so that we can get a 3d effect.
   * The extruded depth is all but invisible on the back wall.
   */
  #textOptions: Partial<TextGeometryParameters> = {};

  constructor(private readonly group: THREE.Group) {
    FightWordEffect.debug.all.push(this);
    if (group.rotation.x == 0 && group.rotation.y == 0) {
      this.#textOptions = {
        bevelEnabled: true,
        bevelSize: 0.25,
        bevelThickness: 0.1 // Same direction as height.
      };

    }
  }

  #cleanup: (() => void) | undefined;

  isActive() {
    return this.#cleanup !== undefined;
  }

  end() {
    this.#cleanup?.();
    this.#cleanup = undefined;
  }

  canDraw() {
    return FightWordEffect.#fonts.length > 0;
  }

  /**
   * 
   * @param x Coordinates relative to the group.
   * @param y Coordinates relative to the group.
   * @returns `true` if we did something. `false` if not.
   */
  draw(x: number, y: number): boolean {
    this.end();
    if (!this.canDraw()) {
      return false;
    }

    /**
     * This is the extra dimension we are adding by extruding the text.
     */
    const height = FightWordEffect.debug.height ?? (0.4 + Math.random() * 0.4);

    // TODO touch?? works perfectly in some fonts, but in others the ?? becomes a ?.
    // I'd like to keep touch??, but make it always work.
    const text = FightWordEffect.debug.text ??
      pick(batmanFightWords) + "!".repeat(Math.floor(Math.random() * 3) + 1);

    const font = FightWordEffect.#fonts[FightWordEffect.debug.font] ?? pick(FightWordEffect.#fonts);

    const textGeo = new TextGeometry(text, {
      font,
      size: 3,
      height,
      curveSegments: 4,
      ...this.#textOptions
    });
    textGeo.computeBoundingBox();
    if (!textGeo.boundingBox) {
      throw new Error("wtf");
    }

    const textMesh = new THREE.Mesh(
      textGeo,
      FightWordEffect.#materials
    );

    // By default the left edge of the text and the baseline of the text are very close to the origin.

    // I'm centering the text left to right the same way as the example I first copied this from.
    // This assumes that the left edge is exactly ax x=0, which is close but not true.
    const textWidth = textGeo.boundingBox.max.x - textGeo.boundingBox.min.x;
    let textX = x - textWidth / 2;

    // If the text is off the left or right edge, move it just enough that it entirely fits.
    //
    // If it's off both edges, preserve the left edge.
    // That's more of an observation than a rule.  I don't ever expect it to be too wide to display.
    // If I did, I'd add a smarter rule, like centering and/or shrinking the text.
    {
      const textRightEdge = textX + textGeo.boundingBox.max.x;
      const tooFarRight = textRightEdge - boxMax;
      if (tooFarRight > 0) {
        textX -= tooFarRight;
      }
    }
    {
      const textLeftEdge = textX + textGeo.boundingBox.min.x;
      // boxMin = -14, textLeftEdge = -14, no problem, already at the edge.
      // boxMin = -14, textLeftEdge = -13, no problem, one unit of padding.
      // boxMin = -14, textLeftEdge = -15, 1 unit too far to the left.
      const tooFarLeft = boxMin - textLeftEdge;
      if (tooFarLeft > 0) {
        textX += tooFarLeft;
      }
    }

    // I'm lining up the baseline of the text with the center of the ball.
    // Like the x position, this decision is based on the example I copied.
    // Now that I know more I might want to center it or something like that.
    let textY = y;

    // If it's off the wall, move it as little as possible to keep it from going off the wall.
    {
      const textBottomEdge = textY + textGeo.boundingBox.max.y;
      const tooFarDown = textBottomEdge - boxMax;
      if (tooFarDown > 0) {
        textY -= tooFarDown;
      }
    }
    {
      const textTopEdge = textY + textGeo.boundingBox.min.y;
      const tooFarUp = boxMin - textTopEdge;
      if (tooFarUp > 0) {
        textY += tooFarUp;
      }
    }

    // textGeo.boundingBox.min.z is 0 if there is no beveling.
    // It becomes negative if there is some beveling.
    // Ideally this would depend on the rotation!
    // See more notes in the constructor.
    const textZ = FightWordEffect.debug.extraZ - textGeo.boundingBox.min.z;

    textMesh.position.set(textX, textY, textZ);
    textMesh.receiveShadow = true;
    this.group.add(textMesh);

    this.#cleanup = () => {
      this.group.remove(textMesh);
      textGeo.dispose();
    }

    return true;
  }
}

class WeightedRandom<T> {
  readonly #all: { value: T, weight: number }[] = [];
  #totalWeight = 0;
  add(value: T, weight: number) {
    if ((weight <= 0) || !isFinite(weight)) {
      // Negative weights would definitely cause problems.
      // Adding something with a weight of 0 would make isEmpty()
      // more complicated.
      // I could do just ignore anything with a weight of 0, but
      // I don't expect that case so let's just call it illegal.
      throw new Error("wtf");
    }
    this.#all.push({ value, weight });
    this.#totalWeight += weight;
  }
  isEmpty() {
    return this.#all.length == 0;
  }
  pick(): T {
    if (this.isEmpty()) {
      throw new Error("wtf");
    }
    let skip = Math.random() * this.#totalWeight;
    for (const { value, weight } of this.#all) {
      skip -= weight;
      if (skip <= 0) {
        return value;
      }
    }
    // We might get here due to round off error.  But that should be rare.
    console.log("Round off error?", this);
    return this.#all[0].value;
  }
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

/**
 * This class is responsible for drawing the tic-tac-toe board.
 * The board is always blank after we draw it.  Use the TicTacToe
 * class to fill in the moves.
 * 
 * This class also draws the background.  Other classes can draw
 * on the wall, but this class can overwrite the old drawings.
 * 
 * This class can draw things instantly, as in the constructor,
 * or it can draw things in an animated way.
 */
class WallDrawer {
  /**
   * This will immediately draw the board, but will not start any animations.
   * @param context 
   * @param roughCanvas 
   * @param colors 
   * @param forceUpdate 
   */
  constructor(private readonly context: CanvasRenderingContext2D,
    private readonly roughCanvas: RoughCanvas,
    private readonly colors: { readonly fillColor: string, readonly strokeColor: string },
    private readonly forceUpdate: () => void) {
    this.drawComplete();
  }
  static readonly #normalRandomness = 3;
  /**
   * Draw a new tic-tac-toe board.
   * 
   * If an animation is in progress, end it.
   * 
   * Either way, clear the board and draw a fresh board.
   */
  drawComplete() {
    this.#program = undefined;
    this.context.globalAlpha = 1;
    this.context.fillStyle = this.colors.fillColor;
    const canvasSize = Wall.canvasSize;
    this.context.fillRect(0, 0, canvasSize, canvasSize);
    this.drawForeground(WallDrawer.#normalRandomness);
    this.forceUpdate();
  }
  /**
   * It is safe to call this at any time.  If a previous
   * animation was in progress, that will be stopped and a new
   * animation will start fresh.
   * @param time Standard animation time.
   */
  startAnimation(time: DOMHighResTimeStamp) {
    const startTime = time;
    const endTime = startTime + 1000 + Math.random() * 500;
    let nextRedrawTime = 0;
    const randomness = makeLinear(startTime, 10, endTime, WallDrawer.#normalRandomness);
    const backgroundAlpha = makeLinear(startTime, 0, endTime, 1);
    const foregroundAlpha = makeLinear(startTime, 0.6, endTime, 1);
    const context = this.context;
    const canvasSize = SolidWall.canvasSize;
    const originalImage = context.getImageData(0, 0, canvasSize, canvasSize);
    this.#program = (time: DOMHighResTimeStamp) => {
      if (time >= endTime) {
        this.drawComplete();
      } else if (time >= nextRedrawTime) {
        context.putImageData(originalImage, 0, 0);
        context.globalAlpha = backgroundAlpha(time);
        this.context.fillStyle = this.colors.fillColor;
        this.context.fillRect(0, 0, canvasSize, canvasSize);
        context.globalAlpha = foregroundAlpha(time);
        this.drawForeground(randomness(time));
        this.forceUpdate();
        const timeRemaining = endTime - time;
        const minPause = 150;
        const maxPause = 250;
        if (timeRemaining < minPause * 2) {
          // Don't try to split the remaining into two separate pauses.
          // At least one would be less than minPause.
          nextRedrawTime = endTime;
        } else {
          const firstPossibleRedrawTime = time + minPause;
          const lastPossibleRedrawTime = Math.min(endTime - minPause, time + maxPause);
          nextRedrawTime = firstPossibleRedrawTime + Math.random() * (lastPossibleRedrawTime - firstPossibleRedrawTime);
        }
        //console.log({ time, nextRedrawTime, diff: nextRedrawTime - time });
      }
      this.context.globalAlpha = 1;
    }
    this.#program(time);
  }

  /**
   * The currently active animation, if any.
   */
  #program: ((time: DOMHighResTimeStamp) => void) | undefined;

  /**
   * If isActive() returns true, this program will periodically
   * overwrite everything on the canvas.  If you draw something new
   * on the canvas it will be overwritten in the next animation frame.
   * 
   * If you want to draw on the canvas, wait for this to be false,
   * or call drawCompleted() to ensure it is false.
   * @returns `true` if an animation is currently in progress.
   */
  isActive() {
    return this.#program != undefined;
  }
  /**
   * Call this once per animation frame.
   * @param time Standard timestamp used by performance.now() and animation frames.
   */
  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#program?.(time);
  }

  /**
   * You might want to set the globalAlpha before calling this.
   * @param randomness How crazy to make it.
   */
  private drawForeground(randomness: number) {
    const roughCanvas = this.roughCanvas;
    const margin = Wall.margin;
    const width = Wall.canvasSize;
    const height = Wall.canvasSize;
    const options: Options = {
      stroke: this.colors.strokeColor,
      strokeWidth: 10,
      roughness: randomness,
      bowing: randomness,
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
  }
}

class BulletDrawer {
  private static readonly img = getById("bulletBig", HTMLImageElement);
  static isReady() {
    // These values are 0 if the image hasn't loaded yet, or if the image failed to load.
    return (this.img.naturalHeight > 0) && (this.img.naturalWidth > 0);
  }
  /**
   * If you draw `img` with a width of `w`, the center of the bullet hole will be `xCenterOffset * w` to the right of the center of `img`.
   */
  private static xCenterOffset = -2.5 / 120;
  /**
   * If you draw `img` with a height of `h`, the center of the bullet hole will be `yCenterOffset * h` below the center of `img`.
   */
  private static yCenterOffset = 10 / 120;
  /**
   * If you draw `img` with a width of `w` and a position of (`x`, `y`), the center of the bullet hole will be at `xCenter * w + x`.
   */
  private static xCenter = 0.5 + this.xCenterOffset;
  /**
   * If you draw `img` with a height of `h` and a position of (`x`, `y`), the center of the bullet hole will be at `yCenter * h + y`.
   */
  private static yCenter = 0.5 + this.yCenterOffset;
  /**
   * Draw a bullet hole.
   * @param context 
   * @param centerX Where to put the center of the bullet hole.
   * @param centerY Where to put the center of the bullet hole.
   * @param width How wide to make the image.  Note that the image includes some padding that is transparent.
   * @param aspectRatio How tall to make the image.  1 means to preserve the original aspect ration.  2 means to make the image
   * twice as wide / half as tall as the original.  0.5 means to make the image half as wide / twice as tall as the original. 
   */
  private static getHeight(width: number, aspectRatio: number) {
    const naturalHeight = this.img.naturalHeight;
    const naturalWidth = this.img.naturalWidth;
    return naturalHeight * (width / naturalWidth) / aspectRatio;
  }
  static draw(context: CanvasRenderingContext2D, centerX: number, centerY: number, width: number, aspectRatio: number) {
    // I experimented with setting context.globalAlpha to a value less than 1.
    // I also tried setting context.globalCompositeOperation to "luminosity".
    // These both showed the 3d shape of the image, but kept the color of the wall.
    // The idea was right, but after several attempts I deiced that the silvery look of the original image looked the best. 
    const x = centerX - BulletDrawer.xCenter * width;
    const height = this.getHeight(width, aspectRatio);
    const y = centerY - BulletDrawer.yCenter * height;
    context.drawImage(BulletDrawer.img, x, y, width, height);
  }
  /**
   * For debugging.  This takes the same input as draw(), but it draws a much simpler shape.
   * The center of the X corresponds to (centerX, centerY).
   * @param context 
   * @param centerX 
   * @param centerY 
   * @param width 
   * @param aspectRatio 
   * @param color
   */
  static drawLines(context: CanvasRenderingContext2D, centerX: number, centerY: number, width: number, aspectRatio: number, color = "#FF00FF") {
    context.save();
    context.lineWidth = 2.5;
    context.strokeStyle = color;
    const height = this.getHeight(width, aspectRatio);
    const top = centerY - height / 2;
    const bottom = centerY + height / 2;
    const left = centerX - width / 2;
    const right = centerX + width / 2;
    context.beginPath();
    context.moveTo(left, top);
    context.lineTo(right, bottom);
    context.moveTo(right, top);
    context.lineTo(left, bottom);
    context.stroke();
    context.restore();
  }
  private constructor() {
    throw new Error("wtf");
  }
}

class SolidWall extends Wall {
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

  #plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(boxSize, boxSize, 50, 50),
    new THREE.MeshPhongMaterial({
      map: this.texture
    })
  );
  #bumpEffect = new BumpEffect(this.#plane.material);
  #fightWordEffect: FightWordEffect;
  #ticTacToe: TicTacToe;
  #wallDrawer: WallDrawer;
  private constructor(private readonly info: WallInfo) {
    super()
    this.#ticTacToe = new TicTacToe(this.roughCanvas, this.info);
    info.init(this.#group);
    this.#fightWordEffect = new FightWordEffect(this.#group);
    scene.add(this.#group);
    this.canvas.width = Wall.canvasSize;
    this.canvas.height = Wall.canvasSize;
    this.#wallDrawer = new WallDrawer(this.context, this.roughCanvas, this.info, () => this.forceUpdate());
    this.#group.add(this.#plane);
    this.#plane.castShadow = true;
    this.#plane.receiveShadow = true;
  }

  highlightPoint(point: THREE.Vector3, time: DOMHighResTimeStamp) {
    const { x: groupX, y: groupY } = this.info.flatten(point);
    const canvasX = Wall.xToCanvas(groupX);
    const canvasY = Wall.yToCanvas(groupY);
    //this.makeWall();

    /**
     * Draw a small circle exactly where the ball hit.  This was
     * originally aimed at development and debugging.
     */
    const drawCircle = () => {
      this.roughCanvas.circle(canvasX, canvasY, Wall.canvasSize / 5, {
        stroke: this.info.strokeColor,
        strokeWidth: 10,
        roughness: 3,
      });
    };

    const cell = TicTacToe.findCell(canvasX, canvasY);
    const canDrawOnWalls = !this.#wallDrawer.isActive();

    type Action = "star" | "ttt" | "bump" | "words" | "wall" | "bullet";
    const actions = new WeightedRandom<Action>();

    if (canDrawOnWalls) {
      if (this.#ticTacToe.canAddMore()) {
        if (this.#ticTacToe.canAdd(cell)) {
          actions.add("ttt", 20);
        }
        actions.add("star", 2);
        actions.add("wall", 0.2);
        //actions.add("bullet", 0.4);
      } else {
        actions.add("star", 5);
        actions.add("wall", 1);
        //actions.add("bullet", 1);
      }
    }

    if (this.#fightWordEffect.canDraw() && !this.#bumpEffect.isActive()) {
      actions.add("words", 5);
    }

    // TODO The bump is often hard or impossible to see on the back wall.
    // I wish I knew the exact conditions when it would look good.
    // I would disable the bump when it looks bad, but give it a much higher priority when it looks good.
    //
    // That said, the bump is currently the only effect that can never be disabled.  (I.e. the bump is
    // the effect of last resort.)  If there is a  way to disable this, too, then some other logic needs to change.
    actions.add("bump", 5);

    const action = actions.pick();

    this.#fightWordEffect.end();
    switch (action) {
      case "bump": {
        this.#bumpEffect.start(time, canvasX, canvasY);
        break;
      }
      case "star": {
        this.drawStar(canvasX, canvasY, this.info.strokeColor);
        this.#ticTacToe.disable();
        break;
      }
      case "ttt": {
        this.#ticTacToe.add(cell);
        this.forceUpdate();
        break;
      }
      case "words": {
        this.#fightWordEffect.draw(groupX, groupY);
        break;
      }
      case "wall": {
        this.#wallDrawer.startAnimation(time);
        this.#ticTacToe.reset();
        break;
      }
      case "bullet": {
        BulletDrawer.draw(this.context, canvasX, canvasY, 200, 1);
        this.#ticTacToe.disable();
        break;
      }
    }
  }

  static readonly rear = new this({
    fillColor: "hsl(0, 100%, 25%)",//"#ff0000",
    strokeColor: "hsl(0, 100%, 66%)",//"#ff8080",
    flatten(input) {
      return new THREE.Vector2(input.x, input.y);
    },
    init(group) {
      group.position.z = boxMin;
    },
  });

  static readonly left = new this({
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

  static readonly right = new this({
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

  static readonly top = new this({
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

  static readonly bottom = new this({
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


  doAnimationFrame(time: DOMHighResTimeStamp) {
    this.#bumpEffect.doAnimationFrame(time);
    this.#wallDrawer.doAnimationFrame(time);
  }
}

const walls = {
  all: [SolidWall.top, SolidWall.bottom, SolidWall.left, SolidWall.right, SolidWall.rear, FrontWall.instance] as readonly Wall[],
  find(dimension: "x" | "y" | "z", position: number): Wall {
    if (position < 0) {
      if (dimension == "x") {
        return SolidWall.left;
      } else if (dimension == "y") {
        return SolidWall.bottom;
      } else {
        // dimension == "z"
        return SolidWall.rear;
      }
    } else {
      if (dimension == "x") {
        return SolidWall.right;
      } else if (dimension == "y") {
        return SolidWall.top;
      } else {
        // dimension == "z"
        return FrontWall.instance;
      }
    }
  }
} as const;

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

const ball = makeMarker();
let ballVelocity = {
  y: 0,
  x: 0,
  z: 0,
};

(window as any).phil = { rightLight, leftLight, scene, makeMarker, ball, FightWordEffect, SolidWall, BulletDrawer };

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
        walls.find(dimension, ballMin).highlightPoint(ball.position, time);
      } else if (newValue > ballMax) {
        newValue = ballMax;
        ballVelocity[dimension] = -Math.abs(ballVelocity[dimension]);
        walls.find(dimension, ballMax).highlightPoint(ball.position, time);
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
    dollyZoomInput.value.padStart(3, FIGURE_SPACE) + "??";
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

  walls.all.forEach(wall => wall.doAnimationFrame(time));

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
  // TODO what about ??0 ?
  const initialLength = Math.hypot(result.x, result.y, result.z);
  const factor = desiredLength / initialLength;
  result.x *= factor;
  result.y *= factor;
  result.z *= factor;
  return result;
}
