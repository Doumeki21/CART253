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

  text(monologue[currentIndex], width/2, height/2);

if (millis() > timer) {
  timer += timer;
  currentIndex ++;
  }
}

// //Canvas change sizes and dimensions at some point of the game.
// //Canvas shrinks height from line 8 to line 13.
// function canvasChange() {
//   if (currentIndex >= 7 && currentIndex < 11) {
//     //Window height decreases-
//     currentWindow.y -= 1;
//     //Until it reaches to half the window's original height.
//     currentWindow.y = constrain(currentWindow.y, windowHeight / 2, windowHeight);
//     resizeCanvas(windowWidth, currentWindow.y);
//     //Bottom user is moved proportionally to the current window size.
//     rectBottom.y = currentWindow.y - 30;
//   } else if (currentIndex >= 11 && currentIndex < 13) {
//     //Window height increases to initial height while window width decreases-
//     currentWindow.y += 2;
//     currentWindow.x -= 2;
//     //Until it reaches to half the window width.
//     currentWindow.y = constrain(currentWindow.y, windowHeight / 2, windowHeight);
//     currentWindow.x = constrain(currentWindow.x, windowWidth / 3, windowWidth);
//     resizeCanvas(currentWindow.x, currentWindow.y);
//     //Bottom user is moved proportionally to the current window size.
//     rectBottom.y = currentWindow.y - 30;
//   }
//   //Canvas shrinks into thirds of the screen from line 13 until the last line.
//   else if (currentIndex >= 13) {
//     //Diemnsions of the canvas shrinks by 1 every frame-
//     currentWindow.y -= 1;
//     currentWindow.x -= 1;
//     //Until it reaches to a third of the window's original dimensions.
//     currentWindow.y = constrain(currentWindow.y, windowHeight / 3, windowHeight);
//     currentWindow.x = constrain(currentWindow.x, windowWidth / 3, windowWidth);
//     resizeCanvas(currentWindow.x, currentWindow.y);
//     //Bottom user is moved proportionally to the current window size.
//     rectBottom.y = currentWindow.y - 30;
//   }
//   //Else canvas returns to the window max size.
//   else {
//     resizeCanvas(windowWidth, windowHeight);
//   }
// }
