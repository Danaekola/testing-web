function SimpleSolve(score){
  this.score = score;
}

SimpleSolve.prototype._simpleSolve = function(){
  var strr = '模型';
  var aa = document.getElementById('jianda');

  if(aa.value  == strr){
    this.score += 20;
  }
  return this.score;
};
