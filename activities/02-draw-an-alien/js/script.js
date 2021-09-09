"use strict";

/**************************************************
Activity 02: Draw An Alien
Olenka Yuen

Drawing an alien using p5.js functions and color.
**************************************************/

// setup()
//
// Draws an alien.
function setup() {
createCanvas(640, 480);

background(255, 189, 179);
noStroke();

//Body
fill(171, 166, 166);
ellipse(320, 480, 300, 200);

//Head
fill(125, 121, 121);
ellipse(320, 240, 250, 400);

//Eyes
fill(0);
ellipse(250, 250, 80, 200);
ellipse(390, 250, 80, 200);

//Nostrils
ellipse(300, 340, 20, 20);
ellipse(340, 340, 20, 20);

//Mouth
strokeWeight(5);
rectMode(CENTER);
stroke(117, 42, 42);
rect(320, 380, 120, 20);
}

// draw()
//
// Does nothing.
function draw() {

}
