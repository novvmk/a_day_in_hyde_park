let objectImage;
let objectX;
let objectY;
let gravity = 0.5;

function preload() {
  objectImage = loadImage("images/object.png");
}

function setup() {
  createCanvas(windowwidth, windowheight);
  objectX = width / 2;
  objectY = 0;
}

function draw() {
  background(220);
  
  // Update object's position
  objectY += gravity;
  
  // Draw the object image at its current position
  image(objectImage, objectX, objectY);
}
