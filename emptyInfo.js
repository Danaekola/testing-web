function EmptyInfo(){

}
EmptyInfo.prototype.testEmpty = function(){

  var info = document.getElementById('person');
  var inputs = info.getElementsByTagName('input');

  if(inputs[3].value === ""){
    alert(inputs[3].name+" can't be null");
    return;
  }
  if(inputs[4].value === ""){
    alert(inputs[4].name+" can't be null");
    return;
  }
  if(inputs[5].value === ""){
    alert(inputs[5].name+" can't be null");
    return;
  }
};
