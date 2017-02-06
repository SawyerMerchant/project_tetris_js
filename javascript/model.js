var TETRIS = TETRIS || {};

TETRIS.model = function(width, height){
  var _speed = 200;
  var _spawn = true;

  var getSpeed = function() {
    return speed;
  };

  var checkSpawn = function() {
    return _spawn;
  };

  var setSpawn = function(newBool){
    _spawn = newBool;
  };

  var spawnShape = function() {
    return _randomX();
  };

  var _randomX = function() {
    return Math.floor(Math.random() * width);
  };

  return {
    getSpeed: getSpeed,
    checkSpawn: checkSpawn,
    spawnShape: spawnShape,
    setSpawn: setSpawn,
  };
};
