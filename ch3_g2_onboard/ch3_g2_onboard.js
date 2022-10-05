app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Le capitaine a décidé de s'aventurer dans la jungle!`
        app.text = ["La légende raconte qu'il existe un temple qui abrite un trésor!", "Personne n'a jamais trouvé ce temple car le chemin pour y accéder est périlleux." ,"Après quelques heures de marche, le capitaine tombe nez à nez avec un cours d'eau", "Pour le traverser, il faut sauter sur des rondins de bois en mouvement.","utilise ta connaissance sur les multiples afin d'aider le capitaine à traverser cette épreuve."];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length+1) {

            window.location.href = "../ch3_g2/ch3_g2.html";
        }
        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch3_g2/ch3_g2.html"

        })
    }

}

app.init()


