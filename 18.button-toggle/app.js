const inpt = document.getElementById("flick");
const lab = document.querySelector("label")

lab.addEventListener("click", ()=>{
  inpt.checked ? document.body.style.backgroundColor = "#fff" : document.body.style.backgroundColor = "#000"
})

