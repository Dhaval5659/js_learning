//singleton
//Object.create

const mysym = Symbol("key1")

//object literals
const JsUser = {
    name: "Dhaval",
    "fullName": "Dhaval Mangukiya",
    mysym : "key1",
    age: "24",
    location: "AHM",
    email: "dhavalmangukiya@gmail.com",
    isLoggedIn: false,
    laseLogedInDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);           //Better way 
console.log(JsUser["fullName"]);       //When key has space or special char
console.log(JsUser["mysym"]);

JsUser.email = "dhaval@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "dhaval@ms.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());