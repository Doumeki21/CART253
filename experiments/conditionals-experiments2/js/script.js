/**
Conditionals Experiment: part 2.
Olenka Yuen

Booleans.
Loops
*/


//4.4 Loops...
// let caterpillar = {
//   x: 100,
//   y: 250,
//   segmentSize: 50,
// };
//
// function setup() {
//   createCanvas (500, 500);
//
// }
//
//
// function draw() {
//   background (0);
//   noStroke();
//   fill(100, 200, 100);
//
//   // let x = caterpillar.x;
//   // let numSegments = 5;
//   // let segmentsDrawn = 0;
//   //
//   // while (segmentsDrawn < numSegments) {
//   //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
//   //   x = x + 40;
//   //   segmentsDrawn = segmentsDrawn + 1; //aka segmentsDrawn ++;
//   // }
//
//   let x = caterpillar.x;
//   let numSegments = 5;
//
// // for (starting factor, check counter, cause change in counter)
//   for (let i = 0; i < numSegments; i++) {
//     ellipse(x, caterpillar.y, caterpillar.segmentSize);
//     x = x + 40;
//   }
// }


//4.5 Loops.

let circle = {
  x: undefined,
  y: undefined,
  size: 100,
};

let dangerZone = {
  x: 250,
  y: 250,
  size: 150,
};


function setup() {
  createCanvas(500, 500);

  circle.x = random(0, width);
  circle.y = random(0, height);

  let d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
  while (d < circle.size/2 + dangerZone.size/2) {
    circle.x = random(0, width);
    circle.y = random(0, height);

    d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
  }
}

function draw() {
  background(0);

  //Danger zone.
  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size)

  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);

}
