let progress = document.querySelector(".scroll-indicator .progress");
let scrollHeight= document.documentElement.scrollHeight - window.innerHeight


window.addEventListener('scroll', scroll)

function scroll(){
    let scrollTop = window.scrollY;
    let scrolled = (scrollTop/scrollHeight) * 100
    progress.style.width = `${scrolled}%`
}