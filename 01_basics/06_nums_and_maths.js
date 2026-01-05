/*
const score = 400
console.log(score);

const balance = new Number(100)  // specificaly print data type 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber  = 123.895

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Maths <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//console.log(Math)
//console.log(Math.abs(4))
//console.log(Math.round(4.6))   
//console.log(Math.ceil(4.2))     // choose upper >>> ceil
//console.log(Math.floor(4.2))    // choose lower >>> floor
//console.log(Math.min(4,3,5,8))
//console.log(Math.max(4,8,2,1))

console.log(Math.random())              // gives value between 0 and 1
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
