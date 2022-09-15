app = {
    countscore : 0,
    init() {
        app.numberGenerated()
        

      },
    // it generates the number from left to right on 3 differents height
    numberGenerated() { 
        for(let iterateRows =0; iterateRows<5; iterateRows++) {
            for(let iterateNumber=0;iterateNumber<40;iterateNumber++) {
                const newDiv =  document.createElement('div');
                newDiv.classList.add('number');
                newDiv.textContent = Math.ceil(Math.random()*50)

                document.getElementById(`container${iterateRows + 1}`).append(newDiv);

                document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)

                app.moveSprite()
            
            }
        }

    },
    moveSprite() { //this function will make the sprite move if the right log is clicked

        authorization = [true,false,false,false,false] 

        

        var logElm = document.querySelectorAll('.number') //put in a table all the numbers
        for(let i=0;i<logElm.length;i++) { //loop to add a listener for all the numbers
            logElm[i].addEventListener('click', function(event) {

                if(authorization[0]) {
        

                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        document.querySelector('#container1').replaceChild(spriteElm, event.target)
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore;
                        authorization = [false,true,false,false,false]  //change authorization
                        document.getElementById("container1").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                        
                        
                        


                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
                        }

                    }


                else if(authorization[1]) { 

                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        document.querySelector('#container2').replaceChild(spriteElm, event.target)
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore; //display score
                        authorization = [false,false,true,false,false] 
                        document.getElementById("container2").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)

                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
                        }
                }


                else if(authorization[2]) {

                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        document.querySelector('#container3').replaceChild(spriteElm, event.target)
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore;
                        authorization = [false,false,false,true,false] 
                        document.getElementById("container3").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)

                    }  else if (app.countscore > 0 && event.target.textContent % divisorElm != 0) {
                        app.countscore--; //Count the score
                        document.querySelector('#score').textContent = app.countscore; //display score

                    }
                }

                else if(authorization[3]) {

                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        document.querySelector('#container4').replaceChild(spriteElm, event.target)
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore;
                        authorization = [false,false,false,false,true] 
                        document.getElementById("container4").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)

                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
                        }
                }

                else if(authorization[4]) {
                

                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        var spriteElm =  document.querySelector('.sprite-img')
                        
                        document.querySelector('#container5').replaceChild(spriteElm, event.target)
                        
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore;
                        authorization = [true,false,false,false,false] 
                        document.getElementById("container5").style.animationPlayState="paused";
                        console.log('yo')
                        

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

                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
                        }
                }


            })
        }
        
        

    }
}

app.init()
