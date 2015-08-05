function FillBlank(score,answers){
   this.score = score;
   this.answers = answers;
}
FillBlank.prototype.getFillBlankScore = function(){

  var fillBlank = document.getElementById('fillBlank');
  var inputs = fillBlank.getElementsByTagName('input');
  var results = this.getFillBlankAnswers();


  if(inputs[0].value == results[0].answer[0]){
     this.score._getScore(results[0].unitScore);
  }

  var result = results[1].answer;

  for(var j = 1; j < inputs.length; j++){
    for(var i = 0; i < result.length; i++){
      if(inputs[j].value == result[i]){
        this.score._getScore(results[1].unitScore);
        result.splice(i,1);
        break;
      }
    }
  }

};

FillBlank.prototype.getFillBlankAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "fillBlank"){
         results.push(answers[x]);
       }
     }
     return results;

};
