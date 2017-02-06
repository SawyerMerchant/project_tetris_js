var controller = (function(modelFunc, viewFunc){
  var boardWidth = 10;
  var boardHeight = 20;
  var data = modelFunc(boardWidth, boardHeight);
  var view = viewFunc(boardWidth, boardHeight);

  view.init();

  var gameLoop = (function(){
    var game = setInterval(function(){
      if (data.checkSpawn()) {
        data.setSpawn(false);
        view.renderShape(data.spawnShape());
      }
      // if (data.checkLand()) {
      //   data.setSpawn(true);
      // } else {
      //   data.moveShape();
      //   view.moveShape();
      // }
    }, data.getSpeed);
  })();


  // startGame: function() {
  //   //200 slow 100 fast
  //   var game = setInterval(function() {
  //     //set food
  //     model.setFood();
  //     //move head
  //     model.moveHead();
  //     //check for game over
  //     if (model.gameOver()) {
  //       // view.declareGameOver();
  //       clearInterval(game);
  //       view.declareGameOver();
  //     }
  //     view.updateScore();
  //     // move tail
  //     model.moveTail(model.eatFood());
  //     //renderSnake
  //     view.renderSnake();
  //     //check for direction change
  //     view.directionChange();
  //     //check for game pause
  //   }, model.speed);
})(TETRIS.model, TETRIS.view);
