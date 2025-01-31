const arrow = document.getElementById("arrow");

window.addEventListener('scroll', ()=>{
    let scrollPosition = window.scrollY
    if(scrollPosition  <= 5){
        arrow.classList.remove('fade-out')
     
    }else{
        arrow.classList.add("fade-out")
    }
})