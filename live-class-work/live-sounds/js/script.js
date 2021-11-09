/**
live: sounds
Author Name

- sounds of triangle, specific notes
-tips and tricks creating sounds.
- pausing simulation
*/

"use strict";

let barkSFX = undefined;
let currentRate = 1;
let rateChange = 0.1;

let synth = undefined;


function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
createCanvas(500, 500);

synth = new p5.MonoSynth();
}

function draw() {
background(0);
}

function mousePressed() {
  // barkSFX.rate(currentRate);
  // barkSFX.play(0);
synth.attack = 0;
synth.decay = 1;
  synth.play(`C7`, 0.5, 0, 1);
}

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//       currentRate += rateChange;
//   }
//   if (keyCode === DOWN_ARROW) {
//     currentRate -= rateChange;
//   }
// }
