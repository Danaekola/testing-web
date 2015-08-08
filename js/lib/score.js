
function Score(){
  this.score = 0;
}

Score.prototype._getScore = function(num){
  return  this.score += num;
};
