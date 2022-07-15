let canvas;

let obj1;
let obj2;
let obj3;
let shrek;
let angle = 0;
let model_num = 0;
let size = 1;

let a;
let link_project = "uno.html";

let swipe;
let p_swipeX;
let c_swipeX;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  if(width>height){
    size=width/7;
  }else {
    size=height/7;
  }
}


function setup() {
  frameRate(50);
  pixelDensity(1);

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-100");

  obj1 = loadModel("obj/uno.obj");
  obj2 = loadModel("obj/due.obj");
  obj3 = loadModel("obj/tre.obj");
  shrek = loadModel("obj/shrek.obj");

  if(width>height){
    size=width/7;
  }else {
    size=height/7;
  }

createLink();

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
    scale(size);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(obj1);
    pop();

  }

  if (model_num == 1) {

    push();
    rectMode(CENTER);
    rotateZ(angle);
    rotateX(angle / 0.4);
    rotateY(angle / 2);
    scale(size);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(obj2);
    pop();

  }

  if (model_num == 2) {

    push();
    rectMode(CENTER);
    rotateZ(angle);
    rotateX(angle / 0.4);
    rotateY(angle / 2);
    scale(size);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(obj3);
    pop();

  }

  if (model_num == 3) {

    push();
    rectMode(CENTER);
    rotateZ(angle);
    rotateX(angle / 0.4);
    rotateY(angle / 2);
    scale(size);

    noStroke();

    ambientMaterial(0, 255, 0);
    model(shrek);
    pop();

  }


  angle += 0.005;


	if (swipe) {
    c_swipeX = p_swipeX - mouseX;
  }


}

function createLink(){
  a = createA(model_num+".html", "+");
  //a.position(width*0.5, height*0.9);
  a.style("fontSize","5em");
  a.style("color","yellow");
  a.style("z-index","+20");
  a.style("position", "absolute");
  a.style("left", "50%");
  a.style("top", "80%");
  a.style("transform", "translate(-50%, -50%)");
}


function touchStarted() {
  p_swipeX = mouseX;
}

function touchMoved() {
  swipe = true;
}

function touchEnded() {

	swipe = false;
  if (c_swipeX < 0 && abs(c_swipeX) > 50) {
    model_num++;
    a.remove();
  }
  if (c_swipeX > 0 && abs(c_swipeX) > 50) {
    model_num--;
    a.remove();
  }

	c_swipeX = 0;
	p_swipeX = 0;

  if (model_num > 3) {
    model_num = 0;
  }

  if (model_num < 0) {
    model_num = 3;
  }

  createLink();

}

function mousePressed() {
  p_swipeX = mouseX;
}

function mouseDragged() {
  swipe = true;
}

function mouseReleased() {

	swipe = false;
  if (c_swipeX > 0 && abs(c_swipeX) > 100) {
    model_num++;
      a.remove();
  }
  if (c_swipeX < 0 && abs(c_swipeX) > 100) {
    model_num--;
      a.remove();
  }

	c_swipeX = 0;
	p_swipeX = 0;

  if (model_num > 3) {
    model_num = 0;
  }

  if (model_num < 0) {
    model_num = 3;
  }


  createLink();

}
