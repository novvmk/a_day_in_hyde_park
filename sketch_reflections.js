function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(255);
  scale(-1, 1);
  image(capture, -width, 0, windowWidth, windowHeight);
  filter(POSTERIZE, 20);
  filter(GRAY);
  tint(255, 20);  
}