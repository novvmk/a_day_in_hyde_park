let objectImages = [];
let objects = [];
let gravity = 0.5;
let bounceReduction = 0.95;

function preload() {
  for (let i = 1; i <= 6; i++) {
    let imageName = "images/object" + i + ".png";
    objectImages.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 6; i++) {
    let x = random(width); // Random horizontal position
    let y = random(-1000, -100); // Random starting position above the canvas
    let size = width / 2; // Image size based on half width of the canvas
    let speed = 0; // Initial speed
    
    // Create an object with image, position, speed, and bounce properties
    let object = new Ball(x, y, size, speed);
    object.image = objectImages[i];
    
    objects.push(object);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];
    
    object.update();
    
    // Check if the object has reached 90% of the window height
    if (object.y >= 0.9 * height) {
      object.speed *= -bounceReduction;
    }
    
    // Draw the object image at its current position with half width and auto height
    let imageSize = width / 5;
    let imageHeight = object.image.height * (imageSize / object.image.width);
    image(object.image, object.x, object.y, imageSize, imageHeight);
  }
}

function Ball(tempX, tempY, tempW, tempSpeed) {
  this.x = tempX;  // x location of square 
  this.y = tempY;  // y location of square 
  this.w = tempW;  // size
  this.speed = tempSpeed;  // speed

  this.update = function() {
    // Add speed to location
    this.y = this.y + this.speed; 

    // Add gravity to speed
    this.speed = this.speed + gravity; 

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height) { 
      this.speed = this.speed * -bounceReduction;  
    } 
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
