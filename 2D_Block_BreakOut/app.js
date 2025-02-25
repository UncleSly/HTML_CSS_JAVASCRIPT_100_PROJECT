const grid = document.getElementById('grid')

let bWidth = 560;
let bHeight = 300;
let userWidth = 100;
let xDirection = 2;
let yDirection = 2;

class Blockposition{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
    }
}
let ball;
let user;

let userPosition = [230, 10]
let userCurrentpos = userPosition

let ballPosition = [270, 30]
let ballCurrentPos = ballPosition

let moveBy = 10



 


const array =[
    new Blockposition(10, 270),
    new Blockposition(120, 270),
    new Blockposition(230, 270),
    new Blockposition(340, 270),
    new Blockposition(450, 270),
    new Blockposition(10, 240),
    new Blockposition(120, 240),
    new Blockposition(230, 240),
    new Blockposition(340, 240),
    new Blockposition(450, 240),
    new Blockposition(10, 210),
    new Blockposition(120, 210),
    new Blockposition(230, 210),
    new Blockposition(340, 210),
    new Blockposition(450, 210),
]

function blockMov(block, i){
        block.style.left = array[i].bottomLeft[0] + "px"
        block.style.bottom = array[i].bottomLeft[1] + "px"
}

function createBlock (){

    for(let i = 0; i < array.length; i++){
        const block  = document.createElement('div')
        block.classList.add("block")
        blockMov(block, i)
        grid.appendChild(block)
    }


}
createBlock()

function userfuc(){
    user = document.createElement("div")
    user.classList.add("user")
    user.style.left = userCurrentpos[0] + "px"
    user.style.bottom = userCurrentpos[1] + "px"
    document.addEventListener("keydown", moveUser)
    grid.appendChild(user)

}
userfuc()

function moveUser(e){

    if(e.key.startsWith("Arrow")){
        switch(e.key){
            case "ArrowLeft":
                if(userCurrentpos[0] > 0){
                userCurrentpos[0] -= moveBy
                user.style.left = userCurrentpos[0] + "px"
                }
                break;
            case "ArrowRight":
                if(userCurrentpos[0] < bWidth - userWidth){
                userCurrentpos[0] += moveBy
                user.style.left = userCurrentpos[0] + "px"
                }
                break;
        }
    }
    
}

function ballf(){
    ball = document.createElement("div")
    ball.classList.add('ball')
    ball.style.left = ballCurrentPos[0] + "px"
    ball.style.bottom = ballCurrentPos[1] + "px"
    grid.appendChild(ball)
}
ballf()
   const blockArray = Array.from(document.getElementsByClassName("block"))
   

function ballBlock(x, y, w, h,){
     blockArray.forEach(block => {
        let x2 = block.getBoundingClientRect().x
        let y2 = block.getBoundingClientRect().y
        let h2 = block.getBoundingClientRect().height
        let w2 = block.getBoundingClientRect().width
        
        if(x2+w2 >= x && x2 <= x + w && y2 + h2 >= y && y2 <= y + h){
            block.classList.remove("block")
            changeDirection()
        }
    })

    if(ballCurrentPos[0] + 20 >= userCurrentpos[0] && ballCurrentPos[0] <= userCurrentpos[0] + 100 && ballCurrentPos[1] + 20 >= userCurrentpos[1] && ballCurrentPos[1] <= userCurrentpos[1] + 20){
        changeDirection()
    }
}



function moveBall(){
        ballCurrentPos[0] += xDirection
        ballCurrentPos[1] += yDirection 
        ball.style.left = ballCurrentPos[0] + "px"
        ball.style.bottom = ballCurrentPos[1] + "px"
        checkCollision()
        youLose()
        let x = ball.getBoundingClientRect().x
        let y = ball.getBoundingClientRect().y
        let w = ball.getBoundingClientRect().width
        let h = ball.getBoundingClientRect().height
        ballBlock(x, y, w, h)
}
 let timeId = setInterval(moveBall, 30)

function checkCollision(){
    if( ballCurrentPos[0] >= bWidth - 20 || ballCurrentPos[1] >= bHeight - 20  || ballCurrentPos[0] <= 0) {
  
        changeDirection()
      
    }
}

function youLose(){
    if(ballCurrentPos[1] <= 0){
        clearInterval(timeId)
    }
}

function changeDirection(){
    if(xDirection === 2 && yDirection === 2){
          yDirection = -2
          return;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2
        return;
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2
        return;
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2
        return;
    }
}