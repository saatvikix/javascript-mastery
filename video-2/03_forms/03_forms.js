let userName = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (details)=>{
    details.preventDefault();  // stop the form from submitting before the checks


    //validating user input via js
    if(userName.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial";
    }
    else{
        document.querySelector("#hide").style.display = "none";
    }
});


// ==== regex based validation ==========================================

// form.addEventListener("submit", (details)=>{
//     details.preventDefault();  // 


//     let userNameRegex = /^[a-zA-Z]{3,}$/;

//     if(!userNameRegex.test(userName.value)){
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else{
//         document.querySelector("#hide").style.display = "none";
//     }
// });