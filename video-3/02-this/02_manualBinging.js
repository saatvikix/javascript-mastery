// this, call, apply, bind

// function ko call karte waqt hum set kr sktte hain ki uske this ki value kya hogi 

let obj = {
    name : "Saatvk"
}

function sayThis() {
    console.log(this);
}

sayThis(); // => window
sayThis.call(); // => window

sayThis.call(obj); // => obj


//========================================================
// sending multiple values
//========================================================

function objectAndData(obj, name, age) {
    console.log(this);
    console.log(obj);
    console.log(name);
    console.log(age);
}

// the call method
objectAndData.call(obj, "harsh", 17);

// apply method => just two arguments (object, and array of data)
objectAndData.apply(obj, ["harsh", 17]);

// bind returns a new function
let newFunc = objectAndData.bind(obj, "harsh", 17);

// bind makes a new copy of the function. and setthing the this value equal to obj