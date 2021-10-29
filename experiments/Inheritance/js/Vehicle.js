class Vehicle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = 0;
    this.vy = 0;
  }

//Vehicle wraps around screen once it goes offscreen - for continuous animation
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x > width) {
      //or this.x = 0;
      this.x -= width;
    }
  }

  display() {
    //Defined in the subclasses.
  }
}
