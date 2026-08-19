const main = document.querySelector("#main");

window.addEventListener("mousemove", (dets) => {
    main.style.top = dets.clientY + "px";
    main.style.left = dets.clientX + "px";
})
