/**
Exercise: Dodge-em!
Olenka Yuen

Use the mouse to dodge the objects on screen!

PLAN:
.Mouse controls (mint) circle. With velocity and acceleration.
.If/ else statement// "make the enemy grow if it is close to the user and shrink (back to a minimum size) when it is further away"
* on mouseIsPressed, user displayCircle = false. (another way to dodge/ hide from enemy.) >> watch video 4.3 Booleans
.Change the way the simulation looks???
.Use at least 1 image.
*/

"use strict";

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 0,

  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  accelerate: 0.8,
  maxSpeed: 15,
};

let enemy1 = {
  x: 0,
  y: 250,

  currentSize: 100,
  minSize: 100,
  maxSize: 150,
  growthSpeed: 10,

  vx: 0,
  vy: 0,
  speed: 5,

  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let enemy2 = {
  x: 0,
  y: 250,

  currentSize: 50,
  minSize: 50,
  maxSize: 100,
  growthSpeed: 10,

  vx: 0,
  vy: 0,
  speed: 8,

  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let gameState = {
  minState: 0,
  maxState: 300,
};

let gameOverImage;

function preload() {
  gameOverImage = loadImage("assets/images/game-over.png");
}
/**
Setup game screen!
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
//enemy1
  enemy1.y = random(0, height);
  enemy1.vx = enemy1.speed;
//enemy2
  enemy2.y = random(0, height);
  enemy2.vx = enemy2.speed;
}


/**
Draw interactive characters!
*/
function draw() {
    background(0);

//ENEMY.
//Enemy1 movement.
enemy1.x += enemy1.vx;
enemy1.y += enemy1.vy

//Reset enemy1.
if (enemy1.x > width) {
  enemy1.x = 0;
  //enemy1.accelerate ++
  enemy1.y = random(0, height);
}

//User-enemy1 contact. (Game over screen.)
let d1 = dist(user.x, user.y, enemy1.x, enemy1.y);
if (d1 < enemy1.currentSize/2 + user.size/2) {
  imageMode(CENTER);
  image(gameOverImage, windowWidth/2, windowHeight/2);
  noLoop();
}

//Enemy1 Growth state.
if (d1 < gameState.maxState) {
  if (enemy1.currentSize < enemy1.maxSize){
  enemy1.currentSize += enemy1.growthSpeed;
}
}
else {
  if (enemy1.currentSize > enemy1.minSize){
    enemy1.currentSize -= enemy1.growthSpeed;
  }
}

//Enemy2 movement.
enemy2.x += enemy2.vx;
enemy2.y += enemy2.vy

//Reset enemy2.
if (enemy2.x > width) {
  enemy2.x = 0;
  //enemy2.accelerate ++
  enemy2.y = random(0, height);
}

//User-enemy2 contact. (Game over screen.)
let d2 = dist(user.x, user.y, enemy2.x, enemy2.y);
if (d2 < enemy2.currentSize/2 + user.size/2) {
  imageMode(CENTER);
  image(gameOverImage, windowWidth/2, windowHeight/2);
  noLoop();
}

//enemy2 Growth state.
if (d2 < gameState.maxState) {
  if (enemy2.currentSize < enemy2.maxSize){
  enemy2.currentSize += enemy2.growthSpeed;
}
}
else {
  if (enemy2.currentSize > enemy2.minSize){
    enemy2.currentSize -= enemy2.growthSpeed;
  }
}


//USER.
//User control.
// user.x = mouseX;
// user.y = mouseY;

// //User acceleration.
//X direction.
if (mouseX < user.x) {
  user.ax = -user.accelerate;
}
else {
  user.ax = user.accelerate;
}

//Y direction.
if (mouseY < user.y) {
  user.ay = -user.accelerate;
}
else {
  user.ay = user.accelerate;
}

//User velocity.
//Add acceleration to velocity!! + constrain velocity speed!!
user.vx = user.vx + user.ax;
user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
user.vy = user.vy + user.ay;
user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

//Add user velocity to position.
user.x = user.x + user.vx;
user.y = user.y + user.vy;

//Draw user.
fill(user.fill);
stroke(255);
ellipse(user.x, user.y, user.size);

// //Draw enemy1.
fill(enemy1.fill.r, enemy1.fill.g, enemy1.fill.b);
stroke(255, 0, 0);
ellipse(enemy1.x, enemy1.y, enemy1.currentSize);

// //Draw enemy2.
fill(enemy2.fill.r, enemy2.fill.g, enemy2.fill.b);
stroke(255, 0, 0);
ellipse(enemy2.x, enemy2.y, enemy2.currentSize);

}
