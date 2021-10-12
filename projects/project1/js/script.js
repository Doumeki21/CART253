/**
P1: Indecision
Olenka Yuen

GAME: Ever had extreme anxiety? A feeling like you can't make a decision because you're too anxious? This is the perfect simulation of that! Control the upper paddle with 'A' and 'D', and the lower paddle with the mouse. Let the game decide your fate!

Objectives
  -Handling different forms of user input
  -Organizing code with functions
  -Making things interesting with conditionals and variables
  -Combining aesthetics, interaction and concept

Brief
  -(Personal) Metaphorical simulation. // Mental health??

Requirements
  -At least two moving elements
  -Interactivity
  -Aesthetic, conceptual, and procedural harmony (visual, sound, and user-input should work harmoniously!)
  -Beginning, middle, and end!

Advice
  *START SMALL
  *ATOM BEAUTIFY
*/

"use strict";

//16 lines of monolgue.
let monologue = [
  `Should I go for it?`,
  `I might fail.`,
  `What would they think of me?`,
  `...`,
  `Failure isn't an option.`,
  `"They said it was fine!"`,
  `But is it really?`,
  // shrink windowHeight/2 (at line 8.)
  `It's hard to breathe`,
  `"Then do it already!"`,
  `But what about the consequences?`,
  //Return to normal size and shrink width to windowWidth/2 (at line 11).
  `...`,
  `The silence is so damn loud,`,
  //line 13 canvas translates into a small square.
  `My chest feels tight,`,
  `my head is throbbing.`,
  `It's hard to breathe.`,
  `I want this to end already.`,
];

//Timer variables for monologue. (value = number of frames)
let currentIndex = 0;
let maxTime = 300;
let countTime = 0;

//Bottom paddle.
let rectBottom = {
  x: 0,
  y: 0,
  width: 300,
  height: 20,
  scoreCount: 0,
};

//Top paddle.
let rectTop = {
  x: 0,
  y: 0,
  width: 300,
  height: 20,
  speedX: 25,
  scoreCount: 0,
};

//Bouncing ball.
let ball1 = {
  x: 250,
  y: 250,
  size: 50,
  vx: undefined,
  vy: undefined,
  speedX: 8,
  speedY: 8,
  fill: 255,
};

//Any screen: title, gameplay...
let state = `title`;

//Key controls for top paddle.
const keyA = 65;
const keyD = 68;

//Variables for sounds.
let sfx;
let music;

//Window variables.
let currentWindow = {
  x: undefined,
  y: undefined,
};

//Load sounds.
function preload() {
  sfx = loadSound('assets/sounds/hit.mp3');
  music = loadSound('assets/sounds/wind.mp3');
}

//Initial canvas and sound settings.
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentWindow.y = windowHeight;
  currentWindow.x = windowWidth;

  // music.play();
  // music.loop();
  // music.setVolume(0.1);
  //
  // sfx.setVolume(0.3);
}

//The screens/ states that will be shown displayed.
function draw() {
  background(0);

  //Simulation title.
  if (state === `title`) {
    title();
  }
  //Simulation.
  else if (state === `simulation`) {
    simulation();
  }
  //'Do it' wins.
  else if (state === `win`) {
    win();
  }
  //'Don't do it' wins.
  else if (state === `lose`) {
    lose();
  }
}

//Display title of the simulation.
function title() {

//Main title
  push();
  textSize(100);
  fill(140, 140, 140);
  textAlign(CENTER, CENTER);
  text(`IN`, width / 2 - 240, height / 2);
  pop();

  push();
  textSize(100);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`DECISION`, width / 2 + 28, height / 2);
  pop();

//Subtitle
  push();
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`BEATING DECISION FATIGUE.`, width / 2, height / 2 + 60);
  pop();

//Instructions
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`USE 'A' AND 'D' TO CONTROL THE UPPER PADDLE.\n USE THE MOUSE TO CONTROL THE LOWER PADDLE.`, width / 2, height / 2 + 200);
  pop();

//Next action.
  push();
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`CLICK ANYWHERE TO CONTINUE.`, width / 2, height - 80);
  pop();

  resetElements();
}

function resetElements() {
  resetPoint();
  resetBallPosition();
  resetPaddlePosition();
  countTime = 0;
  currentWindow.y = windowHeight;
  currentWindow.x = windowWidth;
}

//Points reset when the `simulation` starts.
function resetPoint() {
  rectTop.scoreCount = 0;
  rectBottom.scoreCount = 0;
}

