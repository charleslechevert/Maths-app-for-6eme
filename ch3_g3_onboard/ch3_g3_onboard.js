app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        document.getElementById('story').textContent = `Le capitaine aperçoit le temple!`
        app.text = ["Mais pour y accéder, il va devoir marcher sur des dalles en béton qui recouvent un terrain marécageux.", "Certaines dalles sont fiables et solides mais d'autres ne le sont pas et le capitaine s'enfonceraient à tout jamais dans le marécage si elles sont choisies." ,"Utilise tes connaissances sur les multiples afin d'aider le capitaine à rejoindre le temple."];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length+1) {

            window.location.href = "../ch3_g3/ch3_g3.html";
        }
        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch3_g3/ch3_g3.html"

        })
    }

}

app.init()


