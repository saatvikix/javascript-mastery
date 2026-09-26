// async await humein promises ke .then() aur .catch() se bachata hai

let pr = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        let num = Math.random() * 10;

        if(num > 5) {
            resolve(num);
        }
        else {
            reject("FUCK YOU!");
        }
    }, 1000);
});

// async keyword helps us use await
async function getSomething() {
    try {
        let val = await pr;  // wait karo pr ka. 
        console.log("got the value: ", pr);
    // jab tak pending state me hai, aage ka code nahi chalega
    }
    catch(err) {
        console.log("failure message from promise: ", err);
    }
}   

while(true) getSomething();