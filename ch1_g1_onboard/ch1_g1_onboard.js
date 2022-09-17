app = {
    elm : '',
    text: '',
    counter:'',
    init() {
        addEventListener('load', app.story) 
        

    },
    story() {
        document.getElementById('story').textContent = 'Le captaine ne se souvient plus de ses derniers jours en mer...'
        app.text = ["Une terrible tempête s'est abbatue au large et le voici naufragé sur une île mystérieuse", "Lui et ses perroquets sont les seuls rescapés de son équipage... :'(", "Vite il faut se ressaisir! Le capitaine a atteri sur la très hostile île des nombres décimaux...","Le capitaine a besoin de ton aide","Pour que le capitaine survive, tu vas l'aider à récuperer un maximum de denrées alimentaires!","Choisis les boîtes les plus lourdes en cliquant dessus! Good luck :)"];
        app.counter = 0;
        app.elem = document.getElementById('story');
        var inst = setInterval(app.change, 6000);
    },


    change() {
        app.elem.textContent = app.text[app.counter];
        app.counter++;
        if (app.counter >= app.text.length) {

            window.location.href = "../ch1/ch1_g1.html";
        }
        
    }

}

app.init()


