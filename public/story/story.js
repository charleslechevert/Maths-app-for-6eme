console.log('HELLO')
app = {
    elm : '',
    text: '',
    counter:0,
    stories : document.querySelectorAll('#story'),
    init() {
        console.log(app.stories.length)
        addEventListener('load', app.story)
        app.buttonClick()
        

    },
    story() {
        app.stories[0].style.display = 'block'

        var inst = setInterval(app.change, 6000);
    },


    change() {
        if (app.counter >= app.stories.length-1) {
            window.location.href = "../ch1/ch1_g1.html";
        }
        app.stories[app.counter].style.display = ''
        app.counter++;
        app.stories[app.counter].style.display = 'block'

        

        
    },
    buttonClick() {
        document.getElementById('back').addEventListener('click', (event) => {
            window.location.href = "../menu/html/index.html"

        })

        document.getElementById('skip').addEventListener('click', (event) => {
            window.location.href = "../ch1/ch1_g1.html"

        })
    }

}

app.init()


