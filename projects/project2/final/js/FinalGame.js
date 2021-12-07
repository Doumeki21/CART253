//Game: Hover the mouse left and right to catch the falling objects (balls).

//Calling all properties to perform the game.
//Extends: includes progress bar and timer.
class FinalGame extends GameState {
  constructor() {
    super();
    //a growing white rectangle the player controls.
    this.user = {
      x: width / 2,
      y: height,
      width: 50,
      initialHeight: 30,
      currentHeight: 30,
    };
    //Falling objects (ball)
    this.ball = {
      x: undefined,
      y: 0,
      vy: 13,
      size: 50,
      active: true,
    };
    //Identify the game as a string to be called in the array of the main script.
    this.gameName = `finalGame`;
  }

  //perform the program.
  draw() {
    //display the timer and progress bar from GameState
    super.draw();
    //Check if the player has grown in height.
    this.checkGrowth();
    //Check when to proceed to next game.
    this.checkEnd();
    //Display the player and the falling objects.
    this.displayUser();
    this.displayBall();
  }

  //Check the player height.
  checkGrowth() {
    //The target falls down.
    this.ball.y += this.ball.vy;
    //Player moves with the mouse.
    this.user.x = mouseX;
    //If the target touches the player,
    if (this.checkContact()) {
      //player grows taller
      this.user.currentHeight += this.ball.size * 3;
      //progressBar fills.
      this.fillProgressBar.height += 20;
      //Sounds play from contact and progressBar raise.
      selectSFX.play();
      progressSFX.play();
      this.ball.active = false;
    }
  }

  //Check when the player reaches max height = proceed to next game.
  checkEnd() {
    //Target disappears when it goes over the bottom edge.
    if (this.ball.y > height) {
      this.ball.active = false;
    }
    //Target regenerates at top of screen after it disappears.
    if (!this.ball.active) {
      this.resetBall();
    }
    // if progressBar fills to max height,
    if (this.fillProgressBar.height >= this.progressBar.height) {
      //then game switches to next game.
      nextGame();
    }
  }

  //Target resets to its initial height (at a random x position).
  resetBall() {
    this.ball.x = random(5, width - 30);
    this.ball.y = 0;
    this.ball.active = true;
  }

  //Target touches player.
  checkContact() {
    return this.ball.x + this.ball.size / 2 > this.user.x - this.user.width / 2 && this.ball.x - this.ball.size / 2 < this.user.x + this.user.width && this.ball.y + this.ball.size / 2 > this.user.y - this.user.currentHeight / 2 && this.ball.y - this.ball.size / 2 < this.user.y + this.user.currentHeight / 2;
  }

  //Display the player.
  displayUser() {
    push();
    fill(253, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(this.user.x, this.user.y, this.user.width, this.user.currentHeight);
    pop();
  }

  //Display the taregt.
  displayBall() {
    push();
    fill(64, 123, 167);
    noStroke();
    ellipse(this.ball.x, this.ball.y, this.ball.size);
    pop();
  }
}