//Ball resets position.
function resetBallPosition() {
  //Ball resets at random speed after every score.
  ball1.vx = random(-ball1.speedX, ball1.speedX);
  ball1.vy = ball1.speedY;
  //Ball resets position every score.
  ball1.x = width / 2;
  ball1.y = height / 2;
}

//User/ paddle positions reset.
function resetPaddlePosition() {
  //Position the top paddles.
  rectTop.x = windowWidth / 2;
  rectTop.y = 30;
  //Position the bottom paddles.
  rectBottom.x = windowWidth / 2;
  rectBottom.y = windowHeight - 30;
}

//Canvas change sizes and dimensions at some point of the game.
//Canvas shrinks height from line 8 to line 13.
function canvasChange() {
  if (rectTop.scoreCount > rectBottom.scoreCount) {
    //Window height decreases-
    currentWindow.y -= 3;
    currentWindow.x += 3;
    //Until it reaches to half the window's original height.
    currentWindow.y = constrain(currentWindow.y, windowHeight / 2, windowHeight);
    currentWindow.x = constrain(currentWindow.x, windowWidth / 2, windowWidth);
    resizeCanvas(currentWindow.x, currentWindow.y);
    //Bottom user is moved proportionally to the current window size.
    rectBottom.y = currentWindow.y - 30;
  } else if (rectTop.scoreCount < rectBottom.scoreCount) {
    //Window height increases to initial height while window width decreases-
    currentWindow.y += 3;
    currentWindow.x -= 3;
    //Until it reaches to half the window width.
    currentWindow.y = constrain(currentWindow.y, windowHeight / 2, windowHeight);
    currentWindow.x = constrain(currentWindow.x, windowWidth / 2, windowWidth);
    resizeCanvas(currentWindow.x, currentWindow.y);
    //Bottom user is moved proportionally to the current window size.
    rectBottom.y = currentWindow.y - 30;
  }
  //Else canvas returns to the window max size.
  else {
    currentWindow.y += 3;
    currentWindow.x += 3;
    currentWindow.y = constrain(currentWindow.y, windowHeight / 2, windowHeight);
    currentWindow.x = constrain(currentWindow.x, windowWidth / 2, windowWidth);
    resizeCanvas(windowWidth, windowHeight);
    rectBottom.y = currentWindow.y - 30;
  }
}

//Everything that happens in the simulation.
function simulation() {
  canvasChange();
  background(0);
  movement();
  checkEdge();
  checkPoints();
  checkCollision();
  displayMonologue();
  displayScore();
  drawBall();
  drawPaddle();
}

//"DO IT" WINS.
function win() {
  resetCanvas();

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`YOU DECIDED TO TAKE ACTION.`, width / 2, height / 2 - 50);
  pop();

  push();
  textSize(30);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`LIFE IS TOO SHORT NOT TO.`, width / 2, height / 2 + 100);
  pop();

  push();
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`CLICK ANYWHERE TO CONTINUE.`, width / 2, height - 80);
  pop();
}

//"DON'T DO IT" wins.
function lose() {
  resetCanvas();

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`YOU DIDN'T TAKE ACTION.`, width / 2, height / 2 - 50);
  pop();

  push();
  textSize(30);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`YOU'RE AFRAID THAT THE CONSEQUENCES\n WILL HARM YOU IN THE LONG RUN.`, width / 2, height / 2 + 100);
  pop();

  push();
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`CLICK ANYWHERE TO CONTINUE.`, width / 2, height - 80);
  pop();
}

