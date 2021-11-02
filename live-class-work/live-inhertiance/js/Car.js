class Car extends Vehicle{
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.speed = 5;
  }

  //the car moves and wraps like in Vehicle, so no need here.

  display() {
    //Any time a class is linked to a super class, the functions in this class should always recall the same class mentioned in the super functions
    super.display();

    push();
    rectMode(CENTER);
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
