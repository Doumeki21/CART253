/**
Exercise 05: Juggle Garden
Olenka Yuen

Brief:
- Add another form of user control (keyboard controlled side-paddle)
- Add a new class and objects. (don't touch square?)
- At least 2 endings. (1. timeup = good ed, 2. ball touches outside canvas gameover.)
*/

"use strict";
//Paddles on 4 sides of the screen
let paddleBottom;
let paddleTop;
let paddleLeft;
let paddleRight;

//Variables for the square emerging at center of screen.
let squares = [];
let randomTimer = 0;
let framesPassed = 0;
let squareSpeeds = [-5, -4, -3, 3, 4, 5];

//Variables for the balls to save.
let balls = [];
let numBalls = 15;
let ballGravityForce = 0.0025;

//State can be any screen: title, game, bad end, Time up.
let state = `title`;

let timer;


function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

//when the game starts, elements load on screen
function reset() {
  //everything resets back to original position on new game.
  balls = [];
  squares = [];
  timer = new Timer(50, 100);
  timer.numCircles = 10;

//The 4 paddles are placed near the 4 sides of the screen.
  paddleBottom = new PaddleVertical(300, 20, height - 30);
  paddleTop = new PaddleVertical(300, 20, 30);
  paddleLeft = new PaddleSide(20, 300, 30);
  paddleRight = new PaddleSide(20, 300, width - 30);

  //max of 15 balls loaded on screen.
  for (let i = 0; i < numBalls; i++) {
    //position of balls are random.
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    //put ball into the balls array.
    balls.push(ball);
  }

  //the square always starts at the center of the screen, at random positions.
  let square = new Square(width / 2, height / 2, random(squareSpeeds), random(squareSpeeds));
  //the square is added to the squares array.
  squares.push(square);
  //the square pops up at random times (between 1 to 5 seconds.)
  randomTimer = random(60, 60 * 5);
}

function draw() {
  background(0);

  //Screen title.
  if (state === `title`) {
    title();
  }
  //Instructions
  else if (state === `instructions`) {
    instructions();
  }
  //game
  else if (state === `game`) {
    game();
  }
  //bad ending triggerd when you touch the blue square.
  else if (state === `badEnd`) {
    badEnd();
    reset();
  }
  //Other ending triggered when you survived without touching the blue squares.
  else if (state === `ending`) {
    ending();
    reset();
  }
  //Add good ending if i have time? (have some balls after timeup.)
}


function title() {
  //title
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`CONTAIN`, width / 2, height / 2);
  pop();

  //Next step
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

function instructions() {
  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`STAY ON TASK WITH YOUR WORK BY:`, width / 2, height/2 - 200);
  pop();

  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`MOVING THE TOP & BOTTOM PADDLES WITH YOUR MOUSE AND\n MOVING THE SIDE PADDLES WITH "W" AND "D"\n TO CONTAIN THE RED BALLS.`, width / 2, height / 2);
  pop();

  push();
  textSize(30);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text(`CAREFUL NOT TO GET DISTRACTED!`, width / 2, height / 2 + 200);
  pop();

//NEXT STEP
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

function game() {

  paddleTop.move();
  paddleTop.display();

  paddleBottom.move();
  paddleBottom.display();

  paddleLeft.move();
  paddleLeft.display();

  paddleRight.move();
  paddleRight.display();

//when the timer is still going,
  if (timer.active) {
    //timer is visible and checks if the time is up.
    timer.display();
    timer.checkTimeUp();
  } else {
    //else when time is up: good ending.
    state = `ending`;
  }

//an unreasonable amount of tasks (15) is being floaded into the screen.
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    //if ball is still on screen,
    if (ball.active) {
      //ball goes down due to gravity.
      ball.gravity(ballGravityForce);
      //ball has speed.
      ball.move();
      //Ball bounces on any paddle.
      ball.bounce(paddleTop);
      ball.bounce(paddleBottom);
      ball.bounce(paddleLeft);
      ball.bounce(paddleRight);
      //Ball is drawn.
      ball.display();
    }
  }

//Squares are displayed with an array.
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i];
    if (square.active) {
      square.move();
      square.display();
      //Dodge the squares! If the squares touches any of the paddles, bad ending is triggered.
      if (square.contact(paddleTop) || square.contact(paddleBottom) || square.contact(paddleLeft) || square.contact(paddleRight)) {
        state = `badEnd`;
      }
    }
  }
  //Frames increase by 1.
  framesPassed++;

  //If a "random duration" has passed,
  if (framesPassed > randomTimer) {
    //A new square is created at center of screen.
    let square = new Square(width / 2, height / 2, random(-5, 5), random(-5, 5));
    //add square in squares array.
    squares.push(square);
    //timer resets.
    randomTimer = random(60, 60 * 5);
    framesPassed = 0;
  }
}

//the bad ending
function badEnd() {
  //title
  push();
  textSize(40);
  fill(96, 138, 232);
  textAlign(CENTER, CENTER);
  text(`YOU COULDN'T HANDLE YOUR TASKS WITHIN THE DEADLINE.`, width / 2, height / 2);
  pop();

  //Next step
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

//A good ending.
function ending() {
  //title
  push();
  textSize(70);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`YOU HANDLED YOUR TASKS!`, width / 2, height / 2);
  pop();

  //title
  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`IT'S OK IF IT WASN'T ALL OF THEM.`, width / 2, height / 2 + 100);
  pop();

  //Next step
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

//When mouse is clicked.
function mouseClicked() {
  //From title to instructions page.
  if (state === `title`) {
    state = `instructions`;
    //From instructions to the game.
  } else if (state === `instructions`) {
    state = `game`;
    //from the bad ending to the title.
  } else if (state === `badEnd`) {
    state = `title`;
    //from the good ending to the title.
  } else if (state === `ending`) {
    state = `title`;
  }
}
