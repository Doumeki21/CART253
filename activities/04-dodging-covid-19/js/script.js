/**
Activity 04: Dodging Covid-19
Olenka Yuen

A Covid-19 simulation!

PLAN:
.A COVID circle moves across the screen, starting at random y.
.The COVID circle moves back to the left once it touches the right side.
.User circle at mouse location.
. If the 2 circles overlap, program stops.
."Display random static in the background for a visual flourish."
."Hide the mouse cursor."
*/

"use strict";


let covid19 = {
  x: 0,
  y: 250,
  size: 100,

  vx: 0,
  vy: 0,
  speed: 5,

  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let user = {
  size: 100,
  startFill: 255,
  endFill: {
    r: 55,
    g: 252,
    b:0,
  },
}

let numStatic = 1000;


/**
Canvas setup.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

  //noCursor();
}


/**
Description of draw()
*/
function draw() {
background(0);

//Display static.
for (let i = 0; i < numStatic; i++) {
  let x = random(0, width);
  let y = random(0, height);
  stroke(255);
  point(x, y);
}

//Standard movement code (covid19).
covid19.x += covid19.vx;
covid19.y += covid19.vy;

//Reset covid-19.
if (covid19.x > width) {
  covid19.x = 0;
  covid19.y = random(0, height);
}

//Catching covid-19
let d = dist(user.x, user.y, covid19.x, covid19.y);
if (d < covid19.size/2 + user.size/2){
  noLoop();
}

if (d < covid19.size/2 + user.size/2){
  user.startFill = user.endFill;
}

//User movement.
user.x = mouseX;
user.y = mouseY;
//Draw user.
fill(user.startFill);
ellipse(user.x, user.y, user.size);

//Draw Covid 19.
fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
noStroke();
ellipse(covid19.x, covid19.y, covid19.size);


}
