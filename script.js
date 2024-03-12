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


document.addEventListener("DOMContentLoaded", (event) => {

    //header
    gsap.from('.logo', { scale: 2, opacity: .1, y: 50, duration: 2 })

    gsap.from('.navlist__item:nth-child(1)', { scale: 4,   opacity: .1, x: 200, y: -200, duration: 1 }, '.1')
    gsap.from('.navlist__item:nth-child(2)', { scale: 4, opacity: .1, x: 200, y: -200, duration: 1 }, '.5')
    gsap.from('.navlist__item:nth-child(3)', { scale: 4, opacity: .1, x: 300, y: -250, duration: 1 }, '1')
    gsap.from('.navlist__item:nth-child(4)', { scale: 4, opacity: .1, x: 300, y: -250, duration: 1 }, '1.5')

    //home
    gsap.from('#moon', { rotation: -50, opacity: .1, duration: 3})

    gsap.from('#train', { rotation: -1.5, duration: 3})

})

//about
gsap.from('.about__info-title', { 
    scrollTrigger: '.about',
    rotation: -5, 
    duration: 3,
    y: 15,
    opacity: .1,
    scale: 1.25
})
gsap.from('.about__info-text', { 
    scrollTrigger: '.about',
    rotation: 5, 
    duration: 2,
    y: 50,
    opacity: 0,
    delay: .5,
    scale: 2
})
gsap.from('.about__info-btn', { 
    scrollTrigger: '.about',
    duration: 4,
    opacity: 0,
    delay: 1
})

//products
gsap.from('.blur-layer', { 
    scrollTrigger: '.products',
    rotation: 10, 
    duration: 5,
    y: -100,
    opacity: .1,
    scale: 4
})
gsap.from('.products__title', { 
    scrollTrigger: '.products',
    rotation: -5, 
    duration: 3,
    y: 40,
    opacity: 0,
    scale: 1.5
})

gsap.from('.products__cards-item', { 
    scrollTrigger: '.products',
    opacity: 0,
    duration: 3.5,
    scale: 1.3
})

gsap.from('.products__cards-item div', { 
    scrollTrigger: '.products',
    y: 100,
    duration: 2,
    scale: 1.25,
    opacity: 0
})
gsap.to('.products__cards-item div', { 
    scrollTrigger: '.products__title',
    keyframes: [
        {
            y: 0,
        },
    ],
    duration: 3,
    scale: 1,
    opacity: 1
})

gsap.from('.products__cards-item img', { 
    scrollTrigger: '.products',
    opacity: .5,
    scale: 2,
    duration: 3
})