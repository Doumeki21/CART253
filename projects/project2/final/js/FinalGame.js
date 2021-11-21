class FinalGame extends GameState {
  constructor() {
    super();

    //White rectangle
    this.user = {
      x: undefined,
      y: undefined,
      width: 50,
      initialHeight: 30,
      currentHeight: undefined,
    };
    //Falling balls
    this.ball = {
      x: undefined,
      y: 0,
      vy: 8,
      size: 50,
      active: true,
    };
    //Pass the line!
    this.goal = {
      x: 0,
      y: 50,
    };
  }

  draw() {
    super.draw();

    this.checkGrowth();
    this.checkEnd();

    this.displayUser();
    this.displayBall();
    this.displayGoal();
  }

  checkGrowth() {
    //Target goes down
    this.ball.y += this.ball.vy;
    //user is moved with mouse.
    this.user.x = mouseX;

    //Check if Target touches the user
    if (checkContact()) {
      //user grows taller
      this.user.currentHeight += this.ball.size * 3;
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
    resetBall();
  }
  //When user touches goal line,
  if (this.user.y - this.user.currentHeight / 2 < this.goal.y) {
    //Game ends
    currentState = new End();
  }
}

   resetBall() {
    ball.x = random(5, width - 30);
    ball.y = 0;
    ball.active = true;
  }

  checkContact() {
    return ball.x + ball.size / 2 > user.x - user.width / 2 && ball.x - ball.size / 2 < user.x + user.width && ball.y + ball.size / 2 > user.y - user.currentHeight / 2 && ball.y - ball.size / 2 < user.y + user.currentHeight / 2;
  }

  displayUser() {
    //Draw user
    push();
    fill(253, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(user.x, user.y, user.width, user.currentHeight);
    pop();
  }

  displayBall() {
    //Draw ball
    push();
    fill(64, 123, 167);
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    pop();
  }

  displayGoal() {
    //Draw goal
    stroke(255);
    strokeWeight(2);
    line(goal.x, goal.y, width, goal.y);
  }
}
