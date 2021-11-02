class Pedestrian {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.currentSpeed = 0;
    this.maxSpeed = 10;
    this.rotationSpeed = 0.1;
    this.direction = 0;
    this.alive = true;
  }

  checkHit(vehicle) {
    if (this.x > vehicle.x - vehicle.width / 2 &&
      this.x < vehicle.x + vehicle.width / 2 &&
      this.y > vehicle.y - vehicle.width / 2 &&
      this.y < vehicle.y + vehicle.width / 2) {
      this.alive = false;
    }
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.direction -= this.rotationSpeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.direction += this.rotationSpeed;
    } else {

    }

    if (keyIsDown(UP_ARROW)) {
      this.currentSpeed = this.maxSpeed;
    } else {
      this.currentSpeed = 0;
    }
  }

  move() {
    let vx = this.currentSpeed * cos(this.direction);
    let vy = this.currentSpeed * sin(this.direction);

    this.x += vx;
    this.y += vy;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    fill(200, 50, 50);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);

//supposed to draw line next to sqaure
    stroke(255, 0, 0);
    rect(0, 0, this.size, 0);
    pop();
  }
}
