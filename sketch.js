let images = [];
let numImages = 6;
let yPos = [];
let speed = [];
let gravity = 0.5;
let bounceFactor = 0.8;
let targetYPos = [];
let state = [];

function preload() {
  for (let i = 1; i <= numImages; i++) {
    images.push(loadImage(`images/object${i}.png`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numImages; i++) {
    yPos[i] = random(-height, -500);
    speed[i] = random(3, 6);
    targetYPos[i] = random(height * 0.2, height * 0.8);
    state[i] = 0;
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < numImages; i++) {
    let img = images[i];
    let imgWidth = width / 2;
    let imgHeight = img.height * (imgWidth / img.width);
    
    if (state[i] === 0) {
      // Object falling
      yPos[i] += speed[i];
      
      if (yPos[i] >= targetYPos[i]) {
        yPos[i] = targetYPos[i];
        speed[i] *= -bounceFactor;
        state[i] = 1;
      }
    } else if (state[i] === 1) {
      // Object bouncing
      speed[i] += gravity;
      yPos[i] += speed[i];
      
      if (yPos[i] >= height - 500) {
        yPos[i] = height - 500;
        speed[i] = 0;
        state[i] = 2;
      }
    } else if (state[i] === 2) {
      // Object stopped
      yPos[i] = lerp(yPos[i], -500, 0.05);
      
      if (yPos[i] <= -500) {
        yPos[i] = -500;
        state[i] = 0;
        targetYPos[i] = random(height * 0.2, height * 0.8);
      }
    }
    
    image(img, width / 5 - imgWidth / 5, yPos[i], imgWidth, imgHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
