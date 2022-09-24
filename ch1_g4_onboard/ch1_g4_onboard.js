app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Il existe un pirate`
        app.text = ["Cependant, le capitaine a un léger problème : ses perroquets sont trop turbulents!", "Chaque perroquet possède une place précise sur l'échelle qui mène au mat du bateau" ,"Quand ils sont à leur place, les perroquets sont sages comme des images.", "Aide le perroquet à placer les perroquets sur l'échelle (c'est un peu comme un axe gradué)","Déplace les perroquets et place les au bon endroit sur l'échelle! Good luck ;)"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length) {

            window.location.href = "../ch1_g4/ch1_g4.html";
        }
        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch1_g4/ch1_g4.html"

        })
    }

}

app.init()


