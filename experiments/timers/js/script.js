"use strict";

// An array of circles with a starting length
let circles = [];
let numCircles = 10;

// NEW! A variable to store how long our game is (in milliseconds)
let gameLength = 10 * 1000; // 10 seconds


// NEW! A timer for adding a new circle
let newCircleTimer
// NEW! A variable to store how long to wait before adding a circle (in milliseconds)
let newCircleDelay = 2 * 1000; // 2 seconds

// The current state
let state = `title`; // title, game, win, lose

// setup() creates the canvas and our initial circles
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCircles; i++) {
    let circle = createCircle();
    circles.push(circle);
  }
}

// createCircle() creates a simple circle object with position and size
function createCircle() {
  let circle = {
    x: random(0, width),
    y: random(0, height),
    size: random(50, 100)
  };
  return circle;
}

// draw() checks the state and runs the appropriate state function
function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `game`) {
    game();
  }
  else if (state === `win`) {
    win();
  }
  else if (state === `lose`) {
    lose();
  }
}

// title() shows the game title and we click to continue
function title() {
  displayText(`CIRCLE CLICKER`);
}

// game() displays all the circles in the array
function game() {
  // Display all the circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    displayCircle(circle);
  }
}

// displayCircle() displays the circle provided as a parameter
function displayCircle(circle) {
  push();
  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();
}

// mousePressed() checks all circles to see if they were clicked
// and removes the first clicked circle in the array
function mousePressed() {
  if (state === `title`) {
    // NEW!  Start our gameover timer to call the gameOver() function
    // when the game ends
    setTimeout(gameOver, gameLength);
    // NEW! Start our circle adding timer to run after two seconds
    // Remember the ID so we can cancel it when the game ends
    newCircleTimer = setTimeout(addCircle, newCircleDelay);
    state = `game`;
  }
  else if (state === `game`) {
    checkCircleClick();
  }
}

// gameOver() checks whether the player has won or lost
// and sets the state appropriately
function gameOver() {
  // Check if there are 0 circles left...
  if (circles.length === 0) {
    // There are no circles left, so the user won!
    state = `win`;
  }
  else {
    // Otherwise they lost
    state = `lose`;
  }
  // NEW! Cancel the circle adding timer since it shouldn't run
  // when the game is over!
  clearTimeout(newCircleTimer);
}

// NEW! addCircle() called by the new circle timer to add a circle
// also starts the timer again so it will run again
function addCircle() {
  // Ad a circle
  let circle = createCircle();
  circles.push(circle);
  // Start our circle adding timer to run after two seconds
  // Remember the ID so we can cancel it when the game ends
  // Note how this function is effectively CALLING ITSELF
  // after a delay! (Quite a lot like how draw() works)
  newCircleTimer = setTimeout(addCircle, newCircleDelay);
}


function checkCircleClick() {
  // Check all circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    // Check the distance to the circle from the mouse
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    // If the mouse was clicked inside the circle
    if (d < circle.size / 2) {
      // Remove the circle from the array with splice()
      circles.splice(i, 1);
      // Break out of the for-loop after removing the circle
      break;
    }
  }
}

// win() shows YOU WIN
function win() {
  displayText(`YOU WIN!`);
}

// lose() shows YOU LOSE
function lose() {
  displayText(`YOU LOSE!`);
}

// displayText() displays the provided message in the center of the canvas
function displayText(message) {
  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
  pop();
}
