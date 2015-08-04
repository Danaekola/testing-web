function Duoxuan(score){
  this.score = score;
}

Duoxuan.prototype._duoxuan = function(){
  var cc = document.getElementsByName('d1');
  var dd = document.getElementsByName('d2');
  
  if(cc[0].checked&&cc[1].checked&&cc[2].checked&&!cc[3].checked){
    this.score+=10;
  }
  if(dd[0].checked&&dd[1].checked&&!dd[2].checked&&dd[3].checked){
    this.score+=10;
  }
  return this.score;
};
