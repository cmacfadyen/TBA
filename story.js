var health = 100;
var money = 10000;

var inventory = [];

document.getElementById('s1').style.display='block';

document.getElementById('s1c1').addEventListener("click", function(){
  inventory.push("doorknob");
  inventory.push("splinter");
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('s2').style.display='block';
document.getElementById('s1c2').style.display='none';

});

document.getElementById('s2c1').addEventListener("click", function(){
  inventory.push("balloon");
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('s3').style.display='block';
document.getElementById('s2c2').style.display='none';

});
