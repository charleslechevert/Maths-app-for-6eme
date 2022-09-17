/*Initialisation */

var correctInt = 0;
var playerValue = 0;
var correctAnswer=0;
var random1 = 0;
var random2 = 0;
var random3 = 0;
var random4 = 0;
var values = [0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2];
var numberFloat = [0,0,0,0]
var numberString = 0;






/*Create random number to be put in the box */
function reset() {

    for(let j=1;j<5;j++) {

        digit = [0,0,0,0,0,0,0]
        for(let i =1;i<7;i++) {
            randomValue = Math.floor(Math.random()*18);   
            digit[i-1]= values[randomValue];
        }
        digit.splice(3,0,".");
        numberString = digit.join("");
        numberFloat[j-1] = parseFloat(numberString)
        console.log(digit)
        document.getElementById("random_value" + j).innerHTML= numberString;
    
    
    
        
        correctAnswer = Math.max(...numberFloat)

    }
    
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






