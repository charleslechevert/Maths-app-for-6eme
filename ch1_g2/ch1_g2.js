var values = [0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9];
var randomValue=0;
var digit = [];
var digitAnswer = [false,false,false,false,false,false,false];
var countScore =0;
var clicked = [false,false,false,false,false,false,false];

/*Generate all the digits */
for(let i =1;i<8;i++) {
    randomValue = Math.floor(Math.random()*18);
    document.getElementById("random_digit" + i).innerHTML = values[randomValue];
    digit[i-1]= values[randomValue];
}
console.log(digit)

/*Check if it is a useless zero. return array */
if (digit[0] == 0) {
    digitAnswer[0] = true;
    if (digit[1] == 0) {
        digitAnswer[1] = true;
    }
} 

if (digit[6] == 0) {
    digitAnswer[6] = true;
    if (digit[5] == 0) {
        digitAnswer[5] = true;
        if (digit[4] == 0) {
            digitAnswer[4] = true;
            if (digit[3] == 0) {
                digitAnswer[3] = true;
            }
        }
    }
} 
/* Manage the first digit */
function getvalue1() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[0]==false) {
        if (playerDigit == 0) {
            countScore++;
            document.getElementById("random_digit1").style.color = 'transparent';
            document.getElementById("random_digit1").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit1").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[0] = true;
}

/* Manage the second digit */
function getvalue2() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[1]==false) {
        if (playerDigit == 0 & digit[0] == 0) {
            countScore++;
            document.getElementById("random_digit2").style.color = 'transparent';
            document.getElementById("random_digit2").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit2").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[1] = true;
}

/* Manage the third digit */
function getvalue3() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[2]==false) {
        countScore--;
        document.getElementById("random_digit3").style.color = 'darkred';
    }
    console.log(countScore)
    clicked[1] = true;
}

/* Manage the 4th digit */
function getvalue4() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[3]==false) {
        if (playerDigit == 0 & digit[6] == 0 & digit[5] == 0 & digit[4] == 0) {
            countScore++;
            document.getElementById("random_digit4").style.color = 'transparent';
            document.getElementById("random_digit4").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit4").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[3] = true;
}

/* Manage the 5th digit */
function getvalue5() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[4]==false) {
        if (playerDigit == 0 & digit[6] == 0 & digit[5] == 0) {
            countScore++;
            document.getElementById("random_digit5").style.color = 'transparent';
            document.getElementById("random_digit5").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit5").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[4] = true;
}

/* Manage the 6th digit */
function getvalue6() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[5]==false) {
        if (playerDigit == 0 & digit[6] == 0) {
            countScore++;
            document.getElementById("random_digit6").style.color = 'transparent';
            document.getElementById("random_digit6").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit6").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[5] = true;
}


/* Manage the 7th digit */
function getvalue7() {
    var playerDigit = 0;
    playerDigit = event.target.innerHTML;
    if (clicked[6]==false) {
        if (playerDigit == 0) {
            countScore++;
            document.getElementById("random_digit7").style.color = 'transparent';
            document.getElementById("random_digit7").style.backgroundImage = "url('coin.png')";
        } else {
            countScore--;
            document.getElementById("random_digit7").style.color = 'darkred';
        }
    }
    console.log(countScore)
    clicked[6] = true;
}



/*Reset new number */
function reset() {

}

/*startGame */

var countdown = 30;
function startGame() {
    setInterval(timer,1000);
    reset();

}

function timer() {
    document.getElementById('countdown').innerHTML = countdown;
    if (countdown==0) {
        clearInterval(timer);
        alert("Gamer Over. Score: " + countScore);
        location.reload();

    }
    countdown--;
}