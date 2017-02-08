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

  var keyListeners = (function(handlers) {
    $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // left
          alert("left");
          // handlers.left();
        break;

        case 38: // up
          // handlers.up();
        break;

        case 39: // right
          alert("left");
          // handlers.right();
        break;

        case 40: // down
          // handlers.down();
        break;
        default: return;
      }
    });
  })();

  return {
    init: init,
    renderBoard: renderBoard,
    renderShape: renderShape,
    removeShape: removeShape,
  };
};
