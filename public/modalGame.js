function modalEndGame(countScore) {
console.log('yooo')
document.body.style.pointerEvents = 'none'
document.querySelector('.modal__container--end').style.pointerEvents = 'auto'
document.querySelector('#modal__score--end').textContent = `SCORE : ${countScore}`
document.querySelector('.modal__container--end').style.display = 'flex'
}      

document.querySelector('#modal__again').addEventListener('click',()=> {
    location.reload()
})

/*

mouseCursor = document.querySelector('.cursor')

window.addEventListener("mousemove",cursor);


function cursor(e) {
    console.log('yo')
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

window.addEventListener("click",clicked);

function changeColor() {
    mouseCursor.style.backgroundColor = 'burlywood'
}

function clicked(e) {
    console.log('yo')
    mouseCursor.style.backgroundColor = 'rgb(134, 96, 56)';
    setTimeout(changeColor,100);

}

*/
