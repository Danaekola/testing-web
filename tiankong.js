function Tiankong(score){
   this.score = score;
}
Tiankong.prototype._tiankong = function(){

  var fillBlack = document.getElementById('tiankong');
  var inputs = fillBlack.getElementsByTagName('input');
  if(inputs[0].value == '统一建模语言'){
    this.score += 5;
  }
  var result = ['封装性','继承性','多态性'];
  for(var j = 1; j < inputs.length; j++){
    for(var i = 0; i < result.length; i++){
      if(inputs[j].value == result[i]){
        this.score += 5;
        result.splice(i,1);
        break;
      }
    }
  }
  return this.score;
};
