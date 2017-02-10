var TETRIS = TETRIS || {};

TETRIS.controller = (function(modelFunc, viewFunc){
  var boardWidth = 10;
  var boardHeight = 20;
  var _currentShape;
  var _board;
  var callbacks = {};

  var init = function(){
    viewFunc.init(boardWidth, boardHeight, modelFunc.handlers);
    modelFunc.init(boardWidth, boardHeight);
    _currentShape = modelFunc.getShape();
    _board = modelFunc.getBoard();
  };

  callbacks.spawn = function(){
    _currentShape = modelFunc.spawnShape();
  };

  callbacks.render = function(){
    viewFunc.renderShape(_currentShape);
  };

  var gameLoop = (function(){
    var game = setInterval(function(){
      viewFunc.renderBoard(_board, modelFunc.checkFullRows());
      modelFunc.handleShape(_currentShape, callbacks);
      // modelFunc.checkFullRows();
    }, modelFunc.getSpeed());
  })();

  return {
    init: init,
  };

})(TETRIS.model, TETRIS.view);

$(document).ready(function(){TETRIS.controller.init();});
