app = {
    countScore : 0,
    character : document.querySelector('.character'),
    boat1: document.querySelector('#boat1'),
    boat2: document.querySelector('#boat2'),
    boat3: document.querySelector('#boat3'),
    jumping:'',
    answer:0,
    startState:false,
    init() {

        app.startGame()




    },
    startGame() {
        document.getElementById('start').addEventListener('click', (event) => {
            
            if ( app.startState==false) { //state manage the fact you can only once press start
                app.startState = true;
                document.getElementById('start').style.color = 'transparent';
                app.generateNumber()
                console.log(document.querySelector('.block'))


                var boats = document.querySelectorAll('.block')
                for(let i=0;i<boats.length;i++) {
                    boats[i].style.animation = 'block 10s infinite linear';
                }


                app.courant()
                app.jump()

        }
        })
    },
   
    
    courant() {
        

        setInterval(function() {
            var characterTop = parseInt(window.getComputedStyle(app.character).getPropertyValue("top"));
            //var boat1Left = parseInt(window.getComputedStyle(app.boat1).getPropertyValue("left"));
            var boat1Top = app.boat1.getBoundingClientRect().y
            var boat1Bottom = app.boat1.getBoundingClientRect().bottom
            var boat1Left = app.boat1.getBoundingClientRect().x

            var boat2Top = app.boat2.getBoundingClientRect().y
            var boat2Bottom = app.boat2.getBoundingClientRect().bottom
            var boat2Left = app.boat2.getBoundingClientRect().x

            var boat3Top = app.boat3.getBoundingClientRect().y
            var boat3Bottom = app.boat3.getBoundingClientRect().bottom
            var boat3Left = app.boat3.getBoundingClientRect().x



            
       

            app.character.style.top = (characterTop+2) + 'px'; //every 10ms boat goes down

            if(app.jumping==0) {
                app.character.style.top = (characterTop+3)+'px';
            }
            if(boat1Left < app.character.getBoundingClientRect().width && (characterTop > (boat1Top+20) && characterTop < boat1Bottom-20  )) {
                if(document.getElementById('n1').textContent==app.answer) {
                    app.countScore++;
                    document.getElementById('score').textContent = app.countScore;
                } else { 
                    document.querySelector('.character').remove()
                    popup(app.countScore)

                }
                
            }

            if(boat2Left < app.character.getBoundingClientRect().width && (characterTop > (boat2Top+20) && characterTop < boat2Bottom-20  )) {
                if( document.getElementById('n2').textContent==app.answer) {
                    app.countScore++;
                    document.getElementById('score').textContent = app.countScore;
                } else { 
                    document.querySelector('.character').remove()
                    popup(app.countScore)
                }
            }

            if(boat3Left < app.character.getBoundingClientRect().width && (characterTop > (boat3Top+20) && characterTop < boat3Bottom-20  )) {
                if( document.getElementById('n3').textContent==app.answer) {
                    app.countScore++;
                    document.getElementById('score').textContent = app.countScore;
                } else { 
                    document.querySelector('.character').remove()
                    popup(app.countScore)
                }
            }



            if(characterTop<((window.innerHeight/10)-20)) { //manage the fact if the boat touch the top or down it is game over
                document.querySelector('.character').remove()
                popup(app.countScore)
            }

            if((characterTop>(window.innerHeight-40))) { //manage the fact if the boat touch the top or down it is game over
                document.querySelector('.character').remove()
                popup(app.countScore)

            }
        },10)    

    },
    jump() {
        var jumping = 0;
        document.querySelector('.sea').addEventListener('click', () => {
            app.jumping = 1;
            let jumpCount = 0;
            var jumpInterval = setInterval(function() {
                var characterTop = parseInt(window.getComputedStyle(app.character).getPropertyValue("top"));
                if (characterTop>50 && (jumpCount<15)) {
                    app.character.style.top = (characterTop-5) + 'px'
                }
                if (jumpCount>20) {
                    clearInterval(jumpInterval);
                    app.jumping=0;
                    jumpCount=0;
                }
                jumpCount++;
            },10)


        })

    }, 
    generateNumber() {

        function hello() {
            var random1 = Math.floor(Math.random()*100) 
            var random2 = Math.floor(Math.random()*100) 
            document.querySelector('.operation').textContent = `${random1} + ${random2}` //Get an addition operation

            app.answer = random1 +random2;

            var choice1 = random1 + random2;
            
            
            var arrayOfDigits = Array.from(String(choice1), Number); //We put all the digits in string
            var randomPosition1 = Math.floor(Math.random()*(arrayOfDigits.length-1)) // we get digit random position inside the number
            var randomPosition2 = randomPosition1 + 1 //we get second digit random position which is to its right

            var b = arrayOfDigits[randomPosition1]; //These 3 lines will swap the two digits
            arrayOfDigits[randomPosition1] = arrayOfDigits[randomPosition2]
            arrayOfDigits[randomPosition2] = b

            var choice2 = parseFloat(arrayOfDigits.join('')) //we convert array into a number
            console.log(choice2)

            arrayOfDigits = Array.from(String(choice1), Number); //we +1 a random digit
            arrayOfDigits[Math.floor(Math.random()*(arrayOfDigits.length))]++;

            var choice3 = parseFloat(arrayOfDigits.join('')) //we convert array into a number

            choices = [choice1,choice2,choice3] //shake the choices
            app.shuffle(choices)

            document.getElementById('n1').textContent = choices[0] //place the choices near the boat
            document.getElementById('n2').textContent = choices[1]
            document.getElementById('n3').textContent = choices[2]
        }
        hello();
        setInterval(hello,10000);
        


    },
    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    

}

app.init()


