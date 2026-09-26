// THIS IS A CONSTRUCTIOR FUNCTION
function CreateStudent(name, age, sex){
    this.name = name,
    this.age = age,
    this.sex = sex
}

let saatvik = new CreateStudent("Saatvik", 21, 'M');  // new ki wajah se ek blank object banta hai, and fucntion ka this us black object ko point karta hai
let justin = new CreateStudent("Justin", 30, 'M');

// new ku wajah se, jo jo bhi hum this. kar ke banayenge, woh us object ke pass apna khud ka hoga
// sometimes, we want to make things specific to class, not specific to instance
// for example, in a class Pencil, we are making every one of them 

CreateStudent.prototype.type = "Human";
// agar koi constructor function koi property apne protoype pe laga le, toh wo property sabhi instances pe automatically chali jati hai
// protoype is like a shared memory

