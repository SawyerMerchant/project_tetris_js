Shape = function(originX, type) {
  // TODO ask how to generate a randomX within Shape builder
  this.originX = originX;
  this.originY = -1;

  this.cells = [];

  SHAPES = [
    //0   bar
    [
      [0, -3],
      [0, -2],
      [0, -1],
      [0, 0]
    ],
    //1   square
    [
      [0, -1],
      [1, -1],
      [0, 0],
      [1, 0]
    ],
    //2   L
    [
      [0, -2],
      [0, -1],
      [0,0],
      [1,0]
    ],
    //3   J
    [
      [1, -2],
      [1, -1],
      [1, 0],
      [0,0]
    ],
    //4   s
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [2, -1]
    ],
    //5   z
    [
      [0, -1],
      [1, -1],
      [1, 0],
      [2, 0]
    ],
    //6   t
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, -1]
    ]
  ];

  this.vector = SHAPES[2];

};

// Shape.prototype.bar = [
//   [0, -3],
//   [0, -2],
//   [0, -1],
//   [0, 0]
// ];

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

// TODO make randomX only go up to 4 from right edge

// square
// ....
// ....
// __..
// o_..

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

// z
// ....       ....
// .__.       ..|.
// ..o_       .o|.
// ....       .|..

// T
// ....       ....        ....
// .|..       .|..        -o-.
// -o-.       .o-.        .|..
// ....       .|..        ....
