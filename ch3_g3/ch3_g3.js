app = {
    gridElm: document.querySelector('.grid'),
    divisor : undefined,
    upPosition: '',
    leftPosition: '',
    rightPosition: '',
    countdown: 90,
    countScore: 0,


    init() {

        document.body.height = window.innerHeight + 'px'
        
        

        app.createGrid()
        app.placeSprite()
        app.startGame()
        
        

    },
    startGame() {
        document.getElementById('start').addEventListener('click', (event) => {
            state = false;
            if (state==false) { //state manage the fact you can only once press start
                state = true;
                document.getElementById('start').style.color = 'transparent';
                secondIntervall = setInterval(app.timer,1000);
                secondIntervall
                app.generateNearNumber()
        }
        })
    },
    
    /*Manage time */
    
    timer() {
        document.getElementById('countdown').innerHTML = app.countdown;
    
        if (app.countdown==0) {

            clearInterval(secondIntervall)
            document.addEventListener("click", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='cell') {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }

            

            clearInterval(app.timer);
            popup(app.countScore);
            
    
        } else {
            app.countdown--;
        }
        
    },

    createGrid(gridSize = 8, cellSize = 25) {
        // Je réinitialise le contenu dans invaderElm. En gros je supprimer la grille qui se situe dedans
        app.gridElm.textContent = '';
    
        for(let rowNumber = 0; rowNumber < 10; rowNumber++) {
        // Je vais créer mes lignes
        // Je créer mon élément
          const rowElm = document.createElement('div');
          // Je configure mon élément
          // ici on rajoute la class css `row` à notre élément HTML rowElm
          rowElm.classList.add('row');
      
          for(let cellNumber = 0; cellNumber < gridSize; cellNumber++) {
          // Je créer mon élément
            const cellElm = document.createElement('div');
            // Je configure mon élément
            // ici on rajoute la class css `cell` à notre élément HTML cellElm
            cellElm.classList.add('cell');

            var lengthCell = document.querySelector('.grid').clientWidth / 8
            console.log(window.innerWidth)
            if (window.innerWidth < 500) {
                cellElm.style.height = lengthCell +'px'
                cellElm.style.width = lengthCell +'px'
            } else {
                cellElm.style.height = '60px'
                cellElm.style.width = '60px'
            }
            
            

            cellElm.style.backgroundImage = 'url(pavement.png)'
            var numberID = ((rowNumber)*8)+(cellNumber+1) //Give an ID for the position of each cell
            cellElm.setAttribute('id',(numberID))
    
      
            // Durant la configuration de ma cell, j'en profite pour lui rajouter un eventListener sur le click
            cellElm.addEventListener('click', app.moveSprite);
            // J'ajoute mon élément dans le DOM
            rowElm.append(cellElm);
          }
      
          // J'ajoute la ligne une fois que toutes les cellules on été rajouter. Cela permet d'être plus cohérent en cas de bug
          // J'ajoute mon élément dans le DOM
          app.gridElm.append(rowElm);
        }

        document.querySelector('.grid').style.marginLeft = 'auto'
        document.querySelector('.grid').style.marginRight = 'auto'
        
      },
      placeSprite() {
        var lastRow = document.querySelectorAll(".row")[9]; //Select last row
        var startCell = lastRow.querySelectorAll(".cell")[3]; //Select the cell where the sprite will always start
        var createSprite = document.createElement('img');
        createSprite.classList.add('sprite')
        createSprite.src = "sprite.png";
        startCell.append(createSprite);
        app.generateDivisor()
        

       
        
      },
      generateNearNumber(){
        app.generateDivisor ()
        var spritePosition = document.querySelector('.sprite').parentElement.id
        console.log('yo')
        
        //generate the position of the neighbour 
        app.upPosition = parseInt(spritePosition) - 8

        if(spritePosition%8 ==1) {
            app.leftPosition = parseInt(spritePosition) + 7 

        } else {
        app.leftPosition = parseInt(spritePosition) - 1 
        }

        if(spritePosition%8 ==0) {
            app.rightPosition = parseInt(spritePosition) - 7 
        }
        else {app.rightPosition = parseInt(spritePosition) + 1 }

        // generate the neighbour number : 1 multiple 2 not-multiple
        var number3 = 0
        while (number3 % app.divisor == 0) {
            number3 = Math.ceil(Math.random()*50)
        }
        var number2 = 0
        while (number2 % app.divisor == 0) {
            number2 = Math.ceil(Math.random()*50)
        }

        var number1 = undefined
        while (number1 % app.divisor != 0) {
            number1 = Math.ceil(Math.random()*50)
        }


        
        //put the value in an array and shuffle it randomly 
        var numbers = [number1,number2,number3]

        console.log(document.getElementById(app.leftPosition).style.backgroundImage !== 'url(pavement.png)' || document.getElementById(app.rightPosition).style.backgroundImage !== 'url(pavement.png)')
        if(document.getElementById(app.leftPosition).style.backgroundImage !== 'url("pavement.png")' || document.getElementById(app.rightPosition).style.backgroundImage !== 'url("pavement.png")') {
            numbers.pop() //remove an option if one pavement is gone
        }

        if(document.getElementById(app.leftPosition).style.backgroundImage !== 'url("pavement.png")' && document.getElementById(app.rightPosition).style.backgroundImage !== 'url("pavement.png")') {
            numbers.pop() //remove another option if another pavement is gone
        }

        console.log(numbers)
        app.shuffle(numbers) 


        //Connect the random numbers to the neigbhour cells
        document.getElementById(app.upPosition).textContent = numbers[0]

        if(document.getElementById(app.leftPosition).style.backgroundImage == 'url("pavement.png")' ) {
            document.getElementById(app.leftPosition).textContent = numbers[1]
        }
        
        if(document.getElementById(app.rightPosition).style.backgroundImage == 'url("pavement.png")') {
            document.getElementById(app.rightPosition).textContent = numbers[numbers.length-1]
        }
        
        
        
      },

      shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a; //this function (found on stack) shuffle the item of an array. 
    },

    moveSprite(event) {
        
        
        if (event.target.textContent != '' && event.target.textContent % app.divisor == 0) {
            document.querySelector('.sprite').parentElement.style.backgroundImage = 'none' //remove pavement when sprite is gone 
            event.target.textContent = ''

            if(event.target.id == app.upPosition) {
                app.countScore++; //up the score
            }
            
            document.getElementById('score').textContent = app.countScore //display new score
            

            document.getElementById(app.upPosition).textContent = ""
            document.getElementById(app.rightPosition).textContent = ""
            document.getElementById(app.leftPosition).textContent = ""
            event.target.append(document.querySelector('.sprite'))
            app.endOfGrid() // check if the sprite is not in the last row
            app.generateNearNumber() // generate new numbers to display
        }

        else if (event.target.textContent != '') {
            if(app.countScore>0) {
                app.countScore--; //down the score
            }
            document.getElementById('score').textContent = app.countScore//display new score

            event.target.style.backgroundImage = "url(vortex.png)" //create vortex effect if wrong
            event.target.textContent = ''

            setTimeout(() => event.target.style.backgroundImage = "url(pavement.png)", 800) //create vortex effect if wrong
            
        }
    },
    generateDivisor () {
        app.divisor = Math.ceil(Math.random()*10 + 1)
        document.querySelector('.divisor__number').textContent = app.divisor
        console.log(app.divisor)
    },
    endOfGrid() {
        if (document.querySelector('.sprite').parentElement.id < 9) {
            var startPosition = document.getElementById('75')
            startPosition.append(document.querySelector('.sprite'))
            for(let i=0;i<document.querySelectorAll('.cell').length;i++) {
                document.querySelectorAll('.cell')[i].style.backgroundImage="url(pavement.png)"
            }
        }
        console.log(document.querySelectorAll('.cell').length)


    },

}

app.init() 
