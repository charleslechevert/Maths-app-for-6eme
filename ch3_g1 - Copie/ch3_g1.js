app = {
    randomSize : null,
    countScore : 0,
    countdown:90,
    startGame() { //It starts the game
        document.getElementById('start').addEventListener('click', ()=> {
            state = false;
            if (state==false) { //state manage the fact you can only once press start
                state = true;
                document.getElementById('start').style.color = 'transparent';
                setInterval(app.timer,1000);
                app.generateGrid()
                app.generatePad()
                app.giveAnswer()
                app.drag()
        
            }
        })
    
    },
    generateGrid() { //GENERATE GRID
        var numFruit = Math.ceil(Math.random()*8) //Select randomly fruit to displat


        var randomSize = Math.floor(Math.random() * (8 - 4) + 4)
        if(window.screen.width < 500) { //Manage responsivness (if phone we are in VW whereas in laptop we are in px)
            var sizeCell = (100 / randomSize)
            var sizeCellVwPx = sizeCell + 'vw'
          
        } else if(window.screen.width >= 500) {
            console.log('ya')
            var sizeCell = (500 / randomSize)
            var sizeCellVwPx = sizeCell + 'px'
        }

        for(let i=0;i<(randomSize**2);i++) {
    
            //this part generate the grid with right size for the cell in order to take all the room
            var newCell = document.createElement('div');
    
            newCell.classList.add('cell')
            newCell.style.width = sizeCellVwPx
            newCell.style.height = sizeCellVwPx
            document.querySelector('.grid').appendChild(newCell)
    
            //This part generate random object on the grid
            var random_boolean = Math.random() < 0.5;
            if (random_boolean==true) {
                var elem = document.createElement("div");
                elem.setAttribute("draggable", 'true');
                document.querySelectorAll(".cell")[i].appendChild(elem);
                elem.setAttribute("class", 'fill'); 
                elem.style.height= sizeCellVwPx
                elem.style.width= sizeCellVwPx
                elem.style.backgroundImage = 'url(fruit' + numFruit  + '.png)'
            }    
        }

    },
    generatePad() { //Generate the pad
        for(let i=0;i<10;i++) {
            var newDiv = document.createElement('div');
            newDiv.classList.add('numberButton');
            newDiv.textContent=i;
            document.querySelector('.pad').append(newDiv)
        }
    },
    drag() {
        const fill = document.querySelectorAll('.fill');
        const empties = document.querySelectorAll('.cell');
    
        // Fill listeners
    
        for(let i=0;i<fill.length;i++) {
    
    
    
        fill[i].addEventListener('dragstart', dragStart);
        fill[i].addEventListener('dragend', dragEnd);
    
    
        // Loop through empty boxes and add listeners
        for (const empty of empties) {
            empty.addEventListener('dragover', dragOver);
            empty.addEventListener('dragenter', dragEnter);
            empty.addEventListener('dragleave', dragLeave);
            empty.addEventListener('drop', dragDrop);
        }
    
        function dragStart() {
            this.className += ' hold';
            setTimeout(() => (this.className = 'invisible'), 0);
            numberI=i;  
            
        }
        
        function dragEnd() {
            this.className = 'fill';
        }
        
        function dragOver(e) {
            e.preventDefault();
        }
        
        function dragEnter(e) {
            e.preventDefault();
            this.className += ' hovered';
        }
        
        function dragLeave() {
            console.log('hein')
            this.className = 'cell';
        }
        
        function dragDrop() {
            this.className = 'cell';
            console.log(this.children.length)
            if (i==numberI && this.children.length ==0) {
                this.append(fill[i]);
            }
        }
    
        }
    },
    giveAnswer() { //CHECK IF ANSWER CORRECT AND LOAD NEW GRID

        const onClick = (event) => {
            
            var numberFruits = document.querySelectorAll('.fill').length;
            var answerStudent = event.target.textContent; 
            var divisor = Math.sqrt(document.querySelectorAll('.cell').length);
            if (answerStudent == (numberFruits % divisor)) {
                app.countScore++;
                document.getElementById("score").textContent = app.countScore;
            } else {
                app.countScore--;
                document.getElementById("score").textContent = app.countScore;
            }
    
    
            var allDivs = document.querySelectorAll('.cell')
            console.log(allDivs)
            for (const allDiv of allDivs) {
    
                allDiv.remove()
            }
    
            app.generateGrid()
            app.drag()
          }
    
    
    
        
            var numberElms = document.querySelectorAll('.numberButton')
            console.log(numberElms)
            for (const numberElm of numberElms) {
                    numberElm.addEventListener('click', onClick);
            }
    
    
    
       
    },
    timer() {
        document.getElementById('countdown').innerHTML = app.countdown;
    
        if (app.countdown==0) {
            clearInterval(app.timer);
            alert("Gamer Over. Score: " + app.countScore);
            location.reload();
    
        }
        app.countdown--;
    }



}

app.startGame()




