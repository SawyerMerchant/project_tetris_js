var TETRIS = TETRIS || {};

TETRIS.model = (function(){
  var _speed = 150;
  var _spawn = true;
  var _landed = false;
  var _cols = [];
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
      for (var row = 0; row < _height; row ++){
        _cols[col].push(false);
      }
    }
  };

  var checkFullRows = function() {

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
      fillCell(_currentShape.originX, _currentShape.originY);
    }
    return _landed;
  };

  var fillCell = function(x, y) {
    _cols[x][y] = true;
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

  var handleShape = function(shape, callbacks) {
    if (_spawn){
      _spawn = false;
      callbacks.spawn();
      return;
    }
    if (checkLanded()){
      callbacks.render();
      setSpawn(true);
      setLanded(false);
    } else {
      shape.originY += 1;
      callbacks.render();
    }
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
      if (!nextCell){
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
    handleShape: handleShape,
    makeID: makeID,
    fillCell: fillCell,
    getCellID: getCellID,
    handlers: handlers,
    checkFullRows: checkFullRows,
  };
})();
