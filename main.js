function pick(){

  var emptyinfo = new EmptyInfo();
  if(emptyinfo.testEmpty()){
    return;
  }
  var score = new Score();

  var allAnswers = new AllAnswers();
  var answers = allAnswers.getAllAnswers();

  var fillBlank = new FillBlank(score,answers);
  fillBlank.getFillBlankScore();

  var singleChoice = new SingleChoice(score,answers);
  singleChoice.getSingleChoiceScore();

  var multipleChoice = new MultipleChoice(score,answers);
  multipleChoice.getMultipleChoiceScore();

  var judge = new Judge(score,answers);
  judge.getJudgeScore();

  var simple = new SimpleSolve(score,answers);
  simple.getSimpleSolve();



  var inputs = $('#person').find('input');
  inputs[2].value =''+score.score;



}
