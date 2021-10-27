class Timer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.fill = 255;
    this.alpha = 255;
    this.fadeAmount = 4;
    this.numCircles = 10;
    this.active = true;
  }


  //Check if time runs out.
  checkTimeUp() {
    //outisde the forloop since it's only fading one circle (at a time).
    this.alpha -= this.fadeAmount;
    //subtract alpha to fade out.
    //if current alpha reaches 0-
    if (this.alpha <= 0) {
      //then remove a circle completely.
      this.numCircles--;
      //and reset alpha to 255 so next one fades.
      this.alpha = 255;
    }
    //When time runs out = Game over.
    if (this.numCircles === 0) {
      this.active = false;
    }
  }

  display() {
    let x = this.x;

    for (let i = this.numCircles; i > 0; i--) {
      //Default is at full color.
      let alpha = 255;
      //If current circle is the last one--
      if (i === 1) {
        //then use timer.alpha (which is reducing to 0.)
        alpha = this.alpha;
      }
      //Timer displays vertically
      x += 40;

      push();
      noStroke();
      fill(255, alpha);
      ellipse(x, this.y, this.size);
      pop();
    }
  }
}
