let canvas;

let cube;
let angle = 0;

let swipe;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}


function setup() {
  frameRate(60);
  pixelDensity(1);

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.position(0,0);
  canvas.style("z-index", "-100");

  cube = loadModel("obj/cube.obj");


}

function draw() {
  background(0);

  directionalLight(255, 255, 255, 0, 0, -1);
  push();
  rectMode(CENTER);
  rotateZ(angle);
  rotateX(angle / 0.4);
  rotateY(angle / 2);
  scale(100);

  noStroke();

  ambientMaterial(0, 255, 0);
  model(cube);
  pop();

  angle += 0.01;

if (frameRate()<50) {
	background(255,255,0);
}

if(swipe){
	background(255,0,0);
	swipe = false;
}

}


function touchMoved() {
	swipe=true;
}

function mouseDragged(){
	swipe=true;
}
