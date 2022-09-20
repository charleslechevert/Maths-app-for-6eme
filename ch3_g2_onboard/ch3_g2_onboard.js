app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Au centre de l'île, il existe une source qui contient des nombres décimaux...`
        app.text = ["Tout les pouvoirs mystiques de l'île proviendraient de cette source...", "Les nombres décimaux coulent le long d'une rivière que le capitaine a trouvé grâce à une vieille carte qu'il possède" ,"Il paraît même que les zéros inutiles peuvent se transformer en pièce d'or!!", "Aide le capitaine à obtenir des pièces, elles pourraient s'avérer utile pour la suite de l'aventure.","Pour cela, clique sur les zéros inutiles des différents nombres décimaux qui coulent le long de la rivière"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length) {

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


