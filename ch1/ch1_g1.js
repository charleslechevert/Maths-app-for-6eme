/*Initialisation */

var correctInt = 0;
var playerValue = 0;
var correctAnswer=0;
var random1 = 0;
var random2 = 0;
var random3 = 0;
var random4 = 0;


for(let i=0,)
Math.floor((Math.random()) * 3)




/* Initialise les nombres au départ 
number1 = document.getElementById("random_value1");
number2 =  document.getElementById("random_value2");
number3 = document.getElementById("random_value3");
number4 = document.getElementById("random_value4");

console.log(document.getElementById("random_value1"));

var random1 = (Math.random())*10;
number1.innerHTML = random1;

var random2 = (Math.random())*10;
number2.innerHTML = random2;

var random3 = (Math.random())*10;
number3.innerHTML = random3;

var random4 = (Math.random())*10;
number4.innerHTML = random4;

var random_list = [random1,random2,random3,random4]
var correctAnswer = Math.max(...random_list) */



/*Create random number to be put in the box */
function reset() {

    number1 = document.getElementById("random_value1")
    number2 = document.getElementById("random_value2")
    number3 = document.getElementById("random_value3")
    number4 = document.getElementById("random_value4")


    random1 = (Math.random())*10;
    number1.innerHTML = random1;

    random2 = (Math.random())*10;
    number2.innerHTML = random2;

    random3 = (Math.random())*10;
    number3.innerHTML = random3;

    random4 = (Math.random())*10;
    number4.innerHTML = random4;

    random_list = [random1,random2,random3,random4]
    correctAnswer = Math.max(...random_list)
    
}





/* Cette fonction permet d'obtenir la valeur sur laquelle le joueur a cliqué puis lance toutes les autres fonctions */

function getvalue() {
    playerValue = event.target.innerHTML;

    checkValue(playerValue, correctAnswer);
    
    reset();
 
 }

 function checkValue(playerValue, correctAnswer) {
    if (playerValue == correctAnswer ) {

        correctInt++; 
    } else {
        correctInt--;
    }
    document.getElementById("score").innerHTML = correctInt;
    
 }

 /* Fonctions countdown et startgame */

 var countdown = 30;
 function startGame() {
    setInterval(timer,1000);
    reset();
 }

 function timer() {
    document.getElementById("countdown").innerHTML = countdown;
    
    if (countdown==0) {
        clearInterval(timer);
        alert("Game Over. Score : " + correctInt);
        location.reload();
    }
    countdown--;
    
 }






