class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
    this.drunk = 0.2;
  }

  //we overwritten the super class move(),
  move() {
    this.veer();
    //So we need to recall the Vehicle
    super.move();
  }

  veer() {
    let r = random();
    if (r < this.drunk) {
      this.vy = random(-5, 5);
    }
  }

//Also overwritten super class wrap(),
  wrap() {
    //so we recall super wrap().
    super.wrap();
//and have cars reappear on opposite side side after go off screen
    if (this.y > height) {
      this.y -= height;
    }
    else if (this.y < 0) {
      this.y += height;
    }
  }

  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
