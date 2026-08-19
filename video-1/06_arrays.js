// =============== Array methods ======================
// push() 
// pop()      ==> end se hatayega
// shift()    ==> starting se hatayega
// unshift(a) ==> starting me a daal dega

// splice(index, deleteCount)  => // modifies the original array

let arr = [1,2,3,4,5];
let arr2 = arr.splice(1, 2);
console.log(arr);   // 1,4,5
console.log(arr2);  // 2,3



let arr3 = [1,2,3];
arr3.splice(1,0, 44, 33);
console.log(arr3);  // 1,44,33,2,3

// slice(startIndex, endIndex(exclusive))  => // returns a new array

let arr1 = [1,2,3,4,5];
let arr2 = arr1.slice(1, 3);
console.log(arr1);  // 1,2,3,4,5
console.log(arr2);  // 2,3

// reverse()  ==> modifies original

// sort()     ==> modifies original

let arr1 = [3,5,1,3,10,21,15,13,27];
arr1.sort( function(a,b) {     // like comparator in java
    return a-b;
} )

// =======================================

// map()  => tabhi use karna hai jab new array banan hai, purane array ke data ke base pe
let arr = [1,2,3,4,5];
arr = arr.map( (element) => {
    return (element*2)
} )

console.log(arr);  // 2,4,6,8,10

// filter()  => true ya false dete hain... for elements not returned, it doesnt give undefined.. just doesnt add them
                //   true, toh add karo.. nahi toh nahi kari
let arr = [1,2,3,4,5];
arr = arr.filter( (element) => {
    if(element % 2 == 0) {
        return true
    }
} )

console.log(arr);


// reduce() ==> saare elements ko use kar ke ek final elment banana

let arr = [1,2,3,4,5]
let sum = arr.reduce(function(accumulator, currentValue) {     
    return accumulator + currentValue;
}, 0);   // accumulator ki initial value zero

// acculumator : 0;  0 + 1 = 1;
// currentValue : 1;  1 + 2 = 3;
// accumulator : 3;   3 + 3 = 6;
// currentValue : 3;  6 + 4 = 10;
// accumulator : 10;  10 + 5 = 15;

console.log(sum);



// spread operator

//unpacking
let arr = [1,2,3,4,5,6,7];
let [a,b,,d] = arr;

let copiedArray = [...arr];

console.log(a); // 1
console.log(b); // 2
console.log(d); // 4