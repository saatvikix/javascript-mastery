// browser mein page par koi bhi harkat karo, it's an event
// event => koi action hua
// event listener => action ka reaction deta hai

btn.addEventListener("click", function() {
    
})

// to remove, you must have the fucntion defined outside, and mention it both times

function abc(){
    //do something
}

btn.addEventListener("click", abc);
btn.removeEventListener("click", abc);

// ====================== input event ======================
const input = document.querySelector("input");
input.addEventListener("input", function(inputData) {
    
    console.log(inputData.data);
});

// ====================== change event ======================
// tab chalta hai jab input, select ya textarea mein koi change ho jaye

// <select name="" id="">
//     <option value="" id="" selected disabled>Choose</option>
//     <option value="apple" id="">Apple</option>
//     <option value="samsung" id="">Samsung</option>
//     <option value="oneplus" id="">OnePlus</option>
//     <option value="nothing" id="">Nothing</option>
//     <option value="oppo" id="">Oppo</option>
// </select>

const select = document.querySelector("select");
select.addEventListener("change", function(phone) {
    console.log(phone.target.value);
})


//=================== screen pe type karna =========================
window.addEventListener("keydown", (char)=>{
    if(char.key == " "){
        document.querySelector("h1").innerText = "Space";
        return;
    }
    document.querySelector("h1").innerText = char.key
})