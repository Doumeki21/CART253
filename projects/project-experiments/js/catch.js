"use strict";
let barBase = {
  x: undefined,
  y: undefined,
  width: 40,
  height: 200,
}

let progressBar = {
  x: undefined,
  y: undefined,
  width: 30,
  height: 20,
}

let user = {
  x: undefined,
  y: undefined,
  width: 50,
  initialHeight: 30,
  currentHeight: undefined,
}

let ball = {
  x: undefined,
  y: 0,
  vy: 8,
  size: 50,
  active: true,
}

let goal = {
  x: 0,
  y: 50,
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  user.x = width / 2;
  user.y = height;
  user.currentHeight = user.initialHeight;

  barBase.x = width - 30;
  barBase.y = height - 50;

  progressBar.x = width - 30;
  progressBar.y = height - 50;

  resetBall();
}

function resetBall() {
  ball.x = random(5, width - 30);
  ball.y = 0;
  ball.active = true;
}

function draw() {
  background(0, 0, 50);

  //Ball goes down
  ball.y += ball.vy;
  //user is moved with mouse.
  user.x = mouseX;


  //user grows taller// check all 4 sides
  if (ball.x + ball.size / 2 > user.x - user.width / 2 && ball.x - ball.size / 2 < user.x + user.width && ball.y + ball.size / 2 > user.y - user.currentHeight / 2 && ball.y - ball.size / 2 < user.y + user.currentHeight / 2) {
    user.currentHeight += ball.size * 3;
    ball.active = false;
  }

  //Ball disappears when it goes over the bottom edge.
  if (ball.y > height) {
    ball.active = false;
  }
  //Ball regenerates after it disappears.
  if (!ball.active) {
    resetBall();
  }
//When user touches goal
  if (user.y - user.currentHeight / 2 < goal.y) {
    user.currentHeight = user.initialHeight;
  }

  //target
  push();
  fill(64, 123, 167);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //User
  push();
  fill(253, 255, 255);
  noStroke();
  rectMode(CENTER);
  rect(user.x, user.y, user.width, user.currentHeight);
  pop();

  //meter
  push();
  noStroke();
  fill(128, 0, 22);
  rectMode(CENTER);
  rect(barBase.x, barBase.y - barBase.height / 2, barBase.width, barBase.height);
  pop();

  //progressBar
  push();
  noStroke();
  fill(255, 0, 43);
  rectMode(CENTER);
  rect(progressBar.x, progressBar.y - progressBar.height / 2, progressBar.width, progressBar.height);
  pop();

  //Goal
  stroke(255);
  strokeWeight(2);
  line(goal.x, goal.y, width, goal.y);

}
