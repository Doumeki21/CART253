class Motorcycle extends Vehicle{
  constructor(x, y) {
    super(x, y);
    this.width = 30;
    this.height = 10;
    this.speed = 2;
  }

  //the car moves and wraps like in Vehicle, so no need here.

  display() {
    //Any time a class is linked to a super class, the functions in this class should always recall the same class mentioned in the super functions
    super.display();

    push();
    rectMode(CENTER);
    fill(255, 255, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
