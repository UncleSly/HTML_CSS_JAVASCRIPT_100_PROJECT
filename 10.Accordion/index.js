const divContainer = document.querySelectorAll(".accordion")

divContainer.forEach(div => div.addEventListener("click", ()=>{
    div.classList.toggle("active")
}))