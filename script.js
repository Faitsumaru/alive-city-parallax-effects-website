const moon = document.getElementById("moon")
const train = document.getElementById("train")
const text = document.getElementById("text")

const desert_moon = document.getElementById("desert-moon")
const man = document.getElementById("man")

window.addEventListener("scroll", () => {

    let value = window.scrollY
   
    moon.style.top = value * .9 + 'px'
    text.style.top = 80 + value * -.2 + '%'
    train.style.left = value * 1.5 + 'px'

    desert_moon.style.top = value * .3 + 'px'
    man.style.left = value * .6 + 'px'

})