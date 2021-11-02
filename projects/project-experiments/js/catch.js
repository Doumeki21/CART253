"use strict";

let user = {
  x: undefined,
  y: undefined,
  width: 100,
  height: 20,
}

function setup() {
  createCanvas(800, 800);

   user.x = width/2;
   user.y = height - 30;
}

function draw() {
  background(0);

  user.x = mouseX;
  rectMode(CENTER);
  rect(user.x, user.y, user.width, user.height);
}
