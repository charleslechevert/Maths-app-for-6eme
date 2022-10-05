app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Maintenant, il faut réfléchir afin de trouver une solution pour quitter cette île.`
        app.text = ["Cependant, le capitaine a un léger problème : ses perroquets sont trop turbulents!", "Chaque perroquet possède une place précise sur l'échelle qui mène au mat du bateau." ,"Quand ils sont à leur place, les perroquets sont sages comme des images.", "Déplace les perroquets sur leur barreau correspondant afin que le capitaine puisse réflechir! Good luck ;)"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length) {

            window.location.href = "../ch1_g3/ch1_g3.html";
        }
        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch1_g3/ch1_g3.html"

        })
    }

}

app.init()


