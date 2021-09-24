/**
Conditionals Experiment: part 2.
Olenka Yuen

Booleans.
*/

let displayCircle = false;

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
  background(0);

//USE ONLY "IF STATEMENT" IF SMTHG NEED TO HAPPEN ONLY ONCE.
  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250, 250, 100, 100);
  }

//*"USE IF ELSE STATEMENT" IF NEED TO CLICK MULTIPLE TIMES.
// if (keyIsPressed) {
//   background(255);
// }
// else {
//   background(0);
// }

}
