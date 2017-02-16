Shape = function(originX, type) {
  this.originX = originX;
  this.originY = -1;

  this.cells = [];

  this.vector = [
    [0, -3],
    [0, -2],
    [0, -1],
    [0, 0]
  ];

  this.vector = SHAPES[2];

};


Shape.prototype.updateCells = function(){
  var c;
  this.cells = [];
  for (c = 0; c < this.vector.length; c++){
    this.cells.push([(this.vector[c][0] + this.originX), (this.vector[c][1] + this.originY)]);
  }
};

Shape.prototype.rotate = function(){
  _.zip.apply(_, this.cells);
};

Shape.prototype.checkNext = function(){

};

// x lowest y closest to center possible
// 0,1,2,3 for orientation
// constants to represent shapes

// two options:
// multiple versions of each shape: left L, right, L, up L, down L
// or manually rotate each shape


// square
// ....
// ....
// ..__
// ..o_

// bar
// |...      ....
// |...      ....
// |...      ....
// o...      o---

// L
// ....      o---     ..-o
// |...      |...     ...|
// |...      ....     ...|
// o_..      ....     ....

// J
// ....      ....     o-..
// ...|      ....     |...
// ...|      |...     |...
// .._o      o---     |...

// s
// ....       ....
// .__.       .|..
// _o..       .|o.
// ....       ..|.

// reverse s
// ....       ....
// .__.       ..|.
// ..o_       .o|.
// ....       .|..

// T
// ....       ....        ....
// .|..       .|..        -o-.
// -o-.       .o-.        .|..
// ....       .|..        ....
