// primitive data types
// 7 types : String, Number, Boolean, Null, Undefined, Symbol,  BigInt 

 

//refrence data types(non primitive)
//Array, Objects, Functions'

const heros  = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Dhaval",
    age: 24,
}
console.log(myObj.name);

const myFunction=function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename  = "dhavaldotcom"
let anotheNameme = myYoutubename

console.log(myYoutubename);
console.log(anotheNameme);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dhaval@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);

 

