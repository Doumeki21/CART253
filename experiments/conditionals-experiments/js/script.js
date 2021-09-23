/**
Conditionals Experiment.
Olenka Yuen

IDEA FOR PROJECT 1 (rhythm game??)
* Move mouse in 4 directions = color control.
* keyboard = control ball movement.
* random generation of colored squares.
* generation of squares SLOWLY accelerates after a certain time.
*/

let bgShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
};


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
}


/**
Description of draw()
*/
function draw() {
  background(bgShade);

  circle.x = circle.x + circle.speed;

  // if (circle.x > width){
  //   circle.speed = -circle.speed
  // }
  //
  // if (circle.x < 0){
  //   circle.speed = -circle.speed
  // }
  //
  // if (mouseY < height/2) {
  //   fill(255,0,0)
  // }
  // else {
  //   fill(0,0, 255)
  // }

//Color change based on 3 columns of canvas!! (Like rhythm game?)
  // if (mouseX < width/3) {
  //   fill(255,0,0);
  // }
  // else if (mouseX < 2 * width/3) {
  //   fill(0,255,0);
  // }
  // else {
  //   fill(0,0,255);
  // }

//Nested if statement for a achange in a specific location on canvas.
fill(255, 255,255);

if (circle.x > width/3) {
  if (circle.x < 2 * width/3)
  fill(255,0,0);
}
//Alternative of above code!
// if (circle.x > width/3 && circle.x < 2 * width/3) {
//   fill(255,0,0);
// }

  ellipse(circle.x, circle.y, circle.size);
}
