let objectImages = [];
let objects = [];
let gravity = 0.5;

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
    let y = random(-200, -100); // Random starting position above the canvas
    let velocity = random(1, 3); // Random falling velocity
    
    // Create an object with image, position, velocity, and bounce flag
    let object = {
      image: objectImages[i],
      x: x,
      y: y,
      velocity: velocity,
      isBouncing: false
    };
    
    objects.push(object);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];
    
    // Update object's position
    object.y += object.velocity;
    
    // Check if the object has reached the bottom
    if (object.y >= height - 500) {
      // If not bouncing, reverse its velocity and set bouncing flag
      if (!object.isBouncing) {
        object.velocity *= -1;
        object.isBouncing = true;
      }
    }
    
    // Apply gravity if not bouncing
    if (!object.isBouncing) {
      object.velocity += gravity;
    }
    
    // Draw the object image at its current position with half width and auto height
    let imageSize = width / 2;
    let imageHeight = object.image.height * (imageSize / object.image.width);
    image(object.image, object.x, object.y, imageSize, imageHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
