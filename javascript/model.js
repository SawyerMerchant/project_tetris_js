var TETRIS = TETRIS || {};

TETRIS.model = (function(){
  var _speed = 250;
  var _spawn = true;
  var _landed = false;
  var _rows = [];
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

  var buildBoard = function(){
    for (var h = 0; h < _height; h++){
      _rows.push(new Row(_width));
    }
    // console.log(_rows);
  };

  var getBoard = function(){
    return _rows;
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
    _currentShape = new Shape(_width);
    // _currentShape.updateCells();
    return _currentShape;
  };

  var checkLanded = function() {
    if (hitFloor()){
      return _landed;
    } else {
      hitShape();
    }
    return _landed;
  };

  var hitFloor = function(){
    for (var c = 0; c < _currentShape.cells.length; c++){
      if (_currentShape.cells[c][1] >= _height - 1){
        _landed = true;
        fillCells();
        break;
      }
    }
    return _landed;
  };

  var hitShape = function(){
    // var nextY = _currentShape.originY + 1;
    // var nextCell = _rows[nextY].cells[_currentShape.originX];
    // if (nextCell > 0){
    //   _landed = true;
    //   fillCells();
    // }
    var nextY;
    var nextCell;
    for (var e = 0; e < _currentShape.cells.length; e++){
      nextY = _currentShape.cells[e][1] + 1 ;
      if (nextY < 0){nextY = 0;}
      nextCell = _rows[nextY].cells[_currentShape.cells[e][0]];
      if (nextCell > 0){
        _landed = true;
        fillCells();
        break;
      }
    }
    return _landed;
  };

  var fillCells = function(){
    var parts = _currentShape.cells;
    for (var c = 0; c < parts.length; c++){
      _rows[parts[c][1]].cells[parts[c][0]] = 1;
    }
  };

  // var fillCell = function(x, y) {
  //   _rows[y].cells[x] = 1;
  // };

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
    // if (hitFloor() || hitShape()){
    if (checkLanded()){
      callbacks.render();
      setSpawn(true);
      setLanded(false);
    } else {
      shape.originY += 1;
      shape.updateCells();
      callbacks.render();
    }
    checkFullRows();
  };

  var checkFullRows = function() {
    var colCount;
    var deleteRows = [];
    for (var r = 0; r < _height; r++){
      if (_rows[r].checkFull()) {
        shiftRow(r);
      }
    }
    // console.log(deleteRows);
  };

  var shiftRow = function(row){
    _rows.splice( row, 1 );
    _rows.unshift(new Row(_width));
  };

  var handlers = {
    left: function(){
      nextCell = _rows[(_currentShape.originX - 1)][_currentShape.originY+1];
      if (!nextCell){
        _currentShape.originX -= 1;
      }
    },
    right: function(){
      nextCell = _rows[(_currentShape.originX + 1)][_currentShape.originY+1];
      if (!nextCell){
        _currentShape.originX += 1;
      }
    },
    up: function(){
      _currentShape.rotate();
    }
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
    getCellID: getCellID,
    handlers: handlers,
    checkFullRows: checkFullRows,
  };
})();
