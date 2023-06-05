let swan;
let swans = [];

function preload() {
  swan = loadImage('images/img_swan.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (var i = 0; i < 23; i++) {
    var x = random(width);
    var y = random(height);
    var speed = random(-1, -0.2);
  	swans[i] = new newSwan(x, y, speed);
  }

}

function draw() {
  background(255);
  
  
  for (var i = 0; i < swans.length; i++) {
  	swans[i].move();
    swans[i].display();
  }
    if (swans.length > 10) {
  	swans.shift();
  }
  
}

function newSwan(x, y, speed) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.speed = speed;
}

newSwan.prototype = {
  constructor: newSwan,
  display: function() {
    image(swan, this.xPos, this.yPos, 480, 339);
  },
  
  move: function() {
    // move down
	this.xPos += this.speed;
    // repositon outside of canvas
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
  }
}

