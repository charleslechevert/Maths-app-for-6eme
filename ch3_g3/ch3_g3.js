app = {
    gridElm: document.querySelector('.grid'),
    divisor : undefined,


    init() {
        app.createGrid()
        app.placeSprite()
        app.generateNearNumber()

    },

    createGrid(gridSize = 8, cellSize = 25) {
        // Je réinitialise le contenu dans invaderElm. En gros je supprimer la grille qui se situe dedans
        app.gridElm.textContent = '';
    
        for(let rowNumber = 0; rowNumber < gridSize; rowNumber++) {
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
        
      },
      placeSprite() {
        var lastRow = document.querySelectorAll(".row")[7]; //Select last row
        var startCell = lastRow.querySelectorAll(".cell")[3]; //Select the cell where the sprite will always start
        var createSprite = document.createElement('img');
        createSprite.classList.add('sprite')
        createSprite.src = "sprite.png";
        startCell.append(createSprite);
        app.generateDivisor()
        

       
        
      },
      generateNearNumber(){
        var spritePosition = document.querySelector('.sprite').parentElement.id
        console.log('yo')
        
        //generate the position of the neighbour 
        var upPosition = parseInt(spritePosition) - 8
        var leftPosition = parseInt(spritePosition) - 1 
        var rightPosition = parseInt(spritePosition) + 1 

        // generate the neighbour number : 1 multiple 2 not-multiple
        var number1 = 0
        while (number1 % 2 == 0) {
            number1 = Math.ceil(Math.random()*50)
        }
        var number2 = 0
        while (number2 % 2 == 0) {
            number2 = Math.ceil(Math.random()*50)
        }

        var number3 = undefined
        while (number3 % 2 != 0) {
            number3 = Math.ceil(Math.random()*50)
        }
        
        //put the value in an array and shuffle it randomly 
        var numbers = [number1,number2,number3]
        console.log(numbers)
        app.shuffle(numbers) 
        console.log(numbers)

        //Connect the random numbers to the neigbhour cells
        document.getElementById(upPosition).textContent = numbers[0]
        console.log(document.getElementById(leftPosition))
        document.getElementById(leftPosition).textContent = numbers[1]
        console.log(document.getElementById(rightPosition))
        document.getElementById(rightPosition).textContent = numbers[2]
        
        
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
        if (event.target.textContent != '' && event.target.textContent % 2 == 0) {
            event.target.textContent = ''
            event.target.append(document.querySelector('.sprite'))
            app.generateNearNumber()
            

        } 

        
        
    },
    generateDivisor () {
        app.divisor = Math.ceil(Math.random()*11)
        document.querySelector('.divisor__number').textContent = app.divisor
        console.log(app.divisor)
    }

}

app.init() 
