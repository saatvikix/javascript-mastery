// Promises
// Promise jab banate hain, toh woh ya toh resolve hoga ya reject
// we can't say what will happen, but me have to handle both the cases in out code

// while promise is not resolved, it stays in pending state

let myPromise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        let rn = Math.random() * 10;

        if(rn > 5) {
            resolve("Success: " + rn);
        } else {
            reject("Failed: " + rn);
        }

    }, 3000);
});

myPromise
.then((message) => console.log(message))
.catch((message) => console.log(message));


