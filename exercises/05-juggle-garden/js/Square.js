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

    setInterval(this.display, 1000);

    if (this.y - this.size/2 > height) {
      this.active = false;
  }

  }

  contact(paddle) {
    //Chheck if abll passes bottom of canvas
    // if (this.y + this.size/2 >= height) {
    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      this.active = false;
    }
  }

  display() {
    push();
    fill(50, 50, 255);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
    pop();
  }
}
