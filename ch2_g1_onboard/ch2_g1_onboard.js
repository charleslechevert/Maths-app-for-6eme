app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = "Le capitaine est de retour en mer!"
        app.text = ["Malheureusement, le capitaine ne se souvient plus où il allait.","Tant pis, cap à l'ouest!", "Pour cela il va falloir déjouer les différents ennemis en mer et trouver des alliés.","Dans un premier temps, aide le capitaine à piloter le bateau et résoudre des additions.","Les nombres correspondants aux bateaux alliés sont les solutions des différentes additions.","Les autres bateaux sont des ennemis qui feront tout pour faire exploser et couler le bateau. Prends garde et bon courage!"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length+1) {

            window.location.href = "../ch2_g1/ch2_g1.html";
        }
        
    },
    buttonClick() {
        console.log('yo')
        document.getElementById('back').addEventListener('click', (event) => {
            console.log('yo')
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch2_g1/ch2_g1.html";

        })
    }

}

app.init()


