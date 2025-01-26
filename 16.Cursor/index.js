const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', (e)=>{
   moveCursor(e.x, e.y)
})

const moveCursor = (x, y) =>{
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}