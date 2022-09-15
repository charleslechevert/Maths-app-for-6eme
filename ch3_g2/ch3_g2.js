app = {
    countscore : 0,
    init() {
        app.numberGenerated()

      },
    // it generates the number from left to right on 3 differents height
    numberGenerated() { 
        for(let iterateRows =0; iterateRows<3; iterateRows++) {
            for(let iterateNumber=0;iterateNumber<200;iterateNumber++) {
                const newDiv =  document.createElement('div');
                console.log(newDiv)
                newDiv.classList.add('number');
                newDiv.textContent = Math.ceil(Math.random()*50)
                console.log(document.getElementById('container1'))
                console.log(iterateRows)
                document.getElementById(`container${iterateRows + 1}`).append(newDiv);
            
            }
        }

    },
    moveSprite() { //this function will make the sprite move if the right log is clicked

        var logElm = document.querySelectorAll('.number')
        for(let i=0;i<logElm.length;i++) {
            logElm[i].addEventListener('click', function(event) {
                var divisorElm = document.querySelector('.multiple__number').textContent
                if (event.target.textContent % divisorElm == 0) { //Check if the clicked element is multiple of the bottom-right number
                    console.log('cool')
                    var spriteElm =  document.querySelector('.sprite-img')
                    document.querySelector('#container1').replaceChild(spriteElm, event.target)
                    console.log(document.querySelector('.sprite-img'))
                    document.querySelector('.sprite-img').style.backgroundImage = 'url(log.png)'
                    document.querySelector('.sprite-img').style.backgroundSize = 'cover'
                    app.countscore++;

                }
            })
        }
        

    }
}

app.init()
app.moveSprite()