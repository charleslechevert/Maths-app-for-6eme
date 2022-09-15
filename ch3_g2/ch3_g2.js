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
                newDiv.classList.add('row' + iterateRows);

                newDiv.textContent = Math.ceil(Math.random()*50)

                document.getElementById(`container${iterateRows + 1}`).append(newDiv);

                document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
            
            }
        }
        app.moveSprite1()


    },
    

    moveSprite1() { //this function will make the sprite move if the right log is clicked
        console.log('okd')
        if(document.querySelector(".sprite-img").parentElement.classList == "sprite") {
            for(let i=0;i<40;i++) { //loop to add a listener and execute fct for one row
                document.querySelectorAll('.row0')[i].addEventListener('click', (event) => {
                
                    var divisorElm = document.querySelector('.multiple__number').textContent //Get the divisor valuer 
                    if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                        app.countscore++; //Count the score*
                        document.querySelector('#score').textContent = app.countscore;
                        var spriteElm =  document.querySelector('.sprite-img')
                        document.querySelector('#container1').replaceChild(spriteElm, event.target)
                        document.getElementById("container1").style.animationPlayState="paused";
                        document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                        app.moveSprite2()

                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
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
                            app.countscore++; //Count the score*
                            document.querySelector('#score').textContent = app.countscore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container2').replaceChild(spriteElm, event.target)
                            document.getElementById("container2").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite3()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                            app.countscore--;
                            document.querySelector('#score').textContent = app.countscore;
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
                            app.countscore++; //Count the score*
                            document.querySelector('#score').textContent = app.countscore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container3').replaceChild(spriteElm, event.target)
                            document.getElementById("container3").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite4()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                            app.countscore--;
                            document.querySelector('#score').textContent = app.countscore;
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
                            app.countscore++; //Count the score*
                            document.querySelector('#score').textContent = app.countscore;
                            var spriteElm =  document.querySelector('.sprite-img')
                            document.querySelector('#container4').replaceChild(spriteElm, event.target)
                            document.getElementById("container4").style.animationPlayState="paused";
                            document.querySelector('.multiple__number').textContent = Math.ceil(Math.random()*6)
                            app.moveSprite5()
    
                            
        
                        } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                            app.countscore--;
                            document.querySelector('#score').textContent = app.countscore;
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
                        
                        app.countscore++; //Count the score
                        document.querySelector('#score').textContent = app.countscore;
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

                    } else if (event.target.textContent % divisorElm != 0 && app.countscore > 0) {
                        app.countscore--;
                        document.querySelector('#score').textContent = app.countscore;
                        }
                })


            }
        }
        
        
    

    }
}

app.init()



