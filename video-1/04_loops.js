//for, while, forEach are mostly enough. Sb ka baap hai for
// why so many?? talwar se bhindi nahi kaatni chahiye


// for : 
//     kaha se jana hai => kaha tak jana hai => kaise jana hai

// while :
//     kaha se jana hai => kab rukna hai => kaise jana hai

//==================================================================

// do-while :
//    do excecutes at least once, even if the condition is false
let i = 1;

do{
    console.log(i);
    i++;
}
while(i<2);

// forEach

let arr = [1,2,3,4,5];
arr.forEach( (element) => {
    element *= 2;
} )