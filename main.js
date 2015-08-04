function pick(){
  var score = 0;
  var emptyinfo = new EmptyInfo();
  if(emptyinfo.testEmpty()){
    return;
  }

  var fillBlank = new Tiankong(score);
  var  temp1 = fillBlank._tiankong();

  var singleChoice = new Danxuan(temp1);
  var temp2 = singleChoice._danxuan();

  var manyChoice = new Duoxuan(temp2);
  var temp3 = manyChoice._duoxuan();

  var judge = new Judge(temp3);
  var temp4 = judge._judge();

  var simple = new SimpleSolve(temp4);
  var totalScore = simple._simpleSolve();

  var ending = document.getElementById('person');
  var gg = ending.getElementsByTagName('input');

  gg[2].value =''+totalScore;



}
