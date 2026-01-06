const email = []; // Try changing this value to test

/*
if(email){
    console.log("You have entered email as: " + email)
}else{
    console.log("Please enter your email!")
}
*/

// Falsy values in JavaScript are:
// false, 0, -0, "", null, undefined, NaN, bigint 0n, 

// Everything else is Truthy
// Truthy values examples:
// "0", 'false', " ",hello", 1, -1, [], {}, function(){}, true, 3.14, -3.14, Infinity, -Infinity, bigint 1n

/*
if(email.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
        console.log("Object is empty")};

*/

// nullish Coalescing Operator (??): null or undefined
let val1;
//val1 = 5 ?? 10;  
//val1 = null ?? 10;
//val1 = undefined ?? 15;

//console.log(val1); // Output: 10

const iceTeaPrice = 100;
iceTeaPrice >= 120 ? console.log("Too expensive") : console.log("Less than 100");


