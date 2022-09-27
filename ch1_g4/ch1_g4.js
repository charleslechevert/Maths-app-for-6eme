app = {
    gridElm : document.querySelector('.grid'),
    random : ['',''],
    chocoQuantity: 0,
    answer : 0,
    countScore : 0,
    countdown:50,
    startState : false,
    secondIntervall:'',

    init() {

        
        document.querySelector('.menu').style.height = window.innerHeight/10 + 'px'
        document.querySelector('main').style.height =  window.innerHeight/10*9 + 'px'
        app.startGame()
        
        

    },startGame() {
        document.getElementById('start').addEventListener('click', (event) => {
            
            if ( app.startState==false) { //state manage the fact you can only once press start
                app.startState = true;
                document.getElementById('start').style.color = 'transparent';
                app.secondIntervall = setInterval(app.timer,1000);
                app.secondIntervall
                app.createGrid()
                app.goodAnswer()
                app.submit()
                
        }
        })
    },
    timer() {
        document.getElementById('countdown').innerHTML = app.countdown;
    
        if (app.countdown==0) {
            clearInterval(app.secondIntervall);

            document.addEventListener("click", handler, true); //these five lines cancels the addeventlistener on the background of the popup
            function handler(e) {
                if (e.target.className =='big-button' || e.target.className =='cell') {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }

            popup(app.countScore)
            return app.timer;
            //location.reload();
    
        } else {
            app.countdown--;
        }
        
    },
    createGrid() {

       app.random = [Math.ceil(Math.random()*9 +1),Math.ceil(Math.random()*9 +1)] //generate random dim
       while (100 % (app.random[0]*app.random[1]) != 0) {
        app.random = [Math.ceil(Math.random()*9 +1),Math.ceil(Math.random()*9 +1)] // check that 100 modulo all the choco squares are equal to 0
       }

       app.random = app.random.sort((a, b) => b-a); //Sort te array in descending order in order to fit better with mobilephone

        
        for(let rowNumber = 0; rowNumber < app.random[0]; rowNumber++) {
            // Je vais créer mes lignes
            // Je créer mon élément
              const rowElm = document.createElement('div');
              // Je configure mon élément
              // ici on rajoute la class css `row` à notre élément HTML rowElm
              rowElm.classList.add('row');

              for(let cellNumber = 0; cellNumber < app.random[1]; cellNumber++) {
                // Je créer mon élément
                  const cellElm = document.createElement('div');
                  cellElm.style.width = (90/app.random[1]) + 'vw'
                  console.log(innerHeight)
                  console.log(app.random[0])
                  console.log((document.innerHeight*65/100)/app.random[0])

                  cellElm.style.height = ((innerHeight*60/100)/app.random[0]) + 'px'
                  // Je configure mon élément
                  // ici on rajoute la class css `cell` à notre élément HTML cellElm
                  cellElm.classList.add('cell');        
                  // Durant la configuration de ma cell, j'en profite pour lui rajouter un eventListener sur le click
                  cellElm.addEventListener('click', app.selectSquare);
                  // J'ajoute mon élément dans le DOM
                  rowElm.append(cellElm);

                  
                }
                
              app.gridElm.append(rowElm);
        }
        
        if (app.random[1]==2) { //manage an exception. When column equals 2 the square are too distorted so we reduce the width of the tablet.
            var cells = document.querySelectorAll('.cell')
            for(let i =0; i<cells.length;i++) {
                cells[i].style.width = (50/app.random[1]) + 'vw'
            }
            var rows = document.querySelectorAll('.row')
            for(let i =0; i<rows.length;i++) {
                rows[i].style.width = '50vw'
            }

        }

    },
    goodAnswer() { //Select an answer an put in the bubble box
        app.answer = Math.random().toFixed(2);



        while (((app.answer*100) % (100/(app.random[0]*app.random[1]))).toFixed(2) != 0 || app.answer==0) { // modulo doesn't work well with decimal so we do the while loop with integer by multiplying by 100
            app.answer = Math.random().toFixed(2);
        }

        document.querySelector('.answer').textContent =  app.answer + " unité s'il vous plaît"

        app.toggleSquare()

        

    },
    toggleSquare() {
        if(app.answer>0.50) {
            app.chocoQuantity=1;
            var cells = document.querySelectorAll('.cell') 
            for(let i =0;i<cells.length;i++) {
                cells[i].classList.add('opacity')
            }
        }

    },
    selectSquare(event) {  //Manage the click on square and count the choco quantity selected by the player.
        event.target.classList.toggle("opacity")
        if (event.target.classList.contains("opacity")) {
            app.chocoQuantity = app.chocoQuantity + (1/(app.random[0]*app.random[1]))
            parseFloat(app.chocoQuantity.toPrecision(2))
            
            
        } else if (event.target.classList.contains("opacity") == false) {
            app.chocoQuantity = app.chocoQuantity - (1/(app.random[0]*app.random[1]))
            app.chocoQuantity.toPrecision(2)
            
        }
        console.log(app.chocoQuantity)
        
        
        
    },
    submit() {
        document.querySelector('.big-button').addEventListener('click', () => { //Manage when ok button is clicked : count score + generate new grid    
            if(app.answer== app.chocoQuantity.toFixed(2)) {
                app.countScore++;
                document.getElementById('score').textContent = app.countScore;
            } else if(app.countScore >0) {
                app.countScore--;
                document.getElementById('score').textContent = app.countScore;
            }

            var cells = document.querySelectorAll('.cell')
            for(let i=0;i<cells.length;i++) {
                cells[i].remove()
            }
            app.chocoQuantity = 0;

            app.createGrid()
            app.generateSprite()
            app.goodAnswer()


        })
    },
    generateSprite() {
        document.querySelector('.sprite').src ='sprite' + Math.ceil(Math.random()*5) +'.png'
    }
}

app.init()
