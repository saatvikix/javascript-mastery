// var, let, const - line-by-line comparison

// decalring & initialize;
a = 12;
var a;          // declare
var a = 12;     // declare & initialize
let a = 12;
const a = 12;  // here, we're declaring a constant
// const a; => can't do this

// problems with var
//  1. window mein add hota hai
//  2. function scoped hota hai
//  3. firse declare kar skte hain and error nahi ayega



// ======================================================
//               SCOPE (global, block, functional)
//=======================================================

// - let and const follow block scope
// - var follows function scope

function foo() {
    if(true) {
        var a = 12;
    }
    console.log(a); // var can be used here too
}


let a = 12;  //can be used throughout the file (global scope)

//blocks - if else, loops, function bodies
{
    var b = 13;  // var doesnt repect the block. it is still global
    let c = 14; // block scoped
}


// ======================================================
//               Temporal Dead Zone
//=======================================================

console.log(a);    // ReferenceError (can't access before init)


let a = 12;       

// console.log(a) ko pata hai, ki a declare hua hai. 

// TDZ =  utna area, jitne me JS ko pata hai ki variable exist akrta hai, but access nahi kar skte

// line 46 se line 48 tak TDZ hai 'a' ka

// let and const ke liye, declare and initialization se upar ka sara area us vairable ke liye TDZ hai


console.log(b);

var b = 10;
// the above code gives us 'undefined'

//  FINAL INTERVIEW POINTS
    // 1. let and const give 'reference error' if accessed in tdz
    // 2. var gives 'undefined'



// ======================================================
//               HOISTING
//=======================================================

//  - hoisting: 
//      - jab ek variable banate hain, woh do hisso me toot jata hai
//      - declaration upar jati hai
//      - initialization neeche reh jati hai

// - TDZ happens because of hoisting