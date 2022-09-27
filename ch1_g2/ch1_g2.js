app = {
    values: [0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9],
    randomValue: 0,
    digit : [],
    digitAnswer : [false,false,false,false,false,false,false],
    countScore : 0,
    clicked : [false,false,false,false,false,false,false],
    state : false,
    countdown: 40,
    secondIntervall:0,
    generateNumber() {
        for(let i =1;i<8;i++) {
        randomValue = Math.floor(Math.random()*18);
        document.getElementById("random_digit" + i).innerHTML = values[randomValue];
        digit[i-1]= values[randomValue];
    }

    },
    getvalue1() {
        var playerDigit = 0;
        document.getElementById('random_digit1').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[0]==false) {
                if (playerDigit == 0) {
                    app.countScore++;
                    document.getElementById("random_digit1").style.color = 'transparent';
                    document.getElementById("random_digit1").style.textShadow = 'none';
                    document.getElementById("random_digit1").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit1").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;

        })
        
    
    },
    getvalue2() {
        var playerDigit = 0;
        document.getElementById('random_digit2').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[1]==false) {
                if (playerDigit == 0 & app.digit[0] == 0) {
                    app.countScore++;
                    document.getElementById("random_digit2").style.color = 'transparent';
                    document.getElementById("random_digit2").style.textShadow = 'none';
                    document.getElementById("random_digit2").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit2").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    },
    getvalue3() {
        var playerDigit = 0;
        document.getElementById('random_digit3').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[2]==false) {
                document.getElementById("random_digit3").style.color = 'darkred';
                if(app.countScore>0) {
                    app.countScore--;
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    },
    getvalue4() {
        var playerDigit = 0;
        document.getElementById('random_digit4').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[3]==false) {
                if (playerDigit == 0 & app.digit[6] == 0 & app.digit[5] == 0 & app.digit[4] == 0) {
                    app.countScore++;
                    document.getElementById("random_digit4").style.color = 'transparent';
                    document.getElementById("random_digit4").style.textShadow = 'none';
                    document.getElementById("random_digit4").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit4").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    },
    getvalue5() {
        var playerDigit = 0;
        document.getElementById('random_digit5').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[4]==false) {
                if (playerDigit == 0 & app.digit[6] == 0 & app.digit[5] == 0) {
                    app.countScore++;
                    document.getElementById("random_digit5").style.color = 'transparent';
                    document.getElementById("random_digit5").style.textShadow = 'none';
                    document.getElementById("random_digit5").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit5").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    },

    getvalue6() {
        var playerDigit = 0;
        document.getElementById('random_digit6').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[5]==false) {
                if (playerDigit == 0 & app.digit[6] == 0) {
                    app.countScore++;
                    document.getElementById("random_digit6").style.color = 'transparent';
                    document.getElementById("random_digit6").style.textShadow = 'none';
                    document.getElementById("random_digit6").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit6").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    },

    getvalue7() {
        var playerDigit = 0;
        document.getElementById('random_digit7').addEventListener('click', (event)=> {
            playerDigit = event.target.innerHTML;
            if (clicked[6]==false) {
                if (playerDigit == 0) {
                    app.countScore++;
                    document.getElementById("random_digit7").style.color = 'transparent';
                    document.getElementById("random_digit7").style.textShadow = 'none';
                    document.getElementById("random_digit7").style.backgroundImage = "url('coin.png')";
                } else {
                    document.getElementById("random_digit7").style.color = 'darkred';
                    if(app.countScore>0) {
                        app.countScore--;
                    }
                }
            }
            document.getElementById("score").innerHTML = app.countScore;
        })
    
    },
    reset() {

        /*Generate all the digits */
        for(let i =1;i<8;i++) {
            app.randomValue = Math.floor(Math.random()*18);
            document.getElementById("random_digit" + i).innerHTML = app.values[app.randomValue];
            app.digit[i-1]= app.values[app.randomValue];
        }
    
        clicked = [false,false,false,false,false,false,false];
        document.getElementById("random_digit1").style.color = 'black';
        document.getElementById("random_digit1").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit1").style.backgroundImage = "none";
        document.getElementById("random_digit2").style.color = 'black';
        document.getElementById("random_digit2").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit2").style.backgroundImage = "none";
        document.getElementById("random_digit3").style.color = 'black';
        document.getElementById("random_digit3").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit3").style.backgroundImage = "none";
        document.getElementById("random_digit4").style.color = 'black';
        document.getElementById("random_digit4").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit4").style.backgroundImage = "none";
        document.getElementById("random_digit5").style.color = 'black';
        document.getElementById("random_digit5").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit5").style.backgroundImage = "none";
        document.getElementById("random_digit6").style.color = 'black';
        document.getElementById("random_digit6").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit6").style.backgroundImage = "none";
        document.getElementById("random_digit7").style.color = 'black';
        document.getElementById("random_digit7").style.textShadow = '3px 3px rgba(55, 56, 64, 0.647)';
        document.getElementById("random_digit7").style.backgroundImage = "none";
    
    
    
    },
    startGame() {
        document.getElementById('start').addEventListener('click',() => {
            if (app.state==false) { //state manage the fact you can only once press start
                app.state = true;
                document.getElementById('start').style.color = 'transparent';
                document.getElementById('number').style.animation="block 3s infinite linear";
                app.secondIntervall = setInterval(app.timer,1000);
                app.secondIntervall
                setInterval(app.reset,3000);
                app.reset();
                app.getvalue1()
                app.getvalue2()
                app.getvalue3()
                app.getvalue4()
                app.getvalue5()
                app.getvalue6()
                app.getvalue7()
            }

        })

        
    
    },
    timer() {
        document.getElementById('countdown').innerHTML = app.countdown;
    
        if (app.countdown==0) {
            clearInterval(app.secondIntervall);

            document.addEventListener("click", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='digit') {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }



            popup(app.countScore);
    
        }
        app.countdown--;
    }
}

app.startGame()

