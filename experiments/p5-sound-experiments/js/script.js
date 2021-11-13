/**
p5-sound
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);

}


function setup() {
  createCanvas(600, 600);
  userStartAudio();
}


function draw() {
  background(0);

  let newRate = map(mouseX, 0, width, -3, 3);
  barkSFX.rate(newRate);
}

function mouseClicked() {
  barkSFX.loop();
}
