const user_form = document.querySelector("form");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const nameRegex = /^[A-Za-z]{3,}$/;


user_form.addEventListener("submit", (content)=>{
    
    content.preventDefault();

    document.querySelector("#name_error").style.display = "none";
    document.querySelector("#email_error").style.display = "none";
    document.querySelector("#pwd_error").style.display = "none";


    let user_name = document.querySelector("#user_name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let validated = true;

    if(!user_name_validate(user_name)) {
        validated = false;
    }

    if(!email_validate(email)) {
        validated = false;
    }

    if(!password_validate(password)) {
        validated = false;
    }

    if(validated) {
        console.log("submitted");
        document.querySelector("#success").style.display = "initial";
    }
    else{
        console.log("errors");
    }
})

function user_name_validate(user_name) {
    if(!nameRegex.test(user_name)) {
        document.querySelector("#name_error").style.display = "initial";
        return false;
    }
    else{
        document.querySelector("#name_error").style.display = "none";
        return true;
    }

}

function email_validate(email) {
    if(!emailRegex.test(email)) {
        document.querySelector("#email_error").style.display = "initial";
        return false;
    }
    else{
        document.querySelector("#email_error").style.display = "none";
        return true;
    }

}

function password_validate(pwd) {
    if(!passwordRegex.test(pwd)) {
        document.querySelector("#pwd_error").style.display = "initial";
        return false;
    }
    else{
        document.querySelector("#pwd_error").style.display = "none";
        return true;
    }

}