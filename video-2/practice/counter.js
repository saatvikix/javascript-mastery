let input = document.querySelector("input");
let counter = document.querySelector("span");

input.addEventListener("input", ()=>{
    let length = input.value.length;
    counter.textContent = length;
})

// button.addEventListener("click", ()=>{
//     console.dir(input);
// })