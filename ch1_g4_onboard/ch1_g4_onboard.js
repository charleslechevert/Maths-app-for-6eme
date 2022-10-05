app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Le capitaine a entendu parler d'un pirate capable de réparer n'importe quel bateau`
        app.text = ["Cependant, ce pirate est très avare et demande une montagne de pièces d'or en échange.", "Le capitaine en a récolté énormément dans la rivière mais il lui en manque encore beaucoup." ,"Les perroquets maintenant sages, le capitaine a eu une idée géniale.", "Il s'est rappelé qu'il avait un sac de chocolat dans la cale de son bateau","Le chocolat est un denrée presque aussi rare que l'or sur l'île et il va donc vendre cette ressource sur le marché!","Aide le capitaine a vendre son chocolat sur le marché!"];
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


