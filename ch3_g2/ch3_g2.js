app = {
    countScore : 0,
    countdown : 2,
    secondIntervalls : '',
    init() {
        app.numberGenerated()
        app.startGame()
  
        

      },
      startGame() {
        document.getElementById('start').addEventListener('click', (event) => {
            state = false;
            var rows = document.querySelectorAll('.number-container')
            for(let i =0;i<rows.length;i++) {
                if(i%2==0) {
                rows[i].style.animation = 'slide-right 100s linear infinite'
                } else {
                    rows[i].style.animation = 'slide-left 100s linear infinite'
                }
            }

            if (state==false) { //state manage the fact you can only once press start
                state = true;
                document.getElementById('start').style.color = 'transparent';
                app.secondIntervalls = setInterval(app.timer,1000);
                app.secondIntervalls
        }
        })


      },
      timer() {
        document.getElementById('countdown').innerHTML = app.countdown;
    
        if (app.countdown==0) {
            clearInterval(app.secondIntervalls);

            document.addEventListener("click", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='number row0' || e.target.className =='number row1' || e.target.className =='number row2' || e.target.className =='number row3' || e.target.className =='number row4' ) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
            
            popup(app.countScore)
    
        }
        app.countdown--;
    },
    // it generates the number from left to right on 3 differents height
    numberGenerated() { 
        for(let iterateRows =0; iterateRows<5; iterateRows++) {
            for(let iterateNumber=0;iterateNumber<40;iterateNumber++) {
                const newDiv =  document.createElement('div');
                newDiv.classList.add('number');
                newDiv.classList.add('row' + iterateRows);

                newDiv.textContent = Math.ceil(Math.random()*50)

                document.getElementById(`container${iterateRows + 1}`).append(newDiv);

                document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
            
            }
        }
        app.moveSprite1()


    },
    

    moveSprite1() { //this function will make the sprite move if the right log is clicked
        
        if(document.querySelector(".sprite-img").parentElement.classList == "sprite") {
            for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                document.querySelectorAll('.row0')[i].addEventListener('click', (event) => {
                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        console.log(divisorElm)
                        app.countScore++; //Count the score*
                        document.querySelector('#score').textContent = app.countScore;
                        var spriteElm =  document.querySelector('.sprite-img')
                        console.log(event.target)
                        document.querySelector('#container1').replaceChild(spriteElm, event.target)
                        document.getElementById("container1").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                        app.moveSprite2()
                        

                    } else if (event.target.textContent % divisorElm != 0 && app.countScore > 0) {
                        app.countScore--;
                        document.querySelector('#score').textContent = app.countScore;
                    } 
                    
                })
                 
            }  
               

        }
    },

        moveSprite2() { //this function will make the sprite move if the right log is clicked
            console.log('okii')
    
    
    
            if(document.querySelector(".sprite-img").parentElement.id == "container1") {
                console.log('okiidoki')
                for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                    document.querySelectorAll('.row1')[i].addEventListener('click', (event) => {
                    
                        var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                        if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                            app.countScore++; //Count the score*
                            document.querySelector('#score').textContent = app.countScore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container2').replaceChild(spriteElm, event.target)
                            document.getElementById("container2").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite3()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countScore > 0) {
                            app.countScore--;
                            document.querySelector('#score').textContent = app.countScore;
                        } 
                        
                    })
                     
                }  
                   
    
            }
        },


        moveSprite3() { //this function will make the sprite move if the right log is clicked

            if(document.querySelector(".sprite-img").parentElement.id == "container2") {
                for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                    document.querySelectorAll('.row2')[i].addEventListener('click', (event) => {
                    
                        var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                        if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                            app.countScore++; //Count the score*
                            document.querySelector('#score').textContent = app.countScore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container3').replaceChild(spriteElm, event.target)
                            document.getElementById("container3").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite4()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countScore > 0) {
                            app.countScore--;
                            document.querySelector('#score').textContent = app.countScore;
                        } 
                        
                    })
                     
                }  
                   
    
            }
        },

        moveSprite4() { //this function will make the sprite move if the right log is clicked
            console.log('okd')
    
    
    
            if(document.querySelector(".sprite-img").parentElement.id == "container3") {
                for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                    document.querySelectorAll('.row3')[i].addEventListener('click', (event) => {
                    
                        var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                        if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                            app.countScore++; //Count the score*
                            document.querySelector('#score').textContent = app.countScore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container4').replaceChild(spriteElm, event.target)
                            document.getElementById("container4").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite5()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countScore > 0) {
                            app.countScore--;
                            document.querySelector('#score').textContent = app.countScore;
                        } 
                        
                    })
                     
                }  
                   
    
            }
        },


   

    moveSprite5() {
        if(document.querySelector(".sprite-img").parentElement.id == "container4") {
            for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                document.querySelectorAll('.row4')[i].addEventListener('click', function(event) {
                
                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        
                        document.querySelector('#container5').replaceChild(spriteElm, event.target)
                        
                        app.countScore++; //Count the score
                        document.querySelector('#score').textContent = app.countScore;
                        document.getElementById("container5").style.animationPlayState="paused";
                        

                        const boxes = document.querySelectorAll('.number');
                        boxes.forEach(box => {
                            box.remove();
                        });

                        document.getElementById("container1").style.animationPlayState="running";
                        document.getElementById("container2").style.animationPlayState="running";
                        document.getElementById("container3").style.animationPlayState="running";
                        document.getElementById("container4").style.animationPlayState="running";
                        document.getElementById("container5").style.animationPlayState="running";

                        document.querySelector(".sprite").append(document.querySelector('.sprite-img'))
                        app.numberGenerated()

                    } else if (event.target.textContent % divisorElm != 0 && app.countScore > 0) {
                        app.countScore--;
                        document.querySelector('#score').textContent = app.countScore;
                        }
                })


            }
        }
        
        
    

    }
}

app.init()



