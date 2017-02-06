var controller = (function(modelFunc, viewFunc){
  var boardWidth = 10;
  var boardHeight = 20;
  var data = modelFunc(boardWidth, boardHeight);
  var view = viewFunc(boardWidth, boardHeight);

  view.init();
})(TETRIS.model, TETRIS.view);
