let daisy;
let shapes = [];

function preload() {
  daisy = loadImage('images/img_daisy.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for(let shape of shapes) {
    push();
    shape.y += 1;
    if(shape.shapeType === 'sqaure') {
      image(daisy, shape.x, shape.y, 180, 180);
    }
    if(shape.shapeType === 'ellipse') {
      image(daisy, shape.x, shape.y, 110, 110);
    }
    if(shape.shapeType === 'arc') {
      image(daisy, shape.x, shape.y, 90, 90);
    }
    pop();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    let last = shapes.pop();
  } 
}

function mousePressed() {
  addAShape();
}

function addAShape() {
  shape1 = {
    x: mouseX -60,
    y: mouseY -60,
    shapeType: random(['sqaure', 'ellipse', 'arc'])
  }
  shapes.push(shape1);
}