var TETRIS = TETRIS || {};

TETRIS.view = function(boardWidth, boardHeight, model){
  var width = boardWidth;
  var height = boardHeight;

  var init = function(){
    renderBoard(width, height);
  };
  var renderBoard = function(width, height) {
    var $board = $('#board');
    for (var y = 0; y < height; y++) {
      var $currentRow = $('<div>').addClass('cell-row');
      $currentRow.appendTo($board);
      for (var x = 0; x < width; x++) {
        var $cell = $('<div>').addClass('cell')
                              .attr('id', x + '_' + y);
        $cell.appendTo($currentRow);
      }
    }
  };

  var renderShape = function(shape) {
    var $cell = $('#' + shape.topLeftX + '_' + shape.topLeftY);
    // var $cell = model.makeID(shape); //why????
    $cell.addClass('active');
  };

  var removeShape = function(shape) {
    var $cell = $('#' + shape.topLeftX + '_' + shape.topLeftY);
    $cell.removeClass('active');
  };

  return {
    init: init,
    renderBoard: renderBoard,
    renderShape: renderShape,
    removeShape: removeShape,
  };
};
