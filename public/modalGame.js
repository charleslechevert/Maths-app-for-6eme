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