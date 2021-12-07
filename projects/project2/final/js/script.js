/**
Project 2: Final Project
Olenka Yuen

An anthology of games that serves as a life lesson for individuals who overwork themselves.
*/

"use strict";

//Background sounds
let sirenSound;
let heartbeatSound;
//Sound effects
let progressSFX;
let selectSFX;
let currentState; //used to switch between events in the program.
//The games listed in the array are randomized 7 times. They cannot be the same game consecutively, after 6 games = new End();
let games = [`dragDropGame`, `stressGame`, `finalGame`];
let gamesPlayed = 0; //Track games

//Load the sounds into the code.
function preload() {
  sirenSound = loadSound(`assets/sounds/ambulance-siren.mp3`);
  heartbeatSound = loadSound(`assets/sounds/heart-rate.mp3`);
  progressSFX = loadSound(`assets/sounds/progress.wav`);
  selectSFX = loadSound(`assets/sounds/select.wav`);
}

//Setup the initial screen size to max devce size & reset all game elements.
function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}

//Check how many games have been played.
function nextGame() {
  //if a total of games played are less than 7,
  if (gamesPlayed < 6) {
    //Keep randomizing the games listed in array.
    let game = random(games);
    while (game === currentState.gameName) {
      game = random(games);
    }
    //Add the game by 1 in the counter (until it reaches 6).
    gamesPlayed++;
    //define the name of the games by their strings listed in the array.
    if (game === `stressGame`) {
      currentState = new StressGame();
    } else if (game === `finalGame`) {
      currentState = new FinalGame();
    } else if (game === `dragDropGame`) {
      currentState = new DragDropGame();
    }
  }
  //Else trigger a dialogue state after the last game.
  else {
    currentState = new End();
  }
}

//Resets all elements back to the starting point once called.
function reset() {
  //Replay 7 games again.
  gamesPlayed = 0;
  //return to the title screen.
  currentState = new Title();
}

//Perform the program.
function draw() {
  //perform whichever state is called currently in draw().
  currentState.draw();
}

//Click to proceed and make sound after click in a dialogue state.
function mouseClicked() {
  currentState.mouseClicked();
}

//Press on mouse to draw or drag. (Used in Drawing and DragDropGame)
function mousePressed() {
  currentState.mousePressed();
}

//Release the mouse button to let go of an object (used in DragDropGame)
function mouseReleased() {
  currentState.mouseReleased();
}
