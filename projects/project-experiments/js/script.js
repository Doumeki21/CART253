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

let monologue = [
  `I might fail.`,
  `...`,
  `failure is not an option.`,
];

let currentIndex = 0;
let timer;

function setup() {
  createCanvas(400, 400);
  timer = 3000;

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100);

if (millis() > timer) {
  text(monologue[currentIndex], width/2, height/2);
  timer += 3000;
  }
}
