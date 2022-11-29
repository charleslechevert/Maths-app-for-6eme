document.querySelector('.help_back').addEventListener('click', () => {
    document.querySelector('.help_container').style.display = 'none';
    document.querySelector('.main').style.filter = 'none';
    
})

document.querySelector('.modal__nav--text--help').addEventListener('click', () => {
    document.querySelector('.help_container').style.display = 'block';
    document.querySelector('main').style.filter = 'brightness(50%)';
    document.querySelector('.help_container').style.filter = 'none';
    
})