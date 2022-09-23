var number = [0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3]
var playerDigit = 4
var test = true;
var countScore = 0;


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

    //manage the score
    countScore++;
    document.getElementById('score').textContent = countScore;

    //manage new parrot 

    if (data=='drag1') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");

      elem.setAttribute("src", 'parrot1.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag1")
      document.getElementById("parrotContainer1").prepend(elem);
      document.getElementById('parrot1').innerHTML = number[randomNumber];

    } 

    if (data=='drag2') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot2.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag2")
      document.getElementById("parrotContainer2").prepend(elem);
      document.getElementById('parrot2').innerHTML = number[randomNumber];
    }

    if (data=='drag3') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot3.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag3")
      document.getElementById("parrotContainer3").prepend(elem);
      document.getElementById('parrot3').innerHTML = number[randomNumber];
    }

    if (data=='drag4') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot4.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag4")
      document.getElementById("parrotContainer4").prepend(elem);
      document.getElementById('parrot4').innerHTML = number[randomNumber];
    }
  
  

  
 }

}




/*startGame */

var countdown = 30;
function startGame() {
    state = false;
    if (state==false) { //state manage the fact you can only once press start
        state = true;
        document.getElementById('start').style.color = 'transparent';
        document.querySelector('.main__numbers').style.animation="slide-bottom 30s linear infinite";
        setInterval(timer,1000);
    }

}

/*Manage time */

function timer() {
    document.getElementById('countdown').innerHTML = countdown;

    if (countdown==0) {
        clearInterval(timer);
        alert("Gamer Over. Score: " + countScore);
        location.reload();

    }
    countdown--;
}

