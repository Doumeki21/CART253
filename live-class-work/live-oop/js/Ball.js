class Ball {

  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    this.image = image;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the ball at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //Chnaging coordinate posiiton.
    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size/2 > height) {
      this.active = false;
    }
  }

  bounce(paddle) {
    //Chheck if abll passes bottom of canvas
    // if (this.y + this.size/2 >= height) {
    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      //bounce
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width/2, paddle.width/2, -2, 2);
      //reverse velocity
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();
  }
}
