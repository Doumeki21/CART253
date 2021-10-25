class PaddleSide {

  constructor(w, h, x) {
    //this.y needs to be put after this.height because it's value depend on height!!
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = 0;
    this.keyW = 87;
    this.keyD = 68;
    this.speedY = 8;
  }

  move() {
    if (keyIsDown(this.keyW)) {
      this.speedY = -this.speedY;
    } else if (keyIsDown(this.keyD)) {
      this.speedY = this.speedY;
    } else {
      this.speedY = 0;
    }

    this.y += this.speedY;
    this.y = constrain(this.y, 0, height);
  }

  display() {
    push();
    fill(255, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
