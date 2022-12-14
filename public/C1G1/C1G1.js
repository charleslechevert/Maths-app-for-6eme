/*Initialisation */
app = {
    countScore : 0,
    correctAnswer : 0,
    countdown : 30,
    playerValue : 0,
    secondIntervall : '',
    startGame() {
        state=true;
        if (state) {
            document.querySelector('#start').addEventListener('click', () => {
            document.querySelector('.modal__container--start').style.display = 'none'; 
            app.secondIntervall= setInterval(app.timer,1000);
            app.secondIntervall;
            app.reset();
            app.getvalue();
            state=false;
            })

        }

            
        
    },

    reset() { /*Create random number to be put in the box */

        var value1 = Math.ceil(Math.random()*9);
        var value2 = Math.floor(Math.random()*10);

        var values = [0,0,0,0,0,0,value1,value1,value1,value1,value1,value2,value2,value2,value2,value2,value2,value2];
        var numberString = 0;
        var numberFloat = [0,0,0,0]
    
        for(let j=1;j<5;j++) {
    
            digit = [0,0,0,0,0,0,0]
            for(let i =1;i<7;i++) {
                randomValue = Math.floor(Math.random()*18);   
                digit[i-1]= values[randomValue];
            }
            digit.splice(3,0,".");
            numberString = digit.join("");
            numberFloat[j-1] = parseFloat(numberString)
            document.getElementById("random_value" + j).textContent= numberString;
        
        
        
            
            app.correctAnswer = Math.max(...numberFloat)
    
        }
        
    },
    checkValue() {
        if(app.playerValue==app.correctAnswer) {
            app.countScore++;
            document.getElementById('score').textContent = app.countScore;
        } else if (app.countScore > 0) {
            app.countScore--;
            document.getElementById('score').textContent = app.countScore;
        }

    },
    getvalue() { /* Cette fonction permet d'obtenir la valeur sur laquelle le joueur a cliqué puis lance toutes les autres fonctions */
        var numbers = document.querySelectorAll('.box__number')
        for(let i =0;i<numbers.length;i++) {
            numbers[i].addEventListener('click', (event) => {
                app.playerValue = event.currentTarget.textContent
                console.log(event.currentTarget)
                app.checkValue(app.playerValue, app.correctAnswer);
                app.reset();
    
            })
        }


    }, 
    timer() {
        document.getElementById("countdown").textContent = app.countdown;
        
        if (app.countdown==0) {
            clearInterval(app.secondIntervall);
            modalEndGame(app.countScore);
            var input = document.querySelector('.hiddenInput');
            input.value = app.countScore
            document.score__form.submit();
            
        } else {
            app.countdown--;
        }
        
        
    }
}

app.startGame()