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


//progress bar

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    let pos = document.documentElement.scrollTop
    // console.log(pos)

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)
    // console.log(scrollValue)

    if (pos > 50)
        scrollProgress.style.display = 'grid'
    else
        scrollProgress.style.display = 'none'

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue