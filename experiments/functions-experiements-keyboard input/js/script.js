/**
Functions
Olenka Yuen

Vid 5.6: keyboard input
vid 5.7: automated movement
*/


let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);

let dx = circle.x - mouseX;
let dy = circle.y - mouseY;

if (dx < 0) {
  circle.vx = circle.speed;
}
else if(dx > 0) {
  circle.vx = -circle.speed;
}
else {
  circle.vx = 0;
}

if (dy < 0) {
  circle.vy = circle.speed;
}
else if(dy > 0) {
  circle.vy = -circle.speed;
}
else {
  circle.vy = 0;
}

circle.x += circle.vx;
circle.y += circle.vy;

ellipse(circle.x, circle.y, circle.size);
}
