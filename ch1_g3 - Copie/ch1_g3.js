

app = {
  number : [0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3],
  playerDigit : 4,
  test : true,
  countScore : 0,
  numSelected :0,
  numLadders : 0,
  parrot: 0,
  idParrot:0,
  init() {
    app.selectParrot()
    app.selectLadder()
  },

  generateNumber() {
    var randomNumber = Math.floor(Math.random()*16);
    document.getElementById('parrot1').innerHTML = number[randomNumber];

    randomNumber = Math.floor(Math.random()*16);
    document.getElementById('parrot2').innerHTML = number[randomNumber];

    randomNumber = Math.floor(Math.random()*16);
    document.getElementById('parrot3').innerHTML = number[randomNumber];

    randomNumber = Math.floor(Math.random()*16);
    document.getElementById('parrot4').innerHTML = number[randomNumber];
  },
  selectParrot() {
    console.log(imgs)
    var imgs = document.querySelectorAll('.parrot__img')
    console.log(imgs)
    for(let i = 0; i<imgs.length;i++) {
      imgs[i].addEventListener('click', (event)=> {
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
    var randomNumber = Math.floor(Math.random()*16);
    app.numSelected.textContent = app.number[randomNumber]; //new number
    var elem = document.createElement("img");
    elem.classList.add('parrot__img');
    elem.setAttribute("src", 'parrot1.png');
    elem.setAttribute("id", app.idParrot);
    app.numSelected.prepend(elem)
    var imgs = document.querySelectorAll('.parrot__img')
    app.selectParrot() //this is mandatory because we have to apply an eventlistener on new parrot
    
  } 

}

app.init()







//Manage drag and drop function

function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
  
  //drag and drop - don't touch. Need the line up 
  var data = ev.dataTransfer.getData("text");
  
  
  //get the value of the ladder
  ladder_value = ev.currentTarget
  ladder_value = ladder_value.querySelector('.number').innerHTML
  console.log(ladder_value)

  //get the value of the parrot
  let parrot_value = 0;
  if (data == 'drag1') {
    parrot_value = document.querySelector('#parrot1').innerHTML;
    console.log(parrot_value);
  } else if (data == 'drag2') {
    parrot_value = document.querySelector('#parrot2').innerHTML;
    console.log(parrot_value);
  } else if (data == 'drag3') {
    parrot_value = document.querySelector('#parrot3').innerHTML;
    console.log(parrot_value);
  }  else if (data == 'drag4') {
      parrot_value = document.querySelector('#parrot4').innerHTML;
      console.log(parrot_value);
  }


  if (parrot_value == ladder_value) {

    //drag and drop - don't touch
    ev.preventDefault();
    ev.currentTarget.append(document.getElementById(data));


    document.getElementById(data).classList.remove('parrot__img');
    document.getElementById(data).classList.add('parrot__img-onladder');

    //manage the score
    countScore++;
    document.getElementById('score').textContent = countScore;

    //manage new parrot 

    if (data=='drag1') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");

      elem.setAttribute("src", 'parrot1.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag1")
      document.getElementById("parrotContainer1").prepend(elem);
      document.getElementById('parrot1').innerHTML = number[randomNumber];

    } 

    if (data=='drag2') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot2.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag2")
      document.getElementById("parrotContainer2").prepend(elem);
      document.getElementById('parrot2').innerHTML = number[randomNumber];
    }

    if (data=='drag3') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot3.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag3")
      document.getElementById("parrotContainer3").prepend(elem);
      document.getElementById('parrot3').innerHTML = number[randomNumber];
    }

    if (data=='drag4') {
      var randomNumber = Math.floor(Math.random()*16);

      var elem = document.createElement("img");
      elem.setAttribute("src", 'parrot4.png');
      elem.setAttribute("class","parrot__img-container");
      elem.setAttribute("draggable","true")
      elem.setAttribute("ondragstart","drag(event)")
      elem.setAttribute("id","drag4")
      document.getElementById("parrotContainer4").prepend(elem);
      document.getElementById('parrot4').innerHTML = number[randomNumber];
    }
  
  

  
 }

}




/*startGame */

var countdown = 30;
function startGame() {
    state = false;
    if (state==false) { //state manage the fact you can only once press start
        state = true;
        document.getElementById('start').style.color = 'transparent';
        document.querySelector('.main__numbers').style.animation="slide-bottom 30s linear infinite";
        setInterval(timer,1000);
    }

}

/*Manage time */

function timer() {
    document.getElementById('countdown').innerHTML = countdown;

    if (countdown==0) {
        clearInterval(timer);
        alert("Gamer Over. Score: " + countScore);
        location.reload();

    }
    countdown--;
}

