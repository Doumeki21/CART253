class FinalGame extends GameState {
  constructor() {
    super();

    //White rectangle
    this.user = {
      x: width/2,
      y: height,
      width: 50,
      initialHeight: 30,
      currentHeight: 30,
    };
    //Falling balls
    this.ball = {
      x: undefined,
      y: 0,
      vy: 13,
      size: 50,
      active: true,
    };
    // //Pass the line!
    // this.goal = {
    //   x: 0,
    //   y: 50,
    // };
  }

  draw() {
    super.draw();

    this.checkGrowth();
    this.checkEnd();

    this.displayUser();
    this.displayBall();
    // this.displayGoal();
  }

  checkGrowth() {
    //Target goes down
    this.ball.y += this.ball.vy;
    //user is moved with mouse.
    this.user.x = mouseX;
    //Check if Target touches the user
    if (this.checkContact()) {
      //user grows taller
      this.user.currentHeight += this.ball.size * 3;
      //progressBar fills.
      this.fillProgressBar.height += 15;
      // selectSFX.play();
      // progressSFX.play();
      this.ball.active = false;
    }
  }

checkEnd() {
  //Target disappears when it goes over the bottom edge.
  if (this.ball.y > height) {
    this.ball.active = false;
  }
  //Target regenerates at top of screen after it disappears.
  if (!this.ball.active) {
    this.resetBall();
  }
  // //When user touches goal line,
  // if (this.user.y - this.user.currentHeight / 2 < this.goal.y) {
  //   //Game ends
  //   currentState = new End();
  // }

  // if progressBar fills to max height,
  if (this.fillProgressBar.height >= this.progressBar.height) {
    //then game switches to next game.
    currentState = new End();
  }
}

   resetBall() {
    this.ball.x = random(5, width - 30);
    this.ball.y = 0;
    this.ball.active = true;
  }

  checkContact() {
    return this.ball.x + this.ball.size / 2 > this.user.x - this.user.width / 2 && this.ball.x - this.ball.size / 2 < this.user.x + this.user.width && this.ball.y + this.ball.size / 2 > this.user.y - this.user.currentHeight / 2 && this.ball.y - this.ball.size / 2 < this.user.y + this.user.currentHeight / 2;
  }

  displayUser() {
    // this.user.currentHeight = this.user.initialHeight;

    //Draw user
    push();
    fill(253, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(this.user.x, this.user.y, this.user.width, this.user.currentHeight);
    pop();
  }

  displayBall() {
    //Draw ball
    push();
    fill(64, 123, 167);
    noStroke();
    ellipse(this.ball.x, this.ball.y, this.ball.size);
    pop();
  }

  // displayGoal() {
  //   //Draw goal
  //   stroke(255);
  //   strokeWeight(2);
  //   line(this.goal.x, this.goal.y, width, this.goal.y);
  // }
}
