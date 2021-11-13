/**
p5-sound
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//10.1
// let barkSFX;
//
// function preload() {
//   barkSFX = loadSound(`assets/sounds/bark.wav`);
//
// }
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
// }
//
// function draw() {
//   background(0);
//
// //Use rate for raising pitch of progress bar for p2!
//   let newRate = map(mouseX, 0, width, -3, 3);
//   barkSFX.rate(newRate);
// }
//
// function mouseClicked() {
//   barkSFX.loop();
// }


//10.2

let oscillator;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  oscillator = new p5.Oscillator(200, `sine`);
  oscillator.amp(1.0);
}

function draw() {
  background(0);

// //fluctation
//   let newFreq = map(mouseY, height, 0, 0, 800);
//   oscillator.freq(newFreq);
//
// //volume
//   let newAmp = map(mouseX, 0, width, 0, 1);
//   oscillator.amp(newAmp);

//Alien sound?
let sinAngle = sin(angle); //tan(angle) is like backwards, jumping quick high to low?
let newFreq = map(sinAngle, -1, 1, 0, 2000); //440, 800
oscillator.freq(newFreq);

angle += 0.2; //0.2

//fast alien sounds?
let r = random(0,1);

//Visualize sound!
// push();
// textSize(32);
// textAlign(LEFT, CENTER);
// fill(255);
// text(newFreq, 100, height/2);
// pop();
}

function mousePressed() {
  oscillator.start();
}

function mouseReleased() {
  oscillator.stop();
}
