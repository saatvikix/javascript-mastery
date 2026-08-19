let obj = {
    name : "Saatvik",
    interests : {
        love : "Shreya",
        hobby : "Music",
        artist : {
            pop : "Justin Bieber",
            synthwave : "The Midnight",
        }
    }
}

// accessing ====================================================
console.log( obj.name );
console.log( obj['name'] );
console.log(obj.interests.artist.synthwave)

// object destructuring =========================================

let {pop, synthwave} = obj.interests.artist;
console.log(pop);
console.log(synthwave);

// FOR IN LOOP ===================================================

for( let property in obj ) {
     console.log(property, " : ", obj[property]);
}

// key and value arrays ==========================================
let keys = Object.keys(obj);
let values = Object.values(obj);


// ===============================================================

let obj2 = Object.assign( {}, obj1 );           // creates a copy... 
let obj3 = {...obj1};                           // also creates a copy...
let obj4 = JSON.parse( JSON.stringify(obj1) )   // creates a deep copy 
