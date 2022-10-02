

app = {
  number : [0.2,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4],
  playerDigit : 4,
  test : true,
  countScore : 0,
  numSelected :0,
  numLadders : 0,
  parrot: 0,
  idParrot:0,
  state: false,
  countdown:40,
  init() {
    app.startGame()
    
  },

  generateNumber() {
    var randomNumber = Math.floor(Math.random()*10);
    document.getElementById('parrot1').innerHTML = app.number[randomNumber];

    randomNumber = Math.floor(Math.random()*10);
    document.getElementById('parrot2').innerHTML = app.number[randomNumber];

    randomNumber = Math.floor(Math.random()*10);
    document.getElementById('parrot3').innerHTML = app.number[randomNumber];

    randomNumber = Math.floor(Math.random()*10);
    document.getElementById('parrot4').innerHTML = app.number[randomNumber];
  },
  selectParrot() {
    var imgs = document.querySelectorAll('.parrot__img')
    for(let i = 0; i<imgs.length;i++) {
      imgs[i].addEventListener('click', (event)=> {


        imgs[0].style.animation = 'none' //desactivate all the other parrots bouncing
        imgs[1].style.animation = 'none'
        imgs[2].style.animation = 'none'
        imgs[3].style.animation = 'none'

        imgs[i].style.animation = 'gelatine 0.5s infinite';
        console.log(imgs)
        if(event.target.id == 'im1') {
          app.numSelected = document.getElementById('parrot1')
          app.parrot = document.getElementById('im1')
          app.idParrot = event.target.id 
        }
        if(event.target.id == 'im2') {
          app.numSelected = document.getElementById('parrot2')
          app.parrot = document.getElementById('im2')
          app.idParrot = event.target.id 
        }
        if(event.target.id == 'im3') {
          app.numSelected = document.getElementById('parrot3')
          app.parrot = document.getElementById('im3')
          app.idParrot = event.target.id 
        }
        if(event.target.id == 'im4') {
          app.numSelected = document.getElementById('parrot4')
          app.parrot = document.getElementById('im4')
          app.idParrot = event.target.id 
        }
              
      })

    }
  },
  selectLadder() {
    var ladders = document.querySelectorAll('.number__ladder')
    for(let i=0;i<ladders.length;i++) {
      ladders[i].addEventListener('click', (event)=> {
        app.numLadders = event.currentTarget.children[1].textContent
        if (app.numLadders == app.numSelected.textContent) {
          event.currentTarget.append(app.parrot)
          app.parrot.style.position = 'absolute'
          app.parrot.style.width = '30%'
          app.parrot.style.maxWidth = '170px'
          app.parrot.style.left = '10%'
          app.parrot.classList.remove('parrot__img')
          app.parrot.id = 'none'
          app.parrot.style.animation = 'none'
          app.parrot.style.pointerEvents = 'none'

          app.newParrot() //call the function in order to have new parrot and new number
          
          app.countScore++;
          document.getElementById('score').textContent = app.countScore;
          
    
        }
      })
    }


  },
  newParrot() {
   
    var randomNumber = Math.floor(Math.random()*16); //new number - while loop used in order to select numbers which are still in the game
    app.numSelected.textContent = app.number[randomNumber]
    while(app.numSelected.textContent < ((40 - app.countdown)/10)+0.2) {
      randomNumber = Math.floor(Math.random()*16)
      app.numSelected.textContent = app.number[randomNumber]

    }

    var elem = document.createElement("img");
    elem.classList.add('parrot__img');
    
    elem.setAttribute("src", 'parrot'+ (Math.ceil(Math.random()*8)) + '.png');
    elem.setAttribute("id", app.idParrot);
    console.log(app.numSelected)
    app.numSelected.parentElement.prepend(elem)
    var imgs = document.querySelectorAll('.parrot__img')
    app.selectParrot() //this is mandatory because we have to apply an eventlistener on new parrot
    
  }, 

  startGame() {
    app.state = false;
    document.getElementById('start').addEventListener('click',()=> {
      if (app.state==false) { //state manage the fact you can only once press start
        app.state = true;
        document.getElementById('start').style.color = 'transparent';
        document.querySelector('.main__numbers').style.animation="slide-bottom 42s linear";
        app.secondsIntervall = setInterval(app.timer,1000);
        app.secondsIntervall
        app.generateNumber()
        app.selectParrot()
        app.selectLadder()
    }

    })
    

  },
  timer() {
    document.getElementById('countdown').innerHTML = app.countdown;

    if (app.countdown==0) {
        clearInterval(app.secondsIntervall);
        console.log('ya')
        popup(app.countScore)
       

    } else {
    app.countdown--;
    }

  }
}

app.init()


//this function make the content responsive to any browser (height)
window.addEventListener('load', (event) => {
  console.log(window.innerHeight)
  document.querySelector('.menu').style.height = window.innerHeight/10 + 'px'
  document.querySelector('.main').style.height = window.innerHeight*0.9 + 'px'
});




