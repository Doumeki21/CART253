class Flower {

  constructor(x, y, size, stemLength, petalColor) {
    //this = the Flower it's being constructed()
    this.x = x;
    this.y = y;
    this.size = size;
    this.stemLength = stemLength;
    this.stemThickness = 10;
    this.petalThickness = 10;

    this.stemColor = {
      r: 50,
      g: 150,
      b: 50,
    };
    this.petalColor = petalColor;
    this.centreColor = {
      r: 50,
      g: 0,
      b: 0,
    };
    this.alive = true;
  }

  shrink() {
    let shrinkage = random(0, 0.1);
    this.size -= shrinkage;
    this.petalThickness -= shrinkage/ 10;

    if (this.size <= 0 || this.petalThickness <= 0) {
      this.alive = false;
    }
  }

  display() {
    push();
    //Line for the stem
    strokeWeight(this.stemThickness);
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    //Circle with heavy outline.
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  mousePressed() {
    let d = dist(this.x, this.y , mouseX, mouseY);
    if (d < this.size/2 + this.petalThickness) {
      this.stemLength += 5;
      this.y += -5;
    }
  }
}
