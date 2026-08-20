// function(kya kaam karna hai), time_in_milliseconds(kitne time baad)

// executes once
setTimeout(function(){
    console.log("hello")
}, 2000);


// keeps executing every milliseconds specified
setInterval(function(){
    console.log("hello")
}, 2000);

// ======================== clearing ========================

let printHello = setTimeout(function(){
    console.log("hello")
}, 2000);

clearTimeout(printHello);


//======================

let printHello2 = setInterval(function(){
    console.log("hello")
}, 2000);

clearInterval(printHello2);


// usage example => building a counter counting from 10 - 0;
let start = 10;
let counter = setInterval(function(){
    if(start <= 0){
        clearInterval(counter);
        return;
    }
    console.log(start);
    start--;
}, 1000);