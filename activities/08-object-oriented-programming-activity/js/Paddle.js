class Paddle {

  constructor(w, h) {
    //this.y needs to be put after this.height because it's value depend on height!!
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
  }

  move() {
    this.x = mouseX;
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
