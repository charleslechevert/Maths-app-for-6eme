console.log('HELLO')
app = {
    elm : '',
    text: '',
    counter:0,
    stories : document.querySelectorAll('#story'),
    init() {
        console.log(app.stories.length)
        addEventListener('load', app.story)
        

    },
    story() {
        app.stories[0].style.display = 'block'

        var inst = setInterval(app.change, 6000);
    },


    change() {
        if (app.counter >= app.stories.length-1) {
            console.log(window.location.href)
            window.location.href = `/game/${window.location.href.slice(-4)}`;
        }
        app.stories[app.counter].style.display = ''
        app.counter++;
        app.stories[app.counter].style.display = 'block'

        

        
    },

}

app.init()


