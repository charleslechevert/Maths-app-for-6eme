document.getElementById('dropdownbtn').addEventListener('click',() => {
    document.querySelector(".dropdown-content").classList.toggle("show");
})

document.querySelector('main').addEventListener('click',() => {
    console.log('ok')
    document.querySelector(".dropdown-content").classList.remove("show");
})




