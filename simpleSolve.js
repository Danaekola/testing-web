function SimpleSolve(score,answers){
  this.score = score;
  this.answers = answers;
}

SimpleSolve.prototype.getSimpleSolve = function(){

  var results = this.getSimpleSolveAnswers();

  for(var i = 0;i < results.length; i++){

    var temp = document.getElementById('f'+i);

    // var temp = $("#('f'+i)");
    if(temp.value == results[i].answer[0]){
      this.score._getScore(results[i].unitScore);
    }
  }
};



SimpleSolve.prototype.getSimpleSolveAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "simpleSolve"){
         results.push(answers[x]);
       }
     }
     return results;

};
