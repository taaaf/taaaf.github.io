let cube;
let angle=0;
let canvas;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight, WEBGL);
	//canvas.position(windowWidth/2 - 200, windowHeight/2 -200);

}


function setup() {
	frameRate(60);
	pixelDensity(1);

	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	//canvas.position(windowWidth/2 - 200, windowHeight/2 -200);
	canvas.style("z-index", "-1");

	cube = loadModel("obj/cube.obj");
}

function draw() {
	background(0);

	directionalLight(255,255,255, 0,0,-1);

	rectMode(CENTER);
	rotateZ(angle);
	rotateX(angle/0.4);
	rotateY(angle/2);
	scale(100);

	noStroke();

	ambientMaterial(0,255,0);
	model(cube);

	angle += 0.01;

}
