function Danxuan(score){
  this.score = score;
}

Danxuan.prototype._danxuan = function(){
  var rr = document.getElementsByName('c1');
  if(rr[1].checked){
    this.score += 10;
  }
  var ww = document.getElementsByName('c2');
  if(ww[1].checked){
    this.score += 10;
  }
  return this.score;
};
