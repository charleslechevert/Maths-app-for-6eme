app = {
    randomSize : null,
    countScore : 0,
    countdown:90,
    secondIntervall: '',
    startGame() { //It starts the game

        document.body.height = window.innerHeight + 'px'
        
        document.getElementById('start').addEventListener('click', ()=> {
            state = false;
            if (state==false) { //state manage the fact you can only once press start
                state = true;
                document.getElementById('start').style.color = 'transparent';
                app.secondIntervall = setInterval(app.timer,1000);
                app.secondIntervall
                app.generateGrid()
                app.generatePad()
                app.giveAnswer()
                app.drag()
        
            }
        })
    
    },
    generateGrid() { //GENERATE GRID
        var numFruit = Math.ceil(Math.random()*8) //Select randomly fruit to displat


        app.randomSize = Math.floor(Math.random() * (8 - 4) + 4)
        if(window.screen.width < 500) { //Manage responsivness (if phone we are in VW whereas in laptop we are in px)
            var sizeCell = (100 / app.randomSize)
            var sizeCellVwPx = sizeCell + 'vw'
          
        } else if(window.screen.width >= 500) {
            console.log('ya')
            var sizeCell = (500 / app.randomSize)
            var sizeCellVwPx = sizeCell + 'px'
        }

        for(let i=0;i<(app.randomSize**2);i++) {
    
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
                elem.style.backgroundImage = 'url(/C3G1/fruit' + numFruit  + '.png)'
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
    dragLaptop() {
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
       dragMobile() {

        app. disableScroll()

        var fruits = document.querySelectorAll('.fill')
        for(let i=0; i<fruits.length;i++) {
            var initialTop = fruits[i].style.top //get the initial position of a fruit before moving. Useful if dragged outside the gris in order to position the fruti back to its current location>.
            var initialLeft = fruits[i].style.left
         fruits[i].addEventListener('touchmove',function(ev) {



             var touchLocation = ev.targetTouches[0];
             fruits[i].style.position = "absolute";
             fruits[i].style.left = touchLocation.pageX + 'px'
             fruits[i].style.top = touchLocation.pageY + 'px'
         })
        //constraint to do not drag elsewhere than in the grid_________________
        fruits[i].addEventListener('touchend',function(ev) {
            var halfCell = fruits[i].clientHeight/2 //if drop is not in the grid, fruit take back its initial position
        
            var x = parseFloat(fruits[i].style.left)+parseFloat(halfCell)
            var y = parseFloat(fruits[i].style.top)+parseFloat(halfCell)

            var topGrid = document.querySelector('.grid').getBoundingClientRect().top
            var bottomGrid = document.querySelector('.grid').getBoundingClientRect().bottom

            if (topGrid> y  || bottomGrid < y ) {
                fruits[i].style.left = initialLeft
                fruits[i].style.top = initialTop
            }

            //Now, we want the fruit fit perfectly in the cell according (TO BE CONTNUED)
            var cells = document.querySelectorAll('.cell')
            var cellsSize = parseFloat(cells[0].clientHeight)
            var menuHeight = document.querySelector('.menu').clientHeight
            var yNoMenu = y - menuHeight
            console.log(yNoMenu)

            




           /*
            for(let j=0; j<cells.length;j++) {
                if((x/cellsSize > (j%app.randomSize)) && (x/cellsSize < (j+1)%app.randomSize)) {
                    fruits[i].style.left = parseFloat((j%app.randomSize)*cellsSize) + 'px'
                    console.log(j)
                    

                }
                if(yNoMenu/cellsSize > Math.floor(j/app.randomSize) && (yNoMenu/cellsSize < Math.floor(((j/app.randomSize)+1)))) {
                    fruits[i].style.top = menuHeight + parseFloat(Math.floor(j/app.randomSize)*cellsSize) + 'px'

                    console.log(j)

                }
                
            } 
            */

            
            for(let j=0; j<cells.length;j++) {
                var moduloPlus1 = (j+1)%app.randomSize
                if(j%app.randomSize == app.randomSize-1) {
                    moduloPlus1 = app.randomSize 
                }   
                if(((x/cellsSize > (j%app.randomSize)) && (x/cellsSize < moduloPlus1)) && (yNoMenu/cellsSize > Math.floor(j/app.randomSize) && (yNoMenu/cellsSize < Math.floor((j/app.randomSize)+1)))) {

                    if(!cells[j].hasChildNodes()) {
                        fruits[i].style.left = parseFloat((j%app.randomSize)*cellsSize) + 'px'
                        fruits[i].style.top = menuHeight + parseFloat(Math.floor(j/app.randomSize)*cellsSize) + 'px'

                        cells[j].appendChild(ev.target)
                        
                        //initialTop = fruits[i].style.top //get the initial position of a fruit before moving. Useful if dragged outside the gris in order to position the fruti back to its current location>.
                        //initialLeft = fruits[i].style.left


                    } else {
                        fruits[i].style.left = initialLeft
                        fruits[i].style.top = initialTop
                        
                    }
                    
                }
            }
            



        })

 
        }

       }, 
       drag() { // Two function of drag created : one for mobile one for laptop
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            app.dragMobile()
          }else{
            // false for not mobile device
            app.dragLaptop()
          }


       },
       disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    },
    giveAnswer() { //CHECK IF ANSWER CORRECT AND LOAD NEW GRID

        const onClick = (event) => {
            
            var numberFruits = document.querySelectorAll('.fill').length;
            var answerStudent = event.target.textContent; 
            var divisor = Math.sqrt(document.querySelectorAll('.cell').length);
            if (answerStudent == (numberFruits % divisor)) {
                app.countScore++;
                document.getElementById("score").textContent = app.countScore;
            } else if (app.countScore>0) {
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
            clearInterval(app.secondIntervall);

            document.addEventListener("click", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='numberButton') {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
            document.addEventListener("touchmove", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='fill') {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }

            popup(app.countScore);

    
        } else {
        app.countdown--;
        }
    }



}

app.startGame()





