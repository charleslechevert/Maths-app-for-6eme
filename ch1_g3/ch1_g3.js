var number = [0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3]
var playerDigit = 4


// Generate random numbers associated to parrots

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot1').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot2').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot3').innerHTML = number[randomNumber];

var randomNumber = Math.floor(Math.random()*16);
document.getElementById('parrot4').innerHTML = number[randomNumber];


//Manage drag and drop function

function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   console.log(document.getElementById(data));
   console.log(ev.currentTarget)
   ev.currentTarget.append(document.getElementById(data));
   document.getElementById(data).classList.remove('parrot__img');
   document.getElementById(data).classList.add('parrot__img-onladder');
 }


