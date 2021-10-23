class Bee {

  constructor(x, y) {
    //this = the Flower it's being constructed()
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.shrinkRate = 0.5;
    this.jitteriness = 0.1;
    this.alive = true;
  }

  shrink() {
    this.size -= this.shrinkRate;
    //Check if smaller than minSize
    if (this.size < this.minSize) {
      //If so, dies.
      this.alive = false;
    }
  }

  move() {
    //check to change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    //movement
    this.x += this.vx;
    this.y += this.vy;
//constrained inside canvas
    this.x = constrain(this.x, 0 width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    push();
    //wings on either side.
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size/2, this.y, this.size/2);
    ellipse(this.x + this.size/2, this.y, this.size/2);
    pop();

    //Body.
    push();
    fill(255, 225, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    //Eyes.
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size/10, this.y, this.size/10);
    ellipse(this.x + this.size/10, this.y, this.size/10)
    pop();
  }

  // mousePressed() {
  //   let d = dist(this.x, this.y , mouseX, mouseY);
  //   if (d < this.size/2 + this.petalThickness) {
  //     this.stemLength += 5;
  //     this.y += -5;
  //   }
  // }
}
