const arrayCard = [
    {
        name: "cat",
        img: "images/cat.webp"
    },
    {
        name: "eye",
        img: "images/eye.webp"
    },
    {
        name: "flower",
        img: "images/flower.jpg"
    },
    {
        name: "music",
        img: "images/music.webp"
    },
    {
        name: "road",
        img: "images/road.jpeg"
    },
    {
        name: "space_ship",
        img: "images/space_ship.webp"
    },
    {
        name: "cat",
        img: "images/cat.webp"
    },
    {
        name: "eye",
        img: "images/eye.webp"
    },
    {
        name: "flower",
        img: "images/flower.jpg"
    },
    {
        name: "music",
        img: "images/music.webp"
    },
    {
        name: "road",
        img: "images/road.jpeg"
    },
    {
        name: "space_ship",
        img: "images/space_ship.webp"
    }
]

let arrayCardNames = [];
let divImgId = []
let cardwon = []


arrayCard.sort(()=> 0.5 - Math.random())

const gridCards = document.getElementById("container")
const score = document.getElementById('score')

function createCard(){
    for(let i = 0; i < arrayCard.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/cover.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        gridCards.appendChild(card)
    }
}
createCard()

function flipcard(){
    const id = this.getAttribute("data-id")
    arrayCardNames.push(arrayCard[id].name);
    divImgId.push(id)
    this.setAttribute("src", arrayCard[id].img)
    if(arrayCardNames.length === 2){
        setTimeout(checkMatch, 500)
    }
}

const divImg = document.querySelectorAll("img")

function checkMatch(){
   if(arrayCardNames[0] === arrayCardNames[1]){
      divImg[divImgId[0]].setAttribute("src", "images/white.jpg")
      divImg[divImgId[1]].setAttribute("src", "images/white.jpg")
      divImg[divImgId[0]].removeEventListener("click", flipcard)
      divImg[divImgId[1]].removeEventListener("click", flipcard)
      cardwon.push(arrayCardNames[0])
   }else {
     divImg[divImgId[0]].setAttribute("src", "images/cover.jpg")
     divImg[divImgId[1]].setAttribute("src", "images/cover.jpg")
   }
   score.textContent = cardwon.length
   arrayCardNames = []
   divImgId = []
   if(cardwon.length === arrayCard.length/2){
      alert(`Congratulations!!! You found all the ${cardwon.length} cards`)
      score.textContent = `👏 Bravo you found all the cards`
   }
}

