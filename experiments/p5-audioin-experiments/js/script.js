/**
p5-sound Audio In
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let mic;
let ghost = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  image: undefined,
};

function preload() {
  ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
  createCanvas(600, 600);

  ghost.x = width / 2;
  ghost.y = height / 2;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  //tremble
  ghost.x += random(-1, 1);
  ghost.y += random(-1, 1);

  //volume in mic
  let level = mic.getLevel();
    // console.log(level);

  //Check scared ghost
  if (level > 0.2) {
    ghost.vx = 20;
  }



  //Movement
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  push();
  imageMode(CENTER);
  tint(255, 50);
  image(ghost.image, ghost.x, ghost.y)
  pop();

}
