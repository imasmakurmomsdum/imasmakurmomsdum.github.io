

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    score = this.tail.length;
    textSize(50);
    fill(0,100, 10);
    text(score, 10, 50);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    if(this.total < 3) {
    fill(0, 0, 255);
    }
    else if(this.total >= 3 && this.total < 6) {
      fill(random(0, 50), 0, random(150, 255));
      console.log('ColorShift');
    }
    else if(this.total >= 6 && this.total < 12) {
      fill(random(50, 100), 0, random(100, 200));
      console.log('ColorShift 2');
    }
    else if(this.total >= 12 && this.total < 20) {
      fill(random(100, 150), 0, random(40, 150));
      console.log('ColorShift 3');
    }
    else if(this.total >= 20 && this.total < 30) {
      fill(random(150, 200), 0, random(0, 100));
      console.log('ColorShift 4');
    }
    else if(this.total >= 30) {
      fill(255, 0, 0);
      console.log('ColorShift 5');
    }
  
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}