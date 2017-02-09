var TETRIS = TETRIS || {};

TETRIS.controller = (function(modelFunc, viewFunc){
  var boardWidth = 10;
  var boardHeight = 20;
  var _currentShape;
  var _board;

  var init = function(){
    console.log(modelFunc.handlers);
    viewFunc.init(boardWidth, boardHeight, modelFunc.handlers);
    modelFunc.init(boardWidth, boardHeight);
    _currentShape = modelFunc.getShape();
    _board = modelFunc.getBoard();
  };

  var gameLoop = (function(){
    var game = setInterval(function(){
      viewFunc.renderBoard(_board);
      if (modelFunc.checkSpawn()) {
        modelFunc.setSpawn(false);
        currentShape = modelFunc.spawnShape();
        viewFunc.renderShape(currentShape);
      }
      if (modelFunc.checkLanded(currentShape)) {
        viewFunc.renderShape(currentShape);
        modelFunc.setSpawn(true);
        modelFunc.setLanded(false);
      } else {
        viewFunc.removeShape(currentShape);
        modelFunc.moveShape(currentShape);
        viewFunc.renderShape(currentShape);
      }
      modelFunc.checkFullRows();
    }, modelFunc.getSpeed());
  })();

  return {
    init: init,
  };

  // startGame: function() {
  //   //200 slow 100 fast
  //   var game = setInterval(function() {
  //     //set food
  //     model.setFood();
  //     //move head
  //     model.moveHead();
  //     //check for game over
  //     if (model.gameOver()) {
  //       // viewFunc.declareGameOver();
  //       clearInterval(game);
  //       viewFunc.declareGameOver();
  //     }
  //     viewFunc.updateScore();
  //     // move tail
  //     model.moveTail(model.eatFood());
  //     //renderSnake
  //     viewFunc.renderSnake();
  //     //check for direction change
  //     viewFunc.directionChange();
  //     //check for game pause
  //   }, model.speed);
})(TETRIS.model, TETRIS.view);

$(document).ready(function(){TETRIS.controller.init();});
