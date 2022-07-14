let canvas;

let cube;
let cone;
let torus;
let angle = 0;
let model_num = 0;

let swipe;
let p_swipeX;
let c_swipeX;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}


function setup() {
  frameRate(60);
  pixelDensity(1);

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-100");

  cube = loadModel("obj/cube.obj");
  cone = loadModel("obj/cone.obj");
  torus = loadModel("obj/torus.obj");

}

function draw() {
  background(0);

  directionalLight(255, 255, 255, 0, 0, -1);


  if (model_num == 0) {

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

  }

  if (model_num == 1) {

    push();
    rectMode(CENTER);
    rotateZ(angle);
    rotateX(angle / 0.4);
    rotateY(angle / 2);
    scale(100);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(cone);
    pop();

  }

	if (model_num == 2) {

    push();
    rectMode(CENTER);
    rotateZ(angle);
    rotateX(angle / 0.4);
    rotateY(angle / 2);
    scale(100);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(torus);
    pop();

  }


  if (model_num >= 3) {
    model_num = 0;
  }

	if (model_num < 0) {
    model_num = 2;
  }

  angle += 0.01;


  if (frameRate() < 50) {
    background(255, 255, 0);
  }

if (swipe) {
	c_swipeX = mouseX;
}

//console.log(p_swipeX + "  -  "+ c_swipeX);

console.log(model_num);

}


function touchStarted() {
  p_swipeX = mouseX;
}

function touchMoved() {
  swipe = true;
}

function touchEnded() {

  swipe = false;
	if (c_swipeX>p_swipeX) {
		model_num++;
	}else {
		model_num--;
	}

}

function mousePressed(){
p_swipeX = mouseX;

}

function mouseDragged() {
  swipe = true;
}

function mouseReleased() {

	  swipe = false;
		if (c_swipeX>p_swipeX) {
			model_num++;
		}else {
			model_num--;
		}
}
