"use strict";
let barBase = {
  x: undefined,
  y: undefined,
  width: 20,
  height: 100,
}

let progressBar = {
  x: undefined,
  y: undefined,
  width: 20,
  height: 20,
}

let user = {
  x: undefined,
  y: undefined,
  width: 50,
  height: 30,
}

let ball = {
  x: undefined,
  y: 0,
  vy: 8,
  size: 50,
  active: true,
}

function setup() {
  createCanvas(800, 800);

  user.x = width / 2;
  user.y = height;

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
  background(0);

  //Ball goes down
  ball.y += ball.vy;


  //user grows taller// check all 4 sides
  if (ball.x + ball.size / 2 > user.x - user.width / 2 && ball.x - ball.size / 2 < user.x + user.width && ball.y + ball.size / 2 > user.y - user.height / 2 && ball.y - ball.size / 2 < user.y + user.height / 2) {
    user.height += ball.size * 3;
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

if (user.y - user.height/2 < 50 ) {
  //VARIABLE user.initialheight
  user.height = 30;
}

  //target
  push();
  fill(255);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //User
  user.x = mouseX;
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(user.x, user.y, user.width, user.height);
  pop();

//MAKE LINE VARIABLE
  line(0, 50, width, 50);
  stroke(0, 255, 0);

  //meter
  push();
  noStroke();
  fill(212, 212, 212);
  rectMode(CENTER);
  rect(barBase.x, barBase.y - barBase.height/2, barBase.width, barBase.height);
  pop();

  //progressBar
  push();
  noStroke();
  fill(0, 255, 0);
  rectMode(CENTER);
  rect(progressBar.x, progressBar.y - progressBar.height/2, progressBar.width, progressBar.height);
  pop();


}
