
scores = document.querySelectorAll('.classroom__score-row') 

for(score of scores) {
    if(score.querySelector('.classroom__score-CG').textContent != 'C1G1') {
        score.style.display = 'none'
    } 
}

document.querySelector('.classroom__gamelist').addEventListener('change', () => {
    id = document.querySelector('.classroom__gamelist').value

    for(score of scores) {
        score.style.display = 'flex'
        if(score.querySelector('.classroom__score-CG').textContent != id) {
            score.style.display = 'none'
        } 
    }

})
