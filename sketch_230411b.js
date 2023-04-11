function setup() {
  createCanvas(500, 500);
} 

function keyPressed(){
  background(0,0,0);  
}
function keyReleased() {
  if (background === 0) {
    background = 255;
  }
}

let value = 0;
function draw() {
  fill(value);
  circle(160,150,50)
  circle(350,150,50)
  circle(250,350,100)
  noStroke()
  describe('black 50-by-50 rect turns white with mouse click/press.');
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
