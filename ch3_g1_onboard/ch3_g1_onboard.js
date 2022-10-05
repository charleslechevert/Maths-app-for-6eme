app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Le capitaine est bien arrivé sur l'île qu'il recherchait`
        app.text = ["C'est une immense jungle qui regorge de mystère!", "Les denrées ont été toutes écoulées en mer., il faut donc se nourir." ,"Au loin, le capitaine aperçoit des marchands qui vendent les fruits de la jungle en lot.", "Le nombre de fruit par lot correpond à la longueur du carré sur lequel sont disposés les fruits.","Les marchands sont d'accord de donner au capitaine les fruits en surplus qui ne forment pas un lot complet.","Aide le capitaine à trouver le nombre de fruits en surplus. Essaye de ne pas te tromper au risque que les marchands se fâchent!"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length+1) {

            window.location.href = "../ch3_g1/ch3_g1.html";
        }
        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch3_g1/ch3_g1.html"

        })
    }

}

app.init()


