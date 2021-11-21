class GameState extends State {
  constructor() {
    super();
    //The base of the progress bar.
    this.progressBar = {
      x: width - 30,
      y: height - 50,
      width: 40,
      height: 200,
    };
    //Progress bar fill.
    this.fillProgressBar = {
      x: width - 30,
      y: height - 50,
      width: 30,
      height: 10,
    };
    //Timer starts at 10 seconds.
    this.timer = 10;
  }

  draw() {
    super.draw();
    background(58, 12, 163);

    this.checkTimer();
    this.displayTimer();
    this.displayProgress();
  }

  checkTimer() {
    //count in seconds
    this.timer -= 1 / 60;
    //If timer hits 0 = Game ends.
    if (this.timer <= 0) {
      this.timer = 0;
      currentState = new GameOver();
    }
  }

  displayTimer() {
    //Draw timer.
    push();
    noStroke();
    fill(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    //Round timer to nearest whole number.
    text(round(this.timer), 200, 200);
    pop();
  }

  displayProgress() {
    // this.progressBar.x = width - 30;
    // this.progressBar.y = height - 50;
    //
    // this.fillProgressBar.x = width - 30;
    // this.fillProgressBar.y = height - 50;

    //Draw progressBar
    push();
    noStroke();
    fill(128, 0, 22);
    rectMode(CENTER);
    //Dividing to offset it away from the edge.
    rect(this.progressBar.x, this.progressBar.y - this.progressBar.height / 2, this.progressBar.width, this.progressBar.height);
    pop();

    //Draw fillProgressBar
    push();
    noStroke();
    fill(255, 0, 43);
    rectMode(CENTER);
    rect(this.fillProgressBar.x, this.fillProgressBar.y - this.fillProgressBar.height / 2, this.fillProgressBar.width, this.fillProgressBar.height);
    pop();
  }
}
