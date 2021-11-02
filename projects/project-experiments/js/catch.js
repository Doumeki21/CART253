"use strict";

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
  size: 20,
}

function setup() {
  createCanvas(800, 800);

  ball.x = random(5, width - 30);

  user.x = width / 2;
  user.y = height - 30;

  line()
}

function draw() {
  background(0);

  //Ball goes down
  ball.y += ball.vy;


//user grows taller
  if (ball.y + ball.size / 2 > user.height - user.size / 2) {
    user.height += ball.size / 2;
  }

  //target
  ellipse(ball.x, ball.y, ball.size);

  //User
  user.x = mouseX;
  rectMode(CENTER);
  rect(user.x, user.y, user.width, user.height);
}
