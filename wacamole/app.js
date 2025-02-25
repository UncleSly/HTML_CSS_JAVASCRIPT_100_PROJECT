const cards = Array.from(document.getElementsByClassName('card'))
const score = document.getElementById("score")
const timer = document.getElementById("time")

let hitPosition;
let result = 0;
let time = 60
let timeId;
const addMole = () => {
    cards.forEach(card =>{
        card.classList.remove("mole")
    })
   const rand = cards[Math.floor(Math.random() * cards.length)]
   rand.classList.add("mole")
   hitPosition = rand.id
}

function moveMole() {
   timeId = setInterval(addMole, 2000)
   timeCall()
}

moveMole()

function timeCall(){
    time--
    timer.textContent = time
  if(time == 0){
    clearInterval(timeId)
    clearInterval(timeCallId)
    alert(`You score is ${result}`)
  }
 
}

let timeCallId = setInterval(timeCall, 1000)


cards.forEach(card =>{
    card.addEventListener("mousedown", ()=>{
        if(card.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null 
        }
    })

})