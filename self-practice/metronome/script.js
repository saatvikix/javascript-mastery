const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const circles = document.querySelectorAll(".circles");
const playBtn = document.querySelector("button");
const click1 = new Audio("./clicks/click1.mp3");
const click2 = new Audio("./clicks/click2.mp3");

let bpm = 98;

input.addEventListener("input", () => {
    bpm = input.value;
    h1.textContent = bpm + " BPM";
})

playBtn.addEventListener("click", ()=> {

    let i = 0;

    setInterval(() => {
        
        if(i < 4) {

            if(i == 0) {
                click1.play();
            }
            else {
                click2.play();
            }

            i++;
        }
        else {
            i = 0;
        }
        

    }, (60/bpm)*1000)


})
