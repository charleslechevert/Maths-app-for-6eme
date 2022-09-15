var randomSize = null; 
var numberI = 0;
var countScore = 0;

//GENERATE GRID____________________________________________

function generateGrid() {

    var numFruit = Math.ceil(Math.random()*8) //Select randomly fruit to displat


    var randomSize = Math.floor(Math.random() * (8 - 4) + 4)
    console.log(randomSize)
    var sizeCell = (100 / randomSize)
    console.log(sizeCell)
    for(let i=0;i<(randomSize**2);i++) {

        //this part generate the grid with right size for the cell in order to take all the room
        var newCell = document.createElement('div');

        newCell.classList.add('cell')
        newCell.style.width = sizeCell + 'vw'
        newCell.style.height = sizeCell + 'vw'
        document.querySelector('.grid').appendChild(newCell)

        //This part generate random object on the grid
        var random_boolean = Math.random() < 0.5;
        if (random_boolean==true) {
            var elem = document.createElement("div");
            elem.setAttribute("draggable", 'true');
            document.querySelectorAll(".cell")[i].appendChild(elem);
            elem.setAttribute("class", 'fill'); 
            elem.style.height= sizeCell + 'vw'
            elem.style.width= sizeCell + 'vw'
            elem.style.backgroundImage = 'url(fruit' + numFruit  + '.png)'
            
            




            
            
        } 
        

    }
    
}

//GENERATE PAD_________________________________________________________________________________________________
function generatePad() {
    for(let i=0;i<10;i++) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('numberButton');
        newDiv.textContent=i;
        document.querySelector('.pad').append(newDiv)
    }


}



// DRAG AND DROP________________________________________________________________________________________________

function drag() {
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
        this.className = 'cell';
    }
    
    function dragDrop() {
        this.className = 'cell';
        console.log(numberI)
        if (i==numberI) {
            this.append(fill[i]);
        }
    }

    }
}

//CHECK IF ANSWER CORRECT AND LOAD NEW GRID_________________________________________________________________

function giveAnswer() {

    const onClick = (event) => {
        
        var numberFruits = document.querySelectorAll('.fill').length;
        var answerStudent = event.target.textContent; 
        var divisor = Math.sqrt(document.querySelectorAll('.cell').length);
        if (answerStudent == (numberFruits % divisor)) {
            countScore++;
            document.getElementById("score").textContent = countScore;
        } else {
            countScore--;
            document.getElementById("score").textContent = countScore;
        }


        var allDivs = document.querySelectorAll('.cell')
        console.log(allDivs)
        for (const allDiv of allDivs) {

            allDiv.remove()
        }

        generateGrid()
        drag()
      }



    
        var numberElms = document.querySelectorAll('.numberButton')
        console.log(numberElms)
        for (const numberElm of numberElms) {
                numberElm.addEventListener('click', onClick);
        }



   
}



//START GAME AS USUAL WITH THE DIFFERENT FUNCTIONS CALLED THEN_________________________________

var countdown = 90;
function startGame() {
    state = false;
    if (state==false) { //state manage the fact you can only once press start
        state = true;
        document.getElementById('start').style.color = 'transparent';
        setInterval(timer,1000);
        generateGrid()
        generatePad()
        giveAnswer()
        drag()

    }

}

//MANAGE TIME_________________________________________________________________________________________________________________________

function timer() {
    document.getElementById('countdown').innerHTML = countdown;

    if (countdown==0) {
        clearInterval(timer);
        alert("Gamer Over. Score: " + countScore);
        location.reload();

    }
    countdown--;
}