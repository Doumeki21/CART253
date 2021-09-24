/**
Drawing experiments
Olenka Yuen

Experimenting with p5's drawing and color functions.
Drew a 3D cone hole.
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
setup()
Draws a cone on the canvas.
*/
function setup() {
createCanvas(500, 500);

//Set background to red-orange.
background(255, 125, 0);

ellipseMode(CORNER);
noStroke(0, 125, 125);

//Biggest ellipse at the bottom to the smallest ellipse at the top.
fill(200, 0 , 125, 100);
ellipse(250, 100, 100, 100);

fill(200, 0 , 125, 100);
ellipse(250, 100, 80, 80);

fill(200, 0 , 125, 100);
ellipse(250, 100, 60, 60);

fill(200, 0 , 125, 100);
ellipse(250, 100, 40, 40);

//A line leading from the upper left corner to lower right corner.
line(0, 0, 500, 200);
//A line leading from the upper right corner to lower left corner.
line(500, 0, 0, 200);

}


/**
Does nothing.
*/
function draw() {

}
