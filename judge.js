
function Judge(score){
  this.score = score;
}

Judge.prototype._judge = function(){
  var rr = document.getElementsByName('k1');
  if(rr[1].checked){
    this.score += 10;
  }
  var ww = document.getElementsByName('k2');
  if(ww[0].checked){
    this.score += 10;
  }
  return this.score;
};
