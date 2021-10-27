class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
  }

  //Ball goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //Ball moves.
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
    //If the ball has gone off the canvas, deactivate the ball.
    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }


  bounce(paddle) {
    //Check if Ball bounces off on any side of the paddles.
    if (this.x + this.size / 2 > paddle.x - paddle.width / 2 &&
      this.x - this.size / 2 < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      //bounce
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);
      //reverse velocity
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  //Display red ball.
  display() {
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
