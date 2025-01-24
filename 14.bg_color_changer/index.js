const btn = document.getElementById("btn");
const hex = document.getElementById("hexCode");

function randomColor(){
   let numLetters = "0123456789ABCDEF";
   let color = "#";
   for(let i = 0; i < 6; i++) {
    color += numLetters[Math.floor(Math.random() * 16)]
   }
   hex.textContent =`${color}`
   document.body.style.backgroundColor = `${color}`
}

btn.addEventListener("click", randomColor)