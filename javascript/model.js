var TETRIS = TETRIS || {};

TETRIS.model = function(width, height, shapeFunc){
  var _speed = 200;
  var _spawn = true;
  var _landed = false;

  var getSpeed = function() {
    return speed;
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
    return new Shape(_randomX());
  };

  var checkLanded = function() {
    return _landed;
  };

  var setLanded = function(newBool) {
    _landed = newBool;
  };

  var moveShape = function() {

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
