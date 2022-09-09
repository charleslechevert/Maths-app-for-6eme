var number = [0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3]
var playerDigit = 4
var test = true;


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
  
  //drag and drop - don't touch. Need the line up 
  var data = ev.dataTransfer.getData("text");
  
  
  //get the value of the ladder
  ladder_value = ev.currentTarget
  ladder_value = ladder_value.querySelector('.number').innerHTML
  console.log(ladder_value)

  //get the value of the parrot
  let parrot_value = 0;
  if (data == 'drag1') {
    parrot_value = document.querySelector('#parrot1').innerHTML;
    console.log(parrot_value);
  } else if (data == 'drag2') {
    parrot_value = document.querySelector('#parrot2').innerHTML;
    console.log(parrot_value);
  } else if (data == 'drag3') {
    parrot_value = document.querySelector('#parrot3').innerHTML;
    console.log(parrot_value);
  }  else if (data == 'drag4') {
      parrot_value = document.querySelector('#parrot4').innerHTML;
      console.log(parrot_value);
  }


  if (parrot_value == ladder_value) {

    //drag and drop - don't touch
    ev.preventDefault();
    
    ev.currentTarget.append(document.getElementById(data));
    document.getElementById(data).classList.remove('parrot__img');
    document.getElementById(data).classList.add('parrot__img-onladder');
  
 }

}

