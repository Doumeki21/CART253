/**
Exercise: Dodge-em!
Olenka Yuen

Use the mouse to dodge the objects on screen!

PLAN:
.Mouse controls mint circle. (with velocity and acceleration.)
*Mouse drag (scroll) = colors.
."make the COVID-19 circle grow if it is close to the user and shrink (back to a minimum size) when it is further away"
.Change the way the simulation looks.
.Use at least 1 image.
*/

"use strict";

let user = {
  x: 0,
  y: 250,
  size: 50,
  fill: 0,

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

//Enemy movement.
if (enemy.x > width) {
  enemy.x = 0;
  enemy.accelerate ++
  enemy.y = random(0, height);
}



  //User.
  user.x = mouseX;
  user.y = mouseY;
  //Draw user.
  fill(user.fill);
  stroke(255);
  ellipse(user.x, user.y, user.size);


}
