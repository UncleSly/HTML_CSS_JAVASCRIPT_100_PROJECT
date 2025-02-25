const cmpChoice = document.getElementById("cmpChoice")
const userChoice = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const btns = document.querySelectorAll("button")

let result;
let myChoice;
let cmp;
btns.forEach(btn =>{
    btn.addEventListener("click", e =>{
       myChoice = e.target.id
       userChoice.textContent = myChoice 
       randomChoice(myChoice)
    })
})

const rockPaperScissor = ["Rock", "Paper", "Scissor"]

function randomChoice(whatYouClicked){
     const randomNum = Math.floor(Math.random() * rockPaperScissor.length)
     cmp = rockPaperScissor[randomNum]
     cmpChoice.textContent = cmp
   
     if(cmp == whatYouClicked){
        result = "It is a draw 🎶";
     }
     else if(cmp == "Rock" && whatYouClicked == "Paper"){
        result = "You win!😊"
     }
     else if(cmp =="Rock" && whatYouClicked == "Scissor"){
        result = "You Lose 😢"
     }
     else if(cmp =="Paper" && whatYouClicked == "Scissor"){
        result = "You Win 😊"
     }
     else if(cmp == "Paper" && whatYouClicked == "Rock"){
        result = "You Lose 😢"
     }
     else if(cmp == "Scissor" && whatYouClicked == "Rock"){
        result = "You Win 😊"
     }
     else{
        result = "You Lose 😢"
     }
     resultDisplay.textContent = result;
     
}
