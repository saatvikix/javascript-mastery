// closures are functions jo kisi parent function ke undar hote hain
// and, return hote hain
// and, parent function ka koi variable use karega 

//======================================================================

function multiplier(num) {
    
    return function() {
        for(let i = 0; i < 11; i++) {
            console.log(num * i);
        }
    }
}

let tableOf2 = multiplier(2);
let tableOf10 = multiplier(10);
tableOf2();
tableOf10();


// why is num preserved in the closure?

// it's true ki function khatam hone me func and it's variables khatam ho jate hain
// but jab closures bante hain, toh func aur uske variables ka ek backlink bana deta hai
// [[environment]] 