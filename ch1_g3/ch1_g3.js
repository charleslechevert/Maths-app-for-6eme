var number = [0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3]
var playerDigit = 4


var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot1').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot2').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot3').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot4').innerHTML = number[randomNumber];

const mybtn = document.getElementById('parrotContainer1');
mybtn.addEventListener('click', clickNumber);

function clickNumber() {
   var parrotNumber = document.getElementById("parrot1").innerHTML;
   console.log(parrotNumber)
}


