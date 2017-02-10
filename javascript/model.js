var TETRIS = TETRIS || {};

TETRIS.model = (function(){
  var _speed = 50;
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

  // need a constructor for blank rows - make an object that detects full row

  var buildBoard = function(){
    for (var h = 0; h < _height; h++){
      _rows.push(new Row(_width));
    }
    console.log(_rows);
  };

  // var buildBoard = function() {
  //   for (var col = 0; col < _width; col++){
  //     _cols.push([]);
  //     for (var row = 0; row < _height; row ++){
  //       _cols[col].push(false);//change false to color enumeration
  //     }
  //   }
  // };


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
    _currentShape = new Shape(_randomX());
    return _currentShape;
  };

  var checkLanded = function() {
    var nextYCoord = _currentShape.originY + 1;
    var thisCellVal = _rows[_currentShape.originY].cells[(_currentShape.originX)];
    checkFloor(nextYCoord);
    var nextCell = _rows[nextYCoord].cells[_currentShape.originX];
    checkShapes(nextCell);

    return _landed;
  };

  var hitFloor = function(){
    var nextY = _currentShape.originY + 1;
    if ( nextY >= _height) {
      _landed = true;
      fillCell(_currentShape.originX, _currentShape.originY);
    }
    return _landed;
  };

  var hitShape = function(){
    var nextY = _currentShape.originY + 1;
    var nextCell = _rows[nextY].cells[_currentShape.originX];
    if (nextCell > 0){
      _landed = true;
      fillCell(_currentShape.originX, _currentShape.originY);
    }
  };

  var fillCell = function(x, y) {
    _rows[y].cells[x] = 1;
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
    if (hitFloor() || hitShape()){
      callbacks.render();
      setSpawn(true);
      setLanded(false);
    } else {
      shape.originY += 1;
      callbacks.render();
    }
    checkFullRows();
  };

  var checkFullRows = function() {
    var colCount;
    var deleteRows = [];
    for (var r = 0; r < _height; r++){
      if (_rows[r].checkFull()) {
        deleteRows.push(_rows[r]);
      }
    }
    console.log(deleteRows);
    return deleteRows;
  };

  var shiftRows = function(deletedRows){

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
