/**
Conditionals Experiment: part 4.
Olenka Yuen

Intermediate drawing.
*/



//PUSH + POP FUNCTIONS USED WHEN PREV CODE DON'T APPLY TO THE NEXT.

//FIRST EXAMPLE
// function setup() {
//   createCanvas (500, 500);
//
// }
//
// function draw() {
//   background (127);


  // push();
  // fill(255, 0, 0);
  // stroke(0, 255, 255);
  // strokeWeight(10);
  // rect(100, 100, 100, 100);
  // pop();
  //
  // push();
  // fill(0, 0, 255);
  // rect(300, 100, 100, 100);
  // pop();

//SECOND EXAMPLE.
  // push();
  // fill(255, 0, 0);
  // rect(0, 0, 100, 100);
  // pop();
  //
  // push();
  // translate(200, 100);
  // fill(0, 255, 0);
  // rect(0, 0, 100, 100);
  // pop();
  //
  // push();
  // translate(0, 200);
  // fill(0, 0, 255);
  // rect(0, 0, 100, 100);
  // pop();

//THIRD EXAMPLE.
let angle = 0;
let rectScale = 0;

function setup() {
  createCanvas (500, 500);

}

function draw() {
  background (127);


push();
fill(255, 0, 0);
rectMode(CENTER);
translate(width/2, height/2);
rotate(angle);
scale(rectScale);
rect(0, 0, 100, 100);
pop();

//2 x pi = full rotation.
angle = angle + 0.05;
rectScale += 0.01

}
