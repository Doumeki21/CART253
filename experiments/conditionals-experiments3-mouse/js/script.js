/**
Conditionals Experiment: part 3.
Olenka Yuen

Mouse input.
Movement.
*/



//1. MOUSE INPUT.
// let bg = {
//   r: 0,
//   g: 0,
//   b: 0,
// };
//
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
// };
//
//
// function setup() {
//   createCanvas(500, 500);
//
// }
//
//
// function draw() {
//   background(bg.r, bg.g, bg.b);
//
//   ellipse(circle.x, circle.y, circle.size);
// }
//
//
// function mouseWheel() {
//   bg.r = random (0, 255);
//   bg.g = random (0, 255);
//   bg.b = random (0, 255);
// }

//2. MOVEMENT.
let circle = {
  x: 250,
  y: 250,
  size: 100,
  //velocity = direction motion.
  vx: 0,
  vy: 0,
  //Accel. changes velocity every frame.
  ax: 0,
  ay: 0,
  accelerate: 0.5,
  maxSpeed: 5,
};

function setup() {
  createCanvas (windowWidth, windowHeight);

}

function draw() {
  background(0);

//X direction.
  if (mouseX < circle.x) {
    circle.ax = -circle.accelerate;
  }
  else {
    circle.ax = circle.accelerate;
  }

//Y direction.
  if (mouseY < circle.y) {
    circle.ay = -circle.accelerate;
  }
  else {
    circle.ay = circle.accelerate;
  }

//Add accel. to the velocity.
circle.vx = circle.vx + circle.ax;
//Constraining the velocity's speed!!
circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
circle.vy = circle.vy + circle.ay;
circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

//Add velocity to position.
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x, circle.y, circle.size);
}
