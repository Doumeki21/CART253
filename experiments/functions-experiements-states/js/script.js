/**
Functions
Olenka Yuen

Vid 5.5 states.
*/

"use strict";

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

let state = `title`; //Possible states are: title, animation, ending.


function setup() {
  createCanvas(500, 500);
  circle.vx = circle.speed;
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `animation`) {
    animation();
  }
  else if (state === `ending`) {
    ending();
  }
}


function title() {
  //Title.
  fill(255);
  text(`Life`, width/2, height/2);
}

function animation() {
  //Animation.
  circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.x > width) {
    state = `ending`;
  }

    ellipse(circle.x, circle.y, circle.size);
}

function ending() {
  //Ending.
  fill(127);
  text(`It's all over.`, width/2, height/2);
}

function keyPressed() {
  if (state === `title`){
    state = `animation`;
  }
}
