class PaddleSide {

  constructor(w, h, x) {
    //this.y needs to be put after this.height because it's value depend on height!!
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = 0;
    this.keyW = 87;
    this.keyD = 68;
    this.speedY = 15;
    this.vy = 0;
  }

  //Move right and left paddles with W and D keys.
  move() {
    if (keyIsDown(this.keyW)) {
      this.vy = -this.speedY;
    } else if (keyIsDown(this.keyD)) {
      this.vy = this.speedY;
    }
    //Side paddles stop moving when nothing is pressed.
    else {
      this.vy = 0;
    }
    //Side paddles changes position.
    this.y += this.vy;
    //Side paddles are constrained within canvas.
    this.y = constrain(this.y, 0, height);
  }

  //Display white paddles.
  display() {
    push();
    fill(255, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
