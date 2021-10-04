/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: bring the 2 circles together!

PLAN:
*title screen. (Parellel Worlds: The fate that brings us together.)
.2 lost circles.
.Search for the lost one using the keyboard arrows!
*Once the circles touch- new random position for each circle.
*Add a score count?

REQUIREMENTS:
*Own if statemetnts
*working with loops for drawing.
-User control circle.
-Non-user circle move differently.
*extra function
*extra ending.
*/

"use strict";

let user = {
  x: 250,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 5,
};

let lover = {
  x: 250,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 6,
};

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  //Checkmate function
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width/2, height/2);
  pop();

  //Move user.
  //function handleInput() {
    //User control horizontol axis.
    if (keyIsDown(LEFT_ARROW)) {
      user.vx = -user.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      user.vx = user.speed;
    }
    else {
      user.vx = 0;
    }
    //User control vertical axis.
    if (keyIsDown(UP_ARROW)) {
      user.vy = -user.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      user.vy = user.speed;
    }
    else {
      user.vy = 0;
    }

  //function move() {
    //User movement.
    user.x += user.vx;
    user.y += user.vy;

    //Lover movement.
    lover.x += lover.vx;
    lover.x = constrain(lover.x, 0, width);
    lover.y += lover.vy;
    lover.y = constrain(lover.y, 0, height);
    //Lover jitter
    let change = random();
    if (change < 0.1) {
      lover.vx = random(-lover.speed, lover.speed);
      lover.vy = random(-lover.speed, lover.speed);
    }
  //}

  //Check if circles overlap.
  let d = dist(user.x, user.y, lover.x, lover.y)
  if (d < user.size/2 + lover.size/2) {
    //LOVE ENDING.
    state = `checkmate`;
  }


  //function display() {
    //Display circles.
    ellipse(user.x, user.y, user.size);
    ellipse(lover.x, lover.y, lover.size);
  //}


}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
