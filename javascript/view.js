var TETRIS = TETRIS || {};

TETRIS.view = (function(){
  var _width;
  var _height;
  var delayedRender;
  var _handlers;

  var init = function(boardWidth, boardHeight, handlers){
    _width = boardWidth;
    _height = boardHeight;
    _handlers = handlers;
    renderBoard();
    keyListeners();
  };

  var renderBoard = function(setPieces) {
    var $board = $('#board');
    $board.html("");
    for (var y = 0; y < _height; y++) {
      var $currentRow = $('<div>').addClass('cell-row');
      $currentRow.appendTo($board);
      for (var x = 0; x < _width; x++) {
        var $cell = $('<div>').addClass('cell')
                              .attr('id', x + '_' + y);
        $cell.appendTo($currentRow);
        if (setPieces){
          if (setPieces[y].cells[x]){
            $cell.addClass('set');
          }
        }
      }
    }
  };

  var keyListeners = function() {
    $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // left
          _handlers.left();
          // renderShape(TETRIS.model.getShape());
        break;

        case 38: // up
          // handlers.up();
        break;

        case 39: // right
          _handlers.right();
        break;

        case 40: // down
          // handlers.down();
        break;
        default: return;
      }
    });
  };

  var renderShape = function(shape) {
    // function activateCells(cell){
    //   var $cellID = $('#' + cell[0] + '_' + cell[1]);
    //   $cellID.addClass('active');
    // }
    // shape.cells.forEach(activateCells);
    var $cellID;
    for (var c = 0; c < shape.cells.length; c++){
      $cellID = $('#' + shape.cells[c][0] + '_' + shape.cells[c][1]);
      $cellID.addClass('active');
    }

    // var $cell = $('#' + shape.originX + '_' + shape.originY);
    // $cell.addClass('active');
  };

  return {
    init: init,
    renderBoard: renderBoard,
    renderShape: renderShape,
  };
})();