//Canvas resets to initial size after game ends.
function resetCanvas() {
  currentIndex = 0;
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

//Movement of interactive elements.
function movement() {
  //Bottom paddle is controlled using the mouse and doesn't move out of canvas.
  rectBottom.x = constrain(mouseX, 0, width);

  //Top paddle is controlled using the A and D keys.
  if (keyIsDown(keyA)) {
    //Top paddle move to left.
    rectTop.vx = -rectTop.speedX;
  } else if (keyIsDown(keyD)) {
    //Top paddle move to right.
    rectTop.vx = rectTop.speedX;
  } else {
    //Top paddle doesnt move.
    rectTop.vx = 0;
  }
  //Top paddle moves according to speed and doesn't move out of canvas.
  rectTop.x += rectTop.vx;
  rectTop.x = constrain(rectTop.x, 0, width);

  //Move ball1.
  ball1.x += ball1.vx;
  ball1.y += ball1.vy;
}

//Ball to wall contact (needs to be put before constrain!)
function checkEdge() {
  //If the ball is anywhere outside of the canvas,
  if (ball1.x > width || ball1.x < 0) {
    ball1.vx *= -1;
    //ball1 bounces back inside window and plays sound.
    ball1.x = constrain(ball1.x, 0, width);
    sfx.play();
  }
}

function checkPoints() {
  //If ball hits the top edge of canvas.
  if (ball1.y > height) {
    //Points for top paddle increase by 1.
    rectTop.scoreCount++;
    resetBallPosition();
  }
  //If ball hits the bottom edge of canvas,
  if (ball1.y < 0) {
    //Points for bottom paddle increase by 1.
    rectBottom.scoreCount++;
    resetBallPosition();
  }
  //If top paddle reaches 5 points first, they win.
  if (rectTop.scoreCount === 5) {
    state = `win`;
    //Else, bottom paddle wins.
  } else if (rectBottom.scoreCount === 5) {
    state = `lose`;
  }
}

//Ball hits paddles.
function checkCollision() {
  //Once ball hits any side of bottom paddle,
  if (ball1.x + ball1.size / 2 > rectBottom.x - rectBottom.width / 2 && ball1.x - ball1.size / 2 < rectBottom.x + rectBottom.width / 2 && ball1.y + ball1.size / 2 > rectBottom.y - rectBottom.height / 2 && ball1.y - ball1.size / 2 < rectBottom.y + rectBottom.height / 2) {
    //Sound effect plays.
    sfx.play();
    //Ball will bounce back and change angle and speed depending whether it hits the left or right half of paddle.
    let distX = ball1.x - rectBottom.x;
    ball1.vx = ball1.vx + map(distX, -rectBottom.width / 2, rectBottom.width / 2, -ball1.speedX, ball1.speedX);
    ball1.vy *= -1;
  }
  //Once ball hits any side of top paddle,
  else if (ball1.x + ball1.size / 2 > rectTop.x - rectTop.width / 2 && ball1.x - ball1.size / 2 < rectTop.x + rectTop.width / 2 && ball1.y + ball1.size / 2 > rectTop.y - rectTop.height / 2 && ball1.y - ball1.size / 2 < rectTop.y + rectTop.height / 2) {
    //Sound effect plays.
    sfx.play();
    //Ball will bounce back and change angle and speed depending whether it hits the left or right half of paddle.
    let distX = ball1.x - rectTop.x;
    ball1.vx = ball1.vx + map(distX, -rectTop.width / 2, rectTop.width / 2, -ball1.speedX, ball1.speedX);
    ball1.vy *= -1;
  }
}

//Monologue in the background.
function displayMonologue() {
  //Display monologue.
  fill(255, 200);
  textSize(55);
  textAlign(CENTER, CENTER);
  text(monologue[currentIndex], width / 2, height / 2);

  //Monologue will proceed to the next after 400 frames.
  if (countTime === maxTime) {
    currentIndex++;
    countTime = 0;
  } else {
    countTime++;
  }
}

//Scores of each side displays.
function displayScore() {
  push();
  textSize(40);
  textStyle(BOLD);
  fill(66, 255, 151);
  //Top paddle score
  text(`DO IT: ${rectTop.scoreCount}`, 100, 80);
  pop();
  //Bottom paddle score.
  push();
  textSize(40);
  textStyle(BOLD);
  fill(255, 95, 66);
  text(`DON'T \nDO IT: ${rectBottom.scoreCount}`, currentWindow.x - 130, currentWindow.y - 80);
  pop();
}


function drawBall() {
  //If top paddle score is greater than the bottom paddle's,
  if (rectTop.scoreCount > rectBottom.scoreCount) {
    //then the ball color will correspond to the top paddle's color.
    ball1.fill = fill(66, 255, 151);
  } else {
    //Else the ball color will correspond to the bottom paddle's color.
    ball1.fill = fill(255, 95, 66);
  }

  //Display the ball1.
  push();
  noStroke();
  ellipse(ball1.x, ball1.y, ball1.size);
  pop();
}

function drawPaddle() {
  //Display bottom paddle.
  push();
  fill(255);
  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
  //Display top paddle.
  rectMode(CENTER);
  rect(rectTop.x, rectTop.y, rectTop.width, rectTop.height);
  pop();
}

//The game will proceed to the next screen after a mouse click.
function mouseClicked() {
  if (state === `title`) {
    //Enter the game.
    state = `simulation`;
  } else if (state === `win` || state === `lose`) {
    //Return to title.
    state = `title`;
  }
}
