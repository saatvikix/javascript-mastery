let button = document.querySelector("button");

button.addEventListener("click", ()=>{
    console.log("clicked at the button");
}, true)

let main = document.querySelector("#main");

main.addEventListener("click", ()=>{
    console.log("clicked at the main");   // eventObject.target batata hai ki kidhr click hua tha
})