class Pencil {
    constructor (name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;

    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);  
    }
}

let mypencil = new Pencil("natraj", "parker", 20, "red");

// extends in classes
class DrawingPencil extends Pencil {
    constructor(name, company, price, color, type, thickness){
        super(name, company, price, color);
        this.thickness = thickness;
    }
}

// classical inheritance vs protypical inheritacnce
// CI => 
    //  Classes banana aur unse extend kar lene. Jab parent classes se kuchh inherit karte hain
    // class class se inherit karti hai

// PI => 
    // Specific to JS
    // Object Object se inherit karta hai

let coffee = {
    color : "dark",
    drink: function() {
        console.log("tasty");
    }
}

let myCoffee = Object.create(coffee); // coffee ka prototype becomes myCoffee's prototype