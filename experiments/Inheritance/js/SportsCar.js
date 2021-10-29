class SportsCar extends Car {
  constructor(x, y) {
    super(x, y);
    this.vx = 15;
  }

//overiding the car display()
  display() {
    //Draw the car
    super.display();

    push();
    rectMode(CENTER);
    fill(255, 255, 0);
    noStroke();
    //Offset stripes
    rect(this.x, this.y - this.height/10, this.width, this.height/20);
    rect(this.x, this.y + this.height/10, this.width, this.height/20);
    pop();
  }
}
