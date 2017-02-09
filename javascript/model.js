var TETRIS = TETRIS || {};

TETRIS.model = (function(){
  var _speed = 150;
  var _spawn = true;
  var _landed = false;
  var _cols = [];
  var _ids = [];
  var _classes = [];
  var _currentShape;
  var _width;
  var _height;

  var init = function(width, height){
    _currentShape = spawnShape();
    _width = width;
    _height = height;
    buildBoard();
    return _currentShape;
  };

  var getShape = function(){
    return _currentShape;
  };

  var buildBoard = function() {
    for (var col = 0; col < _width; col++){
      _cols.push([]);
      // _ids.push([]);
      // _classes.push([]);
      for (var row = 0; row < _height; row ++){
        _cols[col].push(false);
        // _ids[col].push($('#' + col + '_' + row));
        // _classes[col].push('cell');
      }
    }
  };

  var getBoard = function(){
    return _cols;
  };

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
    return Math.floor(Math.random() * _width);
  };

  var spawnShape = function() {
    _currentShape = new Shape(_randomX());
    return _currentShape;
  };

  var checkLanded = function() {
    var nextY = _currentShape.originY + 1;
    var thisCell = _cols[_currentShape.originX][(_currentShape.originY)];
    var nextCell = _cols[_currentShape.originX][nextY];

    if ( nextY >= _height || nextCell ) {
      _landed = true;
      flipCell(_currentShape.originX, _currentShape.originY);
    }
    return _landed;
  };

  var flipCell = function(x, y) {
    _cols[x][y] = !_cols[x][y];
  };

  var makeID = function(x, y) {
    var $idString;
    if (y) {
      $idString = $('#' + x + '_' + y);
    } else {
      $idstring = $('#' + x.originX + '_' + x.originY);
    }
    return $idString;
  };

  var setLanded = function(newBool) {
    _landed = newBool;
  };

  var moveShape = function(shape) {
    shape.originY += 1;
    // TODO check for landing and check for spawn
  };

  var handlers = {
    left: function(){
      nextCell = _cols[(_currentShape.originX - 1)][_currentShape.originY+1];
      if (!nextCell){
        _currentShape.originX -= 1;
      }
    },
    right: function(){
      nextCell = _cols[(_currentShape.originX + 1)][_currentShape.originY+1];
      if (!_currentShape.originX + 1){
        _currentShape.originX += 1;
      }
    },
  };



  return {
    init: init,
    getShape: getShape,
    getSpeed: getSpeed,
    getBoard: getBoard,
    checkSpawn: checkSpawn,
    spawnShape: spawnShape,
    setSpawn: setSpawn,
    checkLanded: checkLanded,
    setLanded: setLanded,
    moveShape: moveShape,
    makeID: makeID,
    flipCell: flipCell,
    getCellID: getCellID,
    handlers: handlers,
  };
})();
