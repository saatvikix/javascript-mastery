//this is a special keyword.
// this ka matlab different contexts me alag ho jata hai, unlike other keywords


// value of this in:

// global scope - window
console.log(this); // window object
// window hai pradhan mantri - supreme leader

//==========================================
// function scope - still window
function foo() {
    console.log(this);
} 

foo(); // still window
// ===========================================

//method scope => poora object
// method = > a function defined in an object. (defined with function keyword)

let obj = {
    name : "harsh",
    age : 17,
    sayName: function() {
        console.log(this.name); 
    },

    printAge: function() {
        console.log(this.age);
    }
}

obj.sayName(); // here, this is the object obj

obj.printAge(); // 17


// agar arrow fucntion use kiya, toh this object ke bararbar nahi, window ke barabar ho jayega firse

// agar method ke andar ek aur function hai, toh usko arrow function banaao nahi toh this firse window ban jayega 

//====================== event handler ==============================

let h1 = document.querySelector("h1");

// this woh hoga jispe listener laga hai
h1.addEventListener("click", function() {
    console.log(this);
})  


// ==================== class =====================

class Abcd {
    constructor(){
        this.a = 12; 
    }  
}

let val = new Abcd();  // classes me this ki value blank object hoti hai if called with new
console.log(obj);


//========================

// 1. arrow function this ki value apne parent se lete hain 