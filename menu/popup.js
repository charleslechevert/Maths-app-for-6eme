
function popup(countScore) {

    window.PointerEvent = 'none'

    const popup = document.createElement('div') //Create parent div
    popup.classList.add('popup') //assign class
    document.getElementsByTagName('body')[0].append(popup)
    popup.PointerEvent = 'auto'
    popup.style.backgroundColor = 'rgb(57, 54, 54)'
    popup.style.width = '75vw'
    popup.style.height = '40vh'
    popup.style.position = 'absolute'
    popup.style.top = '50%'
    popup.style.left = '50%'
    popup.style.transform = 'translate(-50%,-50%)';
    popup.style.borderRadius = '4px';
    popup.style.display ='flex'
    popup.style.flexDirection = 'column'
    popup.style.justifyContent = 'space-around'
    popup.style.color = 'white'
    popup.style.animation = 'appear 350ms ease-in'
    popup.style.maxWidth = '500px'
    popup.style.boxShadow = '12px 12px 2px 1px rgba(46, 46, 65, 0.2)'

    


    const theScore = document.createElement('p') //Create parent div
    theScore.classList.add('finalScore') //assign class
    popup.append(theScore)
    theScore.textContent="SCORE : " + countScore
    theScore.style.textAlign = "center"

    const logo = document.createElement('img')
    logo.src = '../menu/logo.png'
    logo.classList.add('logo')
    popup.append(logo)
    logo.style.height = '25vw'
    logo.style.width = '25vw'
    logo.style.margin = '0 auto'

    const theNav = document.createElement('div') //Create parent div
    theNav.classList.add('navigation') //assign class
    popup.append(theNav)
    theNav.style.display ='flex'
    theNav.style.flexDirection = 'row'
    theNav.style.justifyContent = 'space-around'
    theNav.style.color = 'white'

    const back  = document.createElement('p') //Create parent div
    back.classList.add('back') //assign class
    theNav.append(back)
    back.textContent = 'RETOUR'
    back.style.fontSize = '2vh'

    const again  = document.createElement('p') //Create parent div
    again.classList.add('again') //assign class
    theNav.append(again)
    again.textContent = 'RECOMMENCER'
    again.style.fontSize = '2vh'

    document.querySelector('.back').addEventListener('click',()=> {
        location.href = "../index.html"
    })

    document.querySelector('.again').addEventListener('click',()=> {
        location.reload()
    })


}      
