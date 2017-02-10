Row = function(width) {
  this.cells = [];
  for (var w = 0; w < width; w++){
    this.cells.push(0); // 0 to equal clear in color scheme
  }
};

Row.prototype.checkFull = function(){
  var full = true;
  for (var f = 0; f < 10; f++){
    if (this.cells[f] === 0){
      full = false;
      break;
    }
  }
  return full;
};
