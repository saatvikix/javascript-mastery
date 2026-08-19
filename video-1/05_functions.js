// why do we need functions?
// 1. reusability
// 2. modularity
// 3. code tab hi chale jab chalana hai


// ==== this is a function expression ====
// variable ka naam hi function ka naam hai
let fnc = function(){
    console.log("hello");
};

fnc(); // call karne ke liye variable ke naame se hi call karo

// ==== this is a function statement ====
function abcd() {
    console.log("hello");
}

// ==== fat arrow function ====

let fnc2 = ()=> {
    console.log("huihui");
}

fnc2();


// =================================== REST AND SPRAD OPERATOR =======================================

// jab arguments bot saare ho, toh utne hi parameters banane padte hain
// isi se bachne ke liye, we use spread operator

// agar "..." function ke parameter space me lage, => rest
// agar "..." arrays / objects me lage, to spread

function print(a, b, ...val) {
    console.log(a, b, val);
}

print(1, 2, 3, 4, 5, 6); // OUTPUT => 1 2 [3, 4, 5, 6]

// ============================== FIRST CLASS FUCNTIONS =======================================

// functions ko variable ki tarah treat kar skte hain
// jaha jaha hum koi value daal skte hain, woha woha function daal skte hian

let abcd = function(){}

function pqr(val) {
    val();
}

pqr(function() {
    console.log("hello");
});

// 1. functions can be stored in variables
// 2. functions can be passed as arguments
// 3. functions can be returned


// ==============================================================

// ==== HIGH ORDER FUCNTIONS =====
// woh function jo koi function return kare, 
// ya ek function as a parameter accept kare 

function abcd(){
    return function(){
        console.log("teri maa ki")
    }
}

abcd()(); // execute the function that abcd returns


//==========================pure vs impure functions========================================

// pure functions => no side effects (bahar ki value na badle)
// impure functions => side effects

let a = 12;
function abcd(){ // pure
    console.log(a); 
}

function hui(){  // impure
    a++;
    console.log(a);
}


//=============================CLOSURE=====================================
// function jo return kare ek aur function
// Return hone wala function parent function ka koi variable use karega

function abcd(){
    let a  = 12;
    return function() {
        console.log(a);
    }
}

//=============================lexical scoping=========================================

function abcd(){

    let a = 12;
    function defg() {
        let b = 13;

        function ghij() {
            let c = 14;
            console.log(a, b, c);
        }
    }
}

// 1. abcd ki data uske saare child functions me use ho skta hai
// 2. defg ka uske child functions me
// 3. ghij ka uske child functions me
// kisi ka bhi data, uske parent me use nahi skta... basically, top to down scope



//=============================immediately invoked function expression=====================================

(function() {

})();

// ============= hoisting ==================

// this works ( function statements )
abcd();
function abcd(){
    console.log("hello");
}

// this doesnt ( function expressions )
pqr();
let pqr = function() {
    console.log("hello");
}


