// jispe event aya, agar uspe eventListener nahi hai, toh woh event parent pe jayega
// agar parent pe nahi hai, toh grandparent pe.
// aise aise, upar move karta rahega


let main = document.querySelector("#main");

main.addEventListener("click", ()=>{
    console.log("clicked at the main");   // eventObject.target batata hai ki kidhr click hua tha
})

// event child listener pe ruk nahi jata.. fir bhi parents pe jata rehta hain. toh agar child aur parent dono ke listener hain, toh dono execute honge


// =========== the truth =========================

//Jab bhi click karte hian ya koi event raise karte hain, toh event flow doo phases me hota hai:
// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase

// PHASE 1. Event top level element se neeche ki taraf ayega
// PHASE 2. Event bottom most elemest se parent ki taraf jayega

// Hamesha PHASE 1 pehle chalta hai, but by default off rehta hai. Agar on karein, toh woh bevaiour dikhega. 
// for this, we need to turn on capture phase

main.addEventListener("click", ()=>{
    console.log("clicked at the main");   
}, true)  // true means capture phase on

