var TETRIS = TETRIS || {};

TETRIS.model = function(width, height, shapeFunc){
  var _speed = 10;
  var _spawn = true;
  var _landed = false;
  var _cols = [];
  var _ids = [];
  var _classes = [];

  var buildBoard = (function() {
    for (var col = 0; col < width; col++){
      _cols.push([]);
      _ids.push([]);
      _classes.push([]);
      for (var row = 0; row < height; row ++){
        _cols[col].push(false);
        _ids[col].push($('#' + col + '_' + row));
        _classes[col].push('cell');
      }
    }
  })();

  var getCellID = function(x,y) {
    return _ids[x][y];
  };

  var getSpeed = function() {
    return _speed;
  };

  var checkSpawn = function() {
    return _spawn;
  };

  var setSpawn = function(newBool){
    _spawn = newBool;
  };

  var _randomX = function() {
    return Math.floor(Math.random() * width);
  };

  var spawnShape = function() {
    currentShape = new Shape(_randomX());
    return currentShape;
  };

  var checkLanded = function(currentShape) {
    var nextY = currentShape.topLeftY + 1;
    var thisCell = _cols[currentShape.topLeftX][(currentShape.topLeftY)];
    var nextCell = _cols[currentShape.topLeftX][nextY];

    if ( nextY >= height || nextCell ) {
      _landed = true;
      flipCell(currentShape.topLeftX, currentShape.topLeftY);
    }
    return _landed;
  };

  var flipCell = function(x, y) {
    _cols[x][y] = !_cols[x][y];
  };

  var makeID = function(x, y) {
    if (y) {
      $('#' + x + '_' + y);
    } else {
      $('#' + x.topLeftX + '_' + x.topLeftY);
    }
  };

  var setLanded = function(newBool) {
    _landed = newBool;
  };

  var moveShape = function(shape) {
    shape.topLeftY += 1;
  };

  return {
    // cols: cols,
    getSpeed: getSpeed,
    checkSpawn: checkSpawn,
    spawnShape: spawnShape,
    setSpawn: setSpawn,
    checkLanded: checkLanded,
    setLanded: setLanded,
    moveShape: moveShape,
    makeID: makeID,
    flipCell: flipCell,
    getCellID: getCellID,
  };
};
