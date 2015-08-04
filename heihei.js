function pick(){

  var score = 0;
  var info = document.getElementById('person');
  var inputs = info.getElementsByTagName('input');
  if(inputs[0].value===""){
    alert(inputs[0].name+"can't be null");
    return;
  }
  if(inputs[1].value===""){
    alert(inputs[1].name+"can't be null");
    return;
  }
  if(inputs[2].value===""){
    alert(inputs[2].name+"can't be null");
    return;
  }

  var tiankongA = ['统一建模语言','封装性','继承性','多态性'];
  var tiankongs = document.getElementById('tiankong');
  var ii = tiankongs.getElementsByTagName('input');

  for(var j = 0; j< ii.length; j++){
    if(ii[j].value == tiankongA[j]){
      score+=5;
    }
  }

  var rr = document.getElementsByName('Radios');
  if(rr[1].checked){
    score+=10;
  }
  var ww = document.getElementsByName('Radio1');
  if(ww[1].checked){
    score+=10;
  }
  var cc = document.getElementsByName('checkbox');
  var dd = document.getElementsByName('checkbox1');
  if(cc[0].checked&&cc[1].checked&&cc[2].checked&&!cc[3].checked){
    score+=10;
  }
  if(dd[0].checked&&dd[1].checked&&!dd[2].checked&&dd[3].checked){
    score+=10;
  }
  var panduan = document.getElementById('panduan');
  var ee= panduan.getElementsByTagName('input');
  if(ee[0].value=='F'){
    score+=10;
  }
  if(ee[1].value=='T'){
    score+=10;
  }

  var strr = '模型';
  var aa = document.getElementById('jianda');

  if(aa.value  == strr){
    score+=20;
  }
  var deni = document.getElementById('end');
  var gg= deni.getElementsByTagName('input');

  gg[2].value=''+score;
}
