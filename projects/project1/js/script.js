/**
P1: Indecision
Olenka Yuen

Goal:

Objectives
  -Handling different forms of user input
  -Organizing code with functions
  -Making things interesting with conditionals and variables
  *Combining aesthetics, interaction and concept

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
let maxTime = 200;
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
  speedX: 20,
  scoreCount: 0,
};

//Bouncing ball.
let ball1 = {
  x: 250,
  y: 250,
  size: 50,
  vx: undefined,
  vy: undefined,
  speedX: 10,
  speedY: 10,
  fill: 255,

  angle: 0,
};

//Any screen: title, gameplay...
let state = `title`;

//Key controls for top paddle.
const keyA = 65;
const keyD = 68;

let sfx;
let music;

let currentWindow = {
  x: undefined,
  y: undefined,
};

//Load assets.
function preload() {
  sfx = loadSound('assets/sounds/hit.mp3');
  music = loadSound('assets/sounds/wind.mp3');
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentWindow.y = windowHeight;
  currentWindow.x = windowWidth;

  music.play();
  music.loop();
  music.setVolume(0.1);

  sfx.setVolume(0.3);
}

/**
Description of draw()
*/
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
  else if (state === `win`) {
    win();
  }
  else if (state === `lose`) {
    lose();
  }
}

function canvasChange() {
  if (currentIndex >= 8 && currentIndex < 13) {
    currentWindow.y -= 1;
    currentWindow.y = constrain(currentWindow.y, windowHeight/2, windowHeight);
    resizeCanvas(windowWidth, currentWindow.y);
    rectBottom.y = currentWindow.y - 30;
  }
  else if (currentIndex >= 13) {
    currentWindow.y -= 1;
    currentWindow.x -= 1;
    currentWindow.y = constrain(currentWindow.y, windowHeight/3, windowHeight);
    currentWindow.x = constrain(currentWindow.x, windowWidth/3, windowWidth);
    resizeCanvas(currentWindow.x, currentWindow.y);
    rectBottom.y = currentWindow.y - 30;
  }
  else {
    resizeCanvas(windowWidth, windowHeight);
  }
}

//Display title of the simulation.
function title() {

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

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`USE 'A' AND 'D' TO CONTROL THE UPPER PADDLE.\n USE THE MOUSE TO CONTROL THE LOWER PADDLE.`, width / 2, height / 2 + 150);
  pop();

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


function resetPoint() {
  rectTop.scoreCount = 0;
  rectBottom.scoreCount = 0;
}

//Ball resetBallPositions position every score.
function resetBallPosition() {
  ball1.vx = random(-ball1.speedX, ball1.speedX);
  ball1.vy = ball1.speedY;

  ball1.x = width / 2;
  ball1.y = height / 2;
}

function resetPaddlePosition() {
  //Position the paddles.
  rectTop.x = windowWidth / 2;
  rectTop.y = 30;
  rectBottom.x = windowWidth / 2;
  rectBottom.y = windowHeight - 30;
}


//Evrything that happens in the simulation.
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
  currentIndex = 0;

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
  text(`LIFE IS TOO SHORT TO NOT TO.`, width / 2, height / 2 + 100);
  pop();
}

//"DON'T DO IT" wins.
function lose() {
  currentIndex = 0;
  resizeCanvas(windowWidth, windowHeight);
  background(0);

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
}

function movement() {
  //Bottom paddle.
  //Bottom paddle control.
  rectBottom.x = constrain(mouseX, 0, width);
  //Top paddle control.
  //handleInput()
  if (keyIsDown (keyA)) {
    rectTop.vx = -rectTop.speedX;
  } else if (keyIsDown (keyD)) {
    rectTop.vx = rectTop.speedX;
  } else {
    rectTop.vx = 0;
  }

  rectTop.x += rectTop.vx;
  rectTop.x = constrain(rectTop.x, 0, width);

  //Move ball1
  ball1.x += ball1.vx;
  ball1.y += ball1.vy;
}

function checkEdge() {
  //Ball to wall contact (needs to be put before constrain!)
  //Ball bounce.
  if (ball1.x > width || ball1.x < 0) {
    ball1.vx *= -1;
    //ball1 constrain in window.
    ball1.x = constrain(ball1.x, 0, width);
    // ball1.y = constrain(ball1.y, 0, height);
    sfx.play();
  }
}

function checkPoints() {
  //If ball hits the top or bottom edge of canvas.
  if (ball1.y > height) {
    //Points for top paddle.
      rectTop.scoreCount++;
      resetBallPosition();
    }
  if (ball1.y < 0) {
    //Points for bottom paddle.
      rectBottom.scoreCount++;
      resetBallPosition();
  }

  if (rectTop.scoreCount === 5) {
    state = `win`;
  } else if (rectBottom.scoreCount === 5) {
    state = `lose`;
  }
}

//Once ball hits bottom user.
function checkCollision() {
  //Bottom paddle collision.
  if (ball1.x + ball1.size/2 > rectBottom.x - rectBottom.width/2 && ball1.x - ball1.size/2 < rectBottom.x + rectBottom.width/2 && ball1.y + ball1.size/2 > rectBottom.y - rectBottom.height/2 && ball1.y - ball1.size/2 < rectBottom.y + rectBottom.height/2) {
    sfx.play();

    let distX = ball1.x - rectBottom.x;

    ball1.vx = ball1.vx + map(distX, -rectBottom.width / 2, rectBottom.width / 2, -ball1.speedX, ball1.speedX);
    ball1.vy *= -1;
  }
  //Top paddle collision.
  else if (ball1.x + ball1.size/2 > rectTop.x - rectTop.width/2 && ball1.x - ball1.size/2 < rectTop.x + rectTop.width/2 && ball1.y + ball1.size/2 > rectTop.y - rectTop.height/2 && ball1.y - ball1.size/2 < rectTop.y + rectTop.height/2) {
    sfx.play();

    let distX = ball1.x - rectTop.x;

    ball1.vx = ball1.vx + map(distX, -rectTop.width / 2, rectTop.width / 2, -ball1.speedX, ball1.speedX);
    ball1.vy *= -1;
  }
}

function displayMonologue() {
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(monologue[currentIndex], width/2, height/2);

    if (countTime === maxTime) {
    currentIndex ++;
    countTime = 0;
  } else {
    countTime ++;
  }
}


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
  text(`DON'T \nDO IT: ${rectBottom.scoreCount}`, currentWindow.x - 150, currentWindow.y - 80);
  pop();
}

function drawBall() {
  if (rectTop.scoreCount > rectBottom.scoreCount) {
    ball1.fill = fill(66, 255, 151);
  } else {
    ball1.fill = fill(255, 95, 66);
  }
  //Draw ball1.
  push();
  noStroke();
  ellipse(ball1.x, ball1.y, ball1.size);
  pop();
}

function drawPaddle() {
  //Display bottom paddle.
  fill(255);
  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
  //Display top paddle.
  rectMode(CENTER);
  rect(rectTop.x, rectTop.y, rectTop.width, rectTop.height);
}


function mouseClicked() {
  if (state === `title`) {
    state = `simulation`;
  } else if (state === `win`) {
    state = `title`;
  } else if (state === `lose`) {
    state = `title`;
  }
}
