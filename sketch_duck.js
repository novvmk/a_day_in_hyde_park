let duck;

function preload() {
  duck = loadImage('images/img_duck.png');
}

let rad1 = 200;
let rad2 = 136;
let xpos;
let ypos;

let xspeed = 7;
let yspeed = 14;

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

  if (xpos > windowWidth - rad1 || xpos + rad1 < rad1) {
    xdirection *= -1;
  }
  if (ypos > windowHeight - rad2 || ypos + rad2 < rad2) {
    ydirection *= -1;
  }

  image(duck, xpos, ypos, rad1, rad2);
}
