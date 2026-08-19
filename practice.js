let start = 10;
let counter = setInterval(function(){
    if(start <= 5){
        clearInterval(counter);
    }
    console.log(start);
    start--;
}, 1000);