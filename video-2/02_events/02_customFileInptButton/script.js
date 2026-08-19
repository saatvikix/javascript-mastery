const button = document.querySelector("#button");
const input = document.querySelector("input");

button.addEventListener("click", function() {
    input.click();
})

input.addEventListener("change", (details)=>{
    button.textContent = (details.target?.files[0].name);
})