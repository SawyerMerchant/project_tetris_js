var TETRIS = TETRIS || {};

TETRIS.model = function(width, height, shapeFunc){
  var _speed = 1000;
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

  var checkLanded = function() {
    return _landed;
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
