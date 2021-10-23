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
  }

  bounce() {
    //Chheck if abll passes bottom of canvas
    if (this.y + this.size/2 >= height) {
      //reverse velocity
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  display() {
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
