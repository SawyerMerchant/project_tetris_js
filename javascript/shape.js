Shape = function(width) {
  var _randomX = function() {
    return Math.floor(Math.random() * width);
  };

  this.originX = _randomX();
  this.originY = -1;
  this.cells = [];


  this.shapes = [
    //0   bar
    [
      [//vertical
        [0, -3],
        [0, -2],
        [0, -1],
        [0, 0]
      ],
      [//horizontal
        [-2, -1],
        [-1, -1],
        [0, -1],
        [1, -1]
      ]
    ],
    //1   square
    [
      [ //always the same
        [0, -1],
        [1, -1],
        [0, 0],
        [1, 0],
      ],
    ],
    //2   L
    [
      [
        [0, -1],
        [0, 0],
        [0,1],
        [1,1],
      ],
      //L facedown
      [
        [-1, 0],
        [-1, 1],
        [0, 0],
        [1, 0]
      ],
      //L upsidedown
      [
        [-1, -1],
        [0, -1],
        [0, 0],
        [0, 1]
      ],
      //L faceup
      [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, -1]
      ]
    ],
    //3   J
    [
      [
        [1, -1],
        [1, 0],
        [1, 1],
        [0,1]
      ],
      // J faceup
      [
        [-1, -1],
        [-1, 0],
        [0, 0],
        [1, 0]
      ],
      //J upsidedown
      [
        [1, -1],
        [0, -1],
        [0, 0],
        [0, 1]
      ],
      //J facedown
      [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, 1]
      ]
    ],
    //4   s
    [
      [
        [0, 0],
        [1, 0],
        [1, -1],
        [2, -1]
      ],
      //s clockwise 90
      [
        [0, -1],
        [0, 0],
        [1, 0],
        [1, 1]
      ],
      //s upsidedown
      [
        [-1, 1],
        [0, 1],
        [0, 0],
        [1, 0]
      ],
      //s clockwise 270
      [
        [-1, -1],
        [-1, 0],
        [0, 0],
        [0, 1]
      ]
    ],
    //5   z
    [
      [
        [0, -1],
        [1, -1],
        [1, 0],
        [2, 0]
      ],
      //z clockwise 90
      [
        [1, -1],
        [1, 0],
        [0, 0],
        [0, 1]
      ],
      //z upsidedown
      [
        [-1, 0],
        [0, 0],
        [0, 1],
        [1, 1]
      ],
      //z clockwise 270
      [
        [-1, 1],
        [-1, 0],
        [0, 0],
        [0, -1]
      ]
    ],
    //6   t
    [
      //t north
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, -1]
      ],
      //t east
      [
        [0, -1],
        [0, 0],
        [0, 1],
        [1, 0]
      ],
      //t south
      [
        [-1, 0],
        [0, 0],
        [0, 1],
        [1, 0]
      ],
      //t west
      [
        [0, -1],
        [-1, 0],
        [0, 0],
        [0, 1]
      ]
    ]
  ];
  var generateShape = function() {
    return Math.floor(Math.random() * 7);
  };

  this.shapeNum = generateShape();

  this.direction = 0;
  this.vector = this.shapes[this.shapeNum][this.direction];

};


Shape.prototype.updateCells = function(){
  var c;
  this.cells = [];
  for (c = 0; c < this.vector.length; c++){
    this.cells.push([(this.vector[c][0] + this.originX), (this.vector[c][1] + this.originY)]);
  }
};

Shape.prototype.rotate = function() {
  this.direction += 1;
  this.direction = this.direction % this.shapes[this.shapeNum].length;
  this.vector = this.shapes[this.shapeNum][this.direction];
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
