let daisy;
let shapes = [];

function preload() {
  daisy = loadImage('images/img_daisy.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  for(let shape of shapes) {
    push();
    fill(shape.color)
    shape.y += 1;
    if(shape.shapeType === 'sqaure') {
      image(daisy, shape.x, shape.y, 100, 100);
    }
    if(shape.shapeType === 'ellipse') {
      ellipse(shape.x, shape.y, 150, 50);
    }
    if(shape.shapeType === 'arc') {
      arc(shape.x, shape.y, 100, 100, 0, PI + QUARTER_PI);
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
    x: mouseX,
    y: mouseY,
    color: random(['red','yellow', 'orange', 'green', 'blue', 'purple']),
    shapeType: random(['sqaure', 'ellipse', 'arc'])
  }
  shapes.push(shape1);
}