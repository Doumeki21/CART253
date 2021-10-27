class Square {

  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 15;
    this.size = 40;
    this.active = true;
  }

  //Square moves.
  move() {
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the ball at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //Changing position.
    this.x += this.vx;
    this.y += this.vy;
    //If the square has gone off the canvas, deactivate the square.
    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }


  contact(paddle) {
    //Check if square hits any side of the paddles.
    if (this.x + this.size / 2 > paddle.x - paddle.width / 2 &&
      this.x - this.size / 2 < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {
      //return = reporting to main js what happened.
      return true;
    } else {
      return false;
    }
  }

  //Display blue square.
  display() {
    push();
    fill(96, 138, 232);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
    pop();
  }
}
