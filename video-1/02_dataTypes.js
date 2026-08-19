// primitives -> copy karne pe real copy
// reference -> copy karne pe jsut parent ka reference
    // - saare brackets wale.. [], {}, ()

let a = [1,2,3];
let b = a;
a[1] = 4;

console.log(b); // [1, 4, 3]


// null      => Jan boojh ke koi value nahi di (maybe initialized it as null). Khud dete hain
// undefined => Variable banaya, but value nahi di. By default milti hai.

//=====================================
//          type coersion
//=====================================

// type automatically change ho jata hai
"5" + 1; // '51'    (because + can also concatenate, and on of the operands is string)
"5" - 1; // 4       (because - can only subtract)


//=====================================
//          truthy vs falsy
//=====================================

//false => 0, false, "", null, undefined, NaN, document.all
//true => any other value

// trick to check : !!(thing)
