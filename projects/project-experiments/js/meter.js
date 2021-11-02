/**
P1: Indecision
Olenka Yuen

Objectives
  -Handling different forms of user input
  -Organizing code with functions
  *Making things interesting with conditionals and variables
  *Combining aesthetics, interaction and concept

Brief
  -(Personal) Metaphorical simulation. // Mental health??

Requirements
  -At least two moving elements
  -Interactivity
  *Aesthetic, conceptual, and procedural harmony (visual, sound, and user-input should work harmoniously!)
  *Beginning, middle, and end!

Advice
  *START SMALL
  *ATOM BEAUTIFY
*/

"use strict";

// let monologue = [
//   `I might fail.`,
//   `...`,
//   `failure is not an option.`,
// ];
//
// let currentIndex = 0;
// let timer;
//
// function setup() {
//   createCanvas(400, 400);
//   timer = 3000;
//
//   fill(255);
//   textSize(32);
//   textAlign(CENTER, CENTER);
// }
//
// function draw() {
//   background(100);
//
//   text(monologue[currentIndex], width/2, height/2);
//
// if (millis() > timer) {
//   timer += timer;
//   currentIndex ++;
//   }
// }

let meter = {
  x: 300,
  y: 300,
  size: 300,
}

let target = {
  size: 50,
  angle: undefined,
};

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //or random(0, TWO_PI);
  target.angle = random(0, 360);
}

function draw() {
  background(0);

  //White stroke
  strokeWeight(20);
  stroke(255);
  noFill()
  ellipse(meter.x, meter.y, meter.size);

  //red stroke/ meterBar
  strokeWeight(10);
  stroke(255, 100, 100);
  let end = map(mouseX, 0, width, 0, 360);
  arc(300, 300, 300, 300, 0, end);

  //target
  push();
  fill(0, 255, 0, 155);
  noStroke();
  translate(meter.x, meter.y);
  rotate(target.angle);
  ellipse(meter.size / 2, 0, target.size);
  pop();

  // //CLOCK
  //   let hr = hour();
  //   let min = minute();
  //   let sec = second();
  //
  //   fill(255);
  //   noStroke();
  //   textSize(32);
  //   text(hr + `:` + min + `:` + sec, 10, 200);
}
