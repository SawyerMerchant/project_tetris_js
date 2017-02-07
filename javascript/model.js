var TETRIS = TETRIS || {};

TETRIS.model = function(width, height, shapeFunc){
  var _speed = 100;
  var _spawn = true;
  var _landed = false;

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
    var $nextCell = makeID(currentShape.topLeftX, nextY);
    if ( nextY >= height || $($nextCell).hasClass('set') ) {
      _landed = true;
    }
    return _landed;
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
    getSpeed: getSpeed,
    checkSpawn: checkSpawn,
    spawnShape: spawnShape,
    setSpawn: setSpawn,
    checkLanded: checkLanded,
    setLanded: setLanded,
    moveShape: moveShape,
  };
};
