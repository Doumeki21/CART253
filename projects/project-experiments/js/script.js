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

let targets = [];
let numTargets = 1;
let target = {
  x: 0,
  y: 0,
  size: 50,
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  for (let i = 0; i < numTargets; i++) {
     target.x = random(0, 360);
     target.y = random(0, 360);
    targets.push(target);
  }
}

function draw() {
  background(0);

  let hr = hour();
  let min = minute();
  let sec = second();

//White stroke
  strokeWeight(20);
  stroke(255);
  noFill()
  ellipse(300, 300, 300);

//red stroke
  strokeWeight(10);
  stroke(255, 100, 100);
  let end = map(mouseX, 0, width, 0, 360);
  arc(300, 300, 300, 300, 0, end);

//target
  fill(0, 255, 0);
  noStroke();
  ellipse(target.x, target.y, target.size);

  // fill(255);
  // noStroke();
  // textSize(32);
  // text(hr + `:` + min + `:` + sec, 10, 200);
}
