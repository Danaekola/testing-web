function MultipleChoice(score,answers){
  this.score = score;
  this.answers = answers;
}

MultipleChoice.prototype.getMultipleChoiceScore = function(){

  var results = this.getMultipleChoiceAnswers();
  var anString;
  for(var i = 0;i < results.length; i++){
    var temp = document.getElementsByName('d'+i);
     anString='';
    for(var y = 0; y < temp.length; y++){
      if(temp[y].checked){

        anString +=temp[y].value;
      }
    }
      if(anString == results[i].answer[0]){
        this.score._getScore(results[i].unitScore);
      }
  }
};


MultipleChoice.prototype.getMultipleChoiceAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "manyChoice"){
         results.push(answers[x]);
       }
     }
     return results;

};
