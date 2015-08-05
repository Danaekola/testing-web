function SingleChoice(score,answers){
  this.score = score;
  this.answers = answers;
}

SingleChoice.prototype.getSingleChoiceScore = function(){

  var results = this.getSingleChoiceAnswers();

  for(var i = 0;i < results.length; i++){
    var temp = document.getElementsByName('c'+i);
    for(var y = 0; y < temp.length; y++){
      if(temp[y].checked && temp[y].value == results[i].answer[0]){
        this.score._getScore(results[i].unitScore);
      }
    }
  }
};

SingleChoice.prototype.getSingleChoiceAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "singleChoice"){
         results.push(answers[x]);
       }
     }
     return results;

};
