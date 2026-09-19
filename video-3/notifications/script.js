let container = document.querySelector("#notifArea");

function notifMaker(config) {

    return function(text) {

        let div = document.createElement("div");
        div.classList.add("notif");
        div.innerHTML = `<p>${text}<p>`;
        div.style.color = config.color;

        container.appendChild(div);

        setTimeout(()=>{
            container.removeChild(div);
        }, config.duration * 1000)

    }

}

let notif_3_sec = notifMaker({
    duration : 3,
    color: "red"  
})

let notif_5_sec = notifMaker({
    duration : 5,
    color : "blue"
})


