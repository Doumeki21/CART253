class PaddleVertical {

  constructor(w, h, y) {
    //this.y needs to be put after this.height because it's value depend on height!!
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = y;
  }

  //Top and bottom paddles move right/ left using mouse.
  move() {
    this.x = mouseX;
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
