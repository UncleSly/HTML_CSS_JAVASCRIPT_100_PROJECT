const btn = document.querySelector("button");
const vidContent = document.querySelector(".video_container")
const play = document.querySelector("img")
const vid = document.querySelector("video")

play.addEventListener("click", () =>{
    vidContent.classList.remove("active")
})
btn.addEventListener("click", () =>{
   vidContent.classList.add("active")
    vid.pause()
    vid.currentTime = 0;
})