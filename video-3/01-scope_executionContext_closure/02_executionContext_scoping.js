// execution context => woh dabba, jaha saare variables and code hai... and code bhi wohi chalta hai.
// => yeh dabba function ke liye banta hai

// JS sbse pehle jaise hi koi function dekhte hai, toh woh uska execution context banata hai

// yeh ek process hai jo ko do different phases me chalta hai
// 1. memory phase
// 2. execution phase 



// ======================================================================
// lexical scoping v/s dynamic scoping
// ======================================================================

// lexical scoping (the regular scoping we all know)
    // 1. where we physically are
    // 2. defines where all we can access what. 

    function abcd(){
        let a = 18; // can access it throughout the function

        function defg() {
            // can access a here as well
        }
    }

// dynamic scoping (doenst exist in js)
// - the value you get depends on where you're accessing it from

{   let a = 12;

    function abc() {
        console.log(a);
    }

    function defg() {
        let a = 10;
        abcd();  // since JS isnt' dynamically scoped, we still get a as the input
    }
}