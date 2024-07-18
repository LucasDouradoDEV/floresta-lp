let titlePage = document.querySelector('#title-page')
let passaro1 = document.querySelector("#passaro1")
let passaro2 = document.querySelector("#passaro2")
let btn = document.querySelector('#btn')
let terra = document.querySelector('#terra')
let floresta = document.querySelector('#floresta')
let agua = document.querySelector('#agua')
let header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    titlePage.style.top = 50 + value * -.1 + '%'

    // bird 1
    passaro1.style.top = value * -.5 + 'px'
    passaro1.style.left = value * -.5 + 'px'

    // bird 2
    passaro2.style.top = value * -.5 + 'px'
    passaro2.style.left = value * .5 + 'px'
    
    // button
    btn.style.marginTop = value * .5 + 'px'

    // terra.style.top = value * -.12 + 'px'
    // floresta.style.top = value * -.25 + 'px'
    
})