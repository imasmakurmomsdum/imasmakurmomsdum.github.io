
//Variable for Snake
var s;
//Variable for scale
var scl = 20;
//Variable for food that Snake will eat
var food;

//var song;
//var slider;

// function preload() {
//   song = loadSound("Nujabes - Feather.mp3");
// }

function setup() {
  createCanvas(500, 500);
  // song.play();
  slider = createSlider(0, 255, 200, 1);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(slider.value());
  //song.setVolume(slider.value());
  if (slider.value() < 127) {
    textSize(20);
    fill(0);
    text('You have chosen the dark side...', 10, 450);
  } else {
    textSize(20);
    fill(255);
    text('You are one with the force.', 10, 450);
  }

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}