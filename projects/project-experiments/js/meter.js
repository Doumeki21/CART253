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

let meterBar = {
  x: 300,
  y: 300,
  width: 300,
  height: 300,
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
  background(0, 0, 70);

  //White stroke
  strokeWeight(20);
  stroke(255);
  noFill()
  ellipse(meter.x, meter.y, meter.size);

  //red stroke/ meterBar
  push();
  strokeWeight(10);
  stroke(255, 0, 43);
  let mouseEnd = map(mouseX, 0, width, 0, 360);
  arc(meterBar.x, meterBar.y, meterBar.width, meterBar.height, 0, mouseEnd);
  pop();

  //target
  push();
  fill(255, 0, 43, 155);
  noStroke();
  //translate the initital point to the center of the meter.
  translate(meter.x, meter.y);
  //rotate function goes around a default/ origin (which s usually top left corner or 0,0) point.
  rotate(target.angle);
  //target draws on the radius of the meter.
  ellipse(meter.size / 2, 0, target.size);
  pop();

  if (mouseEnd > target.angle - 10 && mouseEnd < target.angle + 10) {
    target.angle = random(0, 360);
  }

  //text
  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`<< MOVE >>`, width/2, height - 30);
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
