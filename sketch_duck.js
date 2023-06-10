let duck;

function preload() {
  duck = loadImage('img_duck.png');
}

let rad1 = 200;
let rad2 = 136;
let xpos;
let ypos;

let xspeed = 2;
let yspeed = 2;

let xdirection = 1;
let ydirection = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xpos = windowWidth / 2;
  ypos = windowHeight / 2;
}

function draw() {
  background(255);

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > width - rad1 || xpos < rad1) {
    xdirection *= -1;
  }
  if (ypos > height - rad2 || ypos < rad2) {
    ydirection *= -1;
  }

  image(duck, xpos, ypos, rad1, rad2);
}
