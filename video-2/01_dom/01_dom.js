// DOM Manipulation : 
// 1. Selecting elements from html
// 2. text badalna
// 3. html badalna
// 4. css badalna
// 5. attribute
// 6. event listeners


//=========================== SELECTING ELEMENTS =====================================

const textbox = document.getElementById("textBox");
const elements = document.getElementsByClassName("textBox")[0];  // returns an array-like structure
const elements = document.getElementsByTagName("div");  // returns an array-like structure

//querySelector (the preffered way) uses CSS selectors
document.querySelector("h1");  // first <h1>        
document.querySelector("div#box h1");  // descendant h1      
document.querySelectorAll("h1.little-headings");  // returns a node list

// console.dir() gives an interactive layout


//=========================== MANIPULATING TEXT + HTML =====================================

let h1 = document.querySelector("h1");
h1.innerHTML = "Hello World";
h1.innerHTML = "<i>Hello World</i>"   

//these two work specifically for text
h1.innerText = "Hello World";
h1.textContent = "Hello World";  


// =========================== MANIPULATING ATTRIBUTES ==============================
// <a href="google.com">  a=>tag; href=>attribute; google.com=>value
    // 1. getAttribute
    // 2. setAttribute
    // 3. removeAttribute  

//-=-=-=-=-= setting -=-=-=-=-=-=-=
let link = document.querySelector("a");
link.href = "https://google.com"; // can do this directly
link.setAttribute("href", "https://google.com"); // also can do this directly

//-=-=-=-=-= getting -=-=-=-=-=-=-=
let image = document.querySelector("img");
let url = image.getAttribute("src");

//-=-=-=-=-= removing -=-=-=-=-=-=-=
let link = document.querySelector("a");
link.removeAttribute("href");


// ===============================  DYNAMIC DOM MANINPULATION ============================
    // 1. createElement
    // 2. appendChild
    // 3. removeChild
    // 4. prepend


let h1 = document.createElement("h1");  // create element
h1.innerText = "Hello World";
document.body.append(h1);             // append or prepend
// prepend pehle aa jata hai 


let h1 = document.querySelector("h1");
h1.remove();  


// ================= CHANGING STYLE ===========

// manually adding style
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontFamily = "Gilroy";

// dynamically adding a style via class
let h1 = document.querySelector("h1");
h1.classList.add("big");

// dynamically removing a style of a class
h1.classList.remove("big");

// hai toh hatao, nahi hai toh lagaao  
h1.classList.toggle("big");