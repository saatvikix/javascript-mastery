let init = 0;
const progress = document.querySelector(".progress-bar");
const startBtn = document.querySelector(".start-button");

startBtn.addEventListener("click", () => {
    let download = setInterval(() => {

        if (init === 100) {

            document.querySelector("h1").innerText = "Download Finished";
            document.querySelector(".status").textContent = "Your file is downloaded";
            startBtn.style.display = "none";
            clearInterval(download);

        }
        else {
            init++;
            progress.style.width = init + "%";
            document.querySelector(".percentage").textContent = init + "%";
        }

    }, (3*1000)/100)
    
})

