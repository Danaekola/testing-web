function AllAnswers(){

}
AllAnswers.prototype.getAllAnswers = function(){

  return [new Topic('fillBlank',['统一建模语言'],5,0),
  new Topic('fillBlank',['封装性','继承性','多态性'],5,0),
  new Topic('singleChoice',['B'],10,0),
  new Topic('singleChoice',['B'],10,0),
  new Topic('manyChoice',['ABC'],10,0),
  new Topic('manyChoice',['ABD'],10,0),
  new Topic('judge',['FALSE'],10,0),
  new Topic('judge',['TURE'],10,0),
  new Topic('simpleSolve',['模型'],20,0)];
};
