let typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fantatic", "Cool", "Famous", "Weird"]

index = 0;
charIndex = 0;
const eachWord = () =>{
    if(charIndex < words[index].length){
       typedTextSpan.textContent += words[index][charIndex]
       charIndex++
       setTimeout(eachWord, 300)
    }else{
        setTimeout(erase, 1000)
    }
         
}

document.addEventListener("DOMContentLoaded", () => {
    if(words.length){
        setTimeout(eachWord, 1000)
    }
})

const erase = () =>{
    if(charIndex > 0){
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, 200)
    }else{
        index++
        if(index == words.length){
            index = 0
        }
        setTimeout(eachWord, 900)
    }
}


