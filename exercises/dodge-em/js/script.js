/**
Exercise: Dodge-em!
Olenka Yuen

Use the mouse to dodge the objects on screen!

PLAN:
.Mouse controls mint circle. (with velocity and acceleration.)
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
  maxSpeed: 8,

};

let enemy = {
  x: 0,
  y: 250,
  size: 100,

  vx: 0,
  vy: 0,
  speed: 5,

  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  enemy.y = random(0, height);
  enemy.vx = enemy.speed;
}


/**
Description of draw()
*/
function draw() {
    background(0);

//ENEMY.
//Enemy movement.
enemy.x += enemy.vx;
enemy.y += enemy.vy

//Reset enemy.
if (enemy.x > width) {
  enemy.x = 0;
  //enemy.accelerate ++
  enemy.y = random(0, height);
}

//User-enemy contact.
let d = dist(user.x, user.y, enemy.x, enemy.y);
if (d < enemy.size/2 + user.size/2) {
  noLoop();
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

// //Draw enemy.
fill(enemy.fill.r, enemy.fill.g, enemy.fill.b);
noStroke();
ellipse(enemy.x, enemy.y, enemy.size);

}
