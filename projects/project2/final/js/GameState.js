//The Parent state that contains Gameover, FinalGame, and StressGame...

//Calling all properties which all games have.
class GameState extends State {
  constructor() {
    super();
    //The base of the progress bar.
    this.progressBar = {
      x: 200,
      y: height - 200,
      width: 40,
      height: 200,
    };
    //Progress bar fill.
    this.fillProgressBar = {
      x: 200,
      y: height - 200,
      width: 30,
      height: 10,
    };
    //A timer that starts from 10 seconds.
    this.timer = 10;
  }

  //Perform the program.
  draw() {
    //The pitch of the progress bar raises each time as it fills to the max.
    let newRate = map(this.fillProgressBar.height, this.fillProgressBar.height, this.progressBar.height, 1, 5);
    progressSFX.rate(newRate);

    super.draw();
    //A saturated purple background.
    background(58, 12, 163);
    //Check if time is up.
    this.checkTimer();
    //Dsiplay the timer and progress bar.
    this.displayTimer();
    this.displayProgress();
  }

  //Check if time is up.
  checkTimer() {
    //count in seconds
    this.timer -= 1 / 60;
    //If timer hits 0,
    if (this.timer <= 0) {
      this.timer = 0;
      //Game ends.
      currentState = new GameOver();
    }
  }

  //Display the timer. (Just numbers.)
  displayTimer() {
    push();
    noStroke();
    fill(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    //Round timer to nearest whole number.
    text(round(this.timer), 200, 200);
    pop();
  }

  //Display the progress bar.
  displayProgress() {
    //Display the base.
    push();
    noStroke();
    fill(128, 0, 22);
    rectMode(CENTER);
    //Dividing to offset it away from the edge.
    rect(this.progressBar.x, this.progressBar.y - this.progressBar.height / 2, this.progressBar.width, this.progressBar.height);
    pop();

    //Display the fill
    push();
    noStroke();
    fill(255, 0, 43);
    rectMode(CENTER);
    rect(this.fillProgressBar.x, this.fillProgressBar.y - this.fillProgressBar.height / 2, this.fillProgressBar.width, this.fillProgressBar.height);
    pop();
  }
}
