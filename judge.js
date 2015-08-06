
function Judge(score,answers){
  this.score = score;
  this.answers = answers;
}

Judge.prototype.getJudgeScore = function(){

  var results = this.getJudgeAnswers();

  for(var i = 0;i < results.length; i++){
  
    var temp = $("#judge").find("input[name = e"+i+"]");


    for(var y = 0; y < temp.length; y++){
      if(temp[y].checked && temp[y].value == results[i].answer[0]){

        this.score._getScore(results[i].unitScore);

      }
      console.log(temp[1].value);
    }
  }

};
Judge.prototype.getJudgeAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "judge"){
         results.push(answers[x]);
       }
     }
     return results;

};
